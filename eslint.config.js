import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [{
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
        globals: {
            ...globals.browser
        },
        parserOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            ecmaFeatures: {
                jsx: true
            }
        }
    },
    plugins: {
        react: pluginReact
    },
    rules: {
        ...pluginJs.configs.recommended.rules,
        ...pluginReact.configs.recommended.rules,
        'react/prop-types': 'off' // Esto desactivará los warnings de prop-types
    }
}];