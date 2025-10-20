/*:
 * @plugindesc Adds more options to the Battle Popups; customization over the attributes of the popups and the ability to add more.
 * @author SumRndmDde
 *
 * @param == Global Options ==
 * @default
 *
 * @param Font
 * @desc The font used by the damage Popups.
 * @default GameFont
 *
 * @param Font Size
 * @desc The size of the font used by damage popups.
 * @default 34
 *
 * @param X Shift
 * @desc The shift of the X position between each stacked result.
 * @default 0
 *
 * @param Y Shift
 * @desc The shift of the Y position between each stacked result.
 * @default 34
 *
 * @param Global Condition
 * @desc This is a condition that must be true for the popup to appear. You can use both 'target' and 'result'.
 * @default target.isAppeared()
 *
 * @param == HP Damage ==
 * @default
 *
 * @param HP Damage Condition
 * @desc If this condition is true, an HP Damage popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default result.hpDamage > 0
 *
 * @param HP Damage Text
 * @desc The text that appears when HP Damage occurs.
 * Use %1 to represent the damage value.
 * @default -%1 HP
 *
 * @param HP Damage Location
 * @desc The initial location of the text for HP Damage.
 * Use the format: X Position, Y Position
 * @default 0, 0
 *
 * @param HP Damage Colors
 * @desc The color of the text for HP Damage.
 * Use the format: Base Color | Outline Color
 * @default #FF4D4D | #000000
 *
 * @param HP Damage Animations
 * @desc The animations used for the HP Damage text.
 * Check the HELP for a list of choices.
 * @default default
 *
 * @param HP Damage Duration
 * @desc The duration of the HP Damage text.
 * Input a positive number.
 * @default 120
 *
 * @param HP Damage Flash
 * @desc The flash of the HP Damage text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == HP Heal ==
 * @default
 *
 * @param HP Heal Condition
 * @desc If this condition is true, an HP Heal popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default result.hpDamage < 0
 *
 * @param HP Heal Text
 * @desc The text that appears when HP Heal occurs.
 * Use %1 to represent the Heal value.
 * @default +%1 HP
 *
 * @param HP Heal Location
 * @desc The initial location of the text for HP Heal.
 * Use the format: X Position, Y Position
 * @default 0, 0
 *
 * @param HP Heal Colors
 * @desc The color of the text for HP Heal.
 * Use the format: Base Color | Outline Color
 * @default #8CFF66 | #000000
 *
 * @param HP Heal Animations
 * @desc The animations used for the HP Heal text.
 * Check the HELP for a list of choices.
 * @default default
 *
 * @param HP Heal Duration
 * @desc The duration of the HP Heal text.
 * Input a positive number.
 * @default 120
 *
 * @param HP Heal Flash
 * @desc The flash of the HP Heal text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == MP Damage ==
 * @default
 *
 * @param MP Damage Condition
 * @desc If this condition is true, an MP Damage popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default result.mpDamage > 0
 *
 * @param MP Damage Text
 * @desc The text that appears when MP Damage occurs.
 * Use %1 to represent the damage value.
 * @default -%1 MP
 *
 * @param MP Damage Location
 * @desc The initial location of the text for MP Damage.
 * Use the format: X Position, Y Position
 * @default 0, 0
 *
 * @param MP Damage Colors
 * @desc The color of the text for MP Damage.
 * Use the format: Base Color | Outline Color
 * @default #66B3FF | #000000
 *
 * @param MP Damage Animations
 * @desc The animations used for the MP Damage text.
 * Check the HELP for a list of choices.
 * @default default
 *
 * @param MP Damage Duration
 * @desc The duration of the MP Damage text.
 * Input a positive number.
 * @default 120
 *
 * @param MP Damage Flash
 * @desc The flash of the MP Damage text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == MP Heal ==
 * @default
 *
 * @param MP Heal Condition
 * @desc If this condition is true, an MP Heal popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default result.mpDamage < 0
 *
 * @param MP Heal Text
 * @desc The text that appears when MP Heal occurs.
 * Use %1 to represent the Heal value.
 * @default +%1 MP
 *
 * @param MP Heal Location
 * @desc The initial location of the text for MP Heal.
 * Use the format: X Position, Y Position
 * @default 0, 0
 *
 * @param MP Heal Colors
 * @desc The color of the text for MP Heal.
 * Use the format: Base Color | Outline Color
 * @default #FFFF99 | #000000
 *
 * @param MP Heal Animations
 * @desc The animations used for the MP Heal text.
 * Check the HELP for a list of choices.
 * @default default
 *
 * @param MP Heal Duration
 * @desc The duration of the MP Heal text.
 * Input a positive number.
 * @default 120
 *
 * @param MP Heal Flash
 * @desc The flash of the MP Heal text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == TP Damage ==
 * @default
 *
 * @param TP Damage Condition
 * @desc If this condition is true, an TP Damage popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default result.tpDamage > 0
 *
 * @param TP Damage Text
 * @desc The text that appears when TP Damage occurs.
 * Use %1 to represent the damage value.
 * @default -%1 TP
 *
 * @param TP Damage Location
 * @desc The initial location of the text for TP Damage.
 * Use the format: X Position, Y Position
 * @default 0, 0
 *
 * @param TP Damage Colors
 * @desc The color of the text for TP Damage.
 * Use the format: Base Color | Outline Color
 * @default #FFB3FF | #000000
 *
 * @param TP Damage Animations
 * @desc The animations used for the TP Damage text.
 * Check the HELP for a list of choices.
 * @default default
 *
 * @param TP Damage Duration
 * @desc The duration of the TP Damage text.
 * Input a positive number.
 * @default 120
 *
 * @param TP Damage Flash
 * @desc The flash of the TP Damage text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == TP Heal ==
 * @default
 *
 * @param TP Heal Condition
 * @desc If this condition is true, an TP Heal popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default result.tpDamage < 0
 *
 * @param TP Heal Text
 * @desc The text that appears when TP Heal occurs.
 * Use %1 to represent the Heal value.
 * @default +%1 TP
 *
 * @param TP Heal Location
 * @desc The initial location of the text for TP Heal.
 * Use the format: X Position, Y Position
 * @default 0, 0
 *
 * @param TP Heal Colors
 * @desc The color of the text for TP Heal.
 * Use the format: Base Color | Outline Color
 * @default #99FF66 | #000000
 *
 * @param TP Heal Animations
 * @desc The animations used for the TP Heal text.
 * Check the HELP for a list of choices.
 * @default default
 *
 * @param TP Heal Duration
 * @desc The duration of the TP Heal text.
 * Input a positive number.
 * @default 120
 *
 * @param TP Heal Flash
 * @desc The flash of the TP Heal text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Miss ==
 * @default
 *
 * @param Miss Condition
 * @desc If this condition is true, an Miss popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default result.used && result.missed
 *
 * @param Miss Text
 * @desc The text that appears when a miss occurs.
 * @default MISS
 *
 * @param Miss Location
 * @desc The initial location of the text for missing.
 * Use the format: X Position, Y Position
 * @default 24, this._sprite.height * (-1/3)
 *
 * @param Miss Colors
 * @desc The color of the text for miss.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Miss Animations
 * @desc The animations used for the miss text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Miss Duration
 * @desc The duration of the miss text.
 * Input a positive number.
 * @default 45
 *
 * @param Miss Flash
 * @desc The flash of the Miss text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Evade ==
 * @default
 *
 * @param Evade Condition
 * @desc If this condition is true, an Evade popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default result.evaded
 *
 * @param Evade Text
 * @desc The text that appears when a evade occurs.
 * @default EVADE
 *
 * @param Evade Location
 * @desc The initial location of the text for evasion.
 * Use the format: X Position, Y Position
 * @default 24, this._sprite.height * (-1/3)
 *
 * @param Evade Colors
 * @desc The color of the text for evade.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Evade Animations
 * @desc The animations used for the evade text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Evade Duration
 * @desc The duration of the evade text.
 * Input a positive number.
 * @default 45
 *
 * @param Evade Flash
 * @desc The flash of the Evade text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Critical ==
 * @default
 *
 * @param Critical Condition
 * @desc If this condition is true, an Critical popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default result.critical && result.used && !result.missed
 *
 * @param Critical Text
 * @desc The text that appears when a critical occurs.
 * @default CRITICAL
 *
 * @param Critical Location
 * @desc The initial location of the text for criticals.
 * Use the format: X Position, Y Position
 * @default 24, this._sprite.height * (-1/3)
 *
 * @param Critical Colors
 * @desc The color of the text for critical.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Critical Animations
 * @desc The animations used for the critical text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Critical Duration
 * @desc The duration of the critical text.
 * Input a positive number.
 * @default 60
 *
 * @param Critical Flash
 * @desc The flash of the Critical text.
 * Use the format: red, green, blue, intensity, duration
 * @default 255, 0, 0, 160, 60
 *
 * @param == Guarded ==
 * @default
 *
 * @param Guarded Condition
 * @desc If this condition is true, an Guarded popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default result.guarded && result.used && !result.missed
 *
 * @param Guarded Text
 * @desc The text that appears when a guarded occurs.
 * @default GUARDED
 *
 * @param Guarded Location
 * @desc The initial location of the text for guards.
 * Use the format: X Position, Y Position
 * @default 24, this._sprite.height * (-1/3)
 *
 * @param Guarded Colors
 * @desc The color of the text for guarded.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Guarded Animations
 * @desc The animations used for the guarded text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Guarded Duration
 * @desc The duration of the guarded text.
 * Input a positive number.
 * @default 60
 *
 * @param Guarded Flash
 * @desc The flash of the Guarded text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 130, 130, 160, 60
  *
 * @param == Custom 1 ==
 * @default
 *
 * @param Custom 1 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default result.drain && result.used && !result.missed
 *
 * @param Custom 1 Text
 * @desc The text that appears when a Custom 1 occurs.
 * @default DRAINED
 *
 * @param Custom 1 Location
 * @desc The initial location of the text for Custom 1.
 * Use the format: X Position, Y Position
 * @default 24, this._sprite.height * (-1/3)
 *
 * @param Custom 1 Colors
 * @desc The color of the text for Custom 1.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 1 Animations
 * @desc The animations used for the Custom 1 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 1 Duration
 * @desc The duration of the Custom 1 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 1 Flash
 * @desc The flash of the Custom 1 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 204, 153, 255, 160, 60
 *
 * @param == Custom 2 ==
 * @default
 *
 * @param Custom 2 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 2 Text
 * @desc The text that appears when a Custom 2 occurs.
 * @default
 *
 * @param Custom 2 Location
 * @desc The initial location of the text for Custom 2.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 2 Colors
 * @desc The color of the text for Custom 2.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 2 Animations
 * @desc The animations used for the Custom 2 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 2 Duration
 * @desc The duration of the Custom 2 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 2 Flash
 * @desc The flash of the Custom 2 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 3 ==
 * @default
 *
 * @param Custom 3 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 3 Text
 * @desc The text that appears when a Custom 3 occurs.
 * @default
 *
 * @param Custom 3 Location
 * @desc The initial location of the text for Custom 3.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 3 Colors
 * @desc The color of the text for Custom 3.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 3 Animations
 * @desc The animations used for the Custom 3 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 3 Duration
 * @desc The duration of the Custom 3 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 3 Flash
 * @desc The flash of the Custom 3 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 4 ==
 * @default
 *
 * @param Custom 4 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 4 Text
 * @desc The text that appears when a Custom 4 occurs.
 * @default
 *
 * @param Custom 4 Location
 * @desc The initial location of the text for Custom 4.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 4 Colors
 * @desc The color of the text for Custom 4.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 4 Animations
 * @desc The animations used for the Custom 4 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 4 Duration
 * @desc The duration of the Custom 4 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 4 Flash
 * @desc The flash of the Custom 4 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 5 ==
 * @default
 *
 * @param Custom 5 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 5 Text
 * @desc The text that appears when a Custom 5 occurs.
 * @default
 *
 * @param Custom 5 Location
 * @desc The initial location of the text for Custom 5.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 5 Colors
 * @desc The color of the text for Custom 5.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 5 Animations
 * @desc The animations used for the Custom 5 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 5 Duration
 * @desc The duration of the Custom 5 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 5 Flash
 * @desc The flash of the Custom 5 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 6 ==
 * @default
 *
 * @param Custom 6 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 6 Text
 * @desc The text that appears when a Custom 6 occurs.
 * @default
 *
 * @param Custom 6 Location
 * @desc The initial location of the text for Custom 6.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 6 Colors
 * @desc The color of the text for Custom 6.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 6 Animations
 * @desc The animations used for the Custom 6 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 6 Duration
 * @desc The duration of the Custom 6 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 6 Flash
 * @desc The flash of the Custom 6 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 7 ==
 * @default
 *
 * @param Custom 7 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 7 Text
 * @desc The text that appears when a Custom 7 occurs.
 * @default
 *
 * @param Custom 7 Location
 * @desc The initial location of the text for Custom 7.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 7 Colors
 * @desc The color of the text for Custom 7.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 7 Animations
 * @desc The animations used for the Custom 7 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 7 Duration
 * @desc The duration of the Custom 7 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 7 Flash
 * @desc The flash of the Custom 7 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 8 ==
 * @default
 *
 * @param Custom 8 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 8 Text
 * @desc The text that appears when a Custom 8 occurs.
 * @default
 *
 * @param Custom 8 Location
 * @desc The initial location of the text for Custom 8.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 8 Colors
 * @desc The color of the text for Custom 8.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 8 Animations
 * @desc The animations used for the Custom 8 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 8 Duration
 * @desc The duration of the Custom 8 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 8 Flash
 * @desc The flash of the Custom 8 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 9 ==
 * @default
 *
 * @param Custom 9 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 9 Text
 * @desc The text that appears when a Custom 9 occurs.
 * @default
 *
 * @param Custom 9 Location
 * @desc The initial location of the text for Custom 9.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 9 Colors
 * @desc The color of the text for Custom 9.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 9 Animations
 * @desc The animations used for the Custom 9 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 9 Duration
 * @desc The duration of the Custom 9 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 9 Flash
 * @desc The flash of the Custom 9 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 10 ==
 * @default
 *
 * @param Custom 10 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 10 Text
 * @desc The text that appears when a Custom 10 occurs.
 * @default
 *
 * @param Custom 10 Location
 * @desc The initial location of the text for Custom 10.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 10 Colors
 * @desc The color of the text for Custom 10.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 10 Animations
 * @desc The animations used for the Custom 10 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 10 Duration
 * @desc The duration of the Custom 10 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 10 Flash
 * @desc The flash of the Custom 10 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 11 ==
 * @default
 *
 * @param Custom 11 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 11 Text
 * @desc The text that appears when a Custom 11 occurs.
 * @default
 *
 * @param Custom 11 Location
 * @desc The initial location of the text for Custom 11.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 11 Colors
 * @desc The color of the text for Custom 11.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 11 Animations
 * @desc The animations used for the Custom 11 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 11 Duration
 * @desc The duration of the Custom 11 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 11 Flash
 * @desc The flash of the Custom 11 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 12 ==
 * @default
 *
 * @param Custom 12 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 12 Text
 * @desc The text that appears when a Custom 12 occurs.
 * @default
 *
 * @param Custom 12 Location
 * @desc The initial location of the text for Custom 12.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 12 Colors
 * @desc The color of the text for Custom 12.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 12 Animations
 * @desc The animations used for the Custom 12 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 12 Duration
 * @desc The duration of the Custom 12 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 12 Flash
 * @desc The flash of the Custom 12 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 13 ==
 * @default
 *
 * @param Custom 13 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 13 Text
 * @desc The text that appears when a Custom 13 occurs.
 * @default
 *
 * @param Custom 13 Location
 * @desc The initial location of the text for Custom 13.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 13 Colors
 * @desc The color of the text for Custom 13.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 13 Animations
 * @desc The animations used for the Custom 13 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 13 Duration
 * @desc The duration of the Custom 13 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 13 Flash
 * @desc The flash of the Custom 13 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 14 ==
 * @default
 *
 * @param Custom 14 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 14 Text
 * @desc The text that appears when a Custom 14 occurs.
 * @default
 *
 * @param Custom 14 Location
 * @desc The initial location of the text for Custom 14.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 14 Colors
 * @desc The color of the text for Custom 14.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 14 Animations
 * @desc The animations used for the Custom 14 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 14 Duration
 * @desc The duration of the Custom 14 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 14 Flash
 * @desc The flash of the Custom 14 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 15 ==
 * @default
 *
 * @param Custom 15 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 15 Text
 * @desc The text that appears when a Custom 15 occurs.
 * @default
 *
 * @param Custom 15 Location
 * @desc The initial location of the text for Custom 15.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 15 Colors
 * @desc The color of the text for Custom 15.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 15 Animations
 * @desc The animations used for the Custom 15 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 15 Duration
 * @desc The duration of the Custom 15 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 15 Flash
 * @desc The flash of the Custom 15 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 16 ==
 * @default
 *
 * @param Custom 16 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 16 Text
 * @desc The text that appears when a Custom 16 occurs.
 * @default
 *
 * @param Custom 16 Location
 * @desc The initial location of the text for Custom 16.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 16 Colors
 * @desc The color of the text for Custom 16.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 16 Animations
 * @desc The animations used for the Custom 16 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 16 Duration
 * @desc The duration of the Custom 16 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 16 Flash
 * @desc The flash of the Custom 16 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 17 ==
 * @default
 *
 * @param Custom 17 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 17 Text
 * @desc The text that appears when a Custom 17 occurs.
 * @default
 *
 * @param Custom 17 Location
 * @desc The initial location of the text for Custom 17.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 17 Colors
 * @desc The color of the text for Custom 17.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 17 Animations
 * @desc The animations used for the Custom 17 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 17 Duration
 * @desc The duration of the Custom 17 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 17 Flash
 * @desc The flash of the Custom 17 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 18 ==
 * @default
 *
 * @param Custom 18 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 18 Text
 * @desc The text that appears when a Custom 18 occurs.
 * @default
 *
 * @param Custom 18 Location
 * @desc The initial location of the text for Custom 18.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 18 Colors
 * @desc The color of the text for Custom 18.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 18 Animations
 * @desc The animations used for the Custom 18 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 18 Duration
 * @desc The duration of the Custom 18 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 18 Flash
 * @desc The flash of the Custom 18 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 19 ==
 * @default
 *
 * @param Custom 19 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 19 Text
 * @desc The text that appears when a Custom 19 occurs.
 * @default
 *
 * @param Custom 19 Location
 * @desc The initial location of the text for Custom 19.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 19 Colors
 * @desc The color of the text for Custom 19.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 19 Animations
 * @desc The animations used for the Custom 19 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 19 Duration
 * @desc The duration of the Custom 19 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 19 Flash
 * @desc The flash of the Custom 19 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 20 ==
 * @default
 *
 * @param Custom 20 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 20 Text
 * @desc The text that appears when a Custom 20 occurs.
 * @default
 *
 * @param Custom 20 Location
 * @desc The initial location of the text for Custom 20.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 20 Colors
 * @desc The color of the text for Custom 20.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 20 Animations
 * @desc The animations used for the Custom 20 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 20 Duration
 * @desc The duration of the Custom 20 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 20 Flash
 * @desc The flash of the Custom 20 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 21 ==
 * @default
 *
 * @param Custom 21 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 21 Text
 * @desc The text that appears when a Custom 21 occurs.
 * @default
 *
 * @param Custom 21 Location
 * @desc The initial location of the text for Custom 21.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 21 Colors
 * @desc The color of the text for Custom 21.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 21 Animations
 * @desc The animations used for the Custom 21 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 21 Duration
 * @desc The duration of the Custom 21 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 21 Flash
 * @desc The flash of the Custom 21 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 22 ==
 * @default
 *
 * @param Custom 22 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 22 Text
 * @desc The text that appears when a Custom 22 occurs.
 * @default
 *
 * @param Custom 22 Location
 * @desc The initial location of the text for Custom 22.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 22 Colors
 * @desc The color of the text for Custom 22.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 22 Animations
 * @desc The animations used for the Custom 22 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 22 Duration
 * @desc The duration of the Custom 22 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 22 Flash
 * @desc The flash of the Custom 22 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 23 ==
 * @default
 *
 * @param Custom 23 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 23 Text
 * @desc The text that appears when a Custom 23 occurs.
 * @default
 *
 * @param Custom 23 Location
 * @desc The initial location of the text for Custom 23.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 23 Colors
 * @desc The color of the text for Custom 23.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 23 Animations
 * @desc The animations used for the Custom 23 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 23 Duration
 * @desc The duration of the Custom 23 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 23 Flash
 * @desc The flash of the Custom 23 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 24 ==
 * @default
 *
 * @param Custom 24 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 24 Text
 * @desc The text that appears when a Custom 24 occurs.
 * @default
 *
 * @param Custom 24 Location
 * @desc The initial location of the text for Custom 24.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 24 Colors
 * @desc The color of the text for Custom 24.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 24 Animations
 * @desc The animations used for the Custom 24 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 24 Duration
 * @desc The duration of the Custom 24 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 24 Flash
 * @desc The flash of the Custom 24 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 25 ==
 * @default
 *
 * @param Custom 25 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 25 Text
 * @desc The text that appears when a Custom 25 occurs.
 * @default
 *
 * @param Custom 25 Location
 * @desc The initial location of the text for Custom 25.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 25 Colors
 * @desc The color of the text for Custom 25.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 25 Animations
 * @desc The animations used for the Custom 25 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 25 Duration
 * @desc The duration of the Custom 25 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 25 Flash
 * @desc The flash of the Custom 25 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 26 ==
 * @default
 *
 * @param Custom 26 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 26 Text
 * @desc The text that appears when a Custom 26 occurs.
 * @default
 *
 * @param Custom 26 Location
 * @desc The initial location of the text for Custom 26.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 26 Colors
 * @desc The color of the text for Custom 26.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 26 Animations
 * @desc The animations used for the Custom 26 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 26 Duration
 * @desc The duration of the Custom 26 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 26 Flash
 * @desc The flash of the Custom 26 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 27 ==
 * @default
 *
 * @param Custom 27 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 27 Text
 * @desc The text that appears when a Custom 27 occurs.
 * @default
 *
 * @param Custom 27 Location
 * @desc The initial location of the text for Custom 27.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 27 Colors
 * @desc The color of the text for Custom 27.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 27 Animations
 * @desc The animations used for the Custom 27 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 27 Duration
 * @desc The duration of the Custom 27 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 27 Flash
 * @desc The flash of the Custom 27 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 28 ==
 * @default
 *
 * @param Custom 28 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 28 Text
 * @desc The text that appears when a Custom 28 occurs.
 * @default
 *
 * @param Custom 28 Location
 * @desc The initial location of the text for Custom 28.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 28 Colors
 * @desc The color of the text for Custom 28.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 28 Animations
 * @desc The animations used for the Custom 28 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 28 Duration
 * @desc The duration of the Custom 28 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 28 Flash
 * @desc The flash of the Custom 28 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 29 ==
 * @default
 *
 * @param Custom 29 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 29 Text
 * @desc The text that appears when a Custom 29 occurs.
 * @default
 *
 * @param Custom 29 Location
 * @desc The initial location of the text for Custom 29.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 29 Colors
 * @desc The color of the text for Custom 29.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 29 Animations
 * @desc The animations used for the Custom 29 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 29 Duration
 * @desc The duration of the Custom 29 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 29 Flash
 * @desc The flash of the Custom 29 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 30 ==
 * @default
 *
 * @param Custom 30 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 30 Text
 * @desc The text that appears when a Custom 30 occurs.
 * @default
 *
 * @param Custom 30 Location
 * @desc The initial location of the text for Custom 30.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 30 Colors
 * @desc The color of the text for Custom 30.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 30 Animations
 * @desc The animations used for the Custom 30 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 30 Duration
 * @desc The duration of the Custom 30 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 30 Flash
 * @desc The flash of the Custom 30 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 31 ==
 * @default
 *
 * @param Custom 31 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 31 Text
 * @desc The text that appears when a Custom 31 occurs.
 * @default
 *
 * @param Custom 31 Location
 * @desc The initial location of the text for Custom 31.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 31 Colors
 * @desc The color of the text for Custom 31.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 31 Animations
 * @desc The animations used for the Custom 31 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 31 Duration
 * @desc The duration of the Custom 31 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 31 Flash
 * @desc The flash of the Custom 31 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 32 ==
 * @default
 *
 * @param Custom 32 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 32 Text
 * @desc The text that appears when a Custom 32 occurs.
 * @default
 *
 * @param Custom 32 Location
 * @desc The initial location of the text for Custom 32.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 32 Colors
 * @desc The color of the text for Custom 32.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 32 Animations
 * @desc The animations used for the Custom 32 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 32 Duration
 * @desc The duration of the Custom 32 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 32 Flash
 * @desc The flash of the Custom 32 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 33 ==
 * @default
 *
 * @param Custom 33 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 33 Text
 * @desc The text that appears when a Custom 33 occurs.
 * @default
 *
 * @param Custom 33 Location
 * @desc The initial location of the text for Custom 33.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 33 Colors
 * @desc The color of the text for Custom 33.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 33 Animations
 * @desc The animations used for the Custom 33 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 33 Duration
 * @desc The duration of the Custom 33 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 33 Flash
 * @desc The flash of the Custom 33 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 34 ==
 * @default
 *
 * @param Custom 34 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 34 Text
 * @desc The text that appears when a Custom 34 occurs.
 * @default
 *
 * @param Custom 34 Location
 * @desc The initial location of the text for Custom 34.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 34 Colors
 * @desc The color of the text for Custom 34.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 34 Animations
 * @desc The animations used for the Custom 34 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 34 Duration
 * @desc The duration of the Custom 34 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 34 Flash
 * @desc The flash of the Custom 34 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 35 ==
 * @default
 *
 * @param Custom 35 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 35 Text
 * @desc The text that appears when a Custom 35 occurs.
 * @default
 *
 * @param Custom 35 Location
 * @desc The initial location of the text for Custom 35.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 35 Colors
 * @desc The color of the text for Custom 35.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 35 Animations
 * @desc The animations used for the Custom 35 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 35 Duration
 * @desc The duration of the Custom 35 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 35 Flash
 * @desc The flash of the Custom 35 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 36 ==
 * @default
 *
 * @param Custom 36 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 36 Text
 * @desc The text that appears when a Custom 36 occurs.
 * @default
 *
 * @param Custom 36 Location
 * @desc The initial location of the text for Custom 36.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 36 Colors
 * @desc The color of the text for Custom 36.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 36 Animations
 * @desc The animations used for the Custom 36 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 36 Duration
 * @desc The duration of the Custom 36 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 36 Flash
 * @desc The flash of the Custom 36 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 37 ==
 * @default
 *
 * @param Custom 37 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 37 Text
 * @desc The text that appears when a Custom 37 occurs.
 * @default
 *
 * @param Custom 37 Location
 * @desc The initial location of the text for Custom 37.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 37 Colors
 * @desc The color of the text for Custom 37.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 37 Animations
 * @desc The animations used for the Custom 37 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 37 Duration
 * @desc The duration of the Custom 37 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 37 Flash
 * @desc The flash of the Custom 37 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 38 ==
 * @default
 *
 * @param Custom 38 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 38 Text
 * @desc The text that appears when a Custom 38 occurs.
 * @default
 *
 * @param Custom 38 Location
 * @desc The initial location of the text for Custom 38.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 38 Colors
 * @desc The color of the text for Custom 38.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 38 Animations
 * @desc The animations used for the Custom 38 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 38 Duration
 * @desc The duration of the Custom 38 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 38 Flash
 * @desc The flash of the Custom 38 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 39 ==
 * @default
 *
 * @param Custom 39 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 39 Text
 * @desc The text that appears when a Custom 39 occurs.
 * @default
 *
 * @param Custom 39 Location
 * @desc The initial location of the text for Custom 39.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 39 Colors
 * @desc The color of the text for Custom 39.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 39 Animations
 * @desc The animations used for the Custom 39 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 39 Duration
 * @desc The duration of the Custom 39 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 39 Flash
 * @desc The flash of the Custom 39 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 40 ==
 * @default
 *
 * @param Custom 40 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 40 Text
 * @desc The text that appears when a Custom 40 occurs.
 * @default
 *
 * @param Custom 40 Location
 * @desc The initial location of the text for Custom 40.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 40 Colors
 * @desc The color of the text for Custom 40.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 40 Animations
 * @desc The animations used for the Custom 40 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 40 Duration
 * @desc The duration of the Custom 40 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 40 Flash
 * @desc The flash of the Custom 40 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 41 ==
 * @default
 *
 * @param Custom 41 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 41 Text
 * @desc The text that appears when a Custom 41 occurs.
 * @default
 *
 * @param Custom 41 Location
 * @desc The initial location of the text for Custom 41.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 41 Colors
 * @desc The color of the text for Custom 41.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 41 Animations
 * @desc The animations used for the Custom 41 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 41 Duration
 * @desc The duration of the Custom 41 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 41 Flash
 * @desc The flash of the Custom 41 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 42 ==
 * @default
 *
 * @param Custom 42 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 42 Text
 * @desc The text that appears when a Custom 42 occurs.
 * @default
 *
 * @param Custom 42 Location
 * @desc The initial location of the text for Custom 42.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 42 Colors
 * @desc The color of the text for Custom 42.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 42 Animations
 * @desc The animations used for the Custom 42 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 42 Duration
 * @desc The duration of the Custom 42 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 42 Flash
 * @desc The flash of the Custom 42 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 43 ==
 * @default
 *
 * @param Custom 43 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 43 Text
 * @desc The text that appears when a Custom 43 occurs.
 * @default
 *
 * @param Custom 43 Location
 * @desc The initial location of the text for Custom 43.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 43 Colors
 * @desc The color of the text for Custom 43.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 43 Animations
 * @desc The animations used for the Custom 43 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 43 Duration
 * @desc The duration of the Custom 43 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 43 Flash
 * @desc The flash of the Custom 43 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 44 ==
 * @default
 *
 * @param Custom 44 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 44 Text
 * @desc The text that appears when a Custom 44 occurs.
 * @default
 *
 * @param Custom 44 Location
 * @desc The initial location of the text for Custom 44.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 44 Colors
 * @desc The color of the text for Custom 44.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 44 Animations
 * @desc The animations used for the Custom 44 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 44 Duration
 * @desc The duration of the Custom 44 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 44 Flash
 * @desc The flash of the Custom 44 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 45 ==
 * @default
 *
 * @param Custom 45 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 45 Text
 * @desc The text that appears when a Custom 45 occurs.
 * @default
 *
 * @param Custom 45 Location
 * @desc The initial location of the text for Custom 45.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 45 Colors
 * @desc The color of the text for Custom 45.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 45 Animations
 * @desc The animations used for the Custom 45 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 45 Duration
 * @desc The duration of the Custom 45 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 45 Flash
 * @desc The flash of the Custom 45 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 46 ==
 * @default
 *
 * @param Custom 46 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 46 Text
 * @desc The text that appears when a Custom 46 occurs.
 * @default
 *
 * @param Custom 46 Location
 * @desc The initial location of the text for Custom 46.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 46 Colors
 * @desc The color of the text for Custom 46.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 46 Animations
 * @desc The animations used for the Custom 46 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 46 Duration
 * @desc The duration of the Custom 46 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 46 Flash
 * @desc The flash of the Custom 46 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 47 ==
 * @default
 *
 * @param Custom 47 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 47 Text
 * @desc The text that appears when a Custom 47 occurs.
 * @default
 *
 * @param Custom 47 Location
 * @desc The initial location of the text for Custom 47.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 47 Colors
 * @desc The color of the text for Custom 47.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 47 Animations
 * @desc The animations used for the Custom 47 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 47 Duration
 * @desc The duration of the Custom 47 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 47 Flash
 * @desc The flash of the Custom 47 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 48 ==
 * @default
 *
 * @param Custom 48 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 48 Text
 * @desc The text that appears when a Custom 48 occurs.
 * @default
 *
 * @param Custom 48 Location
 * @desc The initial location of the text for Custom 48.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 48 Colors
 * @desc The color of the text for Custom 48.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 48 Animations
 * @desc The animations used for the Custom 48 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 48 Duration
 * @desc The duration of the Custom 48 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 48 Flash
 * @desc The flash of the Custom 48 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 49 ==
 * @default
 *
 * @param Custom 49 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 49 Text
 * @desc The text that appears when a Custom 49 occurs.
 * @default
 *
 * @param Custom 49 Location
 * @desc The initial location of the text for Custom 49.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 49 Colors
 * @desc The color of the text for Custom 49.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 49 Animations
 * @desc The animations used for the Custom 49 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 49 Duration
 * @desc The duration of the Custom 49 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 49 Flash
 * @desc The flash of the Custom 49 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @param == Custom 50 ==
 * @default
 *
 * @param Custom 50 Condition
 * @desc If this condition is true, an Custom popup will appear.
 * Input a JavaScript eval; "result" is a Game_ActionResult.
 * @default false
 *
 * @param Custom 50 Text
 * @desc The text that appears when a Custom 50 occurs.
 * @default
 *
 * @param Custom 50 Location
 * @desc The initial location of the text for Custom 50.
 * Use the format: X Position, Y Position
 * @default 24, -48
 *
 * @param Custom 50 Colors
 * @desc The color of the text for Custom 50.
 * Use the format: Base Color | Outline Color
 * @default #FFFFFF | #000000
 *
 * @param Custom 50 Animations
 * @desc The animations used for the Custom 50 text.
 * Check the HELP for a list of choices.
 * @default float
 *
 * @param Custom 50 Duration
 * @desc The duration of the Custom 50 text.
 * Input a positive number.
 * @default 60
 *
 * @param Custom 50 Flash
 * @desc The flash of the Custom 50 text.
 * Use the format: red, green, blue, intensity, duration
 * @default 0, 0, 0, 0, 0
 *
 * @help
 *
 * Battle Popup Customizer
 * Version 1.20
 * SumRndmDde
 *
 *
 * This plugin adds more options to the Battle Popups!
 * You have more customization over the attributes of the popups and also 
 * have the ability to add custom popups.
 *
 * Furthermore, this plugin changes a lot of the core mechanics of the system,
 * including the fact that the popup text requires an external file.
 * Now it just requires you to input the font/colors you wish.
 *
 *
 * ==========================================================================
 *  Global Options
 * ==========================================================================
 *
 * You can manipulate the various properties of all the popups.
 *
 * This includes the font and the font size.
 * As mentioned before, a font is used instead an image file.
 *
 * Furthermore, if there are multiple popups in the same section, you can set
 * how much the proceeding popups shift on the X and Y axis.
 *
 *
 * ==========================================================================
 *  Existing Popups
 * ==========================================================================
 *
 * You can manipulate the following existing popups:
 *
 * HP Damage
 * HP Heal
 * MP Damage
 * MP Heal
 * TP Damage
 * TP Heal
 * -------------
 * Miss
 * Evade
 * Critical
 * Guarded
 *
 * The first six will be set into one section, and the remaining popups will
 * fall into their own section. These sections each move the popups so they
 * don't overlap.
 *
 *
 * ==========================================================================
 *  Popup Attributes
 * ==========================================================================
 *
 * Here is a list of all the manipulatable attributes:
 *
 *
 *   Condition
 *
 * If this JavaScript condition is true, the popup will be used.
 *
 * ==========================================================================
 *
 *   Text
 *
 * The text shown for the popup.
 *
 * ==========================================================================
 *
 *   Location
 *
 * The X and Y coordinates of the popup.
 * This refers to the initial position of the popup.
 * Use the format: x, y
 *
 * For example: 20, -20
 *
 * ==========================================================================
 *
 *   Colors
 *
 * The colors used by the popup text.
 * Use the format: mainColor | outlineColor
 *
 * For example: #FFFFFF | #000000
 *
 * ==========================================================================
 *
 *   Animations
 *
 * A list of all the animations that affect the popup.
 * All of the available animations are:
 *
 *   default
 *   horizontal
 *   float
 *   fall
 *   left
 *   right
 *   rotation
 *
 * You can use one or multiple animations.
 * Seperate multiple animations with a comma.
 *
 * For example: default, rotation
 *   
 *
 * ==========================================================================
 *
 *   Duration
 *
 * The duration of the popup in frames.
 *
 * ==========================================================================
 *
 *   Flash
 *
 * The flash of the popup.
 * Use the format: red, green, blue, intensity, duration
 *
 * For example: 255, 0, 0, 160, 60
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
SRD.BattlePopupCustomizer = SRD.BattlePopupCustomizer || {};

var Imported = Imported || {};
Imported["SumRndmDde Battle Popup Customizer"] = 1.20;

(function(_) {

"use strict";

//-----------------------------------------------------------------------------
// SRD.BattlePopupCustomizer
//-----------------------------------------------------------------------------

var params = PluginManager.parameters('SRD_BattlePopupCustomizer');

_.font = String(params['Font']);
_.size = parseInt(params['Font Size']);
_.xShift = parseFloat(params['X Shift']);
_.yShift = parseFloat(params['Y Shift']);
_.condition = String(params['Global Condition']);

_.popups = [];
_.prefixes = ['HP Damage', 'HP Heal', 'MP Damage', 'MP Heal', 'TP Damage', 'TP Heal', 'Miss', 'Evade', 'Critical', 'Guarded'];
for(var i = 0; i < _.prefixes.length; i++) {
	_.popups[i] = {};
	var location = String(params[_.prefixes[i] + ' Location']).split(/\s*,\s*/);
	var colors = String(params[_.prefixes[i] + ' Colors']).split(/\s*\|\s*/);
	var flash = String(params[_.prefixes[i] + ' Flash']).split(/\s*,\s*/);
	_.popups[i].x = String(location[0]);
	_.popups[i].y = String(location[1]);
	_.popups[i].color = String(colors[0]);
	_.popups[i].outline = String(colors[1]);
	_.popups[i].text = String(params[_.prefixes[i] + ' Text']);
	_.popups[i].condition = String(params[_.prefixes[i] + ' Condition']);
	_.popups[i].duration = parseInt(params[_.prefixes[i] + ' Duration']);
	_.popups[i].animations = String(params[_.prefixes[i] + ' Animations']).split(/\s*,\s*/);
	_.popups[i].flashColor = [parseInt(flash[0]), parseInt(flash[1]), parseInt(flash[2]), parseInt(flash[3])];
	_.popups[i].flashDuration = parseInt(flash[4]);
}

_.customPops = [];
for(var i = 1; i <= 50; i++) {
	var condition = String(params['Custom ' + i + ' Condition']).trim();
	if(condition != 'false') {
		_.customPops[i] = {};
		var location = String(params['Custom ' + i + ' Location']).split(/\s*,\s*/);
		var colors = String(params['Custom ' + i + ' Colors']).split(/\s*\|\s*/);
		var flash = String(params['Custom ' + i + ' Flash']).split(/\s*,\s*/);
		_.customPops[i].x = String(location[0]);
		_.customPops[i].y = String(location[1]);
		_.customPops[i].color = String(colors[0]);
		_.customPops[i].outline = String(colors[1]);
		_.customPops[i].text = String(params['Custom ' + i + ' Text']);
		_.customPops[i].condition = condition;
		_.customPops[i].duration = parseInt(params['Custom ' + i + ' Duration']);
		_.customPops[i].animations = String(params['Custom ' + i + ' Animations']).split(/\s*,\s*/);
		_.customPops[i].flashColor = [parseInt(flash[0]), parseInt(flash[1]), parseInt(flash[2]), parseInt(flash[3])];
		_.customPops[i].flashDuration = parseInt(flash[4]);
	}
}

//-----------------------------------------------------------------------------
// Game_Action
//-----------------------------------------------------------------------------

if(Imported.YEP_BattleEngineCore) {

Game_Battler.prototype.startDamagePopup = function() {
	var result = this.result();
	this._damagePopup.push(result);
};

}

//-----------------------------------------------------------------------------
// Game_Action
//-----------------------------------------------------------------------------

var _Game_Action_applyGuard = Game_Action.prototype.applyGuard;
Game_Action.prototype.applyGuard = function(damage, target) {
	var newDamage = _Game_Action_applyGuard.apply(this, arguments);
	if(newDamage != damage) {
		target.result().guarded = true;
	}
	return newDamage;
};

var _Game_Action_calcElementRate = Game_Action.prototype.calcElementRate;
Game_Action.prototype.calcElementRate = function(target) {
	var rate = _Game_Action_calcElementRate.apply(this, arguments);
	target.result().elementRate = rate;
	return rate;
};

//-----------------------------------------------------------------------------
// Game_ActionResult
//-----------------------------------------------------------------------------

var _Game_ActionResult_clear = Game_ActionResult.prototype.clear;
Game_ActionResult.prototype.clear = function() {
	_Game_ActionResult_clear.apply(this, arguments);
	this.guarded = false;
	this.elementRate = 1;
};

//-----------------------------------------------------------------------------
// Sprite_Battler
//-----------------------------------------------------------------------------

if(!Imported.YEP_BattleEngineCore) {

var _Sprite_Battler_setBattler = Sprite_Battler.prototype.setBattler;
Sprite_Battler.prototype.setBattler = function(battler) {
	_Sprite_Battler_setBattler.call(this, battler);
	if(battler) battler._dpu_sprite = this;
};

}

//-----------------------------------------------------------------------------
// Sprite_Damage
//-----------------------------------------------------------------------------

Sprite_Damage.prototype.setup = function(target) {
	this._target = target;
	this._sprite = (Imported.YEP_BattleEngineCore) ? target.battler() : target._dpu_sprite;
	this._xOffsetSpecial = 0;
	this._yOffsetSpecial = 0;
	this._xOffsetDigits = 0;
	this._yOffsetDigits = 0;
	if(Imported.YEP_BattleEngineCore) {
		this._result = target.shiftDamagePopup();
	} else {
		this._result = target.result();
	}
	var result = this._result;

	if(!eval(_.condition)) return;

	var damages = [result.hpDamage, result.mpDamage, result.tpDamage];
	for(var i = 0; i <= 5; i++) {
		if(eval(_.popups[i].condition)) {
			this.createDigits(i, damages[Math.floor(i/2)]);
			this.incrementDigits(_.xShift, _.yShift);
		}
	}

	for(var i = 6; i <= 9; i++) {
		if(eval(_.popups[i].condition)) {
			this.createSpecial(i);
			this.incrementSpecial(_.xShift, _.yShift);
		}
	}

	for(var i = 1; i < _.customPops.length; i++) {
		if(_.customPops[i] && eval(_.customPops[i].condition)) {
			this.createSpecialCustom(i);
			this.incrementSpecial(_.xShift, _.yShift);
		}
	}
};

Sprite_Damage.prototype.incrementSpecial = function(x, y) {
	this._xOffsetSpecial += x;
	this._yOffsetSpecial += y;
};

Sprite_Damage.prototype.incrementDigits = function(x, y) {
	this._xOffsetDigits += x;
	this._yOffsetDigits += y;
};

Sprite_Damage.prototype.digitWidthFromBitmap = function(bitmap) {
	return bitmap.measureTextWidth('0');
};

Sprite_Damage.prototype.digitHeightFromBitmap = function(bitmap) {
	return bitmap.fontSize;
};

Sprite_Damage.prototype.createSpecial = function(index) {
	var info = _.popups[index];
	var bitmap = this.createChildBitmap(info, info.text.length);
	var sprite = this.createChildSprite(bitmap);
	sprite.bitmap.drawText(info.text, 2, 0, bitmap.width, bitmap.height, 'left');
	sprite.dy = 0;
	sprite.x = eval(info.x);
	sprite.y = eval(info.y);
	sprite.xBase = this._xOffsetSpecial;
	sprite.yBase = this._yOffsetSpecial;
	sprite.animations = info.animations.clone();
	sprite.duration = info.duration;
	sprite.oriDuration = sprite.duration;
	sprite.flashColor = info.flashColor.clone();
	sprite.flashDuration = info.flashDuration;
	sprite.oriX = sprite.x;
	sprite.oriY = sprite.y;
};

Sprite_Damage.prototype.createSpecialCustom = function(index) {
	var info = _.customPops[index];
	var bitmap = this.createChildBitmap(info, info.text.length);
	var sprite = this.createChildSprite(bitmap);
	sprite.bitmap.drawText(info.text, 2, 0, bitmap.width, bitmap.height, 'left');
	sprite.dy = 0;
	sprite.x = eval(info.x);
	sprite.y = eval(info.y);
	sprite.xBase = this._xOffsetSpecial;
	sprite.yBase = this._yOffsetSpecial;
	sprite.animations = info.animations.clone();
	sprite.duration = info.duration;
	sprite.oriDuration = sprite.duration;
	sprite.flashColor = info.flashColor.clone();
	sprite.flashDuration = info.flashDuration;
	sprite.oriX = sprite.x;
	sprite.oriY = sprite.y;
};

Sprite_Damage.prototype.createDigits = function(baseRow, value) {
	var string = Math.abs(value).toString();
	var info = _.popups[baseRow];
	string = info.text.replace(/%1/, string);
	var dummy = this.createChildBitmap(info);
	var w = this.digitWidthFromBitmap(dummy);
	var h = this.digitHeightFromBitmap(dummy);
	for (var i = 0; i < string.length; i++) {
		var bitmap = this.createChildBitmap(info);
		bitmap.resize(bitmap.width + (bitmap.outlineWidth*2), bitmap.height)
		var sprite = this.createChildSprite(bitmap);
		sprite.bitmap.drawText(string[i], 2, 0, w, h, 'left');
		sprite.xBase = this._xOffsetDigits;
		sprite.yBase = this._yOffsetDigits;
		sprite.x = ((i - (string.length - 1) / 2) * w) + eval(info.x);
		sprite.y = eval(info.y);
		sprite.ry = sprite.y;
		sprite.dy = -i;
		sprite.animations = info.animations.clone();
		sprite.duration = info.duration;
		sprite.oriDuration = sprite.duration;
		sprite.oriX = sprite.x;
		sprite.oriY = sprite.y;
		if(this._result.critical) {
			sprite.flashColor = [255, 0, 0, 160];
			sprite.flashDuration = 60;
		} else if(Imported.YEP_AbsorptionBarrier && this._result._barrierAffected) {
			sprite.flashColor = Yanfly.Param.ABRPop.slice();
			sprite.flashDuration = 180;
		} else {
			sprite.flashColor = info.flashColor.clone();
			sprite.flashDuration = info.flashDuration;
		}
	}
};

Sprite_Damage.prototype.createChildSprite = function(bitmap) {
	var sprite = new Sprite();
	sprite.bitmap = bitmap;
	sprite.anchor.x = 0.5;
	sprite.anchor.y = 0.5;
	this.addChild(sprite);
	return sprite;
};

Sprite_Damage.prototype.createChildBitmap = function(info, width, height) {
	width = width || 1;
	height = height || 1;
	var bitmap = new Bitmap();
	bitmap.fontFace = _.font;
	bitmap.fontSize = _.size;
	bitmap.textColor = info.color;
	bitmap.outlineColor = info.outline;
	if(Imported.YEP_AbsorptionBarrier && this._result._barrierAffected) {
		bitmap.textColor = "#FFFFFF"; 
	}
	var w = this.digitWidthFromBitmap(bitmap) * width;
	var h = this.digitHeightFromBitmap(bitmap) * height;
	bitmap.resize(w + 20, h);
	return bitmap;
};

Sprite_Damage.prototype.update = function() {
	Sprite.prototype.update.call(this);
	for (var i = 0; i < this.children.length; i++) {
		if(this.children[i].duration > 0) this.updateChild(this.children[i]);
	}
};

Sprite_Damage.prototype.updateChild = function(sprite) {
	sprite.duration--;
	this.updateChildOpacity(sprite);
	this.updateChildFlash(sprite);
	if(sprite.animations.indexOf('default') > -1) {
		if(!sprite.xIsAdded) {
			sprite.x += sprite.xBase;
			sprite.ry = -48;
			sprite.xIsAdded = true;
		}
		sprite.dy += 0.5;
		sprite.ry += sprite.dy;
		if (sprite.ry >= sprite.yBase) {
			sprite.ry = sprite.yBase;
			sprite.dy *= -0.6;
		}
		sprite.y = Math.round(sprite.ry) + sprite.oriY;
	} 
	if(sprite.animations.indexOf('horizontal') > -1) {
		if(!sprite.yIsAdded) {
			sprite.y += sprite.yBase;
			sprite.ry = -48;
			sprite.yIsAdded = true;
		}
		sprite.dy += 0.5;
		sprite.ry += sprite.dy;
		if (sprite.ry >= sprite.xBase) {
			sprite.ry = sprite.xBase;
			sprite.dy *= -0.6;
		}
		sprite.x = Math.round(sprite.ry) + sprite.oriX;
	}
	if(sprite.animations.indexOf('float') > -1) {
		if(!sprite.xIsAdded) {
			sprite.x += sprite.xBase;
			sprite.xIsAdded = true;
		}
		sprite.yBase--;
		sprite.y = sprite.yBase + sprite.oriY;
	}
	if(sprite.animations.indexOf('fall') > -1) {
		if(!sprite.xIsAdded) {
			sprite.x += sprite.xBase;
			sprite.xIsAdded = true;
		}
		sprite.yBase++;
		sprite.y = sprite.yBase + sprite.oriY;
	}
	if(sprite.animations.indexOf('left') > -1) {
		if(!sprite.yIsAdded) {
			sprite.y += sprite.yBase;
			sprite.yIsAdded = true;
		}
		sprite.xBase--;
		sprite.x = sprite.xBase + sprite.oriX;
	}
	if(sprite.animations.indexOf('right') > -1) {
		if(!sprite.yIsAdded) {
			sprite.y += sprite.yBase;
			sprite.yIsAdded = true;
		}
		sprite.xBase++;
		sprite.x = sprite.xBase + sprite.oriX;
	}
	if(sprite.animations.indexOf('rotation') > -1) {
		if(!sprite.xIsAdded) {
			sprite.x += sprite.xBase;
			sprite.xIsAdded = true;
		}
		if(!sprite.yIsAdded) {
			sprite.y += sprite.yBase;
			sprite.yIsAdded = true;
		}
		if(!sprite.applRotationsAndStuff) {
			sprite.anchor.x = 0.5;
			sprite.anchor.y = 0.5;
			sprite.y -= sprite.height/2;
			sprite.applRotationsAndStuff = true;
		}
		if(sprite.duration > (sprite.oriDuration/2)) {
			sprite.rotation = (sprite.duration - (sprite.oriDuration/2)) * (0.1);
		} else {
			sprite.rotation = 0;
		}
	} 
};

Sprite_Damage.prototype.updateChildOpacity = function(sprite) {
	if(sprite.duration < 10) {
		sprite.opacity = 255 * sprite.duration / 10;
	}
};

Sprite_Damage.prototype.updateChildFlash = function(sprite) {
	if (sprite.flashDuration > 0) {
		var d = sprite.flashDuration--;
		sprite.flashColor[3] *= (d - 1) / d;
		sprite.setBlendColor(sprite.flashColor);
	}
};

Sprite_Damage.prototype.isPlaying = function() {
	for(var i = 0; i < this.children.length; i++) {
		if(this.children[i].duration > 0) {
			return true;
		}
	}
	return false;
};

})(SRD.BattlePopupCustomizer);