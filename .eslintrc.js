module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint'), 'plugin:react-hooks/recommended'],
  rules: {
    'max-classes-per-file': 'off',

    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          // airbnb
          'acc',
          'accumulator',
          'e',
          'ctx',
          'context',
          'req',
          'request',
          'res',
          'response',
          '$scope',
          'staticContext',

          // custom
          'state',
        ],
      },
    ],

    'import/no-extraneous-dependencies': 'off',
    'import/no-dynamic-require': 'off', // require中参数可以是动态
  },
};
