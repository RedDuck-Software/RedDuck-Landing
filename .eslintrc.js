module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
    },
    plugins: ['@typescript-eslint', 'react', 'import', 'react-hooks'],
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:import/typescript', 'prettier'],
    rules: {
        'react/prop-types': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        'react/display-name': 'off',
        'storybook/default-exports': 'off',
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
};
