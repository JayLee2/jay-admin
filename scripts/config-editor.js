/* eslint-disable no-console */
const fs = require("fs-extra");
const execa = require("execa");
const chalk = require("chalk");
const ora = require("ora");
const commentJSON = require("comment-json");

const VSCODE_SETTINGS_PATH = ".vscode/settings.json";
const spinner = ora("vscode配置中...").start();

function install(extension) {
  return execa
    .command(`code --install-extension ${extension}`)
    .then((ret) => {
      console.log("\n", ret.stdout);
    })
    .catch((err) => console.log(err));
}

function eslint() {
  return install("dbaeumer.vscode-eslint");
}

function stylelint() {
  return install("hex-ci.stylelint-plus");
}

function prettier() {
  return install("esbenp.prettier-vscode");
}

function postcss() {
  return install("mhmadhamster.postcss-language");
}

const extensionSettings = commentJSON.parse(
  `{
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "editor.formatOnType": true,

  // eslint
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.alwaysShowStatus": true,
  "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"],

  // stylelint
  "stylelint.useLocal": true,
  "stylelint.autoFixOnSave": true
}`,
  null,
  false
);

function setting() {
  return fs
    .pathExists(VSCODE_SETTINGS_PATH)
    .then((exist) => {
      if (exist) {
        return fs
          .readFile(VSCODE_SETTINGS_PATH)
          .then((file) => file.toString());
      }

      return Promise.resolve("{}");
    })
    .then((settingContent) => {
      const settings = commentJSON.parse(settingContent);

      return settings;
    })
    .then((settings) => {
      Object.keys(extensionSettings).forEach((key) => {
        // eslint-disable-next-line no-param-reassign
        delete settings[key];
      });

      return settings;
    })
    .then((settings) => {
      const mergedSettings = commentJSON.assign(extensionSettings, settings);

      return fs.outputFile(
        VSCODE_SETTINGS_PATH,
        commentJSON.stringify(mergedSettings, null, 2)
      );
    });
}

eslint()
  .then(stylelint)
  .then(prettier)
  .then(postcss)
  .then(setting)
  .then(() => {
    spinner.succeed("vscode配置完成").stop();
    console.log(chalk.green("happy coding!"));
  })
  .catch((e) => {
    spinner.fail("vscode配置失败").stop();
    console.log(chalk.red(e));
  });
