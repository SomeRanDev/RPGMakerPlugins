/*:
 * @plugindesc Allows developers to check the collision of various coordinates/directions on the map for event collision.
 * @author SumRndmDde
 * @help
 *
 * Collision Checker
 * Version 1.02
 * SumRndmDde
 *
 *
 * This is a plugin that allows developers to check the collision of various 
 * coordinates/directions on the map for event collision.
 *
 * This plugin uses different codes within the "Script" section of the 
 * Conditional Branch event. Here is a list of them:
 *
 *
 * ==========================================================================
 *  Command List
 * ==========================================================================
 *
 * In order to check these, place them into the "Script" section of the 
 * Conditional Branch event. These will check collisions relative to the 
 * event in which the Conditional Branch is located in.
 *
 *
 *
 *   [is [x, y] clear]
 *
 * Checks to see if the spot at point (x,y) is passable.
 *
 *
 *
 *   [is front clear]
 *
 * Checks to see if the spot in front of the event is passable.
 * This is different based off of where the event/player is looking.
 *
 *
 *
 *   [is back clear]
 *
 * Checks to see if the spot behind the event is passable.
 * This is different based off of where the event/player is looking.
 *
 *
 *
 *   [is left clear]
 *
 * Checks to see if the spot to the left of the event is passable.
 * This is different based off of where the event/player is looking.
 *
 *
 *
 *   [is right clear]
 *
 * Checks to see if the spot to the right of the event is passable.
 * This is different based off of where the event/player is looking.
 *
 *
 *
 *   [is north clear]
 *
 * Checks to see if the spot above the event is passable.
 * This consistently refers to the same direction.
 *
 *
 *
 *   [is south clear]
 *
 * Checks to see if the spot below the event is passable.
 * This consistently refers to the same direction.
 *
 *
 *
 *   [is east clear]
 *
 * Checks to see if the spot to the east of the event is passable.
 * This consistently refers to the same direction.
 *
 *
 *
 *   [is west clear]
 *
 * Checks to see if the spot to the west of the event is passable.
 * This consistently refers to the same direction.
 *
 *
 * ==========================================================================
 *  Player Command List
 * ==========================================================================
 *
 * If you wish to check collision relative to the Player, you can use:
 *
 *   [is player front clear]
 *
 *   [is player back clear]
 *
 *   [is player left clear]
 *
 *   [is player right clear]
 *
 *   [is player north clear]
 *
 *   [is player south clear]
 *
 *   [is player right clear]
 *
 *   [is player left clear]
 *
 * Use the descriptions above to understand what these commands check for.
 *
 *
 * ==========================================================================
 *  External Event Command List
 * ==========================================================================
 *
 * If you wish to check collision relative to an event besides the one the 
 * Conditional Branch is within, you can use:
 *
 *   event(x)
 *
 * Simple replace 'x' with the ID of the Event on the map.
 * You can do:
 *
 *   [is event(x) front clear]
 *
 *   [is event(x) back clear]
 *
 *   [is event(x) left clear]
 *
 *   [is event(x) right clear]
 *
 *   [is event(x) north clear]
 *
 *   [is event(x) south clear]
 *
 *   [is event(x) right clear]
 *
 *   [is event(x) left clear]
 *
 *
 * ==========================================================================
 *  At Distance
 * ==========================================================================
 *
 * If you wish to check a certain distance in the direction you're checking,
 * you can add "at distance x".
 *
 * For example:
 *
 *   [is up clear at distance 2]
 *
 * This would check if the second tile in the up direction of the event
 * is clear. 
 *
 *
 * This can be added to all directional checks:
 *
 *   [is event(5) left clear at distance 5]
 *   [is player down clear at distance 3]
 *
 *
 * ==========================================================================
 *  NOT Condition
 * ==========================================================================
 *
 * If you wish a condition to return the oppposite of its normal value,
 * use "not".
 *
 * Simply place the "not" before the "clear".
 * For example:
 *
 *   [is front NOT clear]
 *   [is east NOT clear at distance 3]
 *   [is player back NOT clear at distance 5]
 *
 *
 * ==========================================================================
 *  Multiple Conditions (AND)
 * ==========================================================================
 *
 * If you wish for multiple conditions to have to be true, place an "and"
 * in between each of them.
 *
 * For example:
 *
 *   [is player front clear] and [is east clear at distance 4]
 *
 *
 * This would only be true if the player's front was clear and the east 
 * tile 4 tiles away relative to the event was clear.
 *
 *
 * ==========================================================================
 *  Multiple Conditions (OR)
 * ==========================================================================
 *
 * If you wish for only one condition to be true in order for the entire
 * conditional branch to be true, then you would need to use "or".
 *
 * For example:
 *
 *   [is back clear] or [is front clear] or [is event(3) front clear]
 *
 *
 * If either the back of the event 2 tiles down is clear or is Event ID 3's 
 * front is clear, then the entire conditional branch will be clear.
 *
 * Keep in mind it is impossible to combine AND and OR conditions.
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
SRD.CollisionChecker = SRD.CollisionChecker || {};

var Imported = Imported || {};
Imported["SumRndmDde Collision Checker"] = 1.02;

(function(_) {

_.getCondition = function(text, id) {
	if(text.match(/\[\s*is\s*(.*)\s*front\s*(.*)\s*clear\s*(.*)\s*\]/i)) {
		var tempTarget = RegExp.$1;
		var notText = RegExp.$2;
		var tempDistance = RegExp.$3;
		var target = _.getTarget(tempTarget) || $gameMap.event(id);
		if(_.getNot(notText)) return _.checkDirection(target, target.direction(), tempDistance);
		else return !_.checkDirection(target, target.direction(), tempDistance);
	} else if(text.match(/\[\s*is\s*(.*)\s*back\s*(.*)\s*clear\s*(.*)\s*\]/i)) {
		var tempTarget = RegExp.$1;
		var notText = RegExp.$2;
		var tempDistance = RegExp.$3;
		var target = _.getTarget(tempTarget) || $gameMap.event(id);
		if(_.getNot(notText)) return _.checkDirection(target, 10 - target.direction(), tempDistance);
		else return !_.checkDirection(target, 10 - target.direction(), tempDistance);
	} else if(text.match(/\[\s*is\s*(.*)\s*left\s*(.*)\s*clear\s*(.*)\s*\]/i)) {
		var tempTarget = RegExp.$1;
		var notText = RegExp.$2;
		var tempDistance = RegExp.$3;
		var target = _.getTarget(tempTarget) || $gameMap.event(id);
		if(_.getNot(notText)) return _.checkDirection(target, _.getDirection(target.direction(), 'left'), tempDistance);
		else return !_.checkDirection(target, _.getDirection(target.direction(), 'left'), tempDistance);
	} else if(text.match(/\[\s*is\s*(.*)\s*right\s*(.*)\s*clear\s*(.*)\s*\]/i)) {
		var tempTarget = RegExp.$1;
		var notText = RegExp.$2;
		var tempDistance = RegExp.$3;
		var target = _.getTarget(tempTarget) || $gameMap.event(id);
		if(_.getNot(notText)) return _.checkDirection(target, _.getDirection(target.direction(), 'right'), tempDistance);
		else return !_.checkDirection(target, _.getDirection(target.direction(), 'right'), tempDistance);
	} else if(text.match(/\[\s*is\s*(.*)\s*(?:up|above|north)\s*(.*)\s*clear\s*(.*)\s*\]/i)) {
		var tempTarget = RegExp.$1;
		var notText = RegExp.$2;
		var tempDistance = RegExp.$3;
		var target = _.getTarget(tempTarget) || $gameMap.event(id);
		if(_.getNot(notText)) return _.checkDirection(target, 8, tempDistance);
		else return !_.checkDirection(target, 8, tempDistance);
	} else if(text.match(/\[\s*is\s*(.*)\s*(?:east)\s*(.*)\s*clear\s*(.*)\s*\]/i)) {
		var tempTarget = RegExp.$1;
		var notText = RegExp.$2;
		var tempDistance = RegExp.$3;
		var target = _.getTarget(tempTarget) || $gameMap.event(id);
		if(_.getNot(notText)) return _.checkDirection(target, 6, tempDistance);
		else return !_.checkDirection(target, 6, tempDistance);
	} else if(text.match(/\[\s*is\s*(.*)\s*(?:west)\s*(.*)\s*clear\s*(.*)\s*\]/i)) {
		var tempTarget = RegExp.$1;
		var notText = RegExp.$2;
		var tempDistance = RegExp.$3;
		var target = _.getTarget(tempTarget) || $gameMap.event(id);
		if(_.getNot(notText)) return _.checkDirection(target, 4, tempDistance);
		else return !_.checkDirection(target, 4, tempDistance);
	} else if(text.match(/\[\s*is\s*(.*)\s*(?:down|below|south)\s*(.*)\s*clear\s*(.*)\s*\]/i)) {
		var tempTarget = RegExp.$1;
		var notText = RegExp.$2;
		var tempDistance = RegExp.$3;
		var target = _.getTarget(tempTarget) || $gameMap.event(id);
		if(_.getNot(notText)) return _.checkDirection(target, 2, tempDistance);
		else return !_.checkDirection(target, 2, tempDistance);
	} else if(text.match(/\[\s*is\s*\[\s*(\d+)\s*,\s*(\d+)\s*\]\s*(.*)\s*clear\s*\]/i)) {
		var x = parseInt(RegExp.$1);
		var y = parseInt(RegExp.$2);
		var notText = RegExp.$3;
		var p = $gamePlayer;
		if(_.getNot(notText)) return p.canPass(x, y, 5);
		else return !p.canPass(x, y, 5);
	}
	return 'no-match';
};

_.getTarget = function(target, id) {
	if(!target) return $gameMap.event(id);
	else if(target.match(/player/i)) return $gamePlayer;
	else if(target.match(/event(\d+)/i)) return $gameMap.event(parseInt(RegExp.$1));
	return null;
};

_.getNot = function(target) {
	if(!target) return true;
	else if(target.match(/not/i)) return false;
	return true;
};

_.checkDirection = function(target, d, dis) {
	if(dis && dis.match(/at\s*distance\s*(\d+)/)) dis = parseInt(RegExp.$1) - 1;
	dis = (dis || 0);
	switch(d) {
		case 2:
			return target.canPass(target.x, target.y + dis, d);
			break;
		case 4:
			return target.canPass(target.x - dis, target.y, d);
			break;
		case 6:
			return target.canPass(target.x + dis, target.y, d);
			break;
		case 8:
			return target.canPass(target.x, target.y - dis, d);
			break;
	}
};

_.getDirection = function(d, way) {
	if(way === 'right') {
		switch (d) {
			case 2:
				return 4;
			case 4:
				return 8;
			case 6:
				return 2;
			case 8:
				return 6;
		}
	} else if(way === 'left') {
		switch (d) {
			case 2:
				return 6;
			case 4:
				return 2;
			case 6:
				return 8;
			case 8:
				return 4;
		}
	}
};

var _Game_Interpreter_command111 = Game_Interpreter.prototype.command111;
Game_Interpreter.prototype.command111 = function() {
	if(this._params[0] === 12) {
		var result = _.getCondition(this._params[1], this._eventId);
		if(result !== 'no-match') {
			var info = this._params[1];
			var value;
			if(info.match(/and/i)) {
				result = info.split(/\s*and\s*/i);
				for(var i = 0; i < result.length; i++) {
					value = _.getCondition(result[i], this._eventId);
					if(value === false) break;
				}
			} else if(info.match(/or/i)) {
				result = info.split(/\s*or\s*/i);
				for(var i = 0; i < result.length; i++) {
					value = _.getCondition(result[i], this._eventId);
					if(value) break;
				}
			} else {
				value = _.getCondition(info, this._eventId);
			}
			this._branch[this._indent] = value;
			if(this._branch[this._indent] === false) {
				this.skipBranch();
			}
			return true;
		}
	}
	return _Game_Interpreter_command111.call(this);
};

})(SRD.CollisionChecker);