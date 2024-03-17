module.exports = {
  node: "development",
  entry: {
    main: "./src/frontend/App.ts",
    user: "./src/frontend/UserApp.ts",
  },
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].chunk.js",
    path: __dirname + "/dist/frontend",
    publicPath: "/assets/",
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
      {
        enforce: "pre",
        test: /\.js?$/,
      },
      {
        test: /\.js?$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    usedExports: true,
  },
};
