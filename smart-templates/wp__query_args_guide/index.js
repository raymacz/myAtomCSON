
module.exports = {

    name: "Wordpress Query Arguments Guide",

    directory: false,

    params: ["Title"],

    rules: function(config) {

      return({
        items: [
          { destinationFile: "RBTM_query_args.php",           sourceTemplateFile: "index.template"    }
        ]
      });

    }

}
