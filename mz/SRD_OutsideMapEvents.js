/*:
 * @target MZ
 * @plugindesc Let's you place events JUST outside of the map.
 * @author SomeRanDev
 * @url https://youtube.com/@SomeRanDev
 * 
 * @help
 * ============================================================================
 *                               Outside Map Events
 *                                 Version 1.0.0
 *                                   SomeRanDev
 * ============================================================================
 * 
 * Let's you make events that exist one-tile outside of the map.
 * 
 * This is mainly for making map transitions that work by PUSHING into the
 * edge of the map instead of just stepping on an event.
 * 
 * To use it, place an event at the edge of a map, and give it the note:
 * 
 *     <OutsideMap>
 * 
 * It will automatically figure out which direction to move and move one
 * tile so it's outside the map.
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
SRD.OutsideMapEvents = SRD.OutsideMapEvents || {};

var Imported = Imported || {};
Imported["SomeRanDev Outside Map Events"] = [1, 0, 0];

(function(_) {

"use strict";

_.Game_Event_initialize = Game_Event.prototype.initialize;
Game_Event.prototype.initialize = function(mapId, eventId) {
    _.Game_Event_initialize.apply(this, arguments);
	this.setupMapEdgeEvent();
};

Game_Event.prototype.setupMapEdgeEvent = function() {
	const e = this.event();
	if(!e.meta.OutsideMap) {
		return;
	}

	let newX = e.x;
	let newY = e.y;
	if(e.x === 0) {
		newX = -1;
	} else if(e.x === $gameMap.width() - 1) {
		newX = $gameMap.width();
	}
	if(e.y === 0) {
		newY = -1;
	} else if(e.y === $gameMap.height() - 1) {
		newY = $gameMap.height();
	}
	this.locate(newX, newY);
}

})(SRD.OutsideMapEvents);
