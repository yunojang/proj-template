/**
 *
 * @param {import('plop').NodePlopAPI} plop
 */

const path = require("path");
const fs = require("fs");

// If the resolve function meets the absolute path, the previous path is ignored
const featureDir = path.resolve(process.cwd(), "src/features");
const features = fs.readdirSync(featureDir);

// exports.generator = () => {};

const GLOBAL_STR = "Global Element";
module.exports = {
  decription: "UI Component Generator",
  prompts: [
    { type: "input", name: "name", message: "Component Name:" },
    {
      type: "list",
      name: "root",
      message: "What kind of future UI will you make?",
      choices: [GLOBAL_STR, ...features],
    },
  ],
  actions: (answer) => {
    const isGlobal = answer.root === GLOBAL_STR;
    const componentPath = isGlobal
      ? "src/components/Elements"
      : "src/features/{{pascalCase root}}/components";

    return [
      {
        type: "add",
        path: componentPath + "/{{pascalCase name}}/index.ts",
        templateFile: "generator/component/index.ts.hbs",
      },
      {
        type: "add",
        path: componentPath + "/{{pascalCase name}}/{{pascalCase name}}.tsx",
        // data: { test: "plop data" },
        templateFile: "generator/component/component.tsx.hbs",
      },
      {
        type: "add",
        path:
          componentPath + "/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
        templateFile: "generator/component/component.test.tsx.hbs",
      },
      {
        type: "add",
        path:
          componentPath +
          "/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
        templateFile: "generator/component/component.stories.tsx.hbs",
      },
    ];
  },
};
