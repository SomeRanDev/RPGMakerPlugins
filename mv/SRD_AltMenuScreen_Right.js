/*:
 * @plugindesc Alternative Menu Screen: Similar to the normal menu but oriented to the right.
 * @author SumRndmDde
 * @help
 *
 *
 * Alternative Menu Screen: Right
 * Version 1.00
 * SumRndmDde
 *
 *
 * Gives your game an alternative menu screen.
 * 
 * This one is a copy of the normal menu screen, 
 * but oriented to the right.
 *
 *
 * Until next time,
 *   ~ SumRndmDde
 */

(function() {
	var _Scene_Menu_create = Scene_Menu.prototype.create;
	Scene_Menu.prototype.create = function() {
	    _Scene_Menu_create.call(this);
	    this._statusWindow.x = 0;
	    this._goldWindow.x = this._statusWindow.width;
	    this._commandWindow.x = this._statusWindow.width;
	};
})();