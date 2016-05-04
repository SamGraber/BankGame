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
    "rxjs": {
      "main": "rx.js",
    },
    "@angular/platform-browser-dynamic": {
      "main": "platform_browser_dynamic.js",
    },
    "@angular/platform-browser": {
      "main": "index.js",
    },
    "@angular/core": {
      "main": "index.js",
    },
    "@angular/common": {
      "main": "index.js",
    },
    "@angular/compiler": {
      "main": "index.js",
    },
    "@angular/http": {
      "main": "index.js",
    },
    "@angular/router": {
      "main": "index.js",
    },
  },
  map: {
    "@angular": "node_modules/@angular",
    "es6-shim": "node_modules/es6-shim/es6-shim.js",
    "jquery": "node_modules/jquery",
    "lodash": "node_modules/lodash",
    "rxjs": "node_modules/rxjs",
    "systemjs": "node_modules/systemjs/dist/system.js",
    "toastr": "node_modules/toastr",
    "typescript": "node_modules/typescript/lib/typescript.js",
    "typescript-angular-utilities": "node_modules/typescript-angular-utilities",
  }
});
