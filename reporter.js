var reporter = require('cucumber-html-reporter');

var options = {
  theme: 'bootstrap',
  jsonFile: 'reports/test_report.json',
  output: 'reports/test_report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: false,
  metadata: {
    "Automation Framework Version": "0.0.1",
  },
  name: 'Automation report',
};

reporter.generate(options);
