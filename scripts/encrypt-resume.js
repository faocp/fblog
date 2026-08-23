#!/usr/bin/env node
// Renders resume-source.md through Hugo's real markdown pipeline, then
// encrypts the resulting HTML with the same PBKDF2 -> AES-256-GCM scheme
// layouts/resume/single.html decrypts client-side. Run from the repo root:
//
//   node scripts/encrypt-resume.js
//
// Edit resume-source.md (gitignored, plain markdown, no front matter) and
// re-run any time you want to push an update.

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { webcrypto } = require('crypto');

const ROOT = process.cwd();
const SOURCE_PATH = path.join(ROOT, 'resume-source.md');
const TARGET_PATH = path.join(ROOT, 'content', 'resume', 'index.md');
const TEMP_CONTENT_DIR = path.join(ROOT, 'content', 'resume-source');
const TEMP_CONTENT_FILE = path.join(TEMP_CONTENT_DIR, 'index.md');
const BUILT_FRAGMENT_PATH = path.join(ROOT, 'public', 'resume-source', 'index.html');
const BUILT_FRAGMENT_DIR = path.join(ROOT, 'public', 'resume-source');

const ITERATIONS = 250000;

const NEWLINE = String.fromCharCode(10);
const CARRIAGE_RETURN = String.fromCharCode(13);
const CTRL_C = String.fromCharCode(3);
const CTRL_D = String.fromCharCode(4);
const BACKSPACE = String.fromCharCode(127);

function fail(msg) {
  console.error('error: ' + msg);
  process.exit(1);
}

function cleanupTempContent() {
  fs.rmSync(TEMP_CONTENT_DIR, { recursive: true, force: true });
}

function cleanupBuiltFragment() {
  fs.rmSync(BUILT_FRAGMENT_DIR, { recursive: true, force: true });
}

function promptHidden(question) {
  return new Promise((resolve) => {
    const stdin = process.stdin;
    process.stdout.write(question);
    let input = '';
    stdin.setRawMode(true);
    stdin.resume();
    stdin.setEncoding('utf8');
    const onData = (chunk) => {
      const chars = chunk.toString();
      for (let i = 0; i < chars.length; i++) {
        const char = chars[i];
        if (char === NEWLINE || char === CARRIAGE_RETURN) {
          stdin.setRawMode(false);
          stdin.pause();
          stdin.removeListener('data', onData);
          process.stdout.write(NEWLINE);
          resolve(input);
          return;
        } else if (char === CTRL_C || char === CTRL_D) {
          process.stdout.write(NEWLINE);
          process.exit(1);
        } else if (char === BACKSPACE) {
          input = input.slice(0, -1);
        } else {
          input += char;
        }
      }
    };
    stdin.on('data', onData);
  });
}

function bytesToBase64(bytes) {
  return Buffer.from(bytes).toString('base64');
}

function renderMarkdownToHtml(markdown) {
  fs.mkdirSync(TEMP_CONTENT_DIR, { recursive: true });
  fs.writeFileSync(
    TEMP_CONTENT_FILE,
    '+++\ntitle = "resume-source"\ntype = "resume-source"\ndate = "2024-01-01"\n+++\n\n' + markdown
  );

  try {
    execSync('hugo --minify=false', { cwd: ROOT, stdio: 'pipe' });
  } catch (err) {
    fail('hugo build failed:\n' + (err.stdout ? err.stdout.toString() : err.message));
  } finally {
    cleanupTempContent();
  }

  if (!fs.existsSync(BUILT_FRAGMENT_PATH)) {
    fail('expected build output not found at public/resume-source/index.html');
  }
  const built = fs.readFileSync(BUILT_FRAGMENT_PATH, 'utf8');
  cleanupBuiltFragment();

  const match = built.match(/<resume-fragment>([\s\S]*?)<\/resume-fragment>/);
  if (!match) fail('could not find rendered content wrapper; check layouts/resume-source/single.html');
  return match[1].trim();
}

async function encrypt(html, password) {
  const salt = webcrypto.getRandomValues(new Uint8Array(16));
  const iv = webcrypto.getRandomValues(new Uint8Array(12));
  const enc = new TextEncoder();

  const keyMaterial = await webcrypto.subtle.importKey(
    'raw', enc.encode(password), { name: 'PBKDF2' }, false, ['deriveKey']
  );
  const key = await webcrypto.subtle.deriveKey(
    { name: 'PBKDF2', salt, iterations: ITERATIONS, hash: 'SHA-256' },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt']
  );
  const ciphertext = await webcrypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, enc.encode(html));

  return {
    iterations: ITERATIONS,
    salt: bytesToBase64(salt),
    iv: bytesToBase64(iv),
    ciphertext: bytesToBase64(new Uint8Array(ciphertext)),
  };
}

async function main() {
  if (!fs.existsSync(SOURCE_PATH)) {
    fail(
      'no resume-source.md found at repo root.\n' +
      'Create it with plain markdown (no front matter needed) and re-run.'
    );
  }

  const markdown = fs.readFileSync(SOURCE_PATH, 'utf8');

  console.log('rendering resume-source.md through hugo...');
  const html = renderMarkdownToHtml(markdown);

  const password = await promptHidden('resume password: ');
  if (!password) fail('empty password');
  const confirm = await promptHidden('confirm password: ');
  if (password !== confirm) fail('passwords did not match');

  console.log('encrypting...');
  const enc = await encrypt(html, password);

  const frontMatter = '+++\n' +
    'title = "resume"\n' +
    'date = "' + new Date().toISOString().slice(0, 10) + '"\n' +
    'type = "resume"\n' +
    '\n' +
    '[params]\n' +
    '  iterations = ' + enc.iterations + '\n' +
    '  salt = "' + enc.salt + '"\n' +
    '  iv = "' + enc.iv + '"\n' +
    '  ciphertext = "' + enc.ciphertext + '"\n' +
    '+++\n';

  fs.writeFileSync(TARGET_PATH, frontMatter);
  console.log('wrote ' + path.relative(ROOT, TARGET_PATH));
  console.log('run `hugo server -D` and check /resume/ before committing.');
}

main();
