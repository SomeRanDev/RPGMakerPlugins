/*:
 * @target MZ
 * @plugindesc Instead of stretching the frames around windows, this will make window frames repeat.
 * @author SomeRanDev
 * @url https://youtube.com/@SomeRanDev
 *
 * @help
 * ============================================================================
 *                           Window Frame Anti-Stretch
 *                                 Version 1.0.0
 *                                   SomeRanDev
 * ============================================================================
 *
 * This plugin fixes the atrocious stretch applied to window frames.
 *
 * Compatibility errors should be very rare, but may occur with plugins 
 * changing the core Window class. Place this plugin lower in the plugin list
 * for higher likelyhood of success.
 *
 * That's it. Just plug it in and go!
 *
 * ============================================================================
 *  Terms of Use
 * ============================================================================
 *
 * http://sumrndm.site/terms-of-use/
 *
 * ============================================================================
 *  End of Help File
 * ============================================================================
 *
 * https://www.youtube.com/@SumRndmDde (good content)
 * https://twitch.tv/SomeRanDev (livestreams maybe)
 * https://bsky.app/profile/someran.dev (active gamedev posts maybe)
 * http://sumrndm.site
 *
 * Until next time,
 *   ~ SomeRanDev
 */

var SRD = SRD || {};
SRD.WindowFrameAntiStretch = SRD.WindowFrameAntiStretch || {};

var Imported = Imported || {};
Imported.SRD_WindowFrameAntiStretch = 0x010000; // 1.0.0

(function($) {

"use strict";

Window.prototype._createFrameSprite = function() {
	this._frameSprite = new Sprite();
	for (let i = 0; i < 4; i++) {
		this._frameSprite.addChild(new Sprite());
	}
	for (let i = 4; i < 8; i++) {
		this._frameSprite.addChild(new TilingSprite());
	}
	this._container.addChild(this._frameSprite);
};

Window.prototype._refreshFrame = function() {
	const drect = { x: 0, y: 0, width: this._width, height: this._height };
	const srect = { x: 96, y: 0, width: 96, height: 96 };
	const m = 24;
	for (const child of this._frameSprite.children) {
		child.bitmap = this._windowskin;
	}
	this._setRectPartsGeometryForFrame_SRDWFAS(this._frameSprite, srect, drect, m);
};

Window.prototype._setRectPartsGeometryForFrame_SRDWFAS = function(sprite, srect, drect, m) {
	const sx = srect.x;
	const sy = srect.y;
	const sw = srect.width;
	const sh = srect.height;
	const dx = drect.x;
	const dy = drect.y;
	const dw = drect.width;
	const dh = drect.height;
	const smw = sw - m * 2;
	const smh = sh - m * 2;
	const dmw = dw - m * 2;
	const dmh = dh - m * 2;
	const children = sprite.children;
	sprite.setFrame(0, 0, dw, dh);
	sprite.move(dx, dy);
	// corner
	children[0].setFrame(sx, sy, m, m);
	children[1].setFrame(sx + sw - m, sy, m, m);
	children[2].setFrame(sx, sy + sw - m, m, m);
	children[3].setFrame(sx + sw - m, sy + sw - m, m, m);
	children[0].move(0, 0);
	children[1].move(dw - m, 0);
	children[2].move(0, dh - m);
	children[3].move(dw - m, dh - m);
	// edge
	children[4].move(m, 0, dmw, m);
	children[5].move(m, dh - m, dmw, m);
	children[6].move(0, m, m, dmh);
	children[7].move(dw - m, m, m, dmh);
	children[4].setFrame(sx + m, sy, smw, m);
	children[5].setFrame(sx + m, sy + sw - m, smw, m);
	children[6].setFrame(sx, sy + m, m, smh);
	children[7].setFrame(sx + sw - m, sy + m, m, smh);
	//children[4].scale.x = dmw / smw;
	//children[5].scale.x = dmw / smw;
	//children[6].scale.y = dmh / smh;
	//children[7].scale.y = dmh / smh;
	// center
	if (children[8]) {
		children[8].setFrame(sx + m, sy + m, smw, smh);
		children[8].move(m, m);
		children[8].scale.x = dmw / smw;
		children[8].scale.y = dmh / smh;
		children[8].visible = false;
	}
	for (const child of children) {
		child.visible = dw > 0 && dh > 0;
	}
};

})(SRD.WindowFrameAntiStretch);
