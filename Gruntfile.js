
module.exports = function (grunt) {
  grunt.initConfig({
    htmlmin:{
      options:{
        removeComments:true,
        collapseWitespace:true
      },
      files:{
        src:'./index.html',
        dest:'dist/index.html'
      }
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      src: ['*.css']
    },
    eslint: {
      options: {
        configFile: '.eslintrc.json'
      },
      target: ['*.js']
    }  
  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-eslint');

  grunt.registerTask('default', ['htmlmin']);
  grunt.registerTask('default', ['csslint']);
  grunt.registerTask('default', ['eslint']);
};
