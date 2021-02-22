# Get Started: Practice

To compile and run JavaScript code, you need JavaScript Engine to do that, and as you have known, every browser will have its own JavaScript Engine. In Chromium (which is the core that runs inside Chrome), it is powered by <a href="https://v8.dev/">V8 Engine</a> from our beloved friend, Google.

Which means, whenever you want to run some JavaScript code, you have to "borrow" the environment from browser by using devtool (F12). But that environment is not "clean" and it's not a safe way to run your code if your code is too complex (yeah, nobody does that). There is a way, create a static `.html` file and add your JavaScript code via `<script>` tag like this:

```html
<!-- index.html -->

<script src="app.js"></script>
```

Then copy the path of that html file, paste and go on the browser, open the devtool to see the result. Now that's ... complicated. But this was the only way that all JavaScript developers did, a decade ago.

So, you might wonder "Is there a more convinient way to run JS code?", "What if I download the V8 Engine, and run JS code myself?". Yes, the idea is to just extract the engine from browser, and run it yourself. A guy named Ryan Dahl did this, a decade ago, he created <a href="https://en.wikipedia.org/wiki/Node.js">NodeJS</a>.

In this practice, we will learn how to use NodeJS to run our JS code. That's it. It's the beginning of automation test with JavaScript.

## Setup Environment
1. Download NodeJS, choose the latest LTS version: https://nodejs.org/en/ 
2. Install, just follow the instruction setup
3. After finish, check if it's install correct by opening the terminal (or Powershell on windows) and type `node --version`, it must show the installed version of node.

For more advanced usage, I recommend to use <a href="https://github.com/nvm-sh/nvm">nvm</a> (NodeJS Version Manager), this tool will help tou install and switch any version of node.

Assume that everyone has already been familiar with code editing, and you can use whatever you like: VSCode, Sublime Text, WebStorm, or even with Vim. (I recommend to use VSCode).

## Play around
Before we go into any exercises, it's good to get familiar with NodeJS. To run any JS code, first create a `.js` file, write some code like `console.log('hello world')`, save it. Open terminal (or powershell), type this commandline:

```terminal
node <path-to-.js-file>
```

replace `<path-to-that-.js-file>` with your correct path, for ex: `node /folder1/folder2/yourJsFile.js`. Hit enter, and it will execute and print `hello world` to the screen.

Try it!

## Execises
### <b>1.</b> Write a JavaScript program to display the current day and time in the following format:

```
English: Friday, Jan 21, 2021 (Time executed: 06:02:59 AM)
Vietnamese: Thứ 6 ngày 21 tháng 1 năm 2021 (Giờ khởi tạo: 18:02:59)
```

<b>Bonus point:</b> As a QA, imagine this will be displayed on a web, and this function is written by a developer, you need to make sure it displays correctly as the design above.

<br>

#### Hint

In this exercise, we will use <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">Date</a>, an built-in API that comes with JavaScript.
```javascript
var today = new Date()   // Create a Date object that represents current time.

// After that, we can access to its built-in function which comes with the Date object

today.getFullYear()  // Returns the year (4 digits for 4-digit years) of the specified date according to local time.
```

<b>Bonus point:</b> You will need to use <a href="https://nodejs.org/api/assert.html">assert</a> which is provided by NodeJS, and you will be using this quite a lot when do automation with JavaScript. To import this into your code, use <a href="https://www.w3schools.com/nodejs/nodejs_modules.asp">require</a>:

```javascript
var assert = require('assert');

// Example usage:
var headCount = 2;

assert.strictEqual(headCount, 2, 'headCount must be equal to 2')
```
---
<br>
<br>


### <b>2.</b> Write a JavaScript program to display a random leap year from 1 to 2020.
```
A random leap year: 2020
```

<b>Bonus point:</b> You might notice that some times this take quite a lot of time to random the right number of leap year, this will freeze the application, but what if I want to "asynchronously" do that so I can do other thing than wait for it to response. Based your experience on JavaScript, do you have any idea to solve this? Just comment your answer in this exercise, or if you know how to code, that's great!

<br>

### Hint
In this exercise, we will use another built-in API, that is <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random">Math</a>, that comes with `random()` function to randomly gen a number from 0 to 1.

```
Math.random() // returns a floating-point, pseudo-random number in the range 0 to less than 1.
```