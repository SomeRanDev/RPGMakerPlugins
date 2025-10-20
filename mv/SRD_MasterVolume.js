/*:
 * @plugindesc Adds an option in the Options menu to change the game's master volume.
 * @author SumRndmDde
 *
 * @param Option Name
 * @desc The name that appears in the Options menu for the master volume option.
 * @default Master Volume
 *
 * @param Default Value
 * @desc The initial value of the master volume option.
 * Make it a number between 0 and 100.
 * @default 100
 *
 * @param Option Position
 * @desc The position of the option on the options menu.
 *  Above  |  Below  |  AboveVol  |  BelowVol
 * @default AboveVol
 *
 * @help
 *
 * Master Volume
 * Version 1.00
 * SumRndmDde
 *
 *
 * Adds an option in the Options menu to change the game's master volume.
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
SRD.MasterVolume = SRD.MasterVolume || {};

var Imported = Imported || {};
Imported["SumRndmDde Master Volume"] = 1.00;

(function(_) {

"use strict";

if(!Utils.RPGMAKER_VERSION || Utils.RPGMAKER_VERSION < '1.5.0') {
    alert("'SRD_MasterVolume' requires your RPG Maker MV project to be at version 1.5.0 or greater!");
    return;
}

//-----------------------------------------------------------------------------
// SRD.MasterVolume
//-----------------------------------------------------------------------------

const params = PluginManager.parameters('SRD_MasterVolume');

_.optionName = String(params['Option Name']);
_.defaultValue = parseInt(params['Default Value']);
_.position = String(params['Option Position']).trim().toLowerCase();

//-----------------------------------------------------------------------------
// ConfigManager
//-----------------------------------------------------------------------------

Object.defineProperty(ConfigManager, 'masterVolume', {
    get: function() {
        return Math.floor(AudioManager.masterVolume * 100);
    },
    set: function(value) {
        AudioManager.masterVolume = value / 100;
    },
    configurable: true
});

_.ConfigManager_makeData = ConfigManager.makeData;
ConfigManager.makeData = function() {
    var config = _.ConfigManager_makeData.apply(this, arguments);
    config.masterVolume = this.masterVolume;
    return config;
};

_.ConfigManager_applyData = ConfigManager.applyData;
ConfigManager.applyData = function(config) {
	_.ConfigManager_applyData.apply(this, arguments);
    this.masterVolume = this.readMasterVolume(config, 'masterVolume');
};

ConfigManager.readMasterVolume = function(config, name) {
    var value = config[name];
    if (value !== undefined) {
        return Number(value).clamp(0, 100);
    } else {
        return _.defaultValue;
    }
};

//-----------------------------------------------------------------------------
// Window_Options
//-----------------------------------------------------------------------------

if(_.position.match(/vol/i)) {

_.Window_Options_addVolumeOptions = Window_Options.prototype.addVolumeOptions;
Window_Options.prototype.addVolumeOptions = function() {
	if(_.position === 'abovevol') this.addMasterVolume();
    _.Window_Options_addVolumeOptions.apply(this, arguments);
    if(_.position === 'belowvol') this.addMasterVolume();
};

} else {

_.Window_Options_makeCommandList = Window_Options.prototype.makeCommandList;
Window_Options.prototype.makeCommandList = function() {
    if(_.position === 'above') this.addMasterVolume();
    _.Window_Options_makeCommandList.apply(this, arguments);
    if(_.position === 'below') this.addMasterVolume();
};

}

Window_Options.prototype.addMasterVolume = function() {
    this.addCommand(_.optionName, 'masterVolume');
};

})(SRD.MasterVolume);