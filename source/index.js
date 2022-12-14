// 입구는 index.js => entry 파일!
// 이 파일을 번들링 해서 hello, world js 파일까지 번들링 해보자!

import hello_word from "./hello.js";
import world_word from "./world.js";
import css from "./style.css";
// 번들링 할거니까 소스로 옮기자!
// import중에 .css로 끝나는 아이를 만났다.
// 자 이건 이제 css-loader라는 아이에게 맡겨라!!
import _ from "lodash";
// lodash라는 아이를 node_modules에서 찾은 뒤 걔를 가져와 걔의 이름을 _라고 주는 것!

document.querySelector("#root").innerHTML = _.join([
  hello_word,
  " ",
  world_word,
]);
console.log("css", css);
