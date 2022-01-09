module.exports = {
  extends: ['@commitlint/config-angular'],
  rules: {
    'type-case': [2, 'always', 'upper-case'],
    'type-enum': [
      2,
      'always',
      [
        '[A]', // add
        '[M]', // modify
        '[F]', // fix
        '[D]', // delete
        '[O]', // optimize
        '[R]', // refactor
      ],
    ],
    'subject-case': [0],
  },
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\[\w*\])(?:\((.*?)\))?\s((?:.*(?=\())|.*)(?:\(#(\d*)\))?/,
      headerCorrespondence: ['type', 'scope', 'subject', 'ticket'],
    },
  },
};
