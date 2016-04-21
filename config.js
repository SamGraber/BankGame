System.config({
  defaultJSExtensions: true,
  transpiler: "typescript",

  packages: {
    "source": {
      "format": "register",
      "defaultExtension": "js"
    }
  },
  map: {
    "angular2": "node_modules/angular2" 
  }
});
