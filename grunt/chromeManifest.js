'use strict';

/**
 * Grunt task for Chrome manifest.json
 * @type {Object}
 *
 * @see https://www.npmjs.org/package/grunt-chrome-manifest
 */
module.exports = {
    dist: {
        options: {
            // Auto-increment types. Can be:
            //     'dest': increase build number in dest only
            //     'both', true: increase build number in both origin and dest
            //     undefined, false: do not increase build number
            buildnumber: 'both',

            background: {
                target: 'background.js'
            }
        },
        src    : '<%= app %>',
        dest   : '<%= dist %>'
    }
};
