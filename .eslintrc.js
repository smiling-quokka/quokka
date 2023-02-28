module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: ['eslint:recommended', 'plugin:vue/recommended'],
    parserOptions: {
        requireConfigFile: false,
        parser: '@babel/eslint-parser',
        ecmaVersion: 8,
        sourceType: 'module',
    },
    plugins: ['import'],
    rules: {
        'brace-style': ['error', '1tbs', { allowSingleLine: true }],
        'linebreak-style': ['error', 'unix'],
        // max line negth
        'max-len': [
            'error',
            {
                code: 120,
                tabWidth: 4,
                ignoreTrailingComments: true,
            },
        ],
        'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        indent: ['error', 4, { ignoredNodes: ['ConditionalExpression'] }],
        curly: ['error', 'multi-line'],
        'no-unused-vars': 'warn',
        'no-undef': 'error',
        'dot-notation': 'error',
        'space-before-blocks': 'error',
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'ignore',
                named: 'never',
                asyncArrow: 'always',
            },
        ],
        'key-spacing': ['error', { beforeColon: false }],
        'comma-style': ['error', 'last'],
        'comma-spacing': [
            'error',
            {
                before: false,
                after: true,
            },
        ],
        'keyword-spacing': [
            'error',
            {
                after: true,
                before: true,
            },
        ],
        'arrow-spacing': [
            'error',
            {
                before: true,
                after: true,
            },
        ],
        'padded-blocks': ['error', 'never'],
        'padding-line-between-statements': [
            'error',
            // offset after variables
            {
                blankLine: 'always',
                prev: '*',
                next: 'return',
            },
            {
                blankLine: 'always',
                prev: ['const', 'let', 'var'],
                next: '*',
            },
            {
                blankLine: 'any',
                prev: ['const', 'let', 'var'],
                next: ['const', 'let', 'var'],
            },

            // offset after imports
            {
                blankLine: 'always',
                prev: 'import',
                next: '*',
            },
            {
                blankLine: 'any',
                prev: 'import',
                next: 'import',
            },

            // offset after oneline if statements
            {
                blankLine: 'always',
                prev: 'if',
                next: '*',
            },
            {
                blankLine: 'any',
                prev: 'if',
                next: 'if',
            },
            {
                blankLine: 'any',
                prev: 'multiline-block-like',
                next: '*',
            },
        ],
        'object-property-newline': 'error',
        'object-curly-spacing': ['error', 'always'],
        'object-curly-newline': [
            'error',
            {
                ObjectExpression: {
                    multiline: true,
                    minProperties: 2,
                },
                ObjectPattern: 'never',
                ImportDeclaration: 'never',
                ExportDeclaration: 'never',
            },
        ],
        'import/named': 'error',
        'import/default': 'error',
        'import/no-absolute-path': 'error',
        'import/no-self-import': 'error',
        'import/no-useless-path-segments': 'error',
        'import/export': 'error',
        'import/no-deprecated': 'warn',
        'import/first': 'error',
        'import/no-namespace': 'error',
        'import/order': ['error', { groups: ['builtin', 'external', 'internal', 'parent', 'sibling'] }],
        'no-duplicate-imports': 'error',
    },
};
