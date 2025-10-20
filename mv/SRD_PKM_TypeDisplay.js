/*:
 * @plugindesc Pokemon Plugin: Displays the Elements assigned to the Actor in their status. (Requires SRD_PKM_TypeSystem)
 * @author SumRndmDde
 *
 * @param No Element Text
 * @desc This will be the text that displays if the Actor does not have any Elements assigned to them.
 * @default None
 *
 * @param Element 1 Color
 * @desc The color of the text displaying Element ID 1. Uses RPG Maker window.png color codes (0, 2, 5, etc).
 * @default 0
 *
 * @param Element 2 Color
 * @desc The color of the text displaying Element ID 2. Uses RPG Maker window.png color codes (0, 2, 5, etc).
 * @default 3
 *
 * @param Element 3 Color
 * @desc The color of the text displaying Element ID 3. Uses RPG Maker window.png color codes (0, 2, 5, etc).
 * @default 1
 *
 * @param Element 4 Color
 * @desc The color of the text displaying Element ID 4. Uses RPG Maker window.png color codes (0, 2, 5, etc).
 * @default 2
 *
 * @param Element 5 Color
 * @desc The color of the text displaying Element ID 5. Uses RPG Maker window.png color codes (0, 2, 5, etc).
 * @default 14
 *
 * @param Element 6 Color
 * @desc The color of the text displaying Element ID 6. Uses RPG Maker window.png color codes (0, 2, 5, etc).
 * @default 11 
 *
 * @param Element 7 Color
 * @desc The color of the text displaying Element ID 7. Uses RPG Maker window.png color codes (0, 2, 5, etc).
 * @default 22
 *
 * @param Element 8 Color
 * @desc The color of the text displaying Element ID 8. Uses RPG Maker window.png color codes (0, 2, 5, etc).
 * @default 8
 *
 * @param Element 9 Color
 * @desc The color of the text displaying Element ID 9. Uses RPG Maker window.png color codes (0, 2, 5, etc).
 * @default 4
 *
 * @param Element 10 Color
 * @desc The color of the text displaying Element ID 10. Uses RPG Maker window.png color codes (0, 2, 5, etc).
 * @default 21
 *
 * @param Element 11 Color
 * @desc The color of the text displaying Element ID 11. Uses RPG Maker window.png color codes (0, 2, 5, etc).
 * @default 20
 *
 * @param Element 12 Color
 * @desc The color of the text displaying Element ID 12. Uses RPG Maker window.png color codes (0, 2, 5, etc).
 * @default 7
 *
 * @param Element 13 Color
 * @desc The color of the text displaying Element ID 13. Uses RPG Maker window.png color codes (0, 2, 5, etc).
 * @default 30
 *
 * @param Element 14 Color
 * @desc The color of the text displaying Element ID 14. Uses RPG Maker window.png color codes (0, 2, 5, etc).
 * @default 25
 *
 * @param Element 15 Color
 * @desc The color of the text displaying Element ID 15. Uses RPG Maker window.png color codes (0, 2, 5, etc).
 * @default 19
 *
 * @param Element 16 Color
 * @desc The color of the text displaying Element ID 16. Uses RPG Maker window.png color codes (0, 2, 5, etc).
 * @default 15
 *
 * @param Element 17 Color
 * @desc The color of the text displaying Element ID 17. Uses RPG Maker window.png color codes (0, 2, 5, etc).
 * @default 10
 *
 * @param Element 18 Color
 * @desc The color of the text displaying Element ID 18. Uses RPG Maker window.png color codes (0, 2, 5, etc).
 * @default 27
 *
 * @param Element 19 Color
 * @desc The color of the text displaying Element ID 19. Uses RPG Maker window.png color codes (0, 2, 5, etc).
 * @default
 *
 * @param Element 20 Color
 * @desc The color of the text displaying Element ID 20. Uses RPG Maker window.png color codes (0, 2, 5, etc).
 * @default
 *
 * @param Element 21 Color
 * @desc The color of the text displaying Element ID 21. Uses RPG Maker window.png color codes (0, 2, 5, etc).
 * @default
 *
 * @param Element 22 Color
 * @desc The color of the text displaying Element ID 22. Uses RPG Maker window.png color codes (0, 2, 5, etc).
 * @default
 *
 * @param Element 23 Color
 * @desc The color of the text displaying Element ID 23. Uses RPG Maker window.png color codes (0, 2, 5, etc).
 * @default
 *
 * @param Element 24 Color
 * @desc The color of the text displaying Element ID 24. Uses RPG Maker window.png color codes (0, 2, 5, etc).
 * @default
 *
 * @param Element 25 Color
 * @desc The color of the text displaying Element ID 25. Uses RPG Maker window.png color codes (0, 2, 5, etc).
 * @default
 *
 * @param Element 26 Color
 * @desc The color of the text displaying Element ID 26. Uses RPG Maker window.png color codes (0, 2, 5, etc).
 * @default
 *
 * @param Element 27 Color
 * @desc The color of the text displaying Element ID 27. Uses RPG Maker window.png color codes (0, 2, 5, etc).
 * @default
 *
 * @param Element 28 Color
 * @desc The color of the text displaying Element ID 28. Uses RPG Maker window.png color codes (0, 2, 5, etc).
 * @default
 *
 * @param Element 29 Color
 * @desc The color of the text displaying Element ID 29. Uses RPG Maker window.png color codes (0, 2, 5, etc).
 * @default
 *
 * @param Element 30 Color
 * @desc The color of the text displaying Element ID 30. Uses RPG Maker window.png color codes (0, 2, 5, etc).
 * @default
 *
 * @help
 *
 *
 * Pokemon Type Display
 * Version 1.00
 * SumRndmDde
 *
 * 
 * This is an extension Plugin for SRD_PKM_TypeSystem.
 * 
 *
 * ==========================================================================
 * Explanation
 * ==========================================================================
 *
 * This Plugin displays the Elements that have been assigned to an Actor
 * using the SRD_PKM_TypeSystem.
 *
 * Instead of showing the Actor's Class, this Plugin overrides that and
 * shows the first two Elements assigned to the Actor.
 *
 * If there's only one Element, it will show only one.
 *
 * This does not include Elements given through States.
 *
 *
 * ==========================================================================
 * Parameters
 * ==========================================================================
 *
 * Using the Parameters, you can input color codes to customize the color
 * of the text of an Element when it is displayed.
 *
 * This uses the colors from the window.png, and is the same as using the 
 * \c[x] text code in shown text. Simply input the 'x' into the Parameter
 * to give it that specific color.
 *
 * This Plugin starts with the recommended Element color codes based
 * on the default Elements given in the Type System (SRD_PKM_TypeSystem) 
 * Plugin.
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
SRD.PKM = SRD.PKM || {};
SRD.PKM.TypeDisplay = {};

var Imported = Imported || {};
Imported.SRD_PKM_TypeDisplay = true;

SRD.PKM.TypeDisplay.noElementText = String(PluginManager.parameters('SRD_PKM_TypeDisplay')['No Element Text']);

SRD.PKM.TypeDisplay.elementColors = [];
SRD.PKM.TypeDisplay.elementColors[0] = 0;
for(var i = 1; i <= 30; i++) {
	SRD.PKM.TypeDisplay.elementColors[i] = Number(PluginManager.parameters('SRD_PKM_TypeDisplay')['Element ' + i + ' Color']);
}

if(Imported.SRD_PKM_TypeSystem) {

	Window_Base.prototype.drawActorClass = function(actor, x, y, width) {
	    width = width || 168;
	    if(actor.actor().PKMElements) {
	    	var types = actor.actor().PKMElements;
	    	this.changeTextColor(this.textColor(SRD.PKM.TypeDisplay.elementColors[types[0]]));
		    this.drawText($dataSystem.elements[types[0]], x, y, width / 2, 'left');
		    if(types[1]) {
		    	var txtW = this.textWidth($dataSystem.elements[types[0]]);
		    	if(txtW >= width / 2) txtW = width / 2;
		    	this.resetTextColor();
		    	this.drawText("/", x + txtW, y);
		    	txtW = txtW + this.textWidth("/");
		    	this.changeTextColor(this.textColor(SRD.PKM.TypeDisplay.elementColors[types[1]]));
		    	this.drawText($dataSystem.elements[types[1]], x + txtW, y, width / 2, 'left');
		    }
	    } else {
	    	this.resetTextColor();
		    this.drawText(SRD.PKM.TypeDisplay.noElementText, x, y, width, 'left');
	    } 
	};

} else {
	alert("Hello! There is an error!");
	alert("Currently, you have SRD_PKM_TypeDisplay installed; this Plugin is an extension Plugin to SRD_PKM_TypeSystem.");
	alert("Either you don't have SRD_PKM_TypeSystem, or you don't have the latest version of it.");
	if(confirm("Would you like me to open a webpage to download the most recent version of SRD_PKM_TypeSystem?")) {
		window.open("https://sumrndmdde.wordpress.com/2016/04/05/pokemon-types-system/", "_blank");
	}
	window.close();
}