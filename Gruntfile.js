module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 8000,
          base: '.'
        }
      }
    },
    jasmine: {
      test: {
        options: {
          specs: 'koans/**/*.js',
          host : 'http://127.0.0.1:8000/'
        }
      }
    },
    watch: {
      test: {
        files: ['koans/**/*.js'],
        tasks: ['jasmine']
      }
    }
  });

  // Load plugin
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  // Default task
  grunt.registerTask('default', ['connect', 'watch', 'jasmine']);
  grunt.registerTask('test', ['jasmine']);
};
