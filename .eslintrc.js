module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'no-tabs': 'off',
    indent: 'off',
		'class-methods-use-this': 'off',
		'quote-props': 'off',
		'no-param-reassign': 'off',
		'object-curly-newline': 'off',
		'camelcase': 'off',
  },
};
