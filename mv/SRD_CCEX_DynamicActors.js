/*:
 * @plugindesc Allows Actors to have their images dynamically change based on their class or equipment.
 * @author SumRndmDde
 *
 * @help
 *
 * Character Creator EX: Dynamic Actors
 * Version 1.00
 * SumRndmDde
 *
 *
 * This plugin requires the Character Creator plugin:
 * http://sumrndm.site/character-creator-ex/
 *
 *
 * This plugin allows Actors to have their sprites and images dynamically 
 * change based on the Class, Weapon, or Armors that the Actor has equipped.
 *
 *
 * ==========================================================================
 *  Class, Weapon, and Armor notetags
 * ==========================================================================
 *
 * If you wish for a specific character creator piece to be used on an Actor 
 * when they have a Class, Weapon, or Armor equipped, use the following
 * notetag in the Class's, Weapon's, or Armor's notebox:
 *
 *   <Force [section] Piece: [file-name]>
 *
 * For example, if you wished to use the "Clothing (5)" file from the 
 * "Clothing" section, you would use the following notetag:
 *
 *   <Force Clothing Piece: Clothing (5)>
 *
 *
 * ==========================================================================
 *  Forcing a Specific Color
 * ==========================================================================
 *
 * You can also set a specific color to be used with the piece:
 *
 *   <Force [section] Piece: [file-name], [color-info]>
 *
 * For example:
 *
 *   <Force Clothing Piece: Clothing (5), [200]>
 *
 *
 * ==========================================================================
 *  End of Help File
 * ==========================================================================
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

var SRD = SRD || {};
SRD.DynamicActorsEX = SRD.DynamicActorsEX || {};

var Imported = Imported || {};
Imported["SumRndmDde CCEX Dynamic Actors"] = 1.00;

(function(_, __) {

"use strict";

//-----------------------------------------------------------------------------
// SRD.Requirements
//-----------------------------------------------------------------------------

_.alertNeedGameUpgrade = function() {
	alert("The 'SRD_GameUpgrade' plugin is required for using the 'SRD_CCEX_DynamicFaces' plugin.");
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
	'SRD_CCEX_DynamicActors', 
	'SRD_CharacterCreatorEX', 
	'http://sumrndm.site/character-creator-ex/')) return;

//-----------------------------------------------------------------------------
// SRD.DynamicActorsEX
//-----------------------------------------------------------------------------

_.loadNotetags = function(data) {
	const regex = /<\s*Force\s*(.*)\s*Piece\s*:\s*(.*)\s*>/i;
	const regex2 = /<\s*Force\s*(.*)\s*Piece\s*:\s*(.*)\s*,\s*(\[.*\])\s*>/i;
	for(let i = 1; i < data.length; i++) {
		const notes = data[i].note.split(/[\r\n]+/);
		for(let j = 0; j < notes.length; j++) {
			const line = notes[j];
			if(line.match(regex2)) {
				if(!data[i].meta._dc_pieces) data[i].meta._dc_pieces = {};
				const section = String(RegExp.$1).trim();
				const file = String(RegExp.$2).trim();
				const color = ["Custom"].concat(JSON.parse(RegExp.$3));
				data[i].meta._dc_pieces[section] = {
					file: file,
					color: color
				};
			} else if(line.match(regex)) {
				if(!data[i].meta._dc_pieces) data[i].meta._dc_pieces = {};
				const section = String(RegExp.$1).trim();
				const file = String(RegExp.$2).trim();
				data[i].meta._dc_pieces[section] = {
					file: file,
					color: []
				};
			}
		}
	}
};

_.loadAllNotetags = function() {
	_.setupPartCount();
	_.loadNotetags($dataClasses);
	_.loadNotetags($dataWeapons);
	_.loadNotetags($dataArmors);
};

SRD.NotetagGetters.push(_.loadAllNotetags);

_.partCounts = {};
_.setupPartCount = function() {
	const folders = __.getFolderList();
	for(let i = 0; i < folders.length; i++) {
		if(folders[i]) {
			const fold = folders[i];
			if(fold.match(/Part(\d+)/)) {
				const id = parseInt(RegExp.$1);
				const fold2 = fold.replace(/\s*Part\d+\s*/, '');
				if(!_.partCounts[fold2] || id > _.partCounts[fold2]) {
					_.partCounts[fold2] = id;
				}
			} else {
				_.partCounts[fold] = 1;
			}
		}
	}
};

//-----------------------------------------------------------------------------
// Game_CharacterCreations
//-----------------------------------------------------------------------------

_.Game_CharacterCreations_getInfo = Game_CharacterCreations.prototype.getInfo;
Game_CharacterCreations.prototype.getInfo = function(id, type) {
	const result = _.Game_CharacterCreations_getInfo.apply(this, arguments);
	const result2 = $gameActors.actor(id).getDynamicInfo(result, type);
	return result2;
};

//-----------------------------------------------------------------------------
// Game_Actor
//-----------------------------------------------------------------------------

Game_Actor.prototype.getDynamicInfo = function(original, type) {
	let info;
	if(original) {
		info = JsonEx.makeDeepCopy(original);
	} else {
		info = {};
	}
	const classes = this.currentClass();
	const equips = this.equips();

	//Class
	if(classes && classes.meta._dc_pieces) {
		for(let prop in classes.meta._dc_pieces) {
			if(classes.meta._dc_pieces.hasOwnProperty(prop)) {
				if(_.partCounts[prop] > 1) {
					for(let i = 1; i <= _.partCounts[prop]; i++) {
						if(!info[String(prop) + " Part" + i] || !info[String(prop) + " Part" + i].path) {
							info[String(prop) + " Part" + i] = {};
							const basePath = __.path + prop + ' Part' + i;
							if(type === 'dead') {
								info[String(prop) + " Part" + i].path = basePath + '/dead/';
							} else if(type === 'sv') {
								info[String(prop) + " Part" + i].path = basePath + '/sv/';
							} else if(type === 'face') {
								info[String(prop) + " Part" + i].path = basePath + '/face/';
							} else {
								info[String(prop) + " Part" + i].path = basePath + '/walk/';
							}
						}
						info[String(prop) + " Part" + i].file = classes.meta._dc_pieces[prop].file;
						info[String(prop) + " Part" + i].color = JsonEx.makeDeepCopy(classes.meta._dc_pieces[prop].color);
					}
				} else {
					if(!info[prop] || !info[prop].path) {
						info[prop] = {};
						const basePath = __.path + prop;
						if(type === 'dead') {
							info[prop].path = basePath + '/dead/';
						} else if(type === 'sv') {
							info[prop].path = basePath + '/sv/';
						} else if(type === 'face') {
							info[prop].path = basePath + '/face/';
						} else {
							info[prop].path = basePath + '/walk/';
						}
					}
					info[prop].file = classes.meta._dc_pieces[prop].file;
					info[prop].color = JsonEx.makeDeepCopy(classes.meta._dc_pieces[prop].color);
				}
			}
		}
	}

	//Equips
	for(let i = 0; i < equips.length; i++) {
		if(equips[i] && equips[i].meta._dc_pieces) {
			for(let prop in equips[i].meta._dc_pieces) {
				if(equips[i].meta._dc_pieces.hasOwnProperty(prop)) {
					if(_.partCounts[prop] > 1) {
						for(let j = 1; j <= _.partCounts[prop]; j++) {
							if(!info[String(prop) + " Part" + j] || !info[String(prop) + " Part" + j].path) {
								info[String(prop) + " Part" + j] = {};
								const basePath = __.path + prop + ' Part' + j;
								if(type === 'dead') {
									info[String(prop) + " Part" + j].path = basePath + '/dead/';
								} else if(type === 'sv') {
									info[String(prop) + " Part" + j].path = basePath + '/sv/';
								} else if(type === 'face') {
									info[String(prop) + " Part" + j].path = basePath + '/face/';
								} else {
									info[String(prop) + " Part" + j].path = basePath + '/walk/';
								}
							}
							info[String(prop) + " Part" + j].file = equips[i].meta._dc_pieces[prop].file;
							info[String(prop) + " Part" + j].color = JsonEx.makeDeepCopy(equips[i].meta._dc_pieces[prop].color);
						}
					} else {
						if(!info[prop] || !info[prop].path) {
							info[prop] = {};
							const basePath = __.path + prop;
							if(type === 'dead') {
								info[prop].path = basePath + '/dead/';
							} else if(type === 'sv') {
								info[prop].path = basePath + '/sv/';
							} else if(type === 'face') {
								info[prop].path = basePath + '/face/';
							} else {
								info[prop].path = basePath + '/walk/';
							}
						}
						info[prop].file = equips[i].meta._dc_pieces[prop].file;
						info[prop].color = JsonEx.makeDeepCopy(equips[i].meta._dc_pieces[prop].color);
					}
				}
			}
		}
	}
	return info;
};

})(SRD.DynamicActorsEX, SRD.CharacterCreatorEX);