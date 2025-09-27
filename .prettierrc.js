module.exports = {
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  proseWrap: 'always',
  overrides: [
    {
      files: '*.mdx',
      options: {
        proseWrap: 'always',
      },
    },
    {
      files: '*.md',
      options: {
        proseWrap: 'always',
      },
    },
    {
      files: '*.tsx',
      options: {
        proseWrap: 'always',
      },
    },
  ],
};
