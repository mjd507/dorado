module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: 'airbnb-base',
  plugins: [
    'babel',
    'import'
  ],
  parserOptions: {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  globals: {
    describe: true,
    it: true
  },
  rules: {
    // eslint-plugin-import
    "import/no-unresolved": [2, { commonjs: true, amd: true }],
    "import/no-extraneous-dependencies": 0,
    "import/first": 0,
    "semi": 0,
    "arrow-parens": 0,
    "comma-dangle": ["error", {
      "arrays": "never",
      "objects": "never",
      "imports": "never",
      "exports": "never",
      "functions": "ignore"
    }],
    "func-names": 1,
    "no-shadow": 0,
    "no-console": 0,
    "prefer-template": 0,
    "quotes": 0,
    "max-len": ["error", { "code": 180 }],
    "no-unused-vars": ["warn"],
    "no-trailing-spaces": 0,
    "no-plusplus": 0,
    "no-restricted-syntax": ["error", "WithStatement"],
    "prefer-rest-params": 0,
    "one-var": ["error", { var: "always", let: "consecutive", const: "never" }],
    "one-var-declaration-per-line": ["error", "initializations"],
    "no-param-reassign": 0
  }
}
