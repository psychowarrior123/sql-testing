module.exports = {
  extends: ['bizone/typescript'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  rules: {
    // backend data models have keys with underscore
    camelcase: 'off',

    /*
        Enforce a convention in module import order
        https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    */
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
        ],
        pathGroups: [
          {
            pattern: 'react**',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
        },
        'newlines-between': 'always',
      },
    ],
  },
};
