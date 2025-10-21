/*:
 * @plugindesc Alternative Menu Screen: shows only Actor faces for Actor menu displays and gives more room for larger parties.
 * @author SumRndmDde
 *
 * @param Face Padding
 * @desc This is the amount of padding surrounding the Actor's face.
 * @default 20
 *
 * @param Face X
 * @desc The x position of the face image within its selection box.
 * @default 10
 *
 * @param Face Y
 * @desc The y position of the face image within its selection box.
 * @default 10
 *
 * @param Max Status Rows
 * @desc The maximum amount of rows the Actor select in the menu can have.
 * @default 2
 *
 * @param Max Status Cols
 * @desc The maximum amount of columns the Actor select in the menu can have.
 * @default 4
 *
 * @param Command Columns
 * @desc The max amount of columns in the command selector within the menu. 
 * @default 4
 *
 * @param Command Rows
 * @desc The amount of visible rows in the command selector within the menu. 
 * @default 2
 *
 * @help
 *
 *
 * Alternative Menu Screen: Face
 * Version 1.00
 * SumRndmDde
 *
 *
 * Gives your game an alternative menu screen.
 * 
 * This one shows only Actor faces for Actor menu displays 
 * and gives more room for larger parties.
 *
 *
 * Until next time,
 *   ~ SumRndmDde
 */

(function() {
	var sumFacePadding = Number(PluginManager.parameters('SRD_AltMenuScreen_Face')['Face Padding']);
	var sumX = Number(PluginManager.parameters('SRD_AltMenuScreen_Face')['Face X']);
	var sumY = Number(PluginManager.parameters('SRD_AltMenuScreen_Face')['Face Y']);
	var sumMaxRows = Number(PluginManager.parameters('SRD_AltMenuScreen_Face')['Max Status Rows']);
	var sumMaxCols = Number(PluginManager.parameters('SRD_AltMenuScreen_Face')['Max Status Cols']);
	var sumColumns = Number(PluginManager.parameters('SRD_AltMenuScreen_Face')['Command Columns']);
	var sumRows = Number(PluginManager.parameters('SRD_AltMenuScreen_Face')['Command Rows']);

	var _Scene_Menu_create = Scene_Menu.prototype.create;
	Scene_Menu.prototype.create = function() {
	    _Scene_Menu_create.call(this);
	    this._goldWindow.x = (Graphics.width / 2) - (this._goldWindow.width / 2);
	    this._goldWindow.y = 0;
	    this._statusWindow.x = (Graphics.width / 2) - (this._statusWindow.width / 2);
		this._statusWindow.y = this._goldWindow.height;
		this._commandWindow.x = 0;
		this._commandWindow.y = Graphics.height - this._commandWindow.height;
	};
	Window_MenuCommand.prototype.windowWidth = function() {
	    return Graphics.width;
	};
	Window_MenuCommand.prototype.maxCols = function() {
	    return sumColumns;
	};
	Window_MenuCommand.prototype.numVisibleRows = function() {
	    return sumRows;
	};
	Window_MenuStatus.prototype.windowWidth = function() {
		var l = Math.min(this.maxItems(), this.maxCols());
	    return (l * this.itemWidth()) + (this.standardPadding() * 2) + (this.textPadding() * l * 2) - (this.textPadding() * 2);
	};
	Window_MenuStatus.prototype.windowHeight = function() {
	    return (this.itemHeight() * this.numVisibleRows()) + (this.standardPadding() * 2);
	};
	Window_MenuStatus.prototype.numVisibleRows = function() {
		var rows = Math.floor((this.maxItems() - 1) / this.maxCols()) + 1;
		return Math.min(rows, sumMaxRows);
	};
	Window_MenuStatus.prototype.maxCols = function() {
	    return Math.min(this.maxItems(), sumMaxCols);
	};
	Window_MenuStatus.prototype.drawItem = function(index) {
	    this.drawItemBackground(index);
	    this.drawItemImage(index);
	};
	Window_MenuStatus.prototype.itemHeight = function() {
	    return Window_Base._faceHeight + sumFacePadding;
	};
	Window_MenuStatus.prototype.itemWidth = function() {
	    return Window_Base._faceWidth + sumFacePadding;
	};
	Window_MenuStatus.prototype.drawItemImage = function(index) {
	    var actor = $gameParty.members()[index];
	    var rect = this.itemRect(index);
	    this.changePaintOpacity(actor.isBattleMember());
	    this.drawActorFace(actor, rect.x + sumX, rect.y + sumY, Window_Base._faceWidth, Window_Base._faceHeight);
	    this.changePaintOpacity(true);
	};
})();