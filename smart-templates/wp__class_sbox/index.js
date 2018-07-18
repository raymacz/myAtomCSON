
module.exports = {

    name: "Wordpress Class Sandbox",

    directory: false,

    params: ["Title"],

    rules: function(config) {

      return({
        items: [
          { destinationFile: "RBTM_class_sbox.php",           sourceTemplateFile: "index.template"    }
        ]
      });

    }

}
