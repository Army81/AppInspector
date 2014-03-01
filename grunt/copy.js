'use strict';

/**
 * Copy files and folders.
 * Put files not handled in other tasks here
 * @type {Object}
 *
 * @see https://www.npmjs.org/package/grunt-contrib-copy
 */
module.exports = {
    dist: {
        files: [{
            expand: true,
            cwd: '<%= yeoman.app %>',
            dest: '<%= yeoman.dist %>',
            src: [
                '*.{html,js}', '_locales/**/*'
            ]
        }, {
            expand: true,
            cwd: '<%= yeoman.app %>/AppInspector/build/production/AI',
            dest: '<%= yeoman.dist %>/AppInspector',
            src: [
                '*.{html,js}',
                'resources/*.css'
            ]
        }]
    },
    dev: {
        files: [{
            expand: true,
            cwd: '<%= yeoman.app %>',
            dest: '<%= yeoman.dist %>',
            src: [
                '*.{html,js}', '_locales/**/*'
            ]
        }, {
            expand: true,
            cwd: '<%= yeoman.app %>/images',
            src: '{,*/}*.{png,jpg,jpeg}',
            dest: '<%= yeoman.dist %>/images'
        }, {
            expand: true,
            cwd: '<%= yeoman.app %>/AppInspector/build/testing/AI',
            dest: '<%= yeoman.dist %>/AppInspector',
            src: [
                '*.{html,js}',
                'resources/*.css'
            ]
        }, {
            expand: true,
            cwd: '<%= yeoman.app %>/AppInspector/build/testing/AI/resources/images',
            src: '{,*/}*.{png,jpg,jpeg}',
            dest: '<%= yeoman.dist %>/AppInspector/resources/images'
        }]
    }
};
