module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bower: {
      install: {
        options: {
          install: true,
          copy: false,
          targetDir: './libs',
          cleanTargetDir: true
        }
      }
    },
    jshint: {
      // define the files to lint
      files: ['Gruntfile.js', 'app/*.js', 'app/**/*.js', 'src/test/**/*.js'],
      // configure JSHint (documented at http://www.jshint.com/docs/)
      options: {
        // more options here if you want to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      }
    },

    basepath: {
      app: 'src/main/resources/static',
      dist: 'build/resources/main'
    },

    jasmine: {
      test: {
        src: ['<%= basepath.app %>/bower_components/angular/angular.js',
          '<%= basepath.app %>/bower_components/angular-resource/angular-resource.js',
          '<%= basepath.app %>/bower_components/angular-mocks/angular-mocks.js',
          '<%= basepath.app %>/controllers/bundesliga-table.js',
          '<%= basepath.app %>/app/app.js'
        ],
        options: {
          specs: 'src/test/jasmine/spec/*.js',
          version: '2.0.1',
          display: 'full',
          summary: 'true'
        }
      }
    },

    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'jasmine']
    }
  });


  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-bower-task');

// this would be run by typing "grunt test" on the command line
  grunt.registerTask('test', ['jshint', 'jasmine']);

// the default task can be run just by typing "grunt" on the command line
  grunt.registerTask('build', ['jshint', 'jasmine']);
};