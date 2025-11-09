/*:
 * @plugindesc Upgrades and adds various features to the existing window system within one's game.
 * @author SumRndmDde
 *
 * @param Info Windows
 * @type Struct<InfoWindows>[]
 * @desc The data for the information windows that may be opened in game.
 * @default []
 *
 * @param Mutliple Layers
 * @type boolean
 * @desc Determines whether windows are stacked on top of each other within scenes as opposed to overwritting each other.
 * @default false
 *
 * @param Window Defaults
 * @type Struct<WindowDefaults>
 * @desc Allows users to customize the default properties of windows.
 * @default {"Standard Font Size":"28","Standard Padding":"18","Text Padding":"6","Standard Back Opacity":"192","Translucent Opacity":"160","Opening Speed":"32","Closing Speed":"32"}
 *
 * @param Stretch Options
 * @type Struct<StretchOptions>
 * @desc Allows users to customize which parts of the windows will be stretched or repeated.
 * @default {"Background":"true","Foreground":"false","Frame":"false"}
 *
 * @param Tone Options
 * @type Struct<ToneOptions>
 * @desc Allows users to customize which parts of the windows will be affected by the tone.
 * @default {"Background":"true","Frame":"false","Cursor":"false"}
 *
 * @param Game Colors
 * @type Struct<GameColors>
 * @desc Allows users to customize the default game colors using HTML format if desired.
 * @default {"Normal Color":"","System Color":"","Crisis Color":"","Death Color":"","Gauge Back Color":"","HP Gauge Color 1":"","HP Gauge Color 2":"","MP Gauge Color 1":"","MP Gauge Color 2":"","MP Cost Color":"","Power Up Color":"","Power Down Color":"","TP Gauge Color 1":"","TP Gauge Color 2":"","TP Cost Color":""}
 *
 * @param Text Colors
 * @type Struct<TextColors>
 * @desc Allows users to customize the game's text colors using HTML format.
 * @default {"Allow Manual Colors":"true","Text Color 0":"#ffffff","Text Color 1":"#20a0d6","Text Color 2":"#ff784c","Text Color 3":"#66cc40","Text Color 4":"#99ccff","Text Color 5":"#ccc0ff","Text Color 6":"#ffffa0","Text Color 7":"#808080","Text Color 8":"#c0c0c0","Text Color 9":"#2080cc","Text Color 10":"#ff3810","Text Color 11":"#00a010","Text Color 12":"#3e9ade","Text Color 13":"#a098ff","Text Color 14":"#ffcc20","Text Color 15":"#000000","Text Color 16":"#84aaff","Text Color 17":"#ffff40","Text Color 18":"#ff2020","Text Color 19":"#202040","Text Color 20":"#e08040","Text Color 21":"#f0c040","Text Color 22":"#4080c0","Text Color 23":"#40c0f0","Text Color 24":"#80ff80","Text Color 25":"#c08080","Text Color 26":"#8080ff","Text Color 27":"#ff80ff","Text Color 28":"#00a040","Text Color 29":"#00e060","Text Color 30":"#a060e0","Text Color 31":"#c080ff","Text Color 32":"","Text Color 33":"","Text Color 34":"","Text Color 35":"","Text Color 36":"","Text Color 37":"","Text Color 38":"","Text Color 39":"","Text Color 40":"","Text Color 41":"","Text Color 42":"","Text Color 43":"","Text Color 44":"","Text Color 45":"","Text Color 46":"","Text Color 47":"","Text Color 48":"","Text Color 49":"","Text Color 50":""}
 *
 * @help
 *
 * Window Upgrade
 * Version 1.00
 * SumRndmDde
 *
 *
 * This plugin requires the Game Upgrade plugin:
 * http://sumrndm.site/game-upgrade/
 *
 * Upgrades and adds various features to the existing window system within 
 * one's game. This plugin provides additions to the window classes such as
 * open/close callbacks, better stretch control, etc.
 *
 *
 * ==============================================================================
 *  Information Window
 * ==============================================================================
 *
 * Information windows are windows that protray a large amount of information
 * to the player all at once. These require a bit more set up than Question
 * Windows, but have even greater power when it comes to giving information.
 *
 * To start, one must go to the "Info Windows" parameter to setup an Info
 * Window. An Info Window requires Text, Width, Line Height, and a Default
 * Font Size. Once these four things have been setup, one may display
 * that specific Info Window by using the ID listed next to it in the 
 * Plugin Manager's list.
 *
 *
 *   CreateInfoWindow [windowId]
 *
 * In order to show the Info Window, use this plugin command and place its
 * window ID next to it. That specific window with the specified information
 * will be shown.
 *
 *
 * When customizing the text of the window, one may use text codes. Furthermore,
 * one may also use a "<hr>" tag to generate a horizontal line.
 *
 *
 * ==============================================================================
 *  Choice Window Creation
 * ==============================================================================
 *
 * The plugin provides an alternative choice window with more options including
 * row, column, and alignment control, along with the capability to add an 
 * indefinite number of choices.
 *
 * In order to set this up, simply use the plugin command:
 *
 *   CreateChoiceWindow [variableId] [choice1, choice2, choice3, ...]
 *
 *
 * This will create a choice window with the defined choices and have the result
 * be placed within a variable defined by the "variableId". If the first choice
 * is chosen, 0 will be placed into that variable. Choice2 will input a value
 * of 1, choice 3 will be 2, etc.
 *
 *
 * ==============================================================================
 *  Choice Window Setup Data
 * ==============================================================================
 *
 * In order to customize the columns, rows, and alignment for the Choice
 * window, the following plugin command must also be used before creation:
 *
 *   SetChoiceWindowData [cols] [rows] [align]
 *
 * This will set the columns, rows, and alignment respectively.
 *
 * For example:
 *
 *   SetChoiceWindowData 1 4 right
 *
 *
 * If you wish to reset the data, you can use the plugin command:
 *
 *   ResetChoiceWindowData
 *
 *
 * ==============================================================================
 *  Question Window Setup Choices
 * ==============================================================================
 *
 * Questions windows are windows that contain both information and the ability
 * to select a choice within itself. These are more stylized than normal
 * choice windows, providing a better alternative for developers in specific
 * situations.
 *
 *
 *   SetQuestionWindowChoices [choice1, choice2, choice3, ...]
 *
 * To start, once must call this plugin command to set up the names of the
 * choices that will be shown on the question window. For example, if someone
 * wanted to create a "yes"/"no" question, they could do:
 *
 *   SetQuestionWindowChoices Yes, No
 *
 *
 * ==============================================================================
 *  Question Window Setup Data
 * ==============================================================================
 *
 * In order to customize the columns, rows, and alignment for the Question
 * window, the following plugin command must also be used before creation:
 *
 *   SetQuestionWindowData [cols] [rows] [align]
 *
 * This will set the columns, rows, and alignment respectively.
 *
 * For example:
 *
 *   SetQuestionWindowData 2 2 left
 *
 *
 * If you wish to reset the data, you can use the plugin command:
 *
 *   ResetQuestionWindowData
 *
 *
 * ==============================================================================
 *  Question Window Creation
 * ==============================================================================
 *
 * Once the choices are set up, one may call upon the Question window using
 * this plugin command:
 *
 *   CreateQuestionWindow [variableId] [message]
 *
 *
 * Once the choices are set up, this plugin command creates the question
 * window itself. The first input, "variableId", should be a number representing
 * the ID of the variable the result will be stored in. The result will be
 * a number value, starting from 0, representing which choice was selected.
 *
 * Here's an example:
 *
 *    CreateQuestionWindow 3 Do you like cake?
 *
 * This will create a Question Window that asks, "Do you like Cake?" and stores
 * the result in variable ID 3. Since we set up 2 choices from before, "Yes" 
 * and "No", the variable will be set to 0 is Yes is chosen, and 1 if No is
 * chosen.
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

/*~struct~WindowDefaults:
 *
 * @param Standard Font Size
 * @type number
 * @min 1
 * @decimals 0
 * @desc Determines the default Standard Font Size for windows.
 * Default: 28
 * @default 28
 *
 * @param Standard Padding
 * @type number
 * @min 1
 * @decimals 0
 * @desc Determines the default Standard Padding for windows.
 * Default: 18
 * @default 18
 *
 * @param Text Padding
 * @type number
 * @min 1
 * @decimals 0
 * @desc Determines the default Standard Padding for windows.
 * Default: 6
 * @default 6
 *
 * @param Standard Back Opacity
 * @type number
 * @min 1
 * @decimals 0
 * @desc Determines the default Standard Back Opacity for windows.
 * Default: 192
 * @default 192
 *
 * @param Translucent Opacity
 * @type number
 * @min 1
 * @decimals 0
 * @desc Determines the default Translucent Opacity for windows.
 * Default: 160
 * @default 160
 *
 * @param Opening Speed
 * @type number
 * @min 1
 * @decimals 0
 * @desc Determines the default Opening Speed for windows.
 * Default: 32
 * @default 32
 *
 * @param Closing Speed
 * @type number
 * @min 1
 * @decimals 0
 * @desc Determines the default Opening Speed for windows.
 * Default: 32
 * @default 32
 *
 */

/*~struct~StretchOptions:
 *
 * @param Background
 * @type boolean
 * @on Stretch
 * @off Repeat
 * @desc Determines whether the window backgrounds will stretch or repeat.
 * @default true
 *
 * @param Foreground
 * @type boolean
 * @on Stretch
 * @off Repeat
 * @desc Determines whether the window foregrounds will stretch or repeat.
 * @default false
 *
 * @param Frame
 * @type boolean
 * @on Stretch
 * @off Repeat
 * @desc Determines whether the window frames will stretch or repeat.
 * @default false
 *
 */

/*~struct~InfoWindows:
 *
 * @param Text
 * @type note
 * @desc The text inside of the info window.
 * @default ""
 *
 * @param Width
 * @type number
 * @min 1
 * @decimals 0
 * @desc The width of the info window.
 * @default 600
 *
 * @param Line Height
 * @type number
 * @min 1
 * @decimals 0
 * @desc The line height of the info window.
 * @default 32
 *
 * @param Default Font Size
 * @type number
 * @min 1
 * @decimals 0
 * @desc The initial font size of the text in the info window.
 * @default 28
 *
 */

/*~struct~ToneOptions:
 *
 * @param Background
 * @type boolean
 * @on Tone
 * @off No Tone
 * @desc Determines whether the window backgrounds will be affected by the tone.
 * @default true
 *
 * @param Frame
 * @type boolean
 * @on Tone
 * @off No Tone
 * @desc Determines whether the window frames will be affected by the tone.
 * @default false
 *
 * @param Cursor
 * @type boolean
 * @on Tone
 * @off No Tone
 * @desc Determines whether the window cursor will be affected by the tone.
 * @default false
 *
 */

/*~struct~GameColors:
 *
 * @param Normal Color
 * @desc The HTML code for Normal Color.
 * Leave blank for default.
 * @default
 *
 * @param System Color
 * @desc The HTML code for System Color.
 * Leave blank for default.
 * @default
 *
 * @param Crisis Color
 * @desc The HTML code for Crisis Color.
 * Leave blank for default.
 * @default
 *
 * @param Death Color
 * @desc The HTML code for Death Color.
 * Leave blank for default.
 * @default
 *
 * @param Gauge Back Color
 * @desc The HTML code for Gauge Back Color.
 * Leave blank for default.
 * @default
 *
 * @param HP Gauge Color 1
 * @desc The HTML code for HP Gauge Color 1.
 * Leave blank for default.
 * @default
 *
 * @param HP Gauge Color 2
 * @desc The HTML code for HP Gauge Color 2.
 * Leave blank for default.
 * @default
 *
 * @param MP Gauge Color 1
 * @desc The HTML code for MP Gauge Color 1.
 * Leave blank for default.
 * @default
 *
 * @param MP Gauge Color 2
 * @desc The HTML code for MP Gauge Color 2.
 * Leave blank for default.
 * @default
 *
 * @param MP Cost Color
 * @desc The HTML code for MP Cost Color.
 * Leave blank for default.
 * @default
 *
 * @param Power Up Color
 * @desc The HTML code for Power Up Color.
 * Leave blank for default.
 * @default
 *
 * @param Power Down Color
 * @desc The HTML code for Power Down Color.
 * Leave blank for default.
 * @default
 *
 * @param TP Gauge Color 1
 * @desc The HTML code for TP Gauge Color 1.
 * Leave blank for default.
 * @default
 *
 * @param TP Gauge Color 2
 * @desc The HTML code for TP Gauge Color 2.
 * Leave blank for default.
 * @default
 *
 * @param TP Cost Color
 * @desc The HTML code for MP Cost Color.
 * Leave blank for default.
 * @default
 *
 */

/*~struct~TextColors:
 *
 * @param Allow Manual Colors
 * @type boolean
 * @desc If turned OFF, the manual color system will be disabled and reverted to its Window.png reliance.
 * @default true
 *
 * @param Text Color 0
 * @desc Color of Text Color ID 0.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default #ffffff
 *
 * @param Text Color 1
 * @desc Color of Text Color ID 1.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default #20a0d6
 *
 * @param Text Color 2
 * @desc Color of Text Color ID 2.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default #ff784c
 *
 * @param Text Color 3
 * @desc Color of Text Color ID 3.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default #66cc40
 *
 * @param Text Color 4
 * @desc Color of Text Color ID 4.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default #99ccff
 *
 * @param Text Color 5
 * @desc Color of Text Color ID 5.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default #ccc0ff
 *
 * @param Text Color 6
 * @desc Color of Text Color ID 6.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default #ffffa0
 *
 * @param Text Color 7
 * @desc Color of Text Color ID 7.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default #808080
 *
 * @param Text Color 8
 * @desc Color of Text Color ID 8.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default #c0c0c0
 *
 * @param Text Color 9
 * @desc Color of Text Color ID 9.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default #2080cc
 *
 * @param Text Color 10
 * @desc Color of Text Color ID 10.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default #ff3810
 *
 * @param Text Color 11
 * @desc Color of Text Color ID 11.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default #00a010
 *
 * @param Text Color 12
 * @desc Color of Text Color ID 12.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default #3e9ade
 *
 * @param Text Color 13
 * @desc Color of Text Color ID 13.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default #a098ff
 *
 * @param Text Color 14
 * @desc Color of Text Color ID 14.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default #ffcc20
 *
 * @param Text Color 15
 * @desc Color of Text Color ID 15.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default #000000
 *
 * @param Text Color 16
 * @desc Color of Text Color ID 16.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default #84aaff
 *
 * @param Text Color 17
 * @desc Color of Text Color ID 17.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default #ffff40
 *
 * @param Text Color 18
 * @desc Color of Text Color ID 18.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default #ff2020
 *
 * @param Text Color 19
 * @desc Color of Text Color ID 19.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default #202040
 *
 * @param Text Color 20
 * @desc Color of Text Color ID 20.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default #e08040
 *
 * @param Text Color 21
 * @desc Color of Text Color ID 21.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default #f0c040
 *
 * @param Text Color 22
 * @desc Color of Text Color ID 22.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default #4080c0
 *
 * @param Text Color 23
 * @desc Color of Text Color ID 23.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default #40c0f0
 *
 * @param Text Color 24
 * @desc Color of Text Color ID 24.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default #80ff80
 *
 * @param Text Color 25
 * @desc Color of Text Color ID 25.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default #c08080
 *
 * @param Text Color 26
 * @desc Color of Text Color ID 26.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default #8080ff
 *
 * @param Text Color 27
 * @desc Color of Text Color ID 27.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default #ff80ff
 *
 * @param Text Color 28
 * @desc Color of Text Color ID 28.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default #00a040
 *
 * @param Text Color 29
 * @desc Color of Text Color ID 29.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default #00e060
 *
 * @param Text Color 30
 * @desc Color of Text Color ID 30.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default #a060e0
 *
 * @param Text Color 31
 * @desc Color of Text Color ID 31.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default #c080ff
 *
 * @param Text Color 32
 * @desc Color of Text Color ID 32.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default
 *
 * @param Text Color 33
 * @desc Color of Text Color ID 33.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default
 *
 * @param Text Color 34
 * @desc Color of Text Color ID 34.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default
 *
 * @param Text Color 35
 * @desc Color of Text Color ID 35.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default
 *
 * @param Text Color 36
 * @desc Color of Text Color ID 36.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default
 *
 * @param Text Color 37
 * @desc Color of Text Color ID 37.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default
 *
 * @param Text Color 38
 * @desc Color of Text Color ID 38.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default
 *
 * @param Text Color 39
 * @desc Color of Text Color ID 39.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default
 *
 * @param Text Color 40
 * @desc Color of Text Color ID 40.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default
 *
 * @param Text Color 41
 * @desc Color of Text Color ID 41.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default
 *
 * @param Text Color 42
 * @desc Color of Text Color ID 42.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default
 *
 * @param Text Color 43
 * @desc Color of Text Color ID 43.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default
 *
 * @param Text Color 44
 * @desc Color of Text Color ID 44.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default
 *
 * @param Text Color 45
 * @desc Color of Text Color ID 45.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default
 *
 * @param Text Color 46
 * @desc Color of Text Color ID 46.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default
 *
 * @param Text Color 47
 * @desc Color of Text Color ID 47.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default
 *
 * @param Text Color 48
 * @desc Color of Text Color ID 48.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default
 *
 * @param Text Color 49
 * @desc Color of Text Color ID 49.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default
 *
 * @param Text Color 50
 * @desc Color of Text Color ID 50.
 * Can be JavaScript Color, Hex Code, or RGBA Code.
 * @default
 *
 */

var SRD = SRD || {};
SRD.WindowUpgrade = SRD.WindowUpgrade || {};

var Imported = Imported || {};
Imported["SumRndmDde Window Upgrade"] = 1.01;

function Window_InfoDisplay() {
	this.initialize.apply(this, arguments);
}

function Window_ChoiceBase() {
	this.initialize.apply(this, arguments);
}

function Window_ChoiceMessage() {
	this.initialize.apply(this, arguments);
}

(function(_) {

"use strict";

//-----------------------------------------------------------------------------
// SRD.Requirements
//-----------------------------------------------------------------------------

_.alertNeedGameUpgrade = function() {
	alert("The 'SRD_GameUpgrade' plugin is required for using the 'SRD_WindowUpgrade' plugin.");
	if(confirm("Do you want to open the download page to 'SRD_GameUpgrade'?")) {
		window.open('http://sumrndm.site/game-upgrade/');
	}
};

if(!Imported["SumRndmDde Game Upgrade"]) {
	_.alertNeedGameUpgrade();
	return;
}

//-----------------------------------------------------------------------------
// SRD.WindowUpgrade
//-----------------------------------------------------------------------------

_.params = SRD.parse(JSON.stringify(PluginManager.parameters('SRD_WindowUpgrade')), true);

//-----------------------------------------------------------------------------
// SRD.PluginCommands
//-----------------------------------------------------------------------------

SRD.PluginCommands['createinfowindow'] = function(args) {
	const id = parseInt(args[0]) - 1;
	const info = _.params['Info Windows'][id];
	if(!info) return;
	const scene = SceneManager.scene;
	const win = new Window_InfoDisplay(info['Text'], info['Width'], info['Line Height'], info['Default Font Size']);
	scene.addWindow(win);
	win.setCloseCallback(function() {
		scene.removeChild(win);
		this.setWaitMode('');
	}.bind(this));
	this.setWaitMode('indefinite');
};

SRD.PluginCommands['setchoicewindowdata'] = function(args) {
	if(!$gameSystem.wu_info.choiceWindowData) {
		$gameSystem.wu_info.choiceWindowData = {};
	}
	if(args[0]) {
		$gameSystem.wu_info.choiceWindowData.cols = parseInt(args[0]);
	}
	if(args[1]) {
		$gameSystem.wu_info.choiceWindowData.rows = parseInt(args[1]);
	}
	if(args[2]) {
		$gameSystem.wu_info.choiceWindowData.align = String(args[2]);
	}
};

SRD.PluginCommands['resetchoicewindowdata'] = function(args) {
	$gameSystem.wu_info.choiceWindowData = {};
};

SRD.PluginCommands['createchoicewindow'] = function(args) {
	if(!$gameSystem.wu_info.choiceWindowData) {
		$gameSystem.wu_info.choiceWindowData = {};
	}
	let argString = '';
	for(let i = 1; i < args.length; i++) {
		argString += args[i] + ' ';
	}
	const choices = argString.split(/\s*,\s*/);
	const varId = parseInt(args[0]);
	const callbacks = [];
	for(let i = 0; i < choices.length; i++) {
		callbacks.push(function() {
			$gameVariables.setValue(varId, i);
			win.close();
		}.bind(this));
	}
	const scene = SceneManager.scene;
	const win = new Window_ChoiceBase(
		choices, 
		callbacks, 
		$gameSystem.wu_info.choiceWindowData
	);
	scene.addWindow(win);
	win.setCloseCallback(function() {
		scene.removeChild(win);
		this.setWaitMode('');
	}.bind(this));
	this.setWaitMode('indefinite');
};

SRD.PluginCommands['setquestionwindowdata'] = function(args) {
	if(!$gameSystem.wu_info.questionWindowData) {
		$gameSystem.wu_info.questionWindowData = {};
	}
	if(args[0]) {
		$gameSystem.wu_info.questionWindowData.cols = parseInt(args[0]);
	}
	if(args[1]) {
		$gameSystem.wu_info.questionWindowData.rows = parseInt(args[1]);
	}
	if(args[2]) {
		$gameSystem.wu_info.questionWindowData.align = String(args[2]);
	}
};

SRD.PluginCommands['resetquestionwindowdata'] = function(args) {
	$gameSystem.wu_info.questionWindowData = {};
};

SRD.PluginCommands['setquestionwindowchoices'] = function(args) {
	let argString = '';
	for(let i = 0; i < args.length; i++) {
		argString += args[i] + ' ';
	}
	$gameSystem.wu_info.questionWindowChoices = argString.split(/\s*,\s*/);
};

SRD.PluginCommands['createquestionwindow'] = function(args) {
	if(!$gameSystem.wu_info.questionWindowChoices) {
		$gameSystem.wu_info.questionWindowChoices = ['Yes', 'No'];
	}
	if(!$gameSystem.wu_info.questionWindowData) {
		$gameSystem.wu_info.questionWindowData = {};
	}
	const varId = parseInt(args[0]);
	let message = '';
	for(let i = 1; i < args.length; i++) {
		message += args[i] + ' ';
	}
	message = JSON.parse("\"" + message + "\"");
	let callbacks = [];
	for(let i = 0; i < $gameSystem.wu_info.questionWindowChoices.length; i++) {
		callbacks.push(function() {
			$gameVariables.setValue(varId, i);
			win.close();
		}.bind(this));
	}
	const scene = SceneManager.scene;
	const win = new Window_ChoiceMessage(
		message, 
		$gameSystem.wu_info.questionWindowChoices, 
		callbacks, 
		$gameSystem.wu_info.questionWindowData
	);
	scene.addWindow(win);
	win.setCloseCallback(function() {
		scene.removeChild(win);
		this.setWaitMode('');
	}.bind(this));
	this.setWaitMode('indefinite');
};

//-----------------------------------------------------------------------------
// Window
//-----------------------------------------------------------------------------

Window.prototype.setTone = function(r, g, b) {
	const tone = this._colorTone;
	if (r !== tone[0] || g !== tone[1] || b !== tone[2]) {
		this._colorTone = [r, g, b];
		this._refreshColorFilter();
	}
};

_.Window__createAllParts = Window.prototype._createAllParts;
Window.prototype._createAllParts = function() {
	_.Window__createAllParts.apply(this, arguments);
	this._createColorFilter();
};

Window.prototype._createColorFilter = function() {
	this._colorFilter = new ToneFilter();
	if(_.params['Tone Options'].Background) {
		this._windowBackSprite.filters = [this._colorFilter];
	}
	if(_.params['Tone Options'].Frame) {
		this._windowFrameSprite.filters = [this._colorFilter];
	}
	if(_.params['Tone Options'].Cursor) {
		this._windowCursorSprite.filters = [this._colorFilter];
	}
	this._refreshColorFilter();
};

Window.prototype._refreshColorFilter = function() {
	this._colorFilter.hue(0);
	this._colorFilter.adjustTone(this._colorTone[0], this._colorTone[1], this._colorTone[2]);
};

Window.prototype._refreshBack = function() {
	var m = this._margin;
	var w = this._width - m * 2;
	var h = this._height - m * 2;
	var bitmap = new Bitmap(w, h);

	this._windowBackSprite.bitmap = bitmap;
	this._windowBackSprite.setFrame(0, 0, w, h);
	this._windowBackSprite.move(m, m);

	if (w > 0 && h > 0 && this._windowskin) {
		var p = 96;
		if(_.params['Stretch Options'].Background) {
			bitmap.blt(this._windowskin, 0, 0, p, p, 0, 0, w, h);
		} else {
			for (var y = 0; y < h; y += p) {
				for (var x = 0; x < w; x += p) {
					bitmap.blt(this._windowskin, 0, 0, p, p, x, y, p, p);
				}
			}
		}
		if(_.params['Stretch Options'].Foreground) {
			bitmap.blt(this._windowskin, 0, p, p, p, 0, 0, w, h);
		} else {
			for (var y = 0; y < h; y += p) {
				for (var x = 0; x < w; x += p) {
					bitmap.blt(this._windowskin, 0, p, p, p, x, y, p, p);
				}
			}
		}
	}
};

if(!_.params['Stretch Options'].Frame) {

Window.prototype._refreshFrame = function() {
	var w = this._width;
	var h = this._height;
	var m = 24;
	var bitmap = new Bitmap(w, h);

	this._windowFrameSprite.bitmap = bitmap;
	this._windowFrameSprite.setFrame(0, 0, w, h);

	if (w > 0 && h > 0 && this._windowskin) {
		var skin = this._windowskin;
		var p = 96;
		var q = 96;
		var oWid = p-m*2;
		var nWid = w-m*2;
		var oHei = p-m*2;
		var nHei = h-m*2;
		var hRep = Math.floor(nWid / oWid);
		var vRep = Math.floor(nHei / oHei);
		var hRem = nWid % oWid;
		var vRem = nHei % oHei;

		for(var i = 0; i < hRep; i++) {
			bitmap.blt(skin, p+m, 0, oWid, m, m + (i*oWid), 0, oWid, m);
		}
		bitmap.blt(skin, p+m, 0, hRem, m, m + (oWid*hRep), 0, hRem, m);

		for(var i = 0; i < hRep; i++) {
			bitmap.blt(skin, p+m, q-m, oWid, m, m + (i*oWid), h-m, oWid, m);
		}
		bitmap.blt(skin, p+m, q-m, hRem, m, m + (oWid*hRep), h-m, hRem, m);

		for(var i = 0; i < vRep; i++) {
			bitmap.blt(skin, p, m, m, oHei, 0, m + (i*oHei), m, oHei);
		}
		bitmap.blt(skin, p, m, m, vRem, 0, m + (vRep*oHei), m, vRem);

		for(var i = 0; i < vRep; i++) {
			bitmap.blt(skin, p+q-m, m, m, oHei, w-m, m + (i*oHei), m, oHei);
		}
		bitmap.blt(skin, p+q-m, m, m, vRem, w-m, m + (vRep*oHei), m, vRem);

		bitmap.blt(skin, p+0, 0+0, m, m, 0, 0, m, m);
		bitmap.blt(skin, p+q-m, 0+0, m, m, w-m, 0, m, m);
		bitmap.blt(skin, p+0, 0+q-m, m, m, 0, h-m, m, m);
		bitmap.blt(skin, p+q-m, 0+q-m, m, m, w-m, h-m, m, m);
	}
};

}

//-----------------------------------------------------------------------------
// WindowLayer
//-----------------------------------------------------------------------------

if(_.params['Mutliple Layers']) {

WindowLayer.prototype = Object.create(PIXI.Container.prototype);

WindowLayer.prototype.initialize = function() {
	PIXI.Container.call(this);
	this._width = 0;
	this._height = 0;
	this.on('removed', this.onRemoveAsAChild);
};

WindowLayer.prototype.onRemoveAsAChild = function() {
	this.removeChildren();
};

WindowLayer.prototype.move = function(x, y, width, height) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
};

WindowLayer.prototype.update = function() {
	this.children.forEach(function(child) {
		if (child.update) {
			child.update();
		}
	});
};

}

//-----------------------------------------------------------------------------
// Game_System
//-----------------------------------------------------------------------------

_.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
    _.Game_System_initialize.apply(this, arguments);
    this.wu_info = {};
};

//-----------------------------------------------------------------------------
// Window_Base
//-----------------------------------------------------------------------------

Window_Base.prototype.standardFontSize = function() {
	return _.params['Window Defaults']['Standard Font Size'];
};

Window_Base.prototype.standardPadding = function() {
	return _.params['Window Defaults']['Standard Padding'];
};

Window_Base.prototype.textPadding = function() {
	return _.params['Window Defaults']['Text Padding'];
};

Window_Base.prototype.standardBackOpacity = function() {
	return _.params['Window Defaults']['Standard Back Opacity'];
};

Window_Base.prototype.translucentOpacity = function() {
	return _.params['Window Defaults']['Translucent Opacity'];
};

Window_Base.prototype.setOpenCallback = function(callback) {
	this._openCallback = callback;
};

Window_Base.prototype.setCloseCallback = function(callback) {
	this._closeCallback = callback;
};

Window_Base.prototype.updateOpen = function() {
	if (this._opening) {
		this.openness += _.params['Window Defaults']['Opening Speed'];
		if (this.isOpen()) {
			this._opening = false;
			if(this._openCallback) {
				this._openCallback();
			}
		}
	}
};

Window_Base.prototype.updateClose = function() {
	if (this._closing) {
		this.openness -= _.params['Window Defaults']['Closing Speed'];
		if (this.isClosed()) {
			this._closing = false;
			if(this._closeCallback) {
				this._closeCallback();
			}
		}
	}
};

if(_.params['Text Colors']['Allow Manual Colors']) {

Window_Base.prototype.textColor = function(n) {
	if(_.params['Text Colors']['Text Color ' + n]) {
		return _.params['Text Colors']['Text Color ' + n];
	}
	return '#000000';
};

}

if(_.params['Game Colors']['Normal Color']) {

Window_Base.prototype.normalColor = function() {
	return _.params['Game Colors']['Normal Color'];
};

}

if(_.params['Game Colors']['System Color']) {

Window_Base.prototype.systemColor = function() {
	return _.params['Game Colors']['System Color'];
};

}

if(_.params['Game Colors']['Crisis Color']) {

Window_Base.prototype.crisisColor = function() {
	return _.params['Game Colors']['Crisis Color'];
};

}

if(_.params['Game Colors']['Death Color']) {

Window_Base.prototype.deathColor = function() {
	return _.params['Game Colors']['Death Color'];
};

}

if(_.params['Game Colors']['Gauge Back Color']) {

Window_Base.prototype.gaugeBackColor = function() {
	return _.params['Game Colors']['Gauge Back Color'];
};

}

if(_.params['Game Colors']['HP Gauge Color 1']) {

Window_Base.prototype.hpGaugeColor1 = function() {
	return _.params['Game Colors']['HP Gauge Color 1'];
};

}

if(_.params['Game Colors']['HP Gauge Color 2']) {

Window_Base.prototype.hpGaugeColor2 = function() {
	return _.params['Game Colors']['HP Gauge Color 2'];
};

}

if(_.params['Game Colors']['MP Gauge Color 1']) {

Window_Base.prototype.mpGaugeColor1 = function() {
	return _.params['Game Colors']['MP Gauge Color 1'];
};

}

if(_.params['Game Colors']['MP Gauge Color 2']) {

Window_Base.prototype.mpGaugeColor2 = function() {
	return _.params['Game Colors']['MP Gauge Color 2'];
};

}

if(_.params['Game Colors']['MP Cost Color']) {

Window_Base.prototype.mpCostColor = function() {
	return _.params['Game Colors']['MP Cost Color'];
};

}

if(_.params['Game Colors']['Power Up Color']) {

Window_Base.prototype.powerUpColor = function() {
	return _.params['Game Colors']['Power Up Color'];
};

}

if(_.params['Game Colors']['Power Down Color']) {

Window_Base.prototype.powerDownColor = function() {
	return _.params['Game Colors']['Power Down Color'];
};

}

if(_.params['Game Colors']['TP Gauge Color 1']) {

Window_Base.prototype.tpGaugeColor1 = function() {
	return _.params['Game Colors']['TP Gauge Color 1'];
};

}

if(_.params['Game Colors']['TP Gauge Color 2']) {

Window_Base.prototype.tpGaugeColor2 = function() {
	return _.params['Game Colors']['TP Gauge Color 2'];
};

}

if(_.params['Game Colors']['TP Cost Color']) {

Window_Base.prototype.tpCostColor = function() {
	return _.params['Game Colors']['TP Cost Color'];
};

}

//-----------------------------------------------------------------------------
// Window_InfoDisplay
//-----------------------------------------------------------------------------

Window_InfoDisplay.prototype = Object.create(Window_Base.prototype);
Window_InfoDisplay.prototype.constructor = Window_InfoDisplay;

Window_InfoDisplay.prototype.initialize = function(info, width, lineHeight, fontSize) {
	this._lines = info.split(/(?:\r\n|\r|\n)/);
	this._lineHeight = lineHeight || 32;
	this._fontSize = fontSize || 28;
	const height = this.createHeight(this._lines);
	this._borderPadding = 12;
	Window_Base.prototype.initialize.call(this, 0, 0, width, height + (this.standardPadding() * 2));
	this.x = (Graphics.boxWidth - this.width) / 2;
	this.y = (Graphics.boxHeight - this.height) / 2;
	this.openness = 0;
	this.refresh();
	this.open();
};

Window_InfoDisplay.prototype.createHeight = function(lines) {
	const lineHeight = this.lineHeight();
	let height = 0;
	for(let i = 0; i < lines.length; i++) {
		if(lines[i].match(/<hr>/)) {
			height += 12;
		} else {
			height += lineHeight;
		}
	}
	return height;
};

Window_InfoDisplay.prototype.standardFontSize = function() {
	return this._fontSize;
};

Window_InfoDisplay.prototype.lineHeight = function() {
	return this._lineHeight;
};

Window_InfoDisplay.prototype.update = function() {
	Window_Base.prototype.update.apply(this, arguments);
	if(this.isOpen()) {
		this.updateInput();
	}
};

Window_InfoDisplay.prototype.updateInput = function() {
	if(Input.isPressed('ok')) {
		this.close();
	}
};

Window_InfoDisplay.prototype.refresh = function() {
	this.contents.clear();
	this.drawLines();
};

Window_InfoDisplay.prototype.drawLines = function() {
	const lines = this._lines;
	const lineHeight = this.lineHeight();
	let yPosition = 0;
	for(let i = 0; i < lines.length; i++) {
		if(lines[i].match(/<hr>/)) {
			this.drawHorzLine(yPosition);
			yPosition += 12;
		} else {
			this.drawTextEx(lines[i], 0, yPosition);
			yPosition += lineHeight;
		}
	}
};

Window_InfoDisplay.prototype.drawHorzLine = function(y) {
	this.contents.fillRect(0, y + (Math.floor(this._borderPadding / 2) - 1), this.contentsWidth(), 2, 'rgba(255, 255, 255, 0.2)');
};

//-----------------------------------------------------------------------------
// Window_ChoiceBase
//-----------------------------------------------------------------------------

Window_ChoiceBase.prototype = Object.create(Window_Command.prototype);
Window_ChoiceBase.prototype.constructor = Window_ChoiceBase;

Window_ChoiceBase.prototype.initialize = function(choices, callbacks, data) {
	this._choices = choices;
	this._callbacks = callbacks;
	this.parseData(data);
	Window_Command.prototype.initialize.call(this, 0, 0);
	this.setupWidth(data ? data.width : null);
	this.x = (Graphics.boxWidth - this.width) / 2;
	this.y = (Graphics.boxHeight - this.height) / 2;
	this.openness = 0;
	this.open();
};

Window_ChoiceBase.prototype.setupWidth = function(width) {
	if(!width) {
		this._width = 0;
		for(let i = 0; i < this._choices.length; i++) {
			const textWidth = this.textWidth(this._choices[i]);
			if(this._width < textWidth) {
				this._width = textWidth * this._columns;
			}
		}
		this._width += (this.standardPadding() * 2) + 48 + (this._columns > 1 ? (this.standardFontSize() * this._columns * 2) : 0);
	} else {
		this._width = width;
	}
	this.width = this.windowWidth();
	this.refresh();
	this.select(0);
};

Window_ChoiceBase.prototype.parseData = function(data) {
	data = data || {};
	this._columns = data.cols || 1;
	this._rows = data.rows || this._choices.length;
	this._alignment = data.align || 'center';
};

Window_ChoiceBase.prototype.windowWidth = function() {
	return this._width || 1;
};

Window_ChoiceBase.prototype.maxItems = function() {
	return this._choices.length;
};

Window_ChoiceBase.prototype.maxCols = function() {
	return this._columns;
};

Window_ChoiceBase.prototype.numVisibleRows = function() {
	return this._rows;
};

Window_ChoiceBase.prototype.itemTextAlign = function() {
	return this._alignment;
};

Window_ChoiceBase.prototype.makeCommandList = function() {
	for(let i = 0; i < this._choices.length; i++) {
		this.addCommand(this._choices[i], String(i));
	}
};

Window_ChoiceBase.prototype.isHorizontal = function() {
	return this.maxCols() > 1;
};

Window_ChoiceBase.prototype.isHandled = function(symbol) {
	return !!this._callbacks[parseInt(symbol)];
};

Window_ChoiceBase.prototype.callHandler = function(symbol) {
	let index = parseInt(symbol);
	if(this._callbacks[index]) {
		this._callbacks[index]();
	}
};

//-----------------------------------------------------------------------------
// Window_ChoiceMessage
//-----------------------------------------------------------------------------

Window_ChoiceMessage.prototype = Object.create(Window_ChoiceBase.prototype);
Window_ChoiceMessage.prototype.constructor = Window_ChoiceMessage;

Window_ChoiceMessage.prototype.initialize = function(message, choices, callbacks, data) {
	this._lines = message.split(/(?:\r\n|\r|\n)/);
	this._borderPadding = 12;
	Window_ChoiceBase.prototype.initialize.call(this, choices, callbacks, data);
};

Window_ChoiceMessage.prototype.setupWidth = function(width) {
	if(!width) {
		this._width = 0;
		for(let i = 0; i < this._lines.length; i++) {
			const textWidth = this.textWidth(this._lines[i]);
			if(this._width < textWidth) {
				this._width = textWidth;
			}
		}
		this._width += (this.standardPadding() * 2);
	} else {
		this._width = width;
	}
	this.width = this.windowWidth();
	this.refresh();
	this.select(0);
};

Window_ChoiceMessage.prototype.parseData = function(data) {
	data = data || {};
	this._columns = data.cols || this._choices.length;
	this._rows = data.rows || 1;
	this._alignment = data.align || 'center';
};

Window_ChoiceMessage.prototype.windowHeight = function() {
	return this.fittingHeight(this._lines.length + this.numVisibleRows()) + this._borderPadding;
};

Window_ChoiceMessage.prototype.itemRect = function(index) {
	const rect = Window_Selectable.prototype.itemRect.apply(this, arguments);
	rect.y += (this.lineHeight() * this._lines.length) + this._borderPadding;
	return rect;
};

Window_ChoiceMessage.prototype.drawAllItems = function() {
	Window_ChoiceBase.prototype.drawAllItems.apply(this, arguments);
	for(let i = 0; i < this._lines.length; i++) {
		this.drawTextEx(this._lines[i], 0, this.lineHeight() * i);
	}
	this.contents.fillRect(0, (this.lineHeight() * (this._lines.length)) + (Math.floor(this._borderPadding / 2) - 1), 
		this.contentsWidth(), 2, 'rgba(255, 255, 255, 0.2)');
};

})(SRD.WindowUpgrade);