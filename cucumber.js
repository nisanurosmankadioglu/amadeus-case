const dotenv = require("dotenv");
dotenv.config({ path: '.env'});

let api = [
  'src/feature/api/*.feature',
  '--require ./src/step/api/*.js',
  '--require ./reporter.js',
  '--format progress-bar',
  '-f json:./reports/test_report.json',
  `--format-options '{"snippetInterface": "synchronous"}'`,
  '--exit'
].join(' ');

let ui = [
  'src/feature/ui/*.feature',
  '--require ./src/step/ui/*.js',
  '--format progress-bar',
  '-f json:./reports/test_report.json',
  `--format-options '{"snippetInterface": "synchronous"}'`,
  '--exit'
].join(' ');

module.exports = {
  api: api,
  ui: ui,
}