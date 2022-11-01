const componentGenerator = require("./generator/component");
const featureGenerator = require("./generator/feature");
/**
 *
 * @param {import('plop').NodePlopAPI} plop
 */
module.exports = function (plop) {
  plop.setGenerator("Component", componentGenerator);
  plop.setGenerator("Feature", featureGenerator);
};
