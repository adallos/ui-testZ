module.exports = {
  env: {
    browser: true,
		es6: true,
		"jest/globals": true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
		'react',
		'jest',
  ],
  rules: {
		"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
		"react/prop-types": 1,
		"linebreak-style": 0,
		"no-tabs": 0,
		"indent": [2, "tab"],
		"react/jsx-indent" : [2, "tab"],
		"react/jsx-indent-props" : [2, "tab"],
  },
};
