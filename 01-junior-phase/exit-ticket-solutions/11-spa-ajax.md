# Day 11: Webpack, SPAs, AJAX

**You should be able to:**
- Define the roles of the client and server
- Install Webpack and set up a project
- Create a SPA using AJAX to fetch data and JavaScript to manipulate the DOM without a page refresh
- Use ES6 module syntax to `import` and `export` modules in frontend JavaScript


## Check each role the example plays:

|   | Client | Server | Explanation |
| - | ------ | ------ | ----------- |
| Browser making a request | ☑️ |   |   |
| Visiting 'google.com' | ☑️ |   | In this context, it's similar to a browser making a request. If we are visiting google.com, then we are issuing a request to Google's servers to server us their homepage. |
| Your Trip Planner Express App |   | ☑️ | Express is usually initialized on the server to help field requests in the form of defined routes. |
| A website that counts the words on pages of other popular websites | ☑️ |   | In this context, the website doing the counting is requesting from another website the word information. |
| `pg` querying the database | ☑️ |   | `pg` is requesting resources from the PostgreSQL database (which plays the role of a server). |


## Which of the following are true of single page applications?

|   | Option | Explanation |
| - | ------ | ----------- |
|   | The app updates without making HTTP requests | It will make background HTTP requests to fetch updated data, but won't do full page refreshes. |
| ☑️ | **The app updates without making full page refreshes** |   |
| ☑️ | **The app uses AJAX** |   |
|   | The app uses a database | This doesn't necessarily need to be true as information can come from other places such as an API. |
|   | The app shows a map |   |
| ☑️ | **The app has a single view** | It loads a single view and changes happen _without_ loading a new page. |


## How would you import "cake" given the following code?

```js
// filename: kitchen.js

module.exports = {
    muffins: function() { },
    cake: true,
    eggs: 12
}
```

- `const cake = require('./kitchen');`
- **`const { cake } = require('./kitchen');`** ☑️


## How would you import "eggs" given the following code?

```js
// filename: kitchen.js

export const muffins = () => { }
export const cake = true

export default eggs = 12
```

- **`import eggs from './kitchen'`** ☑️
- `import { eggs } from './kitchen'`

**Note:**
  - A file can have only **one** default export. The naming of import is completely independent in default export so we can use any name we like.
  - We can have multiple named exports per file. We import the specific exports we want surrounded in braces. The name of imported module has to be the **same** as the name of the exported module.

**Reference:**
  - [DigitalOcean: ES6 Modules and How to Use Import and Export in JavaScript](https://www.digitalocean.com/community/tutorials/js-modules-es6)
  - [codeburst.io: Understanding ES6 Modules (Import/Export Syntax) in JavaScript](https://codeburst.io/understanding-es6-modules-import-export-syntax-in-javascript-6c01f20cead3)
