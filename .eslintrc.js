module.exports = {
  parser: "@typescript-eslint/parser", 
  extends: [
    "plugin:@typescript-eslint/recommended" // recommended rules from @typescript-eslint/eslint-plugin
  ],
  parserOptions: {
    ecmaVersion: 2018,   // Parse modern ECMAScript features
    sourceType: "module" // Allows imports
  },
  rules: {
    // Put rule overrides here
  }
};
