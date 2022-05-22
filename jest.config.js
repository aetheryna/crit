const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    "\\\\node_modules\\\\"
  ],
  roots: [
    "src/__tests__"
  ],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/src/__mocks__/svg.ts',
  }
}

module.exports = createJestConfig(customJestConfig)
