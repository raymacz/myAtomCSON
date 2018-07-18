
module.exports = {

    name: "Bootstrap 4 HTML - Complete CDN",

    directory: false,

    params: ["Title"],

    rules: function(config) {

      return({
        items: [
          { destinationFile: "index.html",           sourceTemplateFile: "index.template"    }
        ]
      });

    }

}
