// get npm script argument
const args = process.argv.slice(2);

// if no argument is passed log usage
if (args.length === 0) {
  console.log('Usage: npm run solve <day>');
  console.log('Example: npm run solve 01');
  process.exit(1);
}

// function to load the module with a dynamic import
async function loadModule() {
  // get the day number
  const day = args[0];

  // import the module
  const module = await import(`./${day}/problem.js`);

  // call the partOne method
  module.partOne();

  // call the partTwo method
  module.partTwo();
}

// call the loadModule function
loadModule();