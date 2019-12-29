module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        express : {
            dev: {
                options: {
                    script: 'app.js'
                }
            }
        },
        sass: {
            dist: {
                files: {
                    'public/stylesheets/style.css' : 'public/stylesheets/style.scss'
                }
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            },
            js: {
                files: '**/*.js',
                tasks: ['browserify']
            }
        },
        browserify: {
          dist: {
            files: {
              'public/javascripts/bundle.js': ['public/javascripts/main.js'],
            }
          }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.registerTask('dev',['express','sass','watch','browserify']);
};
