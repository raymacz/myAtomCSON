
module.exports = {

    name: "Wordpress Options Admin Settings",

    directory: false,

    params: ["Title"],

    rules: function(config) {

      return({
        items: [
          { destinationFile: "MQ_options.php",           sourceTemplateFile: "index.template"    }
        ]
      });

    }

}
