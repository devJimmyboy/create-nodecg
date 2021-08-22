const { Command, flags } = require("@oclif/command");
const chalk = require("chalk");
const inquirer = require("inquirer");
const ora = require("ora");

// Easy access methods:
const log = console.log;
const error = chalk.bold.bgRed;
const success = chalk.bold.green;

class CreateNodecgCommand extends Command {
  static args = [
    {
      name: "bundleName",
      required: false,
      description: "The name of the bundle to create.",
    },
  ];
  async run() {
    const { flags, args } = this.parse(CreateNodecgCommand);
    const name = flags.name || "world";
    log(
      chalk.greenBright(
        `hello ${
          (flags.name && chalk.white.bold(name)) || name
        } from ./src/index.js`
      )
    );
  }
}

CreateNodecgCommand.description = `Describe the command here
...
Extra documentation goes here
`;

CreateNodecgCommand.flags = {
  // add --version flag to show CLI version
  version: flags.version({ char: "v" }),
  // add --help flag to show CLI version
  help: flags.help({ char: "h" }),
  name: flags.string({ char: "n", description: "name to print" }),
};

module.exports = CreateNodecgCommand;
