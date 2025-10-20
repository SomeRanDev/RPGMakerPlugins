/*:
 * @plugindesc Pokemon Plugin: Allows the Player to call upon a menu to delete Skills. (Requires SRD_PKM_4MovesOnly)
 * @author SumRndmDde
 *
 * @help
 *
 *
 *
 * Pokemon Move Deleter
 * Version 1.00
 * SumRndmDde
 *
 * This is an extention Plugin of SRD_PKM_4MovesOnly
 *
 *
 * This is simply a Plugin that opens a window that allows you to delete
 * any move from a selected Actor, even if that move is set to be
 * undeleteable.
 *
 * This can be used to replicate the Move Deleter from the Pokemon games.
 *
 *
 * ==========================================================================
 * How to Use
 * ==========================================================================
 *
 * Use the following Plugin Command to open the Move Deleter Menu:
 *
 *
 * OpenMoveDeleter
 *
 * This will give you a list of all the Actors in the party.
 * Once one is selected, you will be allowed to delete any Skill once.
 * 
 * Once a Skill is deleted, the Plugin Command must be run again to revisit 
 * the Actor selection.
 *
 *
 * ==========================================================================
 * Deletion for Specific Actors
 * ==========================================================================
 *
 * If you wish to open the Move Deleter screen for a specific Actor, based
 * on their ID or position in the Party, you can use the following Plugin
 * Commands:
 *
 *
 * OpenMoveDeleterPage ID x
 *
 * Replace x with the Actor ID of the Actor you wish to open the Move 
 * Deleter page for.
 * Example: OpenMoveDeleterPage ID 2 - Opens Move Deleter for Actor ID 2
 *
 *
 * OpenMoveDeleterPage ID Vx
 *
 * Replace x with the Variable ID containing the ID of the Actor you wish to
 * open the Move  Deleter page for.
 * Example: OpenMoveDeleterPage ID V2  - Opens Move Deleter for Actor ID 
 *                                       stored in Variable ID 2.
 *
 *
 * OpenMoveDeleterPage Pos x
 *
 * Replace x with the Party position of the Actor you wish to open the Move 
 * Deleter page for.
 * Example: OpenMoveDeleterPage Pos 1 - Opens Move Deleter for the first 
 *                                      Actor in the party.
 *
 *
 * OpenMoveDeleterPage Pos Vx
 *
 * Replace x with the Variable ID of the Party position of the Actor you wish 
 * to open the Move Deleter page for.
 * Example: OpenMoveDeleterPage Pos V3 - Opens Move Deleter for the position
 *                                       of the Actor contained in Variable 3.
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
 */

var SRD = SRD || {};
SRD.PKM = SRD.PKM || {};
SRD.PKM.MoveDeleter = {};

var Imported = Imported || {};
Imported.SRD_PKM_MoveDeleter = true;

if(Imported.SRD_PKM_4MovesOnly) {

	//-----------------------------------------------------------------------------
	// Game_Interpreter
	//-----------------------------------------------------------------------------

	SRD.PKM.FourMovesOnly._Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
	Game_Interpreter.prototype.pluginCommand = function(command, args) {
	    SRD.PKM.FourMovesOnly._Game_Interpreter_pluginCommand.call(this, command, args);

	    if(command.trim().toLowerCase() === 'openmovedeleter') {
	    	SceneManager.push(Scene_MoveDeleter);
	    }

	    if(command.trim().toLowerCase() === 'openmovedeleterpage' && args[0]) {
	    	if(args[0].trim().toLowerCase() === 'pos') {
		    	if(args[1].match(/v\d+/im)) {
		    		var results = args[1].match(/v(\d+)/im);
		    		var num = $gameVariables.value(Number(results[1])) - 1;
		    		if(num <= $gameParty.members().length) {
		    			$gameParty.setCanRemoveHMMoves(true);
		    			$gameParty.setForgetSkillReadyActorId($gameParty.members()[num].actorId());
		    			SceneManager.push(Scene_ForgetSkill);
		    		}
		    	} else {
		    		var num = Number(args[1]) - 1;
		    		if(num <= $gameParty.members().length) {
			    		$gameParty.setCanRemoveHMMoves(true);
			    		$gameParty.setForgetSkillReadyActorId($gameParty.members()[num].actorId());
			    		SceneManager.push(Scene_ForgetSkill);
			    	}
		    	}
		    } else if(args[0].trim().toLowerCase() === 'id') {
		    	if(args[1].match(/v\d+/im)) {
		    		var results = args[1].match(/v(\d+)/im)
		    		$gameParty.setCanRemoveHMMoves(true);
		    		$gameParty.setForgetSkillReadyActorId($gameVariables.value(Number(results[1])));
		    		SceneManager.push(Scene_ForgetSkill);
		    	} else {
		    		$gameParty.setCanRemoveHMMoves(true);
		    		$gameParty.setForgetSkillReadyActorId(Number(args[1]));
		    		SceneManager.push(Scene_ForgetSkill);
		    	}
		    }
	    }
	};

	//-----------------------------------------------------------------------------
	// Window_MoveDeleterSelect
	//-----------------------------------------------------------------------------

	function Window_MoveDeleterSelect() {
	    this.initialize.apply(this, arguments);
	}

	Window_MoveDeleterSelect.prototype = Object.create(Window_Selectable.prototype);
	Window_MoveDeleterSelect.prototype.constructor = Window_MoveDeleterSelect;

	Window_MoveDeleterSelect.prototype.initialize = function(x, y) {
	    var width = this.windowWidth();
	    var height = this.windowHeight();
	    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
	    this._formationMode = false;
	    this._pendingIndex = -1;
	    this.loadImages();
	    this.refresh();
	};

	Window_MoveDeleterSelect.prototype.windowWidth = function() {
	    return Graphics.boxWidth;
	};

	Window_MoveDeleterSelect.prototype.windowHeight = function() {
	    return Graphics.boxHeight;
	};

	Window_MoveDeleterSelect.prototype.maxItems = function() {
	    return $gameParty.size();
	};

	Window_MoveDeleterSelect.prototype.itemHeight = function() {
	    var clientHeight = this.height - this.padding * 2;
	    return Math.floor(clientHeight / this.numVisibleRows());
	};

	Window_MoveDeleterSelect.prototype.numVisibleRows = function() {
	    return 6;
	};

	Window_MoveDeleterSelect.prototype.loadImages = function() {
	    $gameParty.members().forEach(function(actor) {
	        ImageManager.loadFace(actor.faceName());
	    }, this);
	};

	Window_MoveDeleterSelect.prototype.drawItem = function(index) {
	    this.drawItemBackground(index);
	    this.drawItemImage(index);
	    this.drawItemStatus(index);
	};

	Window_MoveDeleterSelect.prototype.drawItemBackground = function(index) {
	    if (index === this._pendingIndex) {
	        var rect = this.itemRect(index);
	        var color = this.pendingColor();
	        this.changePaintOpacity(false);
	        this.contents.fillRect(rect.x, rect.y, rect.width, rect.height, color);
	        this.changePaintOpacity(true);
	    }
	};

	Window_MoveDeleterSelect.prototype.drawItemImage = function(index) {
	    var actor = $gameParty.members()[index];
	    var rect = this.itemRect(index);
	    this.changePaintOpacity(actor.isBattleMember());
	    this.drawActorFace(actor, rect.x + 1, rect.y + 1 + 12, Window_Base._faceWidth, Window_Base._faceHeight / 2);
	    this.changePaintOpacity(true);
	};

	Window_MoveDeleterSelect.prototype.drawItemStatus = function(index) {
	    var actor = $gameParty.members()[index];
	    var rect = this.itemRect(index);
	    var x = rect.x + 162;
	    var y = rect.y + rect.height / 2 - this.lineHeight() * 1.5;
	    var width = rect.width - x - this.textPadding();

	    var lineHeight = this.lineHeight();
	    var x2 = x + 180;
	    var x3 = x2 + 200;
	    var width2 = Math.min(200, width - 180 - this.textPadding());
	    this.drawActorName(actor, x, y + 16);
	    this.drawActorLevel(actor, x, y + lineHeight * 1 + 16);
	    this.drawActorClass(actor, x2, y + 32);
	    this.drawActorHp(actor, x3, y + lineHeight * 1 - 20, width2);
	    this.drawActorMp(actor, x3, y + lineHeight * 2 - 20, width2);
	};

	Window_MoveDeleterSelect.prototype.processOk = function() {
	    Window_Selectable.prototype.processOk.call(this);
	};

	Window_MoveDeleterSelect.prototype.isCurrentItemEnabled = function() {
	    if (this._formationMode) {
	        var actor = $gameParty.members()[this.index()];
	        return actor && actor.isFormationChangeOk();
	    } else {
	        return true;
	    }
	};

	Window_MoveDeleterSelect.prototype.selectLast = function() {
	    this.select($gameParty.menuActor().index() || 0);
	};

	Window_MoveDeleterSelect.prototype.pendingIndex = function() {
	    return this._pendingIndex;
	};

	Window_MoveDeleterSelect.prototype.setPendingIndex = function(index) {
	    var lastPendingIndex = this._pendingIndex;
	    this._pendingIndex = index;
	    this.redrawItem(this._pendingIndex);
	    this.redrawItem(lastPendingIndex);
	};

	//-----------------------------------------------------------------------------
	// Scene_MoveDeleter
	//-----------------------------------------------------------------------------

	function Scene_MoveDeleter() {
	    this.initialize.apply(this, arguments);
	}

	Scene_MoveDeleter.prototype = Object.create(Scene_MenuBase.prototype);
	Scene_MoveDeleter.prototype.constructor = Scene_MoveDeleter;

	Scene_MoveDeleter.prototype.initialize = function() {
	    Scene_MenuBase.prototype.initialize.call(this);
	};

	Scene_MoveDeleter.prototype.create = function() {
	    Scene_MenuBase.prototype.create.call(this);
	    this.createStatusWindow();
	};

	Scene_MoveDeleter.prototype.start = function() {
	    Scene_MenuBase.prototype.start.call(this);
	    this._statusWindow.refresh();
	    this._statusWindow.select(0);
	    this.commandPersonal();
	};

	Scene_MoveDeleter.prototype.createStatusWindow = function() {
	    this._statusWindow = new Window_MoveDeleterSelect(0, 0);
	    this.addWindow(this._statusWindow);
	};

	Scene_MoveDeleter.prototype.commandPersonal = function() {
	    this._statusWindow.selectLast();
	    this._statusWindow.activate();
	    this._statusWindow.setHandler('ok',     this.onPersonalOk.bind(this));
	    this._statusWindow.setHandler('cancel', this.onPersonalCancel.bind(this));
	};

	Scene_MoveDeleter.prototype.onPersonalOk = function() {
		$gameParty.setCanRemoveHMMoves(true);
		$gameParty.setForgetSkillReadyActorId($gameParty.members()[this._statusWindow.index()].actorId());
		SceneManager.goto(Scene_ForgetSkill);
	};

	Scene_MoveDeleter.prototype.onPersonalCancel = function() {
		this.popScene();
	};
} else {
	alert("Hello! You are missing a Plugin!");
	alert("Currently, you have SRD_PKM_MoveDeleter installed; this Plugin is an extension Plugin to SRD_PKM_4MovesOnly.");
	alert("If you have both Plugins, make sure SRD_PKM_4MovesOnly is listed above SRD_PKM_MoveDeleter.");
	if(confirm("If not, keep in mind it is impossible to use SRD_PKM_MoveDeleter without that Plugin. Would you like to open a link to where you can download the SRD_PKM_4MovesOnly?")) {
		window.open("https://sumrndmdde.wordpress.com/2016/04/11/pokemon-4-moves-only/", "_blank", "fullscreen=yes");
	}
	window.close();
}