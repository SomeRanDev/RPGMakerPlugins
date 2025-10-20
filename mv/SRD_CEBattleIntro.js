/*:
 * @plugindesc Allows you to use a Common Event as your battle intro.
 * @author SumRndmDde
 *
 * @param Common Event ID
 * @desc This is the ID of the Common Event used for the Battle Intro when the game starts.
 * @default 1
 *
 * @param Auto Transition
 * @desc If this is 'true', the "transition" from map to battle is done at the end of the Common Event automatically.
 * @default true
 *
 * @param Normal BI Duration
 * @desc The duration of the normal battle intro if it is called.
 * @default 60
 *
 * @help
 *
 * Common Event Battle Intro
 * Version 1.00
 * SumRndmDde
 *
 *
 * This plugin allows you to have a Common Event run as your battle intro.
 *
 * Simply set the Common Event you wish to use in the "Common Event ID" 
 * Parameter to the one you wish to be used before a random encounter on
 * a map in your game.
 *
 *
 * ==========================================================================
 *  Changing the Common Event
 * ==========================================================================
 *
 * If you wish to change the Common Event used for the Battle Intro, you can
 * use the following Plugin Command:
 *
 *   SetCommonEventBattleIntro [id]
 *
 * Simply set "id" to the ID of the Common Event.
 * For example:
 *
 *   SetCommonEventBattleIntro 3
 *
 *
 * If you wish to reset it back to the default, use the Plugin Command:
 *
 *   ResetCommonEventBattleIntro
 *
 *
 * ==========================================================================
 *  Assigning Common Event Battle Intro to Map
 * ==========================================================================
 *
 * If you wish to use a Common Event based on the Map, this can be done.
 * Within the notetag of the map, use:
 *
 *   <CE Battle Intro: [id]>
 *
 * Replace "id" with the ID of the Common Event you wish to use for the
 * Battle Intro on that map.
 *
 *
 * If a map has a custom Battle Intro, it will take priority over the one
 * defined through the Parameter or Plugin Command. If you wish to disable
 * the Map's Common Event Battle Intro, use the Plugin Command:
 *
 *   DisableMapCommonEventBattleIntro
 *
 * If you wish to enable it again, use the Plugin Command:
 *
 *   EnableMapCommonEventBattleIntro
 *
 *
 * ==========================================================================
 *  Transitioning to the Battle Scene
 * ==========================================================================
 *
 * At the end of every Battle Intro, the screen fades out to black and
 * starts the Battle BGM. By default, this is added to the end of each Common
 * Event automatically if the "Auto Transition" Parameter is set to true.
 *
 * However, if you wish for this to be manually called upon from within
 * the Common Event, you can use the Plugin Command:
 *
 *   BattleIntroTransition
 *
 *
 * If you also wish to use the original Battle Intro, or one created through
 * another plugin, you can use this Plugin Command to call it:
 *
 *   StartNormalBattleIntro
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
SRD.CommonEventBattleIntro = SRD.CommonEventBattleIntro || {};

var Imported =  Imported || {};
Imported["SumRndmDde Common Event Battle Intro"] = 1.00;

(function(_) {

"use strict";

var params = PluginManager.parameters('SRD_CEBattleIntro');

//-----------------------------------------------------------------------------
// SRD.CommonEventBattleIntro
//-----------------------------------------------------------------------------

_.ce = parseInt(params['Common Event ID']);
_.auto = String(params['Auto Transition']).trim().toLowerCase() === 'true';
_.duration = parseInt(params['Normal BI Duration']);

//-----------------------------------------------------------------------------
// Game_Map
//-----------------------------------------------------------------------------

Game_Map.prototype.getCEBattleIntro = function() {
	if(this.isCEBattleIntroDisabled) return null;
	var note = $dataMap.note;
	if(note.match(/<CE\s*Battle\s*Intro\s*:\s*(\d+)\s*>/im)) {
		return parseInt(RegExp.$1);
	} else {
		return null;
	}
};

//-----------------------------------------------------------------------------
// Game_BreakingInterpreter
//-----------------------------------------------------------------------------

var _Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
	_Game_System_initialize.apply(this, arguments);
	this._commonEventBattleIntroId = _.ce;
};

Game_System.prototype.setCommonEventBattleIntroId = function(id) {
	this._commonEventBattleIntroId = parseInt(id);
};

Game_System.prototype.resetCommonEventBattleIntroId = function() {
	this._commonEventBattleIntroId = _.ce;
};

Game_System.prototype.ceBattleIntro = function() {
	var ce = $gameMap.getCEBattleIntro();
	return (ce) ? ce : this._commonEventBattleIntroId;
};

//-----------------------------------------------------------------------------
// Game_Interpreter
//-----------------------------------------------------------------------------

var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_Game_Interpreter_pluginCommand.apply(this, arguments);
	if(command.trim().toLowerCase() === 'setcommoneventbattleintro') {
		$gameSystem.setCommonEventBattleIntroId(parseInt(args[0]));
	} else if(command.trim().toLowerCase() === 'resetcommoneventbattleintro') {
		$gameSystem.resetCommonEventBattleIntroId();
	} else if(command.trim().toLowerCase() === 'disablemapcommoneventbattleintro') {
		$gameMap.isCEBattleIntroDisabled = true;
	} else if(command.trim().toLowerCase() === 'enablemapcommoneventbattleintro') {
		$gameMap.isCEBattleIntroDisabled = false;
	} else if(command.trim().toLowerCase() === 'battleintrotransition') {
		BattleManager.playBattleBgm();
		SceneManager._scene.startFadeOut(this.fadeSpeed());
	} else if(command.trim().toLowerCase() === 'startnormalbattleintro') {
		SceneManager._scene._encounterEffectDuration = _.duration;
	}
};

//-----------------------------------------------------------------------------
// Game_BreakingInterpreter
//-----------------------------------------------------------------------------

//A local version of Game_Interpreter that continues to update even if the SceneManager is changing.
function Game_BreakingInterpreter() {
	this.initialize.apply(this, arguments);
}

Game_BreakingInterpreter.prototype = Object.create(Game_Interpreter.prototype);
Game_BreakingInterpreter.prototype.constructor = Game_BreakingInterpreter;

Game_BreakingInterpreter.prototype.update = function() {
	while (this.isRunning()) {
		if (this.updateChild() || this.updateWait()) {
			break;
		}
		if (!this.executeCommand()) {
			break;
		}
		if (this.checkFreeze()) {
			break;
		}
	}
};

//-----------------------------------------------------------------------------
// Scene_Map
//-----------------------------------------------------------------------------

var _Scene_Map_initialize = Scene_Map.prototype.initialize;
Scene_Map.prototype.initialize = function() {
	_Scene_Map_initialize.apply(this, arguments);
	this._battleIntroInterpreter = new Game_BreakingInterpreter();
	this._battleIntroIsACommonEvent = true;
};

Scene_Map.prototype.startEncounterEffect = function() {
	this._battleIntroIsACommonEvent = false;
	this._battleIntroInterpreter.clear();
	this._battleIntroInterpreter.setup($dataCommonEvents[$gameSystem.ceBattleIntro()].list);
	this._encounterEffectDuration = 1;
};

var _Scene_Map_updateEncounterEffect = Scene_Map.prototype.updateEncounterEffect;
Scene_Map.prototype.updateEncounterEffect = function() {
	if(this._encounterEffectDuration > 1 || this._battleIntroIsACommonEvent) {
		this._battleIntroIsACommonEvent = true;
		_Scene_Map_updateEncounterEffect.apply(this, arguments);
	} else {
		if(this._encounterEffectDuration > 0) {
			this._encounterEffectDuration--;
			if(!this._battleIntroInterpreter.isRunning() && _.auto) {
				BattleManager.playBattleBgm();
				this.startFadeOut(this.fadeSpeed());
			}
		}
		if(this._battleIntroInterpreter.isRunning()) {
			this._battleIntroInterpreter.update();
			if(this._encounterEffectDuration === 0) this._encounterEffectDuration = 1;
		}
	}
};

})(SRD.CommonEventBattleIntro);