const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              publicPath: "./dist/",
              name: "[name].[ext]?[hash]",
            },
          },
        ],
      },
	    {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"], 
		// MiniCssExtractPlugin 플러그인은 CSS 파일을 별도 파일로 추출(extract) 합니다. 
		// CSS 코드가 포함된 JS 파일 별로 CSS 파일을 생성합니다. CSS 및 SourceMaps의 온 디멘드 로딩(On Demand Loading) 기능도 지원합니다.
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/,
        use: {
          loader: "url-loader",
          options: {
            publicPath: "./dist/",
            name: "[name].[ext]?[hash]",
            limit: 5000, // 5kb 미만 파일만 data url로 처리
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),  // HTML 파일을 후처리하는데 사용, 빌드 타임의 값을 넣거나 코드를 압축
    new MiniCssExtractPlugin({
      filename: "index.css",
    }),
    new CleanWebpackPlugin(),
  ],
  devtool: "inline-source-map", // webpack-dev-server에만 쓰는 것은 아님. 더 알아보세요!
  devServer: {
    contentBase: "./dist", // dev 서버에
    port: 9000,
    hot: true,
  },
};