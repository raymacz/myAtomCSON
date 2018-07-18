
module.exports = {

    name: "Wordpress Shortcode Twitter",

    directory: false,

    params: ["Title"],

    rules: function(config) {

      return({
        items: [
          { destinationFile: "RBTM_Shortcode_TW.php",           sourceTemplateFile: "index.template"    }
        ]
      });

    }

}
