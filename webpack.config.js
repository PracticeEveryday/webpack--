const path = require("path");
// npx webpack --entry ./source/index.js--output - path./ public
// 명령어를 통한 핸들링
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 로더는 이름을 바로 use에 적었지만
// plugin은 가져와서 직접 실행 시켜야 한다!
module.exports = {
  mode: "development",
  // 입구 시작
  entry: {
    index: "./source/index.js",
    about: "./source/about.js",
  },
  output: {
    // path __dirname : 현재 webpack.config.js가 어디에 있는지 알려주는 것
    // dist 하위 경로에 우리의 최종적인 결과물을 갖다 놓아라
    path: path.resolve(__dirname, "public"),
    filename: "[name]_bundle.js",
  },
  module: {
    rules: [
      {
        // .확장자가 css인 파일을 나타내는 코드를 번들링해줘
        // 웹펙이 확장자가 css인 파일을 만나면 웹팩안으로 로드시켜주는 특수한 명령이 css Loader임!!
        test: /\.css$/i,
        // css 파일을 읽어와서 웹팩으로 가져오는 애 css-loader
        // 그렇게 가져온 css 코드를 웹 페이즈 안에 스타일 태그로 주입을 시켜주는 아이 stype-loader
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 템플릿으로 통해 어떤 템플릿을 쓰고
      // 어떤 파일네임으로 가져올 것인가?
      template: "./source/index.html",
      filename: "./index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      // 템플릿으로 통해 어떤 템플릿을 쓰고
      // 어떤 파일네임으로 가져올 것인가?
      template: "./source/index.html",
      filename: "./about.html",
      chunks: ["about"],
    }),
  ],
};

// npx webpack --config webpack.config.js
// 만약 webpack.config.js가 있다면 npx webpack이라는 실행문만 해도된다.
