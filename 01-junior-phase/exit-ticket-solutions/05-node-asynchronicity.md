# Day 05: Node

**You should be able to:**
- Explain the purpose of Node
- Explain asynchronicity in JavaScript and how to handle asynchronous code
- Use `module.exports` and `require` to create modular applications
- Describe what `npm` is and its purpose


## In your own words, what is Node? And why do we need it?

- Node is a **runtime environment** that has the ability to run a V8 engine on environments other than the browser (e.g. operating systems, servers, etc.).


## What does `module.exports` do?

- It's an object that tells Node which pieces of code to export from a given file so other files are allowed to access the exported code.


## What does `require` do?

- It's a built-in function that allows a file to include modules that exist in _separate_ files. The basic functionality of `require` is that it **reads** a JavaScript file, **executes** the file, and then proceeds to **return** the `exports` object.


## Which of the following is _not_ a built-in Node module?

- fs
- http
- path
- **curl** ☑️


## What is the order of output of this snippet of code:

```js
console.log('Hello')
setTimeout(() => { console.log('a new') }, 5000)
console.log('World')
```

| Log | 1st | 2nd | 3rd |
| --- | --- | --- | --- |
| Hello | ☑️ |  |  |
| a new |  |  | ☑️ |
| World |  | ☑️ |  |


## What is the output of the following snippet of code:

```js
const cool = () => {
  console.log('Running inside the cool function')
  setTimeout(
    () => {
      console.log('Timing out inside the cool function')
    },
    3000
  )
}

setTimeout(
  () => {
    console.log('I am not in any function')
  },
  3000
)

cool()
console.log('End of File')
```

| Log | 1st | 2nd | 3rd | 4th |
| --- | --- | --- | --- | --- |
| Running inside the cool function | ☑️ |  |  |  |
| Timing out inside the cool function |  |  |  | ☑️ |
| I am not in any function |  |  | ☑️ |  |
| End of File |  | ☑️ |  |  |

## Outstanding Questions for Morning Review

## 1. How to run debugger on Node versus VSCode
The [`debugger`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger) keyword is native to the browser environment, but if you wanted to use a [version of `debugger` in Node](https://nodejs.org/api/debugger.html), you can.

You would follow the following steps:
1. Add the `debugger` keyword in your code where you want a breakpoint.
2. Run `node inspect your-filename.js` in order to launch a debugger client in your terminal.

If you want to run Node debugging _in_ VSCode, you can do so [here](https://code.visualstudio.com/docs/nodejs/nodejs-debugging), and apply the Auto Attach feature to your VS Code [here](https://code.visualstudio.com/docs/nodejs/nodejs-debugging#_auto-attach).

## 2. When do we need to use `fs`?
`fs` is a built-in Node module (so you don't need to download it) that allows a developer to get access to their filesystem. This means if a developer wanted to parse through files and/or write into files programmatically, they can do so using `fs`.

Some more information about the `fs` module [here](https://nodejs.dev/learn/the-nodejs-fs-module).

## 3. Could we walk through how to get the most out of an unfamiliar documentation? For example, I found it challenging to understand the documentation for fs.readFile - https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback
Yep definitely. What I look for first when diving into any documentation are the following:
- What does this function/object/etc do?
- What data type does this return?
- What arguments does this accept if it is a function?
  - What are the data types of those arguments?
- Are there examples?

If the documentation continues to prove to be confusing, I also recommend reading other articles from either Medium or Hacker News to round out your understanding with less jargon.

## 4. What am I really using node for if it doesn't translate to the browser?
Ah, but it will! Right now, our ability to build applications is limited to HTML, CSS, and Javascript on the browser side that we can only display on our local machines. We cannot share it with others. In order to share applications over the internet (think Amazon, Etsy, GitHub), we need to host it, and in order to build out a website, we need a _server_ to receive _requests_ (like HTTP requests in the address bar), and send back the appropriate files and data to display on the browser for _anyone_ in the world. NodeJS, an environment we can use to build backend code, or server code, is our ticket to building such a server, and we will do so _today_ using Express!
