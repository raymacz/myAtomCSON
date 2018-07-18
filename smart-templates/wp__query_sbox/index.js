
module.exports = {

    name: "Wordpress Query Sandbox",

    directory: false,

    params: ["Title"],

    rules: function(config) {

      return({
        items: [
          { destinationFile: "content-query_sbox.php",           sourceTemplateFile: "index.template"    }
        ]
      });
    }

}
