import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,

  {
    ignores: ["coverage/**", "node_modules/**"],
    files: ["**/*.js"],

    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      ecmaVersion: "latest",
      sourceType: "commonjs",
    },

    rules: {
      "no-unused-vars": "error",
      "no-console": "off",
      semi: ["error", "always"],
      quotes: ["error", "double"],
    },
  },
];
