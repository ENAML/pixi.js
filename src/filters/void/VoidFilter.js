var core = require('../../core');
// @see https://github.com/substack/brfs/issues/25

/**
 * Does nothing. Very handy.
 *
 * @class
 * @extends PIXI.Filter
 * @memberof PIXI.filters
 */
function VoidFilter()
{
    core.Filter.call(this,
        // vertex shader
        require('./void.vert'),
        // fragment shader
        require('./void.frag')
    );

    this.glShaderKey = 'void';
}

VoidFilter.prototype = Object.create(core.Filter.prototype);
VoidFilter.prototype.constructor = VoidFilter;
module.exports = VoidFilter;
