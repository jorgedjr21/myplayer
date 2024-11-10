// jest.config.js

module.exports = {
  roots: ['<rootDir>/../src/tests'],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/../src/tests/setupTests.ts'],
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/../src/renderer/components/$1',
    '^@api/(.*)$': '<rootDir>/../src/api/$1',
    '^@types/(.*)$': '<rootDir>/../src/types/$1',
  },
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest', // Use babel-jest to transpile files with Babel
  },
};
