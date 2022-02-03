export default () => ({
  presets: ['@babel/preset-env'],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-async-do-expressions',
    ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }],
    '@babel/plugin-proposal-do-expressions',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-partial-application',
    [
      '@babel/plugin-proposal-pipeline-operator',
      { proposal: 'hack', topicToken: '#' },
    ],
    '@babel/plugin-proposal-throw-expressions',
    ['@babel/plugin-proposal-record-and-tuple', { importPolyfill: true }],
  ],
});
