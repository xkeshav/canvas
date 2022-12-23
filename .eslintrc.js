module.exports = {
	extends: ["eslint:recommended"],
	parser: "babel-eslint",
	env: {
		browser: true,
		node: true,
	},
	ignorePatterns: ["**/dist/*.js"],
	globals: {
		document: true,
		module: true,
	},
	rules: {
		"no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
	},
};
