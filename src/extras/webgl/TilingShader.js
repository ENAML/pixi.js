var Shader = require('../../core/Shader');

/**
 * @class
 * @extends PIXI.Shader
 * @memberof PIXI.mesh
 * @param gl {PIXI.Shader} The WebGL shader manager this shader works for.
 */
function TilingShader(gl)
{
    Shader.call(this,
        gl,
        require('./tilingSprite.vert'),
        require('./tilingSprite.frag')
    );
}

TilingShader.prototype = Object.create(Shader.prototype);
TilingShader.prototype.constructor = TilingShader;
module.exports = TilingShader;

