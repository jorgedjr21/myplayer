// jest.config.js

module.exports = {
  roots: ['<rootDir>/../src/tests'],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/../src/tests/setupTests.ts'],
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/../src/renderer/components/$1',
    '^@api/(.*)$': '<rootDir>/../src/api/$1',
    '^@types/(.*)$': '<rootDir>/../src/types/$1',
    '^swiper/css$': '<rootDir>/../src/tests/__mocks__/styleMock.js', // Mock swiper/css import
    '^swiper/css/navigation$': '<rootDir>/../src/tests/__mocks__/styleMock.js', // Mock navigation CSS
    '^swiper/css/pagination$': '<rootDir>/../src/tests/__mocks__/styleMock.js', // Mock pagination CSS
    '^.+\\.(css|less|scss|sass)$': 'identity-obj-proxy', // General CSS mock
  },
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest', // Use babel-jest to transpile files with Babel
  },
  transformIgnorePatterns: [
    'node_modules/(?!(swiper|swiper/react|swiper/modules)/)' // Transform Swiper ES modules
  ],
};
