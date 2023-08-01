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
  this.masteryid = 1
  this.masteryname = "Earth"
  this.Attributes = Attributes
}

window.loadEarth = loadEarth;
function loadEarth() {

  // set attributes
  if (!AttributesBase[0]) { // base att's are only set one time
    AttributesBase[0] = new Attribute(300, 300, 50, 50, 50) // base stats for characters
  }
    let Attributes = [];
  Attributes[1] = new Attribute(23, 6, 0, 1, 3)
  Attributes[2] = new Attribute(45, 12, 0, 3, 6)
  Attributes[3] = new Attribute(68, 18, 0, 4, 9)
  Attributes[4] = new Attribute(90, 24, 0, 6, 12)
  Attributes[5] = new Attribute(113, 30, 0, 7, 15)
  Attributes[6] = new Attribute(135, 36, 0, 9, 18)
  Attributes[7] = new Attribute(158, 42, 0, 10, 21)
  Attributes[8] = new Attribute(180, 48, 0, 12, 24)
  Attributes[9] = new Attribute(203, 54, 0, 13, 27)
  Attributes[10] = new Attribute(225, 60, 0, 15, 30)
  Attributes[11] = new Attribute(248, 66, 0, 16, 33)
  Attributes[12] = new Attribute(270, 72, 0, 18, 36)
  Attributes[13] = new Attribute(293, 78, 0, 19, 39)
  Attributes[14] = new Attribute(315, 84, 0, 21, 42)
  Attributes[15] = new Attribute(338, 90, 0, 22, 45)
  Attributes[16] = new Attribute(360, 96, 0, 24, 48)
  Attributes[17] = new Attribute(383, 102, 0, 25, 51)
  Attributes[18] = new Attribute(405, 108, 0, 27, 54)
  Attributes[19] = new Attribute(428, 114, 0, 28, 57)
  Attributes[20] = new Attribute(450, 120, 0, 30, 60)
  Attributes[21] = new Attribute(473, 126, 0, 31, 63)
  Attributes[22] = new Attribute(495, 132, 0, 33, 66)
  Attributes[23] = new Attribute(518, 138, 0, 34, 69)
  Attributes[24] = new Attribute(540, 144, 0, 36, 72)
  Attributes[25] = new Attribute(563, 150, 0, 37, 75)
  Attributes[26] = new Attribute(585, 156, 0, 39, 78)
  Attributes[27] = new Attribute(608, 162, 0, 40, 81)
  Attributes[28] = new Attribute(630, 168, 0, 42, 84)
  Attributes[29] = new Attribute(653, 174, 0, 43, 87)
  Attributes[30] = new Attribute(675, 180, 0, 45, 90)
  Attributes[31] = new Attribute(698, 186, 0, 46, 90)
  Attributes[32] = new Attribute(720, 192, 0, 48, 90)


    let Skills = [];
  // Earth Enchantment
    let Spells = [];
  Spells[1] = new SpellInfo("1 Active Energy Cost, 6.0 Meter Radius, 5-8 Burn Damage Over 1-3 Seconds, +12% Fire Damage, +75 Energy Reserved")
  Spells[2] = new SpellInfo("1 Active Energy Cost, 6.0 Meter Radius, 5-8 Burn Damage Over 1-3 Seconds, +20% Fire Damage, +75 Energy Reserved")
  Spells[3] = new SpellInfo("1 Active Energy Cost, 6.0 Meter Radius, 5-8 Burn Damage Over 1-3 Seconds, +28% Fire Damage, +75 Energy Reserved")
  Spells[4] = new SpellInfo("1 Active Energy Cost, 6.0 Meter Radius, 5-8 Burn Damage Over 1-3 Seconds, +36% Fire Damage, +75 Energy Reserved")
  Spells[5] = new SpellInfo("1 Active Energy Cost, 6.0 Meter Radius, 5-8 Burn Damage Over 1-3 Seconds, +44% Fire Damage, +75 Energy Reserved")
  Spells[6] = new SpellInfo("1 Active Energy Cost, 6.0 Meter Radius, 5-8 Burn Damage Over 1-3 Seconds, +52% Fire Damage, +75 Energy Reserved")
  Spells[7] = new SpellInfo("1 Active Energy Cost, 6.0 Meter Radius, 5-8 Burn Damage Over 1-3 Seconds, +60% Fire Damage, +75 Energy Reserved")
  Spells[8] = new SpellInfo("1 Active Energy Cost, 6.0 Meter Radius, 5-8 Burn Damage Over 1-3 Seconds, +68% Fire Damage, +75 Energy Reserved")
  Spells[9] = new SpellInfo("1 Active Energy Cost, 6.0 Meter Radius, 5-8 Burn Damage Over 1-3 Seconds, +76% Fire Damage, +75 Energy Reserved")
  Spells[10] = new SpellInfo("1 Active Energy Cost, 6.0 Meter Radius, 5-8 Burn Damage Over 1-3 Seconds, +84% Fire Damage, +75 Energy Reserved")
  Spells[11] = new SpellInfo("1 Active Energy Cost, 6.0 Meter Radius, 5-8 Burn Damage Over 1-3 Seconds, +92% Fire Damage, +75 Energy Reserved")
  Spells[12] = new SpellInfo("1 Active Energy Cost, 6.0 Meter Radius, 5-8 Burn Damage Over 1-3 Seconds, +100% Fire Damage, +75 Energy Reserved")
  //Spells[13] = new SpellInfo("1 Active Energy Cost, 4.0 Meter Radius, 9-45 Burn Damage Over 1-3 Seconds, +128% Burn Damage, +75 Energy Reserved")
  //Spells[14] = new SpellInfo("1 Active Energy Cost, 4.0 Meter Radius, 9-45 Burn Damage Over 1-3 Seconds, +137% Burn Damage, +75 Energy Reserved")
  //Spells[15] = new SpellInfo("1 Active Energy Cost, 4.0 Meter Radius, 9-45 Burn Damage Over 1-3 Seconds, +151% Burn Damage, +75 Energy Reserved")
  Skills[0] = new Skill("Earth Enchantment", 1, Spells, -1, "	Imbues your weapons and the weapons of nearby allies with the power of rock and flame.")

  // Flame Surge
    Spells = [];
  Spells[1] = new SpellInfo("37 Energy Cost, 3 Projectiles, 8-15 Fire Damage")
  Spells[2] = new SpellInfo("40 Energy Cost, 3 Projectiles, 11-18 Fire Damage")
  Spells[3] = new SpellInfo("43 Energy Cost, 3 Projectiles, 13-22 Fire Damage")
  Spells[4] = new SpellInfo("47 Energy Cost, 3 Projectiles, 17-27 Fire Damage")
  Spells[5] = new SpellInfo("51 Energy Cost, 3 Projectiles, 20-31 Fire Damage")
  Spells[6] = new SpellInfo("54 Energy Cost, 3 Projectiles, 23-34 Fire Damage")
  Spells[7] = new SpellInfo("57 Energy Cost, 3 Projectiles, 25-38 Fire Damage")
  Spells[8] = new SpellInfo("61 Energy Cost, 3 Projectiles, 29-43 Fire Damage")
  Spells[9] = new SpellInfo("65 Energy Cost, 3 Projectiles, 32-47 Fire Damage")
  Spells[10] = new SpellInfo("68 Energy Cost, 3 Projectiles, 35-50 Fire Damage")
  Spells[11] = new SpellInfo("71 Energy Cost, 3 Projectiles, 38-54 Fire Damage")
  Spells[12] = new SpellInfo("75 Energy Cost, 3 Projectiles, 43-59 Fire Damage")
  Skills[1] = new Skill("Flame Surge", 1, Spells, -1, "Three jets of flame erupt from the caster's hands incinerating anything in close range.")

  // Brimstone
    Spells = [];
  Spells[1] = new SpellInfo("5% (Physical) Damage, 19 Burn Damage over 3 Seconds")
  Spells[2] = new SpellInfo("7% (Physical) Damage, 27 Burn Damage over 3 Seconds")
  Spells[3] = new SpellInfo("9% (Physical) Damage, 36 Burn Damage over 3 Seconds")
  Spells[4] = new SpellInfo("12% (Physical) Damage, 46 Burn Damage over 3 Seconds")
  Spells[5] = new SpellInfo("14% (Physical) Damage, 57 Burn Damage over 3 Seconds")
  Spells[6] = new SpellInfo("16% (Physical) Damage, 69 Burn Damage over 3 Seconds")
  Spells[7] = new SpellInfo("18% (Physical) Damage, 82 Burn Damage over 3 Seconds")
  Spells[8] = new SpellInfo("21% (Physical) Damage, 98 Burn Damage over 3 Seconds")
  //Spells[9] = new SpellInfo("44 Damage, 8% Chance of 105 Fire Damage")
  //Spells[10] = new SpellInfo("48 Damage, 8% Chance of 115 Fire Damage")
  //Spells[11] = new SpellInfo("52 Damage, 8% Chance of 123 Fire Damage")
  //Spells[12] = new SpellInfo("58 Damage, 8% Chance of 135 Fire Damage")
  Skills[2] = new Skill("Brimstone", 4, Spells, 0, "Boosts the physical damage of attacks and provides a chance of causing critical fire damage while under the effects of Earth Enchantment.")

  // Heat Shield
    Spells = [];
  Spells[1] = new SpellInfo("112 Damage Absorption, Protects Against: Fire, 45 Energy Cost, 15% Damage Resistance")
  Spells[2] = new SpellInfo("124 Damage Absorption, Protects Against: Fire, 47 Energy Cost, 15% Damage Resistance")
  Spells[3] = new SpellInfo("136 Damage Absorption, Protects Against: Fire, 49 Energy Cost, 15% Damage Resistance")
  Spells[4] = new SpellInfo("148 Damage Absorption, Protects Against: Fire, 52 Energy Cost, 15% Damage Resistance")
  Spells[5] = new SpellInfo("160 Damage Absorption, Protects Against: Fire, 54 Energy Cost, 15% Damage Resistance")
  Spells[6] = new SpellInfo("172 Damage Absorption, Protects Against: Fire, 56 Energy Cost, 15% Damage Resistance")
  Spells[7] = new SpellInfo("184 Damage Absorption, Protects Against: Fire, 59 Energy Cost, 15% Damage Resistance")
  Spells[8] = new SpellInfo("196 Damage Absorption, Protects Against: Fire, 61 Energy Cost, 15% Damage Resistance")
  Spells[9] = new SpellInfo("208 Damage Absorption, Protects Against: Fire, 63 Energy Cost, 15% Damage Resistance")
  Spells[10] = new SpellInfo("220 Damage Absorption, Protects Against: Fire, 66 Energy Cost, 15% Damage Resistance")
  Spells[11] = new SpellInfo("232 Damage Absorption, Protects Against: Fire, 68 Energy Cost, 15% Damage Resistance")
  Spells[12] = new SpellInfo("245 Damage Absorption, Protects Against: Fire, 70 Energy Cost, 15% Damage Resistance")
  Skills[3] = new Skill("Heat Shield", 4, Spells, -1, "Casts a protective heat shield on the target that absorbs damage caused by fire.")

  // Ring of Flame
    Spells = [];
  Spells[1] = new SpellInfo("1 Active Energy Cost/Second, 1.5 Meter Radius, 3 Fire Damage")
  Spells[2] = new SpellInfo("1 Active Energy Cost/Second, 1.8 Meter Radius, 5 Fire Damage")
  Spells[3] = new SpellInfo("1 Active Energy Cost/Second, 2.0 Meter Radius, 7 Fire Damage")
  Spells[4] = new SpellInfo("2 Active Energy Cost/Second, 2.2 Meter Radius, 9 Fire Damage")
  Spells[5] = new SpellInfo("2 Active Energy Cost/Second, 2.4 Meter Radius, 12 Fire Damage")
  Spells[6] = new SpellInfo("2 Active Energy Cost/Second, 2.6 Meter Radius, 15 Fire Damage")
  Spells[7] = new SpellInfo("2 Active Energy Cost/Second, 2.7 Meter Radius, 18 Fire Damage")
  Spells[8] = new SpellInfo("2 Active Energy Cost/Second, 2.8 Meter Radius, 21 Fire Damage")
  Spells[9] = new SpellInfo("3 Active Energy Cost/Second, 2.9 Meter Radius, 25 Fire Damage")
  Spells[10] = new SpellInfo("3 Active Energy Cost/Second, 3.0 Meter Radius, 29 Fire Damage")
  Spells[11] = new SpellInfo("3 Active Energy Cost/Second, 3.1 Meter Radius, 33 Fire Damage")
  Spells[12] = new SpellInfo("3 Active Energy Cost/Second, 3.3 Meter Radius, 38 Fire Damage")
  Skills[4] = new Skill("Ring of Flame", 4, Spells, -1, "Temporarily encircles you in a searing ring of flames that will burn nearby enemies.")

  // Volcanic Orb
    Spells = [];
  Spells[1] = new SpellInfo("64 Energy Cost, 2.5 Meter Radius, 18 Damage, 25-54 Fire Damage")
  Spells[2] = new SpellInfo("68 Energy Cost, 2.5 Meter Radius, 21 Damage, 31-60 Fire Damage")
  Spells[3] = new SpellInfo("72 Energy Cost, 2.5 Meter Radius, 25 Damage, 37-68 Fire Damage")
  Spells[4] = new SpellInfo("76 Energy Cost, 2.5 Meter Radius, 28 Damage, 43-74 Fire Damage")
  Spells[5] = new SpellInfo("80 Energy Cost, 2.5 Meter Radius, 31 Damage, 49-80 Fire Damage")
  Spells[6] = new SpellInfo("84 Energy Cost, 2.5 Meter Radius, 35 Damage, 55-88 Fire Damage")
  Spells[7] = new SpellInfo("88 Energy Cost, 2.5 Meter Radius, 38 Damage, 61-94 Fire Damage")
  Spells[8] = new SpellInfo("92 Energy Cost, 2.5 Meter Radius, 41 Damage, 67-100 Fire Damage")
  Spells[9] = new SpellInfo("96 Energy Cost, 2.5 Meter Radius, 45 Damage, 73-108 Fire Damage")
  Spells[10] = new SpellInfo("100 Energy Cost, 2.5 Meter Radius, 48 Damage, 79-114 Fire Damage")
  Spells[11] = new SpellInfo("104 Energy Cost, 2.5 Meter Radius, 51 Damage, 85-120 Fire Damage")
  Spells[12] = new SpellInfo("108 Energy Cost, 2.5 Meter Radius, 55 Damage, 91-128 Fire Damage")
  Skills[5] = new Skill("Volcanic Orb", 4, Spells, -1, "Lobs a burning orb of fiery brimstone that explodes when it hits the ground inflicting fire and physical damage to enemies in a small radius.")

  // Stone Form
    Spells = [];
  Spells[1] = new SpellInfo("100% Damage Absorption, 64 Energy Cost, 6 Second Duration, +24 Health Regeneration/Second")
  Spells[2] = new SpellInfo("100% Damage Absorption, 68 Energy Cost, 6 Second Duration, +28 Health Regeneration/Second")
  Spells[3] = new SpellInfo("100% Damage Absorption, 72 Energy Cost, 6 Second Duration, +32 Health Regeneration/Second")
  Spells[4] = new SpellInfo("100% Damage Absorption, 76 Energy Cost, 6 Second Duration, +36 Health Regeneration/Second")
  Spells[5] = new SpellInfo("100% Damage Absorption, 80 Energy Cost, 6 Second Duration, +40 Health Regeneration/Second")
  Spells[6] = new SpellInfo("100% Damage Absorption, 84 Energy Cost, 6 Second Duration, +44 Health Regeneration/Second")
  Spells[7] = new SpellInfo("100% Damage Absorption, 88 Energy Cost, 6 Second Duration, +47 Health Regeneration/Second")
  Spells[8] = new SpellInfo("100% Damage Absorption, 92 Energy Cost, 6 Second Duration, +52 Health Regeneration/Second")
  Spells[9] = new SpellInfo("100% Damage Absorption, 96 Energy Cost, 6 Second Duration, +55 Health Regeneration/Second")
  Spells[10] = new SpellInfo("100% Damage Absorption, 100 Energy Cost, 6 Second Duration, +58 Health Regeneration/Second")
  Spells[11] = new SpellInfo("100% Damage Absorption, 104 Energy Cost, 6 Second Duration, +61 Health Regeneration/Second")
  Spells[12] = new SpellInfo("100% Damage Absorption, 108 Energy Cost, 6 Second Duration, +66 Health Regeneration/Second")
  Skills[6] = new Skill("Stone Form", 10, Spells, -1, "An impervious layer of rock envelops you for a short duration boosting regeneration but prohibiting movement.")

  // Summon Core Dweller
    Spells = [];
  Spells[1] = new SpellInfo("250 Energy Cost<br>Core Dweller Summoned Elemental Attributes: 651 Health, 131 Energy<br>Core Dweller Summoned Elemental Ability: 12-21 (Physical)Damage")
  Spells[2] = new SpellInfo("258 Energy Cost<br>Core Dweller Summoned Elemental Attributes: 714 Health, 143 Energy<br>Core Dweller Summoned Elemental Ability: 14-25 (Physical)Damage")
  Spells[3] = new SpellInfo("266 Energy Cost<br>Core Dweller Summoned Elemental Attributes: 781 Health, 154 Energy<br>Core Dweller Summoned Elemental Ability: 17-29 (Physical)Damage")
  Spells[4] = new SpellInfo("274 Energy Cost<br>Core Dweller Summoned Elemental Attributes: 843 Health, 166 Energy<br>Core Dweller Summoned Elemental Ability: 20-34 (Physical)Damage")
  Spells[5] = new SpellInfo("282 Energy Cost<br>Core Dweller Summoned Elemental Attributes: 910 Health, 177 Energy<br>Core Dweller Summoned Elemental Ability: 22-38 (Physical)Damage")
  Spells[6] = new SpellInfo("290 Energy Cost<br>Core Dweller Summoned Elemental Attributes: 972 Health, 189 Energy<br>Core Dweller Summoned Elemental Ability: 25-42 (Physical)Damage")
  Spells[7] = new SpellInfo("298 Energy Cost<br>Core Dweller Summoned Elemental Attributes: 1039 Health, 200 Energy<br>Core Dweller Summoned Elemental Ability: 27-47 (Physical)Damage")
  Spells[8] = new SpellInfo("306 Energy Cost<br>Core Dweller Summoned Elemental Attributes: 1101 Health, 212 Energy<br>Core Dweller Summoned Elemental Ability: 30-51 (Physical)Damage")
  Spells[9] = new SpellInfo("314 Energy Cost<br>Core Dweller Summoned Elemental Attributes: 1168 Health, 223 Energy<br>Core Dweller Summoned Elemental Ability: 33-56 (Physical)Damage")
  Spells[10] = new SpellInfo("332 Energy Cost<br>Core Dweller Summoned Elemental Attributes: 1230 Health, 235 Energy<br>Core Dweller Summoned Elemental Ability: 35-59 (Physical)Damage")
  Spells[11] = new SpellInfo("330 Energy Cost<br>Core Dweller Summoned Elemental Attributes: 1297 Health, 246 Energy<br>Core Dweller Summoned Elemental Ability: 38-64 (Physical)Damage")
  Spells[12] = new SpellInfo("338 Energy Cost<br>Core Dweller Summoned Elemental Attributes: 1359 Health, 258 Energy<br>Core Dweller Summoned Elemental Ability: 40-69 (Physical)Damage")
  Spells[13] = new SpellInfo("346 Energy Cost<br>Core Dweller Summoned Elemental Attributes: 1426 Health, 269 Energy<br>Core Dweller Summoned Elemental Ability: 43-74 (Physical)Damage")
  Spells[14] = new SpellInfo("354 Energy Cost<br>Core Dweller Summoned Elemental Attributes: 1488 Health, 281 Energy<br>Core Dweller Summoned Elemental Ability: 46-79 (Physical)Damage")
  Spells[15] = new SpellInfo("362 Energy Cost<br>Core Dweller Summoned Elemental Attributes: 1555 Health, 292 Energy<br>Core Dweller Summoned Elemental Ability: 48-84 (Physical)Damage")
  Spells[16] = new SpellInfo("370 Energy Cost<br>Core Dweller Summoned Elemental Attributes: 1617 Health, 304 Energy<br>Core Dweller Summoned Elemental Ability: 51-90 (Physical)Damage")
  Skills[7] = new Skill("Summon Core Dweller", 10, Spells, -1, "Draws forth a powerful elemental guardian from the Earth's fiery depths.")

  // Barrage
    Spells = [];
  Spells[1] = new SpellInfo("45% Chance to Pass Through Enemies, 14 Burn Damage Over 3 Seconds, -30% Recharge")
  Spells[2] = new SpellInfo("50% Chance to Pass Through Enemies, 20 Burn Damage Over 3 Seconds, -40% Recharge")
  Spells[3] = new SpellInfo("55% Chance to Pass Through Enemies, 27 Burn Damage Over 3 Seconds, -50% Recharge")
  Spells[4] = new SpellInfo("60% Chance to Pass Through Enemies, 34 Burn Damage Over 3 Seconds, -60% Recharge")
  Spells[5] = new SpellInfo("65% Chance to Pass Through Enemies, 41 Burn Damage Over 3 Seconds, -70% Recharge")
  Spells[6] = new SpellInfo("70% Chance to Pass Through Enemies, 49 Burn Damage Over 3 Seconds, -80% Recharge")
  Spells[7] = new SpellInfo("75% Chance to Pass Through Enemies, 57 Burn Damage Over 3 Seconds, -90% Recharge")
  Spells[8] = new SpellInfo("80% Chance to Pass Through Enemies, 66 Burn Damage Over 3 Seconds, -100% Recharge")
  Skills[8] = new Skill("Barrage", 10, Spells, 1, "Reduces the recharge time and energy cost of Flame Surge allowing it to be cast more frequently and efficiently.")

  // Stone Skin
    Spells = [];
  Spells[1] = new SpellInfo("3 Armor, 2% Fire Resistance")
  Spells[2] = new SpellInfo("6 Armor, 5% Fire Resistance")
  Spells[3] = new SpellInfo("10 Armor, 7% Fire Resistance")
  Spells[4] = new SpellInfo("14 Armor, 10% Fire Resistance")
  Spells[5] = new SpellInfo("18 Armor, 12% Fire Resistance")
  Spells[6] = new SpellInfo("23 Armor, 15% Fire Resistance")
  Spells[7] = new SpellInfo("28 Armor, 17% Fire Resistance")
  Spells[8] = new SpellInfo("33 Armor, 20% Fire Resistance")
  Spells[9] = new SpellInfo("39 Armor, 22% Fire Resistance")
  Spells[10] = new SpellInfo("45 Armor, 25% Fire Resistance")
  Skills[9] = new Skill("Stone Skin", 16, Spells, 0, "Tempers armor, increasing protection and fire resistance while under the effects of Earth Enchantment.")

  // Inner Fire
    Spells = [];
  Spells[1] = new SpellInfo("3 Fire Damage, +15% Dexterity, +24% Health Regeneration, +5% Total Speed")
  Spells[2] = new SpellInfo("5 Fire Damage, +20% Dexterity, +32% Health Regeneration, +6% Total Speed")
  Spells[3] = new SpellInfo("7 Fire Damage, +25% Dexterity, +40% Health Regeneration, +8% Total Speed")
  Spells[4] = new SpellInfo("9 Fire Damage, +30% Dexterity, +48% Health Regeneration, +9% Total Speed")
  Spells[5] = new SpellInfo("11 Fire Damage, +35% Dexterity, +56% Health Regeneration, +12% Total Speed")
  Spells[6] = new SpellInfo("13 Fire Damage, +40% Dexterity, +64% Health Regeneration, +14% Total Speed")
  Spells[7] = new SpellInfo("15 Fire Damage, +45% Dexterity, +72% Health Regeneration, +15% Total Speed")
  Spells[8] = new SpellInfo("18 Fire Damage, +50% Dexterity, +80% Health Regeneration, +17% Total Speed")
  Skills[10] = new Skill("Inner Fire", 16, Spells, 7, "Increases the Core Dweller's speed and gives it fire retaliation damage.")

  // Soften Metal
    Spells = [];
  Spells[1] = new SpellInfo("1 Active Energy Cost/Second, 3 Damage, 3 Reduced Physical Damage For 3 Seconds, 18 Reduced Armor For 3 Seconds")
  Spells[2] = new SpellInfo("1 Active Energy Cost/Second, 6 Damage, 5 Reduced Physical Damage For 3 Seconds, 24 Reduced Armor For 3 Seconds")
  Spells[3] = new SpellInfo("1 Active Energy Cost/Second, 8 Damage, 6 Reduced Physical Damage For 3 Seconds, 30 Reduced Armor For 3 Seconds")
  Spells[4] = new SpellInfo("1 Active Energy Cost/Second, 10 Damage, 8 Reduced Physical Damage For 3 Seconds, 38 Reduced Armor For 3 Seconds")
  Spells[5] = new SpellInfo("1 Active Energy Cost/Second, 13 Damage, 9 Reduced Physical Damage For 3 Seconds, 44 Reduced Armor For 3 Seconds")
  Spells[6] = new SpellInfo("1 Active Energy Cost/Second, 16 Damage, 11 Reduced Physical Damage For 3 Seconds, 50 Reduced Armor For 3 Seconds")
  Spells[7] = new SpellInfo("1 Active Energy Cost/Second, 19 Damage, 12 Reduced Physical Damage For 3 Seconds, 58 Reduced Armor For 3 Seconds")
  Spells[8] = new SpellInfo("1 Active Energy Cost/Second, 23 Damage, 15 Reduced Physical Damage For 3 Seconds, 65 Reduced Armor For 3 Seconds")
    Skills[11] = new Skill("Soften Metal", 16, Spells, 4, "Intense heat from the Ring of Flame softens the metal of enemy armor and weapons decreasing their effectiveness.")

  // Conflagration
    Spells = [];
  Spells[1] = new SpellInfo("6 Energy Cost, 3.0 Meter Radius, 11 Burn Damage Over 3 Seconds")
  Spells[2] = new SpellInfo("8 Energy Cost, 3.0 Meter Radius, 16 Burn Damage Over 3 Seconds")
  Spells[3] = new SpellInfo("10 Energy Cost, 3.0 Meter Radius, 21 Burn Damage Over 3 Seconds")
  Spells[4] = new SpellInfo("12 Energy Cost, 3.0 Meter Radius, 27 Burn Damage Over 3 Seconds")
  Spells[5] = new SpellInfo("14 Energy Cost, 3.0 Meter Radius, 32 Burn Damage Over 3 Seconds")
  Spells[6] = new SpellInfo("16 Energy Cost, 3.0 Meter Radius, 37 Burn Damage Over 3 Seconds")
  Spells[7] = new SpellInfo("18 Energy Cost, 3.0 Meter Radius, 42 Burn Damage Over 3 Seconds")
  Spells[8] = new SpellInfo("20 Energy Cost, 3.0 Meter Radius, 48 Burn Damage Over 3 Seconds")
  Skills[12] = new Skill("Conflagration", 16, Spells, 5, "Increases the explosion radius of Volcanic Orb and causes enemies hit by it to catch fire and suffer burn damage.")

  // Molten Rock
    Spells = [];
  Spells[1] = new SpellInfo("16 Energy Cost, 2 Second Duration, 6 Fire Retaliation")
  Spells[2] = new SpellInfo("18 Energy Cost, 2 Second Duration, 7 Fire Retaliation")
  Spells[3] = new SpellInfo("20 Energy Cost, 2 Second Duration, 9 Fire Retaliation")
  Spells[4] = new SpellInfo("22 Energy Cost, 2 Second Duration, 10 Fire Retaliation")
  Spells[5] = new SpellInfo("24 Energy Cost, 2 Second Duration, 11 Fire Retaliation")
  Spells[6] = new SpellInfo("26 Energy Cost, 2 Second Duration, 13 Fire Retaliation")
  Spells[7] = new SpellInfo("28 Energy Cost, 2 Second Duration, 14 Fire Retaliation")
  Spells[8] = new SpellInfo("30 Energy Cost, 2 Second Duration, 15 Fire Retaliation")
  Skills[13] = new Skill("Molten Rock", 24, Spells, 6, "Adds retaliation fire damage to Stone Form.")

  // Wildfire
    Spells = [];
  Spells[1] = new SpellInfo("49 Energy Cost, 5 Second Duration, 4.0 Meter Radius, 16-25 Fire Damage")
  Spells[2] = new SpellInfo("50 Energy Cost, 5 Second Duration, 4.0 Meter Radius, 20-30 Fire Damage")
  Spells[3] = new SpellInfo("50 Energy Cost, 5 Second Duration, 4.0 Meter Radius, 24-35 Fire Damage")
  Spells[4] = new SpellInfo("51 Energy Cost, 5 Second Duration, 4.0 Meter Radius, 29-41 Fire Damage")
  Spells[5] = new SpellInfo("52 Energy Cost, 5 Second Duration, 4.0 Meter Radius, 33-46 Fire Damage")
  Spells[6] = new SpellInfo("53 Energy Cost, 5 Second Duration, 4.0 Meter Radius, 37-51 Fire Damage")
  Spells[7] = new SpellInfo("54 Energy Cost, 5 Second Duration, 4.0 Meter Radius, 41-56 Fire Damage")
  Spells[8] = new SpellInfo("54 Energy Cost, 5 Second Duration, 4.0 Meter Radius, 46-62 Fire Damage")
  Spells[9] = new SpellInfo("55 Energy Cost, 5 Second Duration, 4.0 Meter Radius, 50-67 Fire Damage")
  Spells[10] = new SpellInfo("56 Energy Cost, 5 Second Duration, 4.0 Meter Radius, 55-73 Fire Damage")
  Spells[11] = new SpellInfo("57 Energy Cost, 5 Second Duration, 4.0 Meter Radius, 59-78 Fire Damage")
  Spells[12] = new SpellInfo("58 Energy Cost, 5 Second Duration, 4.0 Meter Radius, 65-85 Fire Damage")
  Skills[14] = new Skill("Wildfire", 24, Spells, 10, "Allows the Core Dweller to ignite an area of ground causing severe burn damage to enemies within.")

  // Flame Arch
    Spells = [];
  Spells[1] = new SpellInfo("10 Energy Cost, 1 Projectile, +4% Fire Damage")
  Spells[2] = new SpellInfo("11 Energy Cost, 1 Projectile, +8% Fire Damage")
  Spells[3] = new SpellInfo("12 Energy Cost, 1 Projectile, +12% Fire Damage")
  Spells[4] = new SpellInfo("14 Energy Cost, 1 Projectile, +16% Fire Damage")
  Spells[5] = new SpellInfo("20 Energy Cost, 2 Projectiles, +20% Fire Damage")
  Spells[6] = new SpellInfo("21 Energy Cost, 2 Projectiles, +24% Fire Damage")
  Spells[7] = new SpellInfo("23 Energy Cost, 2 Projectiles, +29% Fire Damage")
  Spells[8] = new SpellInfo("24 Energy Cost, 2 Projectiles, +33% Fire Damage")
  Spells[9] = new SpellInfo("30 Energy Cost, 3 Projectiles, +38% Fire Damage")
  Spells[10] = new SpellInfo("32 Energy Cost, 3 Projectiles, +42% Fire Damage")
  Spells[12] = new SpellInfo("33 Energy Cost, 3 Projectiles, +48% Fire Damage")
  Spells[12] = new SpellInfo("34 Energy Cost, 3 Projectiles, +55% Fire Damage")
  Skills[15] = new Skill("Flame Arch", 24, Spells, 1, "Increases the damage and number of flame jets created by Flame Surge.")

  // Fragmentation
    Spells = [];
  Spells[1] = new SpellInfo("10 Energy Cost, 3.0 Meter Radius, 3-5 Fragments, 35 Damage, 12 Fire Damage, 1.5 Seconds of Stun")
  Spells[2] = new SpellInfo("11 Energy Cost, 3.0 Meter Radius, 4-6 Fragments, 43 Damage, 16 Fire Damage, 1.5 Seconds of Stun")
  Spells[3] = new SpellInfo("13 Energy Cost, 3.0 Meter Radius, 4-7 Fragments, 51 Damage, 20 Fire Damage, 1.5 Seconds of Stun")
  Spells[4] = new SpellInfo("15 Energy Cost, 3.0 Meter Radius, 4-7 Fragments, 60 Damage, 25 Fire Damage, 1.5 Seconds of Stun")
  Spells[5] = new SpellInfo("16 Energy Cost, 3.0 Meter Radius, 5-8 Fragments, 68 Damage, 29 Fire Damage, 1.5 Seconds of Stun")
  Spells[6] = new SpellInfo("17 Energy Cost, 3.0 Meter Radius, 5-9 Fragments, 76 Damage, 33 Fire Damage, 1.5 Seconds of Stun")
  Spells[7] = new SpellInfo("19 Energy Cost, 3.0 Meter Radius, 5-9 Fragments, 84 Damage, 37 Fire Damage, 1.5 Seconds of Stun")
  Spells[8] = new SpellInfo("20 Energy Cost, 3.0 Meter Radius, 6-10 Fragments, 95 Damage, 42 Fire Damage, 1.5 Seconds of Stun")
  Spells[9] = new SpellInfo("22 Energy Cost, 3.0 Meter Radius, 6-11 Fragments, 101 Damage, 46 Fire Damage, 1.5 Seconds of Stun")
  Spells[10] = new SpellInfo("23 Energy Cost, 3.0 Meter Radius, 6-11 Fragments, 109 Damage, 50 Fire Damage, 1.5 Seconds of Stun")
  Spells[11] = new SpellInfo("25 Energy Cost, 3.0 Meter Radius, 7-12 Fragments, 117 Damage, 54 Fire Damage, 1.5 Seconds of Stun")
  Spells[12] = new SpellInfo("26 Energy Cost, 3.0 Meter Radius, 7-13 Fragments, 126 Damage, 59 Fire Damage, 1.5 Seconds of Stun")
  Skills[16] = new Skill("Fragmentation", 24, Spells, 5, "Causes the Volcanic Orb to violently explode on impact sending out fragments of rock that inflict physical damage to enemies in their path.")

  // Volatility
    Spells = [];
  Spells[1] = new SpellInfo("33% Chance of +75% Fire Damage")
  Spells[2] = new SpellInfo("33% Chance of +83% Fire Damage")
  Spells[3] = new SpellInfo("33% Chance of +92% Fire Damage")
  Spells[4] = new SpellInfo("33% Chance of +104% Fire Damage")
  Spells[5] = new SpellInfo("33% Chance of +112% Fire Damage")
  Spells[6] = new SpellInfo("33% Chance of +120% Fire Damage")
  Spells[7] = new SpellInfo("33% Chance of +129% Fire Damage")
  Spells[8] = new SpellInfo("33% Chance of +141% Fire Damage")
  Spells[9] = new SpellInfo("33% Chance of +149% Fire Damage")
  Spells[10] = new SpellInfo("33% Chance of +157% Fire Damage")
  Spells[11] = new SpellInfo("33% Chance of +166% Fire Damage")
  Spells[12] = new SpellInfo("33% Chance of +178% Fire Damage")
    Skills[17] = new Skill("Volatility", 32, Spells, -1, "Enhanced by the volatile energy of the Earth, your fire attacks have a chance of inflicting greatly increased damage.")

  // Metamorphosis
    Spells = [];
  Spells[1] = new SpellInfo("+10% Health, +10% Armor Protection, +33% Armor Absorption, 4% Elemental Resistance")
  Spells[2] = new SpellInfo("+15% Health, +15% Armor Protection, +33% Armor Absorption, 6% Elemental Resistance")
  Spells[3] = new SpellInfo("+20% Health, +20% Armor Protection, +33% Armor Absorption, 8% Elemental Resistance")
  Spells[4] = new SpellInfo("+25% Health, +25% Armor Protection, +33% Armor Absorption, 10% Elemental Resistance")
  Spells[5] = new SpellInfo("+30% Health, +30% Armor Protection, +33% Armor Absorption, 12% Elemental Resistance")
  Spells[6] = new SpellInfo("+35% Health, +35% Armor Protection, +33% Armor Absorption, 14% Elemental Resistance")
  Spells[7] = new SpellInfo("+40% Health, +40% Armor Protection, +33% Armor Absorption, 16% Elemental Resistance")
  Spells[8] = new SpellInfo("+45% Health, +45% Armor Protection, +33% Armor Absorption, 18% Elemental Resistance")
  Skills[18] = new Skill("Metamorphosis", 32, Spells, 14, "Under tremendous heat and pressure, the composition of the Core Dweller hardens making it more resistant to damage.")

  // Eruption
    Spells = [];
  Spells[1] = new SpellInfo("95 Energy Cost, 6 Second Duration, 3.0 Meter Radius, 2-3 Fragments, 31 Damage, 28-33 Fire Damage")
  Spells[2] = new SpellInfo("98 Energy Cost, 6 Second Duration, 3.0 Meter Radius, 3-4 Fragments, 38 Damage, 35-41 Fire Damage")
  Spells[3] = new SpellInfo("100 Energy Cost, 6 Second Duration, 3.0 Meter Radius, 3-4 Fragments, 44 Damage, 41-48 Fire Damage")
  Spells[4] = new SpellInfo("103 Energy Cost, 6 Second Duration, 3.0 Meter Radius, 3-4 Fragments, 49 Damage, 46-54 Fire Damage")
  Spells[5] = new SpellInfo("105 Energy Cost, 6 Second Duration, 3.0 Meter Radius, 3-4 Fragments, 56 Damage, 53-62 Fire Damage")
  Spells[6] = new SpellInfo("108 Energy Cost, 6 Second Duration, 3.0 Meter Radius, 4-5 Fragments, 62 Damage, 59-69 Fire Damage")
  Spells[7] = new SpellInfo("110 Energy Cost, 6 Second Duration, 3.0 Meter Radius, 4-5 Fragments, 67 Damage, 64-75 Fire Damage")
  Spells[8] = new SpellInfo("113 Energy Cost, 6 Second Duration, 3.0 Meter Radius, 4-5 Fragments, 74 Damage, 71-83 Fire Damage")
  Spells[9] = new SpellInfo("115 Energy Cost, 6 Second Duration, 3.0 Meter Radius, 4-5 Fragments, 80 Damage, 77-90 Fire Damage")
  Spells[10] = new SpellInfo("118 Energy Cost, 6 Second Duration, 3.0 Meter Radius, 5-6 Fragments, 85 Damage, 82-96 Fire Damage")
  Spells[11] = new SpellInfo("120 Energy Cost, 6 Second Duration, 3.0 Meter Radius, 5-6 Fragments, 92 Damage, 89-104 Fire Damage")
  Spells[12] = new SpellInfo("123 Energy Cost, 6 Second Duration, 3.0 Meter Radius, 5-6 Fragments, 98 Damage, 95-112 Fire Damage")
  Skills[19] = new Skill("Eruption", 32, Spells, -1, "Volcanic fissures form in the ground, emitting deadly geysers of molten flame and fiery chunks of brimstone")

  // set the mastery array
  Mastery[1] = new setmastery(Skills, Attributes)

  // testing
  //alert(Mastery[0].Skills[19].spells[10].spellinfo)
  //alert(Skills[1][0].desc)

}