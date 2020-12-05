import { add } from "./math";

console.log('index', add(1, 2));

setTimeout(() => {
    console.log(window['webpackChunkwebpack_bug']);
}, 500);