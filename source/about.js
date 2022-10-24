// 입구는 index.js => entry 파일!
// 이 파일을 번들링 해서 hello, world js 파일까지 번들링 해보자!

import hello_word from "./hello.js";
import world_word from "./world.js";
import css from "./style.css";
// 번들링 할거니까 소스로 옮기자!
// import중에 .css로 끝나는 아이를 만났다.
// 자 이건 이제 css-loader라는 아이에게 맡겨라!!

document.querySelector("#root").innerHTML = world_word + " " + hello_word;
console.log("css", css);
