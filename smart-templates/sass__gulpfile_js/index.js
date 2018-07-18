
module.exports = {

    name: "SASS Gulpfile JS",

    directory: false,

    params: ["Title"],

    rules: function(config) {

      return({
        items: [
          { destinationFile: "gulpfile.js",           sourceTemplateFile: "index.template"    }
        ]
      });

    }

}
