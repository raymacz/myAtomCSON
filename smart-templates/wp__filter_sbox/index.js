
module.exports = {

    name: "Wordpress Filter Sandbox",

    directory: false,

    params: ["Title"],

    rules: function(config) {

      return({
        items: [
          { destinationFile: "RBTM_filter_sbox.php",           sourceTemplateFile: "index.template"    }
        ]
      });

    }

}
