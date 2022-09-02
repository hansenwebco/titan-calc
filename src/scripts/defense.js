function Skill(name, min_points, spells, prereq, desc) {
  this.name = name
  this.min_points = min_points
  this.desc = desc
  this.spells = spells
  this.prereq = prereq
}

function Attribute(Hth, Egy, Str, Dex, Int) {
  this.str = Str
  this.dex = Dex
  this.health = Hth
  this.inte = Int
  this.energy = Egy
}


function SpellInfo(spellinfo) {
  this.spellinfo = spellinfo
}

function setmastery(Skills, Attributes) {
  this.Skills = Skills
  this.masteryid = 5
  this.masteryname = "Defense"
  this.Attributes = Attributes
}

window.loadDefense = loadDefense;
function loadDefense() {

  // set attributes
  if (!AttributesBase[0]) { // base att's are only set one time
    AttributesBase[0] = new Attribute(300, 300, 50, 50, 50) // base stats for characters
  }
  Attributes = new Array();
  Attributes[1] = new Attribute(50, 0, 1, 2, 0)
  Attributes[2] = new Attribute(100, 0, 3, 4, 0)
  Attributes[3] = new Attribute(150, 0, 4, 6, 0)
  Attributes[4] = new Attribute(200, 0, 6, 8, 0)
  Attributes[5] = new Attribute(250, 0, 7, 10, 0)
  Attributes[6] = new Attribute(300, 0, 9, 12, 0)
  Attributes[7] = new Attribute(350, 0, 10, 14, 0)
  Attributes[8] = new Attribute(400, 0, 12, 16, 0)
  Attributes[9] = new Attribute(450, 0, 13, 18, 0)
  Attributes[10] = new Attribute(500, 0, 15, 20, 0)
  Attributes[11] = new Attribute(550, 0, 16, 22, 0)
  Attributes[12] = new Attribute(600, 0, 18, 24, 0)
  Attributes[13] = new Attribute(650, 0, 19, 26, 0)
  Attributes[14] = new Attribute(700, 0, 21, 28, 0)
  Attributes[15] = new Attribute(750, 0, 22, 30, 0)
  Attributes[16] = new Attribute(800, 0, 24, 32, 0)
  Attributes[17] = new Attribute(850, 0, 25, 34, 0)
  Attributes[18] = new Attribute(900, 0, 27, 36, 0)
  Attributes[19] = new Attribute(950, 0, 28, 38, 0)
  Attributes[20] = new Attribute(1000, 0, 30, 40, 0)
  Attributes[21] = new Attribute(1050, 0, 31, 42, 0)
  Attributes[22] = new Attribute(1100, 0, 33, 44, 0)
  Attributes[23] = new Attribute(1150, 0, 34, 46, 0)
  Attributes[24] = new Attribute(1200, 0, 36, 48, 0)
  Attributes[25] = new Attribute(1250, 0, 37, 50, 0)
  Attributes[26] = new Attribute(1300, 0, 39, 52, 0)
  Attributes[27] = new Attribute(1350, 0, 40, 54, 0)
  Attributes[28] = new Attribute(1400, 0, 42, 56, 0)
  Attributes[29] = new Attribute(1450, 0, 43, 58, 0)
  Attributes[30] = new Attribute(1500, 0, 45, 60, 0)
  Attributes[31] = new Attribute(1550, 0, 48, 62, 0)
  Attributes[32] = new Attribute(1600, 0, 51, 64, 0)


  Skills = new Array();

  // Concussive Blow
  Spells = new Array();
  Spells[1] = new SpellInfo("+10% Stun Damage, 5% Chance of 1.0 Second of Stun")
  Spells[2] = new SpellInfo("+15% Stun Damage, 5% Chance of 1.5 Seconds of Stun")
  Spells[3] = new SpellInfo("+20% Stun Damage, 5% Chance of 2.0 Seconds of Stun")
  Spells[4] = new SpellInfo("+25% Stun Damage, 5% Chance of 2.5 Seconds of Stun")
  Spells[5] = new SpellInfo("+30% Stun Damage, 5% Chance of 3.0 Seconds of Stun")
  Spells[6] = new SpellInfo("+35% Stun Damage, 5% Chance of 3.5 Seconds of Stun")
  Spells[7] = new SpellInfo("+40% Stun Damage, 5% Chance of 4.0 Seconds of Stun")
  Spells[8] = new SpellInfo("+45% Stun Damage, 5% Chance of 4.5 Seconds of Stun")
  Skills[0] = new Skill("Concussive Blow", 1, Spells, -1, "Adds a chance for attacks to stun enemies and increases the duration of stun attacks when wielding a club type weapon.")

  // Battle Awareness
  Spells = new Array();
  Spells[1] = new SpellInfo("5.0 Meter Radius, +10 Defensive Ability, +75 Energy Reserved, 4 Armor")
  Spells[2] = new SpellInfo("6.0 Meter Radius, +16 Defensive Ability, +75 Energy Reserved, 6 Armor")
  Spells[3] = new SpellInfo("7.0 Meter Radius, +22 Defensive Ability, +75 Energy Reserved, 8 Armor")
  Spells[4] = new SpellInfo("8.0 Meter Radius, +28 Defensive Ability, +75 Energy Reserved, 11 Armor")
  Spells[5] = new SpellInfo("9.0 Meter Radius, +36 Defensive Ability, +75 Energy Reserved, 14 Armor")
  Spells[6] = new SpellInfo("10.0 Meter Radius, +42 Defensive Ability, +75 Energy Reserved, 17 Armor")
  Spells[7] = new SpellInfo("11.0 Meter Radius, +46 Defensive Ability, +75 Energy Reserved, 20 Armor")
  Spells[8] = new SpellInfo("12.0 Meter Radius, +52 Defensive Ability, +75 Energy Reserved, 24 Armor")
  Spells[9] = new SpellInfo("13.0 Meter Radius, +56 Defensive Ability, +75 Energy Reserved, 28 Armor")
  Spells[10] = new SpellInfo("14.0 Meter Radius, +64 Defensive Ability, +75 Energy Reserved, 32 Armor")
  Spells[11] = new SpellInfo("15.0 Meter Radius, +68 Defensive Ability, +75 Energy Reserved, 36 Armor")
  Spells[12] = new SpellInfo("16.0 Meter Radius, +72 Defensive Ability, +75 Energy Reserved, 40 Armor")
  Skills[1] = new Skill("Battle Awareness", 1, Spells, -1, "Enter a state of heightened awareness that allows you and your nearby allies to perceive and respond to attacks more effectively.")

  // Batter
  Spells = new Array();
  Spells[1] = new SpellInfo("12 Energy Cost, 3 Damage, +5% Damage, 18% Slower Attack for 8 Seconds")
  Spells[2] = new SpellInfo("13 Energy Cost, 5 Damage, +6% Damage, 20% Slower Attack for 8 Seconds")
  Spells[3] = new SpellInfo("15 Energy Cost, 7 Damage, +7% Damage, 23% Slower Attack for 8 Seconds")
  Spells[4] = new SpellInfo("16 Energy Cost, 9 Damage, +8% Damage, 25% Slower Attack for 8 Seconds")
  Spells[5] = new SpellInfo("16 Energy Cost, 12 Damage, +8% Damage, 30% Slower Attack for 8 Seconds")
  Spells[6] = new SpellInfo("17 Energy Cost, 14 Damage, +9% Damage, 33% Slower Attack for 8 Seconds")
  Spells[7] = new SpellInfo("18 Energy Cost, 16 Damage, +9% Damage, 35% Slower Attack for 8 Seconds")
  Spells[8] = new SpellInfo("20 Energy Cost, 18 Damage, +10% Damage, 38% Slower Attack for 8 Seconds")
  Spells[9] = new SpellInfo("21 Energy Cost, 20 Damage, +10% Damage, 40% Slower Attack for 8 Seconds")
  Spells[10] = new SpellInfo("21 Energy Cost, 23 Damage, +11% Damage, 45% Slower Attack for 8 Seconds")
  Spells[11] = new SpellInfo("22 Energy Cost, 26 Damage, +11% Damage, 48% Slower Attack for 8 Seconds")
  Spells[12] = new SpellInfo("23 Energy Cost, 29 Damage, +12% Damage, 50% Slower Attack for 8 Seconds")
  Skills[2] = new Skill("Batter", 1, Spells, -1, "A shield attack that hits for increased damage and slows enemy's attacks for a duration.")

  // Armor Handling
  Spells = new Array();
  Spells[1] = new SpellInfo("-8% Strength Requirement for Armor, -8% Strength Requirement for Shields, +6% Armor Absorption")
  Spells[2] = new SpellInfo("-10% Strength Requirement for Armor, -10% Strength Requirement for Shields, +8% Armor Absorption")
  Spells[3] = new SpellInfo("-13% Strength Requirement for Armor, -13% Strength Requirement for Shields, +10% Armor Absorption")
  Spells[4] = new SpellInfo("-15% Strength Requirement for Armor, -15% Strength Requirement for Shields, +12% Armor Absorption")
  Spells[5] = new SpellInfo("-17% Strength Requirement for Armor, -17% Strength Requirement for Shields, +14% Armor Absorption")
  Spells[6] = new SpellInfo("-20% Strength Requirement for Armor, -20% Strength Requirement for Shields, +16% Armor Absorption")
  Skills[3] = new Skill("Armor Handling", 1, Spells, -1, "Understanding how to properly adjust and move in armor allows you to wear heavier armor and shields than an untrained warrior of equivalent strength could manage.")

  // Adrenaline
  Spells = new Array();
  Spells[1] = new SpellInfo("5% Chance of Activating, 12 Second Duration, +5 Health Regeneration/Second")
  Spells[2] = new SpellInfo("5% Chance of Activating, 12 Second Duration, +8 Health Regeneration/Second")
  Spells[3] = new SpellInfo("5% Chance of Activating, 12 Second Duration, +11 Health Regeneration/Second")
  Spells[4] = new SpellInfo("5% Chance of Activating, 12 Second Duration, +14 Health Regeneration/Second")
  Spells[5] = new SpellInfo("5% Chance of Activating, 12 Second Duration, +17 Health Regeneration/Second")
  Spells[6] = new SpellInfo("5% Chance of Activating, 12 Second Duration, +19 Health Regeneration/Second")
  Spells[7] = new SpellInfo("5% Chance of Activating, 12 Second Duration, +21 Health Regeneration/Second")
  Spells[8] = new SpellInfo("5% Chance of Activating, 12 Second Duration, +24 Health Regeneration/Second")
  Spells[9] = new SpellInfo("5% Chance of Activating, 12 Second Duration, +26 Health Regeneration/Second")
  Spells[10] = new SpellInfo("5% Chance of Activating, 12 Second Duration, +28 Health Regeneration/Second")
  Spells[11] = new SpellInfo("5% Chance of Activating, 12 Second Duration, +30 Health Regeneration/Second")
  Spells[12] = new SpellInfo("5% Chance of Activating, 12 Second Duration, +33 Health Regeneration/Second")
  Skills[4] = new Skill("Adrenaline", 4, Spells, -1, "Each enemy hit has a chance of triggering an adrenaline rush that boosts life regeneration.")

  // Rally
  Spells = new Array();
  Spells[1] = new SpellInfo("51 Energy Cost, +180 Health Restored, 10 Second Duration, 10.0 Meter Radius, +150% Health Regeneration, 5 Armor")
  Spells[2] = new SpellInfo("53 Energy Cost, +270 Health Restored, 10 Second Duration, 10.0 Meter Radius, +150% Health Regeneration, 8 Armor")
  Spells[3] = new SpellInfo("56 Energy Cost, +370 Health Restored, 10 Second Duration, 10.0 Meter Radius, +150% Health Regeneration, 10 Armor")
  Spells[4] = new SpellInfo("58 Energy Cost, +480 Health Restored, 10 Second Duration, 10.0 Meter Radius, +150% Health Regeneration, 12 Armor")
  Spells[5] = new SpellInfo("59 Energy Cost, +600 Health Restored, 10 Second Duration, 10.0 Meter Radius, +150% Health Regeneration, 15 Armor")
  Spells[6] = new SpellInfo("62 Energy Cost, +730 Health Restored, 10 Second Duration, 10.0 Meter Radius, +150% Health Regeneration, 18 Armor")
  Spells[7] = new SpellInfo("64 Energy Cost, +870 Health Restored, 10 Second Duration, 10.0 Meter Radius, +150% Health Regeneration, 20 Armor")
  Spells[8] = new SpellInfo("67 Energy Cost, +1020 Health Restored, 10 Second Duration, 10.0 Meter Radius, +150% Health Regeneration, 23 Armor")
  Spells[9] = new SpellInfo("69 Energy Cost, +1180 Health Restored, 10 Second Duration, 10.0 Meter Radius, +150% Health Regeneration, 26 Armor")
  Spells[10] = new SpellInfo("70 Energy Cost, +1350 Health Restored, 10 Second Duration, 10.0 Meter Radius, +150% Health Regeneration, 29 Armor")
  Spells[11] = new SpellInfo("73 Energy Cost, +1530 Health Restored, 10 Second Duration, 10.0 Meter Radius, +150% Health Regeneration, 34 Armor")
  Spells[12] = new SpellInfo("75 Energy Cost, +1720 Health Restored, 10 Second Duration, 10.0 Meter Radius, +150% Health Regeneration, 40 Armor")
  Skills[5] = new Skill("Rally", 4, Spells, -1, "The resolute call of your horn can turn the tide of battle, inspiring all in its range to fight with renewed vitality.")

  // Quick Recovery
  Spells = new Array();
  Spells[1] = new SpellInfo("50 Energy Cost, 18 Second Duration, -32% Shield Recovery Time, +10% Armor Absorption, +4% Shield Block")
  Spells[2] = new SpellInfo("50 Energy Cost, 20 Second Duration, -42% Shield Recovery Time, +10% Armor Absorption, +6% Shield Block")
  Spells[3] = new SpellInfo("50 Energy Cost, 22 Second Duration, -50% Shield Recovery Time, +10% Armor Absorption, +8% Shield Block")
  Spells[4] = new SpellInfo("50 Energy Cost, 25 Second Duration, -58% Shield Recovery Time, +10% Armor Absorption, +10% Shield Block")
  Spells[5] = new SpellInfo("50 Energy Cost, 27 Second Duration, -64% Shield Recovery Time, +10% Armor Absorption, +12% Shield Block")
  Spells[6] = new SpellInfo("50 Energy Cost, 29 Second Duration, -70% Shield Recovery Time, +10% Armor Absorption, +14% Shield Block")
  Spells[7] = new SpellInfo("50 Energy Cost, 31 Second Duration, -75% Shield Recovery Time, +10% Armor Absorption, +16% Shield Block")
  Spells[8] = new SpellInfo("50 Energy Cost, 34 Second Duration, -80% Shield Recovery Time, +10% Armor Absorption, +18% Shield Block")
  Skills[6] = new Skill("Quick Recovery", 4, Spells, -1, "A strong shield arm allows you to block multiple attackers with amazing speed when necessary, but it can only be kept up for a short time.")

  // Shield Smash
  Spells = new Array();
  Spells[1] = new SpellInfo("6% Chance of Activating, 33 Reduced Defense Ability for 3 Seconds")
  Spells[2] = new SpellInfo("8% Chance of Activating, 51 Reduced Defense Ability for 3 Seconds")
  Spells[3] = new SpellInfo("10% Chance of Activating, 69 Reduced Defense Ability for 3 Seconds")
  Spells[4] = new SpellInfo("12% Chance of Activating, 87 Reduced Defense Ability for 3 Seconds")
  Spells[5] = new SpellInfo("14% Chance of Activating, 105 Reduced Defense Ability for 3 Seconds")
  Spells[6] = new SpellInfo("16% Chance of Activating, 123 Reduced Defense Ability for 3 Seconds")
  Skills[7] = new Skill("Shield Smash", 4, Spells, -1, "A shield fighting technique that inflicts damage with both the weapon and the shield.")

  // Resilience
  Spells = new Array();
  Spells[1] = new SpellInfo("-30% Recharge")
  Spells[2] = new SpellInfo("-38% Recharge")
  Spells[3] = new SpellInfo("-46% Recharge")
  Spells[4] = new SpellInfo("-52% Recharge")
  Spells[5] = new SpellInfo("-58% Recharge")
  Spells[6] = new SpellInfo("-64% Recharge")
  Skills[8] = new Skill("Resilience", 10, Spells, 4, "Increases how often an Adrenaline rush can be triggered.")

  // Focus
  Spells = new Array();
  Spells[1] = new SpellInfo("+15 Energy Reserved, +5% Shield Block")
  Spells[2] = new SpellInfo("+15 Energy Reserved, +8% Shield Block")
  Spells[3] = new SpellInfo("+15 Energy Reserved, +10% Shield Block")
  Spells[4] = new SpellInfo("+15 Energy Reserved, +12% Shield Block")
  Spells[5] = new SpellInfo("+15 Energy Reserved, +15% Shield Block")
  Spells[6] = new SpellInfo("+15 Energy Reserved, +18% Shield Block")
  Skills[9] = new Skill("Focus", 10, Spells, 1, "Focus allows you and your allies to react quickly to enemy attacks, increasing the chance of a successful shield block.")

  // Shield Charge
  Spells = new Array();
  Spells[1] = new SpellInfo("30 Energy Cost, 10-15 (Physical)Damage, 1 Second of Stun, +300% Movement")
  Spells[2] = new SpellInfo("33 Energy Cost, 21-30 (Physical)Damage, 1 Second of Stun, +300% Movement")
  Spells[3] = new SpellInfo("36 Energy Cost, 33-45 (Physical)Damage, 1 Second of Stun, +300% Movement")
  Spells[4] = new SpellInfo("39 Energy Cost, 44-61 (Physical)Damage, 1 Second of Stun, +300% Movement")
  Spells[5] = new SpellInfo("42 Energy Cost, 55-77 (Physical)Damage, 1 Second of Stun, +300% Movement")
  Spells[6] = new SpellInfo("45 Energy Cost, 68-94 (Physical)Damage, 1 Second of Stun, +300% Movement")
  Spells[7] = new SpellInfo("48 Energy Cost, 80-111 (Physical)Damage, 1 Second of Stun, +300% Movement")
  Spells[8] = new SpellInfo("51 Energy Cost, 93-129 (Physical)Damage, 1 Second of Stun, +300% Movement")
  Spells[9] = new SpellInfo("54 Energy Cost, 107-147 (Physical)Damage, 1 Second of Stun, +300% Movement")
  Spells[10] = new SpellInfo("57 Energy Cost, 121-166 (Physical)Damage, 1 Second of Stun, +300% Movement")
  Spells[11] = new SpellInfo("60 Energy Cost, 135-185 (Physical)Damage, 1 Second of Stun, +300% Movement")
  Spells[12] = new SpellInfo("63 Energy Cost, 150-205 (Physical)Damage, 1 Second of Stun, +300% Movement")
  Skills[10] = new Skill("Shield Charge", 10, Spells, -1, "A running attack that slams into the enemy with your shield causing bonus damage and stunning them.")

  // Inspiration
  Spells = new Array();
  Spells[1] = new SpellInfo("1 Second Duration, +2.8 Energy RegenerationSecond , +10% Total Speed")
  Spells[2] = new SpellInfo("3 Second Duration, +3.6 Energy RegenerationSecond , +10% Total Speed")
  Spells[3] = new SpellInfo("5 Second Duration, +4.4 Energy RegenerationSecond , +10% Total Speed")
  Spells[4] = new SpellInfo("6 Second Duration, +5.2 Energy RegenerationSecond , +10% Total Speed")
  Spells[5] = new SpellInfo("8 Second Duration, +6.0 Energy RegenerationSecond , +10% Total Speed")
  Spells[6] = new SpellInfo("10 Second Duration, +6.8 Energy RegenerationSecond , +10% Total Speed")
  Skills[11] = new Skill("Inspiration", 16, Spells, 5, "Gradually restores lost energy to allies allowing them to continue the fight.")

  // Rend Armor
  Spells = new Array();
  Spells[1] = new SpellInfo("15 Energy Cost, 90 Arc of Attack, 3 Target Maximum, 6 Reduced Armor for 5 Seconds")
  Spells[2] = new SpellInfo("15 Energy Cost, 95 Arc of Attack, 3 Target Maximum, 12 Reduced Armor for 5 Seconds")
  Spells[3] = new SpellInfo("15 Energy Cost, 100 Arc of Attack, 3 Target Maximum, 18 Reduced Armor for 5 Seconds")
  Spells[4] = new SpellInfo("15 Energy Cost, 105 Arc of Attack, 3 Target Maximum, 24 Reduced Armor for 5 Seconds")
  Spells[5] = new SpellInfo("15 Energy Cost, 110 Arc of Attack, 3 Target Maximum, 30 Reduced Armor for 5 Seconds")
  Spells[6] = new SpellInfo("15 Energy Cost, 115 Arc of Attack, 3 Target Maximum, 36 Reduced Armor for 5 Seconds")
  Spells[7] = new SpellInfo("15 Energy Cost, 120 Arc of Attack, 3 Target Maximum, 42 Reduced Armor for 5 Seconds")
  Spells[8] = new SpellInfo("15 Energy Cost, 125 Arc of Attack, 3 Target Maximum, 48 Reduced Armor for 5 Seconds")
  Spells[9] = new SpellInfo("15 Energy Cost, 130 Arc of Attack, 3 Target Maximum, 54 Reduced Armor for 5 Seconds")
  Spells[10] = new SpellInfo("15 Energy Cost, 135 Arc of Attack, 3 Target Maximum, 60 Reduced Armor for 5 Seconds")
  Spells[11] = new SpellInfo("15 Energy Cost, 140 Arc of Attack, 3 Target Maximum, 67 Reduced Armor for 5 Seconds")
  Spells[12] = new SpellInfo("15 Energy Cost, 145 Arc of Attack, 3 Target Maximum, 75 Reduced Armor for 5 Seconds")

  Skills[12] = new Skill("Rend Armor", 16, Spells, 2, "Increases the effectiveness of Batter causing it to hit three targets with enough force to dent their armor.")

  // Disable
  Spells = new Array();
  Spells[1] = new SpellInfo("6% Chance to be Used, 12 (Physical)Damage, 50% Slower Attack for 5 Seconds")
  Spells[2] = new SpellInfo("8% Chance to be Used, 15 (Physical)Damage, 50% Slower Attack for 5 Seconds")
  Spells[3] = new SpellInfo("10% Chance to be Used, 18 (Physical)Damage, 50% Slower Attack for 5 Seconds")
  Spells[4] = new SpellInfo("12% Chance to be Used, 22 (Physical)Damage, 50% Slower Attack for 5 Seconds")
  Spells[5] = new SpellInfo("14% Chance to be Used, 26 (Physical)Damage, 50% Slower Attack for 5 Seconds")
  Spells[6] = new SpellInfo("16% Chance to be Used, 31 (Physical)Damage, 50% Slower Attack for 5 Seconds")
  Skills[13] = new Skill("Disable", 16, Spells, -1, "A fighting technique that utilizes the shield to crush foes and throw them off-balance.")

  // Defensive Reaction
  Spells = new Array();
  Spells[1] = new SpellInfo("+15% Damage, +4% Total Speed")
  Spells[2] = new SpellInfo("+19% Damage, +6% Total Speed")
  Spells[3] = new SpellInfo("+23% Damage, +8% Total Speed")
  Spells[4] = new SpellInfo("+29% Damage, +10% Total Speed")
  Spells[5] = new SpellInfo("+33% Damage, +14% Total Speed")
  Spells[6] = new SpellInfo("+37% Damage, +16% Total Speed")
  Spells[7] = new SpellInfo("+43% Damage, +18% Total Speed")
  Spells[8] = new SpellInfo("+50% Damage, +20% Total Speed")
  Skills[14] = new Skill("Defensive Reaction", 24, Spells, 4, "Increases damage and attack speed during an Adrenaline rush.")

  // Iron Will
  Spells = new Array();
  Spells[1] = new SpellInfo("+10 Energy Reserved, 30% Stun Resistance, 30% Reduced Entrapment Duration, 30% Reduced Freeze Duration, 30% Skill Disruption Protection")
  Spells[2] = new SpellInfo("+10 Energy Reserved, 40% Stun Resistance, 40% Reduced Entrapment Duration, 40% Reduced Freeze Duration, 40% Skill Disruption Protection")
  Spells[3] = new SpellInfo("+10 Energy Reserved, 50% Stun Resistance, 50% Reduced Entrapment Duration, 50% Reduced Freeze Duration, 50% Skill Disruption Protection")
  Spells[4] = new SpellInfo("+10 Energy Reserved, 60% Stun Resistance, 60% Reduced Entrapment Duration, 60% Reduced Freeze Duration, 60% Skill Disruption Protection")
  Spells[5] = new SpellInfo("+10 Energy Reserved, 70% Stun Resistance, 70% Reduced Entrapment Duration, 70% Reduced Freeze Duration, 70% Skill Disruption Protection")
  Spells[6] = new SpellInfo("+10 Energy Reserved, 80% Stun Resistance, 80% Reduced Entrapment Duration, 80% Reduced Freeze Duration, 80% Skill Disruption Protection")
  Skills[15] = new Skill("Iron Will", 24, Spells, 1, "Grants allies the resolve to hold out against great adversity.")

  // Disruption
  Spells = new Array();
  Spells[1] = new SpellInfo("12 Energy Cost, 360 Arc of Attack, 2 Target Maximum, 1.5 Seconds of Skill Disruption")
  Spells[2] = new SpellInfo("14 Energy Cost, 360 Arc of Attack, 2 Target Maximum, 2.0 Seconds of Skill Disruption")
  Spells[3] = new SpellInfo("16 Energy Cost, 360 Arc of Attack, 3 Target Maximum, 2.5 Seconds of Skill Disruption")
  Spells[4] = new SpellInfo("18 Energy Cost, 360 Arc of Attack, 3 Target Maximum, 3.0 Seconds of Skill Disruption")
  Spells[5] = new SpellInfo("20 Energy Cost, 360 Arc of Attack, 3 Target Maximum, 3.5 Seconds of Skill Disruption")
  Spells[6] = new SpellInfo("22 Energy Cost, 360 Arc of Attack, 4 Target Maximum, 4.0 Seconds of Skill Disruption")
  Skills[16] = new Skill("Disruption", 24, Spells, 10, "Increases the shock effect of Shield Charge, startling adjacent enemies and disrupting skill use for a time.")

  // Defiance
  Spells = new Array();
  Spells[1] = new SpellInfo("8 Energy Cost, 10% Elemental Resistance, 5% Damage Reflected")
  Spells[2] = new SpellInfo("10 Energy Cost, 14% Elemental Resistance, 10% Damage Reflected")
  Spells[3] = new SpellInfo("12 Energy Cost, 17% Elemental Resistance, 15% Damage Reflected")
  Spells[4] = new SpellInfo("14 Energy Cost, 21% Elemental Resistance, 20% Damage Reflected")
  Spells[5] = new SpellInfo("16 Energy Cost, 24% Elemental Resistance, 25% Damage Reflected")
  Spells[6] = new SpellInfo("18 Energy Cost, 28% Elemental Resistance, 30% Damage Reflected")
  Spells[7] = new SpellInfo("20 Energy Cost, 31% Elemental Resistance, 35% Damage Reflected")
  Spells[8] = new SpellInfo("22 Energy Cost, 35% Elemental Resistance, 40% Damage Reflected")
  Spells[9] = new SpellInfo("24 Energy Cost, 38% Elemental Resistance, 45% Damage Reflected")
  Spells[10] = new SpellInfo("26 Energy Cost, 42% Elemental Resistance, 50% Damage Reflected")
  Spells[11] = new SpellInfo("28 Energy Cost, 45% Elemental Resistance, 55% Damage Reflected")
  Spells[12] = new SpellInfo("30 Energy Cost, 50% Elemental Resistance, 60% Damage Reflected")
  Skills[17] = new Skill("Defiance", 32, Spells, 5, "A percentage of all damage inflicted by enemies will be revisited back upon them for a short duration after using Rally.")

  // Colossus Form
  Spells = new Array();
  Spells[1] = new SpellInfo("30% Damage Absorption, 10 Active Energy Cost/Second, 24 Second Duration, +50% Damage, +30% Strength, +30 Health, -15% Total Speed")
  Spells[2] = new SpellInfo("32% Damage Absorption, 10 Active Energy Cost/Second, 24 Second Duration, +50% Damage, +32% Strength, +32 Health, -15% Total Speed")
  Spells[3] = new SpellInfo("35% Damage Absorption, 10 Active Energy Cost/Second, 24 Second Duration, +50% Damage, +35% Strength, +35 Health, -15% Total Speed")
  Spells[4] = new SpellInfo("37% Damage Absorption, 10 Active Energy Cost/Second, 24 Second Duration, +50% Damage, +37% Strength, +37 Health, -15% Total Speed")
  Spells[5] = new SpellInfo("40% Damage Absorption, 10 Active Energy Cost/Second, 24 Second Duration, +50% Damage, +40% Strength, +40 Health, -15% Total Speed")
  Spells[6] = new SpellInfo("43% Damage Absorption, 10 Active Energy Cost/Second, 24 Second Duration, +50% Damage, +43% Strength, +43 Health, -15% Total Speed")
  Spells[7] = new SpellInfo("46% Damage Absorption, 10 Active Energy Cost/Second, 24 Second Duration, +50% Damage, +46% Strength, +46 Health, -15% Total Speed")
  Spells[8] = new SpellInfo("50% Damage Absorption, 10 Active Energy Cost/Second, 24 Second Duration, +50% Damage, +50% Strength, +50 Health, -15% Total Speed")
  Skills[18] = new Skill("Colossus Form", 32, Spells, -1, "Assume the form of a towering Colossus and lay waste to your enemies.")

  // Pulverize
  Spells = new Array();
  Spells[1] = new SpellInfo("6% Chance to be Used, 120 Arc of Attack, 3 Target Maximum, 9-16 (Physical)Damage, 50 Reduced Offensive Ability for 3 Seconds, 3 Seconds of Skill Disruption")
  Spells[2] = new SpellInfo("8% Chance to be Used, 120 Arc of Attack, 3 Target Maximum, 15-25 (Physical)Damage, 50 Reduced Offensive Ability for 3 Seconds, 3 Seconds of Skill Disruption")
  Spells[3] = new SpellInfo("10% Chance to be Used, 120 Arc of Attack, 3 Target Maximum, 21-34 (Physical)Damage, 50 Reduced Offensive Ability for 3 Seconds, 3 Seconds of Skill Disruption")
  Spells[4] = new SpellInfo("12% Chance to be Used, 120 Arc of Attack, 3 Target Maximum, 28-45 (Physical)Damage, 50 Reduced Offensive Ability for 3 Seconds, 3 Seconds of Skill Disruption")
  Spells[5] = new SpellInfo("14% Chance to be Used, 120 Arc of Attack, 3 Target Maximum, 35-57 (Physical)Damage, 50 Reduced Offensive Ability for 3 Seconds, 3 Seconds of Skill Disruption")
  Spells[6] = new SpellInfo("16% Chance to be Used, 120 Arc of Attack, 3 Target Maximum, 42-70 (Physical)Damage, 50 Reduced Offensive Ability for 3 Seconds, 3 Seconds of Skill Disruption")
  Skills[19] = new Skill("Pulverize", 32, Spells, -1, "A fighting technique that utilizes the shield to slam into enemies, knocking them senseless.")


  // set the mastery array
  Mastery[5] = new setmastery(Skills, Attributes)

  // testing
  //alert(Mastery[2].Skills[19].spells[4].spellinfo)
  //alert(Skills[1][0].desc)

}