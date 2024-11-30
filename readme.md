# Advent of Code Node.js Starter

A dead simple project for maintaining your Advent of Code problems in a third-party dependency free Node.js environment.

## How to use

Run the following command to scaffold the files for the current day of problems you are working on:

```sh
npm run setup 01
```

This creates the `01/` directory that contains a set of files to use to solve the problems.

- `problem.js` - where the code lives to solve the problems, and contains the two methods that will be called by the `runner` to print the solutions to the console (or however you decide to present them).
- `sample_input.txt` - this is where you can put the sample input given by the problem to test your solution
- `input.txt` - this is where you put your problems input that will give you the answer

---

When ready you will call the following command to run the functions to solve the days problems:

```sh
npm run solve 01
```

This will run the two methods for each part of the day passed in as the argument.