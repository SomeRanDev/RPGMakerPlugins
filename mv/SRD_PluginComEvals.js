/*:
 * @plugindesc By using a specific format, this plugin now allows for JavaScript evals within plugin commands.
 * @author SumRndmDde
 * @help
 *
 * Plugin Command Evals
 * Version 1.01
 * SumRndmDde
 *
 *
 * This plugin allows developers to have JavaScript evals in all plugin 
 * commands by using a specific format when writing them.
 *
 *
 * =============================================================================
 *  How to Create Eval in Plugin Command
 * =============================================================================
 *
 * To create an eval, you simply need to use ${...}
 *
 *
 * For example, Character Creator EX uses the plugin command:
 *
 *   OpenCharacterCreator [actorId]
 *
 *
 * Using this plugin command, you can open the character creator for actor ID 3
 * by using the following command:
 *
 *   OpenCharacterCreator 3
 *
 *
 * However, now you can also open it through an actor ID defined by a variable.
 * This will open the character creator based on the actor ID stored in 
 * variable ID 5:
 *
 *   OpenCharacterCreator ${v[5]}
 *
 *
 * Alternatively, you can make the character creator open based on which actor
 * is in the leader of the party.
 *
 *   OpenCharacterCreator ${$gameParty.leader().actorId()}
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

var SRD = SRD || {};
SRD.PluginCommandEvals = SRD.PluginCommandEvals || {};

var Imported = Imported || {};
Imported["SumRndmDde Plugin Command Evals"] = 1.01;

(function(_) {

"use strict";

_.Game_Interpreter_command356 = Game_Interpreter.prototype.command356;
Game_Interpreter.prototype.command356 = function() {
	this._params[0] = this.evaluatePluginCommand(this._params[0]);
	return _.Game_Interpreter_command356.apply(this, arguments);
};

Game_Interpreter.prototype.evaluatePluginCommand = function(original) {
	var result = '';
	var s = $gameSwitches._data;
	var v = $gameVariables._data;
	result = original.replace(/\$\{([^\{]*)\}/gi, function(match, $1) {
        console.log($1)
        var replacement = '';
        try {
        	replacement = String(eval($1));
        } catch(e) {
        	replacement = $1;
        	console.error(e);
        }
        return replacement;
    }.bind(this));
    return result;
};

})(SRD.PluginCommandEvals);