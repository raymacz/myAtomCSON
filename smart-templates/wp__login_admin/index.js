
module.exports = {

    name: "Wordpress Login Admin",

    directory: false,

    params: ["Title"],

    rules: function(config) {

      return({
        items: [
          { destinationFile: "custom-wp-login.php", sourceTemplateFile: "index.template"    },
          { destinationFile: "css/login-style.css", sourceContentFile: "css/login-style.css" },
          { destinationFile: "css/login-style24.css", sourceContentFile: "css/login-style24.css" }
        ]
      });

    }

}
