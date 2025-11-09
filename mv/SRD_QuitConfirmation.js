/*:
 * @plugindesc Provides a confirmation popup prior to the player leaving the game, confirming whether they wish to leave.
 * @author SumRndmDde
 *
 * @param Enable Leave Confirmation
 * @type boolean
 * @desc If ON, then a dialogue will ask players whether they are sure they wish to leave the game.
 * @default true
 *
 * @param Disabled Scenes
 * @type text[]
 * @desc A list of Scenes that will not use the leave confirmation if it's enabled.
 * @default ["Scene_Title"]
 *
 * @param Allow Saving
 * @type select
 * @option Always Allow
 * @value 0
 * @option Maps and Menus Only
 * @value 1
 * @option Maps Only
 * @value 2
 * @option Disable
 * @value 3
 * @desc Determines whether or not the leave confirmation will include saving.
 * @default 1
 *
 * @param Window Message
 * @type note
 * @desc The message on the leave confirmation window.
 * @default "Are you sure you want to quit?"
 *
 * @param Choice Names
 * @type Struct<ConfirmChoiceNames>
 * @desc Determines the names of the choices in the leave confirmation window.
 * @default {"Yes Text":"Yes","No Text":"No","Save Text":"Save"}
 *
 * @param Leave Fade Speed
 * @type number
 * @desc The speed in which the game fades once the player decides to quit.
 * @default 2
 *
 * @help
 *
 * Quit Confirmation
 * Version 1.00
 * SumRndmDde
 *
 *
 * This plugin requires the Window Upgrade plugin:
 * http://sumrndm.site/window-upgrade/
 *
 *
 * This plugin provides a confirmation popup prior to the player leaving the 
 * game, confirming whether they wish to leave.
 *
 *
 * ==============================================================================
 *  On Close Mechanics
 * ==============================================================================
 *
 * One of the biggest additions of this plugin is the confirmation for the 
 * user to leave the game. This adds a level of professionally to the game's
 * quitting capabilities, and can also help to remind a user to save before
 * quitting.
 *
 * By default, the confirmation will occur everywhere the map is based upon.
 * This means menus, battles, and maps themselves. Of course, this also means
 * things such as Title Screen, Game Over Scene, etc. will not rely upon
 * the confirmation. This is so it does not become unnecessarily annoying.
 *
 * In order to edit its properties, one should look through the "Leave 
 * Confirmation" folder in the parameters.
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

/*~struct~ConfirmChoiceNames:
 *
 * @param Yes Text
 * @desc The text used for the "Yes" choice in the leave confirmation window.
 * @default Yes
 *
 * @param No Text
 * @desc The text used for the "No" choice in the leave confirmation window.
 * @default No
 *
 * @param Save Text
 * @desc The text used for the "Save" choice in the leave confirmation window.
 * @default Save
 *
 */

var SRD = SRD || {};
SRD.QuitConfirmation = SRD.QuitConfirmation || {};

var Imported = Imported || {};
Imported["SumRndmDde Quit Confirmation"] = 1.00;

(function(_) {

"use strict";

//-----------------------------------------------------------------------------
// SRD.Requirements
//-----------------------------------------------------------------------------

_.alertNeedGameUpgrade = function() {
	alert("The 'SRD_GameUpgrade' plugin is required for using the 'SRD_QuitConfirmation' plugin.");
	if(confirm("Do you want to open the download page to 'SRD_GameUpgrade'?")) {
		window.open('http://sumrndm.site/game-upgrade/');
	}
};

if(!Imported["SumRndmDde Game Upgrade"]) {
	_.alertNeedGameUpgrade();
	return;
}

if(SRD.requirePlugin(
	'SumRndmDde Window Upgrade', 
	'SRD_QuitConfirmation', 
	'SRD_WindowUpgrade', 
	'http://sumrndm.site/window-upgrade/')) return;

//-----------------------------------------------------------------------------
// SRD.QuitConfirmation
//-----------------------------------------------------------------------------

_.params = SRD.parse(JSON.stringify(PluginManager.parameters('SRD_QuitConfirmation')), true);

_.SceneManager_updateScene = SceneManager.updateScene;
SceneManager.updateScene = function() {
	if(GameWindowManager.isWindowClosing()) {
		GameWindowManager.updateScene();
	} else {
		_.SceneManager_updateScene.apply(this, arguments);
	}
};

//-----------------------------------------------------------------------------
// GameWindowManager
//-----------------------------------------------------------------------------

GameWindowManager._isWindowClosing = false;
GameWindowManager._gameClosingSpeed = 0;

GameWindowManager.onWindowClose = function() {
	if(GameWindowManager._isWindowClosing) return;
	if(Graphics._errorShowed || SceneManager.isSceneAny(_.params['Disabled Scenes']) || 
		(!SceneManager.stack.contains(Scene_Map) && !SceneManager.isScene(Scene_Map))) {
		GameWindowManager.window.close(true);
	} else {
		GameWindowManager.setWindowClosing(true);
	}
};

GameWindowManager.isSaveAllowed = function() {
	if(!$gameSystem.isSaveEnabled()) return false;
	const paramInfo = _.params['Allow Saving'];
	const scene = SceneManager.scene;
	if(paramInfo === 0) return true;
	if(paramInfo === 3) return false;
	const mapAllowed = SceneManager.isScene(Scene_Map) && $gamePlayer.canMove();
	if(paramInfo === 1) return mapAllowed || scene["Is Menu Base"];
	if(paramInfo === 2) return mapAllowed;
};

GameWindowManager.getCloseChoices = function(saveAllowed) {
	const result = [];
	const names = _.params['Choice Names'];
	result.push(names['Yes Text']);
	if(saveAllowed) {
		result.push(names['Save Text']);
	}
	result.push(names['No Text']);
	return result;
};

GameWindowManager.getCloseCallbacks = function(saveAllowed) {
	const result = [];
	result.push(this.closeGame.bind(this, _.params['Leave Fade Speed']));
	if(saveAllowed) {
		result.push(this.saveGame.bind(this));
	}
	result.push(this.returnToGame.bind(this));
	return result;
};

GameWindowManager.closeGame = function(duration) {
	this.closeWindow(duration);
};

GameWindowManager.saveGame = function() {
	this.setWindowClosing(false);
	if(!SceneManager.isScene(Scene_Save)) {
		SceneManager.push(Scene_Save);
	}
};

GameWindowManager.returnToGame = function() {
	this.setWindowClosing(false);
};

GameWindowManager.setWindowClosing = function(value, closing) {
	this._isWindowClosing = value;
	if(value) {
		this.createClosingBackground();
		this.createConfimationWindow();
	} else {
		this.destroyConfirmation(closing);
	}
};

GameWindowManager.createClosingBackground = function() {
	this._closingBackground = new Sprite(new Bitmap(Graphics.boxWidth, Graphics.boxHeight));
	this._closingBackground.bitmap.fillRect(0, 0, Graphics.boxWidth, Graphics.boxHeight, '#000000');
	this._closingBackground.opacity = 160;
	SceneManager.scene.addChild(this._closingBackground);
};

GameWindowManager.createConfimationWindow = function() {
	const saveAllowed = this.isSaveAllowed();
	this._confirmationWindow = new Window_ChoiceMessage(
		_.params['Window Message'],
		this.getCloseChoices(saveAllowed),
		this.getCloseCallbacks(saveAllowed)
	);
	SceneManager.scene.addChild(this._confirmationWindow);
};

GameWindowManager.destroyConfirmation = function(closing) {
	if(!closing) {
		SceneManager.scene.removeChild(this._closingBackground);
		this._closingBackground = null;
	}
	this._confirmationWindow.setCloseCallback(function() {
		SceneManager.scene.removeChild(this._confirmationWindow);
		this._confirmationWindow = null;
	}.bind(this));
	this._confirmationWindow.close();
};

GameWindowManager.updateScene = function() {
	this.updateClosingBackground();
	if(this._confirmationWindow) {
		this._confirmationWindow.update();
	}
};

GameWindowManager.updateClosingBackground = function() {
	if(this._gameClosingSpeed > 0) {
		if(this._closingBackground.opacity < 255) {
			this._closingBackground.opacity += this._gameClosingSpeed;
			if(this._closingBackground.opacity >= 255) {
				this.window.close(true);
			}
		}
	}
};

GameWindowManager.isWindowClosing = function() {
	return this._isWindowClosing && this._confirmationWindow;
};

GameWindowManager.closeWindow = function(speed) {
	if(this._confirmationWindow) {
		this._confirmationWindow.close();
	}
	this._gameClosingSpeed = speed;
};

})(SRD.QuitConfirmation);