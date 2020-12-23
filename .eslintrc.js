module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:react/recommended'],

  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
