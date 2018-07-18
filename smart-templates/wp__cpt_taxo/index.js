
module.exports = {

    name: "Wordpress Custom Post Type & Taxonomy",

    directory: false,

    params: ["Title"],

    rules: function(config) {

      return({
        items: [
          { destinationFile: "posttypestax.php",           sourceTemplateFile: "index.template"    }
        ]
      });

    }

}
