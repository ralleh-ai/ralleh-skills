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
const companion = new Set(['README.md', 'INSTALL.md', 'DOCTOR.md', 'PROMPTS.md']);
const requiredSkillFiles = ['README.md', 'INSTALL.md', 'DOCTOR.md', 'PROMPTS.md'];
const requiredSkillReadmeSections = [/## What /, /## When /, /## Files in this skill/, /## Golden operating rule/];
const requiredFamilySections = ['## Purpose', '## Before using this family', '## Available skills', '## Selection rule', '## Completion standard'];
const allowedRootDirs = new Set(['.git', 'agents', 'docs', 'mcp', 'pages', 'scripts', 'skills']);
const forbiddenDirs = new Set(['bundle', 'bundles', 'template', 'templates', 'tmp', 'temp', 'scratch', 'drafts', 'archive']);
const forbiddenFilePatterns = [
  /(^|\/)TODO\.md$/i,
  /(^|\/)DRAFT/i,
  /(^|\/)SCRATCH/i,
  /(^|\/)TEMP/i,
  /\.tmp$/i,
  /\.bak$/i,
];
const placeholderText = [
  /example\.com/i,
  /you@example\.com/i,
  /changeme/i,
  /lorem ipsum/i,
];
const unsafeText = [
  /ignore (all )?(previous|prior) instructions/i,
  /do anything/i,
  /no questions asked/i,
  /delete .* without (asking|approval)/i,
  /always run/i,
  /curl .*\|\s*(sh|bash)/i,
];

for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
  if (entry.isDirectory() && !allowedRootDirs.has(entry.name)) errors.push(`unsupported root folder: ${entry.name}`);
}

for (const required of ['README.md', 'docs/NAMING_STANDARD.md', 'docs/GOLDEN_CONTENT_STANDARD.md', 'mcp/README.md', 'skills/README.md']) {
  if (!isFile(required)) errors.push(`missing required file: ${required}`);
}

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(path.join(root, dir), { withFileTypes: true })) {
    if (entry.name === '.git') continue;
    const rel = path.join(dir, entry.name).replace(/^\.\//, '');
    if (entry.isDirectory()) out.push(rel, ...walk(rel));
    else out.push(rel);
  }
  return out;
}

for (const rel of walk('.')) {
  const base = path.basename(rel);
  if (fs.statSync(path.join(root, rel)).isDirectory()) {
    if (forbiddenDirs.has(base.toLowerCase())) errors.push(`forbidden temp/non-golden folder: ${rel}`);
  } else {
    for (const pattern of forbiddenFilePatterns) {
      if (pattern.test(rel)) errors.push(`forbidden temp/draft file: ${rel}`);
    }
  }
}

if (isDir('pages')) {
  for (const name of fs.readdirSync(path.join(root, 'pages'))) {
    const rel = `pages/${name}`;
    if (!isDir(rel)) continue;
    if (!kebab.test(name)) errors.push(`page folder must be lowercase kebab-case: ${rel}`);
    if (!isFile(`${rel}/README.md`)) errors.push(`page missing README.md: ${rel}`);
  }
}


if (isDir('agents')) {
  const ignoredAgentDirs = new Set(['Definitions', 'Evaluation']);
  const requiredRoleFiles = ['README.md', 'SOUL.md', 'IDENTITY.md', 'AGENTS.md', 'SKILLS.md', 'WORKFLOWS.md', 'GUIDELINES.md', 'DOCTOR.md'];
  for (const name of fs.readdirSync(path.join(root, 'agents'))) {
    const roleRel = `agents/${name}`;
    if (!isDir(roleRel) || ignoredAgentDirs.has(name)) continue;
    if (!kebab.test(name)) errors.push(`agent role folder must be lowercase kebab-case: ${roleRel}`);
    for (const file of requiredRoleFiles) {
      if (!isFile(`${roleRel}/${file}`)) errors.push(`agent role missing required file: ${roleRel}/${file}`);
    }
    if (!isDir(`${roleRel}/examples`)) {
      errors.push(`agent role missing examples folder: ${roleRel}/examples`);
    } else {
      const examples = fs.readdirSync(path.join(root, roleRel, 'examples')).filter((f) => f.endsWith('.md'));
      if (!examples.length) errors.push(`agent role examples folder has no markdown examples: ${roleRel}/examples`);
    }
  }
}

if (isDir('skills')) {
  for (const family of fs.readdirSync(path.join(root, 'skills'))) {
    const familyRel = `skills/${family}`;
    if (family === 'README.md') continue;
    if (!isDir(familyRel)) continue;
    if (!pascal.test(family)) errors.push(`skill family must be PascalCase: ${familyRel}`);
    if (!isFile(`${familyRel}/README.md`)) {
      errors.push(`skill family missing README.md: ${familyRel}`);
    } else {
      const familyReadme = fs.readFileSync(path.join(root, familyRel, 'README.md'), 'utf8');
      for (const section of requiredFamilySections) {
        if (!familyReadme.includes(section)) errors.push(`skill family README missing section ${section}: ${familyRel}/README.md`);
      }
    }
    for (const item of fs.readdirSync(path.join(root, familyRel))) {
      const itemRel = `${familyRel}/${item}`;
      if (item === 'README.md') continue;
      if (isFile(itemRel) && item.endsWith('.md')) {
        errors.push(`loose skill markdown not allowed; create a skill folder: ${itemRel}`);
        continue;
      }
      if (!isDir(itemRel)) continue;
      if (!pascal.test(item)) errors.push(`skill folder must be PascalCase: ${itemRel}`);
      for (const required of requiredSkillFiles) {
        if (!isFile(`${itemRel}/${required}`)) errors.push(`skill missing required file: ${itemRel}/${required}`);
      }
      if (isFile(`${itemRel}/README.md`)) {
        const skillReadme = fs.readFileSync(path.join(root, itemRel, 'README.md'), 'utf8');
        const words = skillReadme.trim().split(/\s+/).filter(Boolean).length;
        if (words < 120) errors.push(`skill README too thin (<120 words): ${itemRel}/README.md`);
        for (const section of requiredSkillReadmeSections) {
          if (!section.test(skillReadme)) errors.push(`skill README missing required section ${section}: ${itemRel}/README.md`);
        }
      }
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

for (const md of walk('.').filter((p) => p.endsWith('.md'))) {
  const text = fs.readFileSync(path.join(root, md), 'utf8');
  const linkRe = /\[[^\]]+\]\((?!https?:\/\/|mailto:|#)([^)]+)\)/g;
  let match;
  while ((match = linkRe.exec(text))) {
    const target = match[1].split('#', 1)[0];
    if (!target) continue;
    const resolved = path.resolve(root, path.dirname(md), target);
    if (!fs.existsSync(resolved)) errors.push(`broken markdown link in ${md}: ${match[1]}`);
  }
  for (const pattern of unsafeText) {
    if (pattern.test(text)) errors.push(`unsafe/open-ended prompt language in ${md}: ${pattern}`);
  }
  for (const pattern of placeholderText) {
    if (pattern.test(text)) errors.push(`non-enterprise placeholder text in ${md}: ${pattern}`);
  }
}

if (errors.length) {
  console.error(errors.map((e) => `ERROR: ${e}`).join('\n'));
  process.exit(1);
}

console.log('Repo standard OK');
