module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "airbnb-typescript",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:react/recommended"
  ],
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname
  },
  rules: {
    "@typescript-eslint/no-use-before-define": [
      "error",
      {
        functions: false,
        classes: false,
        variables: false,
        typedefs: false
      }
    ],
    "import/prefer-default-export": "off",
    "no-shadow": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["off"],
    "global-require": "off",
    "react/jsx-props-no-spreading": ["off"],
    "react/no-array-index-key": "off",
    "no-underscore-dangle": "off",
    "no-return-assign": "off"
  }
};
