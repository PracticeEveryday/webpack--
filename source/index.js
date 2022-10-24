// 입구는 index.js => entry 파일!
// 이 파일을 번들링 해서 hello, world js 파일까지 번들링 해보자!

import hello_word from "./hello.js";
import world_word from "./world.js";
document.querySelector("#root").innerHTML = hello_word + " " + world_word;
