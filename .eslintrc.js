module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    indent: 'off',
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    'object-curly-newline': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'wrap-iife': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-param-reassign': 'off',
    'react/prop-types': 'off',
    'implicit-arrow-linebreak': 'off',
    'operator-linebreak': 'off',
    'max-len': ['error', { ignoreComments: true, code: 100 }],
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelComponents: ['label'],
        labelAttributes: ['inputLabel'],
        controlComponents: ['input'],
        assert: 'both',
        depth: 3,
      },
    ],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
  },
  globals: {
    __IS_DEV__: true,
  },
};
