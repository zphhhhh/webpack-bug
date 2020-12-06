1. `npm i`
2. `npm run dev`
3. open `http://localhost:8080/` 
4. open Chrome devtool see the `console`

You will see the global chunk array `window["webpackChunkwebpack_bug"].length === 196608`,
but any item in it is the some chunk.


bug snapshot:

![bug snapshot](https://user-images.githubusercontent.com/17380627/101258784-c4511100-375f-11eb-8485-60088246f93d.png)
