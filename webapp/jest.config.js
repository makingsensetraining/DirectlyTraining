module.exports = {
  setupFiles: [
    './enzyme.js'
  ],
  'moduleNameMapper': {
    '\\.(css|less)$': '<rootDir>/__mocks__/style-mock.js'
  },
  'collectCoverageFrom': [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**'
  ]
};