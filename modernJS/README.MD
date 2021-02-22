# Practical ES6, ES7 features and TypeScript: Practice

## Yarn

Before we start, let's learn a bit about <a href="https://yarnpkg.com/">Yarn</a>. You might know or heard of it. As described in its home page:

> Yarn is a package manager that doubles down as project manager.

So, it's more like another version of `npm`? Yes, it is, it builds on top of `npm` and provides better functionality. Like:

- **Offline Mode.** If you've installed a package before, then you can install it again without an internet connection.
- **Deterministic.** The same dependencies will be installed in the same exact way on any machine, regardless of installation order.
- **Network Performance.** Yarn efficiently queues requests and avoids request waterfalls in order to maximize network utilization.
- **Network Resilience.** A single request that fails will not cause the entire installation to fail. Requests are automatically retried upon failure.
- **Flat Mode.** Yarn resolves mismatched versions of dependencies to a single version to avoid creating duplicates.
- **More emojis.** 🐈

How to install:

```
npm install --global yarn
```

Check whether it's successfully installed:

```
yarn --version
```

Now you can use `yarn` instead of `npm` for now. Here are some useful commands:

```bash
# Starting a new project
yarn init

# Adding a dependency
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]

# Adding a dependency to different categories of dependencies like adding to devDependencies, peerDependencies, and optionalDependencies respectively
yarn add [package] --dev
yarn add [package] --peer
yarn add [package] --optional

# Upgrading a dependency
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]

# Removing a dependency
yarn remove [package]

# Installing all the dependencies of project
yarn
```

So, do I have to use `yarn`? No, you can use `npm` if you want to.

## TypeScript

Let's try <a href="https://www.typescriptlang.org/">TypeScript</a>, shall we? First, init a simple node project with `npm init` or `yarn init`.

You might know, Node support both **local packages** and **global packages**, that is:

- **Local packages** are located inside your node project in `/node_modules` folder and only be accessed locally. If you want to run any commands of these packages, you need to define command in `scripts` option in `package.json` and run it with npm like this: `npm run [command-name]`, or with yarn: `yarn [command-name]`.
- **Global packages** are located in your computer and can run anywhere in your computer. Just enter packages name.

To install TypeScript, you can choose either of these options:

```bash
# Local
npm install typescript

# Global
npm install -g typescript
```

I will go with local option for now to demonstrate.

When successfuly installed, you will see `typescript` with its version is declared in `package.json` like this:

```json
{
  "dependencies": {
    "typescript": "^4.1.3"
  }
}
```

Also `typescript` folder also be created in `node_modules` as well, that contains all functionality of this package.

Create a file called `app.ts`, with `.ts` determines that this file is a TypeScript file.

Now you can play around with it, or look at some examples <a href="https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html">here</a>.

Remember that, TypeScript is just JavaScript with types! It is not another language, it builds on top JavaScript and add some syntax for types, interfacce, etc. So to run this, you will need to parse TypeScript to JavaScript and run it. This is simple, you just need a compiler to do that, and it's located inside `typescript` package that we just installed before.

To compile it, we will use `tsc` command that comes with `typescript` package. Remember, we installed this package locally, so we need to add a command to `scripts` option in `package.json` like this:

```json
{
  "scripts": {
    "compile": "tsc app.ts"
  }
}
```

And use `npm` or `yarn` to run it like this:

```bash
npm run compile

# or with yarn

yarn compile
```

You can see a new `app.js` (javascript file) is generated, and you can run it with `node app.js`.

Too many steps? You can combine them together like this (you need to understand `bash` script):

```json
{
  "scripts": {
    "compile": "tsc app.ts",
    "run": "tsc app.ts && node app.js"
  }
}
```

Or even better, the community helps us better way to run `.ts` file, by using `ts-node`, you can install it:

```bash
npm install ts-node
npm install -g ts-node # for install globally
```

Then just:

```json
{
  "scripts": {
    "compile": "tsc app.ts",
    "run": "ts-node app.ts"
  }
}
```

Feel free to try it!

## Node Green

Since you just learnt about modern JavaScript (ES6/ES7), it's a good thing to know whether your Node version supports new features of JS yet. You can check that by going to <a href="https://node.green/">Node green</a> to check it out.

---

## Exercises

Before you do, please define a project structure like this:

```bash
/modernJS
    |__ /node_modules       # automatically generate
    |__ /src
    |     |__ /utils
    |     |__ ex1.ts        # Look! it's .ts file!!!!
    |     |__ ex2.ts        # Look! it's .ts file!!!!
    |__ package.json
    |__ package-lock.json   # automatically generate
```

And add a command script in `package.json` to quickly run this `ex1.ts` and `ex2.ts` file, your choice. Example: `npm run ex1`.

### 1. Write a function that receives a `delay` argument (in `seconds`) and returns a `Promise` which is fullfiled after `delay` seconds. For example:

```javascript
// Let say you created that function which named wait()
wait(2).then(() => {
  console.log("this runs after 2 seconds!");
});

// Or can be used with async function
async function doSomething() {
  console.log("print this first");

  await wait(3);

  console.log("print this after 3 seconds");
}
```

Other requirements:

- You need to use TypeScript, say NO to `any` type.
- Create a file called `wait.ts` and put it in side `/src/utils` folder.
- Use `import`/`export` that you just learnt, remember to check your version of node in Node Green. Also you need to specify `type: "module"` in `package.json`, to use module mode.
- Import `wait()` function from `wait.ts` into `ex1.ts`. Write a simple async function to demonstrate it.

<b>Hint</b>: You need to understand `Promise`, go here to understand more about Promise before you do this exercise, https://codeburst.io/a-simple-guide-to-es6-promises-d71bacd2e13a

### 2. Implement a FakePromise class that ... fakes Promise, it should:

- Its constructor accepts a callback, which provides `resolve` and `reject` functions, just like a normal Promise.
- It must be chainable, like Promise with `then` and `catch` function. `resolve` will fire callback from `then` and `reject` will fire callback from `catch`.

After create `FakePromise`, import it in `ex2.ts` and use this following code:

```javascript
new FakePromise((resolve, reject) => {
  const randomNumber = Math.round(Math.random() * 100);
  if (randomNumber % 2 === 0) {
    resolve(randomNumber);
  } else {
    reject("Number is not even!");
  }
})
  .then((result) => {
    console.log(result);
    return result;
  })
  .then((result) => {
    throw new Error("Second Then just fired!");
  })
  .catch((err) => console.log(err));
```

It must prints something like this:

- If `randomNumber` is even, then it will prints out that number, then throw an error that has message `Second Then just fired!`.
- If `randomNumber` is not even, then it will prints out a string `Number is not even!`.
