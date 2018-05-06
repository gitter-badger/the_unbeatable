const path = require("path");
const PrettierPlugin = require("prettier-webpack-plugin");
//const HtmlWebPackPlugin = require("html-webpack-plugin");



module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js"
    ,path: __dirname + "/dist"
  },
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
       {
          test: /\.tsx?$/,
          loader: "awesome-typescript-loader"
        },
        { 
          test: /\.js$/, 
          enforce: "pre", 
          loader: "source-map-loader" },
    /*    {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: { minimize: true }
            }
          ]
        }*/
    ]
  },
  plugins: [  new PrettierPlugin()
, 
// new HtmlWebPackPlugin({ template: "./src/index.html",filename: "./index.html"})
],
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
};
