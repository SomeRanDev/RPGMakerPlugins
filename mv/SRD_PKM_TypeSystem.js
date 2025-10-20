/*:
 * @plugindesc Pokemon Plugin: Adds the Pokemon type system to your game using RPG Maker MV's elements.
 * @author SumRndmDde
 * 
 * @param No Default System?
 * @desc Setting to 'true' removes the default elemental rates from calculation. Otherwise, they will be combined with PKM.
 * @default false
 *
 * @param STAB Multiplier
 * @desc If an Actor uses a Skill with the same Element as their own, then the damage will be multiplied by this value.
 * @default 1.5
 *
 * @param == Battelog Messages ==
 * @default
 *
 * @param x4 Effectiveness
 * @desc This is the Battlelog message that will appear when a Skill is x4 effective.
 * @default It was super effective!
 *
 * @param x2 Effectiveness
 * @desc This is the Battlelog message that will appear when a Skill is x2 effective.
 * @default It was super effective!
 *
 * @param x0.5 Effectiveness
 * @desc This is the Battlelog message that will appear when a Skill is x0.5 effective.
 * @default It was not very effective...
 *
 * @param x0.25 Effectiveness
 * @desc This is the Battlelog message that will appear when a Skill is x0.25 effective.
 * @default It was not very effective...
 *
 * @param No Effect
 * @desc This is the Battlelog message that will appear when a Skill has no effect.
 * @default There was no effect.
 *
 * @param === Element 1  ===
 * @default
 *
 * @param E1 Super Effect
 * @desc A list of all of the element IDs that Element 1 is Super Effective against..
 * @default
 *
 * @param E1 NotVery Effect
 * @desc A list of all of the element IDs that Element 1 is Not Very Effective against.
 * @default 10, 12
 *
 * @param E1 No Effect
 * @desc A list of all of the element IDs that Element 1 has No Effect against.
 * @default 15
 *
 * @param === Element 2  ===
 * @default
 *
 * @param E2 Super Effect
 * @desc A list of all of the element IDs that Element 2 is Super Effective against..
 * @default 3, 10, 11
 *
 * @param E2 NotVery Effect
 * @desc A list of all of the element IDs that Element 2 is Not Very Effective against.
 * @default 2, 4, 6, 8, 12, 13, 17
 *
 * @param E2 No Effect
 * @desc A list of all of the element IDs that Element 2 has No Effect against.
 * @default
 *
 * @param === Element 3  ===
 * @default
 *
 * @param E3 Super Effect
 * @desc A list of all of the element IDs that Element 3 is Super Effective against..
 * @default 4, 11, 10
 *
 * @param E3 NotVery Effect
 * @desc A list of all of the element IDs that Element 3 is Not Very Effective against.
 * @default 2, 3, 17
 *
 * @param E3 No Effect
 * @desc A list of all of the element IDs that Element 3 has No Effect against.
 * @default
 *
 * @param === Element 4  ===
 * @default
 *
 * @param E4 Super Effect
 * @desc A list of all of the element IDs that Element 4 is Super Effective against..
 * @default 2, 6, 9, 12
 *
 * @param E4 NotVery Effect
 * @desc A list of all of the element IDs that Element 4 is Not Very Effective against.
 * @default 3, 4, 10, 17
 *
 * @param E4 No Effect
 * @desc A list of all of the element IDs that Element 4 has No Effect against.
 * @default
 *
 * @param === Element 5  ===
 * @default
 *
 * @param E5 Super Effect
 * @desc A list of all of the element IDs that Element 5 is Super Effective against..
 * @default 3, 8
 *
 * @param E5 NotVery Effect
 * @desc A list of all of the element IDs that Element 5 is Not Very Effective against.
 * @default 2, 5, 17
 *
 * @param E5 No Effect
 * @desc A list of all of the element IDs that Element 5 has No Effect against.
 * @default 11
 *
 * @param === Element 6  ===
 * @default
 *
 * @param E6 Super Effect
 * @desc A list of all of the element IDs that Element 6 is Super Effective against..
 * @default 2, 14, 16
 *
 * @param E6 NotVery Effect
 * @desc A list of all of the element IDs that Element 6 is Not Very Effective against.
 * @default 4, 7, 8, 12, 13, 15, 18
 *
 * @param E6 No Effect
 * @desc A list of all of the element IDs that Element 6 has No Effect against.
 * @default
 *
 * @param === Element 7  ===
 * @default
 *
 * @param E7 Super Effect
 * @desc A list of all of the element IDs that Element 7 is Super Effective against..
 * @default 1, 9, 10, 16, 12
 *
 * @param E7 NotVery Effect
 * @desc A list of all of the element IDs that Element 7 is Not Very Effective against.
 * @default 6, 8, 13, 14, 18
 *
 * @param E7 No Effect
 * @desc A list of all of the element IDs that Element 7 has No Effect against.
 * @default
 *
 * @param === Element 8  ===
 * @default
 *
 * @param E8 Super Effect
 * @desc A list of all of the element IDs that Element 8 is Super Effective against..
 * @default 2, 6, 7
 *
 * @param E8 NotVery Effect
 * @desc A list of all of the element IDs that Element 8 is Not Very Effective against.
 * @default 5, 10, 12
 *
 * @param E8 No Effect
 * @desc A list of all of the element IDs that Element 8 has No Effect against.
 * @default
 *
 * @param === Element 9  ===
 * @default
 *
 * @param E9 Super Effect
 * @desc A list of all of the element IDs that Element 9 is Super Effective against..
 * @default 2, 8, 11, 17
 *
 * @param E9 NotVery Effect
 * @desc A list of all of the element IDs that Element 9 is Not Very Effective against.
 * @default 3, 4, 9, 12
 *
 * @param E9 No Effect
 * @desc A list of all of the element IDs that Element 9 has No Effect against.
 * @default
 *
 * @param === Element 10  ===
 * @default
 *
 * @param E10 Super Effect
 * @desc A list of all of the element IDs that Element 10 is Super Effective against..
 * @default 4, 6, 9, 8
 *
 * @param E10 NotVery Effect
 * @desc A list of all of the element IDs that Element 10 is Not Very Effective against.
 * @default 7, 11, 12
 *
 * @param E10 No Effect
 * @desc A list of all of the element IDs that Element 10 has No Effect against.
 * @default
 *
 * @param === Element 11  ===
 * @default
 *
 * @param E11 Super Effect
 * @desc A list of all of the element IDs that Element 11 is Super Effective against..
 * @default 4, 5, 10, 12, 13
 *
 * @param E11 NotVery Effect
 * @desc A list of all of the element IDs that Element 11 is Not Very Effective against.
 * @default 2, 6
 *
 * @param E11 No Effect
 * @desc A list of all of the element IDs that Element 11 has No Effect against.
 * @default 8
 *
 * @param === Element 12  ===
 * @default
 *
 * @param E12 Super Effect
 * @desc A list of all of the element IDs that Element 12 is Super Effective against..
 * @default 9, 10, 18
 *
 * @param E12 NotVery Effect
 * @desc A list of all of the element IDs that Element 12 is Not Very Effective against.
 * @default 3, 4, 5, 12
 *
 * @param E12 No Effect
 * @desc A list of all of the element IDs that Element 12 has No Effect against.
 * @default
 *
 * @param === Element 13  ===
 * @default
 *
 * @param E13 Super Effect
 * @desc A list of all of the element IDs that Element 13 is Super Effective against..
 * @default 2, 18
 *
 * @param E13 NotVery Effect
 * @desc A list of all of the element IDs that Element 13 is Not Very Effective against.
 * @default 10, 11, 13, 15
 *
 * @param E13 No Effect
 * @desc A list of all of the element IDs that Element 13 has No Effect against.
 * @default
 *
 * @param === Element 14  ===
 * @default
 *
 * @param E14 Super Effect
 * @desc A list of all of the element IDs that Element 14 is Super Effective against..
 * @default 7, 13
 *
 * @param E14 NotVery Effect
 * @desc A list of all of the element IDs that Element 14 is Not Very Effective against.
 * @default 12, 14
 *
 * @param E14 No Effect
 * @desc A list of all of the element IDs that Element 14 has No Effect against.
 * @default 16
 *
 * @param === Element 15  ===
 * @default
 *
 * @param E15 Super Effect
 * @desc A list of all of the element IDs that Element 15 is Super Effective against..
 * @default 14, 15
 *
 * @param E15 NotVery Effect
 * @desc A list of all of the element IDs that Element 15 is Not Very Effective against.
 * @default 16
 *
 * @param E15 No Effect
 * @desc A list of all of the element IDs that Element 15 has No Effect against.
 * @default 1
 *
 * @param === Element 16  ===
 * @default
 *
 * @param E16 Super Effect
 * @desc A list of all of the element IDs that Element 16 is Super Effective against..
 * @default 14, 15
 *
 * @param E16 NotVery Effect
 * @desc A list of all of the element IDs that Element 16 is Not Very Effective against.
 * @default 7, 16, 18
 *
 * @param E16 No Effect
 * @desc A list of all of the element IDs that Element 16 has No Effect against.
 * @default
 *
 * @param === Element 17  ===
 * @default
 *
 * @param E17 Super Effect
 * @desc A list of all of the element IDs that Element 17 is Super Effective against..
 * @default 17
 *
 * @param E17 NotVery Effect
 * @desc A list of all of the element IDs that Element 17 is Not Very Effective against.
 * @default 12
 *
 * @param E17 No Effect
 * @desc A list of all of the element IDs that Element 17 has No Effect against.
 * @default 18
 *
 * @param === Element 18  ===
 * @default
 *
 * @param E18 Super Effect
 * @desc A list of all of the element IDs that Element 18 is Super Effective against..
 * @default 7, 16, 17
 *
 * @param E18 NotVery Effect
 * @desc A list of all of the element IDs that Element 18 is Not Very Effective against.
 * @default 4, 12, 13
 *
 * @param E18 No Effect
 * @desc A list of all of the element IDs that Element 18 has No Effect against.
 * @default
 *
 * @param === Element 19  ===
 * @default
 *
 * @param E19 Super Effect
 * @desc A list of all of the element IDs that Element 19 is Super Effective against..
 * @default
 *
 * @param E19 NotVery Effect
 * @desc A list of all of the element IDs that Element 19 is Not Very Effective against.
 * @default
 *
 * @param E19 No Effect
 * @desc A list of all of the element IDs that Element 19 has No Effect against.
 * @default
 *
 * @param === Element 20  ===
 * @default
 *
 * @param E20 Super Effect
 * @desc A list of all of the element IDs that Element 20 is Super Effective against..
 * @default
 *
 * @param E20 NotVery Effect
 * @desc A list of all of the element IDs that Element 20 is Not Very Effective against.
 * @default
 *
 * @param E20 No Effect
 * @desc A list of all of the element IDs that Element 20 has No Effect against.
 * @default
 *
 * @param === Element 21  ===
 * @default
 *
 * @param E21 Super Effect
 * @desc A list of all of the element IDs that Element 21 is Super Effective against..
 * @default
 *
 * @param E21 NotVery Effect
 * @desc A list of all of the element IDs that Element 21 is Not Very Effective against.
 * @default
 *
 * @param E21 No Effect
 * @desc A list of all of the element IDs that Element 21 has No Effect against.
 * @default
 *
 * @param === Element 22  ===
 * @default
 *
 * @param E22 Super Effect
 * @desc A list of all of the element IDs that Element 22 is Super Effective against..
 * @default
 *
 * @param E22 NotVery Effect
 * @desc A list of all of the element IDs that Element 22 is Not Very Effective against.
 * @default
 *
 * @param E22 No Effect
 * @desc A list of all of the element IDs that Element 22 has No Effect against.
 * @default
 *
 * @param === Element 23  ===
 * @default
 *
 * @param E23 Super Effect
 * @desc A list of all of the element IDs that Element 23 is Super Effective against..
 * @default
 *
 * @param E23 NotVery Effect
 * @desc A list of all of the element IDs that Element 23 is Not Very Effective against.
 * @default
 *
 * @param E23 No Effect
 * @desc A list of all of the element IDs that Element 23 has No Effect against.
 * @default
 *
 * @param === Element 24  ===
 * @default
 *
 * @param E24 Super Effect
 * @desc A list of all of the element IDs that Element 24 is Super Effective against..
 * @default
 *
 * @param E24 NotVery Effect
 * @desc A list of all of the element IDs that Element 24 is Not Very Effective against.
 * @default
 *
 * @param E24 No Effect
 * @desc A list of all of the element IDs that Element 24 has No Effect against.
 * @default
 *
 * @param === Element 25  ===
 * @default
 *
 * @param E25 Super Effect
 * @desc A list of all of the element IDs that Element 25 is Super Effective against..
 * @default
 *
 * @param E25 NotVery Effect
 * @desc A list of all of the element IDs that Element 25 is Not Very Effective against.
 * @default
 *
 * @param E25 No Effect
 * @desc A list of all of the element IDs that Element 25 has No Effect against.
 * @default
 *
 * @param === Element 26  ===
 * @default
 *
 * @param E26 Super Effect
 * @desc A list of all of the element IDs that Element 26 is Super Effective against..
 * @default
 *
 * @param E26 NotVery Effect
 * @desc A list of all of the element IDs that Element 26 is Not Very Effective against.
 * @default
 *
 * @param E26 No Effect
 * @desc A list of all of the element IDs that Element 26 has No Effect against.
 * @default
 *
 * @param === Element 27  ===
 * @default
 *
 * @param E27 Super Effect
 * @desc A list of all of the element IDs that Element 27 is Super Effective against..
 * @default
 *
 * @param E27 NotVery Effect
 * @desc A list of all of the element IDs that Element 27 is Not Very Effective against.
 * @default
 *
 * @param E27 No Effect
 * @desc A list of all of the element IDs that Element 27 has No Effect against.
 * @default
 *
 * @param === Element 28  ===
 * @default
 *
 * @param E28 Super Effect
 * @desc A list of all of the element IDs that Element 28 is Super Effective against..
 * @default
 *
 * @param E28 NotVery Effect
 * @desc A list of all of the element IDs that Element 28 is Not Very Effective against.
 * @default
 *
 * @param E28 No Effect
 * @desc A list of all of the element IDs that Element 28 has No Effect against.
 * @default
 *
 * @param === Element 29  ===
 * @default
 *
 * @param E29 Super Effect
 * @desc A list of all of the element IDs that Element 29 is Super Effective against..
 * @default
 *
 * @param E29 NotVery Effect
 * @desc A list of all of the element IDs that Element 29 is Not Very Effective against.
 * @default
 *
 * @param E29 No Effect
 * @desc A list of all of the element IDs that Element 29 has No Effect against.
 * @default
 *
 * @param === Element 30  ===
 * @default
 *
 * @param E30 Super Effect
 * @desc A list of all of the element IDs that Element 30 is Super Effective against..
 * @default
 *
 * @param E30 NotVery Effect
 * @desc A list of all of the element IDs that Element 30 is Not Very Effective against.
 * @default
 *
 * @param E30 No Effect
 * @desc A list of all of the element IDs that Element 30 has No Effect against.
 * @default
 *
 * @help
 *
 * Pokemon Type System
 * Version 1.01
 * SumRndmDde
 *
 * ==========================================================================
 * Introduction
 * ==========================================================================
 *
 * To start off, let's address exactly what this Plugin does.
 *
 * - Set Actors and Enemies to have Elements (types) assigned to them.
 *
 * - Have Skills/Items be Super Effective or Not Very Effective
 * based on whether their damage's Element and the Elements of
 * the target.
 *
 * - Add bonus damage to Skills/Items that has a damage Element
 * as one of the user's Elements. (also known as STAB)
 *
 * - Manipulate the Battlelog depending on whether a Skill/Item
 * was Super Effective, Not Very Effective, etc...
 *
 *
 * ==========================================================================
 * Setting up the Parameters
 * ==========================================================================
 *
 * When setting up the Parameters, you'll be setting up how the Element
 * will affect the damage when that specific Element is used as a part
 * of an offensive Skill/Item.
 *
 * For example, let's say we have Element ID 3.
 *
 * If you set the Parameter "E3 Super Effect" to: 
 *
 *    4, 6, 8
 *
 * then when a Skill/Item has Element 3 set as their damage's Element, it
 * will be Super Effective and do double damage if the target has 
 * either 4, 6, or 8 as one of their Elements.
 *
 * If they have multiple of those as their Elements, then the damage
 * boost will stack. 
 * (ex: x2, x4, or x8 with 1, 2, or 3 weaknesses respecitively)
 *
 *
 * The same applies to "E# NotVery Effect", only it will be 
 * Not Very Effetive and do half damage.
 * (Once again, this will also stack from 0.5, 0.25, 0.125, etc...)
 *
 *
 * If a target has two elements, one which a Skill/Item is Super Effective
 * against, and one which that same Skill/Item is Not Very Effective
 * against, then the two effects will cancel out and it will do normal
 * damage.
 *
 * 
 * If a Skill/Item's Element has No Effect on one of the target's Elements,
 * then it will always to zero damage.
 *
 *
 * ==========================================================================
 * Battelog Messages
 * ==========================================================================
 *
 * Set up the Battlelog messages in the Parameters.
 *
 * x4 will apply to x4 and above.
 * x0.25 will apply from x0.25 to zero.
 *
 * If you leave the Parameter blank, that specific message will not
 * be used.
 *
 *
 * ==========================================================================
 * Notetags
 * ==========================================================================
 *
 * Notetags for Actors, Enemies, and States:
 * 
 * <PKM Elements: x>
 * <PKM Elements: x, y>
 * <PKM Elements: a, b, ......, z>
 *
 * Replace x and y with the element ids you wish for the Actor or Enemy 
 * to have. You can have as many Elements assigned as you wish.
 * (However, Pokemon games only give Pokemon a maximum of 2 Types). 
 * 
 * You may also input the name of the Element as opposed to the Element ID.
 *
 * Here are some examples:
 *
 * <PKM Elements: 3, 6>
 * <PKM Elements: 2>
 * <PKM Elements: Fire, Water>
 * <PKM Elements: Dark>
 *
 * Important!
 * If you choose to use the element names, be sure to use the exact 
 * capitalization used when inputting them into the Database!
 *
 * 
 *  === States ===
 * If you use this Notetag in a State, then that State's Elements will be 
 * added to the afflicted's Elements.
 *
 * If State ID 3 had Element ID 4 assigned to it, 
 * then all Actors/Enemies with State ID 3 will have Element ID 4 added to
 * their list of Elements assuming it is not there already.
 *
 *
 * ==========================================================================
 * Implementing this Plugin's Default Elements (Types)
 * ==========================================================================
 *
 * If you wish, you can quickly add all of the Elements from this Plugin 
 * into your game by replacing the "elements" array within the 
 * System.json file within the /data folder with this:
 *
 * ["", "Normal", "Grass", "Water", "Fire", "Electric", "Bug", "Fighting", "Flying", "Ice", "Rock", "Ground", "Steel", "Poison", "Psychic", "Ghost", "Dark", "Dragon", "Fairy"]   
 *
 * Watch my tutorial on this Plugin if you wish to see how it can be done.
 *
 *
 * Otherwise, you can input them manually from this list:
 *
 * 1 - Normal
 * 2 - Grass
 * 3 - Water
 * 4 - Fire
 * 5 - Electric
 * 6 - Bug
 * 7 - Fighting
 * 8 - Flying
 * 9 - Ice
 * 10 - Rock
 * 11 - Ground
 * 12 - Steel
 * 13 - Poison
 * 14 - Psychic
 * 15 - Ghost
 * 16 - Dark
 * 17 - Dragon
 * 18 - Fairy
 *
 * This list is also what all of the default Parameter values are based
 * off of.
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
SRD.PKM.TypeSystem = {};

var Imported = Imported || {};
Imported.SRD_PKM_TypeSystem = true;

SRD.PKM.TypeSystem.notetagsLoaded = false;	

SRD.PKM.TypeSystem.noDefaultSystem = String(PluginManager.parameters("SRD_PKM_TypeSystem")["No Default System?"]).trim().toLowerCase() === 'true';
SRD.PKM.TypeSystem.stab = Number(PluginManager.parameters("SRD_PKM_TypeSystem")["STAB Multiplier"]);

SRD.PKM.TypeSystem.x4EffectMessage = String(PluginManager.parameters("SRD_PKM_TypeSystem")["x4 Effectiveness"]);
SRD.PKM.TypeSystem.x2EffectMessage = String(PluginManager.parameters("SRD_PKM_TypeSystem")["x2 Effectiveness"]);
SRD.PKM.TypeSystem.x05EffectMessage = String(PluginManager.parameters("SRD_PKM_TypeSystem")["x0.5 Effectiveness"]);
SRD.PKM.TypeSystem.x025EffectMessage = String(PluginManager.parameters("SRD_PKM_TypeSystem")["x0.25 Effectiveness"]);
SRD.PKM.TypeSystem.x0EffectMessage = String(PluginManager.parameters("SRD_PKM_TypeSystem")["No Effect"]);

SRD.PKM.TypeSystem.superEffective = [];
SRD.PKM.TypeSystem.notVeryEffective = [];
SRD.PKM.TypeSystem.noEffect = [];
for(var i = 1; i <= 30; i++) {
	SRD.PKM.TypeSystem.superEffective[i] = PluginManager.parameters("SRD_PKM_TypeSystem")["E"+i+" Super Effect"].split(/\s*,\s*/i);
	SRD.PKM.TypeSystem.notVeryEffective[i] = PluginManager.parameters("SRD_PKM_TypeSystem")["E"+i+" NotVery Effect"].split(/\s*,\s*/i);
	SRD.PKM.TypeSystem.noEffect[i] = PluginManager.parameters("SRD_PKM_TypeSystem")["E"+i+" No Effect"].split(/\s*,\s*/i);
}

SRD.PKM.TypeSystem._DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
    if(!SRD.PKM.TypeSystem._DataManager_isDatabaseLoaded.call(this)) return false;
    if(!SRD.PKM.TypeSystem.notetagsLoaded) {
    	this.loadPKMElementNotetags($dataActors);
    	//this.loadPKMElementNotetags($dataClasses);
    	this.loadPKMElementNotetags($dataStates);
    	this.loadPKMElementNotetags($dataEnemies);
    	SRD.PKM.TypeSystem.notetagsLoaded = true;
    }
    return true;
};

DataManager.loadPKMElementNotetags = function(data) {
	for(var i = 1; i < data.length; i++) {
		var notes = data[i].note.match(/<\s*(?:PKM|Pokemon)\s*Elements?\s*:\s*(.*)\s*>/im);
		if(notes) {
			data[i].PKMElements = notes[1].split(/\s*,\s*/i);
			for(var j = 0; j < data[i].PKMElements.length; j++) {
				if(!data[i].PKMElements[j].match(/\s*\d+\s*/i)) {
					data[i].PKMElements[j] = String($dataSystem.elements.indexOf(data[i].PKMElements[j]));
				}
			}
		}
	}
};

Game_Actor.prototype.getPKMTypes = function() {
	var states = this.states();
	var result = [];
	if(this.actor().PKMElements) result = this.actor().PKMElements;
	for(var i = 0; i < states.length; i++) {
		if(states[i].PKMElements) {
			for(var j = 0; j < states[i].PKMElements.length; j++) {
				if(!result.contains(states[i].PKMElements[j])) {
					result.push(states[i].PKMElements[j]);
				}
			}
		}
	}
	return result;
};

Game_Enemy.prototype.getPKMTypes = function() {
	var states = this.states();
	var result = [];
	if(this.enemy().PKMElements) result = this.enemy().PKMElements;
	for(var i = 0; i < states.length; i++) {
		if(states[i].PKMElements) {
			for(var j = 0; j < states[i].PKMElements.length; j++) {
				if(!result.contains(states[i].PKMElements[j])) {
					result.push(states[i].PKMElements[j]);
				}
			}
		}
	}
	return result;
};

SRD.PKM.TypeSystem._Game_Action_apply = Game_Action.prototype.apply;
Game_Action.prototype.apply = function(target) {
	SRD.PKM.TypeSystem._Game_Action_apply.call(this, target);
	target.result().isDamage = (this.item().damage.type > 0);
};

SRD.PKM.TypeSystem._Game_Action_calcElementRate = Game_Action.prototype.calcElementRate; 
Game_Action.prototype.calcElementRate = function(target) {
	var result = this.calcPKMElementRate(target);

	target.result().moveEffectiveness = result;

	var defaultSystem = (SRD.PKM.TypeSystem.noDefaultSystem) ? 1 : SRD.PKM.TypeSystem._Game_Action_calcElementRate.call(this, target);

	return result * defaultSystem;
};

Game_Action.prototype.calcPKMElementRate = function(target) {
	var user;
	if(this.subject().isActor()) user = this.subject().actor();
	else user = this.subject().enemy();
	var taker;
	if(target.isActor()) taker = target.actor();
	else taker = target.enemy();

	var skill = this.item();
	var elements = $dataSystem.elements;
	var atkElement = skill.damage.elementId;
	var defElements = target.getPKMTypes();
	var result = 2;
	var effectiveness = 0;

	if(defElements.length > 0 && atkElement > 0) {
		for(var i = 0; i < SRD.PKM.TypeSystem.superEffective[atkElement].length; i++) {
			if(defElements.contains(String(SRD.PKM.TypeSystem.superEffective[atkElement][i]))) {
				effectiveness += 1;
			}
		}

		for(var i = 0; i < SRD.PKM.TypeSystem.notVeryEffective[atkElement].length; i++) {
			if(defElements.contains(String(SRD.PKM.TypeSystem.notVeryEffective[atkElement][i]))) {
				effectiveness -= 1;
			}
		}

		for(var i = 0; i < SRD.PKM.TypeSystem.noEffect[atkElement].length; i++) {
			if(defElements.contains(String(SRD.PKM.TypeSystem.noEffect[atkElement][i]))) {
				result = 0;
			}
		}
	}

	result = (result === 0) ? 0 : Math.pow(result, effectiveness);

	if(user.PKMElements && user.PKMElements.contains(String(atkElement))) {
		result *= SRD.PKM.TypeSystem.stab;
	}

	return result;
}

SRD.PKM.TypeSystem._Window_BattleLog_displayCritical = Window_BattleLog.prototype.displayCritical;
Window_BattleLog.prototype.displayCritical = function(target) {
	if(target.result().isDamage) {
		if(target.result().moveEffectiveness >= 4 && SRD.PKM.TypeSystem.x4EffectMessage.length > 0) {
	        this.push('addText', SRD.PKM.TypeSystem.x4EffectMessage);
	    } else if(target.result().moveEffectiveness === 2 && SRD.PKM.TypeSystem.x2EffectMessage.length > 0) {
	        this.push('addText', SRD.PKM.TypeSystem.x2EffectMessage);
	    } else if(target.result().moveEffectiveness === 0.5 && SRD.PKM.TypeSystem.x05EffectMessage.length > 0) {
	        this.push('addText', SRD.PKM.TypeSystem.x05EffectMessage);
	    } else if(target.result().moveEffectiveness <= 0.25 && target.result().moveEffectiveness > 0 && SRD.PKM.TypeSystem.x025EffectMessage.length > 0) {
	        this.push('addText', SRD.PKM.TypeSystem.x025EffectMessage);
	    } else if(target.result().moveEffectiveness === 0 && SRD.PKM.TypeSystem.x0EffectMessage.length > 0) {
	        this.push('addText', SRD.PKM.TypeSystem.x0EffectMessage);
	    }
	}

    SRD.PKM.TypeSystem._Window_BattleLog_displayCritical.call(this, target);
};