/**
 *
 * @param {import('plop').NodePlopAPI} plop
 */

exports.generator = () => {};

// ui component generator
module.exports = {
  decription: "Global UI Component Generator",
  prompts: [
    { type: "input", name: "name", message: "Component Name:" },
    // {
    //   type: "list",
    //   name: "type",
    //   message: "Witch",
    //   choices: ["Web component", "Simple UI"],
    // },
  ],
  actions: [
    {
      type: "add",
      path: "src/components/Elements/{{pascalCase name}}/index.ts",
      templateFile: "generator/component/index.ts.hbs",
    },
    {
      type: "add",
      path: "src/components/Elements/{{pascalCase name}}/{{pascalCase name}}.tsx",
      // data: { test: "plop data" },
      templateFile: "generator/component/component.tsx.hbs",
    },
    {
      type: "add",
      path: "src/components/Elements/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
      templateFile: "generator/component/component.stories.tsx.hbs",
    },
  ],
};
