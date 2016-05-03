module.exports = function() {
    return {
        js: {
            options: {
                mangle: false,
                beautify: false
            },
            files: {
                'dist/js/app.min.js': ['dist/tmp/js/app.js'],
                'dist/js/checkout.min.js': ['dist/tmp/js/checkout.js']
            }
        }
    }
}
