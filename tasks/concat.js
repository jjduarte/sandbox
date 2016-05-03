module.exports = function() {
    return {
        options: {
            separator: ';',
        },
        app: {
            files: [{
                dest: 'dist/tmp/js/app.js',
                src: [
                    'app/app.module.js',
                    'app/app.config.js'
                ]
            }]
        },
        checkout: {
            files: [{
                dest: 'dist/tmp/js/checkout.js',
                src: [
                    'app/modules/checkout/**/*.js'
                ]
            }]
        }
    }
}
