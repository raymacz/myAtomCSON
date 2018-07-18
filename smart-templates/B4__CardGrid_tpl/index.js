
module.exports = {

    name: "Bootstrap 4  Card Grid TPL",

    directory: false,

    params: ["Title"],

    rules: function(config) {

      return({
        items: [
          { destinationFile: "index.html",  sourceTemplateFile: "index.template"    },
          { destinationFile: "img/team/1.jpg", sourceContentFile: "img/team/1.jpg" },
          { destinationFile: "img/team/2.jpg", sourceContentFile: "img/team/2.jpg" },
          { destinationFile: "img/team/3.jpg", sourceContentFile: "img/team/3.jpg" },
          { destinationFile: "img/w3/falls2.jpg", sourceContentFile: "img/w3/falls2.jpg" },
          { destinationFile: "img/w3/mist.jpg", sourceContentFile: "img/w3/mist.jpg" },
          { destinationFile: "img/w3/mountainskies.jpg", sourceContentFile: "img/w3/mountainskies.jpg" },
          { destinationFile: "img/w3/nature.jpg", sourceContentFile: "img/w3/nature.jpg" },
          { destinationFile: "img/w3/ocean.jpg", sourceContentFile: "img/w3/ocean.jpg" },
          { destinationFile: "img/w3/paris.jpg", sourceContentFile: "img/w3/paris.jpg" },
          { destinationFile: "img/w3/rocks.jpg", sourceContentFile: "img/w3/rocks.jpg" },
          { destinationFile: "img/w3/wedding.jpg", sourceContentFile: "img/w3/wedding.jpg" },
          { destinationFile: "img/w3/underwater.jpg", sourceContentFile: "img/w3/underwater.jpg" }
        ]
      });

    }

}
