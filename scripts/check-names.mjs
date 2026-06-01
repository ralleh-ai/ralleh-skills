#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const errors = [];
const exists = (p) => fs.existsSync(path.join(root, p));
const isDir = (p) => exists(p) && fs.statSync(path.join(root, p)).isDirectory();
const isFile = (p) => exists(p) && fs.statSync(path.join(root, p)).isFile();
const pascal = /^[A-Z][A-Za-z0-9]*$/;
const kebab = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const template = /^[A-Z0-9_]+_TEMPLATE\.md$/;
const companion = new Set(['README.md', 'INSTALL.md', 'DOCTOR.md', 'PROMPTS.md']);

for (const required of ['README.md', 'bundles/README.md', 'skills/README.md', 'docs/NAMING_STANDARD.md']) {
  if (!isFile(required)) errors.push(`missing required file: ${required}`);
}

if (isDir('bundles')) {
  for (const name of fs.readdirSync(path.join(root, 'bundles'))) {
    const rel = `bundles/${name}`;
    if (name === 'README.md') continue;
    if (!isDir(rel)) continue;
    if (!kebab.test(name)) errors.push(`bundle folder must be lowercase kebab-case: ${rel}`);
    if (!isFile(`${rel}/README.md`)) errors.push(`bundle missing README.md: ${rel}`);
    for (const child of fs.readdirSync(path.join(root, rel))) {
      if (child.endsWith('.md') && child !== 'README.md') errors.push(`bundle markdown must be README.md only: ${rel}/${child}`);
    }
  }
}

if (isDir('skills')) {
  for (const family of fs.readdirSync(path.join(root, 'skills'))) {
    const familyRel = `skills/${family}`;
    if (family === 'README.md') continue;
    if (!isDir(familyRel)) continue;
    if (!pascal.test(family)) errors.push(`skill family must be PascalCase: ${familyRel}`);
    if (!isFile(`${familyRel}/README.md`)) errors.push(`skill family missing README.md: ${familyRel}`);
    for (const item of fs.readdirSync(path.join(root, familyRel))) {
      const itemRel = `${familyRel}/${item}`;
      if (item === 'README.md') continue;
      if (isFile(itemRel) && item.endsWith('.md')) {
        errors.push(`loose skill markdown not allowed; create a skill folder: ${itemRel}`);
        continue;
      }
      if (!isDir(itemRel)) continue;
      if (!pascal.test(item)) errors.push(`skill folder must be PascalCase: ${itemRel}`);
      if (!isFile(`${itemRel}/README.md`)) errors.push(`skill missing README.md: ${itemRel}`);
      for (const file of fs.readdirSync(path.join(root, itemRel))) {
        const fileRel = `${itemRel}/${file}`;
        if (isDir(fileRel)) continue;
        if (file.endsWith('.md') && !companion.has(file)) {
          errors.push(`unsupported skill markdown filename: ${fileRel}; allowed: ${[...companion].join(', ')}`);
        }
      }
    }
  }
}

if (isDir('templates')) {
  for (const name of fs.readdirSync(path.join(root, 'templates'))) {
    const rel = `templates/${name}`;
    if (isFile(rel) && name.endsWith('.md') && !template.test(name)) {
      errors.push(`template markdown must match SCREAMING_SNAKE_TEMPLATE.md: ${rel}`);
    }
  }
}

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(path.join(root, dir), { withFileTypes: true })) {
    if (entry.name === '.git') continue;
    const rel = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(rel));
    else out.push(rel);
  }
  return out;
}

for (const md of walk('.').filter((p) => p.endsWith('.md'))) {
  const text = fs.readFileSync(path.join(root, md), 'utf8');
  const re = /\[[^\]]+\]\((?!https?:\/\/|mailto:|#)([^)]+)\)/g;
  let match;
  while ((match = re.exec(text))) {
    const target = match[1].split('#', 1)[0];
    if (!target) continue;
    const resolved = path.resolve(root, path.dirname(md), target);
    if (!fs.existsSync(resolved)) errors.push(`broken markdown link in ${md}: ${match[1]}`);
  }
}

if (errors.length) {
  console.error(errors.map((e) => `ERROR: ${e}`).join('\n'));
  process.exit(1);
}

console.log('Naming standard OK');
