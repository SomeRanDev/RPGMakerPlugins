/*:
 * @plugindesc Provides game developers with an in-game tool for building and managing translations/localizations for their game's text.
 * @author SomeRanDev
 *
 * @param Source Language Name
 * @desc Input the name of the base language used for the game's development; this is what it's referred to in game.
 * @default English
 *
 * @param Languages
 * @type text[]
 * @desc Insert all the desired translation languages. Each of these will appear in the editor and the game's options.
 * @default ["Spanish","Portuguese"]
 *
 * @param Default Language
 * @desc This is the language that is used by default. 
 * Leave blank in order to use the source language.
 * @default
 *
 * @param Provide Option?
 * @type boolean
 * @desc If "ON", then players will be able to select the language in the options menu.
 * @default true
 *
 * @param Option Name
 * @desc If the language can be changed in the options menu, this is what the option will be called.
 * @default Language
 *
 * @param Allow Message Update?
 * @type boolean
 * @desc If "OFF", then the message window and message scroll text will not update while focused on message translation.
 * @default true
 *
 * @help
 * ===========================================================================
 *                              Translation Engine
 *                                 Version 1.04
 *                                  SumRndmDde
 * ===========================================================================
 *
 * This plugin provides game developers with tools necessary to easily and 
 * effectively translate and localize all the text within their game. This is 
 * through both an in-game tool that can be used while playtesting and a 
 * powerful notetag system for translating database inputs.
 *
 *
 * ===========================================================================
 *  Installing the Plugin
 * ===========================================================================
 *
 * Here's a quick overview on how to properly install the plugin:
 *
 * 1) Place this plugin at the bottom of your plugin list!
 *
 * 2) Fill out the [Languages] plugin parameter with all the languages the 
 *    game will be translated to.
 *
 * 3) Set the [Source Language Name] plugin parameter to the name of the 
 *    language used by the text by default.
 *
 * 4) Finally, set [Provide Option?] ON or OFF based on whether or not you 
 *    wish to provide the player with the option to change the language in 
 *    the options menu.
 *
 *
 * ===========================================================================
 *  How to open the Translation App
 * ===========================================================================
 *
 * While playtesting, press [CTRL + T] on Windows or [CMD + T] on Mac in 
 * order to open the "Translation App". This is an app/editor that allows 
 * one to set up translations while playing the game.
 *
 * Once the app is open, it will act as a separate window from the game 
 * window.
 *
 * Here are a few rules that apply:
 *
 * 1) While the app is open, the game will only show the default text. You 
 *    may not view translations unless the tool is closed. This is to help 
 *    avoid confusion while editing since changes will not be applied until 
 *    the app window is closed.
 *
 * 2) The game cannot completely shut down unless both the game window and the
 *    editor window are both closed. If, for some reason, you cannot playtest
 *    your game, be sure the Translation App is closed!
 *
 * 3) The app will save its position when it is closed. If you open it again, 
 *    it will appear where it left off! However, once you close or reset the 
 *    game, its position will also be reset.
 *
 *
 * ===========================================================================
 *  How to use the Translation App
 * ===========================================================================
 *
 * To start translating, first select the language you wish to translate to
 * in the top-right corner of the app. Next, select what aspect of your game 
 * you wish to translate. All four choices appear as tabs you may select from 
 * the top of the editor. They are:
 *
 *  ~ Messages
 *  ~ Commands
 *  ~ Terms
 *  ~ Custom Translations
 *
 *
 * Here's an explanation of each one:
 *
 * =========================
 *  Messages
 * =========================
 *
 * This allows developers to provide translations for text within "Show Text" 
 * events and "Show Scrolling Text" events. While the "Messages" tab is open,
 * the Original input will update itself to the current text displayed within
 * one of the aforementioned events. If neither of those events are active, 
 * the input will remain blank.
 *
 * While Original input box has text in it, one may create a translation for
 * the displayed text in the Translation input box. Simply type the text in
 * and it will save automatically!
 *
 * Keep in mind the translations should include the desired text codes!
 *
 * Also, this mode works great with the Event "Test" feature!
 *
 *
 * =========================
 *  Commands
 * =========================
 *
 * One may provide translations for any command windows using the "Commands" 
 * tab. While this tab is open, all one must do is have an active cursor on
 * a command window, and the Original input will update itself. Insert a 
 * corresponding translation into the Translation input to translate the 
 * command!
 *
 * Some windows that fall under the category of "command windows" include:
 * 
 * * The title screen command window
 * * The menu command window
 * * Command menus in other scenes
 * * The options window
 * * The game end window
 * * Event choice windows
 *
 * This, of course, will also work with command windows added through 
 * external plugins. Don't be afraid to experiment!
 *
 *
 * =========================
 *  Terms
 * =========================
 *
 * This section allows developers to translate the terms and messages from 
 * within their project's Database's Terms tab. All the Base Statuses,
 * Parameters, and Messages can be translated here. First, select the "Term"
 * from the dropdown list. Next, input a translation based upon the provided
 * Original input that contains the current text for that term.
 *
 * Similar to the previous tabs, once you insert the text into the Translation
 * box, it will immediately be saved!
 *
 * When one begins his or her translation process, it is recommended he or 
 * she starts the process here. This tab provides the capability to make a 
 * large number of helpful base translations!
 *
 *
 * =========================
 *  Custom Translations
 * =========================
 *
 * Custom translations allow for developers to set a word to phrase to 
 * specifically translate into another. This is primarily used to translate
 * text that cannot be translated through any of the other mediums provided
 * through this plugin. Use this as a last resort for anything you cannot
 * translate normally!
 *
 * In order to add a translation, simply fill out both the "Original" and
 * "Translation" inputs, then press the "Add Translation" button. This will
 * add the pair to a list of custom translations displayed on the lower-half
 * of the page.
 *
 * In order to delete a translation, fill out the "Original" input with the 
 * original text for that translation, then press the "Delete Translation"
 * button. This will remove that translation pair from both the list and the 
 * game itself.
 *
 *
 * =========================
 *  RegExp Translations
 * =========================
 *
 * Custom translations can also use Regular Expressions. As opposed to the 
 * normal custom translations which require exact matching in order to work,
 * Regular Expressions can allow for more dynamic checks and replacements from
 * within larger bodies of text.
 *
 * In order to setup a Regular Expression, simply set the Original input to 
 * have a Regular Expression using the typical JavaScript format:
 *
 *   /expression/flags
 *
 * For example:
 *
 *   /Harold/ig
 *
 * This example will check all texts for this match and apply a replacement
 * in order to replace this with the text defined in the Translation input.
 *
 *
 * ===========================================================================
 *  Translating the Database
 * ===========================================================================
 *
 * The second part of this plugin revolves around translating Database inputs
 * by using a notetag setup to translate specific fields. This can be done 
 * with Actors, Classes, Skills, Items, Weapons, Armors, Enemies, States, and 
 * Tilesets.
 *
 * To do this, use the following notetag structure:
 *
 *   <LANGUAGE Translation>
 *   [PROP]:VAL
 *   [PROP]:VAL
 *   </LANGUAGE Translation>
 *
 *   [LANGUAGE] => The name of the language this is a translation for.
 *   [PROP]     => A field name for this data object.
 *   [VAL]      => The translated value for that data object's field.
 *
 *
 * =========================
 *  Example
 * =========================
 *
 * This may appear to be a little confusing, but here is an example that one 
 * may use to translate an Actor's fields:
 *
 *   <Spanish Translation>
 *   [name]:Haroldo
 *   [nickname]:Harldy
 *   [profile]:Este es el héroe del juego.
 *   Le gusta caminar por la playa y jugar juegos.
 *   </Spanish Translation>
 *
 * This means, when the language is set to Spanish, this Actor will have the
 * following changes:
 *
 * Name will be set to "Haroldo".
 * Nickname will be set to "Harldy".
 * Profile  will be set to "Este es el héroe del juego. 
 *                          Le gusta caminar por la playa y jugar juegos."
 *
 *
 * =========================
 *  All Common Fields
 * =========================
 *
 * Here is a list of all the common field names you may wish to use 
 * corresponding to each Database section:
 *
 *
 *         [Actors]
 *
 *   <LANGUAGE Translation>
 *   [name]:
 *   [profile]:
 *   [nickname]:
 *   </LANGUAGE Translation>
 *
 *
 *        [Classes]
 *
 *   <LANGUAGE Translation>
 *   [name]:
 *   </LANGUAGE Translation>
 *
 *
 *         [Skills]
 *
 *   <LANGUAGE Translation>
 *   [name]:
 *   [description]:
 *   [message1]:
 *   [message2]:
 *   </LANGUAGE Translation>
 *
 *
 *   [Items, Weapons, Armors]
 *
 *   <LANGUAGE Translation>
 *   [name]:
 *   [description]:
 *   </LANGUAGE Translation>
 *
 *
 *         [Enemies]
 *
 *   <LANGUAGE Translation>
 *   [name]:
 *   </LANGUAGE Translation>
 *
 *
 *         [States]
 *
 *   <LANGUAGE Translation>
 *   [name]:
 *   [message1]:
 *   [message2]:
 *   [message3]:
 *   [message4]:
 *   </LANGUAGE Translation>
 *
 *
 *        [Tilesets]
 *
 *   <LANGUAGE Translation>
 *   [name]:
 *   </LANGUAGE Translation>
 *
 *
 * ===========================================================================
 *  Different Images Based on Language
 * ===========================================================================
 *
 * One may load alternative images based on the game's language. To do this, 
 * one must use the following format for the image file name:
 *
 *   IMAGENAME_[LANGUAGE]
 *
 *
 * To allow the plugin to recognize that an image can be translated, first 
 * set the original image's file name to:
 *
 *   IMAGENAME_[Original]
 *
 * Then set up names for all your alternative images:
 *
 *   IMAGENAME_[Spanish]
 *   IMAGENAME_[Portuguese]
 *
 *
 * Be sure to set up images for all languages in your game!
 *
 *
 * ===========================================================================
 *  Plugin Commands
 * ===========================================================================
 *
 * In order to force the game to use a specific language, the following 
 * plugin command must be invoked in an event. This can be different for 
 * every game file.
 *
 *   SetTranslation LANGUAGE
 *
 * For example:
 *
 *   SetTranslation Spanish
 *
 *
 * ===========================================================================
 *
 * Once a language is forced, it cannot be changed in the options menu.
 * In order to remove a forced translation, use the plugin command:
 *
 *   RevertTranslation
 *
 *
 * ===========================================================================
 *  Checking Current Language
 * ===========================================================================
 *
 * In order to change events based on the current language, the following 
 * script condition needs to be used:
 *
 *   ConfigManager.getLanguage() === "LANGUAGE"
 *
 * For example:
 *
 *   ConfigManager.getLanguage() === "Spanish"
 *
 *
 * ===========================================================================
 *  End of Help Section
 * ===========================================================================
 */

//-----------------------------------------------------------------------------
// Init namespaces
//-----------------------------------------------------------------------------

var SRD = SRD || {};
SRD.TranslationEngine = SRD.TranslationEngine || {};

var Imported = Imported || {};
Imported["SumRndmDde Translation Engine"] = 1.04;

//-----------------------------------------------------------------------------
// $dataTranslations is the variable counterpart of "Translations.json"
//-----------------------------------------------------------------------------

var $dataTranslations = null;

//-----------------------------------------------------------------------------
// Init classes
//-----------------------------------------------------------------------------

function TranslationBuilder() {
	throw new Error('This is a static class');
}

function TranslationManager() {
	throw new Error('This is a static class');
}

//-----------------------------------------------------------------------------
// Fix the flag check for 1.6 editor and 1.5 or below project
//-----------------------------------------------------------------------------

if(process.versions['node-webkit'] >= "0.13.0" && Utils.RPGMAKER_VERSION < "1.6.0") {

Utils.isOptionValid = function(name) {
	if (location.search.slice(1).split('&').contains(name)) {return 1;};
	if (typeof nw !== "undefined" && nw.App.argv.length > 0 && nw.App.argv[0].split('&').contains(name)) {return 1;};
	return 0;
};

}

//-----------------------------------------------------------------------------
// Begin IIFE
//
//  $  ~ SRD.TranslationEngine
//  TB ~ TranslationBuilder
//  TM ~ TranslationManager
//-----------------------------------------------------------------------------

(function($, TB, TM) {

"use strict";

////===========================================================================
//// SRD.TranslationEngine
////
//// The namespace of the plugin.
//// Stores parameters, trivial variables, functions, and aliases.
////===========================================================================

$.params = PluginManager.parameters('SRD_TranslationEngine');

$.isNewNWjs = process.versions['node-webkit'] >= "0.13.0";

try {
	$.languages = JSON.parse($.params['Languages']);
} catch(e) {
	throw new Error('SRD_TranslationEngine\'s [Languages] parameter could not be parsed.');
	return;
}

if($.languages.length === 0) {
	console.log('No languages detected. SRD_TranslationEngine disabled.');
	return;
}

$.sourceName = String($.params['Source Language Name']);
$.defaultLang = $.languages.indexOf(String($.params['Default Language'])) + 1;
$.allowOption = String($.params['Provide Option?']).trim().toLowerCase() === 'true';
$.optionName = String($.params['Option Name']);
$.allowMessageUpdate = String($.params['Allow Message Update?']).trim().toLowerCase() === 'true';

$.dataFileName = "Translations.json";
$.defaultData = '{"msg": {}, "cmd": {}, "terms": {}, "custom": {}}';
$.isPlaytest = Utils.isOptionValid('test') && Utils.isNwjs();

if($.isPlaytest && $.isNewNWjs) {
	if(!require('fs').existsSync("translationengine.html")) require('fs').writeFileSync("translationengine.html", "<!DOCTYPE html><html><head><title></title></head><body>\n<!--\n\tThis is required for the Translation Engine to open on NWjs versions above 0.13.0\n\tFeel free to delete upon exporting the game.\n-->\n</body></html>");
}

if($.isNewNwjs && Utils.RPGMAKER_VERSION < "1.6.0") {

Utils.isOptionValid = function(name) {
	if (location.search.slice(1).split('&').contains(name)) {return 1;};
	if (typeof nw !== "undefined" && nw.App.argv.length > 0 && nw.App.argv[0].split('&').contains(name)) {return 1;};
	return 0;
};

}

//-----------------------------------------------------------------------------
// Load the notetags from the appropriate data sources and apply their data.
//-----------------------------------------------------------------------------

$.translatableDatas = [
	'$dataActors',
	'$dataClasses',
	'$dataSkills',
	'$dataItems',
	'$dataWeapons', 
	'$dataArmors',
	'$dataEnemies',
	'$dataStates',
	'$dataTilesets'
];

$.loadNoteData = function() {
	for(var i = 0; i < $.translatableDatas.length; i++) {
		var dataObj = window[$.translatableDatas[i]];
		for(var j = 1; j < dataObj.length; j++) {
			var data = dataObj[j];
			if(!data) continue;
			var updateFields = $.parseNoteData(data);
			if(updateFields) {
				$.applyUpdateFields(data, updateFields);
			}
		}
	}
};

$.parseNoteData = function(data) {
	var updateFields = null;
	data.note.replace(/<(.*)[ ]Translation>((?:(?!<\/)[\s\S])*)<\/(.*)[ ]Translation>/gi, function(match, m1, m2, m3) {
		if(m1 !== m3) return match;
		if(data._tt_translations === undefined) data._tt_translations = {};
		m2.replace(/\[(.*)\]:\n*((?:(?!\[.*\])[\s\S])*)\s*/gi, function(match2, name, value) {
			if(name && value && typeof(data[name]) === 'string') {
				if(value.indexOf('\n', value.length - 1) > 0) {
					value = value.substring(0, value.length - 1);
				}
				if(data._tt_translations[m1] === undefined) data._tt_translations[m1] = {};
				data._tt_translations[m1][name] = value;
				if(updateFields === null) updateFields = [];
				if(!updateFields.contains(name)) updateFields.push(name);
			}
			return match2;
		}.bind(this));
		return match;
	}.bind(this));
	return updateFields;
};

$.applyUpdateFields = function(data, updateFields) {
	for(var i = 0; i < updateFields.length; i++) {
		var field = updateFields[i];
		var defaultField = data[field];
		if(data._tt_translations) { // Can never be too safe. :P
			$.defineDataField(data, field, defaultField);
		}
	}
};

$.defineDataField = function(data, field, defaultField) {
	Object.defineProperty(data, field, {
		get: function() {
			if(ConfigManager.isDefaultLanguage()) return defaultField;
			var lang = ConfigManager.getLanguage();
			var fields = data._tt_translations[lang];
			if(!fields) return defaultField;
			var result;
			try {
				result = data._tt_translations[lang][field];
			} catch(e) {
				result = defaultField || '';
			}
			return result;
		},
		set: function(value) {},
		configurable: true
	});
};

$.Scene_Boot_start = Scene_Boot.prototype.start;
Scene_Boot.prototype.start = function() {
	$.loadNoteData();
	$.Scene_Boot_start.apply(this, arguments);
};

//-----------------------------------------------------------------------------
// Data structure used to construct the selector of the term translation.
//-----------------------------------------------------------------------------

$.termsInfo = [
	['Basic', [
			['Level', 'basic', 0],
			['Level (abbr.)', 'basic', 1],
			['HP', 'basic', 2],
			['HP (abbr.)', 'basic', 3],
			['MP', 'basic', 4],
			['MP (abbr.)', 'basic', 5],
			['TP', 'basic', 6],
			['TP (abbr.)', 'basic', 7],
			['EXP', 'basic', 8],
			['EXP (abbr.)', 'basic', 9]
		]
	],
	['Stats', [
			['Max HP', 'param', 0],
			['Max MP', 'param', 1],
			['Attack', 'param', 2],
			['Defense', 'param', 3],
			['Magic Attack', 'param', 4],
			['Magic Defense', 'param', 5],
			['Agility', 'param', 6],
			['Luck', 'param', 7]
		]
	],
	['Messages', [
			['Possession', 'message', 'possession'],
			['EXP Total', 'message', 'expTotal'],
			['EXP Next', 'message', 'expNext'],
			['Save Message', 'message', 'saveMessage'],
			['Load Message', 'message', 'loadMessage'],
			['File', 'message', 'file'],
			['Party Name', 'message', 'partyName'],
			['Emerge', 'message', 'emerge'],
			['Preemptive', 'message', 'preemptive'],
			['Surprise', 'message', 'surprise'],
			['Escape Start', 'message', 'escapeStart'],
			['Escape Failure', 'message', 'escapeFailure'],
			['Victory', 'message', 'victory'],
			['Defeat', 'message', 'defeat'],
			['Obtain Exp', 'message', 'obtainExp'],
			['Obtain Gold', 'message', 'obtainGold'],
			['Obtain Item', 'message', 'obtainItem'],
			['Level Up', 'message', 'levelUp'],
			['Obtain Skill', 'message', 'obtainSkill'],
			['Use Item', 'message', 'useItem'],
			['Critical To Enemy', 'message', 'criticalToEnemy'],
			['Critical To Actor', 'message', 'criticalToActor'],
			['Actor Damage', 'message', 'actorDamage'],
			['Actor Recovery', 'message', 'actorRecovery'],
			['Actor Gain', 'message', 'actorGain'],
			['Actor Loss', 'message', 'actorLoss'],
			['Actor Drain', 'message', 'actorDrain'],
			['Actor No Damage', 'message', 'actorNoDamage'],
			['Actor No Hit', 'message', 'actorNoHit'],
			['Enemy Damage', 'message', 'enemyDamage'],
			['Enemy Recovery', 'message', 'enemyRecovery'],
			['Enemy Gain', 'message', 'enemyGain'],
			['Enemy Loss', 'message', 'enemyLoss'],
			['Enemy Drain', 'message', 'enemyDrain'],
			['Enemy No Damage', 'message', 'enemyNoDamage'],
			['Enemy No Hit', 'message', 'enemyNoHit'],
			['Evasion', 'message', 'evasion'],
			['Magic Evasion', 'message', 'magicEvasion'],
			['Magic Reflection', 'message', 'magicReflection'],
			['Counter Attack', 'message', 'counterAttack'],
			['Substitute', 'message', 'substitute'],
			['Buff Add', 'message', 'buffAdd'],
			['Debuff Add', 'message', 'debuffAdd'],
			['Buff Remove', 'message', 'buffRemove'],
			['Action Failure', 'message', 'actionFailure']
		]
	]
];

//-----------------------------------------------------------------------------
// Translates any text based on custom translation texts.
//-----------------------------------------------------------------------------

$.translate = function(text) {
	if(ConfigManager.isDefaultLanguage()) return text;
	var lang = ConfigManager.getLanguage();
	var data = $dataTranslations['custom'][lang];
	if(!data) return text;
	if(data && data[text]) {
		return data[text];
	} else {
		var regex = data._regex;
		if(!regex) return text;
		for(var i = 0; i < regex.length; i++) {
			if(!regex[i]) continue;
			try {
				text = text.replace(new RegExp(regex[i][0], regex[i][1]), regex[i][2]);
			} catch(e) {}
		}
		return text;
	}
};

//-----------------------------------------------------------------------------
// Translates the window's title.
//-----------------------------------------------------------------------------

$.translateWindowTitle = function() {
	if($dataSystem) {
		document.title = $.translate($dataSystem.gameTitle);
	}
};

//-----------------------------------------------------------------------------
// Check and create the "Translations.json" is necessary.
//-----------------------------------------------------------------------------

$.checkDataExists = function(filename, initialVal) {
	if(!Utils.isNwjs()) return;
	var fs = require('fs');
	var path = require('path');
	var dataPath = path.join(path.dirname(process.mainModule.filename), 'data/');
	var filePath = dataPath + filename;
	if(!fs.existsSync(filePath)) {
		fs.writeFileSync(filePath, initialVal);
	}
};

$.saveData = function(variable, filename) {
	if(!Utils.isNwjs()) return;
	var fs = require('fs');
	var path = require('path');
	var dataPath = path.join(path.dirname(process.mainModule.filename), 'data/');
	var data = JSON.stringify(variable);
	var filePath = dataPath + filename;
	fs.writeFileSync(filePath, data);
};

$.checkDataExists($.dataFileName, $.defaultData);

////===========================================================================
//// DataManager
////
//// Data file is registered. If a battle or event test is occuring, measures 
//// are taken to load the translations properly.
////===========================================================================

if(!DataManager.isBattleTest() && !DataManager.isEventTest()) {

	DataManager._databaseFiles.push({name: '$dataTranslations', src: $.dataFileName});

} else {

	$.DataManager_loadDatabase = DataManager.loadDatabase;
	DataManager.loadDatabase = function() {
		$.DataManager_loadDatabase.apply(this, arguments);
		this.loadDataFile('$dataTranslations', $.dataFileName);
	};

}

////===========================================================================
//// SceneManager
////
//// Edited to update the TranslationManager while the editor is active.
////===========================================================================

if($.isPlaytest && !$.disableBuilder) { // The following is for Playtests only...

$.SceneManager_onKeyDown = SceneManager.onKeyDown;
SceneManager.onKeyDown = function(event) {
	if(!event.ctrlKey && !event.altKey && event.keyCode === 116) {
		if(TB.window) TB.closeMaker();
	}
	$.SceneManager_onKeyDown.apply(this, arguments);
	if((event.ctrlKey || event.metaKey) && event.keyCode === 84) {
		this.openTranslationApp();
	}
};

SceneManager.openTranslationApp = function() {
	if(!this._translationAppReady) return;
	if(TB.window) {
		TB.closeMaker();
	} else {
		TB.openMaker();
	}
};

$.SceneManager_updateScene = SceneManager.updateScene;
SceneManager.updateScene = function() {
	$.SceneManager_updateScene.apply(this, arguments);
	if(TB.mode === 'translate') {
		TM.update();
	}
};

$.SceneManager_initNwjs = SceneManager.initNwjs;
SceneManager.initNwjs = function() {
	$.SceneManager_initNwjs.apply(this, arguments);
	if(Utils.isNwjs()) {
		this._translationAppReady = true;
	}
};

////===========================================================================
//// TranslationBuilder
////
//// Handles the creation of the editor window.
//// Contains references of the editor, such as the document and innerHTML.
////===========================================================================

TB._window = null;
TB.focused = false;

//-----------------------------------------------------------------------------
// Reference to window object for the editor.
//-----------------------------------------------------------------------------

Object.defineProperty(TB, 'window', {
	get: function() {
		return this._window;
	},
	configurable: true
});

//-----------------------------------------------------------------------------
// Reference to document object for the editor.
// Useful for finding certain DOM elements through "getElementById".
//-----------------------------------------------------------------------------

Object.defineProperty(TB, 'document', {
	get: function() {
		if(!this._window) return null;
		if(!this._document) {
			this._document = this._window.window.document;
		}
		return this._document;
	},
	configurable: true
});

//-----------------------------------------------------------------------------
// Reference to style DOM element generated for the editor.
//-----------------------------------------------------------------------------

Object.defineProperty(TB, 'style', {
	get: function() {
		return this._styling;
	},
	configurable: true
});

//-----------------------------------------------------------------------------
// Allows one to get or set the HTML of the editor.
//-----------------------------------------------------------------------------

Object.defineProperty(TB, 'mainHTML', {
	get: function() {
		if(!this._document) return null;
		return this._document.body.innerHTML
	},
	set: function(value) {
		if(!this._document) return;
		this._document.body.innerHTML = value;
	},
	configurable: true
});

//-----------------------------------------------------------------------------
// Sets or gets the editor's current mode.
//-----------------------------------------------------------------------------

Object.defineProperty(TB, 'mode', {
	get: function() {
		return this._mode;
	},
	set: function(value) {
		return this._mode = value;
	},
	configurable: true
});

//-----------------------------------------------------------------------------
// Opens the editor.
//-----------------------------------------------------------------------------

TB.openMaker = function() {
	if(this._window) this._window.close(true);
	this.createWindow();
	if(!$.isNewNWjs) {
		this.setupWindowEvents();
	}
};

//-----------------------------------------------------------------------------
// Closes the editor.
//-----------------------------------------------------------------------------

TB.closeMaker = function() {
	this.onFinish();
	this._window.close(true);
};

TB.deleteMaker = function() {
	this._window = null;
};

//-----------------------------------------------------------------------------
// Creates the editor window.
//-----------------------------------------------------------------------------

TB.createWindow = function() {
	var gui = require('nw.gui');
	var x = this._translatorX;
	if(x === undefined) {
		x = Math.round(((window.innerWidth - 485) / 2) + window.screenX);
	}
	var y = this._translatorY;
	if(y === undefined) {
		y = Math.round(((window.innerHeight - 430) / 2) + window.screenY);
	}
	if($.isNewNWjs) {
		gui.Window.open('translationengine.html', {
			title: "",
			x: x,
			y: y,
			width: 485,
			height: 485,
			resizable: false
		}, function(newWindow) {
			this._window = newWindow;
			this.setupWindowEvents();
		}.bind(this));
	} else {
		this._window = gui.Window.open('', {
			title: "",
			x: x,
			y: y,
			width: 485,
			height: 485,
			resizable: false,
			toolbar: false
		});
	}
};

//-----------------------------------------------------------------------------
// Apply final changes to the game.
//  - Refresh all the windows to apply text changes.
//  - Store editor window's position.
//-----------------------------------------------------------------------------

TB.onFinish = function() {
	if(this.mode === 'translate') {
		TM.onFinish();
		this.mode = '';
		this._translatorX = this._window.x;
		this._translatorY = this._window.y;
		TM.refreshAllWindows();
	}
};

//-----------------------------------------------------------------------------
// Sets up the editor events.
//-----------------------------------------------------------------------------

TB.setupWindowEvents = function() {
	this._window.on('closed', this.deleteMaker.bind(this));
	this._window.on('close', this.closeMaker.bind(this));
	this._window.on('focus', this.onFocus.bind(this));
	this._window.on('blur', this.onBlur.bind(this));
	this._hasLoaded = false;
	this._window.on('loaded', this.onWindowLoad.bind(this));
};

//-----------------------------------------------------------------------------
// These functions keep track of whether the window is blurred or focused.
//-----------------------------------------------------------------------------

TB.onFocus = function() {
	this.focused = true;
};

TB.onBlur = function() {
	$.saveData($dataTranslations, $.dataFileName);
	this.focused = false;
};

//-----------------------------------------------------------------------------
// Sets up HTML/CSS once editor has finished loading.
//-----------------------------------------------------------------------------

TB.onWindowLoad = function() {
	if(this._hasLoaded) return;
	this.buildWindow();
	this.assignWindow();
	this.focusWindow();
	this._hasLoaded = true;
};

//-----------------------------------------------------------------------------
// Creates DOM elements.
//-----------------------------------------------------------------------------

TB.buildWindow = function() {
	this._document = this._window.window.document;
	this._styling = this._document.createElement('style');
	this._document.head.appendChild(this._styling);
	this._document.addEventListener('keydown', SceneManager.onKeyDown.bind(SceneManager));
	this._styling.innerHTML = this.getStyle();
	this._document.body.style.cssText = 'background-color: #f0ffff';
	TM.setupEditor();
};

//-----------------------------------------------------------------------------
// Transfers local class references.
//-----------------------------------------------------------------------------

TB.assignWindow = function() {
	this._window.window.TB = this;
	this._window.window.TM = TM;
};

//-----------------------------------------------------------------------------
// Focuses on editor.
//-----------------------------------------------------------------------------

TB.focusWindow = function() {
	this._window.focus();
};

//-----------------------------------------------------------------------------
// Editor CSS (minified for ES5 compatibility).
//-----------------------------------------------------------------------------

TB.getStyle = function() {
	return 'button:active,button:hover{background-color:#3e668e}a#language-label,div#language-dropdown a,li a{text-decoration:none;text-align:center}a#language-label,button,li a,option{text-align:center}button,select{outline:0}#background,#background2{position:fixed;left:0;width:100%;z-index:-1}.customLabel,ul{overflow:hidden}textarea{resize:none;white-space:nowrap}table{border-collapse:collapse;width:100%}a#language-label{width:90px;display:inline-block;background-color:#b8cfe0}button{display:inline-block;padding:3px 6px;font-size:12px;color:#fff;background-color:#4c7dae;border:1px solid #666;box-shadow:0 4px #999}button:active{box-shadow:0 2px #666;transform:translateY(2px)}ul{list-style-type:none;margin:0;padding:0;border:1px solid #d5e6d5;background-color:#e2f3e2}li{float:left;background-color:#ded}li a{display:block;color:#666;padding:8px 12px}li a:hover:not(.active){background-color:#cbdccb}li a.active{color:#fff;background-color:#4cae4c}li.dropdown{display:inline-block}div#language-dropdown{display:none;position:absolute;background-color:#eee;width:113px;box-shadow:0 8px 16px 0 rgba(0,0,0,.2);z-index:1;left:auto;right:0;margin-right:8px}div#language-dropdown a{color:#666;padding:8px 12px;display:block;background-color:#a6c3d8}div#language-dropdown a:hover{background-color:#91a8d4}li#dropdown:hover div#language-dropdown{display:block}input,select,textarea{background-color:#fff;border-color:#888;color:#000;padding:3px 0 3px 3px;margin:5px 1px 3px 0}input{box-shadow:0;border:1px solid #666}.canRead:focus{box-shadow:0 0 5px #40ff00;border:1px solid #0f0}#background{top:0;height:37%;background-color:azure}#background2{top:38%;height:63%;background-color:#d2ffff}.mainTab{padding-top:20px;padding-left:10px}.customLabel{width:30%;white-space:nowrap}td,th{width:50%;background-color:#fff;border:1px solid #ddd;text-align:left;padding:4px}';
};

} // End of ($.isPlaytest && !$.disableBuilder)

if($.isPlaytest) {

////===========================================================================
//// TranslationManager
////
//// Handles the HTML for the editor and acts as a reference for the 
//// mechanical capabilites provided by the editor window.
////===========================================================================

TM.mode = '';

//-----------------------------------------------------------------------------
// Sets up the editor window for the Translation App.
//-----------------------------------------------------------------------------

TM.setupEditor = function() {
	TB.window.title = "Translation App (v1.0.1)  |  Maybee Rezbit (SomeRanDev)";
	TB.mode = 'translate';
	this.refreshAllWindows();
	this.mode = '';
	if(this.editLanguage === undefined) this.editLanguage = $.languages[0];
	this.msgData = $dataTranslations['msg'];
	this.cmdData = $dataTranslations['cmd'];
	this.termData = $dataTranslations['terms'];
	this.ctmData = $dataTranslations['custom'];
	TB.mainHTML = this.allHtml();
	this.setupMessageHtml();
	this.onTermChange({value: 'basic-0'});
	this.refreshEditor();
};

TM.allHtml = function() {
	return this.topBar() + 
		   this.getMessageHtml() + 
		   this.getCommandHtml() + 
		   this.getTermHtml() + 
		   this.getCustomHtml();
}

TM.changeLanguage = function(language) {
	this.editLanguage = language;
	TB.document.getElementById('language-label').innerHTML = language;
	this.refreshEditor();
};

TM.refreshEditor = function(language) {
	this.refreshMessageData();
	this.refreshCommandInputs();
	this.refreshTermInputs();
	this.clearCustomInputs();
	this.refreshCustomTable();
};

//-----------------------------------------------------------------------------
// Calls the "refresh" function of all windows in the scene.
//-----------------------------------------------------------------------------

TM.refreshAllWindows = function() {
	var scene = SceneManager._scene;
	if(scene && scene._windowLayer && scene._windowLayer.children) {
		scene._windowLayer.children.forEach(function(win) {
			if(typeof(win.refresh) === 'function') {
				try {
					win.refresh();
				} catch(e) {}
			}
		});
	}
	$.translateWindowTitle();
};

//-----------------------------------------------------------------------------
// The update function for the TranslationManager.
// It is called every cycle while the editor is open.
//-----------------------------------------------------------------------------

TM.update = function() {
	if(!TB.window || !this.mode) return;
	if(this.mode === 'message' && this.msgData) {
		this.updateMessage();
	} else if(this.mode === 'command' && this.cmdData) {
		this.updateCommand();
	}
};

//-----------------------------------------------------------------------------
// Updates the message translation content.
//-----------------------------------------------------------------------------

TM.updateMessage = function() {
	if(!$gameMessage || !$gameMessage.allText) return;
	var text = $gameMessage.allText();
	if(this._currentMsg !== text) {
		this._currentMsg = text;
		this.refreshMessageData();
	}
};

TM.refreshMessageData = function() {
	TB.document.getElementById('msg-original').value = this._currentMsg;
	var lang = this.editLanguage;
	if(this.msgData[this._currentMsg] && this.msgData[this._currentMsg][lang]) {
		TB.document.getElementById("msg-translate").value = this.msgData[this._currentMsg][lang];
	} else {
		TB.document.getElementById("msg-translate").value = '';
	}
};

//-----------------------------------------------------------------------------
// Updates the command translation content.
//-----------------------------------------------------------------------------

TM.updateCommand = function() {
	var scene = SceneManager._scene;
	if(!scene || !scene._windowLayer) {
		if(this._currentCommand) {
			this._currentCommand = null;
			this._currentInput = null;
		}
		this.clearCommandInputs();
		return;
	}
	this.updateCurrentCommand(scene);
	this.updateCommandInputs();
};

TM.updateCurrentCommand = function(scene) {
	if(!this._currentCommand || !this._currentCommand.active) {
		var activeWindows = scene._windowLayer.children.filter(function(window) {
			return window[Window_Command._id] && window.active;
		});
		if(activeWindows.length > 0) {
			this._currentCommand = activeWindows[0];
		} else {
			this._currentCommand = null;
			this._currentCmd = null;
			this.clearCommandInputs();
		}
	}
};

TM.updateCommandInputs = function() {
	if(this._currentCommand && this._currentCmd !== this._currentCommand.currentName()) {
		this._currentCmd = this._currentCommand.currentName();
		this.refreshCommandInputs();
	}
};

TM.refreshCommandInputs = function() {
	var current = this._currentCmd;
	TB.document.getElementById('com-original').value = current;
	var element = TB.document.getElementById('com-translate');
	var lang = this.editLanguage;
	if(this.cmdData[current] && this.cmdData[current][lang]) {
		element.value = this.cmdData[current][lang];
	} else {
		element.value = '';
	}
};

TM.clearCommandInputs = function() {
	TB.document.getElementById('com-original').value = '';
	TB.document.getElementById('com-translate').value = '';
};

//-----------------------------------------------------------------------------
// Updates the term translation content.
//-----------------------------------------------------------------------------

TM.onTermChange = function(event) {
	this._currentTerm = event.value;
	this.refreshTermInputs();
};

TM.refreshTermInputs = function() {
	var current = this._currentTerm;
	var data = current.split('-');
	if(!isNaN(data[1])) data[1] = parseInt(data[1]);
	if(TextManager[data[0]]) {
		TB.document.getElementById('term-original').value = TextManager[data[0]](data[1]);
	} else {
		TB.document.getElementById('term-original').value = '';
	}
	var element = TB.document.getElementById('term-translate');
	var lang = this.editLanguage;
	if(this.termData[current] && this.termData[current][lang]) {
		element.value = this.termData[current][lang];
	} else {
		element.value = '';
	}
};

//-----------------------------------------------------------------------------
// Appends and deletes the custom translation content.
//-----------------------------------------------------------------------------

TM.addTranslation = function() {
	var doc = TB.document;
	var original = doc.getElementById('custom-original').value;
	var translate = doc.getElementById('custom-translate').value;
	if(original && translate && original !== '_regex') {
		var lang = this.editLanguage;
		if(!this.ctmData[lang]) this.ctmData[lang] = {};
		if(original.match(/^\/(.*)\/([gimuy]*)$/)) {
			if(!this.ctmData[lang]._regex) this.ctmData[lang]._regex = [];
			this.ctmData[lang]._regex.push([String(RegExp.$1), String(RegExp.$2), translate]);
		} else {
			this.ctmData[lang][original] = translate;
		}
		this.clearCustomInputs();
		this.refreshCustomTable();
	}
};

TM.deleteTranslation = function() {
	var doc = TB.document;
	var original = doc.getElementById('custom-original').value;
	if(original) {
		var lang = this.editLanguage;
		if(this.ctmData[lang][original] !== undefined) {
			delete this.ctmData[lang][original];
		} else if(this.ctmData[lang]._regex) {
			var regex = this.ctmData[lang]._regex;
			var resultIndex = -1;
			for(var i = 0; i < regex.length; i++) {
				if(!regex[i]) continue;
				if(('/' + regex[i][0] + '/' + regex[i][1]) === original) {
					resultIndex = i;
					break;
				}
			}
			if(resultIndex >= 0 && regex[resultIndex]) {
				delete this.ctmData[lang]._regex[resultIndex];
			}
		}
		this.clearCustomInputs();
		this.refreshCustomTable();
	}
};

TM.clearCustomInputs = function() {
	var doc = TB.document;
	doc.getElementById('custom-original').value = '';
	doc.getElementById('custom-translate').value = '';
};

TM.refreshCustomTable = function() {
	TB.document.getElementById('custom-translations').innerHTML = this.getCustomOptions();
};

//-----------------------------------------------------------------------------
// Saves the data as it is input into text boxes in the editor.
//-----------------------------------------------------------------------------

TM.saveData = function(event) {
	var language = this.editLanguage;
	if(this.mode === 'message') {
		if(!this._currentMsg) return;
		if(!this.msgData[this._currentMsg]) this.msgData[this._currentMsg] = {};
		this.msgData[this._currentMsg][language] = event.value;
	} else if(this.mode === 'command') {
		if(!this._currentCmd) return;
		if(!this.cmdData[this._currentCmd]) this.cmdData[this._currentCmd] = {};
		this.cmdData[this._currentCmd][language] = event.value;
	} else if(this.mode === 'term') {
		if(!this._currentTerm) return;
		if(!this.termData[this._currentTerm]) this.termData[this._currentTerm] = {};
		this.termData[this._currentTerm][language] = event.value;
	}
};

//-----------------------------------------------------------------------------
// Generates the HTML for the tab bar on the editor.
//-----------------------------------------------------------------------------

TM.topBar = function() {
	var result = '<ul style="border: 1px solid #888; cursor:pointer;">' +
					'<li style="width: 19%;"><a id="menu1" onclick="TM.setupMessageHtml()">Messages</a></li>' +
					'<li style="width: 21%;"><a id="menu2" onclick="TM.setupCommandHtml()">Commands</a></li>' +
					'<li style="width: 18%;"><a id="menu3" onclick="TM.setupTermHtml()">Terms</a></li>' +
					'<li style="width: 18%;"><a id="menu4" onclick="TM.setupCustomHtml()">Custom</a></li>' +
					'<li id="dropdown" style="float:right; width: 24%;">' +
						'<a href="#" id="language-label">' + this.editLanguage + '</a>' +
						'<div id="language-dropdown">';
	for(var i = 0; i < $.languages.length; i++) {
		var lang = $.languages[i];
		result += '<a href="#" onclick="TM.changeLanguage(\'' + lang + '\')">' + lang + '</a>';
	}
	result += '</div></li></ul>';
	return result;
};

TM.setupPage = function(section) {
	if(this.mode) {
		var oldElement = TB.document.getElementById(this.mode);
		if(oldElement) oldElement.style.display = 'none';
	}
	var newElement = TB.document.getElementById(section);
	if(newElement) newElement.style.display = null;
	this.mode = section;
};

TM.setTab = function(id) {
	this.clearTabs();
	TB.document.getElementById('menu' + id).className = "active";
};

TM.clearTabs = function() {
	var doc = TB.document;
	doc.getElementById('menu1').className = "";
	doc.getElementById('menu2').className = "";
	doc.getElementById('menu3').className = "";
	doc.getElementById('menu4').className = "";
};

//-----------------------------------------------------------------------------
// Message Translation TAB
//-----------------------------------------------------------------------------

TM.setupMessageHtml = function() {
	this.setTab(1);
	this.setupPage('message');
};

TM.getMessageHtml = function() {
	var result = '<div id="message" class="mainTab" style="display: none;">' +
						'Original:<br>' +
						'<textarea rows="6" cols="50" id="msg-original" style="outline: none; overflow: auto;" readonly></textarea><br><br>' +
						'Translation:<br>' +
						'<textarea rows="6" cols="50" id="msg-translate" class="canRead" onkeyup="TM.saveData(this)" style="overflow: auto;"></textarea><br><br>' +
				 '</div>';
	return result;
};

TM.getLanguageSelect = function(id) {
	var result = '<select id="' + id + '" onchange="TM.refreshMessageData()">';
	for(var i = 0; i < $.languages.length; i++) {
		var language = $.languages[i];
		result += '<option value="' + language + '">' + language + '</option>';
	}
	result += '</select>';
	return result;
};

//-----------------------------------------------------------------------------
// Command Translation TAB
//-----------------------------------------------------------------------------

TM.setupCommandHtml = function() {
	this.setTab(2);
	this.setupPage('command');
};

TM.getCommandHtml = function() {
	var result = '<div id="command" class="mainTab" style="display: none;">' +
					'Original:<br>' + 
					'<input type="text" size="40" id="com-original" readonly><br><br>' + 
					'Translation:<br>' +
					'<input type="text" size="40" id="com-translate" class="canRead" onkeyup="TM.saveData(this)"><br><br>' + 
				 '</div>';
	return result;
};

//-----------------------------------------------------------------------------
// Term Translation TAB
//-----------------------------------------------------------------------------

TM.setupTermHtml = function() {
	this.setTab(3);
	this.setupPage('term');
};

TM.getTermHtml = function() {
	var result = '<div id="term" class="mainTab" style="display: none;">' +
					'Term:<br>' +
					'<select onchange="TM.onTermChange(this)" style="width: 70%;">' + 
						this.getTermOptions() + 
					'</select><br><br>' +
					'Original:<br>' +
					'<input type="text" size="40" id="term-original" readonly><br><br>' + 
					'Translation:<br>' +
					'<input type="text" size="40" id="term-translate" class="canRead" onkeyup="TM.saveData(this)"><br><br>' +
				 '</div>';
	return result;
};

TM.getTermOptions = function() {
	var result = '';
	for(var i = 0; i < $.termsInfo.length; i++) {
		var section = $.termsInfo[i];
		var label = section[0];
		result += '<optgroup label="' + label + '">\n';
		for(var j = 0; j < section[1].length; j++) {
			var info = section[1][j];
			result += '<option value="' + info[1] + '-' + info[2] + '">' + info[0] + '</option>\n';
		}
		result += '</optgroup>\n';
	}
	return result;
};

//-----------------------------------------------------------------------------
// Custom Translation TAB
//-----------------------------------------------------------------------------

TM.setupCustomHtml = function() {
	this.setTab(4);
	this.setupPage('custom');
};

TM.getCustomHtml = function() {
	return '<div id="custom" class="mainTab" style="display: none;">' +
				'Text:<br>' +
				'<input type="text" size="40" id="custom-original">' + 
				'<div style="float: right; padding-right: 12px; padding-top: 4px;">' + 
				'<button onclick="TM.deleteTranslation()">Delete Translation</button></div><br><br>' + 
				'Translate To:<br>' +
				'<input type="text" size="40" id="custom-translate">' +
				'<div style="float: right; padding-right: 20px; padding-top: 4px;">' + 
				'<button onclick="TM.addTranslation()">Add Translation</button></div><br><br>' + 
				'All Custom Translations:<br>' +
				'<div style="height: 220px; overflow-y: scroll;"><table id="custom-translations">' + 
					this.getCustomOptions() +
				'</table></div>' + 
			'</div>';
};

TM.stopHtml = function(text) {
	return text.replace(/</g, '&#60');
}

TM.getCustomOptions = function() {
	var lang = this.editLanguage;
	var data = this.ctmData[lang];
	if(!data) return '';
	var result = '';
	Object.keys(data).forEach(function(key) {
		if(key === '_regex') return;
		result += '<tr>' + 
					'<td>' + this.stopHtml(key) + '</td>' + 
					'<td>' + this.stopHtml(data[key]) + '</td>' + 
				  '</tr>';
	}.bind(this));
	if(data._regex) {
		for(var i = 0; i < data._regex.length; i++) {
			var regex = data._regex[i];
			if(!regex) continue;
			result += '<tr>' + 
						'<td><font color="#997300">/' + this.stopHtml(regex[0]) + 
						'/</font><font color="#cc0000">' + this.stopHtml(regex[1]) + '</font></td>' + 
						'<td>' + this.stopHtml(regex[2]) + '</td>' + 
					  '</tr>';
		}
	}
	return result;
};

//-----------------------------------------------------------------------------
// Called once the editor is closed.
//-----------------------------------------------------------------------------

TM.onFinish = function() {
	this.mode = '';
	$.saveData($dataTranslations, $.dataFileName);
};

TM.returnToMaker = function() {
	this.onFinish();
	TB.mode = '';
	TB.closeMaker();
	this.refreshAllWindows();
};

} // End of playtest only code!

////===========================================================================
//// Bitmap
////
//// Edits made for "Custom" translation feature.
////===========================================================================

$.Bitmap_initialize = Bitmap.prototype.initialize;
Bitmap.prototype.initialize = function(width, height) {
	$.Bitmap_initialize.apply(this, arguments);
	this._allowTextTranslation = true;
};

Bitmap.prototype.setTextTranslation = function(bool) {
	this._allowTextTranslation = !!bool;
};

$.Bitmap_drawText = Bitmap.prototype.drawText;
Bitmap.prototype.drawText = function(text, x, y, maxWidth, lineHeight, align) {
	if(this._allowTextTranslation) {
		$.Bitmap_drawText.call(this, $.translate(text), x, y, maxWidth, lineHeight, align);
		return;
	}
	$.Bitmap_drawText.apply(this, arguments);
};

$.Bitmap_measureTextWidth = Bitmap.prototype.measureTextWidth;
Bitmap.prototype.measureTextWidth = function(text) {
	if(this._allowTextTranslation) {
		return $.Bitmap_measureTextWidth.call(this, $.translate(text));
	} else {
		return $.Bitmap_measureTextWidth.apply(this, arguments);
	}
};

////===========================================================================
//// Window_Base
////
//// Edits made to prevent "Custom" translation feature during TextEx.
////===========================================================================

$.Window_Base_drawTextEx = Window_Base.prototype.drawTextEx;
Window_Base.prototype.drawTextEx = function(text, x, y) {
	var prev = !!this.contents._allowTextTranslation;
	this.contents.setTextTranslation(false);
	var result = $.Window_Base_drawTextEx.call(this, $.translate(text), x, y);
	this.contents.setTextTranslation(prev);
	return result;
};

$.Window_Base_processNormalCharacter = Window_Base.prototype.processNormalCharacter;
Window_Base.prototype.processNormalCharacter = function(textState) {
	var prev = !!this.contents._allowTextTranslation;
	this.contents.setTextTranslation(false);
	$.Window_Base_processNormalCharacter.apply(this, arguments);
	this.contents.setTextTranslation(prev);
};

////===========================================================================
//// Scene_Boot
////
//// Edits made for "Custom" translation feature.
////===========================================================================

$.Scene_Boot_updateDocumentTitle = Scene_Boot.prototype.updateDocumentTitle;
Scene_Boot.prototype.updateDocumentTitle = function() {
	$.Scene_Boot_updateDocumentTitle.apply(this, arguments);
	document.title = $.translate($dataSystem.gameTitle);
};

////===========================================================================
//// Game_Message
////
//// Edits made for "Message" translation feature.
////===========================================================================

$.Game_Message_allText = Game_Message.prototype.allText;
Game_Message.prototype.allText = function() {
	if(this._texts.length === 0) return '';
	if(ConfigManager.isDefaultLanguage()) return $.Game_Message_allText.apply(this, arguments);
	var lang = ConfigManager.getLanguage();
	var text = $.Game_Message_allText.apply(this, arguments);
	var data = $dataTranslations['msg'];
	if(data[text] && data[text][lang]) {
		return data[text][lang];
	} else {
		return $.Game_Message_allText.apply(this, arguments);
	}
};

$.Game_Message_choices = Game_Message.prototype.choices;
Game_Message.prototype.choices = function() {
	if(ConfigManager.isDefaultLanguage()) return $.Game_Message_choices.apply(this, arguments);
	var lang = ConfigManager.getLanguage();
	var choices = $.Game_Message_choices.apply(this, arguments);
	var data = $dataTranslations['cmd'];
	for(var i = 0; i < choices.length; i++) {
		var choice = choices[i];
		if(choice && data[choice] && data[choice][lang]) {
			choices[i] = data[choice][lang];
		}
	}
	return choices;
};

////===========================================================================
//// TextManager
////
//// Edits made for "Terms" translation feature.
////===========================================================================

$.TextManager_basic = TextManager.basic;
TextManager.basic = function(basicId) {
	if(ConfigManager.isDefaultLanguage()) return $.TextManager_basic.apply(this, arguments);
	var lang = ConfigManager.getLanguage();
	var id = 'basic-' + basicId;
	var data = $dataTranslations['terms'];
	if(data[id] && data[id][lang]) {
		return data[id][lang];
	} else {
		return $.TextManager_basic.apply(this, arguments);
	}
};

$.TextManager_param = TextManager.param;
TextManager.param = function(paramId) {
	if(ConfigManager.isDefaultLanguage()) return $.TextManager_param.apply(this, arguments);
	var lang = ConfigManager.getLanguage();
	var id = 'param-' + paramId;
	var data = $dataTranslations['terms'];
	if(data[id] && data[id][lang]) {
		return data[id][lang];
	} else {
		return $.TextManager_param.apply(this, arguments);
	}
};

$.TextManager_message = TextManager.message;
TextManager.message = function(messageId) {
	if(ConfigManager.isDefaultLanguage()) return $.TextManager_message.apply(this, arguments);
	var lang = ConfigManager.getLanguage();
	var id = 'message-' + messageId;
	var data = $dataTranslations['terms'];
	if(data[id] && data[id][lang]) {
		return data[id][lang];
	} else {
		return $.TextManager_message.apply(this, arguments);
	}
};

////===========================================================================
//// Game_Interpreter
////
//// Used to integrate plugin commands.
////===========================================================================

$.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	$.Game_Interpreter_pluginCommand.apply(this, arguments);
	if(!$gameSystem) return;
	var com = command.trim().toLowerCase();
	if(com === 'settranslation') {
		$gameSystem.forceTranslation(String(args[0]));
	} else if(com === 'reverttranslation') {
		$gameSystem.forceTranslation();
	}
};

////===========================================================================
//// Game_System
////
//// Edits made to allow developers to force a translation in a save file.
////===========================================================================

$.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
	$.Game_System_initialize.apply(this, arguments);
	this._forcedTranslation = null;
};

Game_System.prototype.forceTranslation = function(language) {
	if(!language) {
		ConfigManager.language = 0;
	} else if($.languages.contains(language)) {
		ConfigManager.language = $.languages.indexOf(language) + 1;
	}
};

////===========================================================================
//// ConfigManager
////
//// Edits made for the language option within the Options scene.
////===========================================================================

//-----------------------------------------------------------------------------
// Current language is stored as an integer.
//-----------------------------------------------------------------------------

ConfigManager._language = 0;

Object.defineProperty(ConfigManager, 'language', {
	get: function() {
		return this._language;
	},
	set: function(value) {
		this._language = value;
		$.translateWindowTitle();
	},
	configurable: true
});

//-----------------------------------------------------------------------------
// Obtains the current language's name.
//-----------------------------------------------------------------------------

ConfigManager.isDefaultLanguage = function() {
	return this._language === 0 || TB.mode === 'translate' || !this.getLanguage();
};

ConfigManager.getLanguage = function() {
	if($gameSystem && $gameSystem._forcedTranslation) {
		return $gameSystem._forcedTranslation;
	}
	return this._language === 0 ? $.sourceName : $.languages[this._language - 1];
};

$.ConfigManager_makeData = ConfigManager.makeData;
ConfigManager.makeData = function() {
	var config = $.ConfigManager_makeData.apply(this, arguments);
	config.language = this.language;
	return config;
};

$.ConfigManager_applyData = ConfigManager.applyData;
ConfigManager.applyData = function(config) {
	$.ConfigManager_applyData.apply(this, arguments);
	this.language = this.readLanguage(config, 'language');
};

ConfigManager.readLanguage = function(config, name) {
	var value = config[name];
	if (value !== undefined) {
		return parseInt(value).clamp(0, $.languages.length);
	} else {
		return $.defaultLang || 0;
	}
};

////===========================================================================
//// Window_Options
////
//// Edits made for the language option within the Options scene.
////===========================================================================

if($.allowOption) {

$.Window_Options_addGeneralOptions = Window_Options.prototype.addGeneralOptions;
Window_Options.prototype.addGeneralOptions = function() {
	$.Window_Options_addGeneralOptions.apply(this, arguments);
	this.addCommand($.optionName, 'language');
};

$.Window_Options_statusText = Window_Options.prototype.statusText;
Window_Options.prototype.statusText = function(index) {
	var symbol = this.commandSymbol(index);
	var value = this.getConfigValue(symbol);
	if(symbol === 'language') {
		return this.languageStatusText(value);
	}
	return $.Window_Options_statusText.apply(this, arguments);
};

Window_Options.prototype.languageStatusText = function(value) {
	return value === 0 ? 'English' : $.languages[value - 1];
};

Window_Options.prototype.incrementLanguage = function(value, symbol) {
	value += 1;
	if(value > $.languages.length) {
		value = 0;
	}
	this.changeValue(symbol, value);
	this.refresh();
};

Window_Options.prototype.decrementLanguage = function(value, symbol) {
	value -= 1;
	if(value < 0) {
		value = $.languages.length;
	}
	this.changeValue(symbol, value);
	this.refresh();
};

$.Window_Options_processOk = Window_Options.prototype.processOk;
Window_Options.prototype.processOk = function() {
	var index = this.index();
	var symbol = this.commandSymbol(index);
	var value = this.getConfigValue(symbol);
	if(symbol === 'language') {
		return this.incrementLanguage(value, symbol);
	}
	$.Window_Options_processOk.apply(this, arguments);
};

$.Window_Options_cursorRight = Window_Options.prototype.cursorRight;
Window_Options.prototype.cursorRight = function(wrap) {
	var index = this.index();
	var symbol = this.commandSymbol(index);
	var value = this.getConfigValue(symbol);
	if(symbol === 'language') {
		return this.incrementLanguage(value, symbol);
	}
	$.Window_Options_cursorRight.apply(this, arguments);
};

$.Window_Options_cursorLeft = Window_Options.prototype.cursorLeft;
Window_Options.prototype.cursorLeft = function(wrap) {
	var index = this.index();
	var symbol = this.commandSymbol(index);
	var value = this.getConfigValue(symbol);
	if(symbol === 'language') {
		return this.decrementLanguage(value, symbol);
	}
	$.Window_Options_cursorLeft.apply(this, arguments);
};

}

////===========================================================================
//// ImageManager
////
//// Allows for dynamic image loading based upon translation.
////===========================================================================

$.ImageManager_loadBitmap = ImageManager.loadBitmap;
ImageManager.loadBitmap = function(folder, filename, hue, smooth) {
	if(!ConfigManager.isDefaultLanguage() && filename.match(/_\[Original\]$/)) {
		var lang = ConfigManager.getLanguage();
		var name = filename.slice(0, -11) + '_[' + lang + ']';
		try {
			return $.ImageManager_loadBitmap.call(this, folder, name, hue, smooth);
		} catch(e) {
			return $.ImageManager_loadBitmap.apply(this, arguments);
		}
	}
	return $.ImageManager_loadBitmap.apply(this, arguments);
};

////===========================================================================
//// Window_Command
////
//// A small field is appended in order to identify Window_Command children.
//// The "addCommand" function is manipulated in order to apply translations.
////===========================================================================

Window_Command._id = '49202934';

$.Window_Command_initialize = Window_Command.prototype.initialize;
Window_Command.prototype.initialize = function(x, y) {
	$.Window_Command_initialize.apply(this, arguments);
	this[Window_Command._id] = true; //Special code used to identify the window as a child of Window_Command.
};

$.Window_Command_addCommand = Window_Command.prototype.addCommand;
Window_Command.prototype.addCommand = function(name, symbol, enabled, ext) {
	if(ConfigManager.isDefaultLanguage()) {
		$.Window_Command_addCommand.apply(this, arguments);
		return;
	}
	var lang = ConfigManager.getLanguage();
	console.log("::: " , lang);
	if($dataTranslations['cmd'] && $dataTranslations['cmd'][name] && $dataTranslations['cmd'][name][lang]) {
		name = $dataTranslations['cmd'][name][lang];
	}
	$.Window_Command_addCommand.call(this, name, symbol, enabled, ext);
};

Window_Command.prototype.currentName = function() {
	return this.currentData() ? this.currentData().name : null;
};

////===========================================================================
//// Window_Message/Window_ScrollText
////
//// Changed to allow developers to disallow updating while translating.
////===========================================================================

if(!$.allowMessageUpdate) {

	$.Window_Message_update = Window_Message.prototype.update;
	Window_Message.prototype.update = function() {
		if(TB.focused) return;
		$.Window_Message_update.apply(this, arguments);
	};

	$.Window_ScrollText_update = Window_ScrollText.prototype.update;
	Window_ScrollText.prototype.update = function() {
		if(TB.focused) return;
		$.Window_ScrollText_update.apply(this, arguments);
	};

}

////===========================================================================
//// Window_ChoiceList
////
//// Updates placement for better transition when closing Translation App.
////===========================================================================

$.Window_ChoiceList_refresh = Window_ChoiceList.prototype.refresh;
Window_ChoiceList.prototype.refresh = function() {
	this.updatePlacement();
	$.Window_ChoiceList_refresh.apply(this, arguments);
	this.updateCursor();
};

////===========================================================================
//// Game_Actor
////
//// Changes made to decrease confusion about Database translation.
////===========================================================================

$.Game_Actor_name = Game_Actor.prototype.name;
Game_Actor.prototype.name = function() {
	if(!this._nameChanged) {
		return this.actor().name;
	} else {
		return $.Game_Actor_name.apply(this, arguments);
	}
};

$.Game_Actor_setName = Game_Actor.prototype.setName;
Game_Actor.prototype.setName = function(name) {
	$.Game_Actor_setName.apply(this, arguments);
	this._nameChanged = true;
};

$.Game_Actor_nickname = Game_Actor.prototype.nickname;
Game_Actor.prototype.nickname = function() {
	if(!this._nicknameChanged) {
		return this.actor().nickname;
	} else {
		return $.Game_Actor_nickname.apply(this, arguments);
	}
};

$.Game_Actor_setNickname = Game_Actor.prototype.setNickname;
Game_Actor.prototype.setNickname = function(nickname) {
	$.Game_Actor_setNickname.apply(this, arguments);
	this._nicknameChanged = true;
};

$.Game_Actor_profile = Game_Actor.prototype.profile;
Game_Actor.prototype.profile = function() {
	if(!this._profileChanged) {
		return this.actor().profile;
	} else {
		return $.Game_Actor_profile.apply(this, arguments);
	}
};

$.Game_Actor_setProfile = Game_Actor.prototype.setProfile;
Game_Actor.prototype.setProfile = function(profile) {
	$.Game_Actor_setProfile.apply(this, arguments);
	this._profileChanged = true;
};

//=============================================================================
//
// ▼ End of Plugin
//
//=============================================================================

})(SRD.TranslationEngine, TranslationBuilder, TranslationManager);