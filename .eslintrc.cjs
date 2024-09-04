/* eslint-env node */
module.exports = {
  env: { browser: true, es2021: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest', 
    sourceType: 'module', 
    ecmaFeatures: {
      jsx: true
    } 
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    semi: ['error', 'always'],
    eqeqeq: 'error',
    indent: ['error', 2],
    'react/jsx-no-target-blank': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 0,
  },
  settings: {
    react: {
      version: 'detect',
    }
  }
};
