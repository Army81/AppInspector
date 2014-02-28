/**
 * Grunt aliases
 * @type {Object}
 */
module.exports = {
    docs: [
        'clean:docs',
        'jsduck',
    ],
    dev: [
        'jshint',
        'clean:dist',
        'chromeManifest:dist',
        'exec:dev',
        'copy:dev'
    ],
    build: [
        'jshint',
        'clean:dist',
        'chromeManifest:dist',
        'imagemin:resources',
        'exec:production',
        'imagemin:sencha',
        'copy:dist',
        'compress',
        'docs'
    ],
    default: [
        'build'
    ]
};
