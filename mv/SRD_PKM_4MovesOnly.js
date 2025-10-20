/*:
 * @plugindesc Pokemon Plugin: Restricts the maximum amount of skills an Actor can learn to 4.
 * @author SumRndmDde
 *
 * @param == Forget Window ==
 * @default
 *
 * @param Max Columns
 * @desc This will be the maximum amount of columns in the Skill Forget Window's list of Skills.
 * @default 1
 *
 * @param Spacing
 * @desc This will be the spacing of the choices in the Skill Forget Window's list of Skills.
 * @default 48
 *
 * @param Message Background
 * @desc This is the message background used for Show Text alerts.
 * '0' = normal, '1' = dim, '2' = none
 * @default 0
 *
 * @param == Alert Lines ==
 * @default
 *
 * @param Alert Line 1
 * @desc The first line for the alert dialogue when an Actor has learned too many Skills. \actor = Specific Actor Name
 * @default \actor has too many moves!
 *
 * @param Alert Line 2
 * @desc The second line for the alert dialogue when an Actor has learned too many Skills. \actor = Specific Actor Name
 * @default \!Please select one to remove.
 *
 * @param Alert Line 3
 * @desc The third line for the alert dialogue when an Actor has learned too many Skills. \actor = Specific Actor Name
 * @default
 *
 * @param Alert Line 4
 * @desc The fourth line for the alert dialogue when an Actor has learned too many Skills. \actor = Specific Actor Name
 * @default
 *
 * @param == End Lines ==
 * @default
 *
 * @param End Line 1
 * @desc The first line for the forgotten Skill dialogue. 
 * \actor = Actor Name       \skill = Forgoten Skill Name
 * @default 1\..\..\..2\..\..\..and poof!
 *
 * @param End Line 2
 * @desc The second line for the forgotten Skill dialogue. 
 * \actor = Actor Name       \skill = Forgoten Skill Name
 * @default \!\actor has forgotten \skill!
 *
 * @param End Line 3
 * @desc The third line for the forgotten Skill dialogue. 
 * \actor = Actor Name       \skill = Forgoten Skill Name
 * @default
 *
 * @param End Line 4
 * @desc The fourth line for the forgotten Skill dialogue. 
 * \actor = Actor Name       \skill = Forgoten Skill Name
 * @default
 *
 * @help
 *
 *
 *
 * Pokemon 4 Moves Only
 * Version 1.00
 * SumRndmDde
 *
 *
 * The name says it all.
 * This is a Plugin that restricts the maximum amount of Skills an Actor
 * can learn to 4.
 *
 * If the actor learns more than 4, then a screen will display, and the
 * Actor must select one Skill to delete.
 *
 * This is based off of the system used in Pokemon.
 *
 * Other things you may want to note are:
 *  - When initializing Actors, they're given their 4 most recent Skills
 *  - This Plugin does not affect Enemies
 *  - You can manipulate the dialogue surrounding the Skill deletion
 *  - You can set certain Skills to be un-deleteable
 *  - An Actor's most recently learned Skill can always be deleted
 *
 * If you wish to implement a system to delete un-deleteable Skills, 
 * use the extension Plugin: SRD_PKM_MoveDeleter
 *
 * ==========================================================================
 * How to Use
 * ==========================================================================
 *
 * This Plugin is plug-in and play for the most part.
 *
 * However, there are a few things you may wish to customize:
 *
 *
 * ==========================================================================
 * Parameters
 * ==========================================================================
 *
 * You can manipulate the Parameters to change how the Skill Deletion 
 * choices look, along with the dialogue used to inform the Player a Skill
 * must be deleted.
 *
 * Change "Message Background" to change the dialogue background to 
 * normal, dim, etc.
 *
 * For the "Alert Lines" and the "End Lines", each line referes to a line
 * on the Show Text event that is displayed.
 *
 * ==========================================================================
 * Skill Notetags
 * ==========================================================================
 *
 * <Cannot Forget>
 *
 * If you input this Notetag into a Skill's notebox, then that Skill cannot
 * be deleted during the Skill deletion process.
 *
 * There are two exceptions:
 *  - If the Skill is the 5th Skill to be learned, then it will ALWAYS be 
 *    deleteable.
 *  - If you use the SRD_PKM_MoveDeleter extension Plugin, then you can
 *    call upon a screen to force any Actor to delete any Skill.
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

//Ugh, I think I'm gonna have to start actually making this
//an extendable Plugin or somethin... :/

var SRD = SRD || {};
SRD.PKM = SRD.PKM || {};
SRD.PKM.FourMovesOnly = {};

var Imported = Imported || {};
Imported.SRD_PKM_4MovesOnly = true;

SRD.PKM.FourMovesOnly.maxColumns = Number(PluginManager.parameters('SRD_PKM_4MovesOnly')['Max Columns']);
SRD.PKM.FourMovesOnly.spacing = Number(PluginManager.parameters('SRD_PKM_4MovesOnly')['Spacing']);
SRD.PKM.FourMovesOnly.background = Number(PluginManager.parameters('SRD_PKM_4MovesOnly')['Message Background']);

SRD.PKM.FourMovesOnly.alertLinesCount = 4;
SRD.PKM.FourMovesOnly.alertLines = [];
for(var i = 1; i <= SRD.PKM.FourMovesOnly.alertLinesCount; i++) {
	SRD.PKM.FourMovesOnly.alertLines[i-1] = String(PluginManager.parameters('SRD_PKM_4MovesOnly')['Alert Line ' + i]);
}

SRD.PKM.FourMovesOnly.endLinesCount = 4;
SRD.PKM.FourMovesOnly.endLines = [];
for(var i = 1; i <= SRD.PKM.FourMovesOnly.endLinesCount; i++) {
	SRD.PKM.FourMovesOnly.endLines[i-1] = String(PluginManager.parameters('SRD_PKM_4MovesOnly')['End Line ' + i]);
}

//-----------------------------------------------------------------------------
// DataManager
//-----------------------------------------------------------------------------

SRD.PKM.FourMovesOnly.areNotetagsLoaded = false;
SRD.PKM.FourMovesOnly._DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
    if(!SRD.PKM.FourMovesOnly._DataManager_isDatabaseLoaded.call(this)) return false;
    if(!SRD.PKM.FourMovesOnly.areNotetagsLoaded) {
    	for(var i = 1; i < $dataSkills.length; i++) {
    		if($dataSkills[i].note.match(/<\s*Cannot\s*Forget\s*>/im)) {
    			$dataSkills[i].pkm_cannotDelete = true;
    		} else {
    			$dataSkills[i].pkm_cannotDelete = false;
    		}
    	}
    	SRD.PKM.FourMovesOnly.areNotetagsLoaded = true;
    }
    return true;
};

//-----------------------------------------------------------------------------
// Game_Actor
//-----------------------------------------------------------------------------

SRD.PKM.FourMovesOnly._Game_Actor_initMembers = Game_Actor.prototype.initMembers;
Game_Actor.prototype.initMembers = function() {
    SRD.PKM.FourMovesOnly._Game_Actor_initMembers.call(this);
    this._mostRecentSkillId = 0;
};

SRD.PKM.FourMovesOnly._Game_Actor_initSkills = Game_Actor.prototype.initSkills;
Game_Actor.prototype.initSkills = function() {
    SRD.PKM.FourMovesOnly._Game_Actor_initSkills.call(this);
    while(this._skills.length > 4) {
    	this._skills.splice(0, 1);
    }
};

Game_Actor.prototype.setMostRecentSkillId = function(id) {
	this._mostRecentSkillId = id;
}

Game_Actor.prototype.mostRecentSkillId = function() {
	return this._mostRecentSkillId;
}

SRD.PKM.FourMovesOnly._Game_Actor_learnSkill = Game_Actor.prototype.learnSkill;
Game_Actor.prototype.learnSkill = function(skillId) {
	if (!this.isLearnedSkill(skillId)) {
    	this.setMostRecentSkillId(skillId);
    }
    SRD.PKM.FourMovesOnly._Game_Actor_learnSkill.call(this, skillId);
    if(this._skills.length > 4) {
    	if($gameParty.forgetSkillReadyActorId() === 0) {
    		var lines = [];
	    	for(var i = 0; i < SRD.PKM.FourMovesOnly.alertLinesCount; i++) {
	    		lines[i] = SRD.PKM.FourMovesOnly.alertLines[i].replace(/\\actor/im, this._name);
	    	}
	    	for(var i = 0; i < SRD.PKM.FourMovesOnly.alertLinesCount; i++) {
	    		if(lines[i].trim().length > 0) {
	    			$gameMessage.setBackground(SRD.PKM.FourMovesOnly.background);
	    			$gameMessage.add(lines[i]);
	    		}
	    	}
	    	$gameParty.setForgetSkillReady(1);
	    	$gameParty.setForgetSkillReadyActorId(this._actorId);
    	} else {
    		$gameParty.addForgetSkillReadyActorIds(this._actorId);
    	}
    }
};

//-----------------------------------------------------------------------------
// Game_Party
//-----------------------------------------------------------------------------

SRD.PKM.FourMovesOnly._Game_Party_initialize = Game_Party.prototype.initialize;
Game_Party.prototype.initialize = function() {
    SRD.PKM.FourMovesOnly._Game_Party_initialize.call(this);
    this._skillForgetReady = 0;
    this._skillForgetReadyActorId = 0;
    this._skillForgetReadyActorIds = [];
    this._canRemoveHMMoves = false;
};

Game_Party.prototype.forgetSkillReady = function() {
    return this._skillForgetReady;
};

Game_Party.prototype.forgetSkillReadyActorId = function() {
    return this._skillForgetReadyActorId;
};

Game_Party.prototype.setForgetSkillReady = function(isReady) {
    this._skillForgetReady = isReady;
};

Game_Party.prototype.getForgetSkillReady = function() {
    return this._skillForgetReady;
};

Game_Party.prototype.setForgetSkillReadyActorId = function(actorId) {
    this._skillForgetReadyActorId = actorId;
};

Game_Party.prototype.addForgetSkillReadyActorIds = function(actorId) {
    this._skillForgetReadyActorIds.push(actorId);
};

Game_Party.prototype.getNextForgetSkillReadyActorId = function() {
    var result = this._skillForgetReadyActorIds[0];
    this._skillForgetReadyActorIds.splice(0, 1);
    return result;
};

Game_Party.prototype.checkForgetSkillReadyActorId = function() {
	return this._skillForgetReadyActorIds.length !== 0;
};

Game_Party.prototype.canRemoveHMMoves = function() {
    return this._canRemoveHMMoves;
};

Game_Party.prototype.setCanRemoveHMMoves = function(canHM) {
    this._canRemoveHMMoves = canHM;
};

//-----------------------------------------------------------------------------
// Scene_Base
//-----------------------------------------------------------------------------

SRD.PKM.FourMovesOnly._Scene_Base_update = Scene_Base.prototype.update;
Scene_Base.prototype.update = function() {
    SRD.PKM.FourMovesOnly._Scene_Base_update.call(this);
    if($gameParty.forgetSkillReady() > 0 && !$gameMessage.isBusy()) {
    	if($gameParty.forgetSkillReady() === 1) {
    		$gameParty.setForgetSkillReady(0);
			SceneManager.push(Scene_ForgetSkill);
    	}
    	if($gameParty.forgetSkillReady() === 2) {
    		$gameMessage.clear();
			var id = $gameParty.getNextForgetSkillReadyActorId();
	    	var actor = $gameActors.actor(id);
	    	var lines = [];
	    	for(var i = 0; i < SRD.PKM.FourMovesOnly.alertLinesCount; i++) {
	    		lines[i] = SRD.PKM.FourMovesOnly.alertLines[i].replace(/\\actor/im, actor.name());
	    	}
	    	for(var i = 0; i < SRD.PKM.FourMovesOnly.alertLinesCount; i++) {
	    		if(lines[i].trim().length > 0) {
	    			$gameMessage.setBackground(SRD.PKM.FourMovesOnly.background);
	    			$gameMessage.add(lines[i]);
	    		}
	    	}
	    	$gameParty.setForgetSkillReady(1);
	    	$gameParty.setForgetSkillReadyActorId(actor.actorId());
	    }
	}
};

//-----------------------------------------------------------------------------
// Scene_ForgetSkill
//-----------------------------------------------------------------------------

function Scene_ForgetSkill() {
    this.initialize.apply(this, arguments);
}

Scene_ForgetSkill.prototype = Object.create(Scene_ItemBase.prototype);
Scene_ForgetSkill.prototype.constructor = Scene_ForgetSkill;

Scene_ForgetSkill.prototype.initialize = function() {
    Scene_ItemBase.prototype.initialize.call(this);
};

Scene_ForgetSkill.prototype.create = function() {
    Scene_ItemBase.prototype.create.call(this);
    this.createStatusWindow2();
    this.createHelpWindow();
    this.createStatusWindow();
    this.createItemWindow();
    this.refreshActor();
    this.commandSkill();
};

Scene_ForgetSkill.prototype.createStatusWindow2 = function() {
    this._statusWindow2 = new Window_ForgetSkillStatus2(0, 0, Graphics.boxWidth, 70);
    this.addWindow(this._statusWindow2);
    this._statusWindow2.refresh();
}

Scene_ForgetSkill.prototype.createHelpWindow = function() {
	this._helpWindow = new Window_Help();
    this._helpWindow.y = this._statusWindow2.y + this._statusWindow2.height;
    this.addWindow(this._helpWindow);
}

Scene_ForgetSkill.prototype.createStatusWindow = function() {
	var wx = 0;
    var wy = this._helpWindow.y + this._helpWindow.height;
    var ww = Graphics.boxWidth - wx;
    var wh = 70;
    this._statusWindow = new Window_ForgetSkillStatus(wx, wy, ww, wh);
    this.addWindow(this._statusWindow);
    this._statusWindow.refresh();
};

Scene_ForgetSkill.prototype.createItemWindow = function() {
    var wx = 0;
    var wy = this._statusWindow.y + this._statusWindow.height;
    var ww = Graphics.boxWidth;
    var wh = Graphics.boxHeight - wy;
    this._itemWindow = new Window_ForgetSkillList(wx, wy, ww, wh);
    this._itemWindow.setHelpWindow(this._helpWindow);
    this._itemWindow.setHandler('ok', this.onItemOk.bind(this));
    if($gameParty.canRemoveHMMoves()) {
    	this._itemWindow.setHandler('cancel', this.onItemCancel.bind(this));
    }
    this.addWindow(this._itemWindow);
};

Scene_ForgetSkill.prototype.actor = function() {
    return $gameActors.actor($gameParty.forgetSkillReadyActorId());
};

Scene_ForgetSkill.prototype.user = function() {
    return this.actor();
};

Scene_Skill.prototype.playSeForItem = function() {
};

Scene_ForgetSkill.prototype.refreshActor = function() {
    var actor = this.actor();
    this._statusWindow.setActor(actor);
    this._itemWindow.setActor(actor);
};

Scene_ForgetSkill.prototype.commandSkill = function() {
    this._itemWindow.activate();
    this._itemWindow.selectLast();
};

Scene_ForgetSkill.prototype.onItemOk = function() {
    this.actor().forgetSkill(this.item().id);
    var name = this.actor().name();
    var itemName = this.item().name;
    $gameParty.setForgetSkillReadyActorId(0);
    $gameParty.setCanRemoveHMMoves(false);
    this.popScene();
    var lines = [];
    for(var i = 0; i < SRD.PKM.FourMovesOnly.endLinesCount; i++) {
    	lines[i] = SRD.PKM.FourMovesOnly.endLines[i].replace(/\\actor/im, name);
    	lines[i] = lines[i].replace(/\\skill/im, itemName);
    }
    for(var i = 0; i < SRD.PKM.FourMovesOnly.endLinesCount; i++) {
    	if(lines[i].trim().length > 0) {
    		$gameMessage.setBackground(SRD.PKM.FourMovesOnly.background);
    		$gameMessage.add(lines[i]);
    	}
    }

    if($gameParty.checkForgetSkillReadyActorId()) {
    	$gameParty.setForgetSkillReady(2);
    }
};

Scene_ForgetSkill.prototype.onItemCancel = function() {
    $gameParty.setForgetSkillReadyActorId(0);
    $gameParty.setCanRemoveHMMoves(false);
    this.popScene();
};

//-----------------------------------------------------------------------------
// Window_ForgetSkillList
//-----------------------------------------------------------------------------

function Window_ForgetSkillList() {
    this.initialize.apply(this, arguments);
}

Window_ForgetSkillList.prototype = Object.create(Window_SkillList.prototype);
Window_ForgetSkillList.prototype.constructor = Window_ForgetSkillList;

Window_ForgetSkillList.prototype.initialize = function(x, y, width, height) {
    Window_SkillList.prototype.initialize.call(this, x, y, width, height);
    this._actor = null;
    this._data = [];
};

Window_ForgetSkillList.prototype.setActor = function(actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.refresh();
        this.resetScroll();
    }
};

Window_ForgetSkillList.prototype.maxCols = function() {
    return SRD.PKM.FourMovesOnly.maxColumns;
};

Window_ForgetSkillList.prototype.spacing = function() {
    return SRD.PKM.FourMovesOnly.spacing;
};

Window_ForgetSkillList.prototype.maxItems = function() {
    return this._data ? this._data.length : 1;
};

Window_ForgetSkillList.prototype.item = function() {
    return this._data && this.index() >= 0 ? this._data[this.index()] : null;
};

Window_ForgetSkillList.prototype.isCurrentItemEnabled = function() {
    return this.isEnabled(this._data[this.index()]);
};

Window_ForgetSkillList.prototype.isEnabled = function(item) {
    return !item.pkm_cannotDelete || item.id === this._actor.mostRecentSkillId() || $gameParty.canRemoveHMMoves();
};

Window_ForgetSkillList.prototype.makeItemList = function() {
    if (this._actor) {
        this._data = this._actor.skills();
    } else {
        this._data = [];
    }
};

Window_ForgetSkillList.prototype.selectLast = function() {
    this.select(0);
};

Window_ForgetSkillList.prototype.updateHelp = function() {
    this.setHelpWindowItem(this.item());
};

Window_ForgetSkillList.prototype.refresh = function() {
    this.makeItemList();
    this.createContents();
    this.drawAllItems();
};

//-----------------------------------------------------------------------------
// Window_ForgetSkillStatus
//-----------------------------------------------------------------------------

function Window_ForgetSkillStatus() {
    this.initialize.apply(this, arguments);
}

Window_ForgetSkillStatus.prototype = Object.create(Window_Base.prototype);
Window_ForgetSkillStatus.prototype.constructor = Window_ForgetSkillStatus;

Window_ForgetSkillStatus.prototype.initialize = function(x, y, width, height) {
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this._actor = null;
};

Window_ForgetSkillStatus.prototype.setActor = function(actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.refresh();
    }
};

Window_ForgetSkillStatus.prototype.refresh = function() {
    this.contents.clear();
    if (this._actor) {
    	var x = 0;
	    var x2 = x + 280;
	    var x3 = x2 + 280;
	    var y = 0;
        var actor = this._actor;
	    this.drawActorName(actor, x, y);
	    this.drawActorLevel(actor, x2, y);
	    this.drawActorClass(actor, x3, y);
    }
};

//-----------------------------------------------------------------------------
// Window_ForgetSkillStatus2
//-----------------------------------------------------------------------------

function Window_ForgetSkillStatus2() {
    this.initialize.apply(this, arguments);
}

Window_ForgetSkillStatus2.prototype = Object.create(Window_Base.prototype);
Window_ForgetSkillStatus2.prototype.constructor = Window_ForgetSkillStatus;

Window_ForgetSkillStatus2.prototype.initialize = function(x, y, width, height) {
    Window_Base.prototype.initialize.call(this, x, y, width, height);
};

Window_ForgetSkillStatus2.prototype.refresh = function() {
    this.contents.clear();
    this.drawText("Please select a move to delete.", 0, 0, (Graphics.boxWidth), 'center');
};