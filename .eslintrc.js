module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/no-array-index-key': 'off',
    'import/extensions': 'off',
    'no-undef': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-use-before-define': 'off',
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    'max-len': 'off',
    'react/prop-types': 'off',
    'no-console': 'warn',
    'import/no-extraneous-dependencies': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {},
    },
  },
};
