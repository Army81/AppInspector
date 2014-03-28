'use strict';

var chalk = require('chalk'),
    sa = {
        name   : chalk.green('Sencha Architect'),
        path   : chalk.yellow('./path/to/project/app/AppInspector/AppInspector.xds'),
        lookup : './app/AppInspector/.sencha/'
    };

/**
 * Grunt task for executing shell commands.
 * @param  {Object} grunt
 * @return {Object}
 *
 * @see https://www.npmjs.org/package/grunt-exec
 */
module.exports = function (grunt) {
    // Look up if AppInspector was opened and saved at least once in Sencha Architect.
    // If so »./app/AppInspector/.sencha/« will exist containing build property files.

    // If not, fail task!
    if (!grunt.file.isDir(sa.lookup)) {
        grunt.fail.fatal([
            chalk.bold.blue(sa.lookup) + chalk.white(' folder not found!'),
            '',
            '    To fix this, please open the project in ' + sa.name + ' first and save once.',
            '    You can find the ' + sa.name + ' project under ' + sa.path
        ].join(grunt.util.linefeed));
    }

    // return task config
    return {
        dev        : {
            cwd     : '<%= yeoman.app %>/AppInspector/',
            command : 'sencha -q app build -e testing -c'
        },
        production : {
            cwd     : '<%= yeoman.app %>/AppInspector/',
            command : 'sencha -q app build -e production'
        }
    };
};
