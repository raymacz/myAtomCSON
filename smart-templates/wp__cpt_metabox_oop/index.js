
module.exports = {

    name: "Wordpress CPT Metabox Shortcode OOP",

    directory: false,

    params: ["Title"],

    rules: function(config) {

      return({
        items: [
          { destinationFile: "RBTM_cpt_metabox.php",           sourceTemplateFile: "index.template"    },
          { destinationFile: "RBTM_cpt_mbox_scode.php",        sourceTemplateFile: "inc_file1.template"    },
        ]
      });

    }

}
