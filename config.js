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
    },
    "toastr": {
      "main": "toastr.js",
    },
    "jquery": {
      "main": "dist/jquery.js",
    },
  },
  map: {
    "angular2": "node_modules/angular2",
    "jquery": "node_modules/jquery",
    "lodash": "node_modules/lodash",
    "rxjs": "node_modules/rxjs",
    "systemjs": "node_modules/systemjs/dist/system.js",
    "toastr": "node_modules/toastr",
    "typescript": "node_modules/typescript/lib/typescript.js",
  }
});
