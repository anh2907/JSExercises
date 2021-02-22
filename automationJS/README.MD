# Code Quality/Automation with Element: Practice

Now it's time to apply what you have learn into automation with JS.

## Flood Element

> <a href="https://element.flood.io/">Flood Element</a> is the first scalable, browser based load generation tool — making load testing as easy as functional testing.

> Flood Element is a browser based load test tool that allows you to create scripts quickly in Typescript. Element can use your web app in the same way that your customers do, opening a browser and interacting with page elements. It's written like a functional test script, but with the help of Flood, you can easily run a load test on as many nodes you want in the cloud.

As you may notice, it's a load testing tool, but it can be use in automation as well. It's easy to start working with, play around with it <a hred="https://element.flood.io/docs/#learn-by-example">here</a>

Global installation:

```
npm -g install element-cli
```

Check for installation:

```
element --version
```

Show help:

```
element run --help
```

## Element Recorder

Too lazy? Use this new tool that is developed by Flood Vietname team, it records every action that you makes on a page, then generates those actions into Element script. Awesome right? It's available in Chrome Extension.

<a href="https://chrome.google.com/webstore/detail/element-recorder/ngccfbnakbbpfjafkkkpihkddocfcnff">Try it now!</a>

## Play around

Now try to init an Element project then use it to play <a href="https://the-internet.herokuapp.com/">the-internet</a>.

## How Flood build their automation framework with Element

### Project structure

```bash
/Flood-Automation
    |__ src
    |   |__ @type # includes all custom types of project, mostly focus on test data (like this test data contains what properties), it makes things easier while coding.
    |   |__ actions # includes all functions that interact with application screens but they are not a method of any page object.
    |   |__ constants # includes all common test data using in many test scripts.
    |   |__ datafiles # includes all data files for each test script
    |   |__ pages # represents web pages/screens. They are built as an object includes properties (element attribute) and methods (actions on elements).
    |   |__ scenarios # includes test scenarios, each contains many test cases which are defined in .ts file.
    |   |__ utils # includes all utility functions that perform common routine programming tasks, which also do not interact with application screens.
    |__ app.runner.js # defines instructions of how to run the project automatically.
    |__ logger.js # is a customized log.
    |__ config.ts # includes all configurations of the automation test.
    |__ package.json # includes all libraries we need for the automation test.
    |__ tsconfig.json # includes all configurations of typescript.
```

### Coding conventions
* Use cameCase for naming your variables and functions. Ex: btnLogin, txtUserName, createProject...
* Use PascalCase for naming your class. Ex: LoginPage, ProjectPage, TeamPage..
* All variables must be defined at top of each function.
* Test script name should be the same with manual test cases
* Follow AirBnb rules: https://github.com/airbnb/javascript

### Best practices
* Apply OOP specification to design model for pages in project. A good example: https://angiejones.tech/oop-test-automation/
* Must use let and const to declare variables, forget about var.
* All lint errors must be resolved.
* Don't repeat yourself (DRY), if some pieces of code that use many times, move them into function.

## Exercises

Accept this challenge: https://element-challenge.flood.io/