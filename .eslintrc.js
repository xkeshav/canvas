module.exports = {
	root: true,
	extends: ["eslint:recommended"],
	parser: "babel-eslint",
	env: {
		browser: true,
		node: true,
		es2022: true,
	},
	overrides: [],
	parserOptions: {
		sourceType: "module",
		ecmaFeatures: {
			modules: true,
			jsx: true,
		},
	},
	globals: {
		module: true,
	},
	rules: {
		"no-unused-vars": [
			"error",
			{
				argsIgnorePattern: "^_",
				args: "after-used",
				ignoreRestSiblings: true,
			},
		],
		semi: ["error", "always"],
		quotes: ["error", "double"],
		indent: [0, "tab"],
		"linebreak-style": ["off", "unix"],
	},
};
