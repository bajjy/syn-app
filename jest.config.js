module.exports = {
    moduleDirectories: [
        'node_modules'
    ],
    verbose: true,
    clearMocks: true,
    coverageDirectory: "coverage",
    testEnvironment: "node",
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
    }
};