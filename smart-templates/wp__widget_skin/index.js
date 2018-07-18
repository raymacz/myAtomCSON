
module.exports = {

    name: "Wordpress Widget Skin",

    directory: false,

    params: ["Title"],

    rules: function(config) {

      return({
        items: [
          { destinationFile: "RBTM_Messager_Widget.php",           sourceTemplateFile: "index.template"    }
        ]
      });

    }

}
