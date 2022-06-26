module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/essential', '@vue/airbnb', '@vue/prettier'],
  plugins: ['prettier'], // 코드 정리 플러그인 추가
  parserOptions: {
    ecmaVersion: 2020,
  },
  ignorePatterns: ['**/wemix/**.js'],
  rules: {
    'no-console': 0,
    'no-unused-vars': 0,
    'no-underscore-dangle': 0,
    'import/extensions': ['error', 'ignorePackages', { js: 'never', jsx: 'never', ts: 'never', tsx: 'never', json: 'never', vue: 'never' }],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', ['parent', 'sibling'], 'index'],
        pathGroups: [
          {
            pattern: 'angular',
            group: 'external',
            position: 'before'
          }
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
    'import/no-unresolved': 0,
    'lines-between-class-members': 0,
    'no-param-reassign': [
      process.env.NODE_ENV === 'production' ? 1 : 0,
      {
        props: true,
        ignorePropertyModificationsFor: ['config', 'error'],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        // https://prettier.io/docs/en/options.html
        printWidth: 150,
        tabWidth: 2,
        trailingComma: 'all',
        semi: true,
        singleQuote: true,
        arrowParens: 'always',
        endOfLine: 'auto',
        bracketSpacing: true,
        requirePragma: false,
        insertPragma: false,
        proseWrap: 'preserve',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': { node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] } },
  },
};
