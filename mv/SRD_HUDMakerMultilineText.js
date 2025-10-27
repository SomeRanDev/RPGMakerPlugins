/*:
 * @plugindesc Adds the "Multiline Text" component to MV HUD Maker!
 * @author SomeRanDev
 *
 * @help
 *
 * HUD Maker Multiline Text
 * Version 1.00
 * SomeRanDev
 *
 *
 * Adds the "Multiline Text" component to MV HUD Maker!
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
 * https://www.youtube.com/@SomeRanDev
 *
 *
 * Until next time,
 *   ~ SomeRanDev
 *
 */

var SRD = SRD || {};
SRD.HUDMakerMultilineText = SRD.HUDMakerMultilineText || {};

var Imported = Imported || {};
Imported["SumRndmDde HUD Maker Multiline Text"] = 1.0;

function Sprite_HUDTextMultiline() {
	this.initialize.apply(this, arguments);
}

(function(_) {

"use strict";

if(!Imported["SumRndmDde HUD Maker"]) {
	alert("The 'SRD_HUDMaker' plugin is required for using the 'SRD_HUDMakerMultilineText' plugin.");
	if(confirm("Do you want to open the download page to 'SRD_HUDMaker'?")) {
		window.open('http://sumrndm.site/hud-maker/');
	}
	return;
}

//-----------------------------------------------------------------------------
// Sprite_HUDTextMultiline
//-----------------------------------------------------------------------------

Sprite_HUDTextMultiline.prototype = Object.create(Sprite_HUDObject.prototype);
Sprite_HUDTextMultiline.prototype.constructor = Sprite_HUDTextMultiline;

Sprite_HUDTextMultiline._label = "Multiline Text";

/*
 * Get HTML for Sprite_HUDTextMultiline manipulation
 */
Sprite_HUDTextMultiline.getHtml = function(data) {
	const value = data["Value"];
	let condition = data["Condition"];
	const layer = data["Layer"];
	const font = data["Font"];
	const width = data["Max Width"];
	const height = data["Max Height"];
	const offsetX = data["Offset X"];
	const align = data["Align"];
	const size 	= data["Font Size"];
	const lineHeight = data["Line Height"];
	const color = data["Text Color"];
	const alpha = data["Text Alpha"];
	const outlineColor = data["Outline Color"];
	const outlineAlpha = data["Outline Alpha"];

	const sele = ['', '', ''];
	if(align === 'left') sele[0] = 'selected';
	else if(align === 'center') sele[1] = 'selected';
	else if(align === 'right') sele[2] = 'selected';

	try {
		eval(condition);
	} catch(e) {
		data["Condition"] = '';
		condition = '';
	}

	return `${HUDManager.createTitle(data.id, Sprite_HUDTextMultiline._label)}
			<table>
				${HUDManager.createHeader()}
				${HUDManager.createInput("Value", value)}
				${HUDManager.createConditionInput("Condition", condition)}
				${HUDManager.createInput("Layer", layer)}
				${HUDManager.createInput("Font", font)}
				${HUDManager.createInput("Max Width", width)}
				${HUDManager.createInput("Max Height", height)}
				${HUDManager.createInput("Offset X", offsetX)}
				${HUDManager.createSelect("Align", ["left", sele[0], "Left"], ["center", sele[1], "Center"], ["right", sele[2], "Right"])}
				${HUDManager.createInput("Font Size", size)}
				${HUDManager.createInput("Line Height", lineHeight)}
				${HUDManager.createColor("Text Color", color, "Text Alpha", alpha)}
				${HUDManager.createColor("Outline Color", outlineColor, "Outline Alpha", outlineAlpha)}
				${HUDManager.createRefresh()}
			</table>`;
};

//_.active

/*
 * Register Sprite_HUDTextMultiline within the HUDManager
 */
HUDManager.typeNames.push(Sprite_HUDTextMultiline._label);
HUDManager.types[Sprite_HUDTextMultiline._label] = {
	class: Sprite_HUDTextMultiline,
	html: Sprite_HUDTextMultiline.getHtml,
	data: {
		"type": 		Sprite_HUDTextMultiline._label,
		"Value": 		"Gold: ${$gameParty.gold()}",
		"Condition": 	"",
		"Layer": 		"0",
		"Font": 		"GameFont",
		"Max Width": 	"150",
		"Max Height": 	"30",
		"Offset X": 	"4",
		"Align": 		"left",
		"Font Size": 	"30",
		"Line Height": 	"30",
		"Text Color": 	"#ffffff",
		"Text Alpha": 	"255",
		"Outline Color":"#000000",
		"Outline Alpha":"127"
	},
	format: function(data) {
		let temp;
		try {
			temp = String(eval("`" + data["Value"] + "`"));
		} catch(e) {
			console.log('Error with Text\n' + e);
			temp = "ERROR";
		}
		if(temp.length > 15) temp = temp.substring(0, 15) + "...";
		return temp;
	}
}

Sprite_HUDTextMultiline.prototype.initialize = function(info) {
	Sprite_HUDObject.prototype.initialize.call(this, new Bitmap(1, 1), info);
	this.properties = ["Layer", "Condition", "Max Width", "Max Height", "Font", "Align", "Font Size", "Line Height",
						"Text Color", "Text Alpha", "Outline Color", "Outline Alpha", "Value"];
	for(let i = 0; i < this.properties.length; i++) {
		const prop = this.properties[i];
		this[prop] = info[prop];
	}
	this._value = this.getNewValue();
	this.refresh(true);
};

Sprite_HUDTextMultiline.prototype.getNewValue = function() {
	let result;
	try {
		result = eval("`" + this["Value"] + "`");
	} catch(e) {
		console.log('Error with Text\n' + e);
		result = "ERROR";
	}
	return result;
};

Sprite_HUDTextMultiline.prototype.update = function() {
	Sprite_HUDObject.prototype.update.call(this);
	if(!this._isVisible) return;
	const newValue = this.getNewValue();
	if(this._value !== newValue) {
		this._value = newValue;
		this.refresh();
	}
};

Sprite_HUDTextMultiline.prototype.refresh = function(refreshProperties) {
	Sprite_HUDObject.prototype.refresh.apply(this, arguments);
	this.bitmap.addLoadListener(function() {
		this.bitmap.clear();

		const pieces = this._value.split("\n");
		for(let i = 0; i < pieces.length; i++) {
			this.bitmap.drawText(pieces[i], this._offsetX, i * this._lineHeight, this.bitmap.width, this._lineHeight + 12, this["Align"]);
		}
		this.setupSnaps();
	}.bind(this));
};

Sprite_HUDTextMultiline.prototype.refreshProperties = function() {
	Sprite_HUDObject.prototype.refreshProperties.apply(this, arguments);
	const bit = this.bitmap;
	const width = parseInt(this["Max Width"]);
	const height = parseInt(this["Max Height"]);
	this.resizeBitmap(bit, width, height);
	this.z = parseInt(this["Layer"]);
	this.bitmap.fontFace = this["Font"];
	this.bitmap.fontSize = parseInt(this["Font Size"]) || 12;
	this.bitmap.textColor = SRD.HUDMaker.convertHex(this["Text Color"], parseInt(this["Text Alpha"]));
	this.bitmap.outlineColor = SRD.HUDMaker.convertHex(this["Outline Color"], parseInt(this["Outline Alpha"]));
	this._lineHeight = parseInt(this["Line Height"]) || this.bitmap.fontSize;
	this._offsetX = parseInt(this["Offset X"]) || 0;
};

})();