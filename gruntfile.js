module.exports = function(grunt){

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: require('./tasks/concat')(),
        ngconstant: require('./tasks/ngconstant')(),
        uglify: require('./tasks/uglify')(),
        clean: require('./tasks/clean')()
    });

    grunt.registerTask('build:dev', [
        'ngconstant:dev',
        'concat:app',
        'concat:checkout',
        'uglify',
    ]);

    grunt.registerTask('build:prod', [
        'ngconstant:prod',
        'concat:app',
        'concat:checkout',
        'uglify',
    ]);

     grunt.registerTask('build:local', [
        'ngconstant:local',
        'concat:app',
        'concat:checkout',
        'uglify',
    ]);
};
