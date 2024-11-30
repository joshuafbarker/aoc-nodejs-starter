import fs from 'fs';

// load input file
export function loadInput(day, isSample = false) {
  // if isSample is true, load sample_input.txt
  const fileName = isSample ? 'sample_input.txt' : 'input.txt';

  // read file and return content
  return fs.readFileSync(`./${day}/${fileName}`, 'utf-8');
}