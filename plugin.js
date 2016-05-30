/**
 * PLUGIN_NAME
 *
 * Styleguide plugin PLUGIN_DESC
 */

function PLUGIN_NAME(options) {
    this.options = options || {};

    if (typeof this.options.someVariable === 'undefined') {
        throw new Error('The "someVariable" option of the PLUGIN_NAME must be specified.\n\n');
    }
}

/**
 * Initializes the plugin, called after the main function above
 */
PLUGIN_NAME.prototype.apply = function apply(compiler) {
    var options = this.options;
    compiler.plugin('compilation', function(compilation) {
        // Called before processing the components, mutate data to pass it around
        compilation.plugin('styleguide-plugin-before-processing', function(data) {
            data.someVariable = options.someVariable;
        });
        // Called after the processing, gets the renderToClient API to visually
        // render something in the client area
        compilation.plugin('styleguide-plugin-processing', function(renderToClient) {
          renderToClient({
                name: 'PLUGIN_NAME',
                frontendData: { options: options },
                frontendPlugin: `${require.resolve('./frontend.js')}`,
            });
        });
    });
};

export default PLUGIN_NAME;
