const componentGenerator = require("./generator/component");
/**
 *
 * @param {import('plop').NodePlopAPI} plop
 */
module.exports = function (plop) {
  plop.setGenerator("UI_component", componentGenerator);
};
