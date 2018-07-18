
module.exports = {

    name: "Wordpress Cheatsheet",

    directory: false,

    params: ["Title"],

    rules: function(config) {

      return({
        items: [
          { destinationFile: "RBTM_wp_cheatsheet.php",           sourceTemplateFile: "index.template"    }
        ]
      });

    }

}
