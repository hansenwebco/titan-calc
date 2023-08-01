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
  this.masteryid = 6
  this.masteryname = "Rogue"
  this.Attributes = Attributes
}

window.loadRogue = loadRogue;
function loadRogue() {

  // set attributes
  if (!AttributesBase[0]) { // base att's are only set one time
    AttributesBase[0] = new Attribute(300, 300, 50, 50, 50) // base stats for characters
  }
  let Attributes = [];
  Attributes[1] = new Attribute(35, 0, 2, 2, 0)
  Attributes[2] = new Attribute(70, 0, 3, 5, 0)
  Attributes[3] = new Attribute(105, 0, 5, 7, 0)
  Attributes[4] = new Attribute(140, 0, 7, 10, 0)
  Attributes[5] = new Attribute(175, 0, 9, 12, 0)
  Attributes[6] = new Attribute(210, 0, 10, 15, 0)
  Attributes[7] = new Attribute(245, 0, 12, 17, 0)
  Attributes[8] = new Attribute(280, 0, 14, 20, 0)
  Attributes[9] = new Attribute(315, 0, 16, 22, 0)
  Attributes[10] = new Attribute(350, 0, 17, 25, 0)
  Attributes[11] = new Attribute(385, 0, 19, 27, 0)
  Attributes[12] = new Attribute(420, 0, 21, 30, 0)
  Attributes[13] = new Attribute(455, 0, 23, 32, 0)
  Attributes[14] = new Attribute(490, 0, 24, 35, 0)
  Attributes[15] = new Attribute(525, 0, 26, 37, 0)
  Attributes[16] = new Attribute(560, 0, 28, 40, 0)
  Attributes[17] = new Attribute(595, 0, 30, 42, 0)
  Attributes[18] = new Attribute(630, 0, 31, 45, 0)
  Attributes[19] = new Attribute(665, 0, 33, 47, 0)
  Attributes[20] = new Attribute(700, 0, 35, 50, 0)
  Attributes[21] = new Attribute(735, 0, 37, 52, 0)
  Attributes[22] = new Attribute(770, 0, 38, 55, 0)
  Attributes[23] = new Attribute(805, 0, 40, 57, 0)
  Attributes[24] = new Attribute(840, 0, 42, 60, 0)
  Attributes[25] = new Attribute(875, 0, 44, 62, 0)
  Attributes[26] = new Attribute(910, 0, 45, 65, 0)
  Attributes[27] = new Attribute(945, 0, 47, 67, 0)
  Attributes[28] = new Attribute(980, 0, 49, 70, 0)
  Attributes[29] = new Attribute(1015, 0, 51, 72, 0)
  Attributes[30] = new Attribute(1050, 0, 52, 75, 0)
  Attributes[31] = new Attribute(1085, 0, 54, 77, 0)
  Attributes[32] = new Attribute(1120, 0, 56, 80, 0)

  Skills = [];

  // Calculated Strike
  let Spells = [];
  Spells[1] = new SpellInfo("3 Charge Levels, +45% Damage, 35 Piercing Damage")
  Spells[2] = new SpellInfo("3 Charge Levels, +60% Damage, 45 Piercing Damage")
  Spells[3] = new SpellInfo("3 Charge Levels, +75% Damage, 53 Piercing Damage")
  Spells[4] = new SpellInfo("3 Charge Levels, +93% Damage, 64 Piercing Damage")
  Spells[5] = new SpellInfo("3 Charge Levels, +108% Damage, 72 Piercing Damage")
  Spells[6] = new SpellInfo("3 Charge Levels, +123% Damage, 83 Piercing Damage")
  Spells[7] = new SpellInfo("3 Charge Levels, +138% Damage, 91 Piercing Damage")
  Spells[8] = new SpellInfo("3 Charge Levels, +156% Damage, 103 Piercing Damage")
  Skills[0] = new Skill("Calculated Strike", 1, Spells, -1, "Used in place of your normal attack, every fourth hit with calculated strike will deliver increased damage.")

  // Blade Honing
  Spells = [];
  Spells[1] = new SpellInfo("16.0 Meter Radius, +16% Piercing, 3 Piercing Damage, +50 Energy Reserved")
  Spells[2] = new SpellInfo("16.0 Meter Radius, +24% Piercing, 5 Piercing Damage, +50 Energy Reserved")
  Spells[3] = new SpellInfo("16.0 Meter Radius, +32% Piercing, 7 Piercing Damage, +50 Energy Reserved")
  Spells[4] = new SpellInfo("16.0 Meter Radius, +40% Piercing, 9 Piercing Damage, +50 Energy Reserved")
  Spells[5] = new SpellInfo("16.0 Meter Radius, +48% Piercing, 12 Piercing Damage, +50 Energy Reserved")
  Spells[6] = new SpellInfo("16.0 Meter Radius, +56% Piercing, 15 Piercing Damage, +50 Energy Reserved")
  Skills[1] = new Skill("Blade Honing", 1, Spells, -1, "While active, this skill ensures that the blades on the swords or spears of yourself and allies will remain razor sharp and inflict increased piercing damage.")

  // Envenom Weapon
  Spells = [];
  Spells[1] = new SpellInfo("1 Active Energy Cost/Second, 22 Poison Damage Over 6 Seconds, +50 Energy Reserved")
  Spells[2] = new SpellInfo("1 Active Energy Cost/Second, 29 Poison Damage Over 6 Seconds, +50 Energy Reserved")
  Spells[3] = new SpellInfo("1 Active Energy Cost/Second, 35 Poison Damage Over 6 Seconds, +50 Energy Reserved")
  Spells[4] = new SpellInfo("1 Active Energy Cost/Second, 43 Poison Damage Over 6 Seconds, +50 Energy Reserved")
  Spells[5] = new SpellInfo("1 Active Energy Cost/Second, 52 Poison Damage Over 6 Seconds, +50 Energy Reserved")
  Spells[6] = new SpellInfo("1 Active Energy Cost/Second, 62 Poison Damage Over 6 Seconds, +50 Energy Reserved")
  Spells[7] = new SpellInfo("1 Active Energy Cost/Second, 74 Poison Damage Over 6 Seconds, +50 Energy Reserved")
  Spells[8] = new SpellInfo("1 Active Energy Cost/Second, 86 Poison Damage Over 6 Seconds, +50 Energy Reserved")
  Spells[9] = new SpellInfo("1 Active Energy Cost/Second, 100 Poison Damage Over 6 Seconds, +50 Energy Reserved")
  Spells[10] = new SpellInfo("1 Active Energy Cost/Second, 116 Poison Damage Over 6 Seconds, +50 Energy Reserved")
  Spells[11] = new SpellInfo("1 Active Energy Cost/Second, 134 Poison Damage Over 6 Seconds, +50 Energy Reserved")
  Spells[12] = new SpellInfo("1 Active Energy Cost/Second, 152 Poison Damage Over 6 Seconds, +50 Energy Reserved")
  Skills[2] = new Skill("Envenom Weapon", 1, Spells, -1, "Coats your weapon with deadly poison while activated.")

  // Throwing Knife
  Spells = [];
  Spells[1] = new SpellInfo("18 Energy Cost, 1 Projectile, 100% Chance to Pass Through Enemies, 48 Bleeding Damage Over 3 Seconds, 15 Piercing Damage")
  Spells[2] = new SpellInfo("19 Energy Cost, 1 Projectile, 100% Chance to Pass Through Enemies, 63 Bleeding Damage Over 3 Seconds, 18 Piercing Damage")
  Spells[3] = new SpellInfo("20 Energy Cost, 1 Projectile, 100% Chance to Pass Through Enemies, 78 Bleeding Damage Over 3 Seconds, 21 Piercing Damage")
  Spells[4] = new SpellInfo("21 Energy Cost, 1 Projectile, 100% Chance to Pass Through Enemies, 90 Bleeding Damage Over 3 Seconds, 24 Piercing Damage")
  Spells[5] = new SpellInfo("22 Energy Cost, 1 Projectile, 100% Chance to Pass Through Enemies, 105 Bleeding Damage Over 3 Seconds, 27 Piercing Damage")
  Spells[6] = new SpellInfo("23 Energy Cost, 1 Projectile, 100% Chance to Pass Through Enemies, 120 Bleeding Damage Over 3 Seconds, 31 Piercing Damage")
  Spells[7] = new SpellInfo("24 Energy Cost, 1 Projectile, 100% Chance to Pass Through Enemies, 132 Bleeding Damage Over 3 Seconds, 35 Piercing Damage")
  Spells[8] = new SpellInfo("25 Energy Cost, 1 Projectile, 100% Chance to Pass Through Enemies, 147 Bleeding Damage Over 3 Seconds, 39 Piercing Damage")
  Spells[9] = new SpellInfo("26 Energy Cost, 1 Projectile, 100% Chance to Pass Through Enemies, 162 Bleeding Damage Over 3 Seconds, 43 Piercing Damage")
  Spells[10] = new SpellInfo("27 Energy Cost, 1 Projectile, 100% Chance to Pass Through Enemies, 174 Bleeding Damage Over 3 Seconds, 48 Piercing Damage")
  Spells[11] = new SpellInfo("28 Energy Cost, 1 Projectile, 100% Chance to Pass Through Enemies, 189 Bleeding Damage Over 3 Seconds, 53 Piercing Damage")
  Spells[12] = new SpellInfo("29 Energy Cost, 1 Projectile, 100% Chance to Pass Through Enemies, 204 Bleeding Damage Over 3 Seconds, 58 Piercing Damage")
  Skills[3] = new Skill("Throwing Knife", 4, Spells, -1, "Throw a piercing blade at your opponent capable of causing prolonged bleeding.")

  // Disarm Traps
  Spells = [];
  Spells[1] = new SpellInfo("+50% Damage to Devices, +10% Less Damage from Devices")
  Spells[2] = new SpellInfo("+80% Damage to Devices, +20% Less Damage from Devices")
  Spells[3] = new SpellInfo("+110% Damage to Devices, +30% Less Damage from Devices")
  Spells[4] = new SpellInfo("+140% Damage to Devices, +40% Less Damage from Devices")
  Spells[5] = new SpellInfo("+170% Damage to Devices, +50% Less Damage from Devices")
  Spells[6] = new SpellInfo("+200% Damage to Devices, +60% Less Damage from Devices")
  Skills[4] = new Skill("Disarm Traps", 4, Spells, -1, "Expertise with traps and magical devices allows the Rogue to easily disable them and avoid their damage.")

  // Nightshade
  Spells = [];
  Spells[1] = new SpellInfo("+15% Poison Damage, 10% Slowed for 5 Seconds")
  Spells[2] = new SpellInfo("+20% Poison Damage, 14% Slowed for 5 Seconds")
  Spells[3] = new SpellInfo("+25% Poison Damage, 18% Slowed for 5 Seconds")
  Spells[4] = new SpellInfo("+30% Poison Damage, 22% Slowed for 5 Seconds")
  Spells[5] = new SpellInfo("+35% Poison Damage, 26% Slowed for 5 Seconds")
  Spells[6] = new SpellInfo("+40% Poison Damage, 30% Slowed for 5 Seconds")
  Spells[7] = new SpellInfo("+45% Poison Damage, 34% Slowed for 5 Seconds")
  Spells[8] = new SpellInfo("+50% Poison Damage, 39% Slowed for 5 Seconds")
  Skills[5] = new Skill("Nightshade", 4, Spells, 2, "Oils harvested from deadly Nightshade plants give your Envenomed Weapons the ability to slow enemies.")

  // Flash Powder
  Spells = [];
  Spells[1] = new SpellInfo("53 Energy Cost, 3.8 Meter Radius, 30% Chance to Fumble Attacks for 8 Seconds, 30% Chance of 3-8 Seconds of Confusion")
  Spells[2] = new SpellInfo("56 Energy Cost, 4.4 Meter Radius, 35% Chance to Fumble Attacks for 8 Seconds, 35% Chance of 3-8 Seconds of Confusion")
  Spells[3] = new SpellInfo("59 Energy Cost, 5.0 Meter Radius, 40% Chance to Fumble Attacks for 8 Seconds, 40% Chance of 3-8 Seconds of Confusion")
  Spells[4] = new SpellInfo("62 Energy Cost, 5.6 Meter Radius, 45% Chance to Fumble Attacks for 8 Seconds, 45% Chance of 3-8 Seconds of Confusion")
  Spells[5] = new SpellInfo("65 Energy Cost, 6.2 Meter Radius, 50% Chance to Fumble Attacks for 8 Seconds, 50% Chance of 3-8 Seconds of Confusion")
  Spells[6] = new SpellInfo("68 Energy Cost, 6.8 Meter Radius, 55% Chance to Fumble Attacks for 8 Seconds, 55% Chance of 3-8 Seconds of Confusion")
  Spells[7] = new SpellInfo("71 Energy Cost, 7.4 Meter Radius, 60% Chance to Fumble Attacks for 8 Seconds, 60% Chance of 3-8 Seconds of Confusion")
  Spells[8] = new SpellInfo("74 Energy Cost, 8.0 Meter Radius, 65% Chance to Fumble Attacks for 8 Seconds, 65% Chance of 3-8 Seconds of Confusion")
  Skills[6] = new Skill("Flash Powder", 4, Spells, -1, "A magician's trick turned to more nefarious purposes, flash powder blinds adjacent enemies impairing their ability to hit with weapons and potentially disorienting them.")

  // Lucky Hit
  Spells = [];
  Spells[1] = new SpellInfo("33% Chance for one of the following: 39 (Physical)Damage, +50% Pierce Damage, 60 Bleeding Damage Over 3 Seconds")
  Spells[2] = new SpellInfo("33% Chance for one of the following: 48 (Physical)Damage, +59% Pierce Damage, 75 Bleeding Damage Over 3 Seconds")
  Spells[3] = new SpellInfo("33% Chance for one of the following: 57 (Physical)Damage, +68% Pierce Damage, 90 Bleeding Damage Over 3 Seconds")
  Spells[4] = new SpellInfo("33% Chance for one of the following: 66 (Physical)Damage, +77% Pierce Damage, 120 Bleeding Damage Over 3 Seconds")
  Spells[5] = new SpellInfo("33% Chance for one of the following: 75 (Physical)Damage, +86% Pierce Damage, 150 Bleeding Damage Over 3 Seconds")
  Spells[6] = new SpellInfo("33% Chance for one of the following: 84 (Physical)Damage, +95% Pierce Damage, 180 Bleeding Damage Over 3 Seconds")
  Skills[7] = new Skill("Lucky Hit", 10, Spells, 0, "Uncommonly good fortune provides a chance that calculated strikes will slip past enemy armor causing tremendous damage.")

  // Open Wound
  Spells = [];
  Spells[1] = new SpellInfo("33% Chance of 27 Bleeding Damage Over 3 Seconds")
  Spells[2] = new SpellInfo("33% Chance of 36 Bleeding Damage Over 3 Seconds")
  Spells[3] = new SpellInfo("33% Chance of 45 Bleeding Damage Over 3 Seconds")
  Spells[4] = new SpellInfo("33% Chance of 57 Bleeding Damage Over 3 Seconds")
  Spells[5] = new SpellInfo("33% Chance of 66 Bleeding Damage Over 3 Seconds")
  Spells[6] = new SpellInfo("33% Chance of 75 Bleeding Damage Over 3 Seconds")
  Spells[7] = new SpellInfo("33% Chance of 84 Bleeding Damage Over 3 Seconds")
  Spells[8] = new SpellInfo("33% Chance of 96 Bleeding Damage Over 3 Seconds")
  Spells[9] = new SpellInfo("33% Chance of 105 Bleeding Damage Over 3 Seconds")
  Spells[10] = new SpellInfo("33% Chance of 117 Bleeding Damage Over 3 Seconds")
  Spells[11] = new SpellInfo("33% Chance of 126 Bleeding Damage Over 3 Seconds")
  Spells[12] = new SpellInfo("33% Chance of 141 Bleeding Damage Over 3 Seconds")
  Skills[8] = new Skill("Open Wound", 10, Spells, -1, "Adds a chance that weapon attacks will inflict bleeding damage when using a sword, spear, bow, or axe.")

  // Lay Trap
  Spells = [];
  Spells[1] = new SpellInfo("25 Energy Cost, 1.0 Meter Radius, 3 Summon Limit, Bolt Trap Attributes: Life Time 30 Seconds, 52 Health, Bolt Trap Abilities: Lay Trap (1 Projectile, 8-15 Piercing Damage)")
  Spells[2] = new SpellInfo("27 Energy Cost, 1.0 Meter Radius, 3 Summon Limit, Bolt Trap Attributes: Life Time 30 Seconds, 66 Health, Bolt Trap Abilities: Lay Trap (1 Projectile, 11-19 Piercing Damage)")
  Spells[3] = new SpellInfo("29 Energy Cost, 1.0 Meter Radius, 3 Summon Limit, Bolt Trap Attributes: Life Time 30 Seconds, 80 Health, Bolt Trap Abilities: Lay Trap (1 Projectile, 14-24 Piercing Damage)")
  Spells[4] = new SpellInfo("31 Energy Cost, 1.0 Meter Radius, 3 Summon Limit, Bolt Trap Attributes: Life Time 30 Seconds, 94 Health, Bolt Trap Abilities: Lay Trap (1 Projectile, 18-29 Piercing Damage)")
  Spells[5] = new SpellInfo("33 Energy Cost, 1.0 Meter Radius, 3 Summon Limit, Bolt Trap Attributes: Life Time 30 Seconds, 108 Health, Bolt Trap Abilities: Lay Trap (1 Projectile, 22-36 Piercing Damage)")
  Spells[6] = new SpellInfo("35 Energy Cost, 1.0 Meter Radius, 3 Summon Limit, Bolt Trap Attributes: Life Time 30 Seconds, 122 Health, Bolt Trap Abilities: Lay Trap (1 Projectile, 26-41 Piercing Damage)")
  Spells[7] = new SpellInfo("37 Energy Cost, 1.0 Meter Radius, 3 Summon Limit, Bolt Trap Attributes: Life Time 30 Seconds, 136 Health, Bolt Trap Abilities: Lay Trap (1 Projectile, 31-47 Piercing Damage)")
  Spells[8] = new SpellInfo("39 Energy Cost, 1.0 Meter Radius, 3 Summon Limit, Bolt Trap Attributes: Life Time 30 Seconds, 150 Health, Bolt Trap Abilities: Lay Trap (1 Projectile, 35-53 Piercing Damage)")
  Spells[9] = new SpellInfo("41 Energy Cost, 1.0 Meter Radius, 3 Summon Limit, Bolt Trap Attributes: Life Time 30 Seconds, 164 Health, Bolt Trap Abilities: Lay Trap (1 Projectile, 40-59 Piercing Damage)")
  Spells[10] = new SpellInfo("43 Energy Cost, 1.0 Meter Radius, 3 Summon Limit, Bolt Trap Attributes: Life Time 30 Seconds, 178 Health, Bolt Trap Abilities: Lay Trap (1 Projectile, 46-67 Piercing Damage)")
  Spells[11] = new SpellInfo("45 Energy Cost, 1.0 Meter Radius, 3 Summon Limit, Bolt Trap Attributes: Life Time 30 Seconds, 192 Health, Bolt Trap Abilities: Lay Trap (1 Projectile, 51-74 Piercing Damage)")
  Spells[12] = new SpellInfo("47 Energy Cost, 1.0 Meter Radius, 3 Summon Limit, Bolt Trap Attributes: Life Time 30 Seconds, 206 Health, Bolt Trap Abilities: Lay Trap (1 Projectile, 56-81 Piercing Damage)")
  Spells[13] = new SpellInfo("49 Energy Cost, 1.0 Meter Radius, 3 Summon Limit, Bolt Trap Attributes: Life Time 30 Seconds, 220 Health, Bolt Trap Abilities: Lay Trap (1 Projectile, 63-88 Piercing Damage)")
  Spells[14] = new SpellInfo("51 Energy Cost, 1.0 Meter Radius, 3 Summon Limit, Bolt Trap Attributes: Life Time 30 Seconds, 234 Health, Bolt Trap Abilities: Lay Trap (1 Projectile, 69-95 Piercing Damage)")
  Spells[15] = new SpellInfo("53 Energy Cost, 1.0 Meter Radius, 3 Summon Limit, Bolt Trap Attributes: Life Time 30 Seconds, 248 Health, Bolt Trap Abilities: Lay Trap (1 Projectile, 77-105 Piercing Damage)")
  Spells[16] = new SpellInfo("55 Energy Cost, 1.0 Meter Radius, 3 Summon Limit, Bolt Trap Attributes: Life Time 30 Seconds, 262 Health, Bolt Trap Abilities: Lay Trap (1 Projectile, 83-113 Piercing Damage)")
  Skills[9] = new Skill("Lay Trap", 10, Spells, -1, "Drops a mechanical bolt trap that will trip when enemies draw near and rapidly fire out deadly bolts.")

  // Poison Gas Bomb
  Spells = [];
  Spells[1] = new SpellInfo("45 Energy Cost, 3.2 Meter Radius, 98 Poison Damage Over 6 Seconds, 33% Slowed for 6 Seconds")
  Spells[2] = new SpellInfo("47 Energy Cost, 3.4 Meter Radius, 108 Poison Damage Over 6 Seconds, 33% Slowed for 6 Seconds")
  Spells[3] = new SpellInfo("49 Energy Cost, 3.6 Meter Radius, 119 Poison Damage Over 6 Seconds, 33% Slowed for 6 Seconds")
  Spells[4] = new SpellInfo("51 Energy Cost, 3.8 Meter Radius, 131 Poison Damage Over 6 Seconds, 33% Slowed for 6 Seconds")
  Spells[5] = new SpellInfo("53 Energy Cost, 4.0 Meter Radius, 145 Poison Damage Over 6 Seconds, 33% Slowed for 6 Seconds")
  Spells[6] = new SpellInfo("55 Energy Cost, 4.2 Meter Radius, 160 Poison Damage Over 6 Seconds, 33% Slowed for 6 Seconds")
  Spells[7] = new SpellInfo("57 Energy Cost, 4.4 Meter Radius, 178 Poison Damage Over 6 Seconds, 33% Slowed for 6 Seconds")
  Spells[8] = new SpellInfo("59 Energy Cost, 4.6 Meter Radius, 197 Poison Damage Over 6 Seconds, 33% Slowed for 6 Seconds")
  Spells[9] = new SpellInfo("61 Energy Cost, 4.8 Meter Radius, 218 Poison Damage Over 6 Seconds, 33% Slowed for 6 Seconds")
  Spells[10] = new SpellInfo("63 Energy Cost, 5.0 Meter Radius, 241 Poison Damage Over 6 Seconds, 33% Slowed for 6 Seconds")
  Spells[11] = new SpellInfo("65 Energy Cost, 5.2 Meter Radius, 265 Poison Damage Over 6 Seconds, 33% Slowed for 6 Seconds")
  Spells[12] = new SpellInfo("67 Energy Cost, 5.4 Meter Radius, 292 Poison Damage Over 6 Seconds, 33% Slowed for 6 Seconds")
  Skills[10] = new Skill("Poison Gas Bomb", 10, Spells, -1, "Lobs a bomb that will burst on impact releasing a cloud of toxic gas that damages enemies who breathe it. Side effects may include confusion, panic, and impaired aim with ranged weapons.")

  // Lethal Strike
  Spells = [];
  Spells[1] = new SpellInfo("52 Energy Cost, +225% Damage, +225% Pierce Damage")
  Spells[2] = new SpellInfo("53 Energy Cost, +250% Damage, +240% Pierce Damage")
  Spells[3] = new SpellInfo("55 Energy Cost, +275% Damage, +255% Pierce Damage")
  Spells[4] = new SpellInfo("56 Energy Cost, +300% Damage, +270% Pierce Damage")
  Spells[5] = new SpellInfo("58 Energy Cost, +325% Damage, +285% Pierce Damage")
  Spells[6] = new SpellInfo("59 Energy Cost, +350% Damage, +300% Pierce Damage")
  Spells[7] = new SpellInfo("61 Energy Cost, +375% Damage, +315% Pierce Damage")
  Spells[8] = new SpellInfo("62 Energy Cost, +400% Damage, +330% Pierce Damage")
  Spells[9] = new SpellInfo("64 Energy Cost, +425% Damage, +345% Pierce Damage")
  Spells[10] = new SpellInfo("65 Energy Cost, +450% Damage, +360% Pierce Damage")
  Spells[11] = new SpellInfo("67 Energy Cost, +475% Damage, +375% Pierce Damage")
  Spells[12] = new SpellInfo("68 Energy Cost, +500% Damage, +390% Pierce Damage")
  Skills[11] = new Skill("Lethal Strike", 16, Spells, -1, "A single deadly hit that multiplies the damage of a normal weapon attack.")

  // Rapid Construction
  Spells = [];
  Spells[1] = new SpellInfo("-18% Recharge, -5% Energy Cost")
  Spells[2] = new SpellInfo("-27% Recharge, -10% Energy Cost")
  Spells[3] = new SpellInfo("-36% Recharge, -15% Energy Cost")
  Spells[4] = new SpellInfo("-44% Recharge, -20% Energy Cost")
  Spells[5] = new SpellInfo("-52% Recharge, -25% Energy Cost")
  Spells[6] = new SpellInfo("-60% Recharge, -30% Energy Cost")
  Spells[7] = new SpellInfo("-66% Recharge, -35% Energy Cost")
  Spells[8] = new SpellInfo("-72% Recharge, -40% Energy Cost")
  Skills[12] = new Skill("Rapid Construction", 16, Spells, 9, "Expertise in assembling traps reduces the amount of time it takes to create a new trap after one has been set.")

  // Toxin Distillation
  Spells = [];
  Spells[1] = new SpellInfo("+12% Poison Damage with +10% Improved Duration")
  Spells[2] = new SpellInfo("+24% Poison Damage with +16% Improved Duration")
  Spells[3] = new SpellInfo("+36% Poison Damage with +22% Improved Duration")
  Spells[4] = new SpellInfo("+48% Poison Damage with +28% Improved Duration")
  Spells[5] = new SpellInfo("+60% Poison Damage with +34% Improved Duration")
  Spells[6] = new SpellInfo("+72% Poison Damage with +40% Improved Duration")
  Spells[7] = new SpellInfo("+84% Poison Damage with +46% Improved Duration")
  Spells[8] = new SpellInfo("+96% Poison Damage with +52% Improved Duration")
  Spells[9] = new SpellInfo("+108% Poison Damage with +58% Improved Duration")
  Spells[10] = new SpellInfo("+120% Poison Damage with +64% Improved Duration")
  Spells[11] = new SpellInfo("+132% Poison Damage with +70% Improved Duration")
  Spells[12] = new SpellInfo("+144% Poison Damage with +76% Improved Duration")
  Skills[13] = new Skill("Toxin Distillation", 16, Spells, 2, "Learn alchemical processes to distill natural toxins, increasing the potency and duration of all poison attacks.")

  // Anatomy
  Spells = [];
  Spells[1] = new SpellInfo("+36% Bleeding Damage")
  Spells[2] = new SpellInfo("+48% Bleeding Damage")
  Spells[3] = new SpellInfo("+60% Bleeding Damage")
  Spells[4] = new SpellInfo("+72% Bleeding Damage")
  Spells[5] = new SpellInfo("+84% Bleeding Damage")
  Spells[6] = new SpellInfo("+96% Bleeding Damage")
  Spells[7] = new SpellInfo("+108% Bleeding Damage")
  Spells[8] = new SpellInfo("+120% Bleeding Damage")
  Skills[14] = new Skill("Anatomy", 24, Spells, -1, "With a deep knowledge of anatomy, attacks can be directed at vital points in the body increasing the chance and effectiveness of bleed damage.")

  // Mandrake
  Spells = [];
  Spells[1] = new SpellInfo("1 Active Energy Cost/Second, 15% Chance to Fumble Attacks for 3 Seconds, 12% Chance of 1.8-2.4 Seconds of Confusion")
  Spells[2] = new SpellInfo("1 Active Energy Cost/Second, 20% Chance to Fumble Attacks for 3 Seconds, 16% Chance of 1.8-2.8 Seconds of Confusion")
  Spells[3] = new SpellInfo("1 Active Energy Cost/Second, 25% Chance to Fumble Attacks for 3 Seconds, 20% Chance of 1.8-3.2 Seconds of Confusion")
  Spells[4] = new SpellInfo("1 Active Energy Cost/Second, 30% Chance to Fumble Attacks for 3 Seconds, 24% Chance of 1.8-3.5 Seconds of Confusion")
  Spells[5] = new SpellInfo("1 Active Energy Cost/Second, 35% Chance to Fumble Attacks for 3 Seconds, 28% Chance of 1.8-3.9 Seconds of Confusion")
  Spells[6] = new SpellInfo("1 Active Energy Cost/Second, 40% Chance to Fumble Attacks for 3 Seconds, 32% Chance of 1.8-4.3 Seconds of Confusion")
  Spells[7] = new SpellInfo("1 Active Energy Cost/Second, 45% Chance to Fumble Attacks for 3 Seconds, 36% Chance of 1.8-4.6 Seconds of Confusion")
  Spells[8] = new SpellInfo("1 Active Energy Cost/Second, 50% Chance to Fumble Attacks for 3 Seconds, 40% Chance of 1.8-5.0 Seconds of Confusion")
  Skills[15] = new Skill("Mandrake", 24, Spells, 2, "Adds a chance for poison to cloud an enemy's mind, sending them into a state of confusion.")

  // Shrapnel
  Spells = [];
  Spells[1] = new SpellInfo("5 Energy Cost, 1.5 Meter Radius, 9-11 Projectiles, 55 Bleeding Damage Over 5 Seconds, 24 Piercing Damage")
  Spells[2] = new SpellInfo("6 Energy Cost, 1.5 Meter Radius, 9-11 Projectiles, 65 Bleeding Damage Over 5 Seconds, 32 Piercing Damage")
  Spells[3] = new SpellInfo("7 Energy Cost, 1.5 Meter Radius, 9-11 Projectiles, 75 Bleeding Damage Over 5 Seconds, 40 Piercing Damage")
  Spells[4] = new SpellInfo("8 Energy Cost, 1.5 Meter Radius, 9-11 Projectiles, 85 Bleeding Damage Over 5 Seconds, 51 Piercing Damage")
  Spells[5] = new SpellInfo("9 Energy Cost, 1.5 Meter Radius, 9-11 Projectiles, 95 Bleeding Damage Over 5 Seconds, 61 Piercing Damage")
  Spells[6] = new SpellInfo("10 Energy Cost, 1.5 Meter Radius, 9-11 Projectiles, 105 Bleeding Damage Over 5 Seconds, 71 Piercing Damage")
  Spells[7] = new SpellInfo("11 Energy Cost, 1.5 Meter Radius, 9-11 Projectiles, 115 Bleeding Damage Over 5 Seconds, 82 Piercing Damage")
  Spells[8] = new SpellInfo("12 Energy Cost, 1.5 Meter Radius, 9-11 Projectiles, 125 Bleeding Damage Over 5 Seconds, 94 Piercing Damage")
  Spells[9] = new SpellInfo("13 Energy Cost, 1.5 Meter Radius, 9-11 Projectiles, 135 Bleeding Damage Over 5 Seconds, 106 Piercing Damage")
  Spells[10] = new SpellInfo("14 Energy Cost, 1.5 Meter Radius, 9-11 Projectiles, 145 Bleeding Damage Over 5 Seconds, 119 Piercing Damage")
  Spells[11] = new SpellInfo("15 Energy Cost, 1.5 Meter Radius, 9-11 Projectiles, 155 Bleeding Damage Over 5 Seconds, 131 Piercing Damage")
  Spells[12] = new SpellInfo("16 Energy Cost, 1.5 Meter Radius, 9-11 Projectiles, 165 Bleeding Damage Over 5 Seconds, 145 Piercing Damage")
  Skills[16] = new Skill("Shrapnel", 24, Spells, 10, "Packed with volatile liquid and metal scraps, the Poison Gas Bomb will explode violently on impact showering the area with deadly Shrapnel.")

  // Mortal Wound
  Spells = [];
  Spells[1] = new SpellInfo("15 Energy Cost, +60% Bleeding Damage, +60% Poison Damage, 3 Seconds of Stun")
  Spells[2] = new SpellInfo("15 Energy Cost, +95% Bleeding Damage, +95% Poison Damage, 3 Seconds of Stun")
  Spells[3] = new SpellInfo("15 Energy Cost, +130% Bleeding Damage, +130% Poison Damage, 3 Seconds of Stun")
  Spells[4] = new SpellInfo("15 Energy Cost, +165% Bleeding Damage, +165% Poison Damage, 3 Seconds of Stun")
  Spells[5] = new SpellInfo("15 Energy Cost, +200% Bleeding Damage, +200% Poison Damage, 3 Seconds of Stun")
  Spells[6] = new SpellInfo("15 Energy Cost, +235% Bleeding Damage, +235% Poison Damage, 3 Seconds of Stun")
  Spells[7] = new SpellInfo("15 Energy Cost, +270% Bleeding Damage, +270% Poison Damage, 3 Seconds of Stun")
  Spells[8] = new SpellInfo("15 Energy Cost, +305% Bleeding Damage, +305% Poison Damage, 3 Seconds of Stun")
  Skills[17] = new Skill("Mortal Wound", 32, Spells, 11, "Stuns victims of Lethal Strike and greatly magnifies the impact of poison and bleeding damage caused by the attack.")

  // Flurry of Knives
  Spells = [];
  Spells[1] = new SpellInfo("5 Energy Cost, 1 Projectile, +51% Pierce Damage")
  Spells[2] = new SpellInfo("6 Energy Cost, 2 Projectiles, +60% Pierce Damage")
  Spells[3] = new SpellInfo("6 Energy Cost, 2 Projectiles, +69% Pierce Damage")
  Spells[4] = new SpellInfo("7 Energy Cost, 3 Projectiles, +78% Pierce Damage")
  Spells[5] = new SpellInfo("7 Energy Cost, 3 Projectiles, +87% Pierce Damage")
  Spells[6] = new SpellInfo("8 Energy Cost, 4 Projectiles, +96% Pierce Damage")
  Skills[18] = new Skill("Flurry of Knives", 32, Spells, 3, "Learn to throw additional knives at once and cut down enemies with a lethal flurry of razor-sharp metal.")

  // Improved Firing Mechanism
  Spells = [];
  Spells[1] = new SpellInfo("3 Projectiles, 10% Chance to Pass Through Enemies, +15% Pierce Damage, +30 Health")
  Spells[2] = new SpellInfo("4 Projectiles, 15% Chance to Pass Through Enemies, +20% Pierce Damage, +35 Health")
  Spells[3] = new SpellInfo("4 Projectiles, 20% Chance to Pass Through Enemies, +25% Pierce Damage, +40 Health")
  Spells[4] = new SpellInfo("5 Projectiles, 25% Chance to Pass Through Enemies, +30% Pierce Damage, +45 Health")
  Spells[5] = new SpellInfo("5 Projectiles, 30% Chance to Pass Through Enemies, +35% Pierce Damage, +50 Health")
  Spells[6] = new SpellInfo("6 Projectiles, 35% Chance to Pass Through Enemies, +40% Pierce Damage, +55 Health")
  Spells[7] = new SpellInfo("6 Projectiles, 40% Chance to Pass Through Enemies, +45% Pierce Damage, +60 Health")
  Spells[8] = new SpellInfo("6 Projectiles, 45% Chance to Pass Through Enemies, +50% Pierce Damage, +65 Health")
  Skills[19] = new Skill("Improved Firing Mechanism", 32, Spells, 9, "Modifications to the Bolt Trap increase the number of bolts fired per round.")


  // set the mastery array
  Mastery[6] = new setmastery(Skills, Attributes)

  // testing
  //alert(Mastery[2].Skills[19].spells[4].spellinfo)
  //alert(Skills[1][0].desc)

}