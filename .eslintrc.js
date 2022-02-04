module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'airbnb/hooks', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        tabWidth: 2,
        printWidth: 80,
      },
    ],
    'react/prop-types': 0,
    'linebreak-style': ['error', 'unix'],
    'arrow-body-style': 0,
    'prefer-arrow-callback': 0,
    'global-require': 0,
    'import/prefer-default-export': 0,
    'no-restricted-exports': ['error', { restrictedNamedExports: [''] }],
    'react/function-component-definition': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': [
      'error',
      {
        html: 'ignore',
      },
    ],
  },
}
