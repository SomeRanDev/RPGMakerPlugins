/*:
 * @plugindesc Allows developers to create bullet-hell dodge systems in their battles; based off of the system from Undertale.
 * @author SumRndmDde
 *
 * @param Draw Collision Masks
 * @desc Set this to 'true' and collision masks will be visible.
 * @default false
 *
 * @param == Sound Effects ==
 * @default
 *
 * @param Damage SE
 * @desc Set this to the name of the file that will be used as the Sound Effect when an Actor is damaged.
 * @default Damage4
 *
 * @param Death Damage SE
 * @desc Set this to the name of the file that will be used as the Sound Effect when an Actor is killed.
 * @default Ice2
 *
 * @param Death Fade SE
 * @desc Set this to the name of the file that will be used as the Sound Effect when an Actor fades.
 * @default Collapse2
 *
 * @param Shield SE
 * @desc Set this to the name of the file that will be used as the Sound Effect when an Actor shields.
 * @default Shot2
 *
 * @param Shoot SE
 * @desc Set this to the name of the file that will be used as the Sound Effect when an Actor shoots.
 * @default Shot1
 *
 * @param == Enemy Bubble ==
 * @default
 *
 * @param Bubble Window Skin
 * @desc The window skin used by dialogues during battles.
 * Leave blank for default.
 * @default
 *
 * @param Auto Save Texts
 * @desc If 'true', then all the saved texts in the $gameMessageBubble will be used at the beginning of each Skill.
 * @default true
 *
 * @param == Image Hues ==
 * @default
 *
 * @param Normal Hue
 * @desc The hue of the Player image when using Normal Mode.
 * In other words- <UTB Mode: 0>
 * @default 0
 *
 * @param Gravity Hue
 * @desc The hue of the Player image when using Gravity Mode.
 * In other words- <UTB Mode: 1>
 * @default 200
 *
 * @param Shield Hue
 * @desc The hue of the Player image when using Shield Mode.
 * In other words- <UTB Mode: 2>
 * @default 100
 *
 * @param Trap Hue
 * @desc The hue of the Player image when using Shooter Mode.
 * In other words- <UTB Mode: 3>
 * @default 300
 *
 * @param Shooter Hue
 * @desc The hue of the Player image when using Bullet Mode.
 * In other words- <UTB Mode: 4>
 * @default 40
 *
 * @param == Gravity Mode ==
 * @default
 *
 * @param Jump Power
 * @desc A value which determines the power of the jump.
 * @default 4
 *
 * @param Jump Limit
 * @desc A value which determines how long the jump can be held for.
 * @default 25
 *
 * @param Jump Gravity
 * @desc A value which determines how fast the player will accelerate downward.
 * @default 0.4
 *
 * @param == Shield Mode ==
 * @default
 *
 * @param Shield Image
 * @desc The image the shield will use (from /img/SumRndmDde/utb/)
 * Leave blank for default image.
 * @default
 *
 * @param Shield Thickness
 * @desc The thickness of the shield.
 * @default 6
 *
 * @param == Trap Mode ==
 * @default
 *
 * @param Trap Move Speed
 * @desc The speed the player moves between each string.
 * @default 15
 *
 * @param Trap Positions
 * @desc The relative Y positions the player can move to.
 * @default 30, 90, 150
 *
 * @param Trap Color
 * @desc The color of the strings in trap mode.
 * @default #FF00FF
 *
 * @param == Shooter Mode ==
 * @default
 *
 * @param Bullet Image
 * @desc The image the bullets will use (from /img/SumRndmDde/utb/)
 * Leave blank for default image.
 * @default
 *
 * @param Shoot Cooldown
 * @desc The amount of cooldown in frames after the player shoots.
 * @default 30
 *
 * @param Bullet X Speed
 * @desc The horizontal speed of the bullets.
 * @default 0
 *
 * @param Bullet Y Speed
 * @desc The vertical speed of the bullets.
 * @default -8
 *
 * @param == Defaults ==
 * @default
 *
 * @param Default Duration
 * @desc The default duration of UTB Skills if one is not specified.
 * @default 1000
 *
 * @param Default Mode
 * @desc The default mode of UTB Skills if one is not specified.
 * @default 0
 *
 * @param Default Invincibility
 * @desc The default amount of frames the invincibility lasts.
 * @default 60
 *
 * @param Default P. Speed
 * @desc The default speed of an Actor is one is not specified.
 * @default 3
 *
 * @param Default P. Shape
 * @desc The default shape of an Actor is one is not specified.
 * @default circle
 *
 * @param Default P. Width
 * @desc The default width of an Actor is one is not specified.
 * @default 20
 *
 * @param Default P. Height
 * @desc The default height of an Actor is one is not specified.
 * @default 20
 *
 * @param Default P. Radius
 * @desc The default radius of an Actor is one is not specified.
 * @default 10
 *
 * @param == Attack Defaults ==
 * @default
 *
 * @param Image
 * @desc The Image of the UTB Attack.
 * Input a file from /img/SumRndmDde/utb/
 * @default
 *
 * @param Animation Frames
 * @desc The amount of frames the "Image" is split into. Frames must be spread out horizontally.
 * @default
 *
 * @param Animation Speed
 * @desc The frame delay between each frame of the animation.
 * @default 4
 *
 * @param Type
 * @desc "Stop" means player must not move to dodge.
 * "Move" means player must move to dodge.
 * @default
 *
 * @param Initial X
 * @desc The initial X position of the attack.
 * Input a number or JavaScript eval.
 * @default this.window.x + (this.window.width / 2)
 *
 * @param Initial Y
 * @desc The initial Y position of the attack.
 * Input a number or JavaScript eval.
 * @default this.window.y + (this._player.getHeight() / 2)
 *
 * @param Collision Type
 * @desc The collision type of the attack.
 * Input "circle", "rect", or "pixel".
 * @default circle
 *
 * @param Radius
 * @desc The radius of the attack in collision and scaling.
 * Only used with "circle" collision type.
 * @default 13
 *
 * @param Width
 * @desc The width of the attack in collision and scaling.
 * Only used with "rect" collision type.
 * @default 26
 *
 * @param Height
 * @desc The width of the attack in collision and scaling.
 * Only used with "rect" collision type.
 * @default 26
 *
 * @param X Speed
 * @desc The initial X Speed of the attack.
 * Positive speed moves to the right; negative to the left.
 * @default 0
 *
 * @param Y Speed
 * @desc The initial Y Speed of the attack.
 * Positive speed moves down; negative moves up.
 * @default 2
 *
 * @param X Accel
 * @desc The initial X Acceleration of the attack.
 * This value is added to the X Speed every frame.
 * @default 0
 *
 * @param Y Accel
 * @desc The initial Y Acceleration of the attack.
 * This value is added to the Y Speed every frame.
 * @default 0
 *
 * @param X Scale
 * @desc The initial X Scale of the attack.
 * This value does affect the collision.
 * @default 1
 *
 * @param Y Scale
 * @desc The initial Y Scale of the attack.
 * This value does affect the collision.
 * @default 1
 *
 * @param Opacity
 * @desc The initial Opacity of the attack.
 * This value does not affect the collision.
 * @default 255
 *
 * @param Rotation
 * @desc The initial Rotation of the attack.
 * This value does not affect the collision.
 * @default 0
 *
 * @param Visibility
 * @desc The initial Visibility of the attack.
 * This value does not affect the collision.
 * @default true
 *
 * @param Color
 * @desc The color used by a generated image for the attack.
 * Input a JavaScript color or 'random'.
 * @default random
 *
 * @param Spawn Rate
 * @desc The amount of time, in frames, it takes between each attack to spawn.
 * @default 100
 *
 * @param Spawn Delay
 * @desc The amount of time, in frames, it takes before the attack starts spawning.
 * @default 0
 *
 * @param Delete Distance
 * @desc How far outside the boundaries the attack must be to be deleted.
 * @default 1
 *
 * @param Destructible
 * @desc If 'true', this attack can be destroyed using Yellow Mode's bullets.
 * @default true
 *
 * @param Direct Code
 * @desc Direct JavaScript code that will be run in the attack each frame.
 * @default
 *
 * @param Initial Code
 * @desc JavaScript code that will be run on frame 1 of the attack.
 * @default
 *
 * @param == Battle Frame ==
 * @default
 *
 * @param Collision Padding
 * @desc The padding within the frame. Change this if the collision between the player and frame doesn't look right.
 * @default 5
 *
 * @param Background Opacity
 * @desc The opacity of the background of the Battle Frame. If you want a perfectly solid background, change the Window.png.
 * @default 255
 *
 * @param Frame X
 * @desc The x position of the frame.
 * @default (Graphics.width / 2) - (width / 2)
 *
 * @param Frame Width
 * @desc The width of the frame.
 * @default 180
 *
 * @param Frame Height
 * @desc The height of the frame.
 * @default 180
 *
 * @param == Actor HP Window ==
 * @default
 *
 * @param Actor Frame X
 * @desc The x position of the Actor HP frame.
 * @default (Graphics.boxWidth / 2) - (this._singleActorHP.width / 2)
 *
 * @param Actor Frame Y
 * @desc The y position of the Actor HP frame.
 * @default Graphics.height - this._singleActorHP.height - 20
 *
 * @param Actor Frame Width
 * @desc The width of the Actor HP frame.
 * @default 400
 *
 * @param Actor Frame Height
 * @desc The height of the Actor HP frame.
 * @default this.fittingHeight(1)
 *
 * @help
 *
 * Undertale Battle System
 * Version 1.00
 * SumRndmDde
 *
 *
 * Replicates the Bullet-hell system from Undertale.
 *
 *
 * ==========================================================================
 *  Skill Notetags
 * ==========================================================================
 *
 * Place these notetags into the notebox of a Skill to customize the qualities
 * of the UTB attack!
 *
 *
 * ==========================================================================
 *
 * For a Skill to use the Undertale Battle System, place this notetag in it:
 *
 * <Use Undertale Attack>
 *
 *
 * ==========================================================================
 *
 * <UTB Duration: x>
 *
 * Set this to the amount of frames the UTB attack will last.
 * 60 frames = 1 second.
 *
 *
 * ==========================================================================
 *
 * <UTB Mode: 0>
 * Set's this Skill to use the default mode.
 *
 *
 * <UTB Mode: 1>
 * Set's this Skill to use the blue mode (gravity mode).
 * Can also use:
 * 1.2  =  Gravity to the left
 * 1.3  =  Gravity to the right
 * 1.4  =  Gravity to the up
 *
 *
 * <UTB Mode: 2>
 * Set's this Skill to use green mode (shield mode).
 *
 *
 * <UTB Mode: 3>
 * Set's this Skill to use purple mode (trap mode).
 *
 *
 * <UTB Mode: 4>
 * Set's this Skill to use yellow mode (shooter mode).
 *
 *
 * ==========================================================================
 *
 * <UTB Invincibility: x>
 *
 * Set this to the amount of frames of invincibility that the player should
 * get when they're hit with an attack.
 * 60 frames = 1 second.
 *
 *
 * ==========================================================================
 *
 * <UTB Delete Outside Frame>
 *
 * If this Notetag is in the Notebox of the Skill, then the "attacks" will
 * be deleted if they exit the battle frame.
 *
 * If this isn't present, then attacks will be seen everywhere.
 *
 *
 * ==========================================================================
 *
 * <UTB Code>
 * </UTB Code>
 * 
 * This allows you to customize JavaScript code for the overall Skill.
 * You can use 'f' and 'p' which are variables representing the current frame
 * and player object respectively.
 *
 * Here's some examples:
 *
 *
 *  - How to change Player's mode to 1 at frame 100:
 * <UTB Code>
 * if(f === 100) {
 *   p.setMode(1);
 * }
 * </UTB Code>
 *
 *
 *
 *  - How to show a message at frame 300:
 * <UTB Code>
 * if(f === 300) {
 *   this.message("Hello \\!This is a message.");
 * }
 * </UTB Code>
 *
 *
 *
 *  - How to have a 1 in 100 chance for an instance of Attack 1 to
 *    spawn every frame:
 * <UTB Code>
 * if(Math.randomInt(100) === 1) {
 *   this.createAttack(1);   
 * }
 * </UTB Code>
 *
 *
 * ==========================================================================
 *
 * <UTB Initial Code>
 * </UTB Initial Code>
 * 
 * This is code that is run once at the start of the Skill.
 * It is mainly used to initialize variables and spawn preparation attacks
 * if it is necessary.
 *
 * Here's some examples:
 *
 *
 *  - Creates a number variable called "count":
 * <UTB Initial Code>
 * this._count = 0;
 * </UTB Initial Code>
 *
 *
 *
 *  - Spawns Attack 1 on the first frame only:
 * <UTB Initial Code>
 * this.createAttack(1); 
 * </UTB Initial Code>
 *
 *
 *
 *  - Sets the frame's Width to 500 and substract 50 from the frame's X:
 * <UTB Initial Code>
 * this.window.width = 500;
 * this.window.x -= 50;
 * </UTB Initial Code>
 *
 *
 * ==========================================================================
 *
 * <UTB Attack x>
 * </UTB Attack x>
 *
 * Now, each Skill can have 9 individual "UTB attacks".
 * You can customize one of them by using the tags above.
 * Then, you can customize the qualities of the attack by
 * using notetags inside of the UTB attack tags.
 *
 * You may have to use this online tool to make the creation convenient:
 * http://sumrndmdde.github.io/UTB-Attack-Creator/
 *
 *
 * For example:
 *
 * <UTB Attack 1>
 * Initial X: this.x + 220
 * Initial Y: this.y + 5
 * Collision Type: Rect
 * Width: 160
 * Height: 20
 * X Speed: 0
 * Y Speed: 0.5
 * X Accel: 0
 * Y Accel: 0
 * Color: green
 * Spawn Rate: 100
 * Spawn Delay: 0
 * </UTB Attack 1>
 *
 * <UTB Attack 2>
 * Initial X: this.x
 * Initial Y: this.y
 * X Speed: 1
 * Y Speed: 1
 * X Accel: 0
 * Y Accel: 0
 * Collision Type: circle
 * Radius: 15
 * Spawn Rate: 100
 * Spawn Delay: 20
 * Delete Distance: 50
 * Destructible: true
 * <Direct Code>
 * if(this.x > width) this.xspeed = -1;
 * </Direct Code>
 * </UTB Attack 2>
 *
 *
 * ==========================================================================
 *  Actor Notetags
 * ==========================================================================
 *
 * Use these to customize the Image and Collision of the Actor:
 *
 * <UTB Sprite: filename>
 *
 * Use this to set the file of the image of what you want the Actor to look
 * like. The image must be stored in img/SumRndmDde/utb/
 *
 * Example: <UTB Sprite: heart>
 *
 *
 * ==========================================================================
 *
 * <UTB Speed: speed>
 *
 * Set this to the speed the Actor should move in the frame.
 *
 * Simply set this to a number.
 *
 * Example: <UTB Speed: 4>
 *          <UTB Speed: 6>
 *
 *
 * ==========================================================================
 *
 * <UTB Shape: shape>
 *
 * Set this to the shape of this Actor's collision box.
 *
 * You can use: "circle" or "rect".
 *
 * Example: <UTB Shape: circle>
 *          <UTB Shape: rect>
 *
 *
 * ==========================================================================
 *
 * In order to customize the size of the shapes, use:
 *
 * <UTB Radius: number>
 * For the "circle" collision.
 *
 * <UTB Width: number>
 * <UTB Height: number>
 * For the "rect" collision.
 *
 *
 * ==========================================================================
 *  Misc JavaScript Eval Info
 * ==========================================================================
 *
 *
 * Undertale Attack Evals
 * ==========================================================================
 *
 * Here are the following variables for Undertale Attacks to be used in
 * "Direct Code":
 *
 * Image             - this.image
 * Animation Frames  - this.aniFrames
 * Animation Speed   - this.aniSpeed
 * Type              - this.type
 * Initial X         - this.x
 * Initial Y         - this.y
 * Collision Type    - this.shape
 * Radius            - this.radius
 * Width             - this._mywidth
 * Height            - this._myheight
 * X Speed           - this.xspeed
 * Y Speed           - this.yspeed
 * X Accel           - this.xaccel
 * Y Accel           - this.yaccel
 * X Scale           - this.scale.x
 * Y Scale           - this.scale.y
 * Opacity           - this.opacity
 * Rotation          - this.rotation
 * Visibility        - this.visibility
 * Color             - this.color
 * Delete Distance   - this.deleteDistance
 * Destructible      - this.destructible
 * Direct Code       - this.directCode
 * Initial Code      - this.iniCode
 * Window            - this.window
 *
 *
 *
 * Window Frame Evals
 * ==========================================================================
 *
 * For the "Direct Code" and "UTB Code" notetags, you can use the this.window
 * variable to reference various positions on the frame.
 *
 * this.window.x           - The X position of the Window
 * this.window.y           - The Y position of the Window
 * this.window.width       - The width of the Window
 * this.window.height      - The height of the Window
 * this.window.left        - The X position of the left side of the Window
 * this.window.right       - The X position of the right side of the Window
 * this.window.top         - The Y position of the top side of the Window
 * this.window.bottom      - The Y position of the bottom side of the Window
 * this.window.x_middle    - The X position of the middle of the Window
 * this.window.y_middle    - The Y position of the middle of the Window
 *
 *
 *
 * Message Bubble Text Save
 * ==========================================================================
 *
 * In order to "save" text to be shown in the next Undertale attack, use
 * the following Script Call:
 *
 * $gameMessageBubble.saveText(`Insert the text
 * you wish to use
 * in here!`);
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
SRD.UTB = SRD.UTB || {};

var Imported = Imported || {};
Imported["SumRndmDde Undertale Battle System"] = 1.00;

var $gameMessageBubble = null;

function UndertaleBattleSystem() {
	this.initialize.apply(this, arguments);
}

function Window_Base_Undertale() {
	this.initialize.apply(this, arguments);
}

function Window_SingleActorHP() {
	this.initialize.apply(this, arguments);
}

function Undertale_Player() {
	this.initialize.apply(this, arguments);
}

function Undertale_Enemy() {
	this.initialize.apply(this, arguments);
}

(function(_) {

"use strict";

var params = PluginManager.parameters('SRD_UndertaleBattleSystem');

_.shieldThick = parseInt(params['Shield Thickness']);

_.isHUDImported = !!(Imported["SumRndmDde Alternative Battle Scene Undertale"]);

_.drawCollisionMasks = String(params['Draw Collision Masks']).trim().toLowerCase() === 'true';

_.damageSE = String(params['Damage SE']);
_.death1Se = String(params['Death Damage SE']);
_.death2Se = String(params['Death Fade SE']);
_.shieldSE = String(params['Shield SE']);
_.shootSE = String(params['Shoot SE']);

_.bubbleSkin = String(params['Bubble Window Skin']).trim();
_.autoSaveText = String(params['Auto Save Texts']).trim().toLowerCase() === 'true';

_.nHue = parseInt(params['Normal Hue']);
_.gHue = parseInt(params['Gravity Hue']);
_.sHue = parseInt(params['Shield Hue']);
_.pHue = parseInt(params['Trap Hue']);
_.bHue = parseInt(params['Shooter Hue']);
_.oHue = 26;

_.jumpPower = parseFloat(params['Jump Power']);
_.jumpLimit = parseFloat(params['Jump Limit']);
_.jumpGravity = parseFloat(params['Jump Gravity']);

_.shieldImage = String(params['Shield Image']);

_.bulletImage = String(params['Bullet Image']);
_.shotCooldown = parseInt(params['Shoot Cooldown']);
_.shotXSpd = parseInt(params['Bullet X Speed']);
_.shotYSpd = parseInt(params['Bullet Y Speed']);

_.trapSpeed = parseInt(params['Trap Move Speed']);
_.trapPositions = String(params['Trap Positions']).split(/\s*,\s*/);
for(var i = 0; i < _.trapPositions.length; i++) _.trapPositions[i] = parseInt(_.trapPositions[i]);
_.trapColor = String(params['Trap Color']);

_.duration = parseInt(params['Default Duration']);
_.mode = Number(params['Default Mode']);
_.invincibility = parseInt(params['Default Invincibility']);
_.pSpeed = parseInt(params['Default P. Speed']);
_.pShape = String(params['Default P. Shape']);
_.pWidth = parseInt(params['Default P. Width']);
_.pHeight = parseInt(params['Default P. Height']);
_.pRadius = parseInt(params['Default P. Radius']);

_.image = String(params['Image']);
_.aniFrames = String(params['Animation Frames']);
_.aniSpeed = String(params['Animation Speed']);
_.type = String(params['Type']);
_.iniX = String(params['Initial X']);
_.iniY = String(params['Initial Y']);
_.collision = String(params['Collision Type']);
_.radius = String(params['Radius']);
_.width = String(params['Width']);
_.height = String(params['Height']);
_.xSpeed = String(params['X Speed']);
_.ySpeed = String(params['Y Speed']);
_.xAccel = String(params['X Accel']);
_.yAccel = String(params['Y Accel']);
_.xScale = String(params['X Scale']);
_.yScale = String(params['Y Scale']);
_.opacity = String(params['Opacity']);
_.rotation = String(params['Rotation']);
_.visibility = String(params['Visibility']);
_.color = String(params['Color']);
_.rate = String(params['Spawn Rate']);
_.delay = String(params['Spawn Delay']);
_.distance = String(params['Delete Distance']);
_.destructible = String(params['Destructible']);
_.code = String(params['Direct Code']);
_.iniCode = String(params['Initial Code']);

_.padding = parseInt(params['Collision Padding']);
_.opacity = parseInt(params['Background Opacity']);
_.frameX = String(params['Frame X']);
_.frameWidth = String(params['Frame Width']);
_.frameHeight = String(params['Frame Height']);

_.frameXActor = String(params['Actor Frame X']);
_.frameYActor = String(params['Actor Frame Y']);
_.frameWidthActor = String(params['Actor Frame Width']);
_.frameHeightActor = String(params['Actor Frame Height']);

_.getRandomColor = function() {
	return 'rgba('+Math.randomInt(255)+','+Math.randomInt(255)+','+Math.randomInt(255)+',255)';
};

_.loadImage = function(filename, hue) {
	return ImageManager.loadBitmap('img/SumRndmDde/utb/', filename, hue, true);
};

if(_.shieldImage.length === 0) _.loadImage(_.shieldImage);
if(_.bulletImage.length === 0) _.loadImage(_.bulletImage);

//-----------------------------------------------------------------------------
// Array
//-----------------------------------------------------------------------------

Array.prototype.delete = function(i) {
	if(i < this.length - 1) {
		this[i] = this.pop();
	} else {
		this.pop();
	}
};

//-----------------------------------------------------------------------------
// DataManager
//-----------------------------------------------------------------------------

var notetagsLoaded = false;
var _DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
	if(!_DataManager_isDatabaseLoaded.call(this)) return false;
	if(!notetagsLoaded) {
		if(_.shieldImage.length === 0) _.loadImage(_.shieldImage);
		if(_.bulletImage.length === 0) _.loadImage(_.bulletImage);
		_.loadUTBTagsFromSkills($dataSkills);
		_.loadUTBTagsFromActors($dataActors);
		notetagsLoaded = true;
	}
	return true;
};

var _DataManager_createGameObjects = DataManager.createGameObjects;
DataManager.createGameObjects = function() {
	_DataManager_createGameObjects.apply(this, arguments);
	$gameMessageBubble = new Game_MessageBubble();
};

//-----------------------------------------------------------------------------
// SRD.UTB
//-----------------------------------------------------------------------------

_.loadUTBTagsFromActors = function(actors) {
	var main = /<\s*UTB\s*Sprite\s*:\s*(.*)\s*>/im;
	var speed = /<\s*UTB\s*Speed\s*:\s*(.*)\s*>/im;
	var shape = /<\s*UTB\s*Shape\s*:\s*(.*)\s*>/im;
	var width = /<\s*UTB\s*Width\s*:\s*(.*)\s*>/im;
	var height = /<\s*UTB\s*Height\s*:\s*(.*)\s*>/im;
	var radius = /<\s*UTB\s*Radius\s*:\s*(.*)\s*>/im;
	for(var i = 1; i < actors.length; i++) {
		if(actors[i].note.match(main)) {
			actors[i].utb_image = RegExp.$1;
			_.loadImage(actors[i].utb_image, _.nHue);
			_.loadImage(actors[i].utb_image, _.gHue);
			_.loadImage(actors[i].utb_image, _.sHue);
			_.loadImage(actors[i].utb_image, _.pHue);
			_.loadImage(actors[i].utb_image, _.bHue);
			_.loadImage(actors[i].utb_image, _.oHue);
		} else {
			var name = actors[i].characterName;
			if(actors[i].characterName) {
				ImageManager.loadCharacter(name, _.gHue);
				ImageManager.loadCharacter(name, _.sHue);
				ImageManager.loadCharacter(name, _.pHue);
				ImageManager.loadCharacter(name, _.bHue);
				ImageManager.loadCharacter(name, _.oHue);
			}
		}
		if(actors[i].note.match(shape)) {
			var temp = String(RegExp.$1).trim().toLowerCase();
			if(temp === "circle" || temp === "oval" || temp === "c") actors[i].utb_shape = "circle";
			if(temp === "rect" || temp === "rectangle" || temp === "r") actors[i].utb_shape = "rect";
			if(temp === "pixel") actors[i].utb_shape = "pixel";
		}
		if(actors[i].note.match(speed)) actors[i].utb_speed = parseInt(RegExp.$1);
		if(actors[i].note.match(width)) actors[i].utb_width = RegExp.$1;
		if(actors[i].note.match(height)) actors[i].utb_height = RegExp.$1;
		if(actors[i].note.match(radius)) actors[i].utb_radius = RegExp.$1;
	}
};

_.loadUTBTagsFromSkills = function(skills) {
	for(var i = 1; i < skills.length; i++) {
		if(skills[i].note.match(/<\s*Use\s*Undertale\s*Attack\s*>/im)) {
			skills[i].utb_usage = true;
			if(skills[i].note.match(/<\s*UTB\s*Duration\s*:\s*(\d*)\s*>/im)) skills[i].utb_duration = parseInt(RegExp.$1);
			if(skills[i].note.match(/<\s*UTB\s*Mode\s*:\s*(.*)\s*>/im)) {
				skills[i].utb_mode = Number(RegExp.$1);
			} else {
				skills[i].utb_mode = _.mode;
			}
			if(skills[i].note.match(/<\s*UTB\s*Delete\s*Outside\s*Frame\s*>/im)) {
				skills[i].utb_deleteOutsideFrame = true;
			}
			if(skills[i].note.match(/<\s*UTB\s*Invincibility\s*:\s*(\d*)\s*>/im)) skills[i].utb_invincibility = parseInt(RegExp.$1);
			if(skills[i].note.match(/<\s*UTB\s*Code\s*>([\d\D\n\r]*)<\/\s*UTB\s*Code\s*>/im)) {
				skills[i].utb_code = String(RegExp.$1);
			}
			if(skills[i].note.match(/<\s*UTB\s*Initial\s*Code\s*>([\d\D\n\r]*)<\/\s*UTB\s*Initial\s*Code\s*>/im)) {
				skills[i].utb_inicode = String(RegExp.$1);
			}
			var matchResult = [];
			matchResult[0] = skills[i].note.match(/<UTB Attack 1>([\d\D\n\r]*)<\/UTB Attack 1>/im);
			matchResult[1] = skills[i].note.match(/<UTB Attack 2>([\d\D\n\r]*)<\/UTB Attack 2>/im);
			matchResult[2] = skills[i].note.match(/<UTB Attack 3>([\d\D\n\r]*)<\/UTB Attack 3>/im);
			matchResult[3] = skills[i].note.match(/<UTB Attack 4>([\d\D\n\r]*)<\/UTB Attack 4>/im);
			matchResult[4] = skills[i].note.match(/<UTB Attack 5>([\d\D\n\r]*)<\/UTB Attack 5>/im);
			matchResult[5] = skills[i].note.match(/<UTB Attack 6>([\d\D\n\r]*)<\/UTB Attack 6>/im);
			matchResult[6] = skills[i].note.match(/<UTB Attack 7>([\d\D\n\r]*)<\/UTB Attack 7>/im);
			matchResult[7] = skills[i].note.match(/<UTB Attack 8>([\d\D\n\r]*)<\/UTB Attack 8>/im);
			matchResult[8] = skills[i].note.match(/<UTB Attack 9>([\d\D\n\r]*)<\/UTB Attack 9>/im);
			for(var j = 0; j <= 8; j++) {
				if(j === 0) {
					skills[i].utb_attack = [];
					_.loadUTBTagsFromSkillsPart2(matchResult[j] || ['',''], skills, i, j);
				} else if(matchResult[j]) {
					_.loadUTBTagsFromSkillsPart2(matchResult[j], skills, i, j);
				}
			}
		}
	}
};

_.loadUTBTagsFromSkillsPart2 = function(matchResult, skills, i, index) {
	skills[i].utb_attack[index] = {};
	var image = /\s*Image\s*:\s*(.*)/im;
	var aniFrames = /\s*Animation\s*Frames\s*:\s*(.*)/im;
	var aniSpeed = /\s*Animation\s*Speed\s*:\s*(.*)/im;
	var type = /\s*Type\s*:\s*(.*)/im;
	var initX = /\s*Initial\s*X\s*:\s*(.*)/im;
	var initY = /\s*Initial\s*Y\s*:\s*(.*)/im;
	var collision = /\s*Collision\s*Type\s*:\s*(circle|rect|oval|rectangle|c|r|pixel|p)/im;
	var radius = /\s*Radius\s*:\s*(.*)/im;
	var width = /\s*Width\s*:\s*(.*)/im;
	var height = /\s*Height\s*:\s*(.*)/im;
	var staticX = /\s*X\s*Speed\s*:\s*(.*)/im;
	var staticY = /\s*Y\s*Speed\s*:\s*(.*)/im;
	var accelX = /\s*X\s*(?:Acceleration|Accel)\s*:\s*(.*)/im;
	var accelY = /\s*Y\s*(?:Acceleration|Accel)\s*:\s*(.*)/im;
	var scaleX = /\s*X\s*Scale\s*:\s*(.*)/im;
	var scaleY = /\s*Y\s*Scale\s*:\s*(.*)/im;
	var opacity = /\s*Opacity\s*:\s*(.*)/im;
	var rotation = /\s*Rotation\s*:\s*(.*)/im;
	var visibility = /\s*Visibility\s*:\s*(.*)/im;
	var color = /\s*Color\s*:\s*(.*)/im;
	var spawnRate = /\s*Spawn\s*Rate\s*:\s*(.*)/im;
	var spawnDelay = /\s*Spawn\s*Delay\s*:\s*(.*)/im;
	var deleteDistance = /\s*Delete\s*Distance\s*:\s*(.*)/im;
	var destructible = /\s*Destructible\s*:\s*(.*)/im;
	var directCode = /<\s*Direct\s*Code\s*>([\d\D\n\r]*)<\/\s*Direct\s*Code\s*>/im;
	var initalCode = /<\s*Initial\s*Code\s*>([\d\D\n\r]*)<\/\s*Initial\s*Code\s*>/im;
	_.loadImage(_.image);
	if(matchResult[1].match(image)) {
		skills[i].utb_attack[index].image = RegExp.$1;
		_.loadImage(skills[i].utb_attack[index].image);
	} else {
		skills[i].utb_attack[index].image = _.image;
	}
	if(matchResult[1].match(aniFrames)) {
		skills[i].utb_attack[index].aniFrames = String(RegExp.$1);
	} else {
		skills[i].utb_attack[index].aniFrames = _.aniFrames;
	}
	if(matchResult[1].match(aniSpeed)) {
		skills[i].utb_attack[index].aniSpeed = String(RegExp.$1);
	} else {
		skills[i].utb_attack[index].aniSpeed = _.aniSpeed;
	}
	if(matchResult[1].match(type)) {
		skills[i].utb_attack[index].type = RegExp.$1;
	} else {
		skills[i].utb_attack[index].type = _.type;
	}
	if(matchResult[1].match(initX)) {
		skills[i].utb_attack[index].initX = RegExp.$1;
	} else {
		skills[i].utb_attack[index].initX = _.iniX;
	}
	if(matchResult[1].match(initY)) { 
		skills[i].utb_attack[index].initY = RegExp.$1;
	} else {
		skills[i].utb_attack[index].initY = _.iniY;
	}
	if(matchResult[1].match(collision)) {
		var temp = String(RegExp.$1).trim().toLowerCase();
		if(temp === "circle" || temp === "oval" || temp === "c") skills[i].utb_attack[index].collision = "circle";
		if(temp === "rect" || temp === "rectangle" || temp === "r") skills[i].utb_attack[index].collision = "rect";
		if(temp === "pixel") skills[i].utb_attack[index].collision = "pixel";
	} else {
		skills[i].utb_attack[index].collision = _.collision;
	}
	if(matchResult[1].match(radius)) {
		skills[i].utb_attack[index].radius = RegExp.$1;
	} else {
		skills[i].utb_attack[index].radius = _.radius;
	}
	if(matchResult[1].match(width)) {
		skills[i].utb_attack[index].width = RegExp.$1;
	} else {
		skills[i].utb_attack[index].width = _.width;
	}
	if(matchResult[1].match(height)) {
		skills[i].utb_attack[index].height = RegExp.$1;
	} else {
		skills[i].utb_attack[index].height = _.height;
	}
	if(matchResult[1].match(staticX)) {
		skills[i].utb_attack[index].staticX = RegExp.$1;
	} else {
		skills[i].utb_attack[index].staticX = _.xSpeed
	}
	if(matchResult[1].match(staticY)) {
		skills[i].utb_attack[index].staticY = RegExp.$1;
	} else {
		skills[i].utb_attack[index].staticY = _.ySpeed;
	}
	if(matchResult[1].match(accelX)) {
		skills[i].utb_attack[index].accelX = RegExp.$1;
	} else {
		skills[i].utb_attack[index].accelX = _.xAccel;
	}
	if(matchResult[1].match(accelY)) {
		skills[i].utb_attack[index].accelY = RegExp.$1;
	} else {
		skills[i].utb_attack[index].accelY = _.yAccel;
	}
	if(matchResult[1].match(scaleX)) {
		skills[i].utb_attack[index].scaleX = RegExp.$1;
	} else {
		skills[i].utb_attack[index].scaleX = _.xScale;
	}
	if(matchResult[1].match(scaleY)) {
		skills[i].utb_attack[index].scaleY = RegExp.$1;
	} else {
		skills[i].utb_attack[index].scaleY = _.yScale;
	}
	if(matchResult[1].match(opacity)) {
		skills[i].utb_attack[index].opacity = RegExp.$1;
	} else {
		skills[i].utb_attack[index].opacity = _.opacity;
	}
	if(matchResult[1].match(rotation)) {
		skills[i].utb_attack[index].rotation = RegExp.$1;
	} else {
		skills[i].utb_attack[index].rotation = _.rotation;
	}
	if(matchResult[1].match(visibility)) {
		skills[i].utb_attack[index].visibility = RegExp.$1;
	} else {
		skills[i].utb_attack[index].visibility = _.visibility;
	}
	if(matchResult[1].match(color)) {
		skills[i].utb_attack[index].color = RegExp.$1;
	} else {
		skills[i].utb_attack[index].color = _.color;
	}
	if(matchResult[1].match(spawnRate)) {
		skills[i].utb_attack[index].spawnRate = RegExp.$1;
	} else {
		skills[i].utb_attack[index].spawnRate = _.rate;
	}
	if(matchResult[1].match(spawnDelay)) {
		skills[i].utb_attack[index].spawnDelay = RegExp.$1;
	} else {
		skills[i].utb_attack[index].spawnDelay = _.delay;
	}
	if(matchResult[1].match(deleteDistance)) {
		skills[i].utb_attack[index].deleteDistance = RegExp.$1;
	} else {
		skills[i].utb_attack[index].deleteDistance = _.distance;
	}
	if(matchResult[1].match(destructible)) {
		skills[i].utb_attack[index].destructible = RegExp.$1;
	} else {
		skills[i].utb_attack[index].destructible = _.destructible;
	}
	if(matchResult[1].match(directCode)) {
		skills[i].utb_attack[index].directCode = RegExp.$1;
	} else {
		skills[i].utb_attack[index].directCode = _.code;
	}
	if(matchResult[1].match(initalCode)) {
		skills[i].utb_attack[index].iniCode = RegExp.$1;
	} else {
		skills[i].utb_attack[index].iniCode = _.iniCode;
	}
};

//-----------------------------------------------------------------------------
// Scene_Battle
//-----------------------------------------------------------------------------

var _Scene_Battle_createAllWindows = Scene_Battle.prototype.createAllWindows;
Scene_Battle.prototype.createAllWindows = function() {
	_Scene_Battle_createAllWindows.call(this);
	var width = eval(_.frameWidth);
	var height = eval(_.frameHeight);
	var originX = eval(_.frameX);
	this._singleActorHP = new Window_SingleActorHP(0, 0);
	this._singleActorHP.x = eval(_.frameXActor);
	this._singleActorHP.y = eval(_.frameYActor);
	var tempWindow = new Window_Base_Undertale(originX, 0, width, height);
	tempWindow._originX = originX;
	tempWindow._originY = 0;
	if(!_.isHUDImported) {
		this.addWindow(this._singleActorHP);
		tempWindow._originY = this._singleActorHP.y - tempWindow.height;
		tempWindow.y = tempWindow._originY;
	} else {
		tempWindow._originY = this._statusWindow.y - tempWindow.height;
		tempWindow.y = tempWindow._originY;
	}
	this._battleMovementFrameWindow = new UndertaleBattleSystem(tempWindow);
	this.addChild(this._battleMovementFrameWindow);

	this._messageBubble = new Window_Bubble_Message();
	this.addChild(this._messageBubble);
};

var _Scene_Battle_createDisplayObjects = Scene_Battle.prototype.createDisplayObjects;
Scene_Battle.prototype.createDisplayObjects = function() {
	_Scene_Battle_createDisplayObjects.call(this);
	BattleManager.setBattleMovementFrame(this._battleMovementFrameWindow);
	BattleManager.setSingleActorHP(this._singleActorHP);
};

//Overridden
Scene_Battle.prototype.updateStatusWindow = function() {
	if ($gameMessage.isBusy()) {
		if(!_.isHUDImported) this._statusWindow.close();
		this._partyCommandWindow.close();
		this._actorCommandWindow.close();
	} else if (this.isActive() && !this._messageWindow.isClosing()) {
		if(BattleManager.isUTBActive()) {
			if(_.isHUDImported) {
				this._statusWindow.open();
			}
		} else {
			this._statusWindow.open();
		}
	}
};

//-----------------------------------------------------------------------------
// BattleManager
//-----------------------------------------------------------------------------

var _BattleManager_initMembers = BattleManager.initMembers;
BattleManager.initMembers = function() {
	_BattleManager_initMembers.call(this);
	this._utbActivity = false;
};

BattleManager.isUTBActive = function() {
	return this._utbActivity;
};

BattleManager.setBattleMovementFrame = function(frame) {
	this._battleMovementFrameWindow = frame;
};

BattleManager.setSingleActorHP = function(frame) {
	this._singleActorHP = frame;
};

if(Imported.YEP_BattleEngineCore) {
	var _BattleManager_updatePhase = BattleManager.updatePhase;
	BattleManager.updatePhase = function() {
		if(this._subject.isEnemy() && this._action.item().utb_usage && this._phaseSteps[0] === 'target') {
			if(!$gameMessage.isBusy()) this.updateDaUTB();
		} else {
			_BattleManager_updatePhase.call(this);
		}
	};
} else {
	var _BattleManager_updateAction = BattleManager.updateAction;
	BattleManager.updateAction = function() {
		if(this._subject.isEnemy() && this._action.item().utb_usage) {
			if(!$gameMessage.isBusy()) this.updateDaUTB();
		} else {
			_BattleManager_updateAction.call(this);
		}
	};
}

BattleManager.UTBAttackDuration = function() {
	if(this._action && this._action.item().utb_duration) return this._action.item().utb_duration;
	return _.duration;
};

if(Imported.YEP_BattleEngineCore) {
	BattleManager.endUTBAttack = function() {
		this._utbActivity = false;
		this._battleMovementFrameWindow.deactivate();
		this._battleMovementFrameWindow.resetVars();
		this._singleActorHP.close();
		this._statusWindow.refresh();
		this._statusWindow.open();
		this._phaseSteps.shift();
	};
} else {
	BattleManager.endUTBAttack = function() {
		this._utbActivity = false;
		this._battleMovementFrameWindow.deactivate();
		this._battleMovementFrameWindow.resetVars();
		this._singleActorHP.close();
		this._statusWindow.refresh();
		this._statusWindow.open();
		this.endAction();
		this._subject = this.getNextSubject();
	};
}

BattleManager.updateDaUTB = function() {
	if(!this._battleMovementFrameWindow.isActivated()) {
		this._battleMovementFrameWindow.activate();
		this._singleActorHP.open();
		var target = this._targets.shift();
		if (target) {
			this._battleMovementFrameWindow.transferVariables(this._subject, target, this._action);
			this._singleActorHP.setActor(target);
			if(_.isHUDImported) this._statusWindow.setFocusUTBActor(target);
			this._singleActorHP.refresh();
		} else {
			BattleManager.endUTBAttack();
		}
		this._utbActivity = true;
	}
	if(this._statusWindow.isOpen() && !_.isHUDImported) {
		this._statusWindow.close();
	}
	this._battleMovementFrameWindow.masterRefresh();
	if(!_.isHUDImported) this._singleActorHP.refresh();
	else this._statusWindow.updateFocusUTBActor();
};

//-----------------------------------------------------------------------------
// UndertaleBattleSystem
//-----------------------------------------------------------------------------

UndertaleBattleSystem.prototype = Object.create(Stage.prototype);
UndertaleBattleSystem.prototype.constructor = UndertaleBattleSystem;

UndertaleBattleSystem.prototype.initialize = function(tempWindow) {
	Stage.prototype.initialize.call(this);
	//Window
	this.window = tempWindow;
	this.window.openness = 0;
	this.addChild(this.window);
	this.activated = false;
	//Trap Background
	this._trapBackground = new Sprite(new Bitmap(this.window.width, this.window.height));
	for(var i = 0; i < _.trapPositions.length; i++) {
		let y = _.trapPositions[i];
		this._trapBackground.bitmap.fillRect(this.window.standardPadding(), y + 2, 
			this.window.width - (this.window.standardPadding() * 2), 1, _.trapColor);
	}
	this._trapBackground.visible = false;
	this._trapBackground.x = this.window.x;
	this._trapBackground.y = this.window.y;
	this.addChild(this._trapBackground);
	//Green Shield
	this._greenShield = new Sprite();
	this._greenShield.visible = false;
	this.addChild(this._greenShield);
	//Enemy Holder
	this._enemyHolder = new Sprite();
	this.addChild(this._enemyHolder);
	//Death Overlay
	this._deathOverlay = new Sprite(new Bitmap(Graphics.boxWidth, Graphics.boxHeight));
	this._deathOverlay.bitmap.fillRect(0, 0, Graphics.boxWidth, Graphics.boxHeight, "rgba(0, 0, 0, 0.5)");
	this._deathOverlay.visible = false;
	this.addChild(this._deathOverlay);
	this._deathCount = 0;
	//Blur Filter
	this._filter = new PIXI.filters.BlurFilter();
	this._filter.blur = 0;
	//Player
	this._player = new Undertale_Player(this.window, this._greenShield);
	this._player.filters = [this._filter];
	this._player.x = (this.window.x + this.window.width / 2);
	this._player.y = (this.window.y + this.window.height / 2);
	this.addChild(this._player);
	//Other Stuff
	this.clearEnemies();
	this._speed = 1;
	this._i = 0;
	this._i2 = false;
	this._i3 = -1;
	this._frameCount = 0;
	this._setMode = false;
	this._target = null;
	this._targetFace = "Actor1";
	this._targetIndex = 0;
	this._invincibility = _.invincibility;
	this._isPlayerDying = false;
	this._animations = [];
	this.refresh();
};

UndertaleBattleSystem.prototype.isActivated = function() {
	return this.activated;
};

UndertaleBattleSystem.prototype.activate = function() {
	this.activated = true;
	this.window.open();
	this._player.visible = true;
};

UndertaleBattleSystem.prototype.deactivate = function() {
	this.activated = false;
	this.window.close();
	this._player.visible = false;
	this._trapBackground.visible = false;
	this._greenShield.visible = false;
	this._deathOverlay.visible = false;
	this._deathCount = 0;
	this._isPlayerDying = false;
	this._enemies.forEach(function(enemy) {
		this._enemyHolder.removeChild(enemy);
	}, this);
};

UndertaleBattleSystem.prototype.resetVars = function() {
	this.window.x = this.window._originX;
	this.window.y = this.window._originY;
	this.window.width = eval(_.frameWidth);
	this.window.height = eval(_.frameHeight);
	this._player.x = (this.window.x + this.window.width / 2);
	this._player.y = (this.window.y + this.window.height / 2);
	this._player.xspeed = 0;
	this._player.yspeed = 0;
	this._player.invincibleTime = 0;
	this._player.rotation = 0;
	this._player._realRotation = 0;
	this._player.trapIndex = Math.floor(_.trapPositions.length / 2);
	if(this._player.targetY) {
		this._player.targetY = _.trapPositions[this._player.trapIndex] + this.window.y;
	}
	this._filter.blur = 0;
	this._i = 0;
	this._i2 = false;
	this._i3 = -1;
	this._frameCount = 0;
	this._setMode = false;
	this.clearEnemies();
	this._player.bullets = [];
	this._invincibility = _.invincibility;
	this._isPlayerDying = false;
	this._trapBackground.visible = false;
	this._greenShield.visible = false;
	this._deathOverlay.visible = false;
	this._deathCount = 0;
	this._animations = [];
};

UndertaleBattleSystem.prototype.transferVariables = function(subject, target, action) {
	this._subject = subject;
	this._action = action;
	this._item = action.item();
	this._target = target;
	if(this._target && this._target.isActor()) {
		this._targetFace = this._target.characterName();
		this._targetIndex = this._target.characterIndex();
	}
	this._player.setMode(this._item.utb_mode);
	this._player.setActor(this._target);
	if(this._item && this._item.utb_inicode) {
		eval(this._item.utb_inicode);
	}
	if(this._item.utb_invincibility) this._invincibility = this._item.utb_invincibility;
};

UndertaleBattleSystem.prototype.padding = function() {
	return _.padding;
};

UndertaleBattleSystem.prototype.standardBackOpacity = function() {
	return _.opacity;
};

UndertaleBattleSystem.prototype.clearEnemies = function() {
	this._enemies = [];
};

UndertaleBattleSystem.prototype.createAttack = function(index) {
	index = (index > 0) ? index - 1 : index;
	if(this._item) {
		var utb = this._item.utb_attack[index];
		var attack = new Undertale_Enemy(utb, this.window, this._player);
		this._enemyHolder.addChild(attack);
		this._enemies.push(attack);
		return attack;
	}
};

UndertaleBattleSystem.prototype.message = function(message) {
	$gameMessageBubble.add(message);
};

UndertaleBattleSystem.prototype.playSe = function(seName, volume, pitch, pan, pos) {
	var se = {name: seName};
	se.volume = volume || 90;
	se.pitch = pitch || 100;
	se.pan = pan || 0;
	se.pos = pos || 0;
	AudioManager.playSe(se);
};

UndertaleBattleSystem.prototype.boundingBox = function(side) {
	if(side.match(/left/i)) {
		return this.window.x + (this.padding());
	} else if(side.match(/right/i)) {
		return this.window.x + (this.window.width - this.padding());
	} else if(side.match(/up/i)) {
		return this.window.y + (this.padding());
	} else if(side.match(/down/i)) {
		return this.window.y + (this.window.height - this.padding());
	}
	return 0;
};

UndertaleBattleSystem.prototype.update = function() {
	if (this.active) {
		this._animationCount++;
	}
	this.children.forEach(function(child) {
		if (child.update) {
			child.update();
		}
	});
};

UndertaleBattleSystem.prototype.masterRefresh = function() {
	if(!this._isPlayerDying) {
		this._player.updateInfo(this.boundingBox('left'), this.boundingBox('right'), 
				this.boundingBox('up'), this.boundingBox('down'), this._speed);
		if(!$gameMessageBubble.isBusy()) this.refresh();
	} else {
		this.refreshDeath();
	}
};

UndertaleBattleSystem.prototype.refreshDeath = function() {
	if(this._deathCount === 120) {
		this._deathOverlay.visible = false;
		BattleManager.endUTBAttack();
		return;
	}
	if(this._deathCount === 0) {
		this._deathOverlay.visible = true;
	}
	if(this._deathCount >= 30) {
		this._filter.blur++;
		if(this._deathCount === 30) {
			AudioManager.playSe({"name":_.death2Se,"pan":0,"pitch":100,"volume":90});
		}
	}
	this._deathCount++;
};

UndertaleBattleSystem.prototype.refresh = function() {
	var p = this._player;
	var f = Math.floor(this._i);
	this._trapBackground.x = this.window.x;
	this._trapBackground.y = this.window.y;

	if(_.autoSaveText && f === 2 && $gameMessageBubble.hasSavedText()) {
		$gameMessageBubble.useText();
	}

	if(this._item && this._item.utb_code) {
		eval(this._item.utb_code);
	}

	for(var i = 0; i < this._enemies.length; i++) {
		if(this._enemies[i]) {
			this._enemies[i].move(this.window.x, this.window.y, this.window.width, this.window.height, this._speed);
			if(!this._enemies[i]) continue;

			if(this._enemies[i].checkCollisionPlayer(p) && p.invincibleTime === 0) {
				this._action.apply(this._target);
				if(this._target.hp > 0) {
					AudioManager.playSe({"name":_.damageSE,"pan":0,"pitch":100,"volume":90});
				} else {
					AudioManager.playSe({"name":_.death1Se,"pan":0,"pitch":100,"volume":90});
				}
				this._target.refresh();
				p.setInvincibleTime(this._invincibility);
			}

			if(this._enemies[i].destructible && p.mode >= 4 && p.mode < 5) {
				for(var j = 0; j < p.bullets.length; j++) {
					if(this._enemies[i].checkCollisionCircle(p.bullets[j].x, p.bullets[j].y, 5)) {
						this._enemies[i].startDestroy(i);
						this.removeChild(p.bullets[j]);
						p.bullets.delete(j);
						i--;
						j = p.bullets.length;
					}
				}
			}

			if(!this._item.utb_deleteOutsideFrame) {
				if(this._enemies[i] && this._enemies[i].needsDelete(0, Graphics.width, 0, Graphics.height)) {
					this._enemyHolder.removeChild(this._enemies[i]);
					this._enemies.delete(i);
					i--;
				}
			} else {
				if(this._enemies[i] && this._enemies[i].needsDelete(this.boundingBox('left'), this.boundingBox('right'), 
					this.boundingBox('up'), this.boundingBox('down'))) {
					this._enemyHolder.removeChild(this._enemies[i]);
					this._enemies.delete(i);
					i--;
				}
			}

			if(p.mode == 2 && this._enemies[i] && this._enemies[i].checkCollisionShield(p.getShieldRect())) {
				AudioManager.playSe({"name":_.shieldSE,"pan":0,"pitch":100,"volume":90});
				this._enemyHolder.removeChild(this._enemies[i]);
				this._enemies.delete(i);
				i--;
			}
		}
	}
	if(this._item && this._item.utb_attack) {
		for(var i = 0; i < this._item.utb_attack.length; i++) {
			if(this._item.utb_attack[i] && Number(this._item.utb_attack[i].spawnRate) > 0) {
				var rate = Number(this._item.utb_attack[i].spawnRate);
				var delay = Number(this._item.utb_attack[i].spawnDelay);
				if(f > delay && (f - delay) % rate === 0 && this._i3 != f) {
					this.createAttack(i + 1);
				}
			}
		}
	}

	if(this._greenShield.visible && p.mode != 2) this._greenShield.visible = false;
	if(!this._greenShield.visible && p.mode == 2) this._greenShield.visible = true;

	if(this._trapBackground.visible && p.mode != 3) this._trapBackground.visible = false;
	if(!this._trapBackground.visible && p.mode == 3) this._trapBackground.visible = true;

	if(f >= BattleManager.UTBAttackDuration()) {
		BattleManager.endUTBAttack();
	}
	this._i += this._speed;
	if(this._frameCount % 8 === 0) {
		this._i2 = !this._i2;
	}

	if(this._target && this._target.hp <= 0) {
		this._isPlayerDying = true;
	}

	this._i3 = f;
	this._frameCount++;
};

//-----------------------------------------------------------------------------
// Window_Base_Undertale
//-----------------------------------------------------------------------------

Window_Base_Undertale.prototype = Object.create(Window_Base.prototype);
Window_Base_Undertale.prototype.constructor = Window_Base_Undertale;

Object.defineProperty(Window_Base_Undertale.prototype, 'left', {
	get: function() {
		return this.x;
	},
	configurable: true
});

Object.defineProperty(Window_Base_Undertale.prototype, 'right', {
	get: function() {
		return this.x + this.width;
	},
	configurable: true
});

Object.defineProperty(Window_Base_Undertale.prototype, 'top', {
	get: function() {
		return this.y;
	},
	configurable: true
});

Object.defineProperty(Window_Base_Undertale.prototype, 'bottom', {
	get: function() {
		return this.y + this.height;
	},
	configurable: true
});

Object.defineProperty(Window_Base_Undertale.prototype, 'x_middle', {
	get: function() {
		return this.x + (this.width/2);
	},
	configurable: true
});

Object.defineProperty(Window_Base_Undertale.prototype, 'y_middle', {
	get: function() {
		return this.y + (this.height/2);
	},
	configurable: true
});

//-----------------------------------------------------------------------------
// Window_SingleActorHP
//-----------------------------------------------------------------------------

Window_SingleActorHP.prototype = Object.create(Window_Base.prototype);
Window_SingleActorHP.prototype.constructor = Window_SingleActorHP;

Window_SingleActorHP.prototype.initialize = function(x, y) {
	var width = this.windowWidth();
	var height = this.windowHeight();
	Window_Base.prototype.initialize.call(this, x, y, width, height);
	this._openness = 0;
	this._actor = $gameActors.actor(1);
	this._hp = -1;
	this._mhp = -1;
	this.refresh();
};

Window_SingleActorHP.prototype.windowWidth = function() {
	return eval(_.frameWidthActor);
};

Window_SingleActorHP.prototype.windowHeight = function() {
	return eval(_.frameHeightActor);
};

Window_SingleActorHP.prototype.actor = function() {
	return this._actor;
};

Window_SingleActorHP.prototype.setActor = function(actor) {
	this._actor = actor;
	this.forceRefresh();
};

Window_SingleActorHP.prototype.refresh = function() {
	if(this._hp !== this._actor.hp) {
		this.forceRefresh();
	}
};

Window_SingleActorHP.prototype.forceRefresh = function() {
	this._hp = this._actor.hp;
	var x = this.textPadding();
	var width = this.contents.width - this.textPadding() * 2;
	this.contents.clear();
	this.drawActorName(this.actor(), x, 0);
	this.drawActorHp(this.actor(), x + this.textWidth(this.actor().name()) + 30, 0, width / 2);
};

Window_SingleActorHP.prototype.drawActorHp = function(actor, x, y, width) {
	width = width || 186;
	var color1 = this.hpGaugeColor1();
	var color2 = this.hpGaugeColor2();
	this.drawGauge(x, y, width, actor.hpRate(), color1, color2);
	this.changeTextColor(this.systemColor());
	this.drawText(TextManager.hpA, x, y, 44);
	this.drawCurrentAndMax(actor.hp, actor.mhp, x, y, width, this.hpColor(actor), this.normalColor());
};

Window_SingleActorHP.prototype.open = function() {
	this.refresh();
	Window_Base.prototype.open.call(this);
};

//-----------------------------------------------------------------------------
// Undertale_Player
//-----------------------------------------------------------------------------

Undertale_Player.prototype = Object.create(Sprite_Base.prototype);
Undertale_Player.prototype.constructor = Undertale_Player;

Undertale_Player.prototype.initialize = function(window, shield) {
	Sprite_Base.prototype.initialize.call(this);
	this.bitmap = new Bitmap(26, 26);
	this.actor = null;
	this.window = window;
	this.x = 0;
	this.y = 0;
	this.anchor.x = 0.5;
	this.anchor.y = 0.5;
	this.xspeed = 0;
	this.yspeed = 0;
	this.speed = _.pSpeed;
	this.invincibleTime = 0;
	this.mode = 0;
	this.hasJumped = 0;
	this.jumpData = [['up',0,-_.jumpPower], ['up',0,-_.jumpPower], ['right',_.jumpPower,0], ['left',-_.jumpPower,0], ['down',0,_.jumpPower]];
	this.bullets = [];
	this.bulletsCooldown = 0;
	this.trapIndex = Math.floor(_.trapPositions.length / 2);
	this.isTrapMoving = false;
	this._flashMoment = true;
	this._frameCount = 0;
	this._realRotation = 0;
	this._changeInMovement = false;
	this.shield = shield;
};

Undertale_Player.prototype.updateVisibility = function() {};

Undertale_Player.prototype.updateInfo = function(lSide, rSide, uSide, dSide, speed) {
	var right = Input.isPressed('right');
	var left = Input.isPressed('left');
	var up = Input.isPressed('up');
	var down = Input.isPressed('down');
	var spd = (this.speed * speed);
	var jump = false;
	var prevX = this.x;
	var prevY = this.y;
	if(this.mode >= 1 && this.mode < 2) {
		var data = this.jumpData[Math.round((this.mode - 1) * 10)];
		jump = Input.isPressed(data[0]);
		if(jump) this.jump(data[1], data[2]);
		if(!jump && this.hasJumped > 0 && this.hasJumped < _.jumpLimit) this.hasJumped = _.jumpLimit;
	}
	if(this.mode === 0) {
		if(left) this.x -= spd;
		if(right) this.x += spd;
		if(up) this.y -= spd;
		if(down) this.y += spd;
	} else if(this.mode === 1 || this.mode === 1.1) {
		if(left) this.x -= spd;
		if(right) this.x += spd;
		if(this.y + (this.getHeight()/2) > dSide) this.resetJump();
		else this.yspeed += _.jumpGravity;
	} else if(this.mode === 1.2) {
		if(up) this.y -= spd;
		if(down) this.y += spd;
		if(this.x - (this.getWidth()/2) < lSide) this.resetJump();
		else this.xspeed -= _.jumpGravity;
	} else if(this.mode === 1.3) {
		if(up) this.y -= spd;
		if(down) this.y += spd;
		if(this.x + (this.getWidth()/2) > rSide) this.resetJump();
		else this.xspeed += _.jumpGravity;
	} else if(this.mode === 1.4) {
		if(left) this.x -= spd;
		if(right) this.x += spd;
		if(this.y - (this.getHeight()/2) < uSide) this.resetJump();
		else this.yspeed -= _.jumpGravity;
	} else if(this.mode === 2) {
		if(this.shield._realRotation != undefined) {
			if(this.shield.rotation < this.shield._realRotation) {
				this.shield.rotation += 0.5;
				if(this.shield.rotation > this.shield._realRotation) {
					this.shield.rotation = this.shield._realRotation;
				}
			} else if(this.shield.rotation > this.shield._realRotation) {
				this.shield.rotation -= 0.5;
				if(this.shield.rotation < this.shield._realRotation) {
					this.shield.rotation = this.shield._realRotation;
				}
			}
		}
		if(this.shield.rotation === this.shield._realRotation) {
			if(up) this.shield._realRotation = 0;
			if(right) this.shield._realRotation = (Math.PI/2);
			if(down) this.shield._realRotation = (Math.PI);
			if(left) this.shield._realRotation = (Math.PI * (3/2));
		}

		if(this.shield.rotation > this.shield._realRotation + (Math.PI/2)) this.shield.rotation -= (Math.PI*2);
		if(this.shield.rotation < this.shield._realRotation - (Math.PI/2)) this.shield.rotation += (Math.PI*2);
	} else if(this.mode === 3) {
		var upT = Input.isTriggered('up');
		var downT = Input.isTriggered('down');
		if(left) this.x -= spd;
		if(right) this.x += spd;
		if(!this.targetY) this.targetY = _.trapPositions[this.trapIndex] + uSide;
		if(this.y === this.targetY) {
			if(upT && this.trapIndex > 0) {
				this.trapIndex--;
				this.isTrapMoving = true;
			}
			if(downT && this.trapIndex < _.trapPositions.length - 1) {
				this.trapIndex++;
				this.isTrapMoving = true;
			}
		}
		this.targetY = _.trapPositions[this.trapIndex] + uSide;
		if(this.y < this.targetY) {
			this.y += 15;
			if(this.y > this.targetY) {
				this.y = this.targetY;
			}
			if(this.y === this.targetY) this.isTrapMoving = false;
		}
		if(this.y > this.targetY) {
			this.y -= 15;
			if(this.y < this.targetY) {
				this.y = this.targetY;
			}
			if(this.y === this.targetY) this.isTrapMoving = false;
		}
	} else if(this.mode === 4) {
		if(left) this.x -= spd;
		if(right) this.x += spd;
		if(up) this.y -= spd;
		if(down) this.y += spd;
		if(Input.isPressed('ok') &&  this.bulletsCooldown === 0) {
			AudioManager.playSe({"name":_.shootSE,"pan":0,"pitch":100,"volume":90});
			this.createBullet(this.x, this.y, _.shotXSpd, _.shotYSpd);
			this.bulletsCooldown = _.shotCooldown;
		}
		if(!Input.isPressed('ok') && this.bulletsCooldown === 1) this.bulletsCooldown = 0;
		if(this.bulletsCooldown > 1) this.bulletsCooldown -= 1;
		for(var i = 0; i < this.bullets.length; i++) {
			this.bullets[i].update();
			if(this.bullets[i].delete(lSide, rSide, uSide, dSide)) {
				this.parent.removeChild(this.bullets[i])
				this.bullets.delete(i);
			}
		}
	} else if(this.mode === 5) {
		if(left) this.x += spd;
		if(right) this.x -= spd;
		if(up) this.y += spd;
		if(down) this.y -= spd;
	}
	if(this.y + (this.getHeight()/2) > dSide) this.y = dSide - (this.getHeight()/2);
	if(this.y - (this.getHeight()/2) < uSide) this.y = uSide + (this.getHeight()/2);
	if(this.x + (this.getWidth()/2) > rSide) this.x = rSide - (this.getWidth()/2);
	if(this.x - (this.getWidth()/2) < lSide) this.x = lSide + (this.getWidth()/2);
	this.x += this.xspeed;
	this.y += this.yspeed;
	if(this.invincibleTime > 0) {
		this.visible = this._flashMoment;
		if(this._frameCount % 8 === 0) {
			this._flashMoment = !this._flashMoment;
		}
		this.invincibleTime -= 1;
	} else if(!this.visible) {
		this.visible = true;
	}
	this.updateRotation();
	if(prevX != this.x || prevY != this.y) {
		this._changeInMovement = true;
	} else {
		this._changeInMovement = false;
	}
	this._frameCount++;
};

Undertale_Player.prototype.isMoving = function() {
	return this._changeInMovement;
};

Undertale_Player.prototype.setActor = function(a) {
	this.actor = a;
	this.speed = this.actor.actor().utb_speed || this.speed;
	this.setImage();
};

Undertale_Player.prototype.setInvincibleTime = function(invincibility) {
	this.invincibleTime = invincibility;
};

Undertale_Player.prototype.updateRotation = function() {
	if(this.rotation < this._realRotation) {
		this.rotation += 0.1 * (this.speed / 4);
		if(this.rotation > this._realRotation) this.rotation = this._realRotation;
	} else if(this.rotation > this._realRotation) {
		this.rotation -= 0.1 * (this.speed / 4);
		if(this.rotation < this._realRotation) this.rotation = this._realRotation;
	}
};

Undertale_Player.prototype.setMode = function(mode) {
	this.mode = mode;
	if(this.mode === 1.2) this._realRotation = (Math.PI / 2);
	else if(this.mode === 1.3) this._realRotation = (Math.PI * (3/2));
	else if(this.mode === 1.4 || this.mode === 4) this._realRotation = (Math.PI);
	else this._realRotation = 0;
};

Undertale_Player.prototype.setImage = function() {
	var width = this.getWidth();
	var height = this.getHeight();
	this.bitmap = new Bitmap(width, height);
	if(_.drawCollisionMasks) {
		if(this.shape() === 'circle') {
			this.bitmap.drawCircle(width/2, height/2, this.radius(), 'white');
		} else if(this.shape() === 'rect') {
			this.bitmap.fillRect(0, 0, width, height, 'white');
		}
	}
	var hue = this.hue();
	if(this.actor.actor().utb_image) {
		var bitmap = _.loadImage(this.actor.actor().utb_image, hue);
		this.bitmap.blt(bitmap, 0, 0, bitmap.width, bitmap.height, 0, 0, width, height); 
	} else {
		if(!_.drawCollisionMasks) this.bitmap.drawCircle(width/2, height/2, this.radius(), 'white');
		var bitmap = ImageManager.loadCharacter(this.actor.characterName(), hue);
		var pw = bitmap.width / 12;
		var ph = bitmap.height / 8;
		var n = this.actor.characterIndex();
		var sx = (n % 4 * 3 + 1) * pw;
		var sy = (Math.floor(n / 4) * 4) * ph;
		this.bitmap.blt(bitmap, sx, sy, pw, (ph * (2/3)), 2, 3, pw/2, (ph * (1/3)));
	}

	this.setupShield(width, height);
};

Undertale_Player.prototype.setupShield = function(width, height) {
	this.shield.bitmap = new Bitmap(width * 3, height * 3);
	if(_.shieldImage.length === 0) {
		this.shield.bitmap.fillRect(0, 0, width * 3, _.shieldThick, "#0066BB");
	} else {
		var bit = _.loadImage(_.shieldImage);
		this.shield.bitmap.blt(bit, 0, 0, bit.width, bit.height, 0, 0, width * 3, width * 3);
	}
	this.shield._realRotation = 0;
	this.shield.anchor.x = 0.5;
	this.shield.anchor.y = 0.5;
	this.shield.x = this.x;
	this.shield.y = this.y;

	this.shieldUp = {
		x: this.x,
		y: this.y -((this.shield.height/2) - (_.shieldThick/2)),
		width: this.shield.width,
		height: _.shieldThick
	};
	this.shieldDown = {
		x: this.x,
		y: ((this.shield.height/2) - (_.shieldThick/2)) + this.y,
		width: this.shield.width,
		height: _.shieldThick
	};
	this.shieldLeft = {
		x: this.x - ((this.shield.width/2) - (_.shieldThick/2)),
		y: this.y,
		width: _.shieldThick,
		height: this.shield.height
	};
	this.shieldRight = {
		x: ((this.shield.width/2) - (_.shieldThick/2)) + this.x,
		y: this.y,
		width: _.shieldThick,
		height: this.shield.height
	};
};

Undertale_Player.prototype.getShieldRect = function() {
	var rot = this.shield._realRotation;
	if(rot === 0) {
		return this.shieldUp;
	} else if(rot === (Math.PI/2)) {
		return this.shieldRight;
	} else if(rot === (Math.PI)) {
		return this.shieldDown;
	} else if(rot === (Math.PI * (3/2))) {
		return this.shieldLeft;
	}
};

Undertale_Player.prototype.shape = function() {
	if(this.actor === null) return 'circle';
	if(!this.actor.actor().utb_shape) return _.pShape;
	return this.actor.actor().utb_shape.trim().toLowerCase();
};
Undertale_Player.prototype.radius = function() {
	if(this.actor === null) return 0;
	if(this.actor && !this._myRadius) {
		if(!this.actor.actor().utb_radius) {
			this._myRadius = _.pRadius;
		} else {
			this._myRadius = parseInt(this.actor.actor().utb_radius.trim().toLowerCase());
		}
	}
	return this._myRadius;
};
Undertale_Player.prototype.getWidth = function() {
	if(this.actor === null) return 0;
	if(this.shape() === 'circle') return this.radius() * 2;
	if(this.actor && !this._myWidth) {
		if(!this.actor.actor().utb_width) {
			this._myWidth = _.pWidth;
		} else {
			this._myWidth = parseInt(this.actor.actor().utb_width.trim().toLowerCase());
		}
	}
	return this._myWidth;
};
Undertale_Player.prototype.getHeight = function() {
	if(this.actor === null) return 0;
	if(this.shape() === 'circle') return this.radius() * 2;
	if(this.actor && !this._myHeight) {
		if(!this.actor.actor().utb_height) {
			this._myHeight = _.pHeight;
		} else {
			this._myHeight = parseInt(this.actor.actor().utb_height.trim().toLowerCase());
		}
	}
	return this._myHeight;
};

Undertale_Player.prototype.getSpriteWidth = function() {
	return this.width * this.scale.x;
};

Undertale_Player.prototype.getSpriteHeight = function() {
	return this.height * this.scale.y;
};

Undertale_Player.prototype.jump = function(xGain, yGain) {
	if(this.hasJumped < _.jumpLimit) {
		this.xspeed = xGain;
		this.yspeed = yGain;
		this.hasJumped += 1;
	}
};

Undertale_Player.prototype.resetJump = function() {
	this.hasJumped = 0;
	this.yspeed = 0;
	this.xspeed = 0;
};

Undertale_Player.prototype.createBullet = function(x, y, xspd, yspd) {
	var bullet = new Sprite();
	bullet.x = x;
	bullet.y = y;
	bullet.xspd = xspd;
	bullet.yspd = yspd;
	bullet.radius = 5;
	bullet.anchor.x = 0.5;
	bullet.anchor.y = 0.5;
	bullet.deleteDistance = this.radius * 3;
	bullet.update = function() {
		this.x += this.xspd;
		this.y += this.yspd;
	};
	bullet.draw = function() {
		this.bitmap.drawCircle(this.radius, this.radius, this.radius, "#FFFF00");
	};
	bullet.delete = function(lSide, rSide, uSide, dSide) {
		return (this.y - this.deleteDistance > dSide) ||
		(this.y + this.deleteDistance < uSide) ||
		(this.x - this.deleteDistance > rSide) ||
		(this.x + this.deleteDistance < lSide);
	};
	bullet.bitmap = new Bitmap(bullet.radius * 2, bullet.radius * 2);
	bullet.draw();
	this.parent.addChild(bullet);
	this.bullets.push(bullet);
};

Undertale_Player.prototype.hue = function() {
	if(this.mode === 0) return _.nHue;
	if(this.mode >= 1 && this.mode < 2) return _.gHue;
	if(this.mode >= 2 && this.mode < 3) return _.sHue;
	if(this.mode >= 3 && this.mode < 4) return _.pHue;
	if(this.mode >= 4 && this.mode < 5) return _.bHue;
	if(this.mode >= 5 && this.mode < 6) return _.oHue;
	return 0;
};

//-----------------------------------------------------------------------------
// Undertale_Enemy
//-----------------------------------------------------------------------------

Undertale_Enemy.prototype = Object.create(Sprite_Base.prototype);
Undertale_Enemy.prototype.constructor = Undertale_Enemy;

Undertale_Enemy.prototype.initialize = function(utb, window, p) {
	Sprite_Base.prototype.initialize.call(this);
	this.window = window;
	this._player = p;
	this.type = String(utb.type);
	this.directCode = String(utb.directCode);
	this.iniCode = String(utb.iniCode);
	this.image = (utb.image) ? String(utb.image) : 0;
	this.aniFrames = (utb.aniFrames) ? parseInt(utb.aniFrames) : 1;
	this.aniSpeed = (utb.aniSpeed) ? parseInt(utb.aniSpeed) : 0;
	this.x = eval(utb.initX);
	this.y = eval(utb.initY);
	this.anchor.x = 0.5;
	this.anchor.y = 0.5;
	this.shape = String(utb.collision);
	this.destructible = eval(utb.destructible);
	this.deleteDistance = Number(utb.deleteDistance);
	this.scale.x = eval(utb.scaleX);
	this.scale.y = eval(utb.scaleY);
	this.opacity = eval(utb.opacity);
	this.rotation = eval(utb.rotation);
	this.visibility = eval(utb.visibility);
	this.radius = eval(utb.radius);
	this._myheight = eval(utb.height);
	this._mywidth = eval(utb.width);
	this.frame = 0;
	this.color = function() {
		var temp = String(utb.color).trim().toLowerCase();
		if(temp === 'random') temp = _.getRandomColor();
		return temp;
	}.call(this);
	this.bitmap = new Bitmap(this.getWidth(), this.getHeight());
	this.xspeed = eval(utb.staticX);
	this.yspeed = eval(utb.staticY);
	this.xaccel = eval(utb.accelX);
	this.yaccel = eval(utb.accelY);
	this.destroyAnimation = false;
	this.destroyIndex = 0;
	this.battleSystem = null;
	this._needsToBeDeleted = false;
	this._frameWidth = 0;
	this._frameHeight = 0;
	this._currentFrame = 0;
	this._baseBitmap = null;
	this.start(this.window);
};

Undertale_Enemy.prototype.updateVisibility = function() {};

Undertale_Enemy.prototype.start = function(window) {
	this.drawTheThing();
	eval(this.iniCode);
};

Undertale_Enemy.prototype.isCircle = function() {
	return (this.shape === "circle");
};

Undertale_Enemy.prototype.isRect = function() {
	return (this.shape === "rect");
};

Undertale_Enemy.prototype.getWidth = function() {
	if(this.isCircle()) return (this.radius*2);
	return this._mywidth;
};

Undertale_Enemy.prototype.getHeight = function() {
	if(this.isCircle()) return (this.radius*2);
	return this._myheight;
};

Undertale_Enemy.prototype.getSpriteWidth = function() {
	return this.width * this.scale.x;
};

Undertale_Enemy.prototype.getSpriteHeight = function() {
	return this.height * this.scale.y;
};

Undertale_Enemy.prototype.drawTheThing = function() {
	var hw = (this._mywidth / 2);
	var hh = (this._myheight / 2);
	if(_.drawCollisionMasks) {
		if(this.isCircle()) {
			this.bitmap.drawCircle(this.getWidth() / 2, this.getHeight() / 2, this.radius, 'white');
		} else if(this.isRect()) {
			this.bitmap.fillRect(0, 0, this._mywidth, this._myheight, 'white');
		}
	}
	if(this.image == 0) {
		if(this.isCircle()) {
			this.bitmap.drawCircle(this.getWidth() / 2, this.getHeight() / 2, this.radius, this.color);
		} else {
			this.bitmap.fillRect(0, 0, this._mywidth, this._myheight, this.color);
		}
	} else {
		this._baseBitmap = _.loadImage(this.image, 0);
		if(this.shape === 'pixel') {
			this.bitmap = new Bitmap(this._baseBitmap.width, this._baseBitmap.height);
			this.bitmap.blt(this._baseBitmap, 0, 0, this._baseBitmap.width, this._baseBitmap.height, 0, 0);
		} else {
			this.bitmap.blt(this._baseBitmap, 0, 0, this._baseBitmap.width, this._baseBitmap.height, 0, 0, this.getWidth(), this.getHeight());
		}
		if(this.aniFrames > 1) {
			this._frameWidth = Math.floor(this._baseBitmap.width/this.aniFrames);
			this._frameHeight = this._baseBitmap.height;
			this.refreshFrame();
		}
	}
};

Undertale_Enemy.prototype.refreshFrame = function() {
	this.setFrame(this._currentFrame * this._frameWidth, 0, this._frameWidth, this._frameHeight);
};

Undertale_Enemy.prototype.move = function(speed, window) {
	if(this.destroyAnimation) {
		this.scale.x += 0.02;
		this.scale.y += 0.02;
		this.opacity -= 20;
		if(this.opacity <= 0) {
			this.parent.parent._enemies.delete(this.destroyIndex);
			this.parent.removeChild(this);
		}
	} else {
		var frame = this.frame;
		var second = Math.floor(frame / 60);
		this.x += this.xspeed;
		this.y += this.yspeed;
		this.xspeed += this.xaccel;
		this.yspeed += this.yaccel;
		if(this.directCode != 0) eval(this.directCode);
		this.frame += 1;
	}
	if(this.aniFrames > 1 && this.aniSpeed > 0 && this.frame % this.aniSpeed === 0) {
		this._currentFrame++;
		if(this._currentFrame+1 > this.aniFrames) this._currentFrame = 0;
		this.refreshFrame();
	}
};

Undertale_Enemy.prototype.startDestroy = function(index) {
	this.destroyAnimation = true;
	this.destroyIndex = index;
};

Undertale_Enemy.prototype.needsDelete = function(l, r, u, d) {
	if(this._needsToBeDeleted) return true;
	var w = (this.getWidth()/2) + this.deleteDistance;
	var h = (this.getHeight()/2) + this.deleteDistance;
	return(this.x + w < l || this.x - w > r || this.y + h < u || this.y - h > d);
};

Undertale_Enemy.prototype.delete = function() {
	this._needsToBeDeleted = true;
};

Undertale_Enemy.prototype.checkCollisionCircle = function(x, y, r) {
	if(this.isCircle()) {
		var dx = this.x - x;
		var dy = this.y - y;
		var distance = Math.sqrt(dx * dx + dy * dy);
		return (distance < (this.radius + r));
	} else if(this.isRect()) {
		return this.checkCollisionRectCircle(x, y, r, this.x, this.y, this.getWidth(), this.getHeight());
	} else {
		return false;
	}
};

Undertale_Enemy.prototype.checkCollisionRect = function(x, y, w, h) {
	if(this.isRect()) {
		var bottom1, bottom2, left1, left2, right1, right2, top1, top2;
		left1 = this.x - (this._mywidth/2);
		right1 = this.x + (this._mywidth/2);
		top1 = this.y - (this._myheight/2);
		bottom1 = this.y + (this._myheight/2);
		left2 = x - w/2;
		right2 = x + w/2;
		top2 = y - h/2;
		bottom2 = y + h/2;
		return !(left1 > right2 || left2 > right1 || top1 > bottom2 || top2 > bottom1);
	} else if(this.isCircle()) {
		return this.checkCollisionRectCircle(this.x, this.y, this.radius, x, y, w, h);
	} else {
		return false;
	}
};

Undertale_Enemy.prototype.checkCollisionRectCircle = function(x, y, r, x2, y2, w, h) {
	x2 = x2 - (w/2);
	y2 = y2 - (h/2);
	var distX = Math.abs(x - x2 - (w/2));
	var distY = Math.abs(y - y2 - (h/2));
	if(distX > ((w/2) + r)) return false;
	if(distY > ((h/2) + r)) return false;
	if(distX <= (w/2)) return true;
	if(distY <= (h/2)) return true;
	var dx = distX - (w/2);
	var dy = distY - (h/2);
	return ((dx*dx) + (dy*dy) <= (r*r));
};

Undertale_Enemy.prototype.checkCollisionPixel = function(p) {
	if(!this.bitmap) return false;
	for(var i = p._frame.y; i < p.height; i++) {
		for(var j = p._frame.x; j < p.width; j++) {
			var x = (p.x - (p.width/2)) + j;
			var y = (p.y - (p.height/2)) + i;
			var x2 = x - (this.x - (this.width/2));
			var y2 = y - (this.y - (this.height/2));
			x2 += this._frame.x;
			y2 += this._frame.y;
			if(this.insideFrame(x2, y2) && p.bitmap.getAlphaPixel(j, i) > 0 && this.bitmap.getAlphaPixel(x2, y2) > 0) {
				return true;
			}
		}
	}
	return false;
};

Undertale_Enemy.prototype.checkCollisionShield = function(shield) {
	return this.checkCollisionRect(shield.x, shield.y, shield.width, shield.height);
};

Sprite.prototype.insideFrame = function(x, y) {
	return (x >= this._frame.x && x <= this._frame.x + this._frame.width &&
		y >= this._frame.y && y <= this._frame.y + this._frame.height);
};

Undertale_Enemy.prototype.checkCollisionPlayer = function(p) {
	if(this.destroyAnimation) return false;
	if(this.type.match(/stop/i) && !p.isMoving()) return false;
	if(this.type.match(/move/i) && p.isMoving()) return false;
	if(this.shape === 'pixel') {
		return this.checkCollisionPixel(p);
	} else if(p.shape() === 'circle') {
		return this.checkCollisionCircle(p.x, p.y, p.radius());
	} else if(p.shape() === 'rect') {
		return this.checkCollisionRect(p.x, p.y, p.getWidth(), p.getHeight());
	} 
	return false;
};

Undertale_Enemy.prototype.playSe = UndertaleBattleSystem.prototype.playSe;

//-----------------------------------------------------------------------------
// Window_Bubble_Message
//-----------------------------------------------------------------------------

function Window_Bubble_Message() {
	this.initialize.apply(this, arguments);
}

Window_Bubble_Message.prototype = Object.create(Window_Message.prototype);
Window_Bubble_Message.prototype.constructor = Window_Bubble_Message;

Window_Bubble_Message.prototype._updatePauseSign = function() {};

var _Window_Bubble_Message_loadWindowskin = Window_Bubble_Message.prototype.loadWindowskin;
Window_Bubble_Message.prototype.loadWindowskin = function() {
	if(_.bubbleSkin.length > 0) {
		this.windowskin = ImageManager.loadSystem(_.bubbleSkin);
	} else {
		_Window_Bubble_Message_loadWindowskin.apply(this, arguments);
	}
};

Window_Bubble_Message.prototype.numVisibleRows = function() {
	return 3;
};

Window_Bubble_Message.prototype.standardFontSize = function() {
	return 20;
};

Window_Bubble_Message.prototype.standardPadding = function() {
	return 12;
};

Window_Bubble_Message.prototype.standardBackOpacity = function() {
	return 255;
};

Window_Bubble_Message.prototype.windowWidth = function() {
	return Graphics.boxWidth / 3;
};

Window_Bubble_Message.prototype.canStart = function() {
	return $gameMessageBubble.hasText() && !$gameMessageBubble.scrollMode();
};

Window_Bubble_Message.prototype.startMessage = function() {
	this._textState = {};
	this._textState.index = 0;
	this._textState.text = this.convertEscapeCharacters($gameMessageBubble.allText());
	this.newPage(this._textState);
	this.updatePlacement();
	this.updateBackground();
	this.open();
};

Window_Bubble_Message.prototype.updateMessage = function() {
	if (this._textState) {
		while (!this.isEndOfText(this._textState)) {
			if (this.needsNewPage(this._textState)) {
				this.newPage(this._textState);
			}
			this.updateShowFast();
			this.processCharacter(this._textState);
			if (!this._showFast && !this._lineShowFast) {
				break;
			}
			if (this.pause || this._waitCount > 0) {
				break;
			}
		}
		if (this.isEndOfText(this._textState)) {
			this.onEndOfText();
		}
		return true;
	} else {
		return false;
	}
};

Window_Bubble_Message.prototype.updatePlacement = function() {
	var enemy = $gameTroop.members()[$gameMessageBubble._enemyIndex];
	this.x = enemy._screenX;
	this.y = enemy._screenY;
	var bit = ImageManager.loadEnemy(enemy.battlerName());
	this.x += bit.width/2;
	this.y -= bit.height * (5/6);

	if(this.x + this.width > Graphics.boxWidth) {
		this.x = Graphics.boxWidth - (this.width) - 24;
	}
	if(this.y + this.height > Graphics.boxHeight) {
		this.y = Graphics.boxHeight - (this.height) - 24;
	}

	this.contents._drawTextOutline = function() {};
};

Window_Bubble_Message.prototype.updateBackground = function() {
	this._background = $gameMessageBubble.background();
	this.setBackgroundType(this._background);
};

Window_Bubble_Message.prototype.terminateMessage = function() {
	this.close();
	this._goldWindow.close();
	$gameMessageBubble.clear();
};

Window_Bubble_Message.prototype.startInput = function() {
	if ($gameMessageBubble.isChoice()) {
		this._choiceWindow.start();
		return true;
	} else if ($gameMessageBubble.isNumberInput()) {
		this._numberWindow.start();
		return true;
	} else if ($gameMessageBubble.isItemChoice()) {
		this._itemWindow.start();
		return true;
	} else {
		return false;
	}
};

Window_Bubble_Message.prototype.doesContinue = function() {
	return ($gameMessageBubble.hasText() && !$gameMessageBubble.scrollMode() &&
			!this.areSettingsChanged());
};

Window_Bubble_Message.prototype.areSettingsChanged = function() {
	return (this._background !== $gameMessageBubble.background() ||
			this._positionType !== $gameMessageBubble.positionType());
};

Window_Bubble_Message.prototype.loadMessageFace = function() {};
Window_Bubble_Message.prototype.drawMessageFace = function() {};

Window_Bubble_Message.prototype.newLineX = function() {
	return 0;
};

Window_Bubble_Message.prototype.startPause = function() {
	this.startWait(15);
	this.pause = true;
};

//-----------------------------------------------------------------------------
// Game_MessageBattle
//-----------------------------------------------------------------------------

function Game_MessageBubble() {
	this.initialize.apply(this, arguments);
}

Game_MessageBubble.prototype = Object.create(Game_Message.prototype);
Game_MessageBubble.prototype.constructor = Game_MessageBubble;

var _Game_MessageBubble_initialize = Game_MessageBubble.prototype.initialize;
Game_MessageBubble.prototype.initialize = function() {
	_Game_MessageBubble_initialize.apply(this, arguments);
	this._enemyIndex = 0;
	this._savedText = [];
};

Game_MessageBubble.prototype.saveText = function(text) {
	this._savedText.push(text);
};

Game_MessageBubble.prototype.hasSavedText = function() {
	return this._savedText.length > 0;
};

Game_MessageBubble.prototype.useText = function() {
	this._savedText.forEach(function(text) {
		this.add(text);
	}, this);
	this._savedText = [];
};

})(SRD.UTB);