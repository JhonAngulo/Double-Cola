module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "ignorePatterns": ['node_modules', 'build', 'public'],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    }
};
