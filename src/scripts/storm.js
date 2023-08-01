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
  this.masteryid = 8
  this.masteryname = "Storm"
  this.Attributes = Attributes
}

window.loadStorm = loadStorm;
function loadStorm() {

  // set attributes
  if (!AttributesBase[0]) { // base att's are only set one time
    AttributesBase[0] = new Attribute(300, 300, 50, 50, 50) // base stats for characters
  }
    let Attributes = [];
  Attributes[1] = new Attribute(21, 15, 0, 1, 3)
  Attributes[2] = new Attribute(42, 30, 0, 2, 6)
  Attributes[3] = new Attribute(63, 45, 0, 3, 9)
  Attributes[4] = new Attribute(84, 60, 0, 4, 12)
  Attributes[5] = new Attribute(105, 75, 0, 5, 15)
  Attributes[6] = new Attribute(126, 90, 0, 6, 18)
  Attributes[7] = new Attribute(147, 105, 0, 7, 21)
  Attributes[8] = new Attribute(168, 120, 0, 8, 24)
  Attributes[9] = new Attribute(189, 135, 0, 9, 27)
  Attributes[10] = new Attribute(210, 150, 0, 10, 30)
  Attributes[11] = new Attribute(231, 165, 0, 11, 33)
  Attributes[12] = new Attribute(252, 180, 0, 12, 36)
  Attributes[13] = new Attribute(273, 195, 0, 13, 39)
  Attributes[14] = new Attribute(294, 210, 0, 14, 42)
  Attributes[15] = new Attribute(315, 225, 0, 15, 45)
  Attributes[16] = new Attribute(336, 240, 0, 16, 48)
  Attributes[17] = new Attribute(357, 255, 0, 17, 51)
  Attributes[18] = new Attribute(378, 270, 0, 18, 54)
  Attributes[19] = new Attribute(399, 285, 0, 19, 57)
  Attributes[20] = new Attribute(420, 300, 0, 20, 60)
  Attributes[21] = new Attribute(441, 315, 0, 21, 63)
  Attributes[22] = new Attribute(462, 330, 0, 22, 66)
  Attributes[23] = new Attribute(483, 345, 0, 23, 69)
  Attributes[24] = new Attribute(504, 360, 0, 24, 72)
  Attributes[25] = new Attribute(525, 375, 0, 25, 75)
  Attributes[26] = new Attribute(546, 390, 0, 26, 78)
  Attributes[27] = new Attribute(567, 405, 0, 27, 81)
  Attributes[28] = new Attribute(588, 420, 0, 28, 84)
  Attributes[29] = new Attribute(609, 435, 0, 29, 87)
  Attributes[30] = new Attribute(630, 450, 0, 30, 90)
  Attributes[31] = new Attribute(651, 465, 0, 31, 93)
  Attributes[32] = new Attribute(672, 480, 0, 32, 96)


    let Skills = [];

  // Ice Shard
    let Spells = [];
  Spells[1] = new SpellInfo("21 Energy Cost, 1 Projectile, 16-25 Cold Damage, 15% Slowed for 1.5 Seconds")
  Spells[2] = new SpellInfo("23 Energy Cost, 1 Projectile, 20-31 Cold Damage, 15% Slowed for 1.5 Seconds")
  Spells[3] = new SpellInfo("25 Energy Cost, 1 Projectile, 23-36 Cold Damage, 15% Slowed for 1.5 Seconds")
  Spells[4] = new SpellInfo("27 Energy Cost, 1 Projectile, 28-43 Cold Damage, 15% Slowed for 1.5 Seconds")
  Spells[5] = new SpellInfo("29 Energy Cost, 1 Projectile, 32-47 Cold Damage, 15% Slowed for 1.5 Seconds")
  Spells[6] = new SpellInfo("31 Energy Cost, 1 Projectile, 36-53 Cold Damage, 15% Slowed for 1.5 Seconds")
  Spells[7] = new SpellInfo("33 Energy Cost, 1 Projectile, 39-58 Cold Damage, 15% Slowed for 1.5 Seconds")
  Spells[8] = new SpellInfo("35 Energy Cost, 1 Projectile, 44-64 Cold Damage, 15% Slowed for 1.5 Seconds")
  Spells[9] = new SpellInfo("37 Energy Cost, 1 Projectile, 48-68 Cold Damage, 15% Slowed for 1.5 Seconds")
  Spells[10] = new SpellInfo("39 Energy Cost, 1 Projectile, 52-73 Cold Damage, 15% Slowed for 1.5 Seconds")
  Spells[11] = new SpellInfo("41 Energy Cost, 1 Projectile, 55-77 Cold Damage, 15% Slowed for 1.5 Seconds")
  Spells[12] = new SpellInfo("43 Energy Cost, 1 Projectile, 60-83 Cold Damage, 15% Slowed for 1.5 Seconds")
  Skills[0] = new Skill("Ice Shard", 1, Spells, -1, "Projects a deadly shard of ice at the target inflicting cold damage and temporarily slowing them.")

  // Storm Nimbus
    Spells = [];
  Spells[1] = new SpellInfo("1 Active Energy Cost/Second, +75 Energy Reserved, Chance for One of the Following: 3 Cold Damage, 1-21 Lightning Damage")
  Spells[2] = new SpellInfo("1 Active Energy Cost/Second, +75 Energy Reserved, Chance for One of the Following: 5 Cold Damage, 3-27 Lightning Damage")
  Spells[3] = new SpellInfo("1 Active Energy Cost/Second, +75 Energy Reserved, Chance for One of the Following: 7 Cold Damage, 5-33 Lightning Damage")
  Spells[4] = new SpellInfo("1 Active Energy Cost/Second, +75 Energy Reserved, Chance for One of the Following: 10 Cold Damage, 7-38 Lightning Damage")
  Spells[5] = new SpellInfo("1 Active Energy Cost/Second, +75 Energy Reserved, Chance for One of the Following: 12 Cold Damage, 9-44 Lightning Damage")
  Spells[6] = new SpellInfo("1 Active Energy Cost/Second, +75 Energy Reserved, Chance for One of the Following: 14 Cold Damage, 11-50 Lightning Damage")
  Spells[7] = new SpellInfo("1 Active Energy Cost/Second, +75 Energy Reserved, Chance for One of the Following: 16 Cold Damage, 13-55 Lightning Damage")
  Spells[8] = new SpellInfo("1 Active Energy Cost/Second, +75 Energy Reserved, Chance for One of the Following: 19 Cold Damage, 15-61 Lightning Damage")
  Spells[9] = new SpellInfo("1 Active Energy Cost/Second, +75 Energy Reserved, Chance for One of the Following: 21 Cold Damage, 17-67 Lightning Damage")
  Spells[10] = new SpellInfo("1 Active Energy Cost/Second, +75 Energy Reserved, Chance for One of the Following: 23 Cold Damage, 19-75 Lightning Damage")
  Skills[1] = new Skill("Storm Nimbus", 1, Spells, -1, "When active, the player is imbued with the power of the storm, causing their attacks to strike with cold and lightning damage.")

  // Spell Breaker
    Spells = [];
  Spells[1] = new SpellInfo("32 Energy Cost, 6.0 Meter Radius, 24% Energy Drained, +50% Damage to Magical, +15 Damage to Magical")
  Spells[2] = new SpellInfo("34 Energy Cost, 6.0 Meter Radius, 32% Energy Drained, +50% Damage to Magical, +30 Damage to Magical")
  Spells[3] = new SpellInfo("36 Energy Cost, 6.0 Meter Radius, 40% Energy Drained, +50% Damage to Magical, +45 Damage to Magical")
  Spells[4] = new SpellInfo("38 Energy Cost, 6.0 Meter Radius, 50% Energy Drained, +50% Damage to Magical, +60 Damage to Magical")
  Spells[5] = new SpellInfo("40 Energy Cost, 6.0 Meter Radius, 58% Energy Drained, +50% Damage to Magical, +75 Damage to Magical")
  Spells[6] = new SpellInfo("42 Energy Cost, 6.0 Meter Radius, 66% Energy Drained, +50% Damage to Magical, +90 Damage to Magical")
  Skills[2] = new Skill("Spell Breaker", 4, Spells, -1, "A pulse of negatively charged energy dispels hostile enchantments on allies or, when cast on enemies, breaks their beneficial enchantments and negates a portion of their energy.")

  // Thunderball
    Spells = [];
  Spells[1] = new SpellInfo("50 Energy Cost, 1.8 Meter Radius, 7-31 Lightning Damage, 1.5 Seconds of Stun")
  Spells[2] = new SpellInfo("53 Energy Cost, 1.8 Meter Radius, 11-36 Lightning Damage, 1.8 Seconds of Stun")
  Spells[3] = new SpellInfo("56 Energy Cost, 1.8 Meter Radius, 16-40 Lightning Damage, 2.1 Seconds of Stun")
  Spells[4] = new SpellInfo("59 Energy Cost, 1.8 Meter Radius, 22-46 Lightning Damage, 2.5 Seconds of Stun")
  Spells[5] = new SpellInfo("62 Energy Cost, 1.8 Meter Radius, 26-50 Lightning Damage, 2.8 Seconds of Stun")
  Spells[6] = new SpellInfo("65 Energy Cost, 1.8 Meter Radius, 30-55 Lightning Damage, 3.1 Seconds of Stun")
  Spells[7] = new SpellInfo("68 Energy Cost, 1.8 Meter Radius, 35-59 Lightning Damage, 3.4 Seconds of Stun")
  Spells[8] = new SpellInfo("71 Energy Cost, 1.8 Meter Radius, 41-65 Lightning Damage, 3.8 Seconds of Stun")
  Spells[9] = new SpellInfo("74 Energy Cost, 1.8 Meter Radius, 45-69 Lightning Damage, 4.1 Seconds of Stun")
  Spells[10] = new SpellInfo("77 Energy Cost, 1.8 Meter Radius, 49-74 Lightning Damage, 4.4 Seconds of Stun")
  Spells[11] = new SpellInfo("80 Energy Cost, 1.8 Meter Radius, 54-78 Lightning Damage, 4.7 Seconds of Stun")
  Spells[12] = new SpellInfo("83 Energy Cost, 1.8 Meter Radius, 60-84 Lightning Damage, 5.1 Seconds of Stun")
  Skills[3] = new Skill("Thunderball", 4, Spells, -1, "Hurls a ball of electrical energy that damages and stuns enemies in a small blast radius.")

  // Heart of Frost
    Spells = [];
  Spells[1] = new SpellInfo("+10% Cold Damage, +25 Energy Reserved, 10% Slowed Attack Retaliation for 3 Seconds, 10% Slowed Movement Retaliation for 3 Seconds")
  Spells[2] = new SpellInfo("+16% Cold Damage, +25 Energy Reserved, 15% Slowed Attack Retaliation for 3 Seconds, 15% Slowed Movement Retaliation for 3 Seconds")
  Spells[3] = new SpellInfo("+22% Cold Damage, +25 Energy Reserved, 19% Slowed Attack Retaliation for 3 Seconds, 19% Slowed Movement Retaliation for 3 Seconds")
  Spells[4] = new SpellInfo("+28% Cold Damage, +25 Energy Reserved, 24% Slowed Attack Retaliation for 3 Seconds, 24% Slowed Movement Retaliation for 3 Seconds")
  Spells[5] = new SpellInfo("+34% Cold Damage, +25 Energy Reserved, 27% Slowed Attack Retaliation for 3 Seconds, 27% Slowed Movement Retaliation for 3 Seconds")
  Spells[6] = new SpellInfo("+40% Cold Damage, +25 Energy Reserved, 31% Slowed Attack Retaliation for 3 Seconds, 31% Slowed Movement Retaliation for 3 Seconds")
  Spells[7] = new SpellInfo("+46% Cold Damage, +25 Energy Reserved, 34% Slowed Attack Retaliation for 3 Seconds, 34% Slowed Movement Retaliation for 3 Seconds")
  Spells[8] = new SpellInfo("+52% Cold Damage, +25 Energy Reserved, 38% Slowed Attack Retaliation for 3 Seconds, 38% Slowed Movement Retaliation for 3 Seconds")
  Skills[4] = new Skill("Heart of Frost", 4, Spells, 1, "When Storm Nimbus is active, the air around the player becomes icy cold and slows any attackers within its perimeter.")

  // Spell Shock
    Spells = [];
  Spells[1] = new SpellInfo("14 Energy Cost, 30% Energy Drained Causes Damage, 3.0 Seconds of Skill Disruption")
  Spells[2] = new SpellInfo("16 Energy Cost, 45% Energy Drained Causes Damage, 3.6 Seconds of Skill Disruption")
  Spells[3] = new SpellInfo("18 Energy Cost, 60% Energy Drained Causes Damage, 4.2 Seconds of Skill Disruption")
  Spells[4] = new SpellInfo("20 Energy Cost, 75% Energy Drained Causes Damage, 4.8 Seconds of Skill Disruption")
  Spells[5] = new SpellInfo("22 Energy Cost, 90% Energy Drained Causes Damage, 5.4 Seconds of Skill Disruption")
  Spells[6] = new SpellInfo("24 Energy Cost, 105% Energy Drained Causes Damage, 6.0 Seconds of Skill Disruption")
  Spells[7] = new SpellInfo("26 Energy Cost, 120% Energy Drained Causes Damage, 6.6 Seconds of Skill Disruption")
  Spells[8] = new SpellInfo("28 Energy Cost, 135% Energy Drained Causes Damage, 7.2 Seconds of Skill Disruption")
  Skills[5] = new Skill("Spell Shock", 10, Spells, 2, "Inflicts energy burn damage and disrupts enemy spell-caster's ability to use skills as their beneficial enchantments are abruptly shattered by Spell Breaker.")

  // Velocity
    Spells = [];
  Spells[1] = new SpellInfo("2 Energy Cost, 18% Chance to Pass Through Enemies, +10% Cold Damage, +15% Increase in Projectile Speed")
  Spells[2] = new SpellInfo("2 Energy Cost, 24% Chance to Pass Through Enemies, +16% Cold Damage, +20% Increase in Projectile Speed")
  Spells[3] = new SpellInfo("3 Energy Cost, 30% Chance to Pass Through Enemies, +22% Cold Damage, +25% Increase in Projectile Speed")
  Spells[4] = new SpellInfo("3 Energy Cost, 36% Chance to Pass Through Enemies, +28% Cold Damage, +30% Increase in Projectile Speed")
  Spells[5] = new SpellInfo("3 Energy Cost, 42% Chance to Pass Through Enemies, +34% Cold Damage, +35% Increase in Projectile Speed")
  Spells[6] = new SpellInfo("4 Energy Cost, 48% Chance to Pass Through Enemies, +40% Cold Damage, +40% Increase in Projectile Speed")
  Spells[7] = new SpellInfo("4 Energy Cost, 54% Chance to Pass Through Enemies, +46% Cold Damage, +45% Increase in Projectile Speed")
  Spells[8] = new SpellInfo("4 Energy Cost, 60% Chance to Pass Through Enemies, +52% Cold Damage, +50% Increase in Projectile Speed")
  Skills[6] = new Skill("Velocity", 10, Spells, 0, "Increases the speed and damage of Ice Shard. Gives each shard a chance to punch through its target and keep going.")

  // Squall
    Spells = [];
  Spells[1] = new SpellInfo("54 Energy Cost, 6 Second Duration, 4.0 Meter Radius, 30% Chance of 3-21 Lightning Damage, 50% Chance of Impaired Aim for 1 Seconds")
  Spells[2] = new SpellInfo("57 Energy Cost, 6 Second Duration, 4.8 Meter Radius, 38% Chance of 7-25 Lightning Damage, 55% Chance of Impaired Aim for 1 Seconds")
  Spells[3] = new SpellInfo("60 Energy Cost, 6 Second Duration, 5.6 Meter Radius, 45% Chance of 11-29 Lightning Damage, 60% Chance of Impaired Aim for 1 Seconds")
  Spells[4] = new SpellInfo("64 Energy Cost, 6 Second Duration, 6.3 Meter Radius, 51% Chance of 14-32 Lightning Damage, 65% Chance of Impaired Aim for 1 Seconds")
  Spells[5] = new SpellInfo("67 Energy Cost, 6 Second Duration, 6.9 Meter Radius, 57% Chance of 18-36 Lightning Damage, 70% Chance of Impaired Aim for 1 Seconds")
  Spells[6] = new SpellInfo("70 Energy Cost, 6 Second Duration, 7.5 Meter Radius, 62% Chance of 22-40 Lightning Damage, 75% Chance of Impaired Aim for 1 Seconds")
  Spells[7] = new SpellInfo("74 Energy Cost, 6 Second Duration, 8.0 Meter Radius, 67% Chance of 25-43 Lightning Damage, 80% Chance of Impaired Aim for 1 Seconds")
  Spells[8] = new SpellInfo("77 Energy Cost, 6 Second Duration, 8.5 Meter Radius, 71% Chance of 29-47 Lightning Damage, 85% Chance of Impaired Aim for 1 Seconds")
  Spells[9] = new SpellInfo("80 Energy Cost, 6 Second Duration, 9.0 Meter Radius, 75% Chance of 33-51 Lightning Damage, 90% Chance of Impaired Aim for 1 Seconds")
  Spells[10] = new SpellInfo("84 Energy Cost, 6 Second Duration, 9.4 Meter Radius, 79% Chance of 36-54 Lightning Damage, 95% Chance of Impaired Aim for 1 Seconds")
  Spells[11] = new SpellInfo("87 Energy Cost, 6 Second Duration, 9.8 Meter Radius, 82% Chance of 40-58 Lightning Damage, 100% Chance of Impaired Aim for 1 Seconds")
  Spells[12] = new SpellInfo("90 Energy Cost, 6 Second Duration, 10.2 Meter Radius, 85% Chance of 44-62 Lightning Damage, 100% Chance of Impaired Aim for 1 Seconds")
  Skills[7] = new Skill("Squall", 10, Spells, -1, "Creates a wind storm in the target area that decreases the projectile attack accuracy of enemies caught within it.")

  // Freezing Blast
    Spells = [];
  Spells[1] = new SpellInfo("85% Damage Absorption, 63 Energy Cost, 3.0 Second Duration, 1.8 Meter Radius, 3 Cold Damage")
  Spells[2] = new SpellInfo("85% Damage Absorption, 66 Energy Cost, 3.4 Second Duration, 2.1 Meter Radius, 6 Cold Damage")
  Spells[3] = new SpellInfo("85% Damage Absorption, 69 Energy Cost, 3.8 Second Duration, 2.4 Meter Radius, 9 Cold Damage")
  Spells[4] = new SpellInfo("85% Damage Absorption, 72 Energy Cost, 4.2 Second Duration, 2.7 Meter Radius, 12 Cold Damage")
  Spells[5] = new SpellInfo("85% Damage Absorption, 75 Energy Cost, 4.6 Second Duration, 3.0 Meter Radius, 15 Cold Damage")
  Spells[6] = new SpellInfo("85% Damage Absorption, 78 Energy Cost, 5.0 Second Duration, 3.3 Meter Radius, 18 Cold Damage")
  Spells[7] = new SpellInfo("85% Damage Absorption, 81 Energy Cost, 5.4 Second Duration, 3.6 Meter Radius, 21 Cold Damage")
  Spells[8] = new SpellInfo("85% Damage Absorption, 84 Energy Cost, 5.8 Second Duration, 3.9 Meter Radius, 24 Cold Damage")
  Skills[8] = new Skill("Freezing Blast", 10, Spells, -1, "Encases enemies in ice immobilizing them but also making them more difficult to damage.")

  // Lightning Bolt
    Spells = [];
  Spells[1] = new SpellInfo("80 Energy Cost, 0.5 Meter Radius, 51-109 Lightning Damage, 1 Second of Stun")
  Spells[2] = new SpellInfo("88 Energy Cost, 0.6 Meter Radius, 63-133 Lightning Damage, 1 Second of Stun")
  Spells[3] = new SpellInfo("96 Energy Cost, 0.7 Meter Radius, 74-156 Lightning Damage, 1 Second of Stun")
  Spells[4] = new SpellInfo("104 Energy Cost, 0.8 Meter Radius, 86-178 Lightning Damage, 1 Second of Stun")
  Spells[5] = new SpellInfo("112 Energy Cost, 0.9 Meter Radius, 97-202 Lightning Damage, 1 Second of Stun")
  Spells[6] = new SpellInfo("120 Energy Cost, 1.0 Meter Radius, 109-225 Lightning Damage, 1 Second of Stun")
  Spells[7] = new SpellInfo("128 Energy Cost, 1.1 Meter Radius, 120-247 Lightning Damage, 1 Second of Stun")
  Spells[8] = new SpellInfo("136 Energy Cost, 1.2 Meter Radius, 132-271 Lightning Damage, 1 Second of Stun")
  Spells[9] = new SpellInfo("144 Energy Cost, 1.3 Meter Radius, 143-294 Lightning Damage, 1 Second of Stun")
  Spells[10] = new SpellInfo("152 Energy Cost, 1.4 Meter Radius, 155-316 Lightning Damage, 1 Second of Stun")
  Spells[11] = new SpellInfo("160 Energy Cost, 1.5 Meter Radius, 166-340 Lightning Damage, 1 Second of Stun")
  Spells[12] = new SpellInfo("168 Energy Cost, 1.6 Meter Radius, 178-363 Lightning Damage, 1 Second of Stun")
  Skills[9] = new Skill("Lightning Bolt", 16, Spells, -1, "Calls down a powerful bolt of lightning from the heavens to decimate your target.")

  // Concussive Blast
    Spells = [];
  Spells[1] = new SpellInfo("14 Energy Cost, 1.5 Meter Radius, 2-3 Fragments, 3-11 Lightning Damage, 1.0 Seconds of Stun")
  Spells[2] = new SpellInfo("15 Energy Cost, 1.5 Meter Radius, 2-4 Fragments, 6-16 Lightning Damage, 1.2 Seconds of Stun")
  Spells[3] = new SpellInfo("16 Energy Cost, 1.5 Meter Radius, 2-4 Fragments, 9-22 Lightning Damage, 1.5 Seconds of Stun")
  Spells[4] = new SpellInfo("18 Energy Cost, 1.5 Meter Radius, 3-5 Fragments, 12-27 Lightning Damage, 1.7 Seconds of Stun")
  Spells[5] = new SpellInfo("19 Energy Cost, 1.5 Meter Radius, 3-5 Fragments, 15-32 Lightning Damage, 1.9 Seconds of Stun")
  Spells[6] = new SpellInfo("20 Energy Cost, 1.5 Meter Radius, 4-5 Fragments, 18-38 Lightning Damage, 2.3 Seconds of Stun")
  Spells[7] = new SpellInfo("22 Energy Cost, 1.5 Meter Radius, 4-6 Fragments, 21-43 Lightning Damage, 2.5 Seconds of Stun")
  Spells[8] = new SpellInfo("23 Energy Cost, 1.5 Meter Radius, 5-6 Fragments, 24-48 Lightning Damage, 2.8 Seconds of Stun")
  Skills[10] = new Skill("Concussive Blast", 16, Spells, 3, "Enhances the power of Thunderball, increasing stun damage and blast radius.")

  // Obscured Visibility
    Spells = [];
  Spells[1] = new SpellInfo("6 Energy Cost, 10% Reduced Damage for 6 Seconds, 10% Reduced Resistance for 6 Seconds")
  Spells[2] = new SpellInfo("7 Energy Cost, 14% Reduced Damage for 6 Seconds, 14% Reduced Resistance for 6 Seconds")
  Spells[3] = new SpellInfo("8 Energy Cost, 18% Reduced Damage for 6 Seconds, 18% Reduced Resistance for 6 Seconds")
  Spells[4] = new SpellInfo("9 Energy Cost, 22% Reduced Damage for 6 Seconds, 22% Reduced Resistance for 6 Seconds")
  Spells[5] = new SpellInfo("10 Energy Cost, 26% Reduced Damage for 6 Seconds, 26% Reduced Resistance for 6 Seconds")
  Spells[6] = new SpellInfo("11 Energy Cost, 30% Reduced Damage for 6 Seconds, 30% Reduced Resistance for 6 Seconds")
  Skills[11] = new Skill("Obscured Visibility", 16, Spells, 7, "Reduces visibility inside the Squall makes it difficult for enemies to effectively attack or defend themselves.")

  // Static Charge
    Spells = [];
  Spells[1] = new SpellInfo("+10% Lightning Damage, +25 Energy Reserved, 15% Chance of 54 Lightning Retaliation")
  Spells[2] = new SpellInfo("+16% Lightning Damage, +25 Energy Reserved, 15% Chance of 66 Lightning Retaliation")
  Spells[3] = new SpellInfo("+22% Lightning Damage, +25 Energy Reserved, 15% Chance of 78 Lightning Retaliation")
  Spells[4] = new SpellInfo("+28% Lightning Damage, +25 Energy Reserved, 15% Chance of 90 Lightning Retaliation")
  Spells[5] = new SpellInfo("+34% Lightning Damage, +25 Energy Reserved, 15% Chance of 102 Lightning Retaliation")
  Spells[6] = new SpellInfo("+40% Lightning Damage, +25 Energy Reserved, 15% Chance of 114 Lightning Retaliation")
  Spells[7] = new SpellInfo("+46% Lightning Damage, +25 Energy Reserved, 15% Chance of 126 Lightning Retaliation")
  Spells[8] = new SpellInfo("+52% Lightning Damage, +25 Energy Reserved, 15% Chance of 138 Lightning Retaliation")
  Spells[9] = new SpellInfo("+58% Lightning Damage, +25 Energy Reserved, 15% Chance of 150 Lightning Retaliation")
  Spells[10] = new SpellInfo("+64% Lightning Damage, +25 Energy Reserved, 15% Chance of 162 Lightning Retaliation")
  Spells[11] = new SpellInfo("+70% Lightning Damage, +25 Energy Reserved, 15% Chance of 174 Lightning Retaliation")
  Spells[12] = new SpellInfo("+76% Lightning Damage, +25 Energy Reserved, 15% Chance of 186 Lightning Retaliation")
  Skills[12] = new Skill("Static Charge", 16, Spells, 1, "Electrical energy builds inside the player while Storm Nimbus is active and passes through enemy weapons that come in contact, delivering a powerful shock.")

  // Energy Shield
    Spells = [];
  Spells[1] = new SpellInfo("125 Damage Absorption, 60 Energy Cost, Protects Against: Lightning, Cold")
  Spells[2] = new SpellInfo("149 Damage Absorption, 64 Energy Cost, Protects Against: Lightning, Cold")
  Spells[3] = new SpellInfo("174 Damage Absorption, 68 Energy Cost, Protects Against: Lightning, Cold")
  Spells[4] = new SpellInfo("198 Damage Absorption, 72 Energy Cost, Protects Against: Lightning, Cold")
  Spells[5] = new SpellInfo("223 Damage Absorption, 76 Energy Cost, Protects Against: Lightning, Cold")
  Spells[6] = new SpellInfo("247 Damage Absorption, 80 Energy Cost, Protects Against: Lightning, Cold")
  Spells[7] = new SpellInfo("272 Damage Absorption, 84 Energy Cost, Protects Against: Lightning, Cold")
  Spells[8] = new SpellInfo("296 Damage Absorption, 88 Energy Cost, Protects Against: Lightning, Cold")
  Spells[9] = new SpellInfo("321 Damage Absorption, 92 Energy Cost, Protects Against: Lightning, Cold")
  Spells[10] = new SpellInfo("345 Damage Absorption, 96 Energy Cost, Protects Against: Lightning, Cold")
  Spells[11] = new SpellInfo("370 Damage Absorption, 100 Energy Cost, Protects Against: Lightning, Cold")
  Spells[12] = new SpellInfo("394 Damage Absorption, 104 Energy Cost, Protects Against: Lightning, Cold")
  Skills[13] = new Skill("Energy Shield", 16, Spells, -1, "Creates a shield of energy that will nullify all incoming damage from elemental attacks.")

  // Torrent
    Spells = [];
  Spells[1] = new SpellInfo("14 Energy Cost, 1 Projectile, 21 Frostburn Damage Over 3 Seconds")
  Spells[2] = new SpellInfo("16 Energy Cost, 1 Projectile, 33 Frostburn Damage Over 3 Seconds")
  Spells[3] = new SpellInfo("21 Energy Cost, 2 Projectiles, 39 Frostburn Damage Over 3 Seconds")
  Spells[4] = new SpellInfo("23 Energy Cost, 2 Projectiles, 48 Frostburn Damage Over 3 Seconds")
  Spells[5] = new SpellInfo("28 Energy Cost, 3 Projectiles, 57 Frostburn Damage Over 3 Seconds")
  Spells[6] = new SpellInfo("30 Energy Cost, 3 Projectiles, 63 Frostburn Damage Over 3 Seconds")
  Spells[7] = new SpellInfo("32 Energy Cost, 3 Projectiles, 69 Frostburn Damage Over 3 Seconds")
  Spells[8] = new SpellInfo("38 Energy Cost, 4 Projectiles, 78 Frostburn Damage Over 3 Seconds")
  Skills[14] = new Skill("Torrent", 24, Spells, 0, "Increases the number of shards cast, sending a deadly torrent at enemies.")

  // Summon Wisp
    Spells = [];
  Spells[1] = new SpellInfo("200 Energy Cost, Storm Wisp Attributes: 153 Health, 186 Energy, Storm Wisp Ability 1: Plasma Burn (6-25 Lightning Damage), Storm Wisp Ability 2: Dodge Attack (99% Chance to Dodge Attacks, +99% Chance to Avoid Projectiles)")
  Spells[2] = new SpellInfo("200 Energy Cost, Storm Wisp Attributes: 165 Health, 195 Energy, Storm Wisp Ability 1: Plasma Burn (9-28 Lightning Damage), Storm Wisp Ability 2: Dodge Attack (99% Chance to Dodge Attacks, +99% Chance to Avoid Projectiles)")
  Spells[3] = new SpellInfo("200 Energy Cost, Storm Wisp Attributes: 177 Health, 204 Energy, Storm Wisp Ability 1: Plasma Burn (11-31 Lightning Damage), Storm Wisp Ability 2: Dodge Attack (99% Chance to Dodge Attacks, +99% Chance to Avoid Projectiles)")
  Spells[4] = new SpellInfo("200 Energy Cost, Storm Wisp Attributes: 189 Health, 213 Energy, Storm Wisp Ability 1: Plasma Burn (15-34 Lightning Damage), Storm Wisp Ability 2: Dodge Attack (99% Chance to Dodge Attacks, +99% Chance to Avoid Projectiles)")
  Spells[5] = new SpellInfo("200 Energy Cost, Storm Wisp Attributes: 201 Health, 222 Energy, Storm Wisp Ability 1: Plasma Burn (17-38 Lightning Damage), Storm Wisp Ability 2: Dodge Attack (99% Chance to Dodge Attacks, +99% Chance to Avoid Projectiles), Storm Wisp Ability 3: Thunderclap (31 Energy Cost, 3.0 Meter Radius, 36-51 Lightning Damage, 0.5-1 Seconds of Stun)")
  Spells[6] = new SpellInfo("200 Energy Cost, Storm Wisp Attributes: 213 Health, 231 Energy, Storm Wisp Ability 1: Plasma Burn (21-41 Lightning Damage), Storm Wisp Ability 2: Dodge Attack (99% Chance to Dodge Attacks, +99% Chance to Avoid Projectiles), Storm Wisp Ability 3: Thunderclap (32 Energy Cost, 3.0 Meter Radius, 41-57 Lightning Damage, 0.6-1.1 Seconds of Stun)")
  Spells[7] = new SpellInfo("200 Energy Cost, Storm Wisp Attributes: 225 Health, 240 Energy, Storm Wisp Ability 1: Plasma Burn (24-44 Lightning Damage), Storm Wisp Ability 2: Dodge Attack (99% Chance to Dodge Attacks, +99% Chance to Avoid Projectiles), Storm Wisp Ability 3: Thunderclap (33 Energy Cost, 3.0 Meter Radius, 45-65 Lightning Damage, 0.6-1.2 Seconds of Stun)")
  Spells[8] = new SpellInfo("200 Energy Cost, Storm Wisp Attributes: 237 Health, 249 Energy, Storm Wisp Ability 1: Plasma Burn (29-48 Lightning Damage), Storm Wisp Ability 2: Dodge Attack (99% Chance to Dodge Attacks, +99% Chance to Avoid Projectiles), Storm Wisp Ability 3: Thunderclap (34 Energy Cost, 3.0 Meter Radius, 50-73 Lightning Damage, 0.6-1.3 Seconds of Stun)")
  Spells[9] = new SpellInfo("200 Energy Cost, Storm Wisp Attributes: 249 Health, 258 Energy, Storm Wisp Ability 1: Plasma Burn (32-51 Lightning Damage), Storm Wisp Ability 2: Dodge Attack (99% Chance to Dodge Attacks, +99% Chance to Avoid Projectiles), Storm Wisp Ability 3: Thunderclap (35 Energy Cost, 3.0 Meter Radius, 55-80 Lightning Damage, 0.7-1.4 Seconds of Stun)")
  Spells[10] = new SpellInfo("200 Energy Cost, Storm Wisp Attributes: 261 Health, 267 Energy, Storm Wisp Ability 1: Plasma Burn (36-55 Lightning Damage), Storm Wisp Ability 2: Dodge Attack (99% Chance to Dodge Attacks, +99% Chance to Avoid Projectiles), Storm Wisp Ability 3: Thunderclap (36 Energy Cost, 3.0 Meter Radius, 60-88 Lightning Damage, 0.8-1.5 Seconds of Stun)")
  Spells[11] = new SpellInfo("200 Energy Cost, Storm Wisp Attributes: 273 Health, 276 Energy, Storm Wisp Ability 1: Plasma Burn (40-58 Lightning Damage), Storm Wisp Ability 2: Dodge Attack (99% Chance to Dodge Attacks, +99% Chance to Avoid Projectiles), Storm Wisp Ability 3: Thunderclap (37 Energy Cost, 3.0 Meter Radius, 65-95 Lightning Damage, 0.8-1.6 Seconds of Stun)")
  Spells[12] = new SpellInfo("200 Energy Cost, Storm Wisp Attributes: 285 Health, 285 Energy, Storm Wisp Ability 1: Plasma Burn (46-62 Lightning Damage), Storm Wisp Ability 2: Dodge Attack (99% Chance to Dodge Attacks, +99% Chance to Avoid Projectiles), Storm Wisp Ability 3: Thunderclap (38 Energy Cost, 3.0 Meter Radius, 70-104 Lightning Damage, 0.9-1.7 Seconds of Stun)")
  Spells[13] = new SpellInfo("200 Energy Cost, Storm Wisp Attributes: 297 Health, 294 Energy, Storm Wisp Ability 1: Plasma Burn (50-66 Lightning Damage), Storm Wisp Ability 2: Dodge Attack (99% Chance to Dodge Attacks, +99% Chance to Avoid Projectiles), Storm Wisp Ability 3: Thunderclap (39 Energy Cost, 3.0 Meter Radius, 76-113 Lightning Damage, 0.9-1.8 Seconds of Stun)")
  Spells[14] = new SpellInfo("200 Energy Cost, Storm Wisp Attributes: 309 Health, 303 Energy, Storm Wisp Ability 1: Plasma Burn (55-69 Lightning Damage), Storm Wisp Ability 2: Dodge Attack (99% Chance to Dodge Attacks, +99% Chance to Avoid Projectiles), Storm Wisp Ability 3: Thunderclap (40 Energy Cost, 3.0 Meter Radius, 85-126 Lightning Damage, 0.9-1.9 Seconds of Stun)")
  Spells[15] = new SpellInfo("200 Energy Cost, Storm Wisp Attributes: 321 Health, 312 Energy, Storm Wisp Ability 1: Plasma Burn (59-74 Lightning Damage), Storm Wisp Ability 2: Dodge Attack (99% Chance to Dodge Attacks, +99% Chance to Avoid Projectiles), Storm Wisp Ability 3: Thunderclap (41 Energy Cost, 3.0 Meter Radius, 94-140 Lightning Damage, 1.0-2.0 Seconds of Stun)")
  Spells[16] = new SpellInfo("200 Energy Cost, Storm Wisp Attributes: 333 Health, 321 Energy, Storm Wisp Ability 1: Plasma Burn (66-78 Lightning Damage), Storm Wisp Ability 2: Dodge Attack (99% Chance to Dodge Attacks, +99% Chance to Avoid Projectiles), Storm Wisp Ability 3: Thunderclap (42 Energy Cost, 3.0 Meter Radius, 107-159 Lightning Damage, 1.0-2.1 Seconds of Stun)")
  Skills[15] = new Skill("Summon Wisp", 24, Spells, -1, "Summon an immortal Storm Wisp from the atmosphere to battle your enemies.")

  // Storm Surge
    Spells = [];
  Spells[1] = new SpellInfo("15% Chance of Activating, 5.0 Meter Radius, 25 Cold Damage, 3-43 Lightning Damage, 1.5 Seconds of Stun, +150 Energy Reserved")
  Spells[2] = new SpellInfo("15% Chance of Activating, 5.0 Meter Radius, 30 Cold Damage, 9-50 Lightning Damage, 1.5 Seconds of Stun, +150 Energy Reserved")
  Spells[3] = new SpellInfo("15% Chance of Activating, 5.0 Meter Radius, 36 Cold Damage, 15-57 Lightning Damage, 1.5 Seconds of Stun, +150 Energy Reserved")
  Spells[4] = new SpellInfo("15% Chance of Activating, 5.0 Meter Radius, 43 Cold Damage, 23-36 Lightning Damage, 1.5 Seconds of Stun, +150 Energy Reserved")
  Spells[5] = new SpellInfo("15% Chance of Activating, 5.0 Meter Radius, 49 Cold Damage, 30-73 Lightning Damage, 1.5 Seconds of Stun, +150 Energy Reserved")
  Spells[6] = new SpellInfo("15% Chance of Activating, 5.0 Meter Radius, 54 Cold Damage, 37-80 Lightning Damage, 1.5 Seconds of Stun, +150 Energy Reserved")
  Spells[7] = new SpellInfo("15% Chance of Activating, 5.0 Meter Radius, 60 Cold Damage, 43-87 Lightning Damage, 1.5 Seconds of Stun, +150 Energy Reserved")
  Spells[8] = new SpellInfo("15% Chance of Activating, 5.0 Meter Radius, 67 Cold Damage, 50-96 Lightning Damage, 1.5 Seconds of Stun, +150 Energy Reserved")
  Spells[9] = new SpellInfo("15% Chance of Activating, 5.0 Meter Radius, 73 Cold Damage, 56-104 Lightning Damage, 1.5 Seconds of Stun, +150 Energy Reserved")
  Spells[10] = new SpellInfo("15% Chance of Activating, 5.0 Meter Radius, 80 Cold Damage, 63-112 Lightning Damage, 1.5 Seconds of Stun, +150 Energy Reserved")
  Spells[11] = new SpellInfo("15% Chance of Activating, 5.0 Meter Radius, 88 Cold Damage, 69-123 Lightning Damage, 1.5 Seconds of Stun, +150 Energy Reserved")
  Spells[12] = new SpellInfo("15% Chance of Activating, 5.0 Meter Radius, 97 Cold Damage, 77-134 Lightning Damage, 1.5 Seconds of Stun, +150 Energy Reserved")
  Skills[16] = new Skill("Storm Surge", 24, Spells, -1, "When activated, each enemy hit has a chance of unleashing a violent squall of storm energy.")

  // Chain Lightning
    Spells = [];
  Spells[1] = new SpellInfo("31-53 Lightning Damage, 0.5 Seconds of Stun")
  Spells[2] = new SpellInfo("41-69 Lightning Damage, 0.5 Seconds of Stun")
  Spells[3] = new SpellInfo("53-84 Lightning Damage, 0.5 Seconds of Stun")
  Spells[4] = new SpellInfo("65-101 Lightning Damage, 0.5 Seconds of Stun")
  Spells[5] = new SpellInfo("74-115 Lightning Damage, 0.5 Seconds of Stun")
  Spells[6] = new SpellInfo("86-130 Lightning Damage, 0.5 Seconds of Stun")
  Spells[7] = new SpellInfo("96-145 Lightning Damage, 0.5 Seconds of Stun")
  Spells[8] = new SpellInfo("107-163 Lightning Damage, 0.5 Seconds of Stun")
  Spells[9] = new SpellInfo("117-177 Lightning Damage, 0.5 Seconds of Stun")
  Spells[10] = new SpellInfo("128-192 Lightning Damage, 0.5 Seconds of Stun")
  Spells[11] = new SpellInfo("138-207 Lightning Damage, 0.5 Seconds of Stun")
  Spells[12] = new SpellInfo("150-226 Lightning Damage, 0.5 Seconds of Stun")
  Skills[17] = new Skill("Chain Lightning", 32, Spells, 9, "Causes electricity to leap from the target of your Lightning Bolt skill and strike additional nearby enemies.")

  // Eye of the Storm
    Spells = [];
  Spells[1] = new SpellInfo("30 Energy Cost, 30 Second Duration, 14.0 Meter Radius, +30% Elemental Damage, 12% Cold Resistance, 12% Lightning Resistance, Protects Against: Lightning, Cold")
  Spells[2] = new SpellInfo("32 Energy Cost, 30 Second Duration, 14.0 Meter Radius, +40% Elemental Damage, 15% Cold Resistance, 15% Lightning Resistance, Protects Against: Lightning, Cold")
  Spells[3] = new SpellInfo("35 Energy Cost, 30 Second Duration, 14.0 Meter Radius, +50% Elemental Damage, 18% Cold Resistance, 18% Lightning Resistance, Protects Against: Lightning, Cold")
  Spells[4] = new SpellInfo("37 Energy Cost, 30 Second Duration, 14.0 Meter Radius, +60% Elemental Damage, 21% Cold Resistance, 21% Lightning Resistance, Protects Against: Lightning, Cold")
  Spells[5] = new SpellInfo("39 Energy Cost, 30 Second Duration, 14.0 Meter Radius, +70% Elemental Damage, 24% Cold Resistance, 24% Lightning Resistance, Protects Against: Lightning, Cold")
  Spells[6] = new SpellInfo("42 Energy Cost, 30 Second Duration, 14.0 Meter Radius, +80% Elemental Damage, 27% Cold Resistance, 27% Lightning Resistance, Protects Against: Lightning, Cold")
  Spells[7] = new SpellInfo("44 Energy Cost, 30 Second Duration, 14.0 Meter Radius, +90% Elemental Damage, 33% Cold Resistance, 33% Lightning Resistance, Protects Against: Lightning, Cold")
  Spells[8] = new SpellInfo("46 Energy Cost, 30 Second Duration, 14.0 Meter Radius, +100% Elemental Damage, 33% Cold Resistance, 33% Lightning Resistance, Protects Against: Lightning, Cold")
    Skills[18] = new Skill("Eye of the Storm", 32, Spells, 15, "A wisp ability that increases the lightning and cold damage of all nearby allies for a duration and provides protection from lightning and cold damage.")

  // Reflection
    Spells = [];
  Spells[1] = new SpellInfo("30 Energy Cost, 5% Chance of 25% Damage Reflected")
  Spells[2] = new SpellInfo("30 Energy Cost, 6% Chance of 33% Damage Reflected")
  Spells[3] = new SpellInfo("30 Energy Cost, 7% Chance of 41% Damage Reflected")
  Spells[4] = new SpellInfo("30 Energy Cost, 8% Chance of 49% Damage Reflected")
  Spells[5] = new SpellInfo("30 Energy Cost, 9% Chance of 57% Damage Reflected")
  Spells[6] = new SpellInfo("30 Energy Cost, 10% Chance of 65% Damage Reflected")
  Spells[7] = new SpellInfo("30 Energy Cost, 10% Chance of 73% Damage Reflected")
  Spells[8] = new SpellInfo("30 Energy Cost, 11% Chance of 81% Damage Reflected")
  Skills[19] = new Skill("Reflection", 32, Spells, 13, "Gives Energy Shield the ability to reflect a portion of enemy attack damage back at enemies who hit it.")

  // set the mastery array
  Mastery[8] = new setmastery(Skills, Attributes)

  // testing
  //alert(Mastery[2].Skills[19].spells[4].spellinfo)
  //alert(Skills[1][0].desc)

}