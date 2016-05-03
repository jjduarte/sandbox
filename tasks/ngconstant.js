module.exports = function () {
    return {
        // Options for all targets
        options: {
            space: '  ',
            wrap: '"use strict";\n\n {%= __ngModule %}',
            name: 'constants',
            dest: 'app/dist/js/constants.js'
        },
        local: {
            constants: {
                ENV: {
                    name: 'local'
                }
            }
        },
        dev: {
            constants: {
                ENV: {
                    name: 'dev'
                }
            }
        },
        prod: {
            constants: {
                ENV: {
                    name: 'prod'
                }
            }
        }
    }
}
