
module.exports = {

    name: "Wordpress Widget Twitter",

    directory: false,

    params: ["Title"],

    rules: function(config) {

      return({
        items: [
          { destinationFile: "jw_twitter_widget.php",           sourceTemplateFile: "index.template"    }
        ]
      });

    }

}
