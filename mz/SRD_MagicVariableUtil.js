/*:
 * @target MZ
 * @plugindesc Adds a JavaScript utility object that makes working with variables and switches in code much easier and readable.
 * @author SomeRanDev
 * @url https://someran.dev/links
 *
 * @param Automatically Create Helper
 * @desc If ON, the helpers are made available in all Script events as "Utility Variable Name" name ("v" by default).
 * @type boolean
 * @default true
 *
 * @param Utility Variable Name
 * @desc The name used by the variable utility object generated if "Automatically Create Helper" is ON. Default: v
 * @default v
 *
 * @param Utility Switch Name
 * @desc The name used by the switch utility object generated if "Automatically Create Helper" is ON. Default: s
 * @default s
 *
 * @help
 * ============================================================================
 *                          Magic Variable and Switch Util
 *                                 Version 1.1.0
 *                                   SomeRanDev
 * ============================================================================
 *
 * By default, "Script" and "Conditional Branch > Script" will now have a 
 * variable named "v" that IS the utility. You can use it to get and edit
 * variables values in code easily:
 *
 *     // Assuming variable 123 is named "Wood Count"...
 *
 *     // this is `true`
 *     v.Wood_Count === $gameVariable.value(123)
 *
 *     // sets variable 123 to 200.
 *     v.Wood_Count = 200;
 *
 *     // Adds 5 to variable 123.
 *     v.Wood_Count += 5;
 *
 *     // Increments variable 123 by 1.
 *     v.Wood_Count++;
 *
 * You can then use the "helper" to get or set variables without hardcoding
 * the variable identifiers.
 *
 * This let's you rearrange variables in your RPG Maker project without having
 * to go back and edit all your script calls. It also makes your code more
 * readable.
 *
 *
 * ============================================================================
 *  Getting
 * ============================================================================
 *
 * If a variable named "Frog Faces" at ID 32 exists in your project, this:
 *
 *     v.Frog_Faces
 *
 * Is the same as doing this:
 *
 *     $gameVariables.value(32)
 *
 * So for example, you could do:
 *
 *     $gameVariables.setValue(33, v.Frog_Faces * 2 + Math.randomInt(3))
 *
 * This would add a random value from 2 -> 5 to variable ID 32 and place the
 * resulting value in variable ID 33.
 *
 *
 * ============================================================================
 *  Setting
 * ============================================================================
 *
 * If a variable named "Hawks Fed" at ID 33 exists in your project, this:
 *
 *     v.Hawks_Fed = 0
 *
 * Is the same as doing this:
 *
 *     $gameVariables.value(33, 0)
 *
 * So for example, you could do:
 *
 *     v.Hawks_Fed = v.Frog_Faces * 2 + Math.randomInt(3)
 *
 * This does the same thing as the example in the Getting section!
 *
 *
 * ============================================================================
 *  Switches
 * ============================================================================
 *
 * Everything you read above also works with switches. By default the switch
 * helper uses the name "s". So you can do:
 *
 *     // Assuming switch 321 is named "isbutt big"
 *     if(s.isbutt_big) {
 *         // do someting...
 *     }
 *
 *
 *     // This is the same as...
 *     if($gameSwitches.value(321)) {
 *         // do someting...
 *     }
 *
 *
 * ============================================================================
 *  Advanced Mode
 * ============================================================================
 *
 * If your RPG Maker variable name is NOT valid JavaScript identifier, the 
 * invalid characters are replaced with underscores. But if you REALLY want
 * to access variables using their real name, you can use this syntax:
 *
 * Assuming there's a variable named "Rainbows 🌈"
 *
 *     v["Rainbows 🌈"] === v.Rainbows__
 *
 *
 * ============================================================================
 *
 * If "Automatically Create Helper" is OFF, you can use the following code to
 * manually get the utility object. (In other words, just copy and paste this
 * code at the top of any script-call you want to use the utility in ONLY IF
 * "Automatically Create Helper" is OFF)
 *
 *     var v = $gameVariables.getHelper();
 *
 * The switch equivalent would be:
 *
 *     var s = $gameSwitches.getHelper();
 *
 *
 * ============================================================================
 *  TODO - Port Old Code
 * ============================================================================
 *
 * THIS FEATURE DOES NOT EXIST YET
 *
 * This plugin provides a magical tool to convert all the old code from your
 * project to use this new code.
 *
 *
 * ============================================================================
 *  Terms of Use
 * ============================================================================
 *
 * https://someran.dev/rpgmaker/terms/
 *
 * ============================================================================
 *  End of Help File
 * ============================================================================
 *
 * https://someran.dev/youtube (good content)
 * https://twitch.tv/SomeRanDev (livestreams maybe)
 * https://bsky.app/profile/someran.dev (active gamedev posts maybe)
 * http://someran.dev/rpgmaker
 *
 * Until next time,
 *   ~ SomeRanDev
 */

var SRD = SRD || {};
SRD.MagicVariableUtil = SRD.MagicVariableUtil || {};

var Imported = Imported || {};
Imported["SomeRanDev Magic Variable Utility"] = [1, 1, 0];

(function(_) {

"use strict";

/**
 * Parse the plugin parameters.
 */
_.parseParameters = function() {
	const params = PluginManager.parameters("SRD_MagicVariableUtil");
	_.automaticallyCreateHelper = String(params["Automatically Create Helper"]) === "true";
	_.utilityVariableName = String(params["Utility Variable Name"]).trim();
	_.utilitySwitchName = String(params["Utility Switch Name"]).trim();
};

/**
 * Ensure the parameters are valid.
 * If not, `throw`s an error.
 */
_.validateParameters = function() {
	if(!_.automaticallyCreateHelper) return;

	if(_.utilityVariableName !== _.convertToSafeIdentifier(_.utilityVariableName)) {
		throw `SRD_MagicVariableUtil.js "Utility Variable Name" (${_.utilityVariableName}) is not a valid JavaScript identifier.`;
	}

	if(_.utilitySwitchName !== _.convertToSafeIdentifier(_.utilitySwitchName)) {
		throw `SRD_MagicVariableUtil.js "Utility Switch Name" (${_.utilitySwitchName}) is not a valid JavaScript identifier.`;
	}
}

/**
 * Replaces all non-valid identifier characters in a string with underscore.
 * If the first character is a digit, an underscore is also prepended.
 */
_.convertToSafeIdentifier = function(identifier) {
	const result = identifier.replace(/[^\p{L}\p{N}_\$]/gu, "_");
	if (/^\p{N}/u.test(result)) {
		return "_" + result;
	}
	return result;
};

/**
 * This function is bound to an instance of either `Game_Switches` or `Game_Variables`
 * so `this._addIdentifierToHelper` will be valid.
 */
_.generateHelperProperty = function(repeatChecker, name, index) {
	if(name.length === 0) {
		return;
	}

	if(repeatChecker[name]) {
		throw `SRD_MagicVariableUtil.js variables ${repeatChecker[name]} and ${index} result in the same name: <b>${name}</b>`;
	}
	repeatChecker[name] = index;

	const safeName = _.convertToSafeIdentifier(name);
	if(safeName !== name) {
		this._addIdentifierToHelper(safeName, index);
	}
	this._addIdentifierToHelper(name, index);
};

/**
 * Inject code into functions with `eval` to enable access to helpers.
 */
_.initializeEvals = function() {
	const isMZ = Utils.RPGMAKER_NAME === "MZ";

	const injectContent = `\nconst ${_.utilityVariableName} = $gameVariables.getHelper();\nconst ${_.utilitySwitchName} = $gameSwitches.getHelper();\n`;

	Game_Interpreter.prototype.command111 = _.injectHelperIntoFunction(
		Game_Interpreter.prototype.command111,
		"command111",
		isMZ ? "case 12: // Script" : "case 12:  // Script",
		injectContent
	);

	Game_Interpreter.prototype.command122 = _.injectHelperIntoFunction(
		Game_Interpreter.prototype.command122,
		"command122",
		"case 4: // Script",
		injectContent
	);

	Game_Interpreter.prototype.command355 = _.injectHelperIntoFunction(
		Game_Interpreter.prototype.command355,
		"command355",
		/function ?\(\) ?\{/,
		injectContent
	);
};

/**
 * Metaprogramming magic to inject getHelper calls before an eval.
 */
_.injectHelperIntoFunction = function(func, name, after, injectContent) {
	const oldCode = func.toString();
	const newCode = oldCode.replace(after, "$&" + injectContent);
	if(oldCode === newCode) {
		_.failedToInjectCode = name;
	}
	return new Function(name, "return " + newCode)();
};

// =========================================================
// * Game_Switches
// =========================================================

Game_Switches.prototype.getHelper = function() {
	if(!$gameTemp._switchesHelper) {
		$gameTemp._switchesHelper = {};

		// Iterate over every variable with a name and generate a getter/setter
		// for this._helper with the name.
		const repeatChecker = {};
		$dataSystem.switches.forEach(_.generateHelperProperty.bind(this, repeatChecker));
	}

	return $gameTemp._switchesHelper;
};

Game_Switches.prototype._addIdentifierToHelper = function(name, index) {
	Object.defineProperty($gameTemp._switchesHelper, name, {
		get: function() {
			return $gameSwitches.value(index);
		},
		set: function(value) {
			$gameSwitches.setValue(index, value);
		},
		configurable: false,
		enumerable: true,
	});
};

// =========================================================
// * Game_Variables
// =========================================================

Game_Variables.prototype.getHelper = function() {
	if(!$gameTemp._variablesHelper) {
		$gameTemp._variablesHelper = {};

		// Iterate over every variable with a name and generate a getter/setter
		// for this._helper with the name.
		const repeatChecker = {};
		$dataSystem.variables.forEach(_.generateHelperProperty.bind(this, repeatChecker));
	}

	return $gameTemp._variablesHelper;
};

Game_Variables.prototype._addIdentifierToHelper = function(name, index) {
	Object.defineProperty($gameTemp._variablesHelper, name, {
		get: function() {
			return $gameVariables.value(index);
		},
		set: function(value) {
			$gameVariables.setValue(index, value);
		},
		configurable: false,
		enumerable: true,
	});
};

// =========================================================
// * Scene_Boot
// =========================================================

_.Scene_Boot_initialize = Scene_Boot.prototype.initialize;
Scene_Boot.prototype.initialize = function() {
	_.Scene_Boot_initialize.apply(this, arguments);

	_.validateParameters();
	if(_.failedToInjectCode) {
		throw `SRD_MagicVariableUtil.js (${_.failedToInjectCode}) could not successfully inject helper code.<br><br><b>Please place the plugin higher in the Plugin Manager.</b><br><br>If this error still prints, the plugin may need to be updated to work with a newer version of RPG Maker MV/MZ (you can bypass this issue by turning "Automatically Create Helper" OFF).`;
	}
};

// =========================================================
// * Run
// =========================================================

_.parseParameters();
_.initializeEvals();

})(SRD.MagicVariableUtil);
