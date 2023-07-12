const path = require("path");
const basePath = __dirname;
const distPath = "dist";
module.exports = {
  mode: "development",
  resolve: {
    extensions: [".js"],
  },
  entry: {
    app: ["./src/index.js"],
  },
  output: {
    path: path.join(basePath, distPath),
    filename: "index.js",
  },
};
