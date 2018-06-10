module.exports = {
    "extends": ["standard", "standard-react"],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 8,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true
        },
        "sourceType": "module"
    },
    "root": true,
    "env": {
        "es6": true,
        "node": true,
        "mocha": true
    },
    "globals": {
        "document": false,
        "navigator": false,
        "window": false,
        "global": true,
        "describe": true,
        "it": true,
        "before": true,
        "JSON": true,
        "expect": true,
        "fetch": true,
        "import": true
    },
    "rules": {
        "react/jsx-curly-spacing": [1, {"when": "always", "children": true}],
        "react/prop-types": 1, // because this shouldn't block a commit
        "react/jsx-indent": [ 2, 4 ],
        "react/jsx-indent-props": [2, 'first' ],
        "no-global-assign": ["error", {"exceptions": ["require"]}],
        "no-native-reassign": ["error", {"exceptions": ["require"]}],
        "brace-style": ["error", "allman"],
        // "fp/no-nil": "warn",
        "quotes": [ 1, "single" ],
        "multiline-ternary": [ 1, "always-multiline" ],
        "import/order": [ 2, { "newlines-between": "always" } ],
        "func-call-spacing": [ 1, "never" ],
        "prefer-promise-reject-errors": 2,
        "max-len": [ "error", 240 ],
        "max-depth": [ "error", 5 ],
        "max-lines": [ "error", 1500 ],
        "max-params": [ "error", 5 ],
        "max-statements": [ "error", 30 ],
        "accessor-pairs": "off",
        "arrow-spacing": [
            1,
            {
                "before": true,
                "after": true
            }
        ],
        "camelcase": "off",
        "comma-dangle": [
            2,
            "never"
        ],
        "comma-spacing": [
            1,
            {
                "before": false,
                "after": true
            }
        ],
        "comma-style": [
            2,
            "last"
        ],
        "constructor-super": 2,
        "curly": [ 1, "multi-or-nest" ],
        "dot-location": [
            2,
            "property"
        ],
        "eol-last": 2,
        "eqeqeq": [
            2,
            "allow-null"
        ],
        "generator-star-spacing": [
            2,
            {
                "before": true,
                "after": false
            }
        ],
        "handle-callback-err": [
            2,
            "^(err|error)$"
        ],
        "indent": [ 1, 4 ],
        "key-spacing": "off",
        "keyword-spacing": [
            2,
            {
                "before": true,
                "after": true
            }
        ],
        "new-cap": [
            2,
            {
                "newIsCap": true,
                "capIsNew": false
            }
        ],
        "no-alert": 2,
        "no-caller": 2,
        "new-parens": 2,
        "no-array-constructor": 2,
        "no-class-assign": 2,
        "no-cond-assign": 2,
        "no-const-assign": 2,
        "no-control-regex": 2,
        "no-debugger": 2,
        "no-delete-var": 2,
        "no-dupe-args": 2,
        "no-dupe-class-members": 2,
        "no-dupe-keys": 2,
        "no-duplicate-case": 2,
        "no-duplicate-imports": 2,
        "no-empty-character-class": 2,
        "no-empty-pattern": 2,
        "no-eval": 2,
        "no-ex-assign": 2,
        "no-extend-native": 2,
        "no-extra-bind": 2,
        "no-extra-boolean-cast": 2,
        "no-extra-parens": "off",
        "no-fallthrough": 1,
        "no-floating-decimal": 2,
        "no-func-assign": 2,
        "no-implied-eval": 2,
        "no-inner-declarations": [
            2,
            "functions"
        ],
        "guard-for-in": 1,
        "no-trailing-spaces": "off",
        "no-invalid-regexp": 2,
        "no-irregular-whitespace": "off",
        "no-iterator": 2,
        "no-label-var": 2,
        "no-labels": [
            2,
            {
                "allowLoop": false,
                "allowSwitch": false
            }
        ],
        "no-lone-blocks": 2,
        "no-mixed-spaces-and-tabs": 2,
        "no-multi-spaces": "off",
        "no-multi-str": 2,
        "no-multiple-empty-lines": [
            2,
            {
                "max": 4
            }
        ],
        "no-negated-in-lhs": 2,
        "no-new": 2,
        "no-new-func": 1,
        "no-new-object": 2,
        "no-new-require": 2,
        "no-new-symbol": 2,
        "no-new-wrappers": 2,
        "no-obj-calls": 2,
        "no-octal": 2,
        "no-octal-escape": 2,
        "no-path-concat": 2,
        "no-proto": 2,
        "no-redeclare": 2,
        "no-regex-spaces": 2,
        "no-return-assign": "off",
        "no-self-assign": 2,
        "no-self-compare": 1,
        "no-sequences": "off",
        "no-shadow-restricted-names": 2,
        "no-spaced-func": 2,
        "no-sparse-arrays": 2,
        "no-this-before-super": 2,
        "no-throw-literal": 2,
        "no-undef": 2,
        "no-undef-init": 2,
        "no-unexpected-multiline": 2,
        "no-unmodified-loop-condition": 2,
        "no-unneeded-ternary": [
            2,
            {
                "defaultAssignment": false
            }
        ],
        "no-unreachable": 2,
        "no-unsafe-finally": 2,
        "no-unused-vars": [
            1,
            {
                "vars": "local",
                "args": "after-used",
                "varsIgnorePattern": "_"
            }
        ],
        "no-useless-call": 2,
        "no-useless-return": 2,
        "no-useless-computed-key": 2,
        "no-useless-constructor": 2,
        "no-useless-escape": 2,
        "no-whitespace-before-property": 2,
        "no-with": 2,
        "one-var": [
            1, {
                "var": "always"
            }
        ],
        "operator-linebreak": [
            2,
            "after",
            {
                "overrides": {
                    "?": "before",
                    ":": "before",
                    "||": "before"
                }
            }
        ],
        "padded-blocks": "off",
        "require-jsdoc": [
            "warn",
            {
                "require": {
                    "FunctionDeclaration": true,
                    "MethodDefinition": true,
                    "ClassDeclaration": true
                }
            }
        ],
        "semi": [
            1,
            "always"
        ],
        "semi-spacing": [
            1,
            {
                "before": false,
                "after": true
            }
        ],
        "space-before-blocks": [
            2,
            "always"
        ],
        "space-before-function-paren": [
            1,
            "always"
        ],
        "space-in-parens": [
            1,
            "always"
        ],
        "space-infix-ops": 2,
        "space-unary-ops": [
            2,
            {
                "words": true,
                "nonwords": false
            }
        ],
        "spaced-comment": [
            2,
            "always",
            {
                "markers": [
                    "global",
                    "globals",
                    "eslint",
                    "eslint-disable",
                    "*package",
                    "!",
                    ","
                ],
                "exceptions": [
                    "*"
                ]
            }
        ],
        "template-curly-spacing": [
            2,
            "never"
        ],
        "use-isnan": 2,
        "valid-typeof": 2,
        "wrap-iife": [
            2,
            "any"
        ],
        "yield-star-spacing": [
            2,
            "before"
        ],
        "yoda": [
            2,
            "never"
        ],
        "array-bracket-newline": [ 1, { "multiline": true } ],
        "array-bracket-spacing": [ 1, "always" ],
        "object-curly-spacing": [ 1, "always" ],
        "block-spacing": [ 1, "always" ],
        "computed-property-spacing": [ 1, "always" ]
    }
};
