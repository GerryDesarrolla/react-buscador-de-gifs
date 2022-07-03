module.exports = {
	testEnvironment: 'jest-environment-jsdom',
	setupFiles: ['./jest.setup.js'],
	transformIgnorePatterns: [],
	transform: { '\\.[jt]sx?$': 'babel-jest', },
	moduleNameMapper: {
		'\\.(css|less|scss)$': '<rootDir>/tests/mocks/styleMock.js',
	},
}
