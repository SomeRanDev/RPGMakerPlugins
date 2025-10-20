/*:
 * @plugindesc Pokemon Plugin: Adds trainer sprites for both male and female independent of the party members.
 * @author SumRndmDde
 *
 * @param Initial Gender
 * @desc The gender your Player will start with. Select between 'male' or 'female'.
 * @default male
 *
 * @param === Male ===
 * @default
 * 
 * @param Male Char Name
 * @desc The name of the file your male character sprite is contained in. Should be in folder: img/characters
 * @default Actor1
 *
 * @param Male Char Index
 * @desc The index of the character in the file your male character sprite is using. Input a number 0 to 7.
 * @default 0
 * 
 * @param M Dash Char Name
 * @desc The file of the male character sprite when the Player is dashing. Leave blank to use walking sprite.
 * @default
 *
 * @param M Dash Char Index
 * @desc  The index of the male character sprite when Player is dashing in the file. Input a number 0 to 7.
 * @default
 *
 * @param === Female ===
 * @default
 * 
 * @param Female Char Name
 * @desc The name of the file your female character sprite is contained in. Should be in folder: img/characters
 * @default Actor2
 *
 * @param Female Char Index
 * @desc The index of the character in the file your female character sprite is using. Input a number 0 to 7.
 * @default 3
 * 
 * @param F Dash Char Name
 * @desc The file of the female character sprite when the Player is dashing. Leave blank to use walking sprite.
 * @default
 *
 * @param F Dash Char Index
 * @desc The index of the female character sprite when Player is dashing in the file. Input a number 0 to 7.
 * @default
 *
 * @help
 *
 *
 * Pokemon Trainer Sprite
 * Version 1.01
 * SumRndmDde
 *
 *
 * ==========================================================================
 * Explanation
 * ==========================================================================
 *
 * In some games, such as Pokemon games, you may wish for the on-map 
 * character to be independent from the members of the party.
 *
 * This Plugin allows you to set the Player sprite independent of 
 * the party members and have two seletions to do so: male and female.
 *
 * You can toggle the Player sprite between Male and Female during the 
 * game. This would be useful for a screen that allows one to select
 * between a Male and Female character.
 *
 *
 * ==========================================================================
 * How to Use
 * ==========================================================================
 *
 * All you need to do is fill out the appropriate Parameters.
 *
 * For the file names, input the name of the file in img/characters 
 * you wish to use as your male or female character.
 *
 * For the index, input the index of the character in that file:
 *
 * 0 1 2 3
 * 4 5 6 7
 *
 *
 * You can also input seperate character sprites for dashing if you wish.
 *
 *
 * ==========================================================================
 * Plugin Commands
 * ==========================================================================
 *
 *  => SetTrainerSprite Male
 *
 * Sets your Player's sprite to the male sprite specified in the Parameters.
 * 
 *
 *  => SetTrainerSprite Female
 *
 * Sets your Player's sprite to the female sprite specified in the Parameters.
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

(function() {

	var p = PluginManager.parameters("SRD_PKM_TrainerSprite");

	//true = male, false = female
	var gender = String(p["Initial Gender"]).trim().toLowerCase() === "male";
	var maleCharName = String(p["Male Char Name"]);
	var maleCharIndex = Number(p["Male Char Index"]);
	var maleDCharName = String(p["M Dash Char Name"]);
	var maleDCharIndex = Number(p["M Dash Char Index"]);
	var femaleCharName = String(p["Female Char Name"]);
	var femaleCharIndex = Number(p["Female Char Index"]);
	var femaleDCharName = String(p["F Dash Char Name"]);
	var femaleDCharIndex = Number(p["F Dash Char Index"]);

	var maleDashExists = true;
	var femaleDashExists = true;
	if(maleDCharName.trim().length === 0 || !maleDCharIndex) maleDashExists = false;
	if(femaleDCharName.trim().length === 0 || !femaleDCharIndex) femaleDashExists = false;

	Game_Player.prototype.pkmCharacterName = function() {
		if(gender) {
			return (maleDashExists && $gamePlayer.isDashing()) ? maleDCharName : maleCharName;
		} else {
			return (femaleDashExists && $gamePlayer.isDashing()) ? femaleDCharName : femaleCharName;
		}
	};

	Game_Player.prototype.pkmCharacterIndex = function() {
		if(gender) {
			return (maleDashExists && $gamePlayer.isDashing()) ? maleDCharIndex : maleCharIndex;
		} else {
			return (femaleDashExists && $gamePlayer.isDashing()) ? femaleDCharIndex : femaleCharIndex;
		}
	};

	var _Game_Player_updateDashing = Game_Player.prototype.updateDashing;
	Game_Player.prototype.updateDashing = function() {
	    _Game_Player_updateDashing.call(this);
	    $gamePlayer.refresh();
	};

	var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
	Game_Interpreter.prototype.pluginCommand = function(command, args) {
		_Game_Interpreter_pluginCommand.call(this, command, args);

		if(command.trim().toLowerCase() === "settrainersprite") {
			if(args[0].trim().toLowerCase() === "male") gender = true;
			if(args[0].trim().toLowerCase() === "female") gender = false;
			$gamePlayer.refresh();
		}
	};

	var _Sprite_Character_updateBitmap = Sprite_Character.prototype.updateBitmap;
	Sprite_Character.prototype.updateBitmap = function() {
		if(this._character === $gamePlayer) {
		    if (this.isImageChanged()) {
		        this._tilesetId = $gameMap.tilesetId();
		        this._tileId = this._character.tileId();
		        this._characterName = $gamePlayer.pkmCharacterName();
		        this._characterIndex = $gamePlayer.pkmCharacterIndex();
		        if (this._tileId > 0) {
		            this.setTileBitmap();
		        } else {
		            this.setCharacterBitmap();
		        }
		    }
		} else {
			_Sprite_Character_updateBitmap.call(this);
		}
	};

	var _Sprite_Character_isImageChanged = Sprite_Character.prototype.isImageChanged;
	Sprite_Character.prototype.isImageChanged = function() {
		if(this._character === $gamePlayer) {
		    return (this._tilesetId !== $gameMap.tilesetId() ||
		            this._tileId !== this._character.tileId() ||
		            this._characterName !== $gamePlayer.pkmCharacterName() ||
		            this._characterIndex !== $gamePlayer.pkmCharacterIndex());
		} else {
			return _Sprite_Character_isImageChanged.call(this);
		}
	};

	var _Sprite_Character_characterBlockX = Sprite_Character.prototype.characterBlockX;
	Sprite_Character.prototype.characterBlockX = function() {
		if(this._character === $gamePlayer) {
		    if (this._isBigCharacter) {
		        return 0;
		    } else {
		        var index = this._character.pkmCharacterIndex();
		        return index % 4 * 3;
		    }
		} else {
			return _Sprite_Character_characterBlockX.call(this);
		}
	};

	var _Sprite_Character_characterBlockY = Sprite_Character.prototype.characterBlockY;
	Sprite_Character.prototype.characterBlockY = function() {
		if(this._character === $gamePlayer) {
		    if (this._isBigCharacter) {
		        return 0;
		    } else {
		        var index = this._character.pkmCharacterIndex();
		        return Math.floor(index / 4) * 4;
		    }
		} else {
			return _Sprite_Character_characterBlockY.call(this);
		}
	};

})();