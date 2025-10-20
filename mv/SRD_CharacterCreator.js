/*:
 * @plugindesc Allows players to create their own custom characters.
 * @author SumRndmDde
 *
 * @param Wait for Loading
 * @desc If 'true', then the scene will wait for the resources to load.
 * @default false
 *
 * @param Layers
 * @desc This is the list in which layers are placed in the image. These are based off of the actual Folder names.
 * @default Tail Part2, Wing Part2, Body, Eyes, Eyebrows, Nose, Mouth, Rear Hair Part1, Front Hair Part2, Rear Hair Part2, Clothing, Accessory A, Front Hair Part1, Beast Ears, Glasses, Accessory B, Tail Part1, Wing Part1
 *
 * @param Order
 * @desc This is the order of the sections listed in the Section Command Window.
 * @default Body, Eyes, Eyebrows, Nose, Mouth, Clothing, Front Hair, Rear Hair, Accessory A, Accessory B, Glasses, Beast Ears, Wing, Tail
 *
 * @param Mandatory
 * @desc These are sections that MUST be filled before the Character Creation is closed.
 * @default Body, Eyes, Eyebrows, Nose, Mouth
 *
 * @param Mandatory Color
 * @desc This is the color of text for sections that are mandatory.
 * @default #FFFF00
 *
 * @param Print to Console
 * @desc If 'true', then whenever a character is created, code to replicate that character will be logged.
 * @default false
 *
 * @param == Color Picker ==
 * @default
 *
 * @param Number of Colors
 * @desc This is the amount of colors that will be available to the player.
 * @default 13
 *
 * @param Color Chooser Text
 * @desc The text for the color chooser's text.
 * Use %1 to represent the color id.
 * @default Color: %1
 *
 * @param Color Change SE
 * @desc The sound effect that plays when changing the color of a piece.
 * @default Cursor1
 *
 * @param Color Confirm SE
 * @desc The sound effect that plays when confirming the color of a piece.
 * @default Save
 *
 * @param == Visual Options ==
 * @default
 *
 * @param Active Color Load
 * @desc If 'true', then the colors of pieces will change as you move through the options.
 * @default true
 *
 * @param Use Fade Transition
 * @desc If 'true', then there will be a fade transition when going from the map to the character creator.
 * @default true
 *
 * @param Use Background
 * @desc If 'true', then the "Background" image will be used. Otherwise, the scene will simply overlap the map.
 * @default true
 *
 * @param Small Piece Cols
 * @desc The amount of columns when using small pieces.
 * (More specifically, pieces less than 100px).
 * @default 3
 *
 * @param Big Piece Cols
 * @desc The amount of columns when using small pieces.
 * (More specifically, pieces greater than 100px).
 * @default 1
 *
 * @param == Dialogues ==
 * @default
 *
 * @param Leave Dialogue
 * @desc The dialogue that asks the player whether they're sure they wish to leave the character creator.
 * @default Are you sure you want\n to save this character?
 *
 * @param Mandatory Dialogue
 * @desc The dialogue that shows when the player tries to leave the character creator without completeing all the mandatories.
 * @default You need to have all the mandatory sections \nfilled out before exiting.
 *
 * @param == Size Options ==
 * @default
 *
 * @param Character Width
 * @desc This is the width of each character frame created with the Character Creation.
 * @default 48
 *
 * @param Character Height
 * @desc This is the height of each character frame created with the Character Creation.
 * @default 48
 *
 * @param SV Char Width
 * @desc This is the width of each character frame created with the Character Creation (for side-view battlers).
 * @default 64
 *
 * @param SV Char Height
 * @desc This is the height of each character frame created with the Character Creation (for side-view battlers).
 * @default 64
 *
 * @param Face Width
 * @desc This is the width of each face image created with the Character Creation.
 * @default 144
 *
 * @param Face Height
 * @desc This is the height of each face image created with the Character Creation.
 * @default 144
 *
 * @param == Defaults ==
 * @default
 *
 * @param Default Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default Char
 *
 * @param Default Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default 0
 *
 * @param Default Color
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default true
 *
 * @param Default Condition
 * @desc This is the default JavaScript condition that must be true for a section to appear.
 * @default true
 *
 * @param == Section 1 ==
 * @default
 *
 * @param Section 1 Name
 * @desc The name of the section that will have its attributes changed through "Section 1" Parameters.
 * @default Body
 *
 * @param Section 1 Label Name
 * @desc If this Parameter is filled in, then this section will use this name instead of the one set up in the source files.
 * @default
 *
 * @param Section 1 Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default Face
 *
 * @param Section 1 Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default
 *
 * @param Section 1 Color
 * @desc The direction of the preview in the list window.
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default false
 *
 * @param Section 1 Condition
 * @desc This is the JavaScript condition that must be true for this section to appear.
 * @default true
 *
 * @param == Section 2 ==
 * @default
 *
 * @param Section 2 Name
 * @desc The name of the section that will have its attributes changed through "Section 2" Parameters.
 * @default Clothing
 *
 * @param Section 2 Label Name
 * @desc If this Parameter is filled in, then this section will use this name instead of the one set up in the source files.
 * @default
 *
 * @param Section 2 Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default Char
 *
 * @param Section 2 Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default
 *
 * @param Section 2 Color
 * @desc The direction of the preview in the list window.
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default false
 *
 * @param Section 2 Condition
 * @desc This is the JavaScript condition that must be true for this section to appear.
 * @default true
 *
 * @param == Section 3 ==
 * @default
 *
 * @param Section 3 Name
 * @desc The name of the section that will have its attributes changed through "Section 3" Parameters.
 * @default Rear Hair
 *
 * @param Section 3 Label Name
 * @desc If this Parameter is filled in, then this section will use this name instead of the one set up in the source files.
 * @default
 *
 * @param Section 3 Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default Char
 *
 * @param Section 3 Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default 3
 *
 * @param Section 3 Color
 * @desc The direction of the preview in the list window.
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default true
 *
 * @param Section 3 Condition
 * @desc This is the JavaScript condition that must be true for this section to appear.
 * @default true
 *
 * @param == Section 4 ==
 * @default
 *
 * @param Section 4 Name
 * @desc The name of the section that will have its attributes changed through "Section 4" Parameters.
 * @default Tail
 *
 * @param Section 4 Label Name
 * @desc If this Parameter is filled in, then this section will use this name instead of the one set up in the source files.
 * @default
 *
 * @param Section 4 Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default Char
 *
 * @param Section 4 Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default 3
 *
 * @param Section 4 Color
 * @desc The direction of the preview in the list window.
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default true
 *
 * @param Section 4 Condition
 * @desc This is the JavaScript condition that must be true for this section to appear.
 * @default true
 *
 * @param == Section 5 ==
 * @default
 *
 * @param Section 5 Name
 * @desc The name of the section that will have its attributes changed through "Section 5" Parameters.
 * @default Wing
 *
 * @param Section 5 Label Name
 * @desc If this Parameter is filled in, then this section will use this name instead of the one set up in the source files.
 * @default
 *
 * @param Section 5 Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default Char
 *
 * @param Section 5 Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default 3
 *
 * @param Section 5 Color
 * @desc The direction of the preview in the list window.
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default true
 *
 * @param Section 5 Condition
 * @desc This is the JavaScript condition that must be true for this section to appear.
 * @default true
 *
 * @param == Section 6 ==
 * @default
 *
 * @param Section 6 Name
 * @desc The name of the section that will have its attributes changed through "Section 6" Parameters.
 * @default Eyebrows
 *
 * @param Section 6 Label Name
 * @desc If this Parameter is filled in, then this section will use this name instead of the one set up in the source files.
 * @default
 *
 * @param Section 6 Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default Face
 *
 * @param Section 6 Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default
 *
 * @param Section 6 Color
 * @desc The direction of the preview in the list window.
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default true
 *
 * @param Section 6 Condition
 * @desc This is the JavaScript condition that must be true for this section to appear.
 * @default true
 *
 * @param == Section 7 ==
 * @default
 *
 * @param Section 7 Name
 * @desc The name of the section that will have its attributes changed through "Section 7" Parameters.
 * @default Nose
 *
 * @param Section 7 Label Name
 * @desc If this Parameter is filled in, then this section will use this name instead of the one set up in the source files.
 * @default
 *
 * @param Section 7 Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default Face
 *
 * @param Section 7 Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default
 *
 * @param Section 7 Color
 * @desc The direction of the preview in the list window.
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default false
 *
 * @param Section 7 Condition
 * @desc This is the JavaScript condition that must be true for this section to appear.
 * @default true
 *
 * @param == Section 8 ==
 * @default
 *
 * @param Section 8 Name
 * @desc The name of the section that will have its attributes changed through "Section 8" Parameters.
 * @default Mouth
 *
 * @param Section 8 Label Name
 * @desc If this Parameter is filled in, then this section will use this name instead of the one set up in the source files.
 * @default
 *
 * @param Section 8 Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default Face
 *
 * @param Section 8 Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default
 *
 * @param Section 8 Color
 * @desc The direction of the preview in the list window.
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default false
 *
 * @param Section 8 Condition
 * @desc This is the JavaScript condition that must be true for this section to appear.
 * @default true
 *
 * @param == Section 9 ==
 * @default
 *
 * @param Section 9 Name
 * @desc The name of the section that will have its attributes changed through "Section 9" Parameters.
 * @default Eyes
 *
 * @param Section 9 Label Name
 * @desc If this Parameter is filled in, then this section will use this name instead of the one set up in the source files.
 * @default
 *
 * @param Section 9 Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default Face
 *
 * @param Section 9 Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default
 *
 * @param Section 9 Color
 * @desc The direction of the preview in the list window.
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default true
 *
 * @param Section 9 Condition
 * @desc This is the JavaScript condition that must be true for this section to appear.
 * @default true
 *
 * @param == Section 10 ==
 * @default
 *
 * @param Section 10 Name
 * @desc The name of the section that will have its attributes changed through "Section 10" Parameters.
 * @default
 *
 * @param Section 10 Label Name
 * @desc If this Parameter is filled in, then this section will use this name instead of the one set up in the source files.
 * @default
 *
 * @param Section 10 Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default
 *
 * @param Section 10 Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default
 *
 * @param Section 10 Color
 * @desc The direction of the preview in the list window.
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default
 *
 * @param Section 10 Condition
 * @desc This is the JavaScript condition that must be true for this section to appear.
 * @default true
 *
 * @param == Section 11 ==
 * @default
 *
 * @param Section 11 Name
 * @desc The name of the section that will have its attributes changed through "Section 11" Parameters.
 * @default
 *
 * @param Section 11 Label Name
 * @desc If this Parameter is filled in, then this section will use this name instead of the one set up in the source files.
 * @default
 *
 * @param Section 11 Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default
 *
 * @param Section 11 Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default
 *
 * @param Section 11 Color
 * @desc The direction of the preview in the list window.
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default
 *
 * @param Section 11 Condition
 * @desc This is the JavaScript condition that must be true for this section to appear.
 * @default true
 *
 * @param == Section 12 ==
 * @default
 *
 * @param Section 12 Name
 * @desc The name of the section that will have its attributes changed through "Section 12" Parameters.
 * @default
 *
 * @param Section 12 Label Name
 * @desc If this Parameter is filled in, then this section will use this name instead of the one set up in the source files.
 * @default
 *
 * @param Section 12 Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default
 *
 * @param Section 12 Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default
 *
 * @param Section 12 Color
 * @desc The direction of the preview in the list window.
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default
 *
 * @param Section 12 Condition
 * @desc This is the JavaScript condition that must be true for this section to appear.
 * @default true
 *
 * @param == Section 13 ==
 * @default
 *
 * @param Section 13 Name
 * @desc The name of the section that will have its attributes changed through "Section 13" Parameters.
 * @default
 *
 * @param Section 13 Label Name
 * @desc If this Parameter is filled in, then this section will use this name instead of the one set up in the source files.
 * @default
 *
 * @param Section 13 Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default
 *
 * @param Section 13 Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default
 *
 * @param Section 13 Color
 * @desc The direction of the preview in the list window.
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default
 *
 * @param Section 13 Condition
 * @desc This is the JavaScript condition that must be true for this section to appear.
 * @default true
 *
 * @param == Section 14 ==
 * @default
 *
 * @param Section 14 Name
 * @desc The name of the section that will have its attributes changed through "Section 14" Parameters.
 * @default
 *
 * @param Section 14 Label Name
 * @desc If this Parameter is filled in, then this section will use this name instead of the one set up in the source files.
 * @default
 *
 * @param Section 14 Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default
 *
 * @param Section 14 Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default
 *
 * @param Section 14 Color
 * @desc The direction of the preview in the list window.
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default
 *
 * @param Section 14 Condition
 * @desc This is the JavaScript condition that must be true for this section to appear.
 * @default true
 *
 * @param == Section 15 ==
 * @default
 *
 * @param Section 15 Name
 * @desc The name of the section that will have its attributes changed through "Section 15" Parameters.
 * @default
 *
 * @param Section 15 Label Name
 * @desc If this Parameter is filled in, then this section will use this name instead of the one set up in the source files.
 * @default
 *
 * @param Section 15 Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default
 *
 * @param Section 15 Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default
 *
 * @param Section 15 Color
 * @desc The direction of the preview in the list window.
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default
 *
 * @param Section 15 Condition
 * @desc This is the JavaScript condition that must be true for this section to appear.
 * @default true
 *
 * @param == Section 16 ==
 * @default
 *
 * @param Section 16 Name
 * @desc The name of the section that will have its attributes changed through "Section 16" Parameters.
 * @default
 *
 * @param Section 16 Label Name
 * @desc If this Parameter is filled in, then this section will use this name instead of the one set up in the source files.
 * @default
 *
 * @param Section 16 Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default
 *
 * @param Section 16 Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default
 *
 * @param Section 16 Color
 * @desc The direction of the preview in the list window.
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default
 *
 * @param Section 16 Condition
 * @desc This is the JavaScript condition that must be true for this section to appear.
 * @default true
 *
 * @param == Section 17 ==
 * @default
 *
 * @param Section 17 Name
 * @desc The name of the section that will have its attributes changed through "Section 17" Parameters.
 * @default
 *
 * @param Section 17 Label Name
 * @desc If this Parameter is filled in, then this section will use this name instead of the one set up in the source files.
 * @default
 *
 * @param Section 17 Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default
 *
 * @param Section 17 Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default
 *
 * @param Section 17 Color
 * @desc The direction of the preview in the list window.
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default
 *
 * @param Section 17 Condition
 * @desc This is the JavaScript condition that must be true for this section to appear.
 * @default true
 *
 * @param == Section 18 ==
 * @default
 *
 * @param Section 18 Name
 * @desc The name of the section that will have its attributes changed through "Section 18" Parameters.
 * @default
 *
 * @param Section 18 Label Name
 * @desc If this Parameter is filled in, then this section will use this name instead of the one set up in the source files.
 * @default
 *
 * @param Section 18 Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default
 *
 * @param Section 18 Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default
 *
 * @param Section 18 Color
 * @desc The direction of the preview in the list window.
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default
 *
 * @param Section 18 Condition
 * @desc This is the JavaScript condition that must be true for this section to appear.
 * @default true
 *
 * @param == Section 19 ==
 * @default
 *
 * @param Section 19 Name
 * @desc The name of the section that will have its attributes changed through "Section 19" Parameters.
 * @default
 *
 * @param Section 19 Label Name
 * @desc If this Parameter is filled in, then this section will use this name instead of the one set up in the source files.
 * @default
 *
 * @param Section 19 Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default
 *
 * @param Section 19 Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default
 *
 * @param Section 19 Color
 * @desc The direction of the preview in the list window.
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default
 *
 * @param Section 19 Condition
 * @desc This is the JavaScript condition that must be true for this section to appear.
 * @default true
 *
 * @param == Section 20 ==
 * @default
 *
 * @param Section 20 Name
 * @desc The name of the section that will have its attributes changed through "Section 20" Parameters.
 * @default
 *
 * @param Section 20 Label Name
 * @desc If this Parameter is filled in, then this section will use this name instead of the one set up in the source files.
 * @default
 *
 * @param Section 20 Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default
 *
 * @param Section 20 Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default
 *
 * @param Section 20 Color
 * @desc The direction of the preview in the list window.
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default
 *
 * @param Section 20 Condition
 * @desc This is the JavaScript condition that must be true for this section to appear.
 * @default true
 *
 * @param == Section 21 ==
 * @default
 *
 * @param Section 21 Name
 * @desc The name of the section that will have its attributes changed through "Section 21" Parameters.
 * @default
 *
 * @param Section 21 Label Name
 * @desc If this Parameter is filled in, then this section will use this name instead of the one set up in the source files.
 * @default
 *
 * @param Section 21 Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default
 *
 * @param Section 21 Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default
 *
 * @param Section 21 Color
 * @desc The direction of the preview in the list window.
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default
 *
 * @param Section 21 Condition
 * @desc This is the JavaScript condition that must be true for this section to appear.
 * @default true
 *
 * @param == Section 22 ==
 * @default
 *
 * @param Section 22 Name
 * @desc The name of the section that will have its attributes changed through "Section 22" Parameters.
 * @default
 *
 * @param Section 22 Label Name
 * @desc If this Parameter is filled in, then this section will use this name instead of the one set up in the source files.
 * @default
 *
 * @param Section 22 Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default
 *
 * @param Section 22 Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default
 *
 * @param Section 22 Color
 * @desc The direction of the preview in the list window.
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default
 *
 * @param Section 22 Condition
 * @desc This is the JavaScript condition that must be true for this section to appear.
 * @default true
 *
 * @param == Section 23 ==
 * @default
 *
 * @param Section 23 Name
 * @desc The name of the section that will have its attributes changed through "Section 23" Parameters.
 * @default
 *
 * @param Section 23 Label Name
 * @desc If this Parameter is filled in, then this section will use this name instead of the one set up in the source files.
 * @default
 *
 * @param Section 23 Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default
 *
 * @param Section 23 Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default
 *
 * @param Section 23 Color
 * @desc The direction of the preview in the list window.
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default
 *
 * @param Section 23 Condition
 * @desc This is the JavaScript condition that must be true for this section to appear.
 * @default true
 *
 * @param == Section 24 ==
 * @default
 *
 * @param Section 24 Name
 * @desc The name of the section that will have its attributes changed through "Section 24" Parameters.
 * @default
 *
 * @param Section 24 Label Name
 * @desc If this Parameter is filled in, then this section will use this name instead of the one set up in the source files.
 * @default
 *
 * @param Section 24 Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default
 *
 * @param Section 24 Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default
 *
 * @param Section 24 Color
 * @desc The direction of the preview in the list window.
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default
 *
 * @param Section 24 Condition
 * @desc This is the JavaScript condition that must be true for this section to appear.
 * @default true
 *
 * @param == Section 25 ==
 * @default
 *
 * @param Section 25 Name
 * @desc The name of the section that will have its attributes changed through "Section 25" Parameters.
 * @default
 *
 * @param Section 25 Label Name
 * @desc If this Parameter is filled in, then this section will use this name instead of the one set up in the source files.
 * @default
 *
 * @param Section 25 Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default
 *
 * @param Section 25 Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default
 *
 * @param Section 25 Color
 * @desc The direction of the preview in the list window.
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default
 *
 * @param Section 25 Condition
 * @desc This is the JavaScript condition that must be true for this section to appear.
 * @default true
 *
 * @param == Section 26 ==
 * @default
 *
 * @param Section 26 Name
 * @desc The name of the section that will have its attributes changed through "Section 26" Parameters.
 * @default
 *
 * @param Section 26 Label Name
 * @desc If this Parameter is filled in, then this section will use this name instead of the one set up in the source files.
 * @default
 *
 * @param Section 26 Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default
 *
 * @param Section 26 Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default
 *
 * @param Section 26 Color
 * @desc The direction of the preview in the list window.
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default
 *
 * @param Section 26 Condition
 * @desc This is the JavaScript condition that must be true for this section to appear.
 * @default true
 *
 * @param == Section 27 ==
 * @default
 *
 * @param Section 27 Name
 * @desc The name of the section that will have its attributes changed through "Section 27" Parameters.
 * @default
 *
 * @param Section 27 Label Name
 * @desc If this Parameter is filled in, then this section will use this name instead of the one set up in the source files.
 * @default
 *
 * @param Section 27 Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default
 *
 * @param Section 27 Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default
 *
 * @param Section 27 Color
 * @desc The direction of the preview in the list window.
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default
 *
 * @param Section 27 Condition
 * @desc This is the JavaScript condition that must be true for this section to appear.
 * @default true
 *
 * @param == Section 28 ==
 * @default
 *
 * @param Section 28 Name
 * @desc The name of the section that will have its attributes changed through "Section 28" Parameters.
 * @default
 *
 * @param Section 28 Label Name
 * @desc If this Parameter is filled in, then this section will use this name instead of the one set up in the source files.
 * @default
 *
 * @param Section 28 Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default
 *
 * @param Section 28 Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default
 *
 * @param Section 28 Color
 * @desc The direction of the preview in the list window.
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default
 *
 * @param Section 28 Condition
 * @desc This is the JavaScript condition that must be true for this section to appear.
 * @default true
 *
 * @param == Section 29 ==
 * @default
 *
 * @param Section 29 Name
 * @desc The name of the section that will have its attributes changed through "Section 29" Parameters.
 * @default
 *
 * @param Section 29 Label Name
 * @desc If this Parameter is filled in, then this section will use this name instead of the one set up in the source files.
 * @default
 *
 * @param Section 29 Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default
 *
 * @param Section 29 Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default
 *
 * @param Section 29 Color
 * @desc The direction of the preview in the list window.
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default
 *
 * @param Section 29 Condition
 * @desc This is the JavaScript condition that must be true for this section to appear.
 * @default true
 *
 * @param == Section 30 ==
 * @default
 *
 * @param Section 30 Name
 * @desc The name of the section that will have its attributes changed through "Section 30" Parameters.
 * @default
 *
 * @param Section 30 Label Name
 * @desc If this Parameter is filled in, then this section will use this name instead of the one set up in the source files.
 * @default
 *
 * @param Section 30 Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default
 *
 * @param Section 30 Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default
 *
 * @param Section 30 Color
 * @desc The direction of the preview in the list window.
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default
 *
 * @param Section 30 Condition
 * @desc This is the JavaScript condition that must be true for this section to appear.
 * @default true
 *
 * @param == Section 31 ==
 * @default
 *
 * @param Section 31 Name
 * @desc The name of the section that will have its attributes changed through "Section 31" Parameters.
 * @default
 *
 * @param Section 31 Label Name
 * @desc If this Parameter is filled in, then this section will use this name instead of the one set up in the source files.
 * @default
 *
 * @param Section 31 Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default
 *
 * @param Section 31 Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default
 *
 * @param Section 31 Color
 * @desc The direction of the preview in the list window.
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default
 *
 * @param Section 31 Condition
 * @desc This is the JavaScript condition that must be true for this section to appear.
 * @default true
 *
 * @param == Section 32 ==
 * @default
 *
 * @param Section 32 Name
 * @desc The name of the section that will have its attributes changed through "Section 32" Parameters.
 * @default
 *
 * @param Section 32 Label Name
 * @desc If this Parameter is filled in, then this section will use this name instead of the one set up in the source files.
 * @default
 *
 * @param Section 32 Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default
 *
 * @param Section 32 Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default
 *
 * @param Section 32 Color
 * @desc The direction of the preview in the list window.
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default
 *
 * @param Section 32 Condition
 * @desc This is the JavaScript condition that must be true for this section to appear.
 * @default true
 *
 * @param == Section 33 ==
 * @default
 *
 * @param Section 33 Name
 * @desc The name of the section that will have its attributes changed through "Section 33" Parameters.
 * @default
 *
 * @param Section 33 Label Name
 * @desc If this Parameter is filled in, then this section will use this name instead of the one set up in the source files.
 * @default
 *
 * @param Section 33 Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default
 *
 * @param Section 33 Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default
 *
 * @param Section 33 Color
 * @desc The direction of the preview in the list window.
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default
 *
 * @param Section 33 Condition
 * @desc This is the JavaScript condition that must be true for this section to appear.
 * @default true
 *
 * @param == Section 34 ==
 * @default
 *
 * @param Section 34 Name
 * @desc The name of the section that will have its attributes changed through "Section 34" Parameters.
 * @default
 *
 * @param Section 34 Label Name
 * @desc If this Parameter is filled in, then this section will use this name instead of the one set up in the source files.
 * @default
 *
 * @param Section 34 Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default
 *
 * @param Section 34 Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default
 *
 * @param Section 34 Color
 * @desc The direction of the preview in the list window.
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default
 *
 * @param Section 34 Condition
 * @desc This is the JavaScript condition that must be true for this section to appear.
 * @default true
 *
 * @param == Section 35 ==
 * @default
 *
 * @param Section 35 Name
 * @desc The name of the section that will have its attributes changed through "Section 35" Parameters.
 * @default
 *
 * @param Section 35 Label Name
 * @desc If this Parameter is filled in, then this section will use this name instead of the one set up in the source files.
 * @default
 *
 * @param Section 35 Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default
 *
 * @param Section 35 Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default
 *
 * @param Section 35 Color
 * @desc The direction of the preview in the list window.
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default
 *
 * @param Section 35 Condition
 * @desc This is the JavaScript condition that must be true for this section to appear.
 * @default true
 *
 * @param == Section 36 ==
 * @default
 *
 * @param Section 36 Name
 * @desc The name of the section that will have its attributes changed through "Section 36" Parameters.
 * @default
 *
 * @param Section 36 Label Name
 * @desc If this Parameter is filled in, then this section will use this name instead of the one set up in the source files.
 * @default
 *
 * @param Section 36 Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default
 *
 * @param Section 36 Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default
 *
 * @param Section 36 Color
 * @desc The direction of the preview in the list window.
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default
 *
 * @param Section 36 Condition
 * @desc This is the JavaScript condition that must be true for this section to appear.
 * @default true
 *
 * @param == Section 37 ==
 * @default
 *
 * @param Section 37 Name
 * @desc The name of the section that will have its attributes changed through "Section 37" Parameters.
 * @default
 *
 * @param Section 37 Label Name
 * @desc If this Parameter is filled in, then this section will use this name instead of the one set up in the source files.
 * @default
 *
 * @param Section 37 Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default
 *
 * @param Section 37 Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default
 *
 * @param Section 37 Color
 * @desc The direction of the preview in the list window.
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default
 *
 * @param Section 37 Condition
 * @desc This is the JavaScript condition that must be true for this section to appear.
 * @default true
 *
 * @param == Section 38 ==
 * @default
 *
 * @param Section 38 Name
 * @desc The name of the section that will have its attributes changed through "Section 38" Parameters.
 * @default
 *
 * @param Section 38 Label Name
 * @desc If this Parameter is filled in, then this section will use this name instead of the one set up in the source files.
 * @default
 *
 * @param Section 38 Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default
 *
 * @param Section 38 Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default
 *
 * @param Section 38 Color
 * @desc The direction of the preview in the list window.
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default
 *
 * @param Section 38 Condition
 * @desc This is the JavaScript condition that must be true for this section to appear.
 * @default true
 *
 * @param == Section 39 ==
 * @default
 *
 * @param Section 39 Name
 * @desc The name of the section that will have its attributes changed through "Section 39" Parameters.
 * @default
 *
 * @param Section 39 Label Name
 * @desc If this Parameter is filled in, then this section will use this name instead of the one set up in the source files.
 * @default
 *
 * @param Section 39 Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default
 *
 * @param Section 39 Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default
 *
 * @param Section 39 Color
 * @desc The direction of the preview in the list window.
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default
 *
 * @param Section 39 Condition
 * @desc This is the JavaScript condition that must be true for this section to appear.
 * @default true
 *
 * @param == Section 40 ==
 * @default
 *
 * @param Section 40 Name
 * @desc The name of the section that will have its attributes changed through "Section 40" Parameters.
 * @default
 *
 * @param Section 40 Label Name
 * @desc If this Parameter is filled in, then this section will use this name instead of the one set up in the source files.
 * @default
 *
 * @param Section 40 Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default
 *
 * @param Section 40 Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default
 *
 * @param Section 40 Color
 * @desc The direction of the preview in the list window.
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default
 *
 * @param Section 40 Condition
 * @desc This is the JavaScript condition that must be true for this section to appear.
 * @default true
 *
 * @param == Section 41 ==
 * @default
 *
 * @param Section 41 Name
 * @desc The name of the section that will have its attributes changed through "Section 41" Parameters.
 * @default
 *
 * @param Section 41 Label Name
 * @desc If this Parameter is filled in, then this section will use this name instead of the one set up in the source files.
 * @default
 *
 * @param Section 41 Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default
 *
 * @param Section 41 Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default
 *
 * @param Section 41 Color
 * @desc The direction of the preview in the list window.
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default
 *
 * @param Section 41 Condition
 * @desc This is the JavaScript condition that must be true for this section to appear.
 * @default true
 *
 * @param == Section 42 ==
 * @default
 *
 * @param Section 42 Name
 * @desc The name of the section that will have its attributes changed through "Section 42" Parameters.
 * @default
 *
 * @param Section 42 Label Name
 * @desc If this Parameter is filled in, then this section will use this name instead of the one set up in the source files.
 * @default
 *
 * @param Section 42 Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default
 *
 * @param Section 42 Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default
 *
 * @param Section 42 Color
 * @desc The direction of the preview in the list window.
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default
 *
 * @param Section 42 Condition
 * @desc This is the JavaScript condition that must be true for this section to appear.
 * @default true
 *
 * @param == Section 43 ==
 * @default
 *
 * @param Section 43 Name
 * @desc The name of the section that will have its attributes changed through "Section 43" Parameters.
 * @default
 *
 * @param Section 43 Label Name
 * @desc If this Parameter is filled in, then this section will use this name instead of the one set up in the source files.
 * @default
 *
 * @param Section 43 Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default
 *
 * @param Section 43 Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default
 *
 * @param Section 43 Color
 * @desc The direction of the preview in the list window.
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default
 *
 * @param Section 43 Condition
 * @desc This is the JavaScript condition that must be true for this section to appear.
 * @default true
 *
 * @param == Section 44 ==
 * @default
 *
 * @param Section 44 Name
 * @desc The name of the section that will have its attributes changed through "Section 44" Parameters.
 * @default
 *
 * @param Section 44 Label Name
 * @desc If this Parameter is filled in, then this section will use this name instead of the one set up in the source files.
 * @default
 *
 * @param Section 44 Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default
 *
 * @param Section 44 Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default
 *
 * @param Section 44 Color
 * @desc The direction of the preview in the list window.
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default
 *
 * @param Section 44 Condition
 * @desc This is the JavaScript condition that must be true for this section to appear.
 * @default true
 *
 * @param == Section 45 ==
 * @default
 *
 * @param Section 45 Name
 * @desc The name of the section that will have its attributes changed through "Section 45" Parameters.
 * @default
 *
 * @param Section 45 Label Name
 * @desc If this Parameter is filled in, then this section will use this name instead of the one set up in the source files.
 * @default
 *
 * @param Section 45 Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default
 *
 * @param Section 45 Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default
 *
 * @param Section 45 Color
 * @desc The direction of the preview in the list window.
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default
 *
 * @param Section 45 Condition
 * @desc This is the JavaScript condition that must be true for this section to appear.
 * @default true
 *
 * @param == Section 46 ==
 * @default
 *
 * @param Section 46 Name
 * @desc The name of the section that will have its attributes changed through "Section 46" Parameters.
 * @default
 *
 * @param Section 46 Label Name
 * @desc If this Parameter is filled in, then this section will use this name instead of the one set up in the source files.
 * @default
 *
 * @param Section 46 Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default
 *
 * @param Section 46 Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default
 *
 * @param Section 46 Color
 * @desc The direction of the preview in the list window.
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default
 *
 * @param Section 46 Condition
 * @desc This is the JavaScript condition that must be true for this section to appear.
 * @default true
 *
 * @param == Section 47 ==
 * @default
 *
 * @param Section 47 Name
 * @desc The name of the section that will have its attributes changed through "Section 47" Parameters.
 * @default
 *
 * @param Section 47 Label Name
 * @desc If this Parameter is filled in, then this section will use this name instead of the one set up in the source files.
 * @default
 *
 * @param Section 47 Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default
 *
 * @param Section 47 Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default
 *
 * @param Section 47 Color
 * @desc The direction of the preview in the list window.
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default
 *
 * @param Section 47 Condition
 * @desc This is the JavaScript condition that must be true for this section to appear.
 * @default true
 *
 * @param == Section 48 ==
 * @default
 *
 * @param Section 48 Name
 * @desc The name of the section that will have its attributes changed through "Section 48" Parameters.
 * @default
 *
 * @param Section 48 Label Name
 * @desc If this Parameter is filled in, then this section will use this name instead of the one set up in the source files.
 * @default
 *
 * @param Section 48 Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default
 *
 * @param Section 48 Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default
 *
 * @param Section 48 Color
 * @desc The direction of the preview in the list window.
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default
 *
 * @param Section 48 Condition
 * @desc This is the JavaScript condition that must be true for this section to appear.
 * @default true
 *
 * @param == Section 49 ==
 * @default
 *
 * @param Section 49 Name
 * @desc The name of the section that will have its attributes changed through "Section 49" Parameters.
 * @default
 *
 * @param Section 49 Label Name
 * @desc If this Parameter is filled in, then this section will use this name instead of the one set up in the source files.
 * @default
 *
 * @param Section 49 Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default
 *
 * @param Section 49 Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default
 *
 * @param Section 49 Color
 * @desc The direction of the preview in the list window.
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default
 *
 * @param Section 49 Condition
 * @desc This is the JavaScript condition that must be true for this section to appear.
 * @default true
 *
 * @param == Section 50 ==
 * @default
 *
 * @param Section 50 Name
 * @desc The name of the section that will have its attributes changed through "Section 50" Parameters.
 * @default
 *
 * @param Section 50 Label Name
 * @desc If this Parameter is filled in, then this section will use this name instead of the one set up in the source files.
 * @default
 *
 * @param Section 50 Source
 * @desc The source section of the command's image.
 * Choices are: Char | Dead | SV | Face
 * @default
 *
 * @param Section 50 Dir
 * @desc The direction of the preview in the list window.
 * 0 - Down | 1 - Left | 2 - Right | 3 - Up
 * @default
 *
 * @param Section 50 Color
 * @desc The direction of the preview in the list window.
 * @desc If 'true', then the player will be able to change the hue (color) of the pieces.
 * @default
 *
 * @param Section 50 Condition
 * @desc This is the JavaScript condition that must be true for this section to appear.
 * @default true
 *
 * @help
 *
 * Character Creator
 * Version 1.10
 * SumRndmDde
 *
 *
 * This is a plugin that allows players to create their own custom characters 
 * in game. 
 *
 * A menu system in which the player can create a character can be called
 * upon at any time and assigned to an Actor. Once an Actor has been assigned
 * a custom character, that character will be used on the map and in side-
 * view battles.
 *
 *
 * ==========================================================================
 *  Setting up Files
 * ==========================================================================
 *
 * In order to set up the "generator" pieces, you need to create a new
 * folder in the "img" folder called "character-creator".
 *
 * So the file location should be:
 *
 *   /img/character-creator/
 *
 * Within this folder, you need 3 new folders:
 *
 *   "walk"  -  Overworld Character pieces
 *   "dead"  -  Dead Character pieces
 *   "sv"    -  Side-View Character pieces
 *   "face"  -  Side-View Character pieces
 *
 * So these should be located as:
 *
 *   /img/SumRndmDde/character-creator/walk/
 *   /img/SumRndmDde/character-creator/dead/
 *   /img/SumRndmDde/character-creator/sv/
 *   /img/SumRndmDde/character-creator/face/
 *
 *
 * Within each folder, they all need to have the same folders.
 * Each folder represents a "section" within the Character Creator.
 *
 * For example, if you created a "head", "body", and "feet" folder within
 * each of the folders of the Character Creator, those would appear as
 * sections once you placed them in the "Order" Parameter.
 *
 * I would highly recommend using the sample images provided.
 *
 *
 *
 * Finally, you're also going to need a couple required images placed in:
 *
 *   /img/SumRndmDde/character-creator/
 *
 * These images are:
 *
 *   Background.png
 *   CustomCharacter.png
 *   CustomFace.png
 *   LoadingResources.png
 *
 *
 * The "Background" image will be used as a background for the character 
 * creator if you choose to use it.
 *
 * The "CustomCharacter" and "CustomFace" will be used in scenarios where
 * a custom character's Character or Face image cannot be loaded.
 *
 * Finally, the "LoadingResoureces" image will appear to inform the player
 * that the resources are loading while in the Character Creator.
 *
 *
 * ==========================================================================
 *  Opening the Character Creator
 * ==========================================================================
 *
 * In order to set up the Character Creator, use the Plugin Command:
 *
 *   OpenCharacterCreator [actorId]
 *
 * Set "actorId" to the Actor ID of the Actor you wish to create images for.
 *
 *
 * For example:
 *
 *   OpenCharacterCreator 3
 *   OpenCharacterCreator 7
 *   OpenCharacterCreator 26
 *
 *
 * ==========================================================================
 *  Showing Custom Face in Show Text
 * ==========================================================================
 *
 * If you wish to have a character's custom face used in a "Show Text", 
 * here's what you need to do:
 *
 *
 *   1) Make sure there is a face image selected for the "Show Text" event.
 *      It can be any face image, it just needs to be there.
 *
 *
 *   2) Use the following notetag in the "Show Text" box:
 *
 *      <CC Face: [id]>
 *
 *   Set "id" to the ID of the Actor who has the Custom Face you wish to use.
 *
 *
 * ==========================================================================
 *  Disabling the Custom Images
 * ==========================================================================
 *
 * In order temporarily distable the custom images set up for an Actor, use
 * the Plugin Command:
 *
 *   DisableCharacterCreatorImages [actorId]
 *
 * Of course, simply set "actorId" to the Actor ID you wish to disable 
 * custom character images for. 
 *
 *
 *   EnableCharacterCreatorImages [actorId]
 *
 * This would enable the character creator images again.
 *
 *
 * For example:
 *
 *   DisableCharacterCreatorImages 12
 *   EnableCharacterCreatorImages 8
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
 *
 */

var SRD = SRD || {};
SRD.CharacterCreator = SRD.CharacterCreator || {};

var Imported = Imported || {};
Imported["SumRndmDde Character Creator"] = 1.10;

$gameCharacterCreations = null;

function Scene_CharacterCreator() {
	this.initialize.apply(this, arguments);
}

function Window_CharacterCreator_FileList() {
	this.initialize.apply(this, arguments);
}

function Window_CharacterCreator_FolderList() {
	this.initialize.apply(this, arguments);
}

function Window_CharacterCreator_Preview() {
	this.initialize.apply(this, arguments);
}

function Game_CharacterCreations() {
	this.initialize.apply(this, arguments);
}

function Sprite_DisplayCharacter() {
	this.initialize.apply(this, arguments);
}

function Sprite_DisplayDeadCharacter() {
	this.initialize.apply(this, arguments);
}

function Sprite_DisplaySvCharacter() {
	this.initialize.apply(this, arguments);
}

function Window_HueSelector() {
	this.initialize.apply(this, arguments);
}

function Window_CharacterCreatorConfirmation() {
	this.initialize.apply(this, arguments);
}

(function(_) {

"use strict";

//-----------------------------------------------------------------------------
// SRD.CharacterCreator
//-----------------------------------------------------------------------------

const params = PluginManager.parameters('SRD_CharacterCreator');

_.isNodeJs = Utils.isNwjs();
_.fileInfoStuff = {};

_.load = String(params['Wait for Loading']).trim().toLowerCase() === 'true';
_.filePath = 'img/SumRndmDde/character-creator/walk/';
_.filePathDead = 'img/SumRndmDde/character-creator/dead/';
_.filePathSv = 'img/SumRndmDde/character-creator/sv/';
_.filePathFace = 'img/SumRndmDde/character-creator/face/';
_.priorities = String(params['Layers']).split(/\s*,\s*/);
_.order = String(params['Order']).split(/\s*,\s*/);
_.mandatory = String(params['Mandatory']).split(/\s*,\s*/);
_.mandatoryColor = String(params['Mandatory Color']);
_.console = String(params['Print to Console']).trim().toLowerCase() === 'true';

_.colorCount = parseInt(params['Number of Colors']) - 1;
_.colorInterval = Math.floor(360 / _.colorCount);
_.maxHue = _.colorInterval * _.colorCount;
_.colorChooser = String(params['Color Chooser Text']);
_.colorSe1 = String(params['Color Change SE']);
_.colorSe2 = String(params['Color Confirm SE']);

_.activeLoad = String(params['Active Color Load']).trim().toLowerCase() === 'true';
_.fade = String(params['Use Fade Transition']).trim().toLowerCase() === 'true';
_.background = String(params['Use Background']).trim().toLowerCase() === 'true';
_.smallCols = parseInt(params['Small Piece Cols']);
_.bigCols = parseInt(params['Big Piece Cols']);

_.leaveDialogue = String(params['Leave Dialogue']).replace(/\\n/g, '\n');
_.mandatoryDialogue = String(params['Mandatory Dialogue']).replace(/\\n/g, '\n');

_.width = parseInt(params['Character Width']);
_.height = parseInt(params['Character Height']);
_.fileWidth = _.width * 3;
_.fileHeight = _.height * 4;

_.svWidth = parseInt(params['SV Char Width']);
_.svHeight = parseInt(params['SV Char Height']);
_.svFileWidth = _.svWidth * 9;
_.svFileHeight = _.svHeight * 6;

_.faceFileWidth = parseInt(params['Face Width']);
_.faceFileHeight = parseInt(params['Face Height']);

_.defaults = {
	direction: parseInt(params['Default Dir']),
	source: String(params['Default Source']),
	color: String(params['Default Color']).trim().toLowerCase() === 'true',
	condition: String(params['Default Condition'])
};

_.settings = {};
for(let i = 1; i <= 50; i++) {
	const section = String(params['Section ' + i + ' Name']);
	if(section.trim().length > 0) {
		_.settings[section.trim()] = {
			label: String(params['Section ' + i + ' Label Name']).trim(),
			direction: parseInt(params['Section ' + i + ' Dir']),
			source: String(params['Section ' + i + ' Source']),
			color: String(params['Section ' + i + ' Color']).trim().toLowerCase() === 'true',
			condition: String(params['Section ' + i + ' Condition'])
		};
	}
}

_.getRealFilePath = function(p) {
	const path = require('path');
	const base = path.dirname(process.mainModule.filename);
	return path.join(base, p);
};

_.getFilePathData = function() {
	var path = require('path');
	var base = path.dirname(process.mainModule.filename);
	return path.join(base, 'data/');
};

_.getFolderListNodeJs = function() {
	const result = [];
	const fs = require('fs');
	const location = this.getRealFilePath(this.filePath);
	const files = fs.readdirSync(location);
	for(let i = 0; i < files.length; i++) {
		const file = location + files[i];
		const stat = fs.statSync(file);
		if(!stat) continue;
		if(stat.isDirectory()) {
			result.push(files[i]);
		}
	}
	return result;
};

_.getFileListNodeJs = function(folder) {
	const result = [];
	const fs = require('fs');
	const location = this.getRealFilePath(this.filePath) + folder;
	const files = fs.readdirSync(location);
	for(let i = 0; i < files.length; i++) {
		const file = location + files[i];
		const stat = fs.statSync(file);
		if(!stat) continue;
		if(!stat.isDirectory() && _.isImageFile(files[i])) {
			const f = files[i].replace('.png', '');
			result.push(f);
		}
	}
	return result;
};

_.saveFileInfoStuff = function() {
	const folds = this.getFolderListNodeJs();
	this.fileInfoStuff.folders = folds;
	for(let i = 0; i < folds.length; i++) {
		const fold = folds[i] + '/';
		this.fileInfoStuff[fold] = this.getFileListNodeJs(fold);
	}

	const data = LZString.compressToBase64(JSON.stringify(this.fileInfoStuff));
	const fs = require('fs');
	const dirPath = this.getFilePathData();
	const filePath = dirPath + 'cc-info.sumrndmdde';
	fs.writeFileSync(filePath, data);
};

_.loadSaveInfoFile = function() {
	var xhr = new XMLHttpRequest();
	var url = 'data/cc-info.sumrndmdde';
	xhr.open('GET', url);
	xhr.onload = function() {
		if (xhr.status < 400) {
			this.fileInfoStuff = JSON.parse(LZString.decompressFromBase64(xhr.responseText));
		}
	};
	xhr.onerror = function() {};
	xhr.send();
};

_.getFolderList = function() {
	return this.fileInfoStuff.folders;
};

_.getFileList = function(folder) {
	return this.fileInfoStuff[folder];
};

_.isImageFile = function(filename) {
	return !!(filename.match(/\.png/i));
};

_.loadImage = function(filename, hue) {
	return ImageManager.loadBitmap('img/SumRndmDde/character-creator/', filename, hue, true);
};

_.preloadCharacterPieces = function() {
	const folders = this.getFolderList();
	for(let i = 0; i < folders.length; i++) {
		const files = this.getFileList(folders[i] + '/');
		for(let j = 0; j < files.length; j++) {
			ImageManager.loadBitmap(this.filePath + folders[i] + '/', files[j]);
			ImageManager.loadBitmap(this.filePathDead + folders[i] + '/', files[j]);
			ImageManager.loadBitmap(this.filePathSv + folders[i] + '/', files[j]);
			ImageManager.loadBitmap(this.filePathFace + folders[i] + '/', files[j]);
		}
	}
	this.loadImage('LoadingResources');
	this.loadImage('CustomCharacter');
	this.loadImage('CustomFace');
	this.loadImage('Background');
};

if(_.isNodeJs) {
	_.saveFileInfoStuff();
} else {
	_.loadSaveInfoFile();
}

//-----------------------------------------------------------------------------
// DataManager
//-----------------------------------------------------------------------------

_.DataManager_createGameObjects = DataManager.createGameObjects;
DataManager.createGameObjects = function() {
	_.DataManager_createGameObjects.call(this);
	$gameCharacterCreations = new Game_CharacterCreations();
	_.preloadCharacterPieces();
};

_.DataManager_makeSaveContents = DataManager.makeSaveContents;
DataManager.makeSaveContents = function() {
	const contents = _.DataManager_makeSaveContents.apply(this, arguments);
	contents.characterCreations = $gameCharacterCreations;
	return contents;
};

_.DataManager_extractSaveContents = DataManager.extractSaveContents;
DataManager.extractSaveContents = function(contents) {
	_.DataManager_extractSaveContents.apply(this, arguments);
	$gameCharacterCreations = contents.characterCreations;
};

_.DataManager_makeSavefileInfo = DataManager.makeSavefileInfo;
DataManager.makeSavefileInfo = function() {
	const info = _.DataManager_makeSavefileInfo.apply(this, arguments);
	info.srd_cc_chars = $gameParty.charactersForSavefile2();
	return info;
};

_.Scene_Load_onLoadSuccess = Scene_Load.prototype.onLoadSuccess;
Scene_Load.prototype.onLoadSuccess = function() {
	_.Scene_Load_onLoadSuccess.apply(this, arguments);
	$gameCharacterCreations.preloadAllBitmaps();
};

//-----------------------------------------------------------------------------
// BattleManager
//-----------------------------------------------------------------------------

_.BattleManager_setup = BattleManager.setup;
BattleManager.setup = function(troopId, canEscape, canLose) {
	_.BattleManager_setup.apply(this, arguments);
	this.customFaceCache = [];
};

//-----------------------------------------------------------------------------
// Game_Temp
//-----------------------------------------------------------------------------

_.Game_Temp_initialize = Game_Temp.prototype.initialize;
Game_Temp.prototype.initialize = function(actorId) {
	_.Game_Temp_initialize.call(this, actorId);
	this._characterCreatorHue = 0;
};

Object.defineProperty(Game_Temp.prototype, 'cc_hue', {
	get: function() {
		return this._characterCreatorHue;
	},
	set: function(value) {
		return this._characterCreatorHue = parseInt(value).clamp(0, 255);
	},
	configurable: true
});

//-----------------------------------------------------------------------------
// Game_Character
//-----------------------------------------------------------------------------

Game_Character.prototype.hasSetImage = function() {
	return false;
};

Game_Character.prototype.needsCustomUpdate = function() {
	return false;
};

//-----------------------------------------------------------------------------
// Game_Player
//-----------------------------------------------------------------------------

Game_Player.prototype.hasSetImage = function() {
	const actor = $gameParty.leader();
	return actor && actor.hasSetImage();
};

Game_Player.prototype.getCreatorBitmap = function() {
	const actor = $gameParty.leader();
	return actor && actor.getCreatorBitmapChar();
};

Game_Player.prototype.getCreatorBitmapDead = function() {
	const actor = $gameParty.leader();
	return actor && actor.getCreatorBitmapDead();
};

Game_Player.prototype.isDeadCustomCharacter = function() {
	const actor = $gameParty.leader();
	return actor && actor._isDeadCustomCharacter;
};

Game_Player.prototype.needsCustomUpdate = function() {
	const actor = $gameParty.leader();
	return actor && actor._neededCustomUpdate;
};

Game_Player.prototype.setNeedsCustomUpdate = function(update) {
	const actor = $gameParty.leader();
	actor._neededCustomUpdate = update;
};

//-----------------------------------------------------------------------------
// Game_Follower
//-----------------------------------------------------------------------------

Game_Follower.prototype.hasSetImage = function() {
	const actor = this.actor();
	return actor && actor.hasSetImage();
};

Game_Follower.prototype.getCreatorBitmap = function() {
	const actor = this.actor();
	return actor && actor.getCreatorBitmapChar();
};

Game_Follower.prototype.getCreatorBitmapDead = function() {
	const actor = this.actor();
	return actor && actor.getCreatorBitmapDead();
};

Game_Follower.prototype.isDeadCustomCharacter = function() {
	const actor = this.actor();
	return actor && actor._isDeadCustomCharacter;
};

Game_Follower.prototype.needsCustomUpdate = function() {
	const actor = this.actor();
	return actor && actor._neededCustomUpdate;
};

Game_Follower.prototype.setNeedsCustomUpdate = function(update) {
	const actor = this.actor();
	actor._neededCustomUpdate = update;
};

//-----------------------------------------------------------------------------
// Game_Actor
//-----------------------------------------------------------------------------

_.Game_Actor_initialize = Game_Actor.prototype.initialize;
Game_Actor.prototype.initialize = function(actorId) {
	_.Game_Actor_initialize.call(this, actorId);
	this._characterCreatorDisabled = false;
	this._isDeadCustomCharacter = false;
	this._neededCustomUpdate = true;
};

Object.defineProperty(Game_Actor.prototype, 'character-creator', {
	get: function() {
		return this._characterCreatorDisabled;
	},
	set: function(value) {
		return this._characterCreatorDisabled = value;
	},
	configurable: true
});

Game_Actor.prototype.hasSetImage = function() {
	return $gameCharacterCreations.hasInfo(this.actorId()) && !this._characterCreatorDisabled;
};

Game_Actor.prototype.getCreatorBitmap = function() {
	return $gameCharacterCreations.buildBitmapSv(this.actorId(), 'sv');
};

Game_Actor.prototype.getCreatorBitmapChar = function() {
	return $gameCharacterCreations.buildBitmap(this.actorId());
};

Game_Actor.prototype.getCreatorBitmapDead = function() {
	return $gameCharacterCreations.buildBitmapSv(this.actorId(), 'dead');
};

Game_Actor.prototype.getCreatorBitmapFace = function() {
	return $gameCharacterCreations.buildBitmapFace(this.actorId(), 'face');
};

//-----------------------------------------------------------------------------
// Game_Party
//-----------------------------------------------------------------------------

Game_Party.prototype.charactersForSavefile2 = function() {
	return this.battleMembers().map(function(actor) {
		if(actor.hasSetImage()) {
			return $gameCharacterCreations.getInfo(actor.actorId()); //actor.actorId();
		} else {
			return null;
		}
	});
};

//-----------------------------------------------------------------------------
// Game_Interpreter
//-----------------------------------------------------------------------------

_.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_.Game_Interpreter_pluginCommand.apply(this, arguments);
	if(command.trim().toLowerCase() === 'opencharactercreator') {
		$gameParty.setMenuActor($gameActors.actor(parseInt(args[0])));
		SceneManager.push(Scene_CharacterCreator);
	}
	if(command.trim().toLowerCase() === 'disablecharactercreatorimages') {
		const actor = $gameActors.actor(parseInt(args[0]));
		actor["character-creator"] = true;
		actor._neededCustomUpdate = true;
	}
	if(command.trim().toLowerCase() === 'enablecharactercreatorimages') {
		const actor = $gameActors.actor(parseInt(args[0]));
		actor["character-creator"] = false;
		actor._neededCustomUpdate = true;
	}
};

//-----------------------------------------------------------------------------
// Game_CharacterCreations
//-----------------------------------------------------------------------------

Game_CharacterCreations.prototype.initialize = function() {
	this._data = [];
	this._dataDd = [];
	this._dataSv = [];
	this._dataFace = [];
};

Game_CharacterCreations.prototype.preloadAllBitmaps = function() {
	const data = $gameActors._data;
	for(let i = 0; i < data.length; i++) {
		if(!data[i]) continue;
		const id = data[i].actorId();
		if(this.hasInfo(id)) this.buildBitmap(id);
		if(this.hasInfo(id, 'dead')) this.buildBitmapDead(id);
		if(this.hasInfo(id, 'sv')) this.buildBitmapSv(id);
		if(this.hasInfo(id, 'face')) this.buildBitmapFace(id);
	}
};

Game_CharacterCreations.prototype.addInfo = function(info, id, type) {
	type = type || '';
	if(type === '') {
		this._data[id] = info;
	} else if(type === 'dead') {
		this._dataDd[id] = info;
	} else if(type === 'sv') {
		this._dataSv[id] = info;
	} else if(type === 'face') {
		this._dataFace[id] = info;
	}
};

Game_CharacterCreations.prototype.addInfos = function(id, info, info2, info3, info4) {
	this._data[id] = info;
	this._dataDd[id] = info2;
	this._dataSv[id] = info3;
	this._dataFace[id] = info4;
};

Game_CharacterCreations.prototype.getInfo = function(id, type) {
	type = type || '';
	if(type === 'dead') {
		return this._dataDd[id];
	} else if(type === 'sv') {
		return this._dataSv[id];
	} else if(type === 'face') {
		return this._dataFace[id];
	}
	return this._data[id];
};

Game_CharacterCreations.prototype.hasInfo = function(id, type) {
	type = type || '';
	if(type === 'dead') {
		return !!this._dataDd[id];
	} else if(type === 'sv') {
		return !!this._dataSv[id];
	} else if(type === 'face') {
		return !!this._dataFace[id];
	}
	return !!this._data[id];
};

Game_CharacterCreations.prototype.buildBitmap = function(id) {
	const data = this.getInfo(id);
	if(!data) return null;
	const bitmap = new Bitmap(_.fileWidth, _.fileHeight);
	for(let i = 0; i < _.priorities.length; i++) {
		const section = _.priorities[i];
		if(data[section]) {
			const info = data[section];
			const bit = ImageManager.loadBitmap(info.path, info.file, info.hue, true);
			bitmap.blt(bit, 0, 0, bit.width, bit.height, 0, 0);
		}
	}
	return bitmap;
};

Game_CharacterCreations.prototype.buildBitmapFromInfo = function(info, type) {
	if(!info) return null;
	type = type || '';
	let bitmap;
	if(type === '' || type === 'dead') {
		bitmap = new Bitmap(_.fileWidth, _.fileHeight);
	} else if(type === 'face') {
		bitmap = new Bitmap(_.faceFileWidth, _.faceFileHeight);
	} else if(type === 'sv') {
		bitmap = new Bitmap(_.svFileWidth, _.svFileHeight);
	}
	const data = info;
	for(let i = 0; i < _.priorities.length; i++) {
		const section = _.priorities[i];
		if(data[section]) {
			const info = data[section];
			const bit = ImageManager.loadBitmap(info.path, info.file, info.hue, true);
			bitmap.blt(bit, 0, 0, bit.width, bit.height, 0, 0);
		}
	}
	return bitmap;
};

Game_CharacterCreations.prototype.buildBitmapDead = function(id) {
	const data = this.getInfo(id, 'dead');
	if(!data) return null;
	const bitmap = new Bitmap(_.fileWidth, _.fileHeight);
	for(let i = 0; i < _.priorities.length; i++) {
		const section = _.priorities[i];
		if(data[section]) {
			const info = data[section];
			const bit = ImageManager.loadBitmap(info.path, info.file, info.hue, true);
			bitmap.blt(bit, 0, 0, bit.width, bit.height, 0, 0);
		}
	}
	return bitmap;
};

Game_CharacterCreations.prototype.buildBitmapSv = function(id) {
	const data = this.getInfo(id, 'sv');
	if(!data) return null;
	const bitmap = new Bitmap(_.svFileWidth, _.svFileHeight);
	for(let i = 0; i < _.priorities.length; i++) {
		const section = _.priorities[i];
		if(data[section]) {
			const info = data[section];
			const bit = ImageManager.loadBitmap(info.path, info.file, info.hue, true);
			bitmap.blt(bit, 0, 0, bit.width, bit.height, 0, 0);
		}
	}
	return bitmap;
};

Game_CharacterCreations.prototype.buildBitmapFace = function(id) {
	const data = this.getInfo(id, 'face');
	if(!data) return null;
	const bitmap = new Bitmap(_.faceFileWidth, _.faceFileHeight);
	for(let i = 0; i < _.priorities.length; i++) {
		const section = _.priorities[i];
		if(data[section]) {
			const info = data[section];
			const bit = ImageManager.loadBitmap(info.path, info.file, info.hue, true);
			bitmap.blt(bit, 0, 0, bit.width, bit.height, 0, 0);
		}
	}
	return bitmap;
};

//-----------------------------------------------------------------------------
// Scene_CharacterCreator
//-----------------------------------------------------------------------------

if(_.fade) {
_.Scene_Map_needsSlowFadeOut = Scene_Map.prototype.needsSlowFadeOut;
Scene_Map.prototype.needsSlowFadeOut = function() {
	return (_.Scene_Map_needsSlowFadeOut.apply(this, arguments) || SceneManager.isNextScene(Scene_CharacterCreator));
};

_.Scene_Map_needsFadeIn = Scene_Map.prototype.needsFadeIn;
Scene_Map.prototype.needsFadeIn = function() {
	return (_.Scene_Map_needsFadeIn.apply(this, arguments) || SceneManager.isPreviousScene(Scene_CharacterCreator));
};
}

//-----------------------------------------------------------------------------
// Scene_CharacterCreator
//-----------------------------------------------------------------------------

Scene_CharacterCreator.prototype = Object.create(Scene_MenuBase.prototype);
Scene_CharacterCreator.prototype.constructor = Scene_CharacterCreator;

Scene_CharacterCreator.prototype.initialize = function(actorId) {
	Scene_MenuBase.prototype.initialize.call(this);
	this._loadedStuff = 0;
	this._combinedMode = false;
	this._mandatories = {};
	for(let i = 0; i < _.mandatory.length; i++) {
		this._mandatories[_.mandatory[i]] = true;
	}
};

Scene_CharacterCreator.prototype.create = function() {
	Scene_MenuBase.prototype.create.call(this);
	this.createFolderList();
	this.createFileList();
	this.createPreviewFaceWindow();
	this.createPreviewWindow();
	this.createPreviewDeadWindow();
	this.createPreviewSvWindow();
	this.createHueWindow();
	if(_.load) this.createLoadingSprite();
	this.checkForAlreadyMandatory();
	this.createMessageWindow();
	this.createConfirmBackground();
	this.createConfirmerWindow();
	this.createTexterWindow();
};

if(_.fade) {
Scene_CharacterCreator.prototype.start = function() {
	Scene_MenuBase.prototype.start.call(this);
	this.startFadeIn(this.fadeSpeed(), false);
};

Scene_CharacterCreator.prototype.stop = function() {
	Scene_MenuBase.prototype.stop.call(this);
	this.startFadeOut(this.slowFadeSpeed(), false);
};
}

Scene_CharacterCreator.prototype.createBackground = function() {
	this._backgroundSprite = new Sprite();
	if(_.background) {
		this._backgroundSprite.bitmap = _.loadImage('Background');
	} else {
		this._backgroundSprite.bitmap = SceneManager.backgroundBitmap();
	}
	this.addChild(this._backgroundSprite);
};

if(_.load) {
Scene_CharacterCreator.prototype.update = function() {
	Scene_MenuBase.prototype.update.call(this);
	if(this._loadingResouces.visible) {
		this._startLoading++;
		if(this._startLoading > 10) {
			this._startLoading = 0;
			this._loadingResouces.visible = false;
		}
	}
	if(this._isMessageActive) {
		if(this._isMessageActive === 1) {
			if(!$gameMessage.isBusy()) {
				this._isMessageActive = false;
				this._folderList.activate();
			}
		}
	}
};
} else {
Scene_CharacterCreator.prototype.update = function() {
	Scene_MenuBase.prototype.update.call(this);
	if(this._isMessageActive) {
		if(this._isMessageActive === 1) {
			if(!$gameMessage.isBusy()) {
				this._isMessageActive = false;
				this._folderList.activate();
			}
		}
	}
};
}

Scene_CharacterCreator.prototype.createFileList = function() {
	this._fileList = new Window_CharacterCreator_FileList(this._folderList);
	this._fileList.setHandler('ok', this.onFileListOK.bind(this));
	this._fileList.setHandler('cancel', this.onFileListCancel.bind(this));
	this._fileList.deselect();
	this._fileList.deactivate();
	this.addWindow(this._fileList);
};

Scene_CharacterCreator.prototype.createFolderList = function() {
	this._folderList = new Window_CharacterCreator_FolderList(this._mandatories);
	this._folderList.setHandler('ok', this.onFolderListOK.bind(this));
	this._folderList.setHandler('combined', this.onFolderListCombined.bind(this));
	this._folderList.setHandler('cancel', this.onFolderListCancel.bind(this));
	this._folderList.activate();
	this._folderList.select(0);
	this.addWindow(this._folderList);
};

Scene_CharacterCreator.prototype.createPreviewFaceWindow = function() {
	this._previewWindowFace = new Window_CharacterCreator_Preview(0, 0, _.faceFileWidth, _.faceFileHeight, this._fileList, 'face');
	this._previewWindowFace.x = (((Graphics.boxWidth - this._fileList.x - this._fileList.width) - this._previewWindowFace.width) / 2) + this._fileList.width + this._fileList.x;
	this._previewWindowFace.y = (Graphics.boxHeight - this._previewWindowFace.height) / 2;
	this.addWindow(this._previewWindowFace);
	if($gameCharacterCreations.hasInfo($gameParty._menuActorId, 'face')) {
		this._previewWindowFace.setInfo($gameCharacterCreations.getInfo($gameParty._menuActorId, 'face'));
		this._loadedStuff++;
	}
};

Scene_CharacterCreator.prototype.createPreviewWindow = function() {
	this._previewWindow = new Window_CharacterCreator_Preview(0, 0, _.width, _.height, this._fileList);
	this._previewWindow.x = ((this._previewWindowFace.width - (this._previewWindow.width*2))/2) + this._previewWindowFace.x;
	this._previewWindow.y = this._previewWindowFace.y +  this._previewWindowFace.height;
	this.addWindow(this._previewWindow);
	if($gameCharacterCreations.hasInfo($gameParty._menuActorId)) {
		this._previewWindow.setInfo($gameCharacterCreations.getInfo($gameParty._menuActorId));
		this._loadedStuff++;
	}
};

Scene_CharacterCreator.prototype.createPreviewDeadWindow = function() {
	this._previewWindowDead = new Window_CharacterCreator_Preview(0, 0, _.width, _.height, this._fileList, 'dead');
	this._previewWindowDead.x = this._previewWindow.x + this._previewWindow.width;
	this._previewWindowDead.y = this._previewWindowFace.y +  this._previewWindowFace.height;
	this.addWindow(this._previewWindowDead);
	if($gameCharacterCreations.hasInfo($gameParty._menuActorId, 'dead')) {
		this._previewWindowDead.setInfo($gameCharacterCreations.getInfo($gameParty._menuActorId, 'dead'));
		this._loadedStuff++;
	}
};

Scene_CharacterCreator.prototype.createPreviewSvWindow = function() {
	this._previewWindowSv = new Window_CharacterCreator_Preview(0, 0, _.svWidth, _.svHeight, this._fileList, 'sv');
	this._previewWindowSv.x = (((Graphics.boxWidth - this._fileList.x - this._fileList.width) - this._previewWindowSv.width) / 2) + this._fileList.width + this._fileList.x;
	this._previewWindowSv.y = this._previewWindowDead.y +  this._previewWindowDead.height;
	this.addWindow(this._previewWindowSv);
	if($gameCharacterCreations.hasInfo($gameParty._menuActorId, 'sv')) {
		this._previewWindowSv.setInfo($gameCharacterCreations.getInfo($gameParty._menuActorId, 'sv'));
		this._loadedStuff++;
	}
};

Scene_CharacterCreator.prototype.createHueWindow = function() {
	this._hueWindow = new Window_HueSelector(0, 0, this._fileList, this);
	this._hueWindow.setHandler('ok', this.onHueWindowOk.bind(this));
	this._hueWindow.setHandler('cancel', this.onHueWindowCancel.bind(this));
	this._hueWindow.x = (((Graphics.boxWidth - this._fileList.x - this._fileList.width) - this._hueWindow.width) / 2) + this._fileList.width + this._fileList.x;
	this._hueWindow.y = (Graphics.boxHeight - this._hueWindow.height) / 6;
	this.addWindow(this._hueWindow);
	this._hueWindow.openness = 0;
	this._hueWindow.deactivate();
};

Scene_CharacterCreator.prototype.createLoadingSprite = function() {
	const bitmap = _.loadImage('LoadingResources');
	this._loadingResouces = new Sprite(bitmap);
	this._loadingResouces.x = (Graphics.boxWidth - this._loadingResouces.width) / 2;
	this._loadingResouces.y = (Graphics.boxHeight - this._loadingResouces.height) / 2;
	this._loadingResouces.visible = false;
	this._startLoading = 0;
	this.addChild(this._loadingResouces);
};

Scene_CharacterCreator.prototype.checkForAlreadyMandatory = function() {
	if(this._loadedStuff === 4) {
		for(let i = 0; i < _.mandatory.length; i++) {
			this._mandatories[_.mandatory[i]] = false;
		}
		this._folderList.refresh();
	} else {
		for(let i = 0; i < _.mandatory.length; i++) {
			let condition = '';
			if(_.settings[_.mandatory[i]]) {
				condition = _.settings[_.mandatory[i]].condition;
			} else {
				condition = _.defaults.condition;
			}
			this._mandatories[_.mandatory[i]] = eval(condition);
		}
	}
};

Scene_CharacterCreator.prototype.createMessageWindow = function() {
	this._messageWindow = new Window_Message();
	this.addWindow(this._messageWindow);
};

Scene_CharacterCreator.prototype.createConfirmBackground = function() {
	this._confirmBack = new Sprite(new Bitmap(Graphics.boxWidth, Graphics.boxHeight));
	this._confirmBack.bitmap.fillRect(0, 0, Graphics.boxWidth, Graphics.boxHeight, 'rgba(0, 0, 0, 0.7)');
	this._confirmBack.opacity = 0;
	this._confirmBack.opacitySpeed = 0;
	this._confirmBack.updateAlias = this._confirmBack.update;
	this._confirmBack.update = function() {
		this.updateAlias.apply(this, arguments);
		if((this.opacitySpeed > 0 && this.opacity < 255) || 
			(this.opacitySpeed < 0 && this.opacity > 0)) {
			this.opacity += this.opacitySpeed;
		} else if(this.opacitySpeed !== 0) {
			this.opacitySpeed = 0;
		}
	};
	this.addChild(this._confirmBack);
};

Scene_CharacterCreator.prototype.createConfirmerWindow = function() {
	this._confirmer = new Window_CharacterCreatorConfirmation();
	this._confirmer.setHandler('yes', this.exitDaScene.bind(this));
	this._confirmer.setHandler('no', this.deconfirm.bind(this));
	this.addChild(this._confirmer);
};

Scene_CharacterCreator.prototype.createTexterWindow = function() {
	this._texter = new Window_Base(0, 0, Graphics.boxWidth / 2, this._confirmer.fittingHeight(2));
	this._texter.openness = 0;
	this._texter.createContents = function() {
		this.contents = new Bitmap(this.contentsWidth(), this.contentsHeight());
		this.resetFontSettings();
		this.drawTextEx("Are you sure you want \nto save this character?", 0, 0);
	};
	this._texter.createContents();
	this.addChild(this._texter);
};

Scene_CharacterCreator.prototype.onFolderListOK = function() {
	this._combinedMode = false;
	this.goToFiles();
};

Scene_CharacterCreator.prototype.onFolderListCombined = function() {
	this._combinedMode = true;
	this.goToFiles();
};

Scene_CharacterCreator.prototype.goToFiles = function() {
	this._fileList.setCombinedMode(this._combinedMode);
	this._fileList.activate();
	this._fileList.select(0);
	if(this.getHueUsage()) this._hueWindow.open();
};

Scene_CharacterCreator.prototype.checkMandatories = function() {
	for(let i = 0; i < _.mandatory.length; i++) {
		if(this._mandatories[_.mandatory[i]]) {
			return true;
		}
	}
	return false;
};

Scene_CharacterCreator.prototype.onFolderListCancel = function() {
	if(this.checkMandatories()) {
		$gameMessage.add(_.mandatoryDialogue);
		this._isMessageActive = 1;
	} else {
		this._confirmBack.opacitySpeed = 16;
		this._confirmer.x = (Graphics.boxWidth - this._confirmer.width) / 2;
		this._confirmer.y = Graphics.boxHeight - this._messageWindow.height - this._confirmer.height;
		this._texter.x = (Graphics.boxWidth - this._texter.width) / 2;
		this._texter.y = this._confirmer.y - this._texter.height;
		this._confirmer.activate();
		this._confirmer.select(0);
		this._confirmer.open();
		this._texter.open();
	}
};

Scene_CharacterCreator.prototype.exitDaScene = function() {
	if(_.console) {
		console.log("var id = 0;\n$gameCharacterCreations.addInfos(id, " + 
			JSON.stringify(this._previewWindow.info()) + ", " +
			JSON.stringify(this._previewWindowDead.info()) + ", " +
			JSON.stringify(this._previewWindowSv.info()) + ", " +
			JSON.stringify(this._previewWindowFace.info()) + ");");
	}
	$gameCharacterCreations.addInfo(this._previewWindow.info(), this.actor().actorId());
	$gameCharacterCreations.addInfo(this._previewWindowDead.info(), this.actor().actorId(), 'dead');
	$gameCharacterCreations.addInfo(this._previewWindowSv.info(), this.actor().actorId(), 'sv');
	$gameCharacterCreations.addInfo(this._previewWindowFace.info(), this.actor().actorId(), 'face');
	this.popScene();
};

Scene_CharacterCreator.prototype.deconfirm = function() {
	this._confirmBack.opacitySpeed = -16;
	this._confirmer.close();
	this._texter.close();
	this._confirmer.deselect();
	this._confirmer.deactivate();
	this._folderList.activate();
};

Scene_CharacterCreator.prototype.getHueUsage = function() {
	let result = false;
	if(_.settings[this._fileList.currentSection()]) result = _.settings[this._fileList.currentSection()].color;
	else result = _.defaults.color;
	return result;
};

Scene_CharacterCreator.prototype.onFileListOK = function() {
	this.saveCurrentSelection();
	if(this.getHueUsage()) {
		if(_.load) {
			this._loadingResouces.visible = true;
			this.preloadAllHues();
		}
		this._fileList.deactivate();
		this._hueWindow.activate();
		this._hueWindow.select(0);
	} else {
		this._fileList.activate();
	}
};

Scene_CharacterCreator.prototype.onHueWindowCancel = function() {
	this._hueWindow.deselect();
	this._hueWindow.deactivate();
	this._fileList.activate();
	this._fileList.reselect();
	$gameTemp.cc_hue = 0;
	this._hueWindow.refresh();
};

Scene_CharacterCreator.prototype.onHueWindowOk = function() {
	this._hueWindow.deselect();
	this._hueWindow.deactivate();
	this._fileList.activate();
	this._fileList.reselect();
	this.saveCurrentSelection();
	$gameTemp.cc_hue = 0;
	this._hueWindow.refresh();
};

Scene_CharacterCreator.prototype.saveCurrentSelection = function() {
	if(!this._combinedMode) {
		this._previewWindow.addImage(this._fileList.currentFilePath(), 
			this._fileList.currentSection(), this._fileList.currentFile(), $gameTemp.cc_hue);
		this._previewWindowDead.addImage(this._fileList.currentFilePathDead(), 
			this._fileList.currentSection(), this._fileList.currentFile(), $gameTemp.cc_hue);
		this._previewWindowSv.addImage(this._fileList.currentFilePathSv(), 
			this._fileList.currentSection(), this._fileList.currentFile(), $gameTemp.cc_hue);
		this._previewWindowFace.addImage(this._fileList.currentFilePathFace(), 
			this._fileList.currentSection(), this._fileList.currentFile(), $gameTemp.cc_hue);
	} else {
		const combines = this._folderList.combines();
		for(let i = 0; i < combines.length; i++) {
			this._previewWindow.addImage(_.filePath + combines[i] + '/', 
				combines[i], this._fileList.currentFile(), $gameTemp.cc_hue);
			this._previewWindowDead.addImage(_.filePathDead + combines[i] + '/', 
				combines[i], this._fileList.currentFile(), $gameTemp.cc_hue);
			this._previewWindowSv.addImage(_.filePathSv + combines[i] + '/', 
				combines[i], this._fileList.currentFile(), $gameTemp.cc_hue);
			this._previewWindowFace.addImage(_.filePathFace + combines[i] + '/', 
				combines[i], this._fileList.currentFile(), $gameTemp.cc_hue);
		}
	}
	if(this._mandatories[this._fileList.currentSection()]) {
		this._mandatories[this._fileList.currentSection()] = false;
	}
	this._folderList.refresh();
};

Scene_CharacterCreator.prototype.preloadAllHues = function() {
	if(!this._combinedMode) {
		for(let i = 0; i <= 255; i+=_.colorInterval) {
			ImageManager.loadBitmap(this._fileList.currentFilePath(), this._fileList.currentFile(), i);
			ImageManager.loadBitmap(this._fileList.currentFilePathDead(), this._fileList.currentFile(), i);
			ImageManager.loadBitmap(this._fileList.currentFilePathSv(), this._fileList.currentFile(), i);
			ImageManager.loadBitmap(this._fileList.currentFilePathFace(), this._fileList.currentFile(), i);
		}
	} else {
		const combines = this._folderList.combines();
		for(let i = 0; i < combines.length; i++) {
			for(let j = 0; j <= 255; j+=_.colorInterval) {
				ImageManager.loadBitmap(_.filePath + combines[i] + '/', this._fileList.currentFile(), j);
				ImageManager.loadBitmap(_.filePathDead + combines[i] + '/', this._fileList.currentFile(), j);
				ImageManager.loadBitmap(_.filePathSv + combines[i] + '/', this._fileList.currentFile(), j);
				ImageManager.loadBitmap(_.filePathFace + combines[i] + '/', this._fileList.currentFile(), j);
			}
		}
	}
};

Scene_CharacterCreator.prototype.onFileListCancel = function() {
	this._fileList.deselect();
	this._fileList.deactivate();
	this._folderList.activate();
	this._hueWindow.close();
};

//-----------------------------------------------------------------------------
// Sprite_Character
//-----------------------------------------------------------------------------

_.Sprite_Character_isImageChanged = Sprite_Character.prototype.isImageChanged;
Sprite_Character.prototype.isImageChanged = function() {
	return (_.Sprite_Character_isImageChanged.apply(this, arguments) || this._character.needsCustomUpdate());
};

_.Sprite_Character_setCharacterBitmap = Sprite_Character.prototype.setCharacterBitmap;
Sprite_Character.prototype.setCharacterBitmap = function() {
	if(!this._character.hasSetImage()) {
		_.Sprite_Character_setCharacterBitmap.call(this);
	} else {
		if(this._character.isDeadCustomCharacter()) {
			this.bitmap = this._character.getCreatorBitmapDead();
		} else {
			this.bitmap = this._character.getCreatorBitmap();
		}
		this._isBigCharacter = true;
	}
};

//-----------------------------------------------------------------------------
// Sprite_Actor
//-----------------------------------------------------------------------------

Sprite_Actor.prototype.updateBitmap = function() {
	Sprite_Battler.prototype.updateBitmap.call(this);
	const name = this._actor.battlerName();
	if (this._battlerName !== name) {
		this._battlerName = name;
		if(!this._actor.hasSetImage()) {
			this._mainSprite.bitmap = ImageManager.loadSvActor(name);
		} else {
			this._mainSprite.bitmap = this._actor.getCreatorBitmap();
		}
	}
};

//-----------------------------------------------------------------------------
// Sprite_DisplayCharacter
//-----------------------------------------------------------------------------

Sprite_DisplayCharacter.prototype = Object.create(Sprite_Base.prototype);
Sprite_DisplayCharacter.prototype.constructor = Sprite_DisplayCharacter;

Sprite_DisplayCharacter.prototype.initialize = function() {
	Sprite_Base.prototype.initialize.call(this);
	this._stepCounter = 1;
	this._stepDirection = 1;
	this._directionCounter = 0;
	this._directions = [0, 1, 3, 2];
	this._specificCounter = 0;
	this.refresh();
};

Sprite_DisplayCharacter.prototype.update = function() {
	Sprite_Base.prototype.update.call(this);
	this._specificCounter++;
	if(this._specificCounter % 10 === 0) {
		this._stepCounter += this._stepDirection;
		if(this._stepCounter === 2 || this._stepCounter === 0) this._stepDirection *= (-1);
		this.refresh();
	}
	if(this._specificCounter % 120 === 0) {
		this._directionCounter++;
		if(this._directionCounter > 3) this._directionCounter = 0;
		this.refresh();
	}
};

Sprite_DisplayCharacter.prototype.refresh = function() {
	this.setFrame(_.width * this._stepCounter, _.height * this._directions[this._directionCounter], 
		_.width, _.height);
};

//-----------------------------------------------------------------------------
// Sprite_DisplayDeadCharacter
//-----------------------------------------------------------------------------

Sprite_DisplayDeadCharacter.prototype = Object.create(Sprite_Base.prototype);
Sprite_DisplayDeadCharacter.prototype.constructor = Sprite_DisplayDeadCharacter;

Sprite_DisplayDeadCharacter.prototype.initialize = function() {
	Sprite_Base.prototype.initialize.call(this);
	this.refresh();
};

Sprite_DisplayDeadCharacter.prototype.refresh = function() {
	this.setFrame(0, 0, _.width, _.height);
};

//-----------------------------------------------------------------------------
// Sprite_DisplaySvCharacter
//-----------------------------------------------------------------------------

Sprite_DisplaySvCharacter.prototype = Object.create(Sprite_Base.prototype);
Sprite_DisplaySvCharacter.prototype.constructor = Sprite_DisplaySvCharacter;

Sprite_DisplaySvCharacter.prototype.initialize = function() {
	Sprite_Base.prototype.initialize.call(this);
	this._stepCounter = 0;
	this._stepDirection = 1;
	this._currentRow = 0;
	this._currentColumn = 0;
	this._specificCounter = 0;
	this.refresh();
};

Sprite_DisplaySvCharacter.prototype.update = function() {
	Sprite_Base.prototype.update.call(this);
	this._specificCounter++;
	if(this._specificCounter % 10 === 0) {
		this._stepCounter += this._stepDirection;
		if(this._stepCounter === 2 || this._stepCounter === 0) this._stepDirection *= (-1);
		this.refresh();
	}
	if(this._specificCounter % 120 === 0) {
		this._currentRow++;
		if(this._currentRow > 5) {
			this._currentRow = 0;
			this._currentColumn++;
			if(this._currentColumn > 2) {
				this._currentColumn = 0;
			}
		}
		this.refresh();
	}
};

Sprite_DisplaySvCharacter.prototype.refresh = function() {
	this.setFrame((_.svWidth * this._stepCounter) + (_.svWidth * 3 * this._currentColumn), 
		_.svHeight * this._currentRow, _.svWidth, _.svHeight);
};

//-----------------------------------------------------------------------------
// Window_Base
//-----------------------------------------------------------------------------

Window_Base.prototype.drawCustomCharacter = function(actor, x, y, bitmap) {
	if(actor.hasSetImage()) {
		bitmap = actor.getCreatorBitmapChar();
	} else {
		bitmap = _.loadImage('CustomCharacter', 0);
	}
	const big = true;
	const pw = bitmap.width / (big ? 3 : 12);
	const ph = bitmap.height / (big ? 4 : 8);
	const n = 0;
	const sx = (n % 4 * 3 + 1) * pw;
	const sy = (Math.floor(n / 4) * 4) * ph;
	this.contents.blt(bitmap, sx, sy, pw, ph, x - pw / 2, y - ph);
};

Window_Base.prototype.drawCustomCharacterFromInfo = function(info, x, y) {
	let bitmap = $gameCharacterCreations.buildBitmapFromInfo(info);
	if(!bitmap) {
		bitmap = _.loadImage('CustomCharacter', 0);
	}
	const pw = bitmap.width / 3;
	const ph = bitmap.height / 4;
	const n = 0;
	const sx = (n % 4 * 3 + 1) * pw;
	const sy = (Math.floor(n / 4) * 4) * ph;
	this.contents.blt(bitmap, sx, sy, pw, ph, x - pw / 2, y - ph);
};

_.Window_Base_drawActorCharacter = Window_Base.prototype.drawActorCharacter;
Window_Base.prototype.drawActorCharacter = function(actor, x, y) {
	if(actor.hasSetImage()) {
		this.drawCustomCharacter(actor, x, y);
	} else {
		_.Window_Base_drawActorCharacter.apply(this, arguments);
	}
};

Window_Base.prototype.drawCustomFace = function(actor, x, y, w, h) {
	const width = Window_Base._faceWidth;
	const height = Window_Base._faceHeight;
	w = w || width;
	h = h || height;
	const bitmap = this.getCustomFace(actor);
	this.contents.blt(bitmap, 0, 0, width, height, x, y, w, h);
};

Window_Base.prototype.getCustomFace = function(actor) {
	if(actor.hasSetImage()) {
		if($gameParty.inBattle()) {
			if(BattleManager.customFaceCache[actor.actorId()]) {
				return BattleManager.customFaceCache[actor.actorId()];
			} else {
				var bitmap = actor.getCreatorBitmapFace();
				BattleManager.customFaceCache[actor.actorId()] = bitmap;
				return bitmap;
			}
		} else {
			return actor.getCreatorBitmapFace();
		}
	} else {
		return _.loadImage('CustomFace', 0);
	}
};

_.Window_Base_drawActorFace = Window_Base.prototype.drawActorFace;
Window_Base.prototype.drawActorFace = function(actor, x, y, width, height) {
	if(actor.hasSetImage()) {
		this.drawCustomFace(actor, x, y, width, height);
	} else {
		_.Window_Base_drawActorFace.apply(this, arguments);
	}
};

Window_Base.prototype.drawCharacterFromBitmap = function(bitmap, x, y) {
	if(!bitmap) {
		bitmap = _.loadImage('CustomCharacter', 0);
	}
	const big = true;
	const pw = bitmap.width / (big ? 3 : 12);
	const ph = bitmap.height / (big ? 4 : 8);
	const n = 0;
	const sx = (n % 4 * 3 + 1) * pw;
	const sy = (Math.floor(n / 4) * 4) * ph;
	this.contents.blt(bitmap, sx, sy, pw, ph, x - pw / 2, y - ph);
};

Window_Base.prototype.drawFaceFromBitmap = function(bitmap, x, y, w, h) {
	const width = Window_Base._faceWidth;
	const height = Window_Base._faceHeight;
	w = w || width;
	h = h || height;
	if(!bitmap) {
		bitmap = _.loadImage('CustomFace', 0);
	}
	this.contents.blt(bitmap, 0, 0, width, height, x, y, w, h);
};

Window_Base.prototype.drawSvActorFromBitmap = function(bitmap, x, y) {
	if(!bitmap) return;
	var pw = bitmap.width / 9;
	var ph = bitmap.height / 6;
	var sx = 0;
	var sy = 0;
	this.contents.blt(bitmap, sx, sy, pw, ph, x - pw / 2, y - ph);
};

//-----------------------------------------------------------------------------
// Window_Message
//-----------------------------------------------------------------------------

_.Window_Message_drawMessageFace = Window_Message.prototype.drawMessageFace;
Window_Message.prototype.drawMessageFace = function() {
	const text = (this._textState) ? this._textState.text : '';
	if(text.match(/<CC\s?Face:\s*(\d+)\s*>/i)) {
		this._textState.text = text.replace(/<CC\s?Face:\s*(\d+)\s*>/i, '');
		const id = parseInt(RegExp.$1);
		this.drawCustomFace($gameActors.actor(id), 0, 0);
	} else {
		_.Window_Message_drawMessageFace.apply(this, arguments);
	}
};

//-----------------------------------------------------------------------------
// Window_SavefileList
//-----------------------------------------------------------------------------

Window_SavefileList.prototype.drawPartyCharacters = function(info, x, y) {
	if(info.characters) {
		for (let i = 0; i < info.characters.length; i++) {
			if(info.srd_cc_chars && info.srd_cc_chars[i]) {
				const data = info.srd_cc_chars[i];
				this.drawCustomCharacterFromInfo(data, x + i * _.width, y);
			} else {
				const data = info.characters[i];
				this.drawCharacter(data[0], data[1], x + i * 48, y);
			}
		}
	}
};

if(Imported.YEP_SaveCore) {

Window_SaveInfo.prototype.drawPartyGraphics = function(dy) {
	if (Yanfly.Param.SaveInfoPartyType === 0) return dy;
	dy = eval(Yanfly.Param.SaveInfoPartyY);
	var length = this._saveContents.party.maxBattleMembers();
	var dw = this.contents.width / length;;
	dw = Math.floor(dw);
	var dx = Math.floor(dw / 2);
	for (var i = 0; i < length; ++i) {
		var actorId = this._saveContents.party._actors[i];
		var member = this._saveContents.actors._data[actorId];
		if (member) {
			const cc = this._saveContents.characterCreations;
			if(cc.hasInfo(actorId)) {
				if(Yanfly.Param.SaveInfoPartyType === 1) {
					var bitt = cc.buildBitmap(actorId);
					this.drawCharacterFromBitmap(bitt, dx, dy);
				} else if (Yanfly.Param.SaveInfoPartyType === 2) {
					var fh = Window_Base._faceHeight;
					var fw = Window_Base._faceWidth;
					var fx = dx - Math.floor(Math.min(fh, dw) / 2);
					var dif = Math.floor(Math.max(0, dw - fw) / 2);
					var name = member.faceName();
					var index = member.faceIndex();
					var bitt = cc.buildBitmapFace(actorId);
					this.drawFaceFromBitmap(bitt, fx - dif, dy - fh, dw, fh);
				} else if (Yanfly.Param.SaveInfoPartyType === 3) {
					var bitt = cc.buildBitmapSv(actorId);
					this.drawSvActorFromBitmap(bitt, dx, dy);
				}
			} else {
				if(Yanfly.Param.SaveInfoPartyType === 1) {
					var name = member.characterName();
					var index = member.characterIndex();
					this.drawCharacter(name, index, dx, dy);
				} else if (Yanfly.Param.SaveInfoPartyType === 2) {
					var fh = Window_Base._faceHeight;
					var fw = Window_Base._faceWidth;
					var fx = dx - Math.floor(Math.min(fh, dw) / 2);
					var dif = Math.floor(Math.max(0, dw - fw) / 2);
					var name = member.faceName();
					var index = member.faceIndex();
					this.drawFace(name, index, fx - dif, dy - fh, dw, fh);
				} else if (Yanfly.Param.SaveInfoPartyType === 3) {
					this.drawSvActor(member, dx, dy);
				}
			}
		}
		dx += dw;
	}
	return dy;
};

}

//-----------------------------------------------------------------------------
// Window_BattleStatus
//-----------------------------------------------------------------------------

if(Imported.YEP_BattleStatusWindow) {

Window_BattleStatus.prototype.drawCustomFace = function(actor, x, y, w, h) {
	const width = Window_Base._faceWidth;
	const height = Window_Base._faceHeight;
	w = w || width;
	h = h || height;
	const bitmap = this.getCustomFace(actor);
	this._faceContents.bitmap.blt(bitmap, 0, 0, width, height, x, y, w, h);
};

_.Window_BattleStatus_drawStatusFace = Window_BattleStatus.prototype.drawStatusFace;
Window_BattleStatus.prototype.drawStatusFace = function(index) {
	var actor = $gameParty.battleMembers()[index];
	if(actor.hasSetImage()) {
		const rect = this.itemRect(index);
		const ww = Math.min(rect.width - 8, Window_Base._faceWidth);
		const wh = Math.min(rect.height - 8, Window_Base._faceHeight);
		const wx = rect.x + rect.width - ww - 6;
		const wy = rect.y + 4;
		Window_Base.prototype.drawActorFace.call(this, actor, wx, wy, ww, wh);
	} else {
		_.Window_BattleStatus_drawStatusFace.apply(this, arguments);
	}
};

Window_BattleStatus.prototype.drawAllFaces = function() {
	for(var i = 0; i < $gameParty.battleMembers().length; ++i) {
		var member = $gameParty.battleMembers()[i];
		var bitmap;
		if(member.hasSetImage()) {
			bitmap = ImageManager.loadFace(member.faceName());
		} else {
			bitmap = this.getCustomFace(member);
		}
		if (bitmap.width <= 0) return setTimeout(this.drawAllFaces.bind(this), 5);
	}
	this._faceContents.bitmap.clear();
	for (var i = 0; i < this.maxItems(); ++i) {
		this.drawStatusFace(i);
	}
};

}

//-----------------------------------------------------------------------------
// Window_CharacterCreator_FolderList
//-----------------------------------------------------------------------------

Window_CharacterCreator_FolderList.prototype = Object.create(Window_Command.prototype);
Window_CharacterCreator_FolderList.prototype.constructor = Window_CharacterCreator_FolderList;

Window_CharacterCreator_FolderList.prototype.initialize = function(mandatories) {
	this._combines = {};
	this._mandatories = mandatories;
	Window_Command.prototype.initialize.call(this);
};

Window_CharacterCreator_FolderList.prototype.currentName = function() {
	return this._list[this.index()].name;
};

Window_CharacterCreator_FolderList.prototype.currentFolder = function() {
	if(this._combines[this._list[this.index()].name]) {
		return this._combines[this._list[this.index()].name][0];
	}
	return this._list[this.index()].name;
};

Window_CharacterCreator_FolderList.prototype.combines = function() {
	return this._combines[this._list[this.index()].name];
};

Window_CharacterCreator_FolderList.prototype.makeCommandList = function() {
	const images = _.getFolderList();
	for(let i = 0; i < images.length; i++) {
		if(images[i]) {
			const fold = images[i];
			if(fold.match(/Part(\d+)/)) {
				const id = parseInt(RegExp.$1);
				const fold2 = fold.replace(/\s*Part\d+\s*/, '');
				if(id === 1) {
					let condition = '';
					if(_.settings[fold2]) {
						condition = _.settings[fold2].condition;
					} else {
						condition = _.defaults.condition;
					}
					if(eval(condition)) this.addCommand(fold2, 'combined');
					this._combines[fold2] = [];
					this._combines[fold2].push(fold);
				} else {
					if(!this._combines[fold2]) this._combines[fold2] = [];
					this._combines[fold2].push(fold);
				}
			} else {
				let condition = '';
				if(_.settings[fold]) {
					condition = _.settings[fold].condition;
				} else {
					condition = _.defaults.condition;
				}
				if(eval(condition)) this.addCommand(fold, 'ok');
			}
		}
	}
	this.reorder();
};

Window_CharacterCreator_FolderList.prototype.drawItem = function(index) {
	const rect = this.itemRectForText(index);
	const align = this.itemTextAlign();
	let name = this._list[index].name;
	if(this._mandatories[name]) {
		this.changeTextColor(_.mandatoryColor);
	}
	if(_.settings[name] && _.settings[name].label) {
		name = _.settings[name].label;
	}
	this.changePaintOpacity(this.isCommandEnabled(index));
	this.drawText(name, rect.x, rect.y, rect.width, align);
	this.resetTextColor();
};

Window_CharacterCreator_FolderList.prototype.reorder = function() {
	const result = [];
	for(let i = 0; i < _.order.length; i++) {
		const o = _.order[i];
		for(let j = 0; j < this._list.length; j++) {
			if(o === this._list[j].name) {
				result.push(this._list[j]);
				continue;
			}
		}
	}
	this._list = result;
};

//-----------------------------------------------------------------------------
// Window_CharacterCreator_FileList
//-----------------------------------------------------------------------------

Window_CharacterCreator_FileList.prototype = Object.create(Window_Command.prototype);
Window_CharacterCreator_FileList.prototype.constructor = Window_CharacterCreator_FileList;

Window_CharacterCreator_FileList.prototype.initialize = function(folderWindow) {
	this._folderWindow = folderWindow;
	this._folder = this._folderWindow.currentFolder();
	this._combinedMode = false;
	this._createStuff();
	Window_Command.prototype.initialize.call(this);
};

Window_CharacterCreator_FileList.prototype._createStuff = function() {
	this._list = [];
	this.makeCommandList();
	const section = this._folderWindow.currentName().trim();
	const file = this._list[0].name;
	let dir;
	let source;
	if(_.settings[section]) {
		dir = _.settings[section].direction;
		source = _.settings[section].source;
	} else {
		dir = _.defaults.direction;
		source = _.defaults.source;
	}
	let filePath = '';
	const sizes = [];
	if(source.match(/Char/i)) {
		filePath = this.currentFilePath();
		sizes[0] = _.width;
		sizes[1] = _.height;
	} else if(source.match(/Dead/i)) {
		filePath = this.currentFilePathDead();
	} else if(source.match(/SV/i)) {
		filePath = this.currentFilePathSv();
		sizes[0] = 0;
		sizes[1] = 0;
	} else if(source.match(/Face/i)) {
		filePath = this.currentFilePathFace();
		sizes[0] = 0;
		sizes[1] = 0;
	}
	const bit = ImageManager.loadBitmap(filePath, file);
	let wid = bit.width / 3;
	let hei = bit.height / 4;
	let xOff = 0;
	let yOff = 0;
	if(source.match(/Char/i)) {
		xOff = -6;
	} else if(source.match(/Dead/i)) {
		wid = bit.width / 3;
		hei = bit.height;
	} else if(source.match(/SV/i)) {
		wid = bit.width / 9;
		hei = bit.height / 6;
	} else if(source.match(/Face/i)) {
		wid = bit.width;
		hei = bit.height;
	}

	dir = dir || 0;
	this._allInfo = [filePath, sizes[0], sizes[1], wid, hei, xOff, yOff, dir];
};

Window_CharacterCreator_FileList.prototype.lineHeight = function() {
	return this.itemHeight();
};

Window_CharacterCreator_FileList.prototype.itemWidth = function() {
	return this._allInfo[3];
};

Window_CharacterCreator_FileList.prototype.itemHeight = function() {
	return this._allInfo[4];
};

Window_CharacterCreator_FileList.prototype.windowWidth = function() {
	return (this.itemWidth() * this.maxCols()) + (this.standardPadding() * 2)
		 + (this.spacing() * (this.maxCols() - 1));
};

Window_CharacterCreator_FileList.prototype.maxCols = function() {
	return (this._allInfo[3] > 100) ? _.bigCols : _.smallCols;
};

Window_CharacterCreator_FileList.prototype.setCombinedMode = function(combinedMode) {
	this._combinedMode = combinedMode;
};

Window_CharacterCreator_FileList.prototype.currentFile = function() {
	return this._list[this.index()].name;
};

Window_CharacterCreator_FileList.prototype.currentSection = function() {
	return this._folder;
};

Window_CharacterCreator_FileList.prototype.currentFolder = function() {
	return this._folder + '/';
};

Window_CharacterCreator_FileList.prototype.currentFilePath = function() {
	return _.filePath + this.currentFolder();
};

Window_CharacterCreator_FileList.prototype.currentFilePathDead = function() {
	return _.filePathDead + this.currentFolder();
};

Window_CharacterCreator_FileList.prototype.currentFilePathSv = function() {
	return _.filePathSv + this.currentFolder();
};

Window_CharacterCreator_FileList.prototype.currentFilePathFace = function() {
	return _.filePathFace + this.currentFolder();
};

Window_CharacterCreator_FileList.prototype.update = function() {
	Window_Command.prototype.update.call(this);
	if(this._folder !== this._folderWindow.currentFolder()) {
		this._folder = this._folderWindow.currentFolder();
		this.refresh();
		this.select(-1);
	}
};

Window_CharacterCreator_FileList.prototype.refreshX = function() {
	this.x = this._folderWindow.x + this._folderWindow.width;
};

Window_CharacterCreator_FileList.prototype.refreshY = function() {
	this.y = this._folderWindow.y;
};

Window_CharacterCreator_FileList.prototype.refreshWidth = function() {
	this.width = Math.min(this.windowWidth(), Graphics.boxWidth);
};

Window_CharacterCreator_FileList.prototype.refreshHeight = function() {
	this.height = Math.min(this.windowHeight(), Graphics.boxHeight);
};

Window_CharacterCreator_FileList.prototype.refresh = function() {
	this.clearCommandList();
	this._createStuff();
	this.refreshWidth();
	this.refreshHeight();
	this.refreshX();
	this.refreshY();
	this.createContents();
	Window_Selectable.prototype.refresh.call(this);
};

Window_CharacterCreator_FileList.prototype.makeCommandList = function() {
	const images = _.getFileList(this.currentFolder());
	for(let i = 0; i < images.length; i++) {
		if(images[i]) {
			this.addCommand(images[i], 'ok');
		}
	}
};

Window_CharacterCreator_FileList.prototype.drawItem = function(index) {
	const section = this._folderWindow.currentName().trim();
	const rect = this.itemRectForText(index);
	const file = this._list[index].name;
	let dir;
	let source;
	if(_.settings[section]) {
		dir = _.settings[section].direction;
		source = _.settings[section].source;
	} else {
		dir = _.defaults.direction;
		source = _.defaults.source;
	}
	const bit = ImageManager.loadBitmap(this._allInfo[0], file);
	this.contents.blt(bit, this._allInfo[1], this._allInfo[2] * this._allInfo[7], this._allInfo[3], 
		this._allInfo[4], rect.x + this._allInfo[5], rect.y + this._allInfo[6]);
};

//-----------------------------------------------------------------------------
// Window_CharacterCreator_Preview
//-----------------------------------------------------------------------------

Window_CharacterCreator_Preview.prototype = Object.create(Window_Base.prototype);
Window_CharacterCreator_Preview.prototype.constructor = Window_CharacterCreator_Preview;

Window_CharacterCreator_Preview.prototype.initialize = function(x, y, width, height, fileList, type) {
	Window_Base.prototype.initialize.call(this, x, y, 
		width + (this.standardPadding() * 2), height + (this.standardPadding() * 2));
	this._pieces = {};
	this._fileList = fileList;
	this._type = type || '';
	if(this._type === '') {
		this._thingBitmap = new Bitmap(_.fileWidth, _.fileHeight);
		this._sprite = new Sprite_DisplayCharacter();
	} else if(this._type === 'dead') {
		this._thingBitmap = new Bitmap(_.fileWidth, _.fileHeight/4);
		this._sprite = new Sprite_DisplayDeadCharacter();
	} else if(this._type === 'sv') {
		this._thingBitmap = new Bitmap(_.svFileWidth, _.svFileHeight);
		this._sprite = new Sprite_DisplaySvCharacter();
	} else {
		this._thingBitmap = new Bitmap(this.contents.width, this.contents.height);
		this._sprite = new Sprite_Base();
		this._sprite.refresh = function() {};
	}
	this._sprite.bitmap = this._thingBitmap;
	this._sprite.refresh();
	this._sprite.x = this.standardPadding();
	this._sprite.y = this.standardPadding();
	this.addChild(this._sprite);
};

Window_CharacterCreator_Preview.prototype.info = function() {
	return this._pieces;
};

Window_CharacterCreator_Preview.prototype.setInfo = function(info) {
	this._pieces = info;
	this.refresh();
};

Window_CharacterCreator_Preview.prototype.addImage = function(imagePath, section, file, hue) {
	if(_.load) {
		this._pieces[section] = {path: imagePath, file: file, hue: hue};
		this.refresh();
	} else {
		this._pieces[section] = {path: imagePath, file: file, hue: hue};
		const info = this._pieces[section];
		const bitmap = ImageManager.loadBitmap(info.path, info.file, info.hue, true);
		if(bitmap.width === 0) {
			window.setTimeout(this.refresh.bind(this), 5);
		} else {
			this.refresh();
		}
	}
};

Window_CharacterCreator_Preview.prototype.refresh = function() {
	this._thingBitmap.clear();
	for(let i = 0; i < _.priorities.length; i++) {
		const section = _.priorities[i];
		if(this._pieces[section]) {
			const info = this._pieces[section];
			const bitmap = ImageManager.loadBitmap(info.path, info.file, info.hue, true);
			this._thingBitmap.blt(bitmap, 0, 0, bitmap.width, bitmap.height, 0, 0);
		}
	}
};

//-----------------------------------------------------------------------------
// Window_HueSelector
//-----------------------------------------------------------------------------

Window_HueSelector.prototype = Object.create(Window_Command.prototype);
Window_HueSelector.prototype.constructor = Window_HueSelector;

_.Window_HueSelector_initialize = Window_HueSelector.prototype.initialize;
Window_HueSelector.prototype.initialize = function(x, y, fileWindow, scene) {
	_.Window_HueSelector_initialize.apply(this, arguments);
	this.select(-1);
	this._fileWindow = fileWindow;
	this._characterCreator = scene;
};

Window_HueSelector.prototype.windowWidth = function() {
	return 240;
};

Window_HueSelector.prototype.windowHeight = function() {
	return this.fittingHeight(1);
};

Window_HueSelector.prototype.maxItems = function() {
	return 1;
};

Window_HueSelector.prototype.update = function() {
	Window_Command.prototype.update.apply(this, arguments);
	if(!_.isNodeJs) {
		if(TouchInput.isTriggered()) {
			this.cursorRight();
		}
	}
};

Window_HueSelector.prototype.cursorRight = function(wrap) {
	if($gameTemp.cc_hue + _.colorInterval <= 255) {
		const prev = $gameTemp.cc_hue;
		$gameTemp.cc_hue += _.colorInterval;
		this.refreshEveything();
		if(_.colorSe1.length > 0 && prev != $gameTemp.cc_hue) {
			AudioManager.playSe({"name":_.colorSe1,"pan":0,"pitch":100,"volume":100});
		}
	}
};

Window_HueSelector.prototype.isCurrentItemEnabled = function() {
	return true;
};

Window_HueSelector.prototype.playOkSound = function() {
	if(_.colorSe2.length > 0) AudioManager.playSe({"name":_.colorSe2,"pan":0,"pitch":100,"volume":100});
};

Window_HueSelector.prototype.cursorLeft = function(wrap) {
	if($gameTemp.cc_hue - _.colorInterval >= 0) {
		const prev = $gameTemp.cc_hue;
		$gameTemp.cc_hue -= _.colorInterval;
		this.refreshEveything();
		if(_.colorSe1.length > 0 && prev != $gameTemp.cc_hue) {
			AudioManager.playSe({"name":_.colorSe1,"pan":0,"pitch":100,"volume":100});
		}
	}
};

Window_HueSelector.prototype.refreshEveything = function(wrap) {
	this.refresh();
	if(_.activeLoad) this._characterCreator.saveCurrentSelection();
};

Window_HueSelector.prototype.drawItem = function(index) {
	const rect = this.itemRectForText(index);
	this.resetTextColor();
	this.contents.fontSize = 20;
	const colorVal = parseInt($gameTemp.cc_hue / _.colorInterval) + 1;
	const text = _.colorChooser.replace(/%1/ig, colorVal);
	this.drawText(text, rect.x, rect.y, rect.width, 'center');
	this.resetFontSettings();
	this.drawText("<", rect.x, rect.y, rect.width, 'left');
	this.drawText(">", rect.x, rect.y, rect.width, 'right');
};

//-----------------------------------------------------------------------------
// Window_CharacterCreatorConfirmation
//-----------------------------------------------------------------------------

Window_CharacterCreatorConfirmation.prototype = Object.create(Window_Command.prototype);
Window_CharacterCreatorConfirmation.prototype.constructor = Window_CharacterCreatorConfirmation;

Window_CharacterCreatorConfirmation.prototype.initialize = function() {
	Window_Command.prototype.initialize.call(this, 0, 0);
	this.updatePlacement();
	this.openness = 0;
};

Window_CharacterCreatorConfirmation.prototype.windowWidth = function() {
	return 240;
};

Window_CharacterCreatorConfirmation.prototype.itemTextAlign = function() {
	return 'center';
};

Window_CharacterCreatorConfirmation.prototype.updatePlacement = function() {
	this.x = (Graphics.boxWidth - this.width) / 2;
	this.y = Graphics.boxHeight - this.height - 96;
};

Window_CharacterCreatorConfirmation.prototype.makeCommandList = function() {
	this.addCommand("Yes!",   'yes');
	this.addCommand("Nope",   'no');
};

})(SRD.CharacterCreator);