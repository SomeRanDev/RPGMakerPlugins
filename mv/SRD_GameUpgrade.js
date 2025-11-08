/*:
 * @plugindesc Enables more customization over the core mechanics of one's game while also providing additional functions for future plugins.
 * @author SumRndmDde
 *
 * @param Game Window
 * @default ====================================
 *
 * @param Game Reconstruction (1.5.X & below)
 * @type boolean
 * @desc If using MV 1.5.X or below, this is required for all "Game Window" parameters. For MV 1.6.0+, it does nothing.
 * @default true
 * @parent Game Window
 *
 * @param Game Resolution
 * @type Struct<GameSize>
 * @desc The resolution of the game.
 * @default {"Width":"816","Height":"624"}
 * @parent Game Window
 *
 * @param Screen Resolution
 * @type Struct<WindowSize>
 * @desc The resolution of the screen.
 * @default {"Width":"","Height":""}
 * @parent Game Window
 *
 * @param Minimum Resolution
 * @type Struct<MinSize>
 * @desc The minimum resolution the screen is allowed to be.
 * @default {"Width":"408","Height":"312"}
 * @parent Game Window
 *
 * @param Maximum Resolution
 * @type Struct<MaxSize>
 * @desc The maximum resolution the screen is allowed to be.
 * @default {"Width":"","Height":""}
 * @parent Game Window
 *
 * @param Window Title
 * @desc The title displayed on the game window.
 * Leave blank for default.
 * @default
 * @parent Game Window
 *
 * @param Allow Resize
 * @type boolean
 * @desc Determines whether the players are allowed to resize the game window.
 * @default true
 * @parent Game Window
 *
 * @param Initial Fullscreen
 * @type boolean
 * @desc Determines whether the game starts in fullscreen.
 * @default false
 * @parent Game Window
 *
 * @param Show Frame
 * @type boolean
 * @desc Determines whether the game window has a frame.
 * @default true
 * @parent Game Window
 *
 * @param Always on Top
 * @type boolean
 * @desc Determines whether the game window is always on top of all other windows in the PC.
 * @default false
 * @parent Game Window
 *
 * @param Core Defaults
 * @default ====================================
 *
 * @param Audio Master Volume
 * @type number
 * @min 0
 * @max 100
 * @decimals 0
 * @desc The master volume of the game's audio.
 * Default: 100
 * @default 100
 * @parent Core Defaults
 *
 * @param Video Master Volume
 * @type number
 * @min 0
 * @max 100
 * @decimals 0
 * @desc The master volume of the game's videos.
 * Default: 100
 * @default 100
 * @parent Core Defaults
 *
 * @param Image Cache Limit
 * @type number
 * @min 1
 * @decimals 0
 * @desc The amount of images that can be stored in memory at once. Default: 10
 * @default 30
 * @parent Core Defaults
 *
 * @param Decrypter Ignore List
 * @type file[]
 * @dir img/
 * @desc This is a list of all files that the Decrypter will ignore.
 * @default ["system/Window.png"]
 * @parent Core Defaults
 *
 * @param JsonEx Max Depth
 * @type number
 * @min 1
 * @decimals 0
 * @desc Determines the max depth that JSON will encode in the JsonEx class. Default: 100
 * @default 100
 * @parent Core Defaults
 *
 * @param Retry Intervals
 * @type number[]
 * @min 1
 * @decimals 0
 * @desc Determines the intervals in which the game retries to load resources.
 * @default ["500","1000","3000"]
 * @parent Core Defaults
 *
 * @param HTML Settings
 * @default ====================================
 *
 * @param Background Color
 * @type text
 * @desc The color of the game's background and edges.
 * Default: #000000
 * @default #000000
 * @parent HTML Settings
 *
 * @param Image Rendering
 * @type select
 * @option Automatic
 * @value auto
 * @option Crisp Edges
 * @value crisp-edges
 * @option Pixelated
 * @value pixelated
 * @desc The rendering style of the game's dom elements.
 * Default: Automatic
 * @default auto
 * @parent HTML Settings
 * 
 * @param PIXI Settings
 * @default ====================================
 *
 * @param Garbage Collection Mode
 * @type select
 * @option Automatic
 * @option On Scene Change
 * @option Manual
 * @desc The form of garbage collection used for sprites.
 * Default: Automatic
 * @default Automatic
 * @parent PIXI Settings
 *
 * @param Round Pixels
 * @type boolean
 * @desc Enables the round pixels option in the renderer.
 * Default: OFF
 * @default false
 * @parent PIXI Settings
 *
 * @param Scale Mode
 * @type select
 * @option Linear
 * @option Nearest
 * @desc The scale mode used by PIXI.
 * Default: Nearest
 * @default Nearest
 * @parent PIXI Settings
 *
 * @param Wrap Mode
 * @type select
 * @option Clamp
 * @option Repeat
 * @option Mirrored Repeat
 * @desc The wrap mode used by PIXI.
 * Default: Clamp
 * @default Clamp
 * @parent PIXI Settings
 *
 * @help
 *
 * Game Upgrade
 * Version 1.33
 * SumRndmDde
 *
 *
 * This plugin enables more customization over the core mechanics of one's game 
 * while also providing additional functions for future plugins.
 *
 * It also provides various inputs for manipulating the core NodeJS 
 * properties setup within one's game.
 *
 *
 * ==============================================================================
 *  Basic Idea Behind the Plugin
 * ==============================================================================
 *
 * This plugin has complete access to manipulation over various properties
 * of your game window. Normally, such an ability would be impossible; however,
 * this game rebuilds the game from scratch upon initialization, allowing for
 * control over such things as maximum and minimum resizing along with the 
 * ability to disable resizing capabilities altogether.
 *
 * The frame of the game window may also be disabled, and the game now has the
 * ability to force the game window to always be on top. Experiement to your
 * own desire! ~
 *
 *
 * ==============================================================================
 *  Game Window Plugin Commands
 * ==============================================================================
 *
 * The following plugin commands may be used to manipulate the game window:
 *
 *
 *   ForceClose
 *
 * Closes the game window.
 *
 *
 *   FocusWindow
 *
 * Focuses on the game window.
 *
 *
 *   MinimizeWindow
 *
 * Minimizes the game window.
 *
 *
 *   UnminimizeWindow
 *
 * Unminimizes the game window.
 *
 *
 *   MaximizeWindow
 *
 * Maximizes the game window.
 *
 *
 *   UnmaximizeWindow
 *
 * Unmaximize the game window.
 *
 *
 *   RequestAttention
 *
 * Requests attention to the game window.
 *
 *
 *   TaskBarShow
 *
 * Makes the game accessable from the task bar.
 *
 *
 *   TaskBarHide
 *
 * Removes the game from the task bar.
 *
 *
 *   EnterKioskMode
 *
 * Enters kiosk mode.
 *
 *
 *   LeaveKioskMode
 *
 * Leaves kiosk mode.
 *
 *
 *   SetProgressBar ratio
 *
 * Sets the window's progress bar to the value defined by "ratio".
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

/*~struct~GameSize:
 *
 * @param Width
 * @type number
 * @min 1
 * @decimals 0
 * @desc The width of the game's resolution.
 * Default: 816
 * @default 816
 *
 * @param Height
 * @type number
 * @min 1
 * @decimals 0
 * @desc The height of the game's resolution.
 * Default: 624
 * @default 624
 *
 */

/*~struct~WindowSize:
 *
 * @param Width
 * @type number
 * @min 1
 * @decimals 0
 * @desc The width of the game window.
 * Leave blank to match the game's resolution.
 * @default
 *
 * @param Height
 * @type number
 * @min 1
 * @decimals 0
 * @desc The height of the game window.
 * Leave blank to match the game's resolution.
 * @default
 *
 */

/*~struct~MinSize:
 *
 * @param Width
 * @type number
 * @min 1
 * @decimals 0
 * @desc The minimum width of the game's resolution.
 * Leave blank to disallow (default).
 * @default 408
 *
 * @param Height
 * @type number
 * @min 1
 * @decimals 0
 * @desc The minimum height of the game's resolution.
 * Leave blank to disallow (default).
 * @default 312
 *
 */

/*~struct~MaxSize:
 *
 * @param Width
 * @type number
 * @min 1
 * @decimals 0
 * @desc The maximum width of the game's resolution.
 * Leave blank to disallow (default).
 * @default
 *
 * @param Height
 * @type number
 * @min 1
 * @decimals 0
 * @desc The maximum height of the game's resolution.
 * Leave blank to disallow (default).
 * @default
 *
 */

var SRD = SRD || {};
SRD.GameUpgrade = SRD.GameUpgrade || {};
SRD.Requirements = SRD.Requirements || [];
SRD.PluginCommands = SRD.PluginCommands || {};
SRD.NotetagGetters = SRD.NotetagGetters || [];

var Imported = Imported || {};
Imported["SumRndmDde Game Upgrade"] = 1.33;

function GameWindowManager() {
	throw new Error('This is a static class');
}

(function(_) {

"use strict";

//-----------------------------------------------------------------------------
// SRD
//-----------------------------------------------------------------------------

/*
 * Checks if the game is playtesting.
 */

SRD.isPlaytest = Utils.isOptionValid('test');

/*
 * Used to parse the recursive format of MV's JSON parameter structure.
 */

SRD.parse = function(string, parseEverything, deleteBlank) {
	if(typeof(string) !== 'string') return string;
	try {
		var temp = JSON.parse(string);
	} catch(e) {
		if(deleteBlank && string === '') {
			return undefined;
		}
		return string;
	}
	if(typeof(temp) === 'object') {
		for(var key in temp) {
			temp[key] = SRD.parse(temp[key], parseEverything, deleteBlank);
		}
		return temp;
	} else {
		return parseEverything ? temp : string;
	}
};

/*
 * Used to check if a variable exists.
 */

SRD.exists = function(variable) {
	return typeof(variable) !== 'undefined';
};

/*
 * Used to check if something is a class.
 */

SRD.isClass = function(variable) {
	return typeof(variable) === 'function';
};

/*
 * Used to open websites.
 */

SRD.openLink = function(url) {
	if(Utils.isNwjs()) {
		require('nw.gui').Shell.openExternal(url);
	} else if(window && window.open) {
		window.open(url);
	}
};

/*
 * Checks if plugin is installed.
 */

SRD.pluginExists = function(name, version) {
	if(Imported[name] === undefined) return false;
	if(version === undefined) {
		return true;
	} else {
		return Imported[name] >= version;
	}
};

/*
 * Requires a plugin to be installed.
 */

SRD.requirePlugin = function(name, filename, requiredname, link, version) {
	if(SRD.pluginExists(name, version)) {
		return false;
	} else {
		SRD.Requirements.push(['plugin', filename, requiredname, link, version]);
		return true;
	}
};

/*
 * Requires an MV version for the project.
 */

SRD.requireVersion = function(filename, version) {
	if(Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= version) {
		return false;
	} else {
		SRD.Requirements.push(['project', filename, version]);
		return true;
	}
};


/*
 * Checks the required plugins and prompts the developer to update them.
 */

SRD.checkRequirements = function() {
	SRD.Requirements.forEach(function(info) {
		let result = false;
		if(info[0] === 'plugin') {
			if(window.confirm(info[1] + ' requires ' + info[2] + ' ' + (info[4] ? 'v' + String(info[4]) + ' or greater ' : '') + 
				'in order to be used. Would you like to open the page for ' + info[2] + '?')) {
				SRD.openLink(info[3]);
			}
		} else if(info[0] === 'project') {
			window.alert(info[1] + ' requires your MV project to be v' + info[2] + ' or greater.');
		}
	}, this);
};

/*
 * Called when the window loads.
 */

SRD.onWindowLoad = function() {
	if(SRD.isPlaytest) {
		SRD.checkRequirements();
	}
};

//-----------------------------------------------------------------------------
// SRD.PluginCommands
//-----------------------------------------------------------------------------

/*
 * Game Window Plugin Commands
 */

SRD.PluginCommands['forceclose'] = function(args) {
	if(!GameWindowManager.window) return;
	GameWindowManager.window.close(true);
};

SRD.PluginCommands['focuswindow'] = function(args) {
	if(!GameWindowManager.window) return;
	GameWindowManager.window.focus();
};

SRD.PluginCommands['minimizewindow'] = function(args) {
	if(!GameWindowManager.window) return;
	GameWindowManager.window.minimize();
};

SRD.PluginCommands['unminimizewindow'] = function(args) {
	if(!GameWindowManager.window) return;
	GameWindowManager.window.restore();
};

SRD.PluginCommands['maximizewindow'] = function(args) {
	if(!GameWindowManager.window) return;
	GameWindowManager.window.maximize();
};

SRD.PluginCommands['unmaximizewindow'] = function(args) {
	if(!GameWindowManager.window) return;
	GameWindowManager.window.unmaximize();
};

SRD.PluginCommands['requestattention'] = function(args) {
	if(!GameWindowManager.window) return;
	GameWindowManager.window.requestAttention();
};

SRD.PluginCommands['taskbarshow'] = function(args) {
	if(!GameWindowManager.window) return;
	GameWindowManager.window.setShowInTaskbar(true);
};

SRD.PluginCommands['taskbarhide'] = function(args) {
	if(!GameWindowManager.window) return;
	GameWindowManager.window.setShowInTaskbar(false);
};

SRD.PluginCommands['enterkioskmode'] = function(args) {
	if(!GameWindowManager.window) return;
	GameWindowManager.window.enterKioskMode();
};

SRD.PluginCommands['leavekioskmode'] = function(args) {
	if(!GameWindowManager.window) return;
	GameWindowManager.window.leaveKioskMode();
};

SRD.PluginCommands['setprogressbar'] = function(args) {
	if(!GameWindowManager.window) return;
	GameWindowManager.window.setProgressBar(parseInt(args[0]) / 100);
};

//-----------------------------------------------------------------------------
// SRD.GameUpgrade
//-----------------------------------------------------------------------------

_.params = SRD.parse(JSON.stringify(PluginManager.parameters('SRD_GameUpgrade')), true);

_.params['Decrypter Ignore List'].forEach(function(url, i, array) {
	array[i] = 'img/' + url;
});

_.isNewNWjs = process.versions['node-webkit'] >= "0.13.0" && Utils.RPGMAKER_VERSION >= "1.6.0";

//-----------------------------------------------------------------------------
// SRD.GameUpgrade.windowSettings
//-----------------------------------------------------------------------------

_.windowSettings = {
	'position': 'center',
	'show': _.isNewNWjs ? true : false,
	'toolbar': false,
	"icon": "www/icon/icon.png"
};

_.windowSettings['width']         = _.params['Screen Resolution'].Width || _.params['Game Resolution'].Width;
_.windowSettings['height']        = _.params['Screen Resolution'].Height || _.params['Game Resolution'].Height;
_.windowSettings['min_width']     = _.params['Minimum Resolution'].Width || null;
_.windowSettings['min_height']    = _.params['Minimum Resolution'].Height || null;
_.windowSettings['max_width']     = _.params['Maximum Resolution'].Width || null;
_.windowSettings['max_height']    = _.params['Maximum Resolution'].Height || null;
_.windowSettings['title']         = _.params['Window Title'];
_.windowSettings['resizable']     = _.params['Allow Resize'];
_.windowSettings['fullscreen']    = _.params['Initial Fullscreen'];
_.windowSettings['frame']         = _.params['Show Frame'];
_.windowSettings['always-on-top'] = _.params['Always on Top'];

//-----------------------------------------------------------------------------
// PIXI
//-----------------------------------------------------------------------------

if(Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= '1.3.0') {

if(PIXI.VERSION > '4.4.0') {

if(_.params['Garbage Collection Mode'] === 'Manual') {
	PIXI.settings.GC_MODE = PIXI.GC_MODES.AUTO;
} else {
	PIXI.settings.GC_MODE = PIXI.GC_MODES.MANUAL;
}

if(_.params['Scale Mode'] === 'Linear') {
	PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.LINEAR;
	PIXI.tilemap.TileRenderer.SCALE_MODE = PIXI.SCALE_MODES.LINEAR;
} else {
	PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
	PIXI.tilemap.TileRenderer.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
}

if(_.params['Wrap Mode'] === 'Repeat') {
	PIXI.settings.WRAP_MODE = PIXI.WRAP_MODES.REPEAT;
} else if(_.params['Wrap Mode'] === 'Mirrored Repeat') {
	PIXI.settings.WRAP_MODE = PIXI.WRAP_MODES.MIRRORED_REPEAT;
} else {
	PIXI.settings.WRAP_MODE = PIXI.WRAP_MODES.CLAMP;
}

} else {

if(_.params['Garbage Collection Mode'] === 'Manual') {
	PIXI.GC_MODES.DEFAULT = PIXI.GC_MODES.AUTO;
} else {
	PIXI.GC_MODES.DEFAULT = PIXI.GC_MODES.MANUAL;
}

if(_.params['Scale Mode'] === 'Linear') {
	PIXI.SCALE_MODES.DEFAULT = PIXI.SCALE_MODES.LINEAR;
	PIXI.tilemap.TileRenderer.SCALE_MODE = PIXI.SCALE_MODES.LINEAR;
} else {
	PIXI.SCALE_MODES.DEFAULT = PIXI.SCALE_MODES.NEAREST;
	PIXI.tilemap.TileRenderer.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
}

if(_.params['Wrap Mode'] === 'Repeat') {
	PIXI.WRAP_MODES.DEFAULT = PIXI.WRAP_MODES.REPEAT;
} else if(_.params['Wrap Mode'] === 'Mirrored Repeat') {
	PIXI.WRAP_MODES.DEFAULT = PIXI.WRAP_MODES.MIRRORED_REPEAT;
} else {
	PIXI.WRAP_MODES.DEFAULT = PIXI.WRAP_MODES.CLAMP;
}

} // PIXI.VERSION > '4.4.0'

} // Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= '1.3.0'

//-----------------------------------------------------------------------------
// Graphics
//-----------------------------------------------------------------------------

if(!Graphics.setVideoVolume) {

Graphics._videoVolume = 1;

_.Graphics__createVideo = Graphics._createVideo;
Graphics._createVideo = function() {
	_.Graphics__createVideo.apply(this, arguments);
	this._video.volume = this._videoVolume;
};

Graphics.setVideoVolume = function(value) {
	this._videoVolume = value;
	if (this._video) {
		this._video.volume = this._videoVolume;
	}
};

}

Graphics.setVideoVolume(_.params['Video Master Volume'] / 100);

_.Graphics__createRenderer = Graphics._createRenderer;
Graphics._createRenderer = function() {
	_.Graphics__createRenderer.apply(this, arguments);
	this._applyGameUpgradeParameters();
};

Graphics._applyGameUpgradeParameters = function() {
	if(this._renderer && _.params['Round Pixels']) {
		this._renderer.roundPixels = true;
	}
	if(!this.isWebGL() && _.params['Garbage Collection Mode'] === 'On Scene Change') {
		_.params['Garbage Collection Mode'] = 'Automatic';
		if(PIXI.VERSION > '4.4.0') {
			PIXI.settings.GC_MODE = PIXI.GC_MODES.AUTO;
		} else {
			PIXI.GC_MODES.DEFAULT = PIXI.GC_MODES.AUTO;
		}
	}
};

//-----------------------------------------------------------------------------
// WebAudio
//-----------------------------------------------------------------------------

if(typeof(WebAudio) === 'function' && WebAudio.setMasterVolume) {

WebAudio.setMasterVolume(_.params['Audio Master Volume'] / 100);

}

//-----------------------------------------------------------------------------
// ImageCache
//-----------------------------------------------------------------------------

if(typeof(ImageCache) === 'function') {

ImageCache.limit = _.params['Image Cache Limit'] * 1000 * 1000;

}

//-----------------------------------------------------------------------------
// JsonEx
//-----------------------------------------------------------------------------

if(typeof(JsonEx) === 'function') {

JsonEx.maxDepth = _.params['JsonEx Max Depth'];

}

//-----------------------------------------------------------------------------
// Decrypter
//-----------------------------------------------------------------------------

if(typeof(Decrypter) === 'function') {

Decrypter._ignoreList = _.params['Decrypter Ignore List'];

}

//-----------------------------------------------------------------------------
// ResourceHandler
//-----------------------------------------------------------------------------

if(typeof(ResourceHandler) === 'function') {

ResourceHandler._defaultRetryInterval = _.params['Retry Intervals'];

}

//-----------------------------------------------------------------------------
// DataManager
//-----------------------------------------------------------------------------

SRD.notetagsLoaded = false;
SRD.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
	if(!SRD.DataManager_isDatabaseLoaded.apply(this, arguments)) return false;
	if(!SRD.notetagsLoaded) {
		SRD.NotetagGetters.forEach(function(func) {
			func.call(this);
		}, this);
		SRD.notetagsLoaded = true;
	}
	return true;
};

//-----------------------------------------------------------------------------
// SceneManager
//-----------------------------------------------------------------------------

SceneManager._screenWidth  = _.params['Game Resolution'].Width;
SceneManager._screenHeight = _.params['Game Resolution'].Height;
SceneManager._boxWidth     = _.params['Game Resolution'].Width;
SceneManager._boxHeight    = _.params['Game Resolution'].Height;
SceneManager._multipleBackgroundBitmaps = [];
SceneManager._topBackgroundBitmap = 0;

Object.defineProperty(SceneManager, 'scene', {
	get: function() {
		return this._scene;
	},
	configurable: true
});

Object.defineProperty(SceneManager, 'stack', {
	get: function() {
		return this._stack;
	},
	configurable: true
});

SceneManager.isScene = function(sceneClass) {
	return this._scene && this._scene.constructor === sceneClass;
};

SceneManager.isSceneAny = function(array) {
	if(!this._scene) return false;
	return array.contains(this._scene.constructor.name);
};

SceneManager.stackContains = function(sceneClass) {
	return this._stack.contains(sceneClass);
};

SceneManager.closeGame = function(force) {
	if(this._scene && this._scene.startFadeOut) {
		this._scene.startFadeOut();
	}
};

_.SceneManager_initNwjs = SceneManager.initNwjs;
SceneManager.initNwjs = function() {
	_.SceneManager_initNwjs.apply(this, arguments);
	if(Utils.isNwjs()) {
		if(_.isNewNWjs) {
			const win = require('nw.gui').Window.get();
			GameWindowManager.window = win;
			if(SRD.isPlaytest) {
				this.updatePackageJson();
			}
			win.on('close', GameWindowManager.onWindowClose);
		} else {
			this.setupEventHandlers();
		}
	}
};

SceneManager.updatePackageJson = function() {
	const fs = require('fs');
	const path = require('path');
	const fileLoc = path.join(path.dirname(process.mainModule.filename), 'package.json');
	if(fs.existsSync(fileLoc)) {
		let hasChanged = false;
		const json = JSON.parse(fs.readFileSync(fileLoc));
		if(typeof json["window"] === "object") {
			const keys = Object.keys(_.windowSettings);
			for(let i = 0; i < keys.length; i++) {
				if(keys[i] === "height") {
					const offset = _.windowSettings["resizable"] === false ? 2 : 0;
					if(_.windowSettings["height"] - offset !== json["window"]["height"]) {
						json["window"] = _.windowSettings;
						hasChanged = true;
						break;
					}
				} else if(json["window"][keys[i]] !== _.windowSettings[keys[i]]) {
					json["window"] = _.windowSettings;
					hasChanged = true;
					break;
				}
			}
		} else {
			json["window"] = _.windowSettings;
			hasChanged = true;
		}
		if(hasChanged) {
			if(_.windowSettings['resizable'] === false) {
				json["window"]["height"] -= 2;
			}
			fs.writeFileSync(fileLoc, JSON.stringify(json, 4));
			alert("Package.json has been updated! Restart the game to see the changes!");
		}
	} else {
		console.log("package.json does not exist?? \n~ SRD_GameUpgrade");
	}
}

SceneManager.setupEventHandlers = function() {
	const win = require('nw.gui').Window.get();
	GameWindowManager.window = win;
	win.on('close', GameWindowManager.onWindowClose);
	win.on('closed', function() {
		if(SRD.OriginalWindow) {
			SRD.OriginalWindow.close(true);
		}
	});
};

//-----------------------------------------------------------------------------
// GameWindowManager
//-----------------------------------------------------------------------------

if(!_.isNewNWjs) {

GameWindowManager.window = null;
GameWindowManager._winCode = "SRD_GameUpgrade's intended window.";

GameWindowManager.startGameTransition = function() {
	const gui = require('nw.gui');
	const win = gui.Window.get();
	const newWindow = this.createNewWindow(gui);
	this.disableWindow(win);
	this.setupNewWindow(newWindow, win);
	this.onTransferStart();
	this.requestUpdate();
};

GameWindowManager.onTransferStart = function() {
};

GameWindowManager.isWindowOriginal = function() {
	return Utils.isNwjs() && !require('nw.gui').Window.get()[this._winCode];
};

GameWindowManager.createNewWindow = function(gui) {
	return gui.Window.open('index.html' + location.search, _.windowSettings);
};

GameWindowManager.disableWindow = function(window) {
	window.on('close', function() {});
};

GameWindowManager.setupNewWindow = function(window, oldWindow) {
	this._intendedWindow = window;
	this._originalWindow = oldWindow;
	this._intendedWindow[this._winCode] = true;
	this._intendedWindow.on('loaded', function() {
		this._intendedWindow.window.SRD.OriginalWindow = this._originalWindow;
		this._intendedWindowLoaded = true;
	}.bind(this));
};

GameWindowManager.readyToTransfer = function() {
	return this._intendedWindowLoaded;
};

GameWindowManager.preformTransfer = function() {
	this._intendedWindow.show();
	this._intendedWindow.focus();
	this._originalWindow.hide();
};

GameWindowManager.update = function() {
	if(this.readyToTransfer()) {
		this.preformTransfer();
		return;
	}
	this.requestUpdate();
};

GameWindowManager.requestUpdate = function() {
	requestAnimationFrame(this.update.bind(this));
};

GameWindowManager.onWindowClose = function() {
	GameWindowManager.closeGame();
};

GameWindowManager.closeGame = function() {
	if(GameWindowManager.window) {
		GameWindowManager.window.close(true);
	} else {
		window.close(true);
	}
};

} else {

GameWindowManager.onWindowClose = function() {
	GameWindowManager.closeGame();
};

GameWindowManager.closeGame = function() {
	if(GameWindowManager.window) {
		GameWindowManager.window.close(true);
	} else {
		window.close(true);
	}
};

}

//-----------------------------------------------------------------------------
// Game_Interpreter
//-----------------------------------------------------------------------------

_.Game_Interpreter_updateWaitMode = Game_Interpreter.prototype.updateWaitMode;
Game_Interpreter.prototype.updateWaitMode = function() {
	if(this._waitMode === 'indefinite') {
		return true;
	}
	return _.Game_Interpreter_updateWaitMode.apply(this, arguments);
};

SRD.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	const com = command.trim().toLowerCase();
	if(SRD.PluginCommands[com]) {
		SRD.PluginCommands[com].call(this, args);
		return;
	}
	SRD.Game_Interpreter_pluginCommand.apply(this, arguments);
};

//-----------------------------------------------------------------------------
// Scene_Base
//-----------------------------------------------------------------------------

_.Scene_Base_initialize = Scene_Base.prototype.initialize;
Scene_Base.prototype.initialize = function() {
	_.Scene_Base_initialize.apply(this, arguments);
	this._fadeCallback = null;
};

_.Scene_Base_updateFade = Scene_Base.prototype.updateFade;
Scene_Base.prototype.updateFade = function() {
	const prevDuration = this._fadeDuration;
	_.Scene_Base_updateFade.apply(this, arguments);
	if(prevDuration === 1) {
		this.callFadeCallback();
	}
};

Scene_Base.prototype.setFadeCallback = function(callback) {
	this._fadeCallback = callback;
};

Scene_Base.prototype.callFadeCallback = function() {
	if(this._fadeCallback) {
		this._fadeCallback();
		this._fadeCallback = null;
	}
};

_.Scene_Base_create = Scene_Base.prototype.create;
Scene_Base.prototype.create = function() {
	if(_.params['Garbage Collection Mode'] === 'On Scene Change') {
		Graphics.callGC();
	}
	_.Scene_Base_create.apply(this, arguments);
};

//-----------------------------------------------------------------------------
// Scene_Boot
//-----------------------------------------------------------------------------

if(_.windowSettings['title']) {

document.title = _.windowSettings['title'];

_.Scene_Boot_updateDocumentTitle = Scene_Boot.prototype.updateDocumentTitle;
Scene_Boot.prototype.updateDocumentTitle = function() {
	_.Scene_Boot_updateDocumentTitle.apply(this, arguments);
	document.title = _.windowSettings['title'];
};

}

//-----------------------------------------------------------------------------
// Scene_MenuBase
//-----------------------------------------------------------------------------

_.Scene_MenuBase_initialize = Scene_MenuBase.prototype.initialize;
Scene_MenuBase.prototype.initialize = function() {
	_.Scene_MenuBase_initialize.apply(this, arguments);
	this["Is Menu Base"] = true;
};

//-----------------------------------------------------------------------------
// window
//-----------------------------------------------------------------------------

_.window_onload = window.onload;
window.onload = function() {
	if(!_.isNewNWjs && _.params['Game Reconstruction (1.5.X & below)'] && GameWindowManager.isWindowOriginal()) {
		GameWindowManager.startGameTransition();
	} else {
		_.window_onload.apply(this, arguments);
		SRD.onWindowLoad();
	}
};

//-----------------------------------------------------------------------------
// document
//-----------------------------------------------------------------------------

document.body.style['backgroundColor'] = _.params['Background Color'];

document.body.style['image-rendering'] = _.params['Image Rendering'];

})(SRD.GameUpgrade);