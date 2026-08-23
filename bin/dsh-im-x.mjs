#!/usr/bin/env node
// Bootstrap installer. It runs before any Harness is available, so there is no
// conversation or client locale to follow; its output is plain English.

import { readFile } from 'node:fs/promises';
import { homedir, tmpdir } from 'node:os';
import { isAbsolute, join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const PACKAGE_NAME = 'dsh-im-x';
const DEFAULT_SOURCE = 'dsh-im-x';
/**
 * Packages this plugin replaces. The upstream project and its per-channel
 * predecessors are all removed on install so two copies cannot both connect
 * the same bots.
 */
const LEGACY_PACKAGES = [
  '@xmanrui/dsh-im',
  '@xmanrui/dsh-feishu',
  '@xmanrui/dsh-weixin',
  '@xmanrui/dsh-dingtalk',
];

function usage() {
  console.log(`Usage:
  dsh-im-x install [--profile web] [--source <package-spec>]
  dsh-im-x uninstall [--profile web]

Examples:
  npx -y github:zaakirio/dsh-im-x install
  dsh-im-x install --source .`);
}

function takeOption(args, name, fallback) {
  const index = args.indexOf(name);
  if (index < 0) return fallback;
  const value = args[index + 1];
  if (!value || value.startsWith('--')) throw new Error(`${name} requires a value`);
  args.splice(index, 2);
  return value;
}

function runDsh(args) {
  const result = spawnSync('dsh', args, {
    cwd: tmpdir(),
    stdio: 'inherit',
    shell: false,
  });
  if (result.error?.code === 'ENOENT') {
    throw new Error('Could not find dsh. Install DeepSeek Harness and make sure dsh is on PATH.');
  }
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(`dsh exited with status ${result.status ?? 1}`);
}

async function directProfilePackages(profile) {
  const dshHome = process.env.DSH_HOME || join(homedir(), '.dsh');
  const profilePackage = join(dshHome, 'profiles', profile, 'package.json');
  try {
    const manifest = JSON.parse(await readFile(profilePackage, 'utf8'));
    const bundles = new Set(manifest.dsh?.profile?.bundles ?? []);
    const dependencies = manifest.dependencies ?? {};
    return new Set(LEGACY_PACKAGES.filter((name) => dependencies[name] || bundles.has(name)));
  } catch (error) {
    if (error?.code === 'ENOENT') return new Set();
    throw new Error(`Could not read the Harness config ${profilePackage}: ${error.message}`);
  }
}

const args = process.argv.slice(2);
const command = args.shift();

if (!command || command === '--help' || command === '-h') {
  usage();
  process.exit(0);
}

try {
  const profile = takeOption(args, '--profile', 'web');
  if (command === 'install') {
    const requested = takeOption(args, '--source', DEFAULT_SOURCE);
    const source = requested === '.' || requested === '..'
      || requested.startsWith('./') || requested.startsWith('../')
      ? resolve(process.cwd(), requested)
      : (isAbsolute(requested) ? requested : requested);
    if (args.length > 0) throw new Error(`Unrecognized arguments: ${args.join(' ')}`);

    const legacy = await directProfilePackages(profile);
    runDsh(['plugin', '--profile', profile, 'add', '--save-exact', source]);
    for (const packageName of legacy) {
      runDsh(['plugin', '--profile', profile, 'remove', packageName]);
    }
    console.log('\nThe IM bot plugin is installed. Restart dsh web, then open Settings -> Plugins -> IM Bot.');
    if (legacy.size > 0) {
      console.log('Replaced the standalone Feishu/WeChat/DingTalk plugins; existing credentials and QR bindings are unchanged.');
    }
  } else if (command === 'uninstall') {
    if (args.length > 0) throw new Error(`Unrecognized arguments: ${args.join(' ')}`);
    runDsh(['plugin', '--profile', profile, 'remove', PACKAGE_NAME]);
    console.log('\nThe IM bot plugin is uninstalled. Restart dsh web.');
  } else {
    throw new Error(`Unrecognized command: ${command}`);
  }
} catch (error) {
  console.error(`dsh-im: ${error.message}`);
  process.exit(1);
}
