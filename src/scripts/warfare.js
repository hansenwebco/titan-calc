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
  this.masteryid = 3
  this.masteryname = "Warfare"
  this.Attributes = Attributes
}


window.loadWarfare = loadWarfare;
function loadWarfare() {

  // set attributes
  if (!AttributesBase[0]) { // base att's are only set one time
    AttributesBase[0] = new Attribute(300, 300, 50, 50, 50) // base stats for characters
  }
  let Attributes = [];
  Attributes[1] = new Attribute(40, 0, 2, 2, 0)
  Attributes[2] = new Attribute(80, 0, 4, 4, 0)
  Attributes[3] = new Attribute(120, 0, 6, 6, 0)
  Attributes[4] = new Attribute(160, 0, 8, 8, 0)
  Attributes[5] = new Attribute(200, 0, 10, 10, 0)
  Attributes[6] = new Attribute(240, 0, 12, 12, 0)
  Attributes[7] = new Attribute(280, 0, 14, 14, 0)
  Attributes[8] = new Attribute(320, 0, 16, 16, 0)
  Attributes[9] = new Attribute(360, 0, 18, 18, 0)
  Attributes[10] = new Attribute(400, 0, 20, 20, 0)
  Attributes[11] = new Attribute(440, 0, 22, 22, 0)
  Attributes[12] = new Attribute(480, 0, 24, 24, 0)
  Attributes[13] = new Attribute(520, 0, 26, 26, 0)
  Attributes[14] = new Attribute(560, 0, 28, 28, 0)
  Attributes[15] = new Attribute(600, 0, 30, 30, 0)
  Attributes[16] = new Attribute(640, 0, 32, 32, 0)
  Attributes[17] = new Attribute(680, 0, 34, 34, 0)
  Attributes[18] = new Attribute(720, 0, 36, 36, 0)
  Attributes[19] = new Attribute(760, 0, 38, 38, 0)
  Attributes[20] = new Attribute(800, 0, 40, 40, 0)
  Attributes[21] = new Attribute(840, 0, 42, 42, 0)
  Attributes[22] = new Attribute(880, 0, 44, 44, 0)
  Attributes[23] = new Attribute(920, 0, 46, 46, 0)
  Attributes[24] = new Attribute(960, 0, 48, 48, 0)
  Attributes[25] = new Attribute(1000, 0, 50, 50, 0)
  Attributes[26] = new Attribute(1040, 0, 52, 52, 0)
  Attributes[27] = new Attribute(1080, 0, 54, 54, 0)
  Attributes[28] = new Attribute(1120, 0, 56, 56, 0)
  Attributes[29] = new Attribute(1160, 0, 58, 58, 0)
  Attributes[30] = new Attribute(1200, 0, 60, 60, 0)
  Attributes[31] = new Attribute(1240, 0, 62, 62, 0)
  Attributes[32] = new Attribute(1280, 0, 64, 64, 0)


  Skills = [];

  // Weapon Training
  let Spells = [];
  Spells[1] = new SpellInfo("+10% Offensive Ability, +5% Attack Speed")
  Spells[2] = new SpellInfo("+14% Offensive Ability, +8% Attack Speed")
  Spells[3] = new SpellInfo("+18% Offensive Ability, +10% Attack Speed")
  Spells[4] = new SpellInfo("+24% Offensive Ability, +12% Attack Speed")
  Spells[5] = new SpellInfo("+28% Offensive Ability, +14% Attack Speed")
  Spells[6] = new SpellInfo("+32% Offensive Ability, +16% Attack Speed")
  Skills[0] = new Skill("Weapon Training", 1, Spells, -1, "	Years of training with the sword, axe, and club allow you to attack faster and react quickly to enemy attacks.")

  // Battle Rage
  Spells = [];
  Spells[1] = new SpellInfo("8% Chance of Activating, 10 Second Duration, 8 (Physical)Damage, +50% Offensive Ability")
  Spells[2] = new SpellInfo("8% Chance of Activating, 10 Second Duration, 12 (Physical)Damage, +50% Offensive Ability")
  Spells[3] = new SpellInfo("8% Chance of Activating, 10 Second Duration, 16 (Physical)Damage, +50% Offensive Ability")
  Spells[4] = new SpellInfo("8% Chance of Activating, 10 Second Duration, 20 (Physical)Damage, +50% Offensive Ability")
  Spells[5] = new SpellInfo("8% Chance of Activating, 10 Second Duration, 25 (Physical)Damage, +50% Offensive Ability")
  Spells[6] = new SpellInfo("8% Chance of Activating, 10 Second Duration, 30 (Physical)Damage, +50% Offensive Ability")
  Spells[7] = new SpellInfo("8% Chance of Activating, 10 Second Duration, 34 (Physical)Damage, +50% Offensive Ability")
  Spells[8] = new SpellInfo("8% Chance of Activating, 10 Second Duration, 40 (Physical)Damage, +50% Offensive Ability")
  Spells[9] = new SpellInfo("8% Chance of Activating, 10 Second Duration, 45 (Physical)Damage, +50% Offensive Ability")
  Spells[10] = new SpellInfo("8% Chance of Activating, 10 Second Duration, 50 (Physical)Damage, +50% Offensive Ability")
  Spells[11] = new SpellInfo("8% Chance of Activating, 10 Second Duration, 55 (Physical)Damage, +50% Offensive Ability")
  Spells[12] = new SpellInfo("8% Chance of Activating, 10 Second Duration, 62 (Physical)Damage, +50% Offensive Ability")
  Skills[1] = new Skill("Battle Rage", 1, Spells, -1, "Each enemy hit has a chance of sending you into a battle rage that adds bonus damage to attacks and increases Offensive Ability for a short duration.")

  // Onslaught
  Spells = [];
  Spells[1] = new SpellInfo("1 Charge Level, 1 Energy Cost, +10% Damage")
  Spells[2] = new SpellInfo("2 Charge Levels, 1 Energy Cost, +15% Damage")
  Spells[3] = new SpellInfo("3 Charge Levels, 1 Energy Cost, +19% Damage")
  Spells[4] = new SpellInfo("4 Charge Levels, 1 Energy Cost, +26% Damage")
  Spells[5] = new SpellInfo("5 Charge Levels, 1 Energy Cost, +31% Damage")
  Spells[6] = new SpellInfo("6 Charge Levels, 1 Energy Cost, +37% Damage")
  Spells[7] = new SpellInfo("7 Charge Levels, 1 Energy Cost, +42% Damage")
  Spells[8] = new SpellInfo("8 Charge Levels, 1 Energy Cost, +50% Damage")
  Skills[2] = new Skill("Onslaught", 1, Spells, -1, "When used as your default weapon attack, Onslaught increases your attack damage with each successive hit. The power of your Onslaught dissipates rapidly when not actively attacking.")

  // Dual Wield
  Spells = [];
  Spells[1] = new SpellInfo("12% Chance to be Used")
  Spells[2] = new SpellInfo("14% Chance to be Used")
  Spells[3] = new SpellInfo("16% Chance to be Used")
  Spells[4] = new SpellInfo("18% Chance to be Used")
  Spells[5] = new SpellInfo("20% Chance to be Used")
  Spells[6] = new SpellInfo("22% Chance to be Used")
  Skills[3] = new Skill("Dual Wield", 4, Spells, -1, "Learn to effectively wield two weapons.")

  // Dodge Attack
  Spells = [];
  Spells[1] = new SpellInfo("3% Chance to Dodge Attacks")
  Spells[2] = new SpellInfo("6% Chance to Dodge Attacks")
  Spells[3] = new SpellInfo("8% Chance to Dodge Attacks")
  Spells[4] = new SpellInfo("10% Chance to Dodge Attacks")
  Spells[5] = new SpellInfo("12% Chance to Dodge Attacks")
  Spells[6] = new SpellInfo("15% Chance to Dodge Attacks")
  Spells[7] = new SpellInfo("18% Chance to Dodge Attacks")
  Spells[8] = new SpellInfo("21% Chance to Dodge Attacks")
  Skills[4] = new Skill("Dodge Attack", 4, Spells, -1, "Even the sturdiest armor has its chinks. The best way to stay alive is to not get hit.")

  // Ignore Pain
  Spells = [];
  Spells[1] = new SpellInfo("3% Damage Resistance, 3% Pierce Resistance")
  Spells[2] = new SpellInfo("6% Damage Resistance, 6% Pierce Resistance")
  Spells[3] = new SpellInfo("8% Damage Resistance, 8% Pierce Resistance")
  Spells[4] = new SpellInfo("10% Damage Resistance, 10% Pierce Resistance")
  Spells[5] = new SpellInfo("12% Damage Resistance, 12% Pierce Resistance")
  Spells[6] = new SpellInfo("15% Damage Resistance, 15% Pierce Resistance")
  Skills[5] = new Skill("Ignore Pain", 4, Spells, 2, "Total focus in the heat of battle allows you to ignore physical and piercing damage.")

  // War Horn
  Spells = [];
  Spells[1] = new SpellInfo("52 Energy Cost, 8 Meter Radius, 1.5-3.0 Seconds of Stun")
  Spells[2] = new SpellInfo("54 Energy Cost, 8.4 Meter Radius, 1.5-3.5 Seconds of Stun")
  Spells[3] = new SpellInfo("56 Energy Cost, 8.8 Meter Radius, 1.5-3.9 Seconds of Stun")
  Spells[4] = new SpellInfo("58 Energy Cost, 9.2 Meter Radius, 1.5-4.3 Seconds of Stun")
  Spells[5] = new SpellInfo("60 Energy Cost, 9.6 Meter Radius, 1.5-4.6 Seconds of Stun")
  Spells[6] = new SpellInfo("62 Energy Cost, 10.0 Meter Radius, 1.5-5.0 Seconds of Stun")
  Spells[7] = new SpellInfo("64 Energy Cost, 10.4 Meter Radius, 1.5-5.3 Seconds of Stun")
  Spells[8] = new SpellInfo("66 Energy Cost, 10.8 Meter Radius, 1.5-5.6 Seconds of Stun")
  Spells[9] = new SpellInfo("68 Energy Cost, 11.2 Meter Radius, 1.5-6.0 Seconds of Stun")
  Spells[10] = new SpellInfo("70 Energy Cost, 11.6 Meter Radius, 1.5-6.5 Seconds of Stun")
  Skills[6] = new Skill("War Horn", 4, Spells, -1, "The triumphant call of your war horn temporarily stuns enemies.")

  // Hew
  Spells = [];
  Spells[1] = new SpellInfo("3% Chance to be Used, +50% Damage")
  Spells[2] = new SpellInfo("4% Chance to be Used, +50% Damage")
  Spells[3] = new SpellInfo("6% Chance to be Used, +50% Damage")
  Spells[4] = new SpellInfo("7% Chance to be Used, +50% Damage")
  Spells[5] = new SpellInfo("9% Chance to be Used, +50% Damage")
  Spells[6] = new SpellInfo("10% Chance to be Used, +50% Damage")
  Skills[7] = new Skill("Hew", 10, Spells, 3, "A Dual Wield technique that increases damage by 50%.")

  // Crushing Blow
  Spells = [];
  Spells[1] = new SpellInfo("25% Chance of 25-51 (Physical)Damage")
  Spells[2] = new SpellInfo("25% Chance of 37-65 (Physical)Damage")
  Spells[3] = new SpellInfo("25% Chance of 50-79 (Physical)Damage")
  Spells[4] = new SpellInfo("25% Chance of 63-93 (Physical)Damage")
  Spells[5] = new SpellInfo("25% Chance of 76-107 (Physical)Damage")
  Spells[6] = new SpellInfo("25% Chance of 90-122 (Physical)Damage")
  Spells[7] = new SpellInfo("25% Chance of 104-137 (Physical)Damage")
  Spells[8] = new SpellInfo("25% Chance of 118-152 (Physical)Damage")
  Spells[9] = new SpellInfo("25% Chance of 133-168 (Physical)Damage")
  Spells[10] = new SpellInfo("25% Chance of 148-184 (Physical)Damage")
  Spells[11] = new SpellInfo("25% Chance of 163-200 (Physical)Damage")
  Spells[12] = new SpellInfo("25% Chance of 179-217 (Physical)Damage")
  Skills[8] = new Skill("Crushing Blow", 10, Spells, 1, "Provides a chance to critical hit for increased damage while in Battle Rage.")

  // Battle Standard
  Spells = [];
  Spells[1] = new SpellInfo("50 Energy Cost, Battle Standard Attributes: Life Time 18 Seconds, 180 Health, Battle Standard Abilities: Battle Standard (12% Damage Absorption, +1 to All Skills, 24 Second Duration, 12.0 Meter Radius, +16 Offensive Ability)")
  Spells[2] = new SpellInfo("50 Energy Cost, Battle Standard Attributes: Life Time 20 Seconds, 210 Health, Battle Standard Abilities: Battle Standard (15% Damage Absorption, +1 to All Skills, 30 Second Duration, 12.0 Meter Radius, +24 Offensive Ability)")
  Spells[3] = new SpellInfo("50 Energy Cost, Battle Standard Attributes: Life Time 22 Seconds, 240 Health, Battle Standard Abilities: Battle Standard (18% Damage Absorption, +1 to All Skills, 36 Second Duration, 12.0 Meter Radius, +32 Offensive Ability)")
  Spells[4] = new SpellInfo("50 Energy Cost, Battle Standard Attributes: Life Time 24 Seconds, 270 Health, Battle Standard Abilities: Battle Standard (21% Damage Absorption, +1 to All Skills, 42 Second Duration, 12.0 Meter Radius, +40 Offensive Ability)")
  Spells[5] = new SpellInfo("50 Energy Cost, Battle Standard Attributes: Life Time 26 Seconds, 300 Health, Battle Standard Abilities: Battle Standard (23% Damage Absorption, +1 to All Skills, 48 Second Duration, 12.0 Meter Radius, +48 Offensive Ability)")
  Spells[6] = new SpellInfo("50 Energy Cost, Battle Standard Attributes: Life Time 28 Seconds, 330 Health, Battle Standard Abilities: Battle Standard (25% Damage Absorption, +1 to All Skills, 54 Second Duration, 12.0 Meter Radius, +56 Offensive Ability)")
  Spells[7] = new SpellInfo("50 Energy Cost, Battle Standard Attributes: Life Time 30 Seconds, 360 Health, Battle Standard Abilities: Battle Standard (28% Damage Absorption, +1 to All Skills, 60 Second Duration, 12.0 Meter Radius, +64 Offensive Ability)")
  Spells[8] = new SpellInfo("50 Energy Cost, Battle Standard Attributes: Life Time 32 Seconds, 390 Health, Battle Standard Abilities: Battle Standard (30% Damage Absorption, +1 to All Skills, 66 Second Duration, 12.0 Meter Radius, +72 Offensive Ability)")
  Spells[9] = new SpellInfo("50 Energy Cost, Battle Standard Attributes: Life Time 34 Seconds, 420 Health, Battle Standard Abilities: Battle Standard (33% Damage Absorption, +1 to All Skills, 72 Second Duration, 12.0 Meter Radius, +80 Offensive Ability)")
  Spells[10] = new SpellInfo("50 Energy Cost, Battle Standard Attributes: Life Time 36 Seconds, 450 Health, Battle Standard Abilities: Battle Standard (36% Damage Absorption, +1 to All Skills, 78 Second Duration, 12.0 Meter Radius, +88 Offensive Ability)")
  Skills[9] = new Skill("Battle Standard", 10, Spells, -1, "Throw down a mighty standard to embolden the hearts of nearby allies.")

  // War Wind
  Spells = [];
  Spells[1] = new SpellInfo("65 Energy Cost, 360 Arc of Attack, 4 Target Maximum, -25 (Physical)Damage, +300% Movement")
  Spells[2] = new SpellInfo("68 Energy Cost, 360 Arc of Attack, 4 Target Maximum, -20 (Physical)Damage, +300% Movement")
  Spells[3] = new SpellInfo("71 Energy Cost, 360 Arc of Attack, 4 Target Maximum, -15 (Physical)Damage, +300% Movement")
  Spells[4] = new SpellInfo("74 Energy Cost, 360 Arc of Attack, 4 Target Maximum, -10 (Physical)Damage, +300% Movement")
  Spells[5] = new SpellInfo("77 Energy Cost, 360 Arc of Attack, 4 Target Maximum, -5 (Physical)Damage, +300% Movement")
  Spells[6] = new SpellInfo("80 Energy Cost, 360 Arc of Attack, 4 Target Maximum, 0 (Physical)Damage, +300% Movement")
  Spells[7] = new SpellInfo("83 Energy Cost, 360 Arc of Attack, 4 Target Maximum, 5 (Physical)Damage, +300% Movement")
  Spells[8] = new SpellInfo("86 Energy Cost, 360 Arc of Attack, 4 Target Maximum, 10 (Physical)Damage, +300% Movement")
  Skills[10] = new Skill("War Wind", 10, Spells, -1, "Executes a devastating spinning attack that can damage up to four enemies.")

  // Cross Cut
  Spells = [];
  Spells[1] = new SpellInfo("3% Chance to be Used, 90 Arc of Attack, 2 Target Maximum, 15 Bleeding Damage over 5 Seconds")
  Spells[2] = new SpellInfo("4% Chance to be Used, 90 Arc of Attack, 2 Target Maximum, 30 Bleeding Damage over 5 Seconds")
  Spells[3] = new SpellInfo("6% Chance to be Used, 90 Arc of Attack, 2 Target Maximum, 40 Bleeding Damage over 5 Seconds")
  Spells[4] = new SpellInfo("7% Chance to be Used, 90 Arc of Attack, 2 Target Maximum, 50 Bleeding Damage over 5 Seconds")
  Spells[5] = new SpellInfo("9% Chance to be Used, 90 Arc of Attack, 2 Target Maximum, 65 Bleeding Damage over 5 Seconds")
  Spells[6] = new SpellInfo("10% Chance to be Used, 90 Arc of Attack, 2 Target Maximum, 80 Bleeding Damage over 5 Seconds")
  Skills[11] = new Skill("Cross Cut", 16, Spells, 3, "A Dual Wield technique that can hit up to 2 enemies with a cross-cutting scissor motion.")

  // Hamstring
  Spells = [];
  Spells[1] = new SpellInfo("8 Reduced Defensive Ability for 3 Seconds, 8 Reduced Armor for 6 Seconds, 10% Slower Movement for 5 Seconds")
  Spells[2] = new SpellInfo("12 Reduced Defensive Ability for 3 Seconds, 12 Reduced Armor for 6 Seconds, 15% Slower Movement for 5 Seconds")
  Spells[3] = new SpellInfo("16 Reduced Defensive Ability for 3 Seconds, 16 Reduced Armor for 6 Seconds, 20% Slower Movement for 5 Seconds")
  Spells[4] = new SpellInfo("20 Reduced Defensive Ability for 3 Seconds, 20 Reduced Armor for 6 Seconds, 25% Slower Movement for 5 Seconds")
  Spells[5] = new SpellInfo("24 Reduced Defensive Ability for 3 Seconds, 24 Reduced Armor for 6 Seconds, 30% Slower Movement for 5 Seconds")
  Spells[6] = new SpellInfo("28 Reduced Defensive Ability for 3 Seconds, 28 Reduced Armor for 6 Seconds, 35% Slower Movement for 5 Seconds")
  Skills[12] = new Skill("Hamstring", 16, Spells, 2, "An attack aimed at the enemy's legs reduces their ability to run and increases their vulnerability for a short duration.")

  // Counter Attack
  Spells = [];
  Spells[1] = new SpellInfo("15% Chance of 18-31 (Physical)Damage Retaliation")
  Spells[2] = new SpellInfo("15% Chance of 20-35 (Physical)Damage Retaliation")
  Spells[3] = new SpellInfo("15% Chance of 23-39 (Physical)Damage Retaliation")
  Spells[4] = new SpellInfo("15% Chance of 25-43 (Physical)Damage Retaliation")
  Spells[5] = new SpellInfo("15% Chance of 30-51 (Physical)Damage Retaliation")
  Spells[6] = new SpellInfo("15% Chance of 33-56 (Physical)Damage Retaliation")
  Spells[7] = new SpellInfo("15% Chance of 35-64 (Physical)Damage Retaliation")
  Spells[8] = new SpellInfo("15% Chance of 38-71 (Physical)Damage Retaliation")
  Spells[9] = new SpellInfo("15% Chance of 40-77 (Physical)Damage Retaliation")
  Spells[10] = new SpellInfo("15% Chance of 45-89 (Physical)Damage Retaliation")
  Spells[11] = new SpellInfo("15% Chance of 48-98 (Physical)Damage Retaliation")
  Spells[12] = new SpellInfo("15% Chance of 50-108 (Physical)Damage Retaliation")
  Skills[13] = new Skill("Counter Attack", 24, Spells, 1, "Provides a chance to counter attack an enemy after being hit in Battle Rage.")

  // Triumph
  Spells = [];
  Spells[1] = new SpellInfo("12.0 Meter Radius, -15% (Physical)Damage, -15% Damage Resistance, -50% Stun Resistance")
  Spells[2] = new SpellInfo("12.0 Meter Radius, -20% (Physical)Damage, -20% Damage Resistance, -50% Stun Resistance")
  Spells[3] = new SpellInfo("12.0 Meter Radius, -25% (Physical)Damage, -25% Damage Resistance, -50% Stun Resistance")
  Spells[4] = new SpellInfo("12.0 Meter Radius, -30% (Physical)Damage, -30% Damage Resistance, -50% Stun Resistance")
  Spells[5] = new SpellInfo("12.0 Meter Radius, -35% (Physical)Damage, -35% Damage Resistance, -50% Stun Resistance")
  Spells[6] = new SpellInfo("12.0 Meter Radius, -40% (Physical)Damage, -40% Damage Resistance, -50% Stun Resistance")
  Skills[14] = new Skill("Triumph", 24, Spells, 9, "Seeing the inevitability of your triumph, enemies lose hope and the strength of their attack diminishes.")

  // Lacerate
  Spells = [];
  Spells[1] = new SpellInfo("20 Energy Cost, 1 Target Maximum, 19 Bleeding Damage Over 3 Seconds")
  Spells[2] = new SpellInfo("20 Energy Cost, 1 Target Maximum, 27 Bleeding Damage Over 3 Seconds")
  Spells[3] = new SpellInfo("20 Energy Cost, 1 Target Maximum, 35 Bleeding Damage Over 3 Seconds")
  Spells[4] = new SpellInfo("20 Energy Cost, 1 Target Maximum, 44 Bleeding Damage Over 3 Seconds")
  Spells[5] = new SpellInfo("20 Energy Cost, 2 Target Maximum, 50 Bleeding Damage Over 3 Seconds")
  Spells[6] = new SpellInfo("20 Energy Cost, 2 Target Maximum, 58 Bleeding Damage Over 3 Seconds")
  Spells[7] = new SpellInfo("20 Energy Cost, 2 Target Maximum, 66 Bleeding Damage Over 3 Seconds")
  Spells[8] = new SpellInfo("20 Energy Cost, 2 Target Maximum, 75 Bleeding Damage Over 3 Seconds")
  Skills[15] = new Skill("Lacerate", 24, Spells, 10, "Adds bleeding damage to War Wind and increases the number of enemies hit. Requires that at least one weapon be a sword or axe.")

  // Doom Horn
  Spells = [];
  Spells[1] = new SpellInfo("20 Energy Cost, 9% Reduction to Enemy's Health, 12 Reduced Armor for 10 Seconds")
  Spells[2] = new SpellInfo("20 Energy Cost, 12% Reduction to Enemy's Health, 16 Reduced Armor for 10 Seconds")
  Spells[3] = new SpellInfo("20 Energy Cost, 15% Reduction to Enemy's Health, 20 Reduced Armor for 10 Seconds")
  Spells[4] = new SpellInfo("20 Energy Cost, 18% Reduction to Enemy's Health, 24 Reduced Armor for 10 Seconds")
  Spells[5] = new SpellInfo("20 Energy Cost, 21% Reduction to Enemy's Health, 28 Reduced Armor for 10 Seconds")
  Spells[6] = new SpellInfo("20 Energy Cost, 25% Reduction to Enemy's Health, 33 Reduced Armor for 10 Seconds")
  Skills[16] = new Skill("Doom Horn", 24, Spells, 6, "Your War Horn heralds the doom of your enemies, shattering their nerves and reducing their ability to defend themselves.")

  // Tumult
  Spells = [];
  Spells[1] = new SpellInfo("3% Chance to be Used, 360 Arc of Attack, 3 Target Maximum, 18 Bleeding Damage over 5 Seconds, 1 Seconds of Stun")
  Spells[2] = new SpellInfo("4% Chance to be Used, 360 Arc of Attack, 3 Target Maximum, 36 Bleeding Damage over 5 Seconds, 1 Seconds of Stun")
  Spells[3] = new SpellInfo("6% Chance to be Used, 360 Arc of Attack, 3 Target Maximum, 48 Bleeding Damage over 5 Seconds, 1 Seconds of Stun")
  Spells[4] = new SpellInfo("7% Chance to be Used, 360 Arc of Attack, 3 Target Maximum, 61 Bleeding Damage over 5 Seconds, 1 Seconds of Stun")
  Spells[5] = new SpellInfo("9% Chance to be Used, 360 Arc of Attack, 3 Target Maximum, 79 Bleeding Damage over 5 Seconds, 1 Seconds of Stun")
  Spells[6] = new SpellInfo("10% Chance to be Used, 360 Arc of Attack, 3 Target Maximum, 97 Bleeding Damage over 5 Seconds, 1 Seconds of Stun")
  Skills[17] = new Skill("Tumult", 32, Spells, 3, "A Dual Wield technique that hits up to 3 adjacent enemies.")

  // Ardor
  Spells = [];
  Spells[1] = new SpellInfo("+6% Movement, +6% Attack Speed")
  Spells[2] = new SpellInfo("+8% Movement, +8% Attack Speed")
  Spells[3] = new SpellInfo("+10% Movement, +10% Attack Speed")
  Spells[4] = new SpellInfo("+12% Movement, +12% Attack Speed")
  Spells[5] = new SpellInfo("+14% Movement, +14% Attack Speed")
  Spells[6] = new SpellInfo("+16% Movement, +16% Attack Speed")
  Skills[18] = new Skill("Ardor", 32, Spells, 2, "You build momentum as you drive your attack forward, attacking and moving more rapidly.")

  // Ancestral Horn
  Spells = [];
  Spells[1] = new SpellInfo("225 Energy Cost, 3 Summon Limit, Ancestral Warrior Attributes: Life Time 24 Seconds, 250 Health, 300 Energy, Ancestral Warrior Abilities: 47-53 (Physical)Damage")
  Spells[2] = new SpellInfo("225 Energy Cost, 3 Summon Limit, Ancestral Warrior Attributes: Life Time 24 Seconds, 300 Health, 300 Energy, Ancestral Warrior Abilities: 52-61 (Physical)Damage")
  Spells[3] = new SpellInfo("225 Energy Cost, 3 Summon Limit, Ancestral Warrior Attributes: Life Time 24 Seconds, 350 Health, 300 Energy, Ancestral Warrior Abilities: 57-68 (Physical)Damage")
  Spells[4] = new SpellInfo("225 Energy Cost, 3 Summon Limit, Ancestral Warrior Attributes: Life Time 24 Seconds, 400 Health, 300 Energy, Ancestral Warrior Abilities: 62-75 (Physical)Damage")
  Spells[5] = new SpellInfo("225 Energy Cost, 4 Summon Limit, Ancestral Warrior Attributes: Life Time 24 Seconds, 450 Health, 300 Energy, Ancestral Warrior Abilities: 69-86 (Physical)Damage")
  Spells[6] = new SpellInfo("225 Energy Cost, 4 Summon Limit, Ancestral Warrior Attributes: Life Time 24 Seconds, 500 Health, 300 Energy, Ancestral Warrior Abilities: 74-93 (Physical)Damage")
  Spells[7] = new SpellInfo("225 Energy Cost, 4 Summon Limit, Ancestral Warrior Attributes: Life Time 24 Seconds, 550 Health, 300 Energy, Ancestral Warrior Abilities: 79-100 (Physical)Damage")
  Spells[8] = new SpellInfo("225 Energy Cost, 4 Summon Limit, Ancestral Warrior Attributes: Life Time 24 Seconds, 600 Health, 300 Energy, Ancestral Warrior Abilities: 84-108 (Physical)Damage")
  Spells[9] = new SpellInfo("225 Energy Cost, 4 Summon Limit, Ancestral Warrior Attributes: Life Time 24 Seconds, 650 Health, 300 Energy, Ancestral Warrior Abilities: 91-118 (Physical)Damage")
  Spells[10] = new SpellInfo("225 Energy Cost, 5 Summon Limit, Ancestral Warrior Attributes: Life Time 24 Seconds, 700 Health, 300 Energy, Ancestral Warrior Abilities: 96-125 (Physical)Damage")
  Spells[11] = new SpellInfo("225 Energy Cost, 5 Summon Limit, Ancestral Warrior Attributes: Life Time 24 Seconds, 750 Health, 300 Energy, Ancestral Warrior Abilities: 101-133 (Physical)Damage")
  Spells[12] = new SpellInfo("225 Energy Cost, 5 Summon Limit, Ancestral Warrior Attributes: Life Time 24 Seconds, 800 Health, 300 Energy, Ancestral Warrior Abilities: 106-140 (Physical)Damage")
  Spells[13] = new SpellInfo("225 Energy Cost, 5 Summon Limit, Ancestral Warrior Attributes: Life Time 24 Seconds, 850 Health, 300 Energy, Ancestral Warrior Abilities: 115-151 (Physical)Damage")
  Spells[14] = new SpellInfo("225 Energy Cost, 5 Summon Limit, Ancestral Warrior Attributes: Life Time 24 Seconds, 900 Health, 300 Energy, Ancestral Warrior Abilities: 120-159 (Physical)Damage")
  Spells[15] = new SpellInfo("225 Energy Cost, 5 Summon Limit, Ancestral Warrior Attributes: Life Time 24 Seconds, 950 Health, 300 Energy, Ancestral Warrior Abilities: 125-166 (Physical)Damage")
  Spells[16] = new SpellInfo("225 Energy Cost, 5 Summon Limit, Ancestral Warrior Attributes: Life Time 24 Seconds, 1000 Health, 300 Energy, Ancestral Warrior Abilities: 130-174 (Physical)Damage")
  Skills[19] = new Skill("Ancestral Horn", 32, Spells, -1, "The ominous call on this ancient heirloom will summon forth ghostly heroes of old from the Elysian Fields to do battle once more.")


  // set the mastery array
  Mastery[3] = new setmastery(Skills, Attributes)

  // testing
  //alert(Mastery[3].Skills[19].spells[4].spellinfo)
  //alert(Skills[1][0].desc)

}