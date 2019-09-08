module.exports = {
  "*.{ts,tsx}": [
    "eslint 'src/**/*.ts' --fix",
    "git add",
    "jest --findRelatedTests"
  ],
  "*.{json,md}": ["prettier --write", "git add"]
};
