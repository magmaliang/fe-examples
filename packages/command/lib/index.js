const { Command } = require('commander');
const program = new Command();
program.version('0.0.1');

module.exports = function main (argv) {
  program
  .option('-h, --hello', 'output extra debugging')
  program.parse(argv);
  if (program.hello) console.log('wow hello!');
}