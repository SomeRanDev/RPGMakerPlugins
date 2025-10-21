/*:
 * @target MZ
 * @plugindesc Makes an event bigger so it can trigger on tiles next to it.
 * @author SomeRanDev
 * @url https://youtube.com/@SomeRanDev
 * 
 * @help
 * ============================================================================
 *                              Stretch Event Trigger
 *                                 Version 1.0.0
 *                                   SomeRanDev
 * ============================================================================
 *
 * This plugin "stretches" a trigger event so it takes up more than one tile.
 *
 * To make the event wider, use:
 * 
 *    <StretchX: X>
 * 
 * This will streeeeetch it right and make it X tiles wide.
 * Since events stretch to the right, they should be on the left-most tile.
 * 
 * <StretchX: 2> will make it trigger on its own tile and the one to the right.
 * 
 * <StretchX: 1> will do nothing since events are already are 1 tile big.
 * 
 *  ----------------------------------------
 * 
 * To make the event stretch lower, use:
 * 
 *    <StretchY: X>
 * 
 * This will streeeeetch it down and make it Y tiles low.
 * Since events stretch downward, they should be on the top-most tile.
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
SRD.StretchEventTrigger = SRD.StretchEventTrigger || {};

var Imported = Imported || {};
Imported["SomeRanDev Stretch Event Trigger"] = [1, 0, 0];

(function(_) {

"use strict";

_.Game_Event_pos = Game_Event.prototype.pos;
Game_Event.prototype.pos = function(x, y) {
	if(this._stretchX > 0 || this._stretchY > 0) {
		return (
			x >= this._x && x <= (this._x + this._stretchX) &&
			y >= this._y && y <= (this._y + this._stretchY)
		);
	}
	return _.Game_Event_pos.apply(this, arguments);
};

_.Game_Event_initialize = Game_Event.prototype.initialize;
Game_Event.prototype.initialize = function(mapId, eventId) {
	_.Game_Event_initialize.apply(this, arguments);
	
	const e = this.event();
	if(e.meta.StretchX) {
		this._stretchX = parseInt(e.meta.StretchX.trim());
		if(isNaN(this._stretchX)) this._stretchX = 0;
		else this._stretchX--;
	} else {
		this._stretchX = 0;
	}

	if(e.meta.StretchY) {
		this._stretchY = parseInt(e.meta.StretchY.trim());
		if(isNaN(this._stretchY)) this._stretchY = 0;
		else this._stretchY--;
	} else {
		this._stretchY = 0;
	}
};

})(SRD.StretchEventTrigger);
