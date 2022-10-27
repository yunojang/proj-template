/**
 *
 * @param {import('plop').NodePlopAPI} plop
 */

// ui component generator
// ui component, storybook, test
module.exports = {
  decription: "UI Component Generator",
  prompts: [{ type: "input", name: "name", message: "Component name:" }],
  actions: [
    {
      type: "add",
      path: "src/components/Elements/{{pascalCase name}}/index.ts",
      templateFile: "generator/component/index.ts.hbs",
    },
    {
      type: "add",
      path: "src/components/Elements/{{pascalCase name}}/{{pascalCase name}}.tsx",
      templateFile: "generator/component/component.tsx.hbs",
    },
  ],
};
