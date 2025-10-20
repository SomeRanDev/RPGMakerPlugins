/*:
 * @plugindesc Pokemon Plugin: Adds the ability to create a special name input for trainers without using an Actor.
 * @author SumRndmDde
 *
 * @param Max Characters
 * @desc The maximum amount of characters allowed to be inputted for a name.
 * @default 10
 *
 * @param Walking Speed
 * @desc The frames before each image of the Player animation on the top left of the name input.
 * @default 20
 *
 * @param === Male ===
 * @default
 *
 * @param Default Male Name
 * @desc The default name that will appear in the male name input.
 * @default Calem
 *
 * @param Male Char File
 * @desc The name of the file of the Male Player character used in the top left of the name input. 
 * @default Actor1
 *
 * @param Male Char Index
 * @desc The index of the Male Player in their file. Input a number between 0 and 7 corresponding to the 8 spots.
 * @default 0
 *
 * @param === Female ===
 * @default
 *
 * @param Default Female Name
 * @desc The default name that will appear in the female name input.
 * @default Serena
 *
 * @param Female Char File
 * @desc The name of the file of the Female Player character used in the top left of the name input. 
 * @default Actor2
 *
 * @param Female Char Index
 * @desc The index of the Female Player in their file. Input a number between 0 and 7 corresponding to the 8 spots.
 * @default 1
 *
 * @help
 *
 * 
 * Pokemon Trainer Name Input
 * Version 1.00
 * SumRndmDde
 *
 * 
 * This Plugin allows you to have a name input screen without an Actor.
 *
 * Using this Plugin, you can call a name input screen to input a name
 * for the Player, and then you can call upon this name through a 
 * text code:
 * \trainer
 *
 * 
 * ==========================================================================
 * How to Use
 * ==========================================================================
 *
 * First set up your Parameters:
 * - Set the maximum amount of characters allowed in the name.
 * - Set the speed of the animation of the character sprite in the top left.
 * - Set up the character sprite file and index for both male and female.
 *
 *
 * Once you have done this, you can use the following Plugin Commands 
 * to call upon the name input screen:
 *
 * InputTrainerName Male
 *
 * InputTrainerName Female
 *
 *
 * Both store the name in the same place, the only difference is the 
 * character sprite displayed in the top left corner and the default
 * name given.
 *
 *
 * In order to have the trainer's name appear in a Show Text event, you 
 * can use the text code:
 * 
 * \trainer
 *
 *
 * ==========================================================================
 *  Extra Features
 * ==========================================================================
 *
 * If you want to force the trainer's name to be something specific,
 * you can use the Plugin Command:
 *
 * SetTrainerName name
 *
 * Replace "name" with the name you wish to set.
 *
 * This can be used to create a list of default names the Player can select
 * from as an alternative to creating their own name.
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
 */

(function() {

    var maxCharacters = Number(PluginManager.parameters('SRD_PKM_TrainerName')['Max Characters']);
    var walkingSpeed = Number(PluginManager.parameters('SRD_PKM_TrainerName')['Walking Speed']);

    var maleName = String(PluginManager.parameters('SRD_PKM_TrainerName')['Default Male Name']);
    var maleCharFile = String(PluginManager.parameters('SRD_PKM_TrainerName')['Male Char File']);
    var maleCharIndex = Number(PluginManager.parameters('SRD_PKM_TrainerName')['Male Char Index']);
    var femaleName = String(PluginManager.parameters('SRD_PKM_TrainerName')['Default Female Name']);
    var femaleCharFile = String(PluginManager.parameters('SRD_PKM_TrainerName')['Female Char File']);
    var femaleCharIndex = Number(PluginManager.parameters('SRD_PKM_TrainerName')['Female Char Index']);

    var tempGender = true;

    var _Game_System_initialize = Game_System.prototype.initialize;
    Game_System.prototype.initialize = function() {
        _Game_System_initialize.call(this);
        this._pkmPlayerName = "Trainer";
    };

    Game_System.prototype.setPKMPlayerName = function(name) {
        this._pkmPlayerName = name;
    };

    Game_System.prototype.getPKMPlayerName = function() {
        return this._pkmPlayerName;
    };

    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);

        if(command.toLowerCase() === "inputtrainername") {
            if(args[0].trim().toLowerCase() === "male") {
                SceneManager.push(Scene_PKMName);
                tempGender = true;
            } else if(args[0].trim().toLowerCase() === "female") {
                SceneManager.push(Scene_PKMName);
                tempGender = false;
            }
        } else if(command.toLowerCase() === "settrainername") {
            $gameSystem.setPKMPlayerName(String(args[0]));
        }
    };

    var _Window_Base_convertEscapeCharacters = Window_Base.prototype.convertEscapeCharacters;
    Window_Base.prototype.convertEscapeCharacters = function(text) {
            text = _Window_Base_convertEscapeCharacters.call(this, text);
            text = this.convertPKMNameEscapeCharacters(text);
            return text;
    };

    Window_Base.prototype.convertPKMNameEscapeCharacters = function(text) {
        // \trainer
        text = text.replace(/\x1bTRAINER/gi, $gameSystem.getPKMPlayerName());
        return text;
    };

    //-------------------------------------------------------------------------
    // Scene_PKMName
    //-------------------------------------------------------------------------


    function Scene_PKMName() {
        this.initialize.apply(this, arguments);
    }

    Scene_PKMName.prototype = Object.create(Scene_MenuBase.prototype);
    Scene_PKMName.prototype.constructor = Scene_PKMName;

    Scene_PKMName.prototype.initialize = function() {
        Scene_MenuBase.prototype.initialize.call(this);
    };

    Scene_PKMName.prototype.create = function() {
        Scene_MenuBase.prototype.create.call(this);
        this._actor = $gameActors.actor(this._actorId);
        this._gender = tempGender;
        this.createEditWindow();
        this.createInputWindow();
    };

    Scene_PKMName.prototype.start = function() {
        Scene_MenuBase.prototype.start.call(this);
        this._editWindow.refresh();
    };

    Scene_PKMName.prototype.createEditWindow = function() {
        this._editWindow = new Window_PKMNameEdit(this._gender, maxCharacters);
        this.addWindow(this._editWindow);
    };

    Scene_PKMName.prototype.createInputWindow = function() {
        this._inputWindow = new Window_NameInput(this._editWindow);
        this._inputWindow.setHandler('ok', this.onInputOk.bind(this));
        this.addWindow(this._inputWindow);
    };

    Scene_PKMName.prototype.onInputOk = function() {
        $gameSystem.setPKMPlayerName(this._editWindow.name());
        this.popScene();
    };

    //-------------------------------------------------------------------------
    // Window_PKMNameEdit
    //-------------------------------------------------------------------------

    function Window_PKMNameEdit() {
        this.initialize.apply(this, arguments);
    }

    Window_PKMNameEdit.prototype = Object.create(Window_Base.prototype);
    Window_PKMNameEdit.prototype.constructor = Window_PKMNameEdit;

    Window_PKMNameEdit.prototype.initialize = function(gender, maxLength) {
        var width = this.windowWidth();
        var height = this.windowHeight();
        var x = (Graphics.boxWidth - width) / 2;
        var y = (Graphics.boxHeight - (height + this.fittingHeight(9) + 8)) / 2;
        Window_Base.prototype.initialize.call(this, x, y, width, height);
        this._name = gender ? maleName : femaleName;
        this._index = this._name.length;
        this._maxLength = maxLength;
        this._defaultName = this._name;
        this.deactivate();
        this.refresh();

        this._gender = gender;

        this._timer = 0;
        this._frame = 0;
        this._speed = walkingSpeed;
    };

    Window_PKMNameEdit.prototype.windowWidth = function() {
        return 480;
    };

    Window_PKMNameEdit.prototype.windowHeight = function() {
        return this.fittingHeight(4);
    };

    Window_PKMNameEdit.prototype.name = function() {
        return this._name;
    };

    Window_PKMNameEdit.prototype.restoreDefault = function() {
        this._name = this._defaultName;
        this._index = this._name.length;
        this.refresh();
        return this._name.length > 0;
    };

    Window_PKMNameEdit.prototype.add = function(ch) {
        if (this._index < this._maxLength) {
            this._name += ch;
            this._index++;
            this.refresh();
            return true;
        } else {
            return false;
        }
    };

    Window_PKMNameEdit.prototype.back = function() {
        if (this._index > 0) {
            this._index--;
            this._name = this._name.slice(0, this._index);
            this.refresh();
            return true;
        } else {
            return false;
        }
    };

    Window_PKMNameEdit.prototype.faceWidth = function() {
        return 144;
    };

    Window_PKMNameEdit.prototype.charWidth = function() {
        var text = $gameSystem.isJapanese() ? '\uff21' : 'A';
        return this.textWidth(text);
    };

    Window_PKMNameEdit.prototype.left = function() {
        var nameCenter = (this.contentsWidth() + this.faceWidth()) / 2;
        var nameWidth = (this._maxLength + 1) * this.charWidth();
        return Math.min(nameCenter - nameWidth / 2, this.contentsWidth() - nameWidth);
    };

    Window_PKMNameEdit.prototype.itemRect = function(index) {
        return {
            x: this.left() + index * this.charWidth(),
            y: 54,
            width: this.charWidth(),
            height: this.lineHeight()
        };
    };

    Window_PKMNameEdit.prototype.underlineRect = function(index) {
        var rect = this.itemRect(index);
        rect.x++;
        rect.y += rect.height - 4;
        rect.width -= 2;
        rect.height = 2;
        return rect;
    };

    Window_PKMNameEdit.prototype.underlineColor = function() {
        return this.textColor(21);//this.normalColor();
    };

    Window_PKMNameEdit.prototype.drawUnderline = function(index) {
        var rect = this.underlineRect(index);
        var color = this.underlineColor();
        this.contents.paintOpacity = 48;
        this.contents.fillRect(rect.x, rect.y, rect.width, rect.height, color);
        this.contents.paintOpacity = 255;
    };

    Window_PKMNameEdit.prototype.drawChar = function(index) {
        var rect = this.itemRect(index);
        this.resetTextColor();
        this.drawText(this._name[index] || '', rect.x, rect.y);
    };

    Window_PKMNameEdit.prototype.update = function() {
        this.refresh();
    }

    Window_PKMNameEdit.prototype.drawThingy = function() {
        var bitmap = ImageManager.loadCharacter(this._gender ? maleCharFile : femaleCharFile);
        var big = ImageManager.isBigCharacter(this._gender ? maleCharFile : femaleCharFile);
        var pw = bitmap.width / (big ? 3 : 12);
        var ph = bitmap.height / (big ? 4 : 8);
        var n = this._gender ? maleCharIndex : femaleCharIndex;
        var sx = (n % 4 * 3 + 1) * pw;
        var sy = (Math.floor(n / 4) * 4) * ph;
        this.contents.blt(bitmap, sx + this._frame, sy, pw, ph, 80 - pw / 2, 100 - ph);

        this._timer += 1;
        if(this._timer == this._speed) this._frame = 48;
        if(this._timer == this._speed * 2) this._frame = 0;
        if(this._timer == this._speed * 3) this._frame = -48;
        if(this._timer == this._speed * 4) {
            this._timer = 0;
            this._frame = 0;
        }
    };

    Window_PKMNameEdit.prototype.refresh = function() {
        this.contents.clear();
        this.drawThingy();

        for (var i = 0; i < this._maxLength; i++) {
            this.drawUnderline(i);
        }
        for (var j = 0; j < this._name.length; j++) {
            this.drawChar(j);
        }
        var rect = this.itemRect(this._index);
        this.setCursorRect(rect.x, rect.y, rect.width, rect.height);
    };

})();