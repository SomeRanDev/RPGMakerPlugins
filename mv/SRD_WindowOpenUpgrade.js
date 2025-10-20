/*:
 * @plugindesc Allows you to customize the Window "opening" and "closing" animation.
 * @author SumRndmDde
 *
 * @param Opening Speed
 * @desc The speed in which the Window opens.
 * @default 32
 *
 * @param Closing Speed
 * @desc The speed in which the Window opens.
 * @default 32
 *
 * @param == Formulas ==
 * @default
 *
 * @param X Scale
 * @desc X Scale formula of the Window while it is opening/closing. 
 * Use "open" to reference window's openness.
 * @default 1
 *
 * @param Y Scale
 * @desc Y Scale formula of the Window while it is opening/closing. 
 * Use "open" to reference window's openness.
 * @default open / 255
 *
 * @param X Position
 * @desc X Position formula of the Window when opening/closing. 
 * Use "open" to reference window's openness.
 * @default 0
 *
 * @param Y Position
 * @desc Y Position formula of the Window when opening/closing. 
 * Use "open" to reference window's openness.
 * @default this.height / 2 * (1 - open / 255)
 *
 * @param Opacity
 * @desc Opacity formula of the Window when opening/closing. 
 * Use "open" to reference window's openness.
 * @default 255
 *
 * @param Rotation
 * @desc Rotation formula of the Window when opening/closing. 
 * Use "open" to reference window's openness.
 * @default 0
 *
 * @help
 *
 * Window Open Upgrade
 * Version 1.00
 * SumRndmDde
 *
 *
 * This Plugin that allows you to customize the animation of a Window when 
 * it opens or closes. You can change the speed along with formulas to 
 * manipulate the X/Y Scale, X/Y Position, Opacity, and Rotation.
 *
 *
 * ==========================================================================
 *  How to Use
 * ==========================================================================
 *
 * To start, you can change the opening and closing speed using the first
 * two Parameters. Those values shown will be added or subtracted to the 
 * "openness" of the Window every frame the Window is opening or closing.
 *
 * Second, you can set formulas for all the various aspects of a Window.
 *
 * Each formula uses a variable called "open".
 * This variable is a number from 0 to 255, representing the "openness"
 * of a Window.
 *
 * If 0, the Window is completely closed and invisible.
 * If 255, the Window is completely open and visible.
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

var SRD = SRD || {};
SRD.WindowOpenUpgrade = SRD.WindowOpenUpgrade || {};

var Imported = Imported || {};
Imported["SumRndmDde Window Open Upgrade"] = true;

(function(_) {

	_.open = Number(PluginManager.parameters('SRD_WindowOpenUpgrade')['Opening Speed']);
	_.close = Number(PluginManager.parameters('SRD_WindowOpenUpgrade')['Opening Speed']);
	_.xScale = String(PluginManager.parameters('SRD_WindowOpenUpgrade')['X Scale']);
	_.yScale = String(PluginManager.parameters('SRD_WindowOpenUpgrade')['Y Scale']);
	_.xPos = String(PluginManager.parameters('SRD_WindowOpenUpgrade')['X Position']);
	_.yPos = String(PluginManager.parameters('SRD_WindowOpenUpgrade')['Y Position']);
	_.opacity = String(PluginManager.parameters('SRD_WindowOpenUpgrade')['Opacity']);
	_.rotation = String(PluginManager.parameters('SRD_WindowOpenUpgrade')['Rotation']);

	Object.defineProperty(Window.prototype, 'openness', {
	    get: function() {
	        return this._openness;
	    },
	    set: function(value) {
	        if (this._openness !== value) {
	            this._openness = value.clamp(0, 255);
	            var open = this._openness;
	            this._windowSpriteContainer.scale.y = eval(_.yScale);
	            this._windowSpriteContainer.y = eval(_.yPos);
	            this._windowSpriteContainer.scale.x = eval(_.xScale);
	            this._windowSpriteContainer.x = eval(_.xPos);
	            if(_.opacity.trim() !== "255") {
		            this.opacity = eval(_.opacity);
		            this.backOpacity = eval(_.opacity);
		            this.contentsOpacity = eval(_.opacity);
		        }
		        if(_.rotation.trim() !== "0") {
		        	this.rotation = eval(_.rotation);
		        }
	        }
	    },
	    configurable: true
	});

	Window_Base.prototype.updateOpen = function() {
	    if (this._opening) {
	        this.openness += _.open;
	        if (this.isOpen()) {
	            this._opening = false;
	        }
	    }
	};

	Window_Base.prototype.updateClose = function() {
	    if (this._closing) {
	        this.openness -= _.close;
	        if (this.isClosed()) {
	            this._closing = false;
	        }
	    }
	};

})(SRD.WindowOpenUpgrade);