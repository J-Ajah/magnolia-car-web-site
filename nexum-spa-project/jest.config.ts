import nextJest from 'next/jest'

export default nextJest()({
  clearMocks: true,
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
})
