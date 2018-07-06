const buildLogFolder = 'buildlog';
module.exports = {
  setupFiles: [
    './enzyme.js'
  ],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/__mocks__/style-mock.js'
  },
  collectCoverageFrom: [
    '**/app/**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/app/index.jsx',
    '!**/app/**/PrivateRoute.jsx' // Ignored sin it's unused for now
  ],
  coverageDirectory: `${buildLogFolder}/coverage`,
  reporters: [
    'default',
    ['./node_modules/jest-html-reporter', {
      pageTitle: 'Directly Trainning Test Report',
      outputPath: `${buildLogFolder}/test-results.html`,
      includeFailureMsg: true,
      includeConsoleLog: true,
      theme: 'darkTheme',
      sort: 'status'
    }]
  ]
};
