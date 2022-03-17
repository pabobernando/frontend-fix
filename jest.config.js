const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./frontend-final/profile/profile-page.js",
});

const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);
