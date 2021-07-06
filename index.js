#!/usr/bin/node
const program = require("commander");
const chalk = require("chalk");
const clipboardy = require("clipboardy");
const createPass = require("./PassUtils/createPass");
const savePass = require("./PassUtils/savePass");

program.version("1.0.0").description("Password-Generator");
program
  .option("-l, --length <number>", "the length of password", "8")
  .option("-s, --save", "save password to 'passwords.txt'")
  .option("-non, --no-nums", "no numbers in password")
  .option("-nos, --no-symbols", "no symbols in password")
  .parse();

const { length, save, nums, symbols } = program.opts();
// console.log(length);
const generatedPass = createPass(length, nums, symbols);

if (save) {
  savePass(generatedPass);
}

clipboardy.writeSync(generatedPass);

console.log(
  chalk.blue("Your Generated Password : ") + chalk.bold(generatedPass)
);

console.log(chalk.yellow("Password Copied to clipboard"));
