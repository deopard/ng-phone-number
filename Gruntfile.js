module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! \n * <%= pkg.title || pkg.name %> v<%= pkg.version %>\n' +
      ' * <%= pkg.homepage %>\n' +
      ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
      ' * License: <%= pkg.license %>\n' +
      ' */\n',

    uglify: {
      options: {
        banner: '<%= banner %>',
        report: 'gzip'
      },
      build: {
        src: 'src/ng-phone-number.js',
        dest: 'dist/ng-phone-number.min.js'
      },
    },

    concat: {
      build: {
        options: {
          banner: '<%= banner %>'
        },
        files: {
          'dist/ng-phone-number.js': 'src/ng-phone-number.js',
        }
      }
    },

    watch: {
      scripts: {
        files: ['src/*.js'],
        tasks: ['uglify', 'concat:build'],
        options: {
          spawn: false,
        },
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['uglify', 'concat:build']);
  grunt.registerTask('build', ['default']);
};
