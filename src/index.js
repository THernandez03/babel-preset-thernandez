export default () => ({
  presets: ['@babel/preset-env'],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-throw-expressions',
    '@babel/plugin-proposal-optional-catch-binding',
    '@babel/plugin-proposal-do-expressions',
    '@babel/plugin-proposal-numeric-separator',
    '@babel/plugin-proposal-private-methods',
    '@babel/plugin-syntax-top-level-await',
    '@babel/plugin-syntax-import-meta',
    '@babel/plugin-proposal-json-strings',
    ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }],
    ['@babel/plugin-proposal-class-properties', { loose: false }],
    ['@babel/plugin-proposal-optional-chaining', { loose: false }],
    ['@babel/plugin-proposal-nullish-coalescing-operator', { loose: false }],
    [
      '@babel/plugin-proposal-pipeline-operator',
      { proposal: 'hack', topicToken: '%' },
    ],
  ],
});
