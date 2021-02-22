# Object & Function: Practice
Previously, you have known what NodeJS (Node) is and how to use it to run any JavaScript files. In this practice, you will learn how to setup a very basic application from scratch and understand the true power of Node, which is the main reason behind of the fast growing in development of JavaScript.

When you first install Node, `npm` will also be installed along with it. `npm` is the package manager for the Node platform, it puts modules in place so that Node can find them, and manages dependency conflicts intelligently. There are a lot of <a href="https://docs.npmjs.com/cli/v6/commands/npm">features</a> that come with `npm`, but for now we only use it for managing dependencies (these are libraries that will be pulling from https://www.npmjs.com/) and run some "pre-defined" commands of your Node project, others won't be using often. To check if this tool is available or not, just type this into your terminal/powershell:

```
npm -v
```

It should show the installed version of `npm` in your machine. If not, then try to search on Google for troubleshooting.

Every Node project always has a `package.json` file which holds various metadata relevant to the project such as: name, version, license, dependencies, description, author,... (Full list can be found <a href="https://docs.npmjs.com/cli/v6/configuring-npm/package-json">here</a>). Don't worry if "that is too much to remember", we only need some of them. This `package.json` file is normally located at the root directory of the project, and here is an example content:

```json
{
  "name": "qTest Automation",                               // Name of the project
  "version": "1.0.0",                                       // Current version of project
  "description": "A project that automated test qTest",     // Describe this project

  // An object that contains all commands to run at terminal (mostly to run this project)
  "scripts": {                                              
    "start": "nodemon index.js",
    "build": "webpack"
  },

  // An object that contains 3rd-party libraries/packages which comes from https://www.npmjs.com/
  "dependencies": {                                         
    "nodemon": "^2.0.7"
  }
}
```

The first 3 metadatas are clear enough, so there is no need to explain more about them, we only care about `scripts` and `dependencies`. This `scripts` metadata is an object contains all commands that will be run in the terminal, the <b>key</b> will be the command name and the <b>value</b> will be the command to be executed:

```
 <command-name>: <commands to be executed>
```

For example, we have 2 commands inside `scripts`, to run these commands, we do:

```bash
npm run start
npm run build
```

Behind the scenes, the commands that described the the right will be executed from the terminal/powershell, for example: `npm run start` will run `nodemon index.js` in the terminal. You can have as many commands in `scripts` as you want, this can be useful when you have multiple environments (production/development/stagging) and those commands are specific to each environment. Also useful when you have a really long command, this will help you reduce the typing. More information about this can be found here: https://docs.npmjs.com/cli/v6/using-npm/scripts

For `dependencies`, as described above, this contains all 3rd-party libraries that your Node project needs, these libraries/packages will be pulling from https://www.npmjs.com/ by default. `dependencies` is an object, the <b>key</b> will be the name of a library and the <b>value</b> will be the version of that library:

```
 <library-name>: <version>
```

To install a package, you simply run:

```bash
npm install <package-name>

# For example I want to install nodemon (https://www.npmjs.com/package/nodemon)
npm install nodemon
```

`npm` will automatically search for that package on https://www.npmjs.com/ and download the latest version by default. If you want to install a specific version, add this prefix `@<version>` to your package name like this:

```bash
npm install <package-name>@<version>

# For example, install nodemon version 2.0.7
npm install nodemon@2.0.7
```

After the installation, you notice that `node_modules` and `package-lock.json` are generated. All downloaded packages will be put inside `node_modules`, whenever you want import something without full path like this:

```javascript
// without full path
var package = require('package')

// with full path
var package = require('./src/modules/package')
```

Node will find this package in `node_modules` folder by default. You may guess, this folder has a really big sizes if there are a lot of packages, and since these packages are hosted on https://www.npmjs.com/, we don't need to commit this folder to our git repository, it will take a lot of time and it's a waste. We just need `package.json` file, and everytime you clone a new project, just run:

```
npm install
```

`npm` will download all packages in `package.json` for you automatically.

So, about `package-lock.json`, you can understand it as the description of how your dependencies in your project looks like. That's it, if you want the full detail, go <a href="https://docs.npmjs.com/cli/v6/configuring-npm/package-lock-json">here</a>. Just remember that don't try to edit `package-lock.json` by hand, let `npm` do the job. The same rule with `node_modules`.

## Play around

Now it's time to practice. Try creating a simple node project with these simple steps:

1. Create an empty folder and go to it
2. Create `app.js` file, write some simple code like `console.log('hello world')`, save it
3. Create `package.json` in that folder, or you can use `npm init` and follow the instruction to do that.
4. Enter some basic infomation like name, version, description,...
5. Add a script command that runs `app.js` in `package.json`, for example: `"start": "node app.js"`
6. Try to run it with `npm run`
7. Try install any packages and use them with `requires` such as: 
    * <a href="https://www.npmjs.com/package/chalk">chalk</a>: color your log on the terminal
    * <a href="https://www.npmjs.com/package/lodash">lodash</a>: the most popular and widely-used JS utility library
    * <a href="https://www.npmjs.com/package/moment">moment</a>: popular time manipulation library

## Exercises

### <b>1. Setup a simple node project in this current folder that should looks like this:</b>

```bash
/objectAndFunction           
    |__ /node_modules       # automatically generate
    |__ /src
    |     |__ /utils
    |     |      |__ logger.js
    |     |__ ex1.js
    |__ package.json
    |__ package-lock.json   # automatically generate
```
Requirements:

* Write a utility function, in `logger.js` file, that enhance `console.log()` with <a href="https://www.npmjs.com/package/chalk">chalk</a> to print out more colorful log instead of white color by default. You should design this function by your own, choose any name as you want, but the usage should be simple and easy to reuse. For example:

```javascript
logger('hello world')  // print default color
logger('hello world', {color: 'red', bg: 'yellow'})  // print red color and background is yellow
logger('hello world', {bg: 'yellow'})  // print default color and background is yellow
logger('hello world', {color: 'red'})  // print red color and background is default
logger('hello world', {bold: true})  // print default color with bold, default bold is false
```

* Import `logger.js` into `ex1.js` and print out your name or anything with colors, your choice, but this should demonstrate how to use it with multiple options like the example above.
* Add a command script in `package.json` to quickly run this `ex1.js` file, your choice. Example: `npm run ex1`.

<b>Bonus point:</b> Support RGB color with hex value for bot text and background, like `#FFFFFF` for `white` color. But keep the API as simple as possible. For example: 


```javascript
logger('hello world', {color: 'red', bg: 'yellow'})  // basic
logger('hello world', {color: '#FF0000', bg: 'yellow'})  // still works, with #ff0000 is red
```

____

<b>Hint</b>

You have already known about importing file/module by using `require`, now you will learn how export your own file/module to use it elsewhere in your project. In Node, it's really easy to export any function/variable by using `module.exports`, for example:

```javascript
// file1.js
function saySomething() {
    console.log('something')
}
module.exports = saySomething

//file2.js
var saySomething = require('file1')
sauSomething()
```

In next section, we will learn more ES6 syntax with `import` and `export`. But for now just use `module.exports`.
___

### <b>2. Write a simple User function constructor that creates an user object with private name</b>

```javascript
var user = new User('Hoang')

Object.keys(user)  // returns ["getName", "setName"], this user will ONLY contains 2 props: getName and setName.

user.getName()  // returns "Hoang", this will be the only way to get user name
user.setName('Hoang Dev Trai')  // this will be the only way to set user name
user.getName()  // returns "Hoang Dev Trai"
```
`ex2.js` should also be placed inside `./src` folder that we create in exercise 1, and it should have a command to run this exercise as well. Example: `npm run ex2`.
___
<b>Hint</b>

You need to really understand how <b>this</b> and <b>closure</b> works. See from page 22 in the slide.