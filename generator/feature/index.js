/**
 *
 * @param {import('plop').NodePlopAPI} plop
 */

// const path = require("path");
// const fs = require("fs");

// // If the resolve function meets the absolute path, the previous path is ignored
// const featureDir = path.resolve(process.cwd(), "src/features");
// const features = fs.readdirSync(featureDir);

module.exports = {
  decription: "New feature generator",
  prompts: [{ type: "input", name: "name", message: "Feature Name:" }],
  actions: (answers) => {
    return [];
  },
};
