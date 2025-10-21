/*:
 * @target MZ
 * @plugindesc Allows for maps to be mixed together!
 * @author SomeRanDev
 * @url https://youtube.com/@SomeRanDev
 * 
 * @command SetMapMixedRectangle
 * @text Set Map Mixed Rectangle
 * @desc This swaps certain tiles to the alternative map.
 * 
 * @arg TileX
 * @text Tile X
 * @desc The left X position of the rectangle of tiles to swap.
 * @type number
 * @default 0
 * 
 * @arg TileY
 * @text Tile Y
 * @desc The top Y position of the rectangle of tiles to swap.
 * @type number
 * @default 0
 * 
 * @arg Width
 * @text Rect Width
 * @desc The width of the rectangle to swap.
 * Set this and height to 1 to just affect a single tile.
 * @type number
 * @default 1
 * 
 * @arg Height
 * @text Rect Height
 * @desc The width of the rectangle to swap.
 * Set this and width to 1 to just affect a single tile.
 * @type number
 * @default 1
 * 
 * @arg Alternative
 * @text Set to Alternative Map
 * @desc Original - Set tile to original map.
 * Alternative - Set tile to "alternative" map.
 * @type boolean
 * @on Alternative
 * @off Original
 * @default true
 * 
 * @arg Animated
 * @text Is Animated?
 * @desc Animate - Make the tile change animated.
 * Instant - Instantly change the tiles.
 * @type boolean
 * @on Animate
 * @off Instant
 * @default true
 *
 * @command SetMapMixedCircle
 * @text Set Map Mixed Circle
 * @desc This swaps certain tiles to the alternative map.
 * 
 * @arg TileX
 * @text Tile X
 * @desc The center X position of the circle of tiles to swap.
 * @type number
 * @default 0
 * 
 * @arg TileY
 * @text Tile Y
 * @desc The center Y position of the circle of tiles to swap.
 * @type number
 * @default 0
 * 
 * @arg Radius
 * @text Radius
 * @desc The radius of the circle.
 * Set this and height to 1 to just affect a single tile.
 * @type number
 * @default 1
 * 
 * @arg Alternative
 * @text Set to Alternative Map
 * @desc Original - Set tile to original map.
 * Alternative - Set tile to "alternative" map.
 * @type boolean
 * @on Alternative
 * @off Original
 * @default true
 * 
 * @arg Animated
 * @text Is Animated?
 * @desc Animate - Make the tile change animated.
 * Instant - Instantly change the tiles.
 * @type boolean
 * @on Animate
 * @off Instant
 * @default true
 * 
 * @command WaitForMapMixAnimation
 * @text Wait For Map Mix Animation
 * @desc Waits until all tiles have finished their flipping animation.
 *
 * @help
 * ============================================================================
 *                                   Map Mixer
 *                                 Version 1.0.0
 *                                   SomeRanDev
 * ============================================================================
 *
 * For use with ToastyTime collab game (but I guess you can use it too :)
 * 
 * ==========================================================================
 * 
 * To create a "mixed map", you need TWO maps, each with the same
 * size. This size must be big enough to fill the whole screen.
 * 
 * Once you've created two maps, in the main map, use the note:
 * 
 *    <Mix Map ID: X>
 * 
 * With X being the ID to the map this will mix with.
 * 
 * ==========================================================================
 * 
 * Use the plugin commands to swap tiles to the other map.
 * 
 * They should be self explanatory, JUST NOTE:
 * Tiles will reset when re-entering map, so you need to set them
 * up again in an autorun event based on switches or something.
 * 
 * ==========================================================================
 * 
 * HOW EVENTS WORK!!!
 * 
 * If an event is on a tile when it gets flipped, it is disappears.
 * It will only reappear when that same tile is flipped back.
 * 
 * ALTERNATIVELY, if the "other map" has events on a tile that's
 * flipped, that event will JOIN the map as you would expect it to.
 * 
 * Use this to add surprised or create puzzles!!
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
SRD.MapMixer = SRD.MapMixer || {};

var Imported = Imported || {};
Imported["SomeRanDev Map Mixer"] = [1, 0, 0];

$dataMapAlt = null;

$gameMapMixer = null;

function Game_MapMixer() {
	this.initialize(...arguments);
}

function Sprite_AnimatedMapMixTile() {
	this.initialize(...arguments);
}

(function(_) {

"use strict";

function safeParseInt(n, defaultNum, min, max) {
	const result = parseInt(n);
	if(Number.isNaN(result)) {
		return defaultNum;
	}
	return result.clamp(min, max);
}

PluginManager.registerCommand("SRD_MapMixer", "SetMapMixedRectangle", function(args) {
	const tileX = safeParseInt(args.TileX, 0, 0, 99999);
	const tileY = safeParseInt(args.TileY, 0, 0, 99999);
	const width = safeParseInt(args.Width, 1, 1, 99999);
	const height = safeParseInt(args.Height, 1, 1, 99999);
	const value = args.Alternative === "true" ? 255 : 0;
	const animated = args.Animated === "true";
	let delay = 0;
	for(let x = 0; x < width; x++) {
		for(let y = 0; y < height; y++) {
			if(animated) {
				$gameMapMixer.setTileValueAnimated(tileX + x, tileY + y, value, delay * 2.0);
				delay++;
			} else {
				$gameMapMixer.setTileValue(tileX + x, tileY + y, value);
			}
		}
	}
});

PluginManager.registerCommand("SRD_MapMixer", "SetMapMixedCircle", function(args) {
	const tileX = safeParseInt(args.TileX, 0, 0, 99999);
	const tileY = safeParseInt(args.TileY, 0, 0, 99999);
	const radius = safeParseInt(args.Radius, 1, 1, 99999);
	const value = args.Alternative === "true" ? 255 : 0;
	const animated = args.Animated === "true";

	const diameter = radius + radius;
	const radius2 = radius * radius;
	for(let x = 0; x <= diameter; x++) {
		for(let y = 0; y <= diameter; y++) {
			const xOffset = x - radius;
			const yOffset = y - radius;
			const dist2 = xOffset * xOffset + yOffset * yOffset;
			if(dist2 <= radius2) {
				if(animated) {
					$gameMapMixer.setTileValueAnimated(tileX + xOffset, tileY + yOffset, value, Math.sqrt(dist2) * 2.0);
				} else {
					$gameMapMixer.setTileValue(tileX + xOffset, tileY + yOffset, value);
				}
			}
		}
	}
});

PluginManager.registerCommand("SRD_MapMixer", "WaitForMapMixAnimation", function(args) {
	this.setWaitMode("map_mix_animation");
});

// ===============================================================================
// * DataManager
// ===============================================================================

_.DataManager_loadMapData = DataManager.loadMapData;
DataManager.loadMapData = function(mapId) {
	this._hasMixedMap = null;
	_.DataManager_loadMapData.apply(this, arguments);
};

_.DataManager_isMapLoaded = DataManager.isMapLoaded;
DataManager.isMapLoaded = function() {
	const dataMapLoaded = _.DataManager_isMapLoaded.apply(this, arguments);
	if(dataMapLoaded) {
		if(!this.isMapAltLoaded()) {
			return false;
		}
	}
	return dataMapLoaded;
};

DataManager.isMapAltLoaded = function() {
	if(this._hasMixedMap === null) {
		var mixMapID = null;
		const match = /<\s*Mix\s*Map\s*ID\s*:\s*(\d+)\s*>/i.exec($dataMap.note);
		if(match) {
			mixMapID = parseInt(match[1]);
			this._hasMixedMap = true;
		} else {
			this._hasMixedMap = false;
		}

		if(this._hasMixedMap === true) {
			const filename = "Map%1.json".format(mixMapID.padZero(3));
			this.loadDataFile("$dataMapAlt", filename);
		} else {
			$dataMapAlt = null;
		}
	}
	if(this._hasMixedMap === true) {
		if($dataMapAlt === null) {
			return false;
		}
	}
	return true;
}

_.DataManager_createGameObjects = DataManager.createGameObjects;
DataManager.createGameObjects = function() {
	_.DataManager_createGameObjects.apply(this, arguments);
	$gameMapMixer = new Game_MapMixer();
};

_.DataManager_makeSaveContents = DataManager.makeSaveContents;
DataManager.makeSaveContents = function() {
	const contents = _.DataManager_makeSaveContents.apply(this, arguments);
	contents.mapMixer = $gameMapMixer;
	return contents;
};

_.DataManager_extractSaveContents = DataManager.extractSaveContents;
DataManager.extractSaveContents = function(contents) {
	_.DataManager_extractSaveContents.apply(this, arguments);
	$gameMapMixer = contents.mapMixer;
};

// ===============================================================================
// * Game_MapMixer
// ===============================================================================

Game_MapMixer.FLIP_THRESHOLD = 125;
Game_MapMixer.ANIMATION_SPEED = 10;

Game_MapMixer.prototype.initialize = function() {
	this._active = false;
	this._flippedTiles = [];
	this._currentlyFlippingTiles = []; // { index: Int, desiredValue: Int }
	this._queueRefresh = false;
	this._setupMapId = -1;
}

Game_MapMixer.prototype.flippedTiles = function() {
	return this._flippedTiles;
}

Game_MapMixer.prototype.setup = function(mapId) {
	if(this._setupMapId === mapId) {
		return;
	} else {
		this._setupMapId = mapId;
	}

	this._active = $dataMapAlt !== null;
	if(!this._active) {
		this._flippedTiles.length = 0;
		this._currentlyFlippingTiles.length = 0;
		this._setupMapId = -1;
		return;
	}

	const tilesCount = $gameMap.width() * $gameMap.height();
	this._flippedTiles.length = tilesCount;

	for(let i = 0; i < tilesCount; i++) {
		this._flippedTiles[i] = 0;
	}
}

Game_MapMixer.prototype.moveTowards = function(current, target, by) {
	let final = current;
	if(current < target) {
		final += by;
		if(final > target) final = target;
	} else if(current > target) {
		final -= by;
		if(final < target) final = target;
	}
	return final;
}

Game_MapMixer.prototype.update = function() {
	if(!this._active) {
		return;
	}

	let i = 0;
	while(i < this._currentlyFlippingTiles.length) {
		if(this._currentlyFlippingTiles[i].delay <= 0) {
			const index = this._currentlyFlippingTiles[i].index;
			const desiredValue = this._currentlyFlippingTiles[i].desiredValue;
			const newValue = this.moveTowards(this._flippedTiles[index], desiredValue, Game_MapMixer.ANIMATION_SPEED);
			if(this.wouldValueFlipTileIndex(index, newValue)) {
				const tilemapToggler = this.tilemapToggler();
				if(tilemapToggler !== null) {
					const point = this.indexToXy(index);
					$gameMap.flipMixMapEventsAt(point.x, point.y);
					tilemapToggler.setTileValueIndex(index, newValue > Game_MapMixer.FLIP_THRESHOLD ? 255 : 0);
				}
				this._queueRefresh = true;
			}
			this._flippedTiles[index] = newValue;
			if(desiredValue === newValue) {
				this._currentlyFlippingTiles.splice(i, 1);
				continue;
			}
		} else {
			this._currentlyFlippingTiles[i].delay--;
		}
		i++;
	}

	if(this._queueRefresh) {
		const tilemapToggler = this.tilemapToggler();
		if(tilemapToggler !== null) { tilemapToggler.refresh(); }
		this._queueRefresh = false;
	}
}

Game_MapMixer.prototype.xyToIndex = function(x, y) {
	return ($gameMap.width() * y) + x;
}

Game_MapMixer.prototype.indexToXy = function(index) {
	const result = { x: 0, y: 0 };
	result.x = index % $gameMap.width();
	result.y = Math.floor(index / $gameMap.width());
	return result;
}

Game_MapMixer.prototype.xyValid = function(x, y) {
	return x >= 0 && x < $gameMap.width() && y >= 0 && y < $gameMap.height();
}

// TODO: Kind of hacky, could be better
Game_MapMixer.prototype.tilemapToggler = function() {
	return SceneManager._scene?._spriteset?.tilemapToggler;
}

Game_MapMixer.prototype.setTileValue = function(x, y, value) {
	if(!this._active) {
		return;
	}
	if(!this.xyValid(x, y)) {
		return;
	}

	const isFlipping = this.wouldValueFlipTile(x, y, value);
	this._flippedTiles[this.xyToIndex(x, y)] = value;

	const tilemapToggler = this.tilemapToggler();
	if(tilemapToggler !== null) {
		if(isFlipping) {
			$gameMap.flipMixMapEventsAt(x, y);
			tilemapToggler.setTileValue(x, y, value > Game_MapMixer.FLIP_THRESHOLD ? 255 : 0);
			this._queueRefresh = true;
		}
	}
}

Game_MapMixer.prototype.setTileValueAnimated = function(x, y, value, delay) {
	if(!this._active) {
		return;
	}
	if(!this.xyValid(x, y)) {
		return;
	}

	const index = this.xyToIndex(x, y);
	if(this._flippedTiles[index] === value) {
		return false;
	}

	for(const data of this._currentlyFlippingTiles) {
		if(data.index === index) {
			const alreadySet = data.desiredValue === value;
			data.desiredValue = value;
			return !alreadySet;
		}
	}
	
	this._currentlyFlippingTiles.push({
		index,
		desiredValue: value,
		delay
	});

	return true;
}

Game_MapMixer.prototype.getTileValue = function(x, y) {
	if(this._setupMapId === -1 || $dataMapAlt === null) {
		return 0;
	}
	return this._flippedTiles[this.xyToIndex(x, y)];
}

Game_MapMixer.prototype.isAltTile = function(x, y) {
	return this.getTileValue(x, y) > Game_MapMixer.FLIP_THRESHOLD;
}

Game_MapMixer.prototype.wouldValueFlipTile = function(x, y, value) {
	const isAltTile = this.isAltTile(x, y);
	const wouldBeAltTile = value > Game_MapMixer.FLIP_THRESHOLD;
	return isAltTile !== wouldBeAltTile;
}

Game_MapMixer.prototype.wouldValueFlipTileIndex = function(index, value) {
	const isAltTile = this._flippedTiles[index] > Game_MapMixer.FLIP_THRESHOLD;
	const wouldBeAltTile = value > Game_MapMixer.FLIP_THRESHOLD;
	return isAltTile !== wouldBeAltTile;
}

Game_MapMixer.prototype.currentlyFlippingTiles = function() {
	return this._currentlyFlippingTiles;
}

Game_MapMixer.prototype.getValueFromFlippingTileIndex = function(index) {
	if(index >= 0 && index < this._currentlyFlippingTiles.length) {
		return this._flippedTiles[this._currentlyFlippingTiles[index].index];
	}
	return 0;
}

// ===============================================================================
// * Game_Map
// ===============================================================================

_.Game_Map_setup = Game_Map.prototype.setup;
Game_Map.prototype.setup = function(mapId) {
	_.Game_Map_setup.apply(this, arguments);
	$gameMapMixer.setup(mapId);
};

_.Game_Map_tileId = Game_Map.prototype.tileId;
Game_Map.prototype.tileId = function(x, y, z) {
	if($gameMapMixer.isAltTile(x, y)) {
		const width = $dataMapAlt.width;
		const height = $dataMapAlt.height;
		return $dataMapAlt.data[(z * height + y) * width + x] || 0;
	}
	return _.Game_Map_tileId.apply(this, arguments);
};

_.Scene_Map_updateMain = Scene_Map.prototype.updateMain;
Scene_Map.prototype.updateMain = function() {
	_.Scene_Map_updateMain.apply(this, arguments);
	$gameMapMixer.update();
};


_.Game_Map_checkPassage = Game_Map.prototype.checkPassage;
Game_Map.prototype.checkPassage = function(x, y, bit) {
	$gameTemp._isAltTile = $gameMapMixer.isAltTile(x, y);
	return _.Game_Map_checkPassage.apply(this, arguments);
};

_.Game_Map_checkLayeredTilesFlags = Game_Map.prototype.checkLayeredTilesFlags;
Game_Map.prototype.checkLayeredTilesFlags = function(x, y, bit) {
	$gameTemp._isAltTile = $gameMapMixer.isAltTile(x, y);
	return _.Game_Map_checkLayeredTilesFlags.apply(this, arguments);
};

_.Game_Map_terrainTag = Game_Map.prototype.terrainTag;
Game_Map.prototype.terrainTag = function(x, y) {
	$gameTemp._isAltTile = $gameMapMixer.isAltTile(x, y);
	return _.Game_Map_terrainTag.apply(this, arguments);
};

Game_Map.prototype.tilesetAlt = function() {
	return $dataTilesets[$dataMapAlt.tilesetId];
};

_.Game_Map_tilesetFlags = Game_Map.prototype.tilesetFlags;
Game_Map.prototype.tilesetFlags = function() {
	if($gameTemp._isAltTile) {
		const tileset = this.tilesetAlt();
		if (tileset) {
			return tileset.flags;
		} else {
			return [];
		}
	}
	return _.Game_Map_tilesetFlags.apply(this, arguments);
};

_.Game_Map_update = Game_Map.prototype.update;
Game_Map.prototype.update = function() {
	_.Game_Map_update.apply(this, arguments);

	// Wait until events aren't running, then run events under player.
	if(this._queuePlayerCheckEventTrigger && !$gameMap.isEventRunning()) {
		console.log($gamePlayer.x, $gamePlayer.y);
		$gamePlayer.checkEventTriggerHere([1, 2]);
		this._queuePlayerCheckEventTrigger = false;
	}
};

Game_Map.prototype.flipMixMapEventsAt = function(x, y) {
	this.eventsXy(x, y).forEach(function(event) {
		event.flipMixMapStatus();
	});

	if($gamePlayer.x === x && $gamePlayer.y === y) {
		if($gameMap.isEventRunning()) {
			this._queuePlayerCheckEventTrigger = true;
		} else {
			$gamePlayer.checkEventTriggerHere([1, 2]);
		}
	}
};

Game_Map.prototype.setupEvents = function() {
	Game_Event._initiateEventAsAltEvent = false;
	this._altMapsEventsStart = -1;

	this._events = [];
	this._commonEvents = [];
	for (const event of $dataMap.events.filter(event => !!event)) {
		this._events[event.id] = new Game_Event(this._mapId, event.id);
	}

	if($dataMapAlt !== null) {
		Game_Event._initiateEventAsAltEvent = true;

		this._altMapsEventsStart = this._events.length;
		for(const event of $dataMapAlt.events.filter(event => !!event)) {
			const id = this._altMapsEventsStart + event.id;
			this._events[id] = new Game_Event(this._mapId, id);
		}

		Game_Event._initiateEventAsAltEvent = false;
	}

	for (const commonEvent of this.parallelCommonEvents()) {
		this._commonEvents.push(new Game_CommonEvent(commonEvent.id));
	}
	this.refreshTileEvents();
};

// ===============================================================================
// * Game_Event
// ===============================================================================

Game_Event._initiateEventAsAltEvent = false;

_.Game_Event_initMembers = Game_Event.prototype.initMembers;
Game_Event.prototype.initMembers = function() {
	_.Game_Event_initMembers.apply(this, arguments);
	this._isAltEvent = Game_Event._initiateEventAsAltEvent;
	this._isInAltMap = Game_Event._initiateEventAsAltEvent;
};

_.Game_Event_findProperPageIndex = Game_Event.prototype.findProperPageIndex;
Game_Event.prototype.findProperPageIndex = function() {
	if(this._isInAltMap) {
		return -1;
	}
	return _.Game_Event_findProperPageIndex.apply(this, arguments);
};

Game_Event.prototype.flipMixMapStatus = function() {
	this._isInAltMap = !this._isInAltMap;
	this.refresh();
}

_.Game_Event_event = Game_Event.prototype.event;
Game_Event.prototype.event = function() {
	if($gameMap._altMapsEventsStart >= 0 && this._eventId >= $gameMap._altMapsEventsStart) {
		return $dataMapAlt.events[this._eventId - $gameMap._altMapsEventsStart];
	}
	return _.Game_Event_event.apply(this, arguments);
};

_.Game_Event_checkStop = Game_Event.prototype.checkStop;
Game_Event.prototype.checkStop = function(threshold) {
	return _.Game_Event_checkStop.apply(this, arguments) && $gameMapMixer.currentlyFlippingTiles().length === 0;
};

// ===============================================================================
// * Game_Interpreter
// ===============================================================================

_.Game_Interpreter_character = Game_Interpreter.prototype.character;
Game_Interpreter.prototype.character = function(param) {
	if($gameMap._altMapsEventsStart >= 0 && !$gameParty.inBattle() && this.isOnCurrentMap() && param > 0) {
		// If interpreting for an event from the alternative map, convert
		// the event ID param it'susing to the ID for all the combined events.
		//
		// For example, if the base map has 30 events, event ID 3 on the
		// alternative map will be ID 33.
		if(this._eventId >= $gameMap._altMapsEventsStart) {
			return $gameMap.event(param + $gameMap._altMapsEventsStart);
		}
	}

	return _.Game_Interpreter_character.apply(this, arguments);
};

_.Game_Interpreter_updateWaitMode = Game_Interpreter.prototype.updateWaitMode;
Game_Interpreter.prototype.updateWaitMode = function() {
	if(this._waitMode === "map_mix_animation") {
		if($gameMapMixer.currentlyFlippingTiles().length > 0) {
			return true;
		}
	}
	return _.Game_Interpreter_updateWaitMode.apply(this, arguments);
};

// ===============================================================================
// * Tilemap.Layer
// ===============================================================================

Tilemap.Layer.VERTEX_STRIDE = 11 * 4;

Tilemap.Layer.prototype._createVao = function() {
	const ib = new PIXI.Buffer(null, true, true);
	const vb = new PIXI.Buffer(null, true, false);
	const stride = Tilemap.Layer.VERTEX_STRIDE;
	const type = PIXI.TYPES.FLOAT;
	const geometry = new PIXI.Geometry();
	this._indexBuffer = ib;
	this._vertexBuffer = vb;
	this._vao = geometry
		.addIndex(this._indexBuffer)
		.addAttribute("aTextureId", vb, 1, false, type, stride, 0)
		.addAttribute("aFrame", vb, 4, false, type, stride, 1 * 4)
		.addAttribute("aSource", vb, 2, false, type, stride, 5 * 4)
		.addAttribute("aDest", vb, 2, false, type, stride, 7 * 4)
		.addAttribute("aDestBase", vb, 2, false, type, stride, 9 * 4);
};

Tilemap.prototype._addAllSpots = function(startX, startY) {
	$gameTemp._tilemap_startX = (startX + 1) * this.tileWidth;
	$gameTemp._tilemap_startY = (startY + 1) * this.tileHeight;

	this._lowerLayer.clear();
	this._upperLayer.clear();
	const widthWithMatgin = this.width + this._margin * 2;
	const heightWithMatgin = this.height + this._margin * 2;
	const tileCols = Math.ceil(widthWithMatgin / this.tileWidth) + 1;
	const tileRows = Math.ceil(heightWithMatgin / this.tileHeight) + 1;
	for (let y = 0; y < tileRows; y++) {
		for (let x = 0; x < tileCols; x++) {
			this._addSpot(startX, startY, x, y);
		}
	}
};

Tilemap.Layer.prototype.addRect = function(setNumber, sx, sy, dx, dy, w, h) {
	this._elements.push([setNumber, sx, sy, dx, dy, w, h, $gameTemp._tilemap_startX, $gameTemp._tilemap_startY]);
};

Tilemap.Layer.prototype._updateVertexBuffer = function() {
	const numElements = this._elements.length;
	const required = numElements * Tilemap.Layer.VERTEX_STRIDE;
	if (this._vertexArray.length < required) {
		this._vertexArray = new Float32Array(required * 2);
	}
	const vertexArray = this._vertexArray;
	let index = 0;
	for (const item of this._elements) {
		const setNumber = item[0];
		const tid = setNumber >> 2;
		const sxOffset = 1024 * (setNumber & 1);
		const syOffset = 1024 * ((setNumber >> 1) & 1);
		const sx = item[1] + sxOffset;
		const sy = item[2] + syOffset;
		const dx = item[3];
		const dy = item[4];
		const w = item[5];
		const h = item[6];
		const mx = item[7] + dx;
		const my = item[8] + dy;
		const frameLeft = sx + 0.5;
		const frameTop = sy + 0.5;
		const frameRight = sx + w - 0.5;
		const frameBottom = sy + h - 0.5;
		vertexArray[index++] = tid;
		vertexArray[index++] = frameLeft;
		vertexArray[index++] = frameTop;
		vertexArray[index++] = frameRight;
		vertexArray[index++] = frameBottom;
		vertexArray[index++] = sx;
		vertexArray[index++] = sy;
		vertexArray[index++] = dx;
		vertexArray[index++] = dy;
		vertexArray[index++] = mx;
		vertexArray[index++] = my;
		vertexArray[index++] = tid;
		vertexArray[index++] = frameLeft;
		vertexArray[index++] = frameTop;
		vertexArray[index++] = frameRight;
		vertexArray[index++] = frameBottom;
		vertexArray[index++] = sx + w;
		vertexArray[index++] = sy;
		vertexArray[index++] = dx + w;
		vertexArray[index++] = dy;
		vertexArray[index++] = mx;
		vertexArray[index++] = my;
		vertexArray[index++] = tid;
		vertexArray[index++] = frameLeft;
		vertexArray[index++] = frameTop;
		vertexArray[index++] = frameRight;
		vertexArray[index++] = frameBottom;
		vertexArray[index++] = sx + w;
		vertexArray[index++] = sy + h;
		vertexArray[index++] = dx + w;
		vertexArray[index++] = dy + h;
		vertexArray[index++] = mx;
		vertexArray[index++] = my;
		vertexArray[index++] = tid;
		vertexArray[index++] = frameLeft;
		vertexArray[index++] = frameTop;
		vertexArray[index++] = frameRight;
		vertexArray[index++] = frameBottom;
		vertexArray[index++] = sx;
		vertexArray[index++] = sy + h;
		vertexArray[index++] = dx;
		vertexArray[index++] = dy + h;
		vertexArray[index++] = mx;
		vertexArray[index++] = my;
	}
	this._vertexBuffer.update(vertexArray);
};

Tilemap.Layer.prototype.setupRenderShaderUniforms = function(shader) {
	// Tilemap.Layer -> Tilemap.CombinedLayers
	const combinedLayers = this.parent;
	if(combinedLayers?.tilemapToggler) {
		const tilemap = combinedLayers.parent;
		if(tilemap) {
			shader.uniforms.uHiddenTileData = combinedLayers.tilemapToggler.getTexture();
			shader.uniforms.uTileSize = tilemap.tileWidth;
			shader.uniforms.uMapSize[0] = tilemap._mapWidth;
			shader.uniforms.uMapSize[1] = tilemap._mapHeight;
			shader.uniforms.uFlip = combinedLayers._flippedMapMixer;
		}
	}
}

Tilemap.Layer.prototype.render = function(renderer) {
	const gl = renderer.gl;
	const tilemapRenderer = renderer.plugins.rpgtilemap;
	const shader = tilemapRenderer.getShader();
	const matrix = shader.uniforms.uProjectionMatrix;

	this.setupRenderShaderUniforms(shader);

	renderer.batch.setObjectRenderer(tilemapRenderer);
	renderer.projection.projectionMatrix.copyTo(matrix);
	matrix.append(this.worldTransform);
	renderer.shader.bind(shader);

	const combinedLayers = this.parent;
	if(combinedLayers._flippedMapMixer) {
		if (this._needsTexturesUpdate) {
			tilemapRenderer.updateTexturesAlt(renderer, this._images);
			this._needsTexturesUpdate = false;
		}
		tilemapRenderer.bindTexturesAlt(renderer);
	} else {
		if (this._needsTexturesUpdate) {
			tilemapRenderer.updateTextures(renderer, this._images);
			this._needsTexturesUpdate = false;
		}
		tilemapRenderer.bindTextures(renderer);
	}

	renderer.geometry.bind(this._vao, shader);
	this._updateIndexBuffer();
	if (this._needsVertexUpdate) {
		this._updateVertexBuffer();
		this._needsVertexUpdate = false;
	}
	renderer.geometry.updateBuffers();

	const numElements = this._elements.length;
	if (numElements > 0) {
		renderer.state.set(this._state);
		renderer.geometry.draw(gl.TRIANGLES, numElements * 6, 0);
	}
};

// ===============================================================================
// * Tilemap.Renderer
// ===============================================================================

Tilemap.Renderer.prototype._createShader = function() {
	const vertexSrc =
		"attribute float aTextureId;" +
		"attribute vec4 aFrame;" +
		"attribute vec2 aSource;" +
		"attribute vec2 aDest;" +
		"attribute vec2 aDestBase;" +
		"uniform mat3 uProjectionMatrix;" +
		"uniform sampler2D uHiddenTileData;" +
		"uniform float uTileSize;" +
		"uniform vec2 uMapSize;" +
		"uniform bool uFlip;" +
		"varying vec4 vFrame;" +
		"varying vec2 vTextureCoord;" +
		"varying float vTextureId;" +
		"void main(void) {" +
		"  vec3 position = uProjectionMatrix * vec3(aDest, 1.0);" +
		"  gl_Position = vec4(position, 1.0);" +
		"  vFrame = aFrame;" +
		"  vTextureCoord = aSource;" +
		"  vTextureId = aTextureId;" +
		"  vec2 destCoords = (floor(aDestBase / uTileSize) - 0.25) / uMapSize;" +
		"  float red = texture2D(uHiddenTileData, destCoords).r;" +
		"  if(uFlip ? (red < 0.5) : (red >= 0.5)) {" +
		"	 vTextureId = 3.0;" +
		"  }" +
		"}";
	const fragmentSrc =
		"varying vec4 vFrame;" +
		"varying vec2 vTextureCoord;" +
		"varying float vTextureId;" +
		"uniform sampler2D uSampler0;" +
		"uniform sampler2D uSampler1;" +
		"uniform sampler2D uSampler2;" +
		"void main(void) {" +
		"  vec2 textureCoord = clamp(vTextureCoord, vFrame.xy, vFrame.zw);" +
		"  int textureId = int(vTextureId);" +
		"  vec4 color;" +
		"  if (textureId < 0) {" +
		"	color = vec4(0.0, 0.0, 0.0, 0.5);" +
		"  } else if (textureId == 0) {" +
		"	color = texture2D(uSampler0, textureCoord / 2048.0);" +
		"  } else if (textureId == 1) {" +
		"	color = texture2D(uSampler1, textureCoord / 2048.0);" +
		"  } else if (textureId == 2) {" +
		"	color = texture2D(uSampler2, textureCoord / 2048.0);" +
		"  } else if (textureId == 3) {" +
		"	color = vec4(0.0);" +
		"  }" +
		"  gl_FragColor = color;" +
		"}";

	return new PIXI.Shader(PIXI.Program.from(vertexSrc, fragmentSrc), {
		uSampler0: 0,
		uSampler1: 0,
		uSampler2: 0,
		uProjectionMatrix: new PIXI.Matrix(),
		uHiddenTileData: PIXI.Texture.EMPTY,
		uTileSize: 1.0,
		uMapSize: [1.0, 1.0],
		uFlip: false,
	});
};

Tilemap.Renderer.prototype._createInternalTextures = function() {
	this._destroyInternalTextures();
	for (let i = 0; i < Tilemap.Layer.MAX_GL_TEXTURES; i++) {
		const baseTexture = new PIXI.BaseRenderTexture();
		baseTexture.resize(2048, 2048);
		baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
		this._internalTextures.push(baseTexture);
	}

	if(!this._internalTexturesAlt) {
		this._internalTexturesAlt = [];
	}
	for (let i = 0; i < Tilemap.Layer.MAX_GL_TEXTURES; i++) {
		const baseTexture = new PIXI.BaseRenderTexture();
		baseTexture.resize(2048, 2048);
		baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
		this._internalTexturesAlt.push(baseTexture);
	}
};

Tilemap.Renderer.prototype._destroyInternalTextures = function() {
	for (const internalTexture of this._internalTextures) {
		internalTexture.destroy();
	}
	this._internalTextures = [];

	if(this._internalTexturesAlt) {
		for (const internalTexture of this._internalTexturesAlt) {
			internalTexture.destroy();
		}
		this._internalTexturesAlt = [];
	}
};

Tilemap.Renderer.prototype.updateTexturesAlt = function(renderer, images) {
	for (let i = 0; i < images.length; i++) {
		const internalTexture = this._internalTexturesAlt[i >> 2];
		renderer.texture.bind(internalTexture, 0);
		const gl = renderer.gl;
		const x = 1024 * (i % 2);
		const y = 1024 * ((i >> 1) % 2);
		const format = gl.RGBA;
		const type = gl.UNSIGNED_BYTE;
		gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0);
		// prettier-ignore
		gl.texSubImage2D(gl.TEXTURE_2D, 0, x, y, 1024, 1024, format, type,
						 this._clearBuffer);
		gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
		gl.texSubImage2D(gl.TEXTURE_2D, 0, x, y, format, type, images[i]);
	}
};

Tilemap.Renderer.prototype.bindTexturesAlt = function(renderer) {
	for (let ti = 0; ti < Tilemap.Layer.MAX_GL_TEXTURES; ti++) {
		renderer.texture.bind(this._internalTexturesAlt[ti], ti);
	}
};

// ===============================================================================
// * Spriteset_Map
// ===============================================================================

_.Spriteset_Map_createTilemap = Spriteset_Map.prototype.createTilemap;
Spriteset_Map.prototype.createTilemap = function() {
	_.Spriteset_Map_createTilemap.apply(this, arguments);
	this._animatedMapMixTiles = [];
	this._cachedAnimatedMapMixedTiles = [];
	this.createTilemapToggler();
	this.createTilemapAlt();
};

Spriteset_Map.prototype.loadTileset2 = function() {
	this._tileset2 = $dataTilesets[$dataMapAlt.tilesetId];
	if(this._tileset2) {
		const bitmaps = [];
		const tilesetNames = this._tileset2.tilesetNames;
		for(const name of tilesetNames) {
			bitmaps.push(ImageManager.loadTileset(name));
		}
		this._tilemap2.setBitmaps(bitmaps);
		this._tilemap2.flags = this._tileset2.flags;
	}
};

Spriteset_Map.prototype.createTilemapToggler = function() {
	this.tilemapToggler = new _.TilemapTileToggler($gameMap.width(), $gameMap.height());
	this._tilemap._lowerLayer.tilemapToggler = this.tilemapToggler;
	this._tilemap._upperLayer.tilemapToggler = this.tilemapToggler;
	this._tilemap._lowerLayer._flippedMapMixer = false;
	this._tilemap._upperLayer._flippedMapMixer = false;
	this.tilemapToggler.makeFilter();
};

Spriteset_Map.prototype.getOrMakeAnimated = function(index) {
	while(index >= this._animatedMapMixTiles.length) {
		const s = new Sprite_AnimatedMapMixTile();
		this.addChild(s);
		this._animatedMapMixTiles.push(s);
	}
	return this._animatedMapMixTiles[index];
};

Spriteset_Map.prototype.createTilemapAlt = function() {
	if($dataMapAlt === null) {
		return;
	}

	if($gameMap.width() !== $dataMapAlt.width || $gameMap.height() !== $dataMapAlt.height) {
		throw "Alternative map is not the same size as the main map.";
	}

	if($gameMap.width() * $gameMap.tileWidth() < Graphics.width || $gameMap.height() * $gameMap.tileHeight() < Graphics.height) {
		const minWidth = Math.ceil(Graphics.width / $gameMap.tileWidth());
		const minHeight = Math.ceil(Graphics.height / $gameMap.tileHeight());
		throw "Sorry!! Mixed maps must have sizes that fill the whole screen. They need to be at least " + minWidth + " x " + minHeight + " tiles. This map is: " + $gameMap.width() + " x " + $gameMap.height() + " tiles.";
	}

	const tilemap2 = new Tilemap();
	tilemap2.tileWidth = $gameMap.tileWidth();
	tilemap2.tileHeight = $gameMap.tileHeight();
	tilemap2.setData($dataMapAlt.width, $dataMapAlt.height, $dataMapAlt.data);
	tilemap2.horizontalWrap = $gameMap.isLoopHorizontal();
	tilemap2.verticalWrap = $gameMap.isLoopVertical();
	this._tilemap2 = tilemap2;
	this.loadTileset2();

	this._baseSprite.addChild(this._tilemap2);

	this._tilemap2.removeChild(this._tilemap2._lowerLayer);
	this._tilemap2.removeChild(this._tilemap2._upperLayer);

	this._tilemap.addChild(this._tilemap2._lowerLayer);
	this._tilemap.addChild(this._tilemap2._upperLayer);

	this._tilemap2._lowerLayer.tilemapToggler = this.tilemapToggler;
	this._tilemap2._upperLayer.tilemapToggler = this.tilemapToggler;
	this._tilemap2._lowerLayer._flippedMapMixer = true;
	this._tilemap2._upperLayer._flippedMapMixer = true;

	this.generateMixOutlineSprite();
}

_.Spriteset_Map_update = Spriteset_Map.prototype.update;
Spriteset_Map.prototype.update = function() {
	_.Spriteset_Map_update.apply(this, arguments);

	this.updateAnimatedMapMixTiles();

	if(this.mixOutlineSprite && this.mixOutlineSpriteFilter) {
		this.mixOutlineSprite.x = $gameMap.adjustX(0) * $gameMap.tileWidth();
		this.mixOutlineSprite.y = $gameMap.adjustY(0) * $gameMap.tileHeight();
		const point = this.mixOutlineSprite.getGlobalPosition();
		// this.mixOutlineSpriteFilter.uniforms.uRealOffset[0] = point.x;
		// this.mixOutlineSpriteFilter.uniforms.uRealOffset[1] = point.y;
		this.mixOutlineSprite.getGlobalPosition(this.mixOutlineSpriteFilter.uniforms.uRealOffset);
		this.mixOutlineSpriteFilter.uniforms.uTime = Graphics.frameCount;
	}
}

Spriteset_Map.prototype.generateMixOutlineSprite = function() {
	const t = this.tilemapToggler.getTexture();

	this.mixOutlineSprite = new PIXI.Graphics();
	this.mixOutlineSprite.beginFill(0xffffff);
	this.mixOutlineSprite.drawRect(0, 0, t.width * $gameMap.tileWidth(), t.height * $gameMap.tileHeight());
	this.mixOutlineSprite.endFill();
	this.mixOutlineSprite.z = 1;
	//s.scale.set(0.1);
	//s.alpha = 1.0;
	this._tilemap.addChild(this.mixOutlineSprite);
	this._tilemap.updateTransform();

	this.mixOutlineSpriteFilter = new PIXI.Filter(
		PIXI.Filter.defaultVertexSrc,
		`
varying vec2 vTextureCoord;
varying vec2 tempPos;

uniform highp vec4 inputSize;
uniform highp vec4 outputFrame;

uniform vec2 uRealOffset;
uniform vec4 inputPixel;
uniform sampler2D uSampler;
uniform sampler2D bla;
uniform vec4 filterArea;
uniform vec2 dimensions;
uniform float uTime;
uniform vec2 uTileSize;

// https://www.shadertoy.com/view/XljGzV
vec3 hsv2rgb(vec3 c) {
	vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
	vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
	return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main(void) {
	vec2 actualCoord = (vTextureCoord * inputSize.xy) - uRealOffset;
	vec2 uv = actualCoord / (dimensions * uTileSize);

	//float aspectRatio = uTileSize.x / uTileSize.y;
	vec2 outlineResolution = dimensions * 20.0;
	vec2 outlinePixelSize = 1.0 / outlineResolution;

	float r = texture2D(bla, uv).r * 4.0;
	float sidesRed = 0.0;
	float wavyx = sin((uTime * 0.1) + uv.y * outlineResolution.y * 0.25);
	float wavyy = sin((uTime * 0.1) + uv.x * outlineResolution.x * 0.25);
	sidesRed += texture2D(bla, uv + vec2(outlinePixelSize.x + wavyx * outlinePixelSize.x, 0.0)).r;
	sidesRed += texture2D(bla, uv + vec2(-outlinePixelSize.x + wavyx * outlinePixelSize.x, 0.0)).r;
	sidesRed += texture2D(bla, uv + vec2(0.0, outlinePixelSize.y + wavyy * outlinePixelSize.y)).r;
	sidesRed += texture2D(bla, uv + vec2(0.0, -outlinePixelSize.y + wavyy * outlinePixelSize.y)).r;

	if(abs(r - sidesRed) > 0.5) {
		gl_FragColor = vec4(hsv2rgb(vec3(uTime * 0.005 + uv.x * 0.5 + uv.y * 0.5, 0.75, 1.0)), 1.0);
	} else {
		gl_FragColor = vec4(0.0);
	}
}
		`,
		{
			bla: t,
			dimensions: [t.width, t.height],
			uRealOffset: this.mixOutlineSprite.getGlobalPosition(),
			uTime: 0.0,
			uTileSize: [$gameMap.tileWidth(), $gameMap.tileHeight()]
		}
	);

	this.mixOutlineSprite.filters = [ this.mixOutlineSpriteFilter ];
}

_.Spriteset_Map_updateTilemap = Spriteset_Map.prototype.updateTilemap;
Spriteset_Map.prototype.updateTilemap = function() {
	_.Spriteset_Map_updateTilemap.apply(this, arguments);
	if(this._tilemap2) {
		this._tilemap2.origin.x = this._tilemap.origin.x;
		this._tilemap2.origin.y = this._tilemap.origin.y;
		this._tilemap2.updateTransform();
	}
};

Spriteset_Map.prototype.updateAnimatedMapMixTiles = function() {
	function cubicIn(r) { return r*r*r; }

	let activeFlippingTiles = 0;
	const flippingTiles = $gameMapMixer.currentlyFlippingTiles();
	for(let i = 0; i < flippingTiles.length; i++) {
		if(flippingTiles[i].delay > 0) {
			continue;
		}

		const xy = $gameMapMixer.indexToXy(flippingTiles[i].index);
		const sprite = this.getOrMakeAnimated(activeFlippingTiles);
		sprite.x = $gameMap.adjustX(xy.x) * $gameMap.tileWidth();
		sprite.y = $gameMap.adjustY(xy.y) * $gameMap.tileHeight();

		const animationRatio = $gameMapMixer.getValueFromFlippingTileIndex(i) / 255.0;
		if(animationRatio < 0.5) {
			sprite.alpha = cubicIn(animationRatio * 2.0);
		} else {
			sprite.alpha = cubicIn(1.0 - ((animationRatio - 0.5) * 2.0));
		}

		activeFlippingTiles++;
	}

	while(activeFlippingTiles < this._animatedMapMixTiles.length) {
		const c = this._animatedMapMixTiles.pop();
		this.removeChild(c);
		this._cachedAnimatedMapMixedTiles.push(c);
	}
};

// ===============================================================================
// * Sprite_AnimatedMapMixTile
// ===============================================================================

Sprite_AnimatedMapMixTile.prototype = Object.create(Sprite.prototype);
Sprite_AnimatedMapMixTile.prototype.constructor = Sprite_AnimatedMapMixTile;

Sprite_AnimatedMapMixTile.prototype.initialize = function() {
	Sprite.prototype.initialize.call(this);
	this.bitmap = ImageManager.loadBitmap("img/plugins/SRD_MapMixer/", "WhiteTile");
};

// ===============================================================================
// * TilemapTileToggler
// ===============================================================================

_.TilemapTileToggler = class TilemapTileToggler {
	_tilemapWidth = 0;
	_tilemapHeight = 0;
	_dataSize = 0;

	_data = null;
	_buffer = null;
	_baseTexture = null;
	_texture = null;

	constructor(tilemapWidth, tilemapHeight) {
		this._tilemapWidth = tilemapWidth;
		this._tilemapHeight = tilemapHeight;

		this._dataSize = tilemapWidth * tilemapHeight * 4;
	}

	getTexture() {
		return this._texture;
	}

	makeFilter() {
		// Ensure its a multiple of 4.
		this._data = new Uint8Array(this._dataSize);

		const mapMixerData = $gameMapMixer.flippedTiles();
		for(let i = 0; i < mapMixerData.length; i++) {
			const index = i * 4;
			this._data[index] = mapMixerData[i];
			this._data[index + 1] = 255;
			this._data[index + 2] = 255;
			this._data[index + 3] = 255;
		}

		this._baseTexture = PIXI.BaseTexture.fromBuffer(this._data, this._tilemapWidth, this._tilemapHeight, PIXI.FORMATS.RGBA);
		this._baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

		this._texture = new PIXI.Texture(this._baseTexture);
	}

	setTileValue(x, y, value) {
		if(x >= 0 && x < this._tilemapWidth && y >= 0 && y < this._tilemapHeight) {
			const index = (y * this._tilemapWidth) + x;
			this.setTileValueIndex(index, value);
		}
	}

	setTileValueIndex(index, value) {
		this._data[index * 4] = value;
	}

	refresh() {
		this._baseTexture.update();
	}
}

})(SRD.MapMixer);