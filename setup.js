import fs from 'fs';

// get the npm script argument
const args = process.argv.slice(2);

// if no argument is passed log usage
if (args.length === 0) {
  console.log('Usage: npm run setup <day>');
  console.log('Example: npm run setup 01');
  process.exit(1);
}

// get the day number
const day = args[0];

// if directory exists, log error and exit
if (fs.existsSync(day)) {
  console.log(`Directory ${day} already exists`);
  process.exit(1);
}

// create the directory
fs.mkdirSync(day);

// copy contents of template to the new directory
fs.copyFileSync('_template/input.txt', `${day}/input.txt`);
fs.copyFileSync('_template/sample_input.txt', `${day}/sample_input.txt`);

// load problem.js template and replace day number
let problem = fs.readFileSync('_template/problem.js', 'utf8');
problem = problem.replace(/_template/g, day);
fs.writeFileSync(`${day}/problem.js`, problem);

// log success
console.log(`Created directory ${day}`);