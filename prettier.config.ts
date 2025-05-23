import type { Config } from 'prettier';

const config: Config = {
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
  ],
};

export default config;
