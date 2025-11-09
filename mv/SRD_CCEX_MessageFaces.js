/*:
 * @plugindesc Allows custom characters to have multiple expressions to be used in Show Text events.
 * @author SumRndmDde
 *
 * @param Face Data
 * @type Struct<Customs>[][]
 * @desc The list of customized face setups used for characters created through the Character Creator EX.
 * @default ["[\"{\\\"Custom Section\\\":\\\"Eyebrows\\\",\\\"Custom Piece\\\":\\\"Eyebrows (10)\\\"}\",\"{\\\"Custom Section\\\":\\\"Mouth\\\",\\\"Custom Piece\\\":\\\"Mouth (1)\\\"}\"]","[\"{\\\"Custom Section\\\":\\\"Eyes\\\",\\\"Custom Piece\\\":\\\"Eyes (15)\\\"}\"]","[\"{\\\"Custom Section\\\":\\\"Mouth\\\",\\\"Custom Piece\\\":\\\"Mouth (5)\\\"}\"]"]
 *
 * @help
 *
 * Character Creator EX: Message Faces
 * Version 1.01
 * SumRndmDde
 *
 *
 * This plugin requires the Character Creator EX plugin:
 * http://sumrndm.site/character-creator-ex/
 *
 *
 * This plugin allows developers to give custom characters multiple expressions
 * through Show Text events. They are created by changing specific pieces of the
 * custom character's face image.
 *
 *
 * ==============================================================================
 *  How to Set up the Parameters
 * ==============================================================================
 *
 * First open up the "Face Data".
 *
 * Next, create a new instance in the list.
 *
 * Within that list, you can list out a bunch of custom section/piece combos
 * in order to customize the piece overrides for the new expressions.
 *
 * Be sure to check out the default expressions if you need help!
 *
 *
 * ==============================================================================
 *  Message Notetags
 * ==============================================================================
 *
 * If you wish to use a custom face, simply add another parameter to the normal
 * Custom Face notetag within the Show Text event:
 *
 *
 *   <CC Face: [actorId], [faceId]>
 *
 * Set [actorId] to the ID of the Actor who's face you wish to be displayed.
 * Set [faceId] to the ID of the custom face in the "Face Data" list.
 *
 *
 * For example:
 *
 *   <CC Face 1, 3>
 *
 * This would show the custom character face of Actor ID 1 and force the custom
 * face 3 pieces to be used with it.
 *
 *
 *
 * ==============================================================================
 *  Message Escape Codes
 * ==============================================================================
 *
 * If you wish to dynamically change the face as the message is on-going, one
 * may do so by using the following escape code:
 *
 *
 *   \CCFace<id, exp>
 *
 * This will change the custom character face to the one specified using the 
 * "id" and the Face Data id defined through "exp".
 *
 *
 * If one wishes to revert the face back to its original, simply use:
 *
 *   \CCReset
 *
 *
 * ==============================================================================
 *  End of Help File
 * ==============================================================================
 * 
 * Welcome to the bottom of the Help file.
 *
 *
 * Thanks for reading!
 * If you have questions, or if you enjoyed this Plugin, please check
 * out my YouTube channel!
 *
 * https://www.youtube.com/c/SumRndmDde
 *
 *
 * Until next time,
 *   ~ SumRndmDde
 *
 */

/*~struct~Customs:
 *
 * @param Custom Section
 * @desc The section in which the custom piece is from.
 * @default
 *
 * @param Custom Piece
 * @desc The custom piece from the specified section.
 * @default
 *
 */

var SRD = SRD || {};
SRD.CCEXFaces = SRD.CCEXFaces || {};

var Imported = Imported || {};
Imported["SumRndmDde CCEX Message Faces"] = 1.01;

(function(_, __) {

"use strict";

//-----------------------------------------------------------------------------
// SRD.Requirements
//-----------------------------------------------------------------------------

_.alertNeedGameUpgrade = function() {
	alert("The 'SRD_GameUpgrade' plugin is required for using the 'SRD_CCEX_MessageFaces' plugin.");
	if(confirm("Do you want to open the download page to 'SRD_GameUpgrade'?")) {
		window.open('http://sumrndm.site/game-upgrade/');
	}
};

if(!Imported["SumRndmDde Game Upgrade"]) {
	_.alertNeedGameUpgrade();
	return;
}

if(SRD.requirePlugin(
	'SumRndmDde Character Creator EX', 
	'SRD_CCEX_MessageFaces', 
	'SRD_CharacterCreatorEX', 
	'http://sumrndm.site/character-creator-ex/')) return;

//-----------------------------------------------------------------------------
// SRD.CustomFaces
//-----------------------------------------------------------------------------

_.data = SRD.parse(PluginManager.parameters('SRD_CCEX_MessageFaces')['Face Data']);

_.setup = function() {
	_.sections = [];
	_.pieces = [];
	for(let i = 1; i <= _.data.length; i++) {
		const dat = _.data[i - 1];
		_.sections[i] = [];
		_.pieces[i] = [];
		for(let j = 0; j < dat.length; j++) {
			_.sections[i].push(dat[j]['Custom Section']);
			_.pieces[i].push(dat[j]['Custom Piece']);
		}
	}
};

_.setup();

//-----------------------------------------------------------------------------
// Game_Actor
//-----------------------------------------------------------------------------

Game_Actor.prototype.getCreatorBitmapFaceThatIsCustom = function(faceId) {
	return $gameCharacterCreations.buildBitmapFaceThatIsCustom(this.actorId(), faceId);
};

//-----------------------------------------------------------------------------
// Game_CharacterCreations
//-----------------------------------------------------------------------------

Game_CharacterCreations.prototype.buildBitmapFaceThatIsCustom = function(id, faceId) {
	const data = JsonEx.makeDeepCopy(this.getInfo(id, 'face'));
	const sections = _.sections[faceId];
	const pieces = _.pieces[faceId];
	if(!data || !sections || !pieces) return null;
	for(let i = 0; i < __.priorities.length; i++) {
		const section = __.priorities[i];
		if(data[section]) {
			const info = data[section];
			const raw = (section.match(/ Part\d+/i)) ? section.replace(/ Part\d+/i, '') : section;
			const index = sections.indexOf(raw);
			let file = info.file;
			if(index >= 0 && !!pieces[index]) {
				info.file = pieces[index];
			}
		}
	}
	return data;
};

Game_CharacterCreations.prototype.buildDataBitmapFaceThatIsCustom = function(mydata, faceId) {
	const data = JsonEx.makeDeepCopy(mydata);
	const sections = _.sections[faceId];
	const pieces = _.pieces[faceId];
	if(!data || !sections || !pieces) return null;
	for(let i = 0; i < __.priorities.length; i++) {
		const section = __.priorities[i];
		if(data[section]) {
			const info = data[section];
			const raw = (section.match(/ Part\d+/i)) ? section.replace(/ Part\d+/i, '') : section;
			const index = sections.indexOf(raw);
			let file = info.file;
			if(index >= 0 && !!pieces[index]) {
				info.file = pieces[index];
			}
		}
	}
	return data;
};

//-----------------------------------------------------------------------------
// Window_Base
//-----------------------------------------------------------------------------

Window_Base.prototype.getCustomFaceThatIsCustom = function(actor, faceId) {
	let bitmap;
	if(actor.hasSetImage()) {
		this._curData = actor.getCreatorBitmapFaceThatIsCustom(faceId);
		bitmap = $gameCharacterCreations.buildBitmapFromInfo(this._curData, 'face');
		if(!bitmap) return null;
	} else {
		bitmap = __.loadImage('CustomFace', 0);
	}
	return bitmap;
};

Window_Base.prototype.drawCustomFaceThatIsCustom = function(bitmap, x, y) {
	const width = Window_Base._faceWidth;
	const height = Window_Base._faceHeight;
	this.contents.clearRect(0, 0, width, height);
	this.contents.blt(bitmap, 0, 0, width, height, x, y);
};

//-----------------------------------------------------------------------------
// Window_Message
//-----------------------------------------------------------------------------

Window_Message.prototype.drawMessageFace = function() {
	const text = (this._textState) ? this._textState.text : '';
	if(text.match(/<CC\s?Face:\s*(\d+)\s*,\s*(\d+)\s*>/i)) {
		this._textState.text = text.replace(/<CC\s?Face:\s*(\d+)\s*,\s*(\d+)\s*>/i, '');
		const id = parseInt(RegExp.$1);
		const face = parseInt(RegExp.$2);
		this._defaultActor = id;
		this._defaultCCFace = this.getCustomFaceThatIsCustom($gameActors.actor(id), face);
		this.drawCustomFaceThatIsCustom(this._defaultCCFace, 0, 0);
	} else if(text.match(/<CC\s?Face:\s*(\d+)\s*>/i)) {
		this._textState.text = text.replace(/<CC\s?Face:\s*(\d+)\s*>/i, '');
		const id = parseInt(RegExp.$1);
		this._curData = $gameCharacterCreations.getInfo(id, 'face');
		this.drawCustomFace($gameActors.actor(id), 0, 0);
	} else {
		this._curData = null;
		__.Window_Message_drawMessageFace.apply(this, arguments);
	}
};

_.Window_Message_obtainEscapeCode = Window_Message.prototype.obtainEscapeCode;
Window_Message.prototype.obtainEscapeCode = function(textState) {
	var face = (Imported.YEP_MessageCore) ? !this._checkWordWrapMode : true;
	textState.index++;
	if(textState.text.slice(textState.index, textState.index+6).match(/ccface/i)) {
		textState.index += 6;
		return (face) ? "CCFACE" : "";
	} else if(textState.text.slice(textState.index, textState.index+7).match(/ccreset/i)) {
		textState.index += 7;
		return (face) ? "CCRESET" : "";
	} else {
		textState.index--;
		return _.Window_Message_obtainEscapeCode.call(this, textState);
	}
};

_.Window_Message_processEscapeCharacter = Window_Message.prototype.processEscapeCharacter;
Window_Message.prototype.processEscapeCharacter = function(code, textState) {
	switch (code) {
	case 'CCFACE':
		if(this._customCache === undefined) this._customCache = [];
		var info = String(this.obtainCCExpressionParams(textState)).match(/(.+)\s*,\s*(.+)/);
		var id = parseInt(info[1]);
		var face = parseInt(info[2]);
		if(this._customCache[id] && this._customCache[id][face]) {
			this.drawCustomFaceThatIsCustom(this._customCache[id][face], 0, 0);
		} else {
			this._customCache[id] = this._customCache[id] || [];
			this._customCache[id][face] = this.getCustomFaceThatIsCustom($gameActors.actor(id), face);
			this.drawCustomFaceThatIsCustom(this._customCache[id][face], 0, 0);
		}
		break;
	case 'CCRESET':
		this.drawCustomFaceThatIsCustom(this._defaultCCFace, 0, 0);
		break;
	default:
		_.Window_Message_processEscapeCharacter.call(this, code, textState);
		break;
	}
};

Window_Message.prototype.obtainCCExpressionParams = function(textState) {
	var arr = /^\<.+\>/.exec(textState.text.slice(textState.index));
	if (arr) {
		textState.index += arr[0].length;
		return String(arr[0].slice(1, arr[0].length-1));
	} else {
		return '';
	}
};

})(SRD.CCEXFaces, SRD.CharacterCreatorEX);