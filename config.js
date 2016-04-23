System.config({
  defaultJSExtensions: true,
  transpiler: "typescript",

  packages: {
    "source": {
      "format": "register",
      "defaultExtension": "js"
    },
    "lodash": {
      "main": "lodash.js",
    }
  },
  map: {
    "angular2": "node_modules/angular2",
    "rxjs": "node_modules/rxjs",
    "lodash": "node_modules/lodash",
  }
});
