const { resolve } = require("path");

module.exports = {
	entry: "./src/app.js",

	output: {
		path: resolve(__dirname, "build/"),
		filename: "app.bundle.js"
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}
		]
	}
};
