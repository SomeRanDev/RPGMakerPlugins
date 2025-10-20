/*:
 * @plugindesc Allows developers to drastically reduce the file sizes of data files; helps protect data files from being reopened.
 * @author SumRndmDde
 *
 * @param Compress Data?
 * @desc If 'true', the data files will be compressed when you playtest the game; this is auto-disabled in exported games.
 * @default true
 *
 * @param Read from Compression
 * @desc If 'true', the game will use the compressed data files. 
 * Be certain it's set to the correct setting before exporting.
 * @default true
 *
 * @help
 *
 * Data Compressor
 * Version 1.00
 * SumRndmDde
 *
 *
 * This plugin allows developers to drastically reduce the file sizes of data 
 * files within their project and helps protect data files from being reopened.
 *
 *
 * ==============================================================================
 *  How it Works
 * ==============================================================================
 *
 * This plugin is pretty simple. It takes the data files from the /data/ folder
 * in your project, compresses them, and places them in /data/compressed/.
 * Once the compressed files have been created, they can be read from within
 * the game.
 *
 * To first create the files, set the "Compress Data?" Parameter to 'true', then
 * playtest your game within the editor.
 *
 * Once your game is ready to export, make sure the data you want is compressed,
 * set the "Read from Compression" Parameter to 'true', then export the project.
 *
 * Finally, within the exported game's /data/ folder, delete all the normal
 * data files. Make sure you don't delete the /data/compressed/ folder!
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

var SRD = SRD || {};
SRD.DataCompressor = SRD.DataCompressor || {};

var Imported = Imported || {};
Imported["Data Compressor"] = 1.00;

(function(_) {

"use strict";

//-----------------------------------------------------------------------------
// SRD.DataCompressor
//-----------------------------------------------------------------------------

const params = PluginManager.parameters('SRD_DataCompressor');

_.playtest = Utils.isOptionValid('test');
_.compress = String(params['Compress Data?']).trim().toLowerCase() === 'true' && _.playtest;
_.read = String(params['Read from Compression']).trim().toLowerCase() === 'true';

_.localDataPath = function() {
	const path = require('path');
	const base = path.dirname(process.mainModule.filename);
	return path.join(base, 'data/');
};

_.localFileDirectoryPath = function() {
	const path = require('path');
	const base = path.dirname(process.mainModule.filename);
	return path.join(base, 'data/compressed/');
};

_.checkFileDirectorPath = function() {
	const fs = require('fs');
	const dirPath = this.localFileDirectoryPath();
	return fs.existsSync(dirPath);
};

_.createFileDirectorPath = function() {
	const fs = require('fs');
	const dirPath = this.localFileDirectoryPath();
	if(!fs.existsSync(dirPath)) {
		fs.mkdirSync(dirPath);
	}
	return dirPath;
};

if(_.compress) {

_.compressData = function() {
	const fs = require('fs');
	const dirPath = _.createFileDirectorPath();
	DataManager._databaseFiles.forEach(function(data) {
		const path = dirPath + data.src;
		const json = JSON.stringify(eval(data.name));
		const info = LZString.compressToBase64(json);
		fs.writeFileSync(path, info);
	}, this);
	_.mapFiles.forEach(function(data) {
		const path = dirPath + data.src;
		const json = JSON.stringify(_.mapDatas[data.id]);
		const info = LZString.compressToBase64(json);
		fs.writeFileSync(path, info);
	}, this);
};

_.getListOfMaps = function() {
	const result = [];
	const fs = require('fs');
	const location = _.localDataPath();
	const files = fs.readdirSync(location);
	for(var i = 0; i < files.length; i++) {
		const file = location + files[i];
		const stat = fs.statSync(file);
		const match = _.isMapFile(files[i]);
		if(stat && match) {
			result.push({src: files[i], id: parseInt(match[1])});
		}
	}
	return result;
};

_.isMapFile = function(filename) {
	return filename.match(/Map(\d+)\.json/);
};

_.mapFiles = _.getListOfMaps();
_.mapDatas = [];

_.loadMapFile = function(src, id) {
	const xhr = new XMLHttpRequest();
	const url = 'data/' + src;
	xhr.open('GET', url);
	xhr.overrideMimeType('application/json');
	xhr.onload = function() {
		if (xhr.status < 400) {
			_.mapDatas[id] = JSON.parse(xhr.responseText);
		}
	};
	xhr.onerror = function() {
		DataManager._errorUrl = DataManager._errorUrl || url;
	};
	_.mapDatas[id] = null;
	xhr.send();
};

_.loadAllMapFiles = function() {
	_.mapFiles.forEach(function(mapInfo) {
		const file = mapInfo.src;
		const id = mapInfo.id;
		_.loadMapFile(file, id);
	}, this);
};

_.isMapDatasLoaded = function() {
	for(let i = 0; i < _.mapFiles.length; i++) {
		if(!_.mapDatas[_.mapFiles[i].id]) {
			return false;
		}
	}
	return true;
};

} //End of if(_.compress)

//-----------------------------------------------------------------------------
// DataManager
//-----------------------------------------------------------------------------

_.DataManager_loadDatabase = DataManager.loadDatabase;
DataManager.loadDatabase = function() {
	if(_.compress) _.loadAllMapFiles();
	_.DataManager_loadDatabase.apply(this, arguments);
};

_.DataManager_loadDataFile = DataManager.loadDataFile;
DataManager.loadDataFile = function(name, src) {
	const test = this.isBattleTest() || this.isEventTest();
	if(_.read && !_.compress && !test && _.checkFileDirectorPath()) {
		this.loadDataFileCompressed(name, src);
	} else {
		_.DataManager_loadDataFile.apply(this, arguments);
	}
};

DataManager.loadDataFileCompressed = function(name, src) {
	const xhr = new XMLHttpRequest();
	const url = 'data/compressed/' + src;
	xhr.open('GET', url);
	xhr.overrideMimeType('application/json');
	xhr.onload = function() {
		if (xhr.status < 400) {
			const json = LZString.decompressFromBase64(xhr.responseText);
			window[name] = JSON.parse(json);
			DataManager.onLoad(window[name]);
		}
	};
	xhr.onerror = function() {
		DataManager._errorUrl = DataManager._errorUrl || url;
	};
	window[name] = null;
	xhr.send();
};


if(_.compress) {

let notetagsLoaded = false;
_.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
	let result = _.DataManager_isDatabaseLoaded.apply(this, arguments) && _.isMapDatasLoaded();
	if(!result) return false;
	if(!notetagsLoaded) {
		_.compressData();
		notetagsLoaded = true;
	}
	return true;
};

}

})(SRD.DataCompressor);