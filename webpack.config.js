const { resolve } = require("path");

module.exports = {
	entry: "./src/app.js",
	output: {
		path: resolve(__dirname, "build/"),
		filename: "app.bundle.js"
	}
};
