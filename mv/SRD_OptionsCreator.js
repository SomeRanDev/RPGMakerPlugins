/*:
 * @plugindesc Provides developers with the ability to add "options" to the Options Menu.
 * @author SumRndmDde
 *
 * @param Options
 * @type Struct<Options>[]
 * @desc This is a list of all the options created through this plugin.
 * @default []
 *
 * @help
 *
 * Options Creator
 * Version 1.00
 * SumRndmDde
 *
 *
 * This plugin requires the Game Upgrade plugin:
 * http://sumrndm.site/game-upgrade/
 *
 * This plugin requires the Options Upgrade plugin:
 * http://sumrndm.site/options-upgrade/
 *
 *
 * This plugin provides developers with the ability to add "options" to the 
 * Options Menu.
 *
 *
 * =============================================================================
 *  Option Explanations
 * =============================================================================
 *
 * To add an option, one must add to the "Options" list parameter.
 * Each piece of the list has the following properties:
 *
 *
 * ----------------
 * Name
 * ----------------
 * The name of the option that will appear in the option menu.
 *
 *
 * ----------------
 * Category
 * ----------------
 * The category the option will fall into for the Options Upgrade plugin.
 *
 *
 * ----------------
 * Description
 * ----------------
 * The description used for this option in the Options Upgrade set up.
 *
 *
 * ----------------
 * Position
 * ----------------
 * The position of the option on the options menu.
 * 
 * Above  -  Above all the default options
 * Middle -  Between the general and volume options
 * Below  -  Below all the default options
 *
 *
 * ----------------
 * Condition
 * ----------------
 * This JavaScript evaluation that must be true for this option to 
 * appear in the menu. If you wish to not use any condition, you 
 * can simply set this to "true". Keep in mind this condition
 * is only checked and applied upon initialization.
 *
 *
 * ----------------
 * Variable ID
 * ----------------
 * The variable that stores the result of the option.
 * This variable will persist through all save files!
 *
 *
 * ----------------
 * Default Value
 * ----------------
 * The default value used for the option if none is specified.
 *
 *
 * ----------------
 * On Change Eval
 * ----------------
 * The JavaScript code that is run when this option is changed.
 * The option's current value is stored in "value".
 *
 * This means if you change the option to its second option, then
 * the eval will run and "value" will be 2.
 * 
 *
 * ----------------
 * Options
 * ----------------
 * These are all the option names. 
 * Each option name corresponds to the index listed on the left. 
 * For example, if the player choose the first option, then the value 1 will
 * be stored in the variable. The second option would result in the value
 * of 2, the third would be 3, etc..
 *
 *
 * =============================================================================
 *  End of Help File
 * =============================================================================
 * 
 * Welcome to the bottom of the Help file.
 *
 *
 * Thank you for reading! Please submit any bugs here:
 * http://sumrndm.site/report-bug/
 *
 *
 * Check out more of my content in these places:
 * http://sumrndm.site/
 * https://www.youtube.com/SumRndmDde
 *
 *
 * Until next time!
 *   ~ SumRndmDde
 *
 */

/*~struct~Options:
 *
 * @param Name
 * @desc The name of the option that will appear in the option menu.
 * @default
 *
 * @param Category
 * @desc The category the option will fall into for the Options Upgrade plugin.
 * @default General
 *
 * @param Description
 * @type note
 * @desc The description used for this option in the Options Upgrade set up.
 * @default ""
 *
 * @param Position
 * @type select
 * @option Above
 * @option Middle
 * @option Below
 * @desc The position of the option on the options menu.
 * @default Above
 *
 * @param Condition
 * @desc This JavaScript evaluation that must be true for this option to appear in the menu.
 * @default true
 *
 * @param Variable ID
 * @type variable
 * @desc The variable that stores the result of the option.
 * This variable will persist through all save files!
 * @default 1
 *
 * @param Default Value
 * @type number
 * @desc The default value used for the option if none is specified.
 * @default 1
 *
 * @param On Change Eval
 * @type note
 * @desc The JavaScript code that is run when this option is changed.
 * The option's current value is stored in "value".
 * @default ""
 *
 * @param Options
 * @type text[]
 * @desc These are all the option names. Each option name corresponds to the index listed on the left. 
 * @default []
 *
 */

var SRD = SRD || {};
SRD.OptionsCreator = SRD.OptionsCreator || {};

var Imported = Imported || {};
Imported["SumRndmDde Options Creator"] = 1.00;

(function(_) {

"use strict";

//-----------------------------------------------------------------------------
// SRD.Requirements
//-----------------------------------------------------------------------------

_.alertNeedGameUpgrade = function() {
	alert("The 'SRD_GameUpgrade' plugin is required for using the 'SRD_OptionsCreator' plugin.");
	if(confirm("Do you want to open the download page to 'SRD_GameUpgrade'?")) {
		window.open('http://sumrndm.site/game-upgrade/');
	}
};

if(!Imported["SumRndmDde Game Upgrade"]) {
	_.alertNeedGameUpgrade();
	return;
}

if(SRD.requirePlugin(
	'SumRndmDde Options Upgrade', 
	'SRD_OptionsCreator', 
	'SRD_OptionsUpgrade', 
	'http://sumrndm.site/options-upgrade/')) return;

//-----------------------------------------------------------------------------
// SRD.OptionsCreator
//-----------------------------------------------------------------------------

_.data = SRD.parse(PluginManager.parameters('SRD_OptionsCreator')['Options'], true);

_.varsUsed = {};

_.setup = function($) {
	for(var i = 0; i < _.data.length; i++) {
		_.varsUsed[String(_.data[i]['Variable ID'])] = i;
		$.commands.push('option-creator-' + i);
		$.comCategories.push(String(_.data[i]['Category']));
		$.comDescriptions.push(String(_.data[i]['Description']));
	}
};

_.setup(SRD.OptionsUpgrade);

//-----------------------------------------------------------------------------
// ConfigManager
//-----------------------------------------------------------------------------

ConfigManager._customData = [];

ConfigManager.getCustomData = function(id) {
	return this._customData[id];
};

ConfigManager.setCustomData = function(id, value) {
	try {
		eval(_.data[id]['On Change Eval']);
	} catch(e) {
		console.error(e);
	}
	this._customData[id] = value;
	if($gameMap) {
		$gameMap.requestRefresh();
	}
};

_.ConfigManager_makeData = ConfigManager.makeData;
ConfigManager.makeData = function() {
	var config = _.ConfigManager_makeData.apply(this, arguments);
	for(var i = 0; i < _.data.length; i++) {
		config['custom-data-' + i] = this.getCustomData(i);
	}
	return config;
};

_.ConfigManager_applyData = ConfigManager.applyData;
ConfigManager.applyData = function(config) {
	_.ConfigManager_applyData.apply(this, arguments);
	for(var i = 0; i < _.data.length; i++) {
		this.setCustomData(i, this.readCustomData(config, i));
	}
};

ConfigManager.readCustomData = function(config, index) {
	var value = config['custom-data-' + index];
	if (value !== undefined) {
		return parseInt(value);
	} else {
		return parseInt(_.data[index]['Default Value']);
	}
};

//-----------------------------------------------------------------------------
// Game_Variables
//-----------------------------------------------------------------------------

_.Game_Variables_value = Game_Variables.prototype.value;
Game_Variables.prototype.value = function(variableId) {
	var configIndex = _.varsUsed[String(variableId)];
	if(configIndex !== undefined) {
		return ConfigManager.getCustomData(configIndex);
	}
    return _.Game_Variables_value.apply(this, arguments);
};

_.Game_Variables_setValue = Game_Variables.prototype.setValue;
Game_Variables.prototype.setValue = function(variableId, value) {
	var configIndex = _.varsUsed[String(variableId)];
	if(configIndex !== undefined) {
		ConfigManager.setCustomData(configIndex, value);
		this.onChange();
	} else {
		_.Game_Variables_setValue.apply(this, arguments);
	}
};

//-----------------------------------------------------------------------------
// Window_Options
//-----------------------------------------------------------------------------

_.Window_Options_makeCommandList = Window_Options.prototype.makeCommandList;
Window_Options.prototype.makeCommandList = function() {
	this.makeCustomCommands('Above');
	_.Window_Options_makeCommandList.apply(this, arguments);
	this.makeCustomCommands('Below');
};

_.Window_Options_addGeneralOptions = Window_Options.prototype.addGeneralOptions;
Window_Options.prototype.addGeneralOptions = function() {
	_.Window_Options_addGeneralOptions.apply(this, arguments);
	this.makeCustomCommands('Middle');
};

Window_Options.prototype.makeCustomCommands = function(position) {
	for(var i = 0; i < _.data.length; i++) {
		if(this.getCustomCondition(i) && _.data[i]['Position'] === position) {
			this.addCommand(_.data[i]['Name'], 'option-creator-' + i);
		}
	}
};

Window_Options.prototype.getCustomCondition = function(index) {
	try {
		return !!eval(_.data[index]['Condition'])
	} catch(e) {
		console.error(e);
		return false;
	}
};

_.Window_Options_getConfigValue = Window_Options.prototype.getConfigValue;
Window_Options.prototype.getConfigValue = function(symbol) {
	if(this.isCustomSymbol(symbol)) {
		var customIndex = parseInt(symbol.substring(15));
		return ConfigManager.getCustomData(customIndex);
	} else {
		return _.Window_Options_getConfigValue.apply(this, arguments);
	}
};

_.Window_Options_setConfigValue = Window_Options.prototype.setConfigValue;
Window_Options.prototype.setConfigValue = function(symbol, value) {
	if(this.isCustomSymbol(symbol)) {
		var customIndex = parseInt(symbol.substring(15));
		ConfigManager.setCustomData(customIndex, value);
	} else {
		_.Window_Options_setConfigValue.apply(this, arguments);
	}
};

_.Window_Options_statusText = Window_Options.prototype.statusText;
Window_Options.prototype.statusText = function(index) {
	var symbol = this.commandSymbol(index);
	var value = this.getConfigValue(symbol);
	if (this.isCustomSymbol(symbol)) {
		var customIndex = parseInt(symbol.substring(15));
		return _.data[customIndex]['Options'][value - 1];
	} else {
		return _.Window_Options_statusText.apply(this, arguments);
	}
};

Window_Options.prototype.isCustomSymbol = function(symbol) {
	return symbol.contains('option-creator-');
};

_.Window_Options_processOk = Window_Options.prototype.processOk;
Window_Options.prototype.processOk = function() {
	var index = this.index();
	var symbol = this.commandSymbol(index);
	var value = this.getConfigValue(symbol);
	if (this.isCustomSymbol(symbol)) {
		var customIndex = parseInt(symbol.substring(15));
		value += 1;
		if(!_.data[customIndex]['Options'][value - 1]) {
			value = 1;
		}
		this.changeValue(symbol, value);
	} else {
		_.Window_Options_processOk.apply(this, arguments);
	}
};

Window_Options.prototype.cursorRight = function(wrap) {
	var index = this.index();
	var symbol = this.commandSymbol(index);
	var value = this.getConfigValue(symbol);
	if (this.isCustomSymbol(symbol)) {
		var customIndex = parseInt(symbol.substring(15));
		value += 1;
		if(value > _.data[customIndex]['Options'].length) {
			value = _.data[customIndex]['Options'].length;
		}
		this.changeValue(symbol, value);
	} else {
		_.Window_Options_processOk.apply(this, arguments);
	}
};

Window_Options.prototype.cursorLeft = function(wrap) {
	var index = this.index();
	var symbol = this.commandSymbol(index);
	var value = this.getConfigValue(symbol);
	if (this.isCustomSymbol(symbol)) {
		var customIndex = parseInt(symbol.substring(15));
		value -= 1;
		if(value < 1) value = 1;
		this.changeValue(symbol, value);
	} else {
		_.Window_Options_processOk.apply(this, arguments);
	}
};

})(SRD.OptionsCreator);