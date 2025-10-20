/*:
 * @plugindesc Allows customization over the Title Command Window.
 * Can customize size, position, rows, columns, and commands.
 * @author SumRndmDde
 *
 * @param Command Data
 * @type struct<Command>[]
 * @desc This is all the data used to generate the base command for the title command window.
 * @default ["{\"Text\":\"EVAL: \\\"\\\\\\\\i[73] \\\" + TextManager.newGame\",\"Symbol\":\"newGame\",\"Action\":\"this.commandNewGame.bind(this)\",\"Enabled\":\"true\",\"Visible\":\"true\"}","{\"Text\":\"EVAL: this.isContinueEnabled() ? \\\"\\\\\\\\i[75] \\\" + TextManager.continue_ : \\\"\\\\\\\\i[74] No Saves\\\"\",\"Symbol\":\"continue\",\"Action\":\"this.commandContinue.bind(this)\",\"Enabled\":\"this.isContinueEnabled()\",\"Visible\":\"true\"}","{\"Text\":\"EVAL: \\\"\\\\\\\\i[83] \\\" + TextManager.options\",\"Symbol\":\"options\",\"Action\":\"this.commandOptions.bind(this)\",\"Enabled\":\"true\",\"Visible\":\"true\"}","{\"Text\":\"\\\\i[82] Shutdown\",\"Symbol\":\"shutdown\",\"Action\":\"window.close.bind(window)\",\"Enabled\":\"true\",\"Visible\":\"true\"}","{\"Text\":\"Common Event 1\",\"Symbol\":\"common-event-1\",\"Action\":\"this.playCommonEvent.bind(this, 1)\",\"Enabled\":\"false\",\"Visible\":\"false\"}"]
 *
 * @param Command Order
 * @type text[]
 * @desc The order of the commands on the Window.
 * List each one by its symbol and seperate with commas.
 * @default ["newGame","continue","options","shutdown"]
 *
 * @param Window Settings
 * @default ====================================
 *
 * @param Allow Text Codes
 * @type boolean
 * @desc If 'true', Text Codes can be used in the command text; however, the text alignment will be forced to the left.
 * @default true
 * @parent Window Settings
 *
 * @param Command Text Alignment
 * @type select
 * @option left
 * @option center
 * @option right
 * @desc The alignment of the command text.
 * @default left
 * @parent Window Settings
 *
 * @param Command Text Font
 * @desc The font used for the command text.
 * @default GameFont
 * @parent Window Settings
 *
 * @param Window Opacity
 * @type number
 * @min 0
 * @decimals 0
 * @desc The opacity of the Command Window.
 * @default 255
 * @parent Window Settings
 *
 * @param Window Padding
 * @type number
 * @min 0
 * @decimals 0
 * @desc The padding of the Command Window.
 * @default 18
 * @parent Window Settings
 *
 * @param Window Position/Size
 * @default ====================================
 *
 * @param Window X
 * @desc The X Position of the Title Command Window.
 * @default (Graphics.boxWidth - this.width) / 2
 * @parent Window Position/Size
 *
 * @param Window Y
 * @desc The Y Position of the Title Command Window.
 * @default Graphics.boxHeight - this.height - 96
 * @parent Window Position/Size
 *
 * @param Window Width
 * @desc The width of the Title Command Window.
 * @default 240 * this.maxCols()
 * @parent Window Position/Size
 *
 * @param Window Height
 * @desc The height of the Title Command Window.
 * @default this.fittingHeight(this.numVisibleRows())
 * @parent Window Position/Size
 *
 * @param Window Rows
 * @desc The number of rows of the Title Command Window.
 * @default 2
 * @parent Window Position/Size
 *
 * @param Window Columns
 * @desc The number of columns of the Title Command Window.
 * @default 2
 * @parent Window Position/Size
 *
 * @help
 *
 * Title Command Customizer
 * Version 1.11
 * SumRndmDde
 *
 *
 * This plugin requires the Game Upgrade plugin:
 * http://sumrndm.site/game-upgrade/
 *
 *
 * This Plugin allows customization over the Title Command Window!
 * You can customize the size, position, rows, columns, and commands!
 *
 * If you wish to customize the X, Y, Width, Height, Rows, Columns, or 
 * Text Alignment of the Command Window, simply use the first Parameters.
 *
 *
 * ==========================================================================
 *  How to Set up Command Order
 * ==========================================================================
 *
 * While this Plugin allows you to add more commands, it doesn't overwrite
 * commands added through other Plugins.
 *
 * If you wish to customize the order of the commands, including both commands
 * that you have created and commands added through other Plugins, you can
 * use the Command Order Parameter to list the order of the commands using
 * their symbols.
 *
 * For example:
 *
 *    newGame, continue, common-event-1, common-event-2, options, shutdown
 *
 *
 * ==========================================================================
 *  How to Create a Command
 * ==========================================================================
 *
 * You can now customize commands in the list provided in "Command Data".
 *
 * Each group of Parameters customize aspects of the command:
 *
 *
 * ==========================================================================
 *
 * Text:
 *
 *    The text shown on the command.
 *    You can use Message Codes if the Parameter is set to 'true'.
 *
 *    Furthermore, if a text starts with "EVAL:" then that text will be 
 *    treated as a JavaScript evaluation.
 *
 * ==========================================================================
 *
 * Symbol:
 *
 *    A string of text which is unique for each command and defines it.
 *
 * ==========================================================================
 *
 * Action:
 *
 *    A function to be binded to the command.
 *
 *    Examples:
 *
 *    this.commandNewGame.bind(this)     -  Starts New Game
 *    this.commandContinue.bind(this)    -  Brings up Loading Screen
 *    this.commandOptions.bind(this)     -  Brings up Options Window
 *    close.bind(window)                 -  Closes the Game Window
 *    this.playCommonEvent.bind(this, x) -  Plays Common Event ID x
 *
 * ==========================================================================
 *
 * Enabled:
 *
 *    A JavaScript eval that determines whether the command is enabled.
 *
 * ==========================================================================
 *
 * Visible:
 *
 *    A JavaScript eval that determines whether the command is visible.
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

/*~struct~Command:
 *
 * @param Text
 * @desc This is the text shown for the command.
 * If using a JavaScript eval, place EVAL: at the beginning.
 * @default
 *
 * @param Symbol
 * @desc This is the command's symbol.
 * @default
 *
 * @param Action
 * @desc This is the code that binds a function to the command.
 * Input a JavaScript eval that binds a function to 'this'.
 * @default
 *
 * @param Enabled
 * @desc This is a JavaScript eval that determines whether the command is enabled.
 * @default true
 *
 * @param Visible
 * @desc This is a JavaScript eval that determines whether the command is visible.
 * @default true
 *
 */

var SRD = SRD || {};
SRD.TitleCommandCustomizer = SRD.TitleCommandCustomizer || {};

var Imported = Imported || {};
Imported["SumRndmDde Title Command Customizer"] = 1.11;

(function(_) {

"use strict";

//-----------------------------------------------------------------------------
// SRD.Requirements
//-----------------------------------------------------------------------------

_.alertNeedGameUpgrade = function() {
	alert("The 'SRD_GameUpgrade' plugin is required for using the 'SRD_TitleCommandCustomizer' plugin.");
	if(confirm("Do you want to open the download page to 'SRD_GameUpgrade'?")) {
		window.open('http://sumrndm.site/game-upgrade/');
	}
};

if(!Imported["SumRndmDde Game Upgrade"]) {
	_.alertNeedGameUpgrade();
	return;
}

//-----------------------------------------------------------------------------
// SRD.TitleCommandCustomizer
//-----------------------------------------------------------------------------

var params = PluginManager.parameters('SRD_TitleCommandCustomizer');

_.data = SRD.parse(params['Command Data']);

_.order = String(params['Command Order']).split(/\s*,\s*/);
_.textCodes = String(params['Allow Text Codes']).trim().toLowerCase() === 'true';
_.alignment = String(params['Command Text Alignment']).trim().toLowerCase();
_.font = String(params['Command Text Font']);
_.opacity = parseInt(params['Window Opacity']);
_.padding = parseInt(params['Window Padding']);

_.x = String(params['Window X']);
_.y = String(params['Window Y']);
_.width = String(params['Window Width']);
_.height = String(params['Window Height']);
_.rows = String(params['Window Rows']);
_.cols = String(params['Window Columns']);

_.commands = [];
for(var i = 0; i < _.data.length; i++) {
	var data = _.data[i];
	var command = {};
	command.text = data['Text'] || '';
	command.symbol = data['Symbol'] || '';
	command.action = data['Action'] || '';
	command.enabled = data['Enabled'] || 'true';
	command.visible = data['Visible'] || 'true';
	_.commands.push(command);
}

//-----------------------------------------------------------------------------
// Scene_Title
//-----------------------------------------------------------------------------

_.Scene_Title_initialize = Scene_Title.prototype.initialize;
Scene_Title.prototype.initialize = function() {
	_.Scene_Title_initialize.call(this);
	this._TCCInterpreter = new Game_Interpreter();
	this._TCCCommonEvent = 0;
};

_.Scene_Title_create = Scene_Title.prototype.create;
Scene_Title.prototype.create = function() {
	_.Scene_Title_create.call(this);
	this.createMessageWindow();
	this.createScrollTextWindow();
};

Scene_Title.prototype.createMessageWindow = function() {
	this._messageWindow = new Window_Message();
	this.addWindow(this._messageWindow);
	this._messageWindow.subWindows().forEach(function(window) {
		this.addWindow(window);
	}, this);
};

Scene_Title.prototype.createScrollTextWindow = function() {
	this._scrollTextWindow = new Window_ScrollText();
	this.addWindow(this._scrollTextWindow);
};

Scene_Title.prototype.createCommandWindow = function() {
	this._commandWindow = new Window_TitleCommand();
	for(var i = 0; i < _.commands.length; i++) {
		if(_.commands[i].action.trim().length > 0) {
			var action;
			try {
				action = eval(_.commands[i].action);
			} catch(e) {
				action = this.activateCommandWindow.bind(this);
				console.error('SRD_TitleCommandCustomizer eval error: ' + e.message);
			}
			this._commandWindow.setHandler(_.commands[i].symbol, action);
		}
	}
	this.addWindow(this._commandWindow);
};

Scene_Title.prototype.activateCommandWindow = function() {
	this._commandWindow.activate();
};

Scene_Title.prototype.playCommonEvent = function(ceID) {
	this._TCCCommonEvent = ceID;
};

_.Scene_Title_update = Scene_Title.prototype.update;
Scene_Title.prototype.update = function() {
	_.Scene_Title_update.call(this);
	this.updateTCCInterpreter();
};

Scene_Title.prototype.updateTCCInterpreter = function() {
	if(this._TCCInterpreter && this._TCCCommonEvent !== 0) {
		if(!this._TCCInterpreter.isRunning()) {
			if(this._TCCCommonEvent > -1) {
				this._TCCInterpreter.setup($dataCommonEvents[this._TCCCommonEvent].list, this._eventId);
				this._TCCCommonEvent = -1;
			} else {
				this._TCCCommonEvent = 0;
				this.activateCommandWindow();
				return;
			}
		}
		this._TCCInterpreter.update();
	}
};

//-----------------------------------------------------------------------------
// Window_TitleCommand
//-----------------------------------------------------------------------------

Window_TitleCommand.prototype.standardFontFace = function() {
	return _.font;
};

Window_TitleCommand.prototype.standardPadding = function() {
	return _.padding;
};

Window_TitleCommand.prototype.windowWidth = function() {
	var result;
	try {
		result = eval(_.width);
	} catch(e) {
		result = 240 * this.maxCols();
		console.error('SRD_TitleCommandCustomizer eval error: ' + e.message);
	}
	return result;
};

Window_TitleCommand.prototype.windowHeight = function() {
	var result;
	try {
		result = eval(_.height);
	} catch(e) {
		result = this.fittingHeight(this.numVisibleRows());
		console.error('SRD_TitleCommandCustomizer eval error: ' + e.message);
	}
	return result;
};

Window_TitleCommand.prototype.updatePlacement = function() {
	var result;
	try {
		this.x = eval(_.x);
		this.y = eval(_.y);
	} catch(e) {
		this.x = (Graphics.boxWidth - this.width) / 2;
		this.y = Graphics.boxHeight - this.height - 96;
		console.error('SRD_TitleCommandCustomizer eval error: ' + e.message);
	}
	return result;
};

Window_TitleCommand.prototype.maxCols = function() {
	var result;
	try {
		result = eval(_.cols);
	} catch(e) {
		result = 2;
		console.error('SRD_TitleCommandCustomizer eval error: ' + e.message);
	}
	return result;
};

Window_TitleCommand.prototype.numVisibleRows = function() {
	var result;
	try {
		result = eval(_.rows);
	} catch(e) {
		result = 2;
		console.error('SRD_TitleCommandCustomizer eval error: ' + e.message);
	}
	return result;
};

_.Window_TitleCommand_initialize = Window_TitleCommand.prototype.initialize;
Window_TitleCommand.prototype.initialize = function() {
	this._addedSymbols = [];
	_.Window_TitleCommand_initialize.call(this);
	this.opacity = _.opacity;
	this.reorganizeTitleCommandList();
};

Window_TitleCommand.prototype.reorganizeTitleCommandList = function() {
	var temp = [];
	var temp2 = this._list.clone();
	for(var i = 0; i < _.order.length; i++) {
		var symbol = _.order[i];
		for(var j = 0; j < this._list.length; j++) {
			if(symbol === this._list[j].symbol) {
				temp.push(this._list[j]);
			}
		}
	}
	var force = true;
	for(var i = 0; i < temp2.length; i++) {
		for(var j = 0; j < temp.length; j++) {
			if(temp2[i].symbol === temp[j].symbol) {
				force = false;
			}
		}
		if(force) {
			temp.push(temp2[i]);
		}
		force = true;
	}
	this._list = temp.clone();
};

Window_TitleCommand.prototype.makeCommandList = function() {
	for(var i = 0; i < _.commands.length; i++) {
		var visible;
		try {
			visible = eval(_.commands[i].visible);
		} catch(e) {
			visible = true;
			console.error('SRD_TitleCommandCustomizer eval error: ' + e.message);
		}
		if(!!visible) {
			var text;
			if(_.commands[i].text.match(/EVAL:\s*(.*)/i)) {
				try {
					text = eval(RegExp.$1);
				} catch(e) {
					text = 'EVAL ERROR';
					console.error('SRD_TitleCommandCustomizer eval error: ' + e.message);
				}
			} else {
				text = _.commands[i].text;
			}
			this.addCommand(text, _.commands[i].symbol, eval(_.commands[i].enabled));
		}
	}
};

Window_TitleCommand.prototype.refresh = function() {
	if(!this.isIconSetLoaded()) return;
	this.clearCommandList();
	this.makeCommandList();
	this.reorganizeTitleCommandList();
	this.createContents();
	Window_Selectable.prototype.refresh.call(this);
};

Window_TitleCommand.prototype.isIconSetLoaded = function() {
	var iconSet = ImageManager.loadSystem('IconSet');
	if(!iconSet.isReady()) {
		iconSet.addLoadListener(this.refresh.bind(this));
		return false;
	}
	return true;
};

Window_TitleCommand.prototype.drawItem = function(index) {
	var rect = this.itemRectForText(index);
	var align = this.itemTextAlign();
	this.resetTextColor();
	this.changePaintOpacity(this.isCommandEnabled(index));
	if(_.textCodes) {
		this.drawTextEx(this.commandName(index), rect.x, rect.y);
	} else {
		this.drawText(this.commandName(index), rect.x, rect.y, rect.width, align);
	}
};

Window_TitleCommand.prototype.itemTextAlign = function() {
	return _.alignment;
};

})(SRD.TitleCommandCustomizer);