module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    //************************************************* JS join and min
    uglify: {
      front: {
        options: {
          banner: '/*! <%= pkg.name %>-frontpage <%= grunt.template.today("dd-mm-yyyy") %> \n-Includes-\n**jquery-3.4.1.min.js\n**bootstrap-4.3.1.min.js\njquery vide*/\n',
        },
        files: {
          'ikarasev/ikarasev/static/frontpage/js/<%= pkg.name %>-frontpage.min.js': [
            'jscss/dependencies/jquery/jquery-3.4.1.min.js',
            'jscss/dependencies/jquery/jquery-ui.js',
            'jscss/dependencies/jquery/jquery.vide.js',
            'jscss/dependencies/bootstrap/bootstrap.bundle.min.js',
            'jscss/frontpage/js/*',
          ]
        }
      },
    },
    cssmin: {
      front: {
        files: {
          'ikarasev/ikarasev/static/frontpage/css/<%= pkg.name %>-frontpage.min.css':[
            'jscss/dependencies/jquery/jquery-ui.min.css',
            'jscss/dependencies/jquery/jquery-ui.theme.css',
            'jscss/dependencies/bootstrap/bootstrap.min.css',
            'jscss/frontpage/css/*',
          ]          
        }
      },
    },
    //************************************************* WATCH tasks
    watch: {
      front: {
        files: [
          'jscss/frontpage/js/*.js',
          'css/frontpage/css/*.css'
        ],
        tasks: [
          'front:js',
          'front:css'
        ],
        options: {
          livereload: true
        }
      },
      frontcss: {
        files: [
          'jscss/frontpage/css/*.css'
        ],
        tasks: [
          'front:css'
        ],
        options: {
          livereload: true
        }
      },
      frontjs: {
        files: [
          'jscss/frontpage/js/*.js'
        ],
        tasks: [
          'front:js'
        ],
        options: {
          livereload: true
        }
      },
    },
  });

  // Load the pluginss
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['uglify','cssmin']);
  grunt.registerTask('front', ['uglify:front','cssmin:front']);
  grunt.registerTask('front:css', ['cssmin:front']);
  grunt.registerTask('front:js', ['uglify:front']);
  grunt.registerTask('watch:front', ['watch:front']);
  grunt.registerTask('watch:front:css', ['watch:frontcss']);
  grunt.registerTask('watch:front:js', ['watch:frontjs']);
};