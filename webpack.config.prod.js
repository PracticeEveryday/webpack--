const path = require("path");
// npx webpack --entry ./source/index.js --output-path ./public
// 명령어를 통한 핸들링

module.exports = {
  mode: "production",
  // 입구 시작
  entry: "./source/index.js",
  output: {
    // path __dirname : 현재 webpack.config.js가 어디에 있는지 알려주는 것
    // dist 하위 경로에 우리의 최종적인 결과물을 갖다 놓아라
    path: path.resolve(__dirname, "public"),
    filename: "index_bundle.js",
  },
};

// npx webpack --config webpack.config.js
// 만약 webpack.config.js가 있다면 npx webpack이라는 실행문만 해도된다.
