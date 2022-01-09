module.exports = {
  '*.{js,ts,tsx}': [
    'eslint --no-ignore --fix --report-unused-disable-directives --max-warnings 0',
    'git add',
  ],
  '*.{md,json}': ['prettier --write', 'git add'],
  '*.{css,less}': ['stylelint --fix --report-needless-disables', 'git add'],
};
