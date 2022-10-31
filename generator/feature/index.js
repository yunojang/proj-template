/**
 *
 * @param {import('plop').NodePlopAPI} plop
 */

const path = require("path");
const fs = require("fs");

// If the resolve function meets the absolute path, the previous path is ignored
const featureDir = path.resolve(process.cwd(), "src/features");
const features = fs.readdirSync(featureDir);

module.exports = {
  decription: "New feature generator",
  prompts: [
    { type: "input", name: "name", message: "Feature Name:" },
    {
      type: "list",
      name: "featureName",
      choices: [
        "New Feature",
        ...features.map((feature) => `New component in ${feature}`),
      ],
    },
  ],
  actions: (answers) => {
    const isGenFeature = answers.featureName === "New Feature";

    return [
      // {
      //   type: "add",
      //   path: "src/features/{{pascalCase name}}/index.ts",
      //   templateFile: "generator/feature/index.ts.hbs",
      // },
      // {
      //   type: "add",
      //   path: "src/features/{{pascalCase name}}/{{pascalCase name}}.tsx",
      //   templateFile: "generator/feature/component.tsx.hbs",
      // },
      // {
      //   type: "add",
      //   path: "src/features/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
      //   templateFile: "generator/feature/component.stories.tsx.hbs",
      // },
    ];
  },
};
