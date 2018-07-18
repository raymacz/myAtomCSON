
module.exports = {

    name: "Wordpress Taxonomy Template",

    directory: false,

    params: ["Title"],

    rules: function(config) {

      return({
        items: [
          { destinationFile: "content-taxonomy_tpl.php",           sourceTemplateFile: "index.template"    }
        ]
      });
    }

}
