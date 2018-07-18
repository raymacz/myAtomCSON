
module.exports = {

    name: "Wordpress Cron Admin",

    directory: false,

    params: ["Title"],

    rules: function(config) {

      return({
        items: [
          { destinationFile: "JW_Cron.php",           sourceTemplateFile: "index.template"    }
        ]
      });

    }

}
