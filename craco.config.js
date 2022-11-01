const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(process.cwd(), "src"),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        "^@/(.+)": "<rootDir>/src/$1",
      },
    },
  },
  style: {
    postcss: {
      plugin: ["tailwindcss", "autoprefixer"],
    },
  },
};
