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
  this.masteryid = 4
  this.masteryname = "Nature"
  this.Attributes = Attributes
}

window.loadNature = loadNature;
function loadNature() {

  // set attributes
  if (!AttributesBase[0]) { // base att's are only set one time
    AttributesBase[0] = new Attribute(300, 300, 50, 50, 50) // base stats for characters
  }
    let Attributes = [];
  Attributes[1] = new Attribute(20, 16, 0, 1, 2)
  Attributes[2] = new Attribute(40, 32, 0, 3, 5)
  Attributes[3] = new Attribute(60, 48, 0, 4, 7)
  Attributes[4] = new Attribute(80, 64, 0, 6, 10)
  Attributes[5] = new Attribute(100, 80, 0, 7, 12)
  Attributes[6] = new Attribute(120, 96, 0, 9, 15)
  Attributes[7] = new Attribute(140, 112, 0, 10, 17)
  Attributes[8] = new Attribute(160, 128, 0, 12, 20)
  Attributes[9] = new Attribute(180, 144, 0, 13, 22)
  Attributes[10] = new Attribute(200, 160, 0, 15, 25)
  Attributes[11] = new Attribute(220, 176, 0, 16, 27)
  Attributes[12] = new Attribute(240, 192, 0, 18, 30)
  Attributes[13] = new Attribute(260, 208, 0, 19, 32)
  Attributes[14] = new Attribute(280, 224, 0, 21, 35)
  Attributes[15] = new Attribute(300, 240, 0, 22, 37)
  Attributes[16] = new Attribute(320, 256, 0, 24, 40)
  Attributes[17] = new Attribute(340, 272, 0, 25, 42)
  Attributes[18] = new Attribute(360, 288, 0, 27, 45)
  Attributes[19] = new Attribute(380, 304, 0, 28, 47)
  Attributes[20] = new Attribute(400, 320, 0, 30, 50)
  Attributes[21] = new Attribute(420, 336, 0, 31, 52)
  Attributes[22] = new Attribute(440, 352, 0, 33, 55)
  Attributes[23] = new Attribute(460, 368, 0, 34, 57)
  Attributes[24] = new Attribute(480, 374, 0, 36, 60)
  Attributes[25] = new Attribute(500, 400, 0, 37, 62)
  Attributes[26] = new Attribute(520, 416, 0, 39, 65)
  Attributes[27] = new Attribute(540, 432, 0, 40, 67)
  Attributes[28] = new Attribute(560, 448, 0, 42, 70)
  Attributes[29] = new Attribute(580, 464, 0, 43, 72)
  Attributes[30] = new Attribute(600, 480, 0, 45, 75)
  Attributes[31] = new Attribute(620, 496, 0, 46, 77)
  Attributes[32] = new Attribute(640, 512, 0, 48, 80)


    let Skills = [];
  // Regrowth
    let Spells = [];
  Spells[1] = new SpellInfo("+240 Health Restored, 46 Energy Cost")
  Spells[2] = new SpellInfo("+300 Health Restored, 52 Energy Cost")
  Spells[3] = new SpellInfo("+370 Health Restored, 58 Energy Cost")
  Spells[4] = new SpellInfo("+440 Health Restored, 64 Energy Cost")
  Spells[5] = new SpellInfo("+530 Health Restored, 70 Energy Cost")
  Spells[6] = new SpellInfo("+630 Health Restored, 76 Energy Cost")
  Spells[7] = new SpellInfo("+740 Health Restored, 82 Energy Cost")
  Spells[8] = new SpellInfo("+870 Health Restored, 88 Energy Cost")
  Spells[9] = new SpellInfo("+1010 Health Restored, 94 Energy Cost")
  Spells[10] = new SpellInfo("+1160 Health Restored, 100 Energy Cost")
  Spells[11] = new SpellInfo("+1320 Health Restored, 106 Energy Cost")
  Spells[12] = new SpellInfo("+1500 Health Restored, 112 Energy Cost")
  Spells[13] = new SpellInfo("+1690 Health Restored, 118 Energy Cost")
  Spells[14] = new SpellInfo("+1900 Health Restored, 124 Energy Cost")
  Spells[15] = new SpellInfo("+2120 Health Restored, 130 Energy Cost")
  Spells[16] = new SpellInfo("+2360 Health Restored, 136 Energy Cost")
  Skills[0] = new Skill("Regrowth", 1, Spells, -1, "A wave of healing energy rapidly restores lost life to the target ally.")

  // Call of the Wild
    Spells = [];
    Spells[1] = new SpellInfo("120 Energy Cost, Feral Wolf Animal Companion Attributes: 165 Health, 45 Energy, Feral Wolf Animal Companion Abilities: Dodge Attack (15% Chance to Dodge Attacks, +15% Chance to Avoid Projectiles)")
    Spells[2] = new SpellInfo("124 Energy Cost, Feral Wolf Animal Companion Attributes: 193 Health, 48 Energy, Feral Wolf Animal Companion Abilities: Dodge Attack (16% Chance to Dodge Attacks, +16% Chance to Avoid Projectiles)")
    Spells[3] = new SpellInfo("128 Energy Cost, Feral Wolf Animal Companion Attributes: 222 Health, 51 Energy, Feral Wolf Animal Companion Abilities: Dodge Attack (17% Chance to Dodge Attacks, +17% Chance to Avoid Projectiles)")
    Spells[4] = new SpellInfo("132 Energy Cost, Feral Wolf Animal Companion Attributes: 252 Health, 54 Energy, Feral Wolf Animal Companion Abilities: Dodge Attack (18% Chance to Dodge Attacks, +18% Chance to Avoid Projectiles)")
    Spells[5] = new SpellInfo("136 Energy Cost, Feral Wolf Animal Companion Attributes: 280 Health, 57 Energy, Feral Wolf Animal Companion Abilities: Dodge Attack (19% Chance to Dodge Attacks, +19% Chance to Avoid Projectiles)")
    Spells[6] = new SpellInfo("140 Energy Cost, Feral Wolf Animal Companion Attributes: 310 Health, 60 Energy, Feral Wolf Animal Companion Abilities: Dodge Attack (20% Chance to Dodge Attacks, +20% Chance to Avoid Projectiles)")
    Spells[7] = new SpellInfo("144 Energy Cost, 2 Summon Limit, Feral Wolf Animal Companion Attributes: 338 Health, 63 Energy, Feral Wolf Animal Companion Abilities: Dodge Attack (21% Chance to Dodge Attacks, +21% Chance to Avoid Projectiles)")
    Spells[8] = new SpellInfo("148 Energy Cost, 2 Summon Limit, Feral Wolf Animal Companion Attributes: 369 Health, 66 Energy, Feral Wolf Animal Companion Abilities: Dodge Attack (22% Chance to Dodge Attacks, +22% Chance to Avoid Projectiles)")
    Spells[9] = new SpellInfo("152 Energy Cost, 2 Summon Limit, Feral Wolf Animal Companion Attributes: 397 Health, 69 Energy, Feral Wolf Animal Companion Abilities: Dodge Attack (23% Chance to Dodge Attacks, +23% Chance to Avoid Projectiles)")
    Spells[10] = new SpellInfo("156 Energy Cost, 2 Summon Limit, Feral Wolf Animal Companion Attributes: 427 Health, 72 Energy, Feral Wolf Animal Companion Abilities: Dodge Attack (24% Chance to Dodge Attacks, +24% Chance to Avoid Projectiles)")
    Spells[11] = new SpellInfo("160 Energy Cost, 2 Summon Limit, Feral Wolf Animal Companion Attributes: 457 Health, 75 Energy, Feral Wolf Animal Companion Abilities: Dodge Attack (25% Chance to Dodge Attacks, +25% Chance to Avoid Projectiles)")
    Spells[12] = new SpellInfo("164 Energy Cost, 2 Summon Limit, Feral Wolf Animal Companion Attributes: 488 Health, 78 Energy, Feral Wolf Animal Companion Abilities: Dodge Attack (26% Chance to Dodge Attacks, +26% Chance to Avoid Projectiles)")
    Spells[13] = new SpellInfo("168 Energy Cost, 2 Summon Limit, Feral Wolf Animal Companion Attributes: 518 Health, 81 Energy, Feral Wolf Animal Companion Abilities: Dodge Attack (27% Chance to Dodge Attacks, +27% Chance to Avoid Projectiles)")
    Spells[14] = new SpellInfo("172 Energy Cost, 2 Summon Limit, Feral Wolf Animal Companion Attributes: 548 Health, 84 Energy, Feral Wolf Animal Companion Abilities: Dodge Attack (28% Chance to Dodge Attacks, +28% Chance to Avoid Projectiles)")
    Spells[15] = new SpellInfo("176 Energy Cost, 2 Summon Limit, Feral Wolf Animal Companion Attributes: 581 Health, 87 Energy, Feral Wolf Animal Companion Abilities: Dodge Attack (29% Chance to Dodge Attacks, +29% Chance to Avoid Projectiles)")
    Spells[16] = new SpellInfo("180 Energy Cost, 2 Summon Limit, Feral Wolf Animal Companion Attributes: 612 Health, 90 Energy, Feral Wolf Animal Companion Abilities: Dodge Attack (30% Chance to Dodge Attacks, +30% Chance to Avoid Projectiles)")
  Skills[1] = new Skill("Call of the Wild", 1, Spells, -1, "Summons a wolf companion to fight with you in battle. At higher levels more wolves can be controlled at once.")

  // Heart of Oak
    Spells = [];
  Spells[1] = new SpellInfo("1 Active Energy Cost/Second, 18.0 Meter Radius, +10% Health, +10% Total Speed, +100 Energy Reserved")
  Spells[2] = new SpellInfo("1 Active Energy Cost/Second, 18.0 Meter Radius, +15% Health, +10% Total Speed, +100 Energy Reserved")
  Spells[3] = new SpellInfo("1 Active Energy Cost/Second, 18.0 Meter Radius, +20% Health, +10% Total Speed, +100 Energy Reserved")
  Spells[4] = new SpellInfo("1 Active Energy Cost/Second, 18.0 Meter Radius, +25% Health, +10% Total Speed, +100 Energy Reserved")
  Spells[5] = new SpellInfo("1 Active Energy Cost/Second, 18.0 Meter Radius, +30% Health, +10% Total Speed, +100 Energy Reserved")
  Spells[6] = new SpellInfo("1 Active Energy Cost/Second, 18.0 Meter Radius, +35% Health, +10% Total Speed, +100 Energy Reserved")
  Spells[7] = new SpellInfo("1 Active Energy Cost/Second, 18.0 Meter Radius, +40% Health, +10% Total Speed, +100 Energy Reserved")
  Spells[8] = new SpellInfo("1 Active Energy Cost/Second, 18.0 Meter Radius, +45% Health, +10% Total Speed, +100 Energy Reserved")
  Spells[9] = new SpellInfo("1 Active Energy Cost/Second, 18.0 Meter Radius, +50% Health, +10% Total Speed, +100 Energy Reserved")
  Spells[10] = new SpellInfo("1 Active Energy Cost/Second, 18.0 Meter Radius, +55% Health, +10% Total Speed, +100 Energy Reserved")
  Spells[11] = new SpellInfo("1 Active Energy Cost/Second, 18.0 Meter Radius, +60% Health, +10% Total Speed, +100 Energy Reserved")
  Spells[12] = new SpellInfo("1 Active Energy Cost/Second, 18.0 Meter Radius, +65% Health, +10% Total Speed, +100 Energy Reserved")
  Skills[2] = new Skill("Heart of Oak", 4, Spells, -1, "Bolsters the life-force of yourself and nearby allies.")

  // Accelerated Growth
    Spells = [];
  Spells[1] = new SpellInfo("-18% Recharge")
  Spells[2] = new SpellInfo("-26% Recharge")
  Spells[3] = new SpellInfo("-34% Recharge")
  Spells[4] = new SpellInfo("-42% Recharge")
  Spells[5] = new SpellInfo("-50% Recharge")
  Spells[6] = new SpellInfo("-58% Recharge")
  Spells[7] = new SpellInfo("-66% Recharge")
  Spells[8] = new SpellInfo("-75% Recharge")
  Skills[3] = new Skill("Accelerated Growth", 4, Spells, 0, "Allows Regrowth to be cast more frequently.")

  // Maul
    Spells = [];
  Spells[1] = new SpellInfo("24 Energy Cost, 17 Bleeding Damage Over 3 Seconds, 3 Piercing Damage, 6% Reduction to Enemy's Health")
  Spells[2] = new SpellInfo("24 Energy Cost, 25 Bleeding Damage Over 3 Seconds, 5 Piercing Damage, 6% Reduction to Enemy's Health")
  Spells[3] = new SpellInfo("24 Energy Cost, 33 Bleeding Damage Over 3 Seconds, 7 Piercing Damage, 8% Reduction to Enemy's Health")
  Spells[4] = new SpellInfo("24 Energy Cost, 43 Bleeding Damage Over 3 Seconds, 9 Piercing Damage, 8% Reduction to Enemy's Health")
  Spells[5] = new SpellInfo("24 Energy Cost, 52 Bleeding Damage Over 3 Seconds, 10 Piercing Damage, 8% Reduction to Enemy's Health")
  Spells[6] = new SpellInfo("24 Energy Cost, 62 Bleeding Damage Over 3 Seconds, 12 Piercing Damage, 10% Reduction to Enemy's Health")
  Spells[7] = new SpellInfo("24 Energy Cost, 72 Bleeding Damage Over 3 Seconds, 14 Piercing Damage, 10% Reduction to Enemy's Health")
  Spells[8] = new SpellInfo("24 Energy Cost, 83 Bleeding Damage Over 3 Seconds, 16 Piercing Damage, 10% Reduction to Enemy's Health")
  Spells[9] = new SpellInfo("24 Energy Cost, 92 Bleeding Damage Over 3 Seconds, 17 Piercing Damage, 12% Reduction to Enemy's Health")
  Spells[10] = new SpellInfo("24 Energy Cost, 102 Bleeding Damage Over 3 Seconds, 19 Piercing Damage, 12% Reduction to Enemy's Health")
  Spells[11] = new SpellInfo("24 Energy Cost, 113 Bleeding Damage Over 3 Seconds, 21 Piercing Damage, 12% Reduction to Enemy's Health")
  Spells[12] = new SpellInfo("24 Energy Cost, 125 Bleeding Damage Over 3 Seconds, 23 Piercing Damage, 13% Reduction to Enemy's Health")
  Skills[4] = new Skill("Maul", 4, Spells, 1, "A gnawing attack that rends enemy flesh causing bleed damage for a short duration.")

  // Plague
    Spells = [];
  Spells[1] = new SpellInfo("64 Energy Cost, 3.0 Second Duration, 3-8% Reduction to Enemy's Health")
  Spells[2] = new SpellInfo("66 Energy Cost, 3.4 Second Duration, 4-9% Reduction to Enemy's Health")
  Spells[3] = new SpellInfo("67 Energy Cost, 4.0 Second Duration, 5-10% Reduction to Enemy's Health")
  Spells[4] = new SpellInfo("69 Energy Cost, 4.3 Second Duration, 6-11% Reduction to Enemy's Health")
  Spells[5] = new SpellInfo("70 Energy Cost, 4.7 Second Duration, 7-12% Reduction to Enemy's Health")
  Spells[6] = new SpellInfo("72 Energy Cost, 5.3 Second Duration, 8-13% Reduction to Enemy's Health")
  Spells[7] = new SpellInfo("73 Energy Cost, 5.6 Second Duration, 9-14% Reduction to Enemy's Health")
  Spells[8] = new SpellInfo("75 Energy Cost, 6.0 Second Duration, 10-15% Reduction to Enemy's Health")
  Skills[5] = new Skill("Plague", 4, Spells, -1, "Afflicts target with a debilitating ailment that reduces their health and quickly spreads to nearby enemies.")

  // Briar Ward
    Spells = [];
  Spells[1] = new SpellInfo("112 Energy Cost, Briar Thicket Attributes: Life Time 30 Seconds, 64 Health, 0 Energy, Briar Thicket Abilities: Thorns (1-3 Piercing Retaliation)")
  Spells[2] = new SpellInfo("116 Energy Cost, Briar Thicket Attributes: Life Time 30 Seconds, 88 Health, 0 Energy, Briar Thicket Abilities: Thorns (1-3 Piercing Retaliation)")
  Spells[3] = new SpellInfo("120 Energy Cost, Briar Thicket Attributes: Life Time 30 Seconds, 112 Health, 0 Energy,Briar Thicket Abilities: Thorns (1-3 Piercing Retaliation)")
  Spells[4] = new SpellInfo("124 Energy Cost, Briar Thicket Attributes: Life Time 30 Seconds, 136 Health, 0 Energy, Briar Thicket Abilities: Thorns (2-5 Piercing Retaliation)")
  Spells[5] = new SpellInfo("128 Energy Cost, Briar Thicket Attributes: Life Time 30 Seconds, 160 Health, 0 Energy, Briar Thicket Abilities: Thorns (2-5 Piercing Retaliation)")
  Spells[6] = new SpellInfo("132 Energy Cost, Briar Thicket Attributes: Life Time 30 Seconds, 184 Health, 0 Energy, Briar Thicket Abilities: Thorns (2-5 Piercing Retaliation)")
  Spells[7] = new SpellInfo("136 Energy Cost, Briar Thicket Attributes: Life Time 30 Seconds, 208 Health, 0 Energy, Briar Thicket Abilities: Thorns (2-5 Piercing Retaliation)")
  Spells[8] = new SpellInfo("140 Energy Cost, Briar Thicket Attributes: Life Time 30 Seconds, 232 Health, 0 Energy, Briar Thicket Abilities: Thorns (3-7 Piercing Retaliation)")
  Spells[9] = new SpellInfo("144 Energy Cost, Briar Thicket Attributes: Life Time 30 Seconds, 256 Health, 0 Energy, Briar Thicket Abilities: Thorns (3-7 Piercing Retaliation)")
  Spells[10] = new SpellInfo("148 Energy Cost, Briar Thicket Attributes: Life Time 30 Seconds, 280 Health, 0 Energy, Briar Thicket Abilities: Thorns (3-7 Piercing Retaliation)")
  Spells[11] = new SpellInfo("152 Energy Cost, Briar Thicket Attributes: Life Time 30 Seconds, 304 Health, 0 Energy, Briar Thicket Abilities: Thorns (3-7 Piercing Retaliation)")
  Spells[12] = new SpellInfo("156 Energy Cost, Briar Thicket Attributes: Life Time 30 Seconds, 328 Health, 0 Energy, Briar Thicket Abilities: Thorns (4-9 Piercing Retaliation)")
  Spells[13] = new SpellInfo("160 Energy Cost, Briar Thicket Attributes: Life Time 30 Seconds, 352 Health, 0 Energy, Briar Thicket Abilities: Thorns (4-9 Piercing Retaliation)")
  Spells[14] = new SpellInfo("164 Energy Cost, Briar Thicket Attributes: Life Time 30 Seconds, 376 Health, 0 Energy, Briar Thicket Abilities: Thorns (4-9 Piercing Retaliation)")
  Spells[15] = new SpellInfo("168 Energy Cost, Briar Thicket Attributes: Life Time 30 Seconds, 400 Health, 0 Energy, Briar Thicket Abilities: Thorns (4-9 Piercing Retaliation)")
  Spells[16] = new SpellInfo("172 Energy Cost, Briar Thicket Attributes: Life Time 30 Seconds, 424 Health, 0 Energy, Briar Thicket Abilities: Thorns (5-11 Piercing Retaliation)")
  Skills[6] = new Skill("Briar Ward", 10, Spells, -1, "A protective grove of briars grows around you that enemies cannot pass through.")

  // Survival Instinct
    Spells = [];
  Spells[1] = new SpellInfo("Activates When Health Drops Below 33%, 15% Damage Absorption, 6 Second Duration, +15% Damage")
  Spells[2] = new SpellInfo("Activates When Health Drops Below 33%, 20% Damage Absorption, 6 Second Duration, +20% Damage")
  Spells[3] = new SpellInfo("Activates When Health Drops Below 33%, 24% Damage Absorption, 6 Second Duration, +25% Damage")
  Spells[4] = new SpellInfo("Activates When Health Drops Below 33%, 30% Damage Absorption, 6 Second Duration, +30% Damage")
  Spells[5] = new SpellInfo("Activates When Health Drops Below 33%, 38% Damage Absorption, 6 Second Duration, +35% Damage")
  Spells[6] = new SpellInfo("Activates When Health Drops Below 33%, 42% Damage Absorption, 6 Second Duration, +40% Damage")
  Spells[7] = new SpellInfo("Activates When Health Drops Below 33%, 47% Damage Absorption, 6 Second Duration, +45% Damage")
  Spells[8] = new SpellInfo("Activates When Health Drops Below 33%, 51% Damage Absorption, 6 Second Duration, +50% Damage")
  Spells[9] = new SpellInfo("Activates When Health Drops Below 33%, 54% Damage Absorption, 6 Second Duration, +55% Damage")
  Spells[10] = new SpellInfo("Activates When Health Drops Below 33%, 60% Damage Absorption, 6 Second Duration, +60% Damage")
  Spells[11] = new SpellInfo("Activates When Health Drops Below 33%, 63% Damage Absorption, 6 Second Duration, +65% Damage")
  Spells[12] = new SpellInfo("Activates When Health Drops Below 33%, 67% Damage Absorption, 6 Second Duration, +70% Damage")
  Spells[13] = new SpellInfo("Activates When Health Drops Below 33%, 70% Damage Absorption, 6 Second Duration, +75% Damage")
  Spells[14] = new SpellInfo("Activates When Health Drops Below 33%, 74% Damage Absorption, 6 Second Duration, +80% Damage")
  Spells[15] = new SpellInfo("Activates When Health Drops Below 33%, 80% Damage Absorption, 6 Second Duration, +85% Damage")
  Spells[16] = new SpellInfo("Activates When Health Drops Below 33%, 80% Damage Absorption, 6 Second Duration, +90% Damage")
  Skills[7] = new Skill("Survival Instinct", 10, Spells, 4, "An instinctual will to live is triggered whenever health is low.")

  // Fatigue
    Spells = [];
  Spells[1] = new SpellInfo("(-3) Damage, 5% Chance of 50% Reduction to Enemy's Health, 15% Reduced Damage for 3 Seconds, -15% Total Speed")
  Spells[2] = new SpellInfo("(-3)-(-5) Damage, 5% Chance of 52% Reduction to Enemy's Health, 18% Reduced Damage for 3 Seconds, -18% Total Speed")
  Spells[3] = new SpellInfo("(-3)-(-6) Damage, 5% Chance of 55% Reduction to Enemy's Health, 20% Reduced Damage for 3 Seconds, -20% Total Speed")
  Spells[4] = new SpellInfo("(-3)-(-8) Damage, 5% Chance of 57% Reduction to Enemy's Health, 23% Reduced Damage for 3 Seconds, -23% Total Speed")
  Spells[5] = new SpellInfo("(-3)-(-9) Damage, 5% Chance of 61% Reduction to Enemy's Health, 28% Reduced Damage for 3 Seconds, -25% Total Speed")
  Spells[6] = new SpellInfo("(-3)-(-11) Damage, 5% Chance of 64% Reduction to Enemy's Health, 31% Reduced Damage for 3 Seconds, -28% Total Speed")
  Spells[7] = new SpellInfo("(-3)-(-12) Damage, 5% Chance of 66% Reduction to Enemy's Health, 34% Reduced Damage for 3 Seconds, -30% Total Speed")
  Spells[8] = new SpellInfo("(-3)-(-15) Damage, 5% Chance of 69% Reduction to Enemy's Health, 36% Reduced Damage for 3 Seconds, -33% Total Speed")
  Skills[8] = new Skill("Fatigue", 10, Spells, 5, "Saps the strength from diseased enemies causing them to move more slowly and fight less effectively.")

  // Tranquility of Water
    Spells = [];
  Spells[1] = new SpellInfo("8% Chance of -50% Energy Cost")
  Spells[2] = new SpellInfo("12% Chance of -50% Energy Cost")
  Spells[3] = new SpellInfo("16% Chance of -50% Energy Cost")
  Spells[4] = new SpellInfo("19% Chance of -50% Energy Cost")
  Spells[5] = new SpellInfo("24% Chance of -50% Energy Cost")
  Spells[6] = new SpellInfo("28% Chance of -50% Energy Cost")
  Skills[9] = new Skill("Tranquility of Water", 16, Spells, 2, "Provides a chance to use skills at 50% reduced energy cost while under the effect of Heart of Oak.")

  // Dissemination
    Spells = [];
  Spells[1] = new SpellInfo("+180 Health Restored")
  Spells[2] = new SpellInfo("+260 Health Restored")
  Spells[3] = new SpellInfo("+350 Health Restored")
  Spells[4] = new SpellInfo("+440 Health Restored")
  Spells[5] = new SpellInfo("+540 Health Restored")
  Spells[6] = new SpellInfo("+640 Health Restored")
  Spells[7] = new SpellInfo("+750 Health Restored")
  Spells[8] = new SpellInfo("+860 Health Restored")
  Spells[9] = new SpellInfo("+980 Health Restored")
  Spells[10] = new SpellInfo("+1110 Health Restored")
  Spells[11] = new SpellInfo("+1250 Health Restored")
  Spells[12] = new SpellInfo("+1400 Health Restored")
  Skills[10] = new Skill("Dissemination", 16, Spells, 0, "Causes regrowth energy to disseminate from the initial target and leap to additional nearby allies.")

  // Stinging Nettle
    Spells = [];
  Spells[1] = new SpellInfo("15 Poison Retaliation Over 6 Seconds")
  Spells[2] = new SpellInfo("24 Poison Retaliation Over 6 Seconds")
  Spells[3] = new SpellInfo("33 Poison Retaliation Over 6 Seconds")
  Spells[4] = new SpellInfo("42 Poison Retaliation Over 6 Seconds")
  Spells[5] = new SpellInfo("51 Poison Retaliation Over 6 Seconds")
  Spells[6] = new SpellInfo("60 Poison Retaliation Over 6 Seconds")
  Spells[7] = new SpellInfo("69 Poison Retaliation Over 6 Seconds")
  Spells[8] = new SpellInfo("78 Poison Retaliation Over 6 Seconds")
  Skills[11] = new Skill("Stinging Nettle", 16, Spells, 6, "Causes enemies who hit the Briar Ward to suffer poisoning.")

  // Sylvan Nymph
    Spells = [];
  Spells[1] = new SpellInfo("200 Energy Cost, 1.0 Meter Radius, Sylvan Nymph Wanderer's Familiar Attributes: 199 Health, 130 Energy, Sylvan Nymph Wanderer's Familiar Ability 1: Bow Attack (9-21 Piercing Damage, 3% Reduction to Enemy's Health), Sylvan Nymph Wanderer's Familiar Ability 2: Dodge Attack (18% Chance to Dodge Attacks, +18% Chance to Avoid Projectiles)")
  Spells[2] = new SpellInfo("204 Energy Cost, 1.0 Meter Radius, Sylvan Nymph Wanderer's Familiar Attributes: 228 Health, 138 Energy, Sylvan Nymph Wanderer's Familiar Ability 1: Bow Attack (12-25 Piercing Damage, 3% Reduction to Enemy's Health), Sylvan Nymph Wanderer's Familiar Ability 2: Dodge Attack (20% Chance to Dodge Attacks, +20% Chance to Avoid Projectiles)")
  Spells[3] = new SpellInfo("209 Energy Cost, 1.0 Meter Radius, Sylvan Nymph Wanderer's Familiar Attributes: 258 Health, 146 Energy, Sylvan Nymph Wanderer's Familiar Ability 1: Bow Attack (15-28 Piercing Damage, 3% Reduction to Enemy's Health), Sylvan Nymph Wanderer's Familiar Ability 2: Dodge Attack (22% Chance to Dodge Attacks, +22% Chance to Avoid Projectiles)")
  Spells[4] = new SpellInfo("213 Energy Cost, 1.0 Meter Radius, Sylvan Nymph Wanderer's Familiar Attributes: 287 Health, 154 Energy, Sylvan Nymph Wanderer's Familiar Ability 1: Bow Attack (18-31 Piercing Damage, 3% Reduction to Enemy's Health), Sylvan Nymph Wanderer's Familiar Ability 2: Dodge Attack (24% Chance to Dodge Attacks, +24% Chance to Avoid Projectiles)")
  Spells[5] = new SpellInfo("217 Energy Cost, 1.0 Meter Radius, Sylvan Nymph Wanderer's Familiar Attributes: 316 Health, 162 Energy, Sylvan Nymph Wanderer's Familiar Ability 1: Bow Attack (21-36 Piercing Damage, 3% Reduction to Enemy's Health), Sylvan Nymph Wanderer's Familiar Ability 2: Dodge Attack (26% Chance to Dodge Attacks, +26% Chance to Avoid Projectiles)")
  Spells[6] = new SpellInfo("222 Energy Cost, 1.0 Meter Radius, Sylvan Nymph Wanderer's Familiar Attributes: 346 Health, 170 Energy, Sylvan Nymph Wanderer's Familiar Ability 1: Bow Attack (24-39 Piercing Damage, 3% Reduction to Enemy's Health), Sylvan Nymph Wanderer's Familiar Ability 2: Dodge Attack (28% Chance to Dodge Attacks, +28% Chance to Avoid Projectiles)")
  Spells[7] = new SpellInfo("226 Energy Cost, 1.0 Meter Radius, Sylvan Nymph Wanderer's Familiar Attributes: 375 Health, 178 Energy, Sylvan Nymph Wanderer's Familiar Ability 1: Bow Attack (27-43 Piercing Damage, 3% Reduction to Enemy's Health), Sylvan Nymph Wanderer's Familiar Ability 2: Dodge Attack (30% Chance to Dodge Attacks, +30% Chance to Avoid Projectiles)")
  Spells[8] = new SpellInfo("230 Energy Cost, 1.0 Meter Radius, Sylvan Nymph Wanderer's Familiar Attributes: 404 Health, 186 Energy, Sylvan Nymph Wanderer's Familiar Ability 1: Bow Attack (30-46 Piercing Damage, 3% Reduction to Enemy's Health), Sylvan Nymph Wanderer's Familiar Ability 2: Dodge Attack (32% Chance to Dodge Attacks, +32% Chance to Avoid Projectiles)")
  Spells[9] = new SpellInfo("235 Energy Cost, 1.0 Meter Radius, Sylvan Nymph Wanderer's Familiar Attributes: 434 Health, 194 Energy, Sylvan Nymph Wanderer's Familiar Ability 1: Bow Attack (33-49 Piercing Damage, 3% Reduction to Enemy's Health), Sylvan Nymph Wanderer's Familiar Ability 2: Dodge Attack (34% Chance to Dodge Attacks, +34% Chance to Avoid Projectiles)")
  Spells[10] = new SpellInfo("239 Energy Cost, 1.0 Meter Radius, Sylvan Nymph Wanderer's Familiar Attributes: 463 Health, 202 Energy, Sylvan Nymph Wanderer's Familiar Ability 1: Bow Attack (36-54 Piercing Damage, 3% Reduction to Enemy's Health), Sylvan Nymph Wanderer's Familiar Ability 2: Dodge Attack (36% Chance to Dodge Attacks, +36% Chance to Avoid Projectiles)")
  Spells[11] = new SpellInfo("243 Energy Cost, 1.0 Meter Radius, Sylvan Nymph Wanderer's Familiar Attributes: 492 Health, 210 Energy, Sylvan Nymph Wanderer's Familiar Ability 1: Bow Attack (39-57 Piercing Damage, 3% Reduction to Enemy's Health), Sylvan Nymph Wanderer's Familiar Ability 2: Dodge Attack (38% Chance to Dodge Attacks, +38% Chance to Avoid Projectiles)")
  Spells[12] = new SpellInfo("248 Energy Cost, 1.0 Meter Radius, Sylvan Nymph Wanderer's Familiar Attributes: 522 Health, 218 Energy, Sylvan Nymph Wanderer's Familiar Ability 1: Bow Attack (42-61 Piercing Damage, 3% Reduction to Enemy's Health), Sylvan Nymph Wanderer's Familiar Ability 2: Dodge Attack (40% Chance to Dodge Attacks, +40% Chance to Avoid Projectiles)")
  Spells[13] = new SpellInfo("252 Energy Cost, 1.0 Meter Radius, Sylvan Nymph Wanderer's Familiar Attributes: 551 Health, 226 Energy, Sylvan Nymph Wanderer's Familiar Ability 1: Bow Attack (45-64 Piercing Damage, 3% Reduction to Enemy's Health), Sylvan Nymph Wanderer's Familiar Ability 2: Dodge Attack (42% Chance to Dodge Attacks, +42% Chance to Avoid Projectiles)")
  Spells[14] = new SpellInfo("256 Energy Cost, 1.0 Meter Radius, Sylvan Nymph Wanderer's Familiar Attributes: 580 Health, 234 Energy, Sylvan Nymph Wanderer's Familiar Ability 1: Bow Attack (48-67 Piercing Damage, 3% Reduction to Enemy's Health), Sylvan Nymph Wanderer's Familiar Ability 2: Dodge Attack (44% Chance to Dodge Attacks, +44% Chance to Avoid Projectiles)")
  Spells[15] = new SpellInfo("261 Energy Cost, 1.0 Meter Radius, Sylvan Nymph Wanderer's Familiar Attributes: 610 Health, 242 Energy, Sylvan Nymph Wanderer's Familiar Ability 1: Bow Attack (51-72 Piercing Damage, 3% Reduction to Enemy's Health), Sylvan Nymph Wanderer's Familiar Ability 2: Dodge Attack (46% Chance to Dodge Attacks, +46% Chance to Avoid Projectiles)")
  Spells[16] = new SpellInfo("265 Energy Cost, 1.0 Meter Radius, Sylvan Nymph Wanderer's Familiar Attributes: 639 Health, 250 Energy, Sylvan Nymph Wanderer's Familiar Ability 1: Bow Attack (54-75 Piercing Damage, 3% Reduction to Enemy's Health), Sylvan Nymph Wanderer's Familiar Ability 2: Dodge Attack (48% Chance to Dodge Attacks, +48% Chance to Avoid Projectiles)")
  Skills[12] = new Skill("Sylvan Nymph", 16, Spells, -1, "Summons a powerful forest Nymph who can bring down enemies with her magical bow and cast enchantments to strengthen allies in battle.")

  // Permanence of Stone
    Spells = [];
  Spells[1] = new SpellInfo("1 Active Energy Cost/Second, 5% Elemental Resistance")
  Spells[2] = new SpellInfo("1 Active Energy Cost/Second, 8% Elemental Resistance")
  Spells[3] = new SpellInfo("1 Active Energy Cost/Second, 10% Elemental Resistance")
  Spells[4] = new SpellInfo("1 Active Energy Cost/Second, 12% Elemental Resistance")
  Spells[5] = new SpellInfo("1 Active Energy Cost/Second, 15% Elemental Resistance")
  Spells[6] = new SpellInfo("1 Active Energy Cost/Second, 18% Elemental Resistance")
  Skills[13] = new Skill("Permanence of Stone", 24, Spells, 2, "Protects allies from the elements, reducing the damage caused by elemental based attacks.")

  // Strength of the Pack
    Spells = [];
  Spells[1] = new SpellInfo("25 Energy Cost, 15 Second Duration, 10.0 Meter Radius, +15% Damage, +1 Energy Regeneration/Second, +15% Total Speed, 4 Armor")
  Spells[2] = new SpellInfo("25 Energy Cost, 15 Second Duration, 10.0 Meter Radius, +20% Damage, +1 Energy Regeneration/Second, +15% Total Speed, 6 Armor")
  Spells[3] = new SpellInfo("25 Energy Cost, 15 Second Duration, 10.0 Meter Radius, +24% Damage, +1 Energy Regeneration/Second, +15% Total Speed, 8 Armor")
  Spells[4] = new SpellInfo("25 Energy Cost, 15 Second Duration, 10.0 Meter Radius, +30% Damage, +1 Energy Regeneration/Second, +15% Total Speed, 10 Armor")
  Spells[5] = new SpellInfo("25 Energy Cost, 15 Second Duration, 10.0 Meter Radius, +34% Damage, +1 Energy Regeneration/Second, +15% Total Speed, 12 Armor")
  Spells[6] = new SpellInfo("25 Energy Cost, 15 Second Duration, 10.0 Meter Radius, +39% Damage, +1 Energy Regeneration/Second, +15% Total Speed, 14 Armor")
  Spells[7] = new SpellInfo("25 Energy Cost, 15 Second Duration, 10.0 Meter Radius, +43% Damage, +1 Energy Regeneration/Second, +15% Total Speed, 16 Armor")
  Spells[8] = new SpellInfo("25 Energy Cost, 15 Second Duration, 10.0 Meter Radius, +49% Damage, +1 Energy Regeneration/Second, +15% Total Speed, 18 Armor")
  Spells[9] = new SpellInfo("25 Energy Cost, 15 Second Duration, 10.0 Meter Radius, +53% Damage, +1 Energy Regeneration/Second, +15% Total Speed, 20 Armor")
  Spells[10] = new SpellInfo("25 Energy Cost, 15 Second Duration, 10.0 Meter Radius, +58% Damage, +1 Energy Regeneration/Second, +15% Total Speed, 22 Armor")
  Spells[11] = new SpellInfo("25 Energy Cost, 15 Second Duration, 10.0 Meter Radius, +62% Damage, +1 Energy Regeneration/Second, +15% Total Speed, 24 Armor")
  Spells[12] = new SpellInfo("25 Energy Cost, 15 Second Duration, 10.0 Meter Radius, +68% Damage, +1 Energy Regeneration/Second, +15% Total Speed, 26 Armor")
  Skills[14] = new Skill("Strength of the Pack", 23, Spells, 7, "The howl of your wolves emboldens the hearts of those who hear it causing them to fight more fiercely.")

  // Overgrowth
    Spells = [];
  Spells[1] = new SpellInfo("78 Damage Absorption, 33% Chance of 1-5 Piercing Retaliation")
  Spells[2] = new SpellInfo("86 Damage Absorption, 33% Chance of 3-7 Piercing Retaliation")
  Spells[3] = new SpellInfo("95 Damage Absorption, 33% Chance of 4-9 Piercing Retaliation")
  Spells[4] = new SpellInfo("103 Damage Absorption, 33% Chance of 6-12 Piercing Retaliation")
  Spells[5] = new SpellInfo("111 Damage Absorption, 33% Chance of 7-14 Piercing Retaliation")
  Spells[6] = new SpellInfo("120 Damage Absorption, 33% Chance of 9-16 Piercing Retaliation")
  Spells[7] = new SpellInfo("128 Damage Absorption, 33% Chance of 10-19 Piercing Retaliation")
  Spells[8] = new SpellInfo("136 Damage Absorption, 33% Chance of 12-21 Piercing Retaliation")
  Spells[9] = new SpellInfo("145 Damage Absorption, 33% Chance of 13-25 Piercing Retaliation")
  Spells[10] = new SpellInfo("153 Damage Absorption, 33% Chance of 15-30 Piercing Retaliation")
  Spells[11] = new SpellInfo("161 Damage Absorption, 33% Chance of 16-31 Piercing Retaliation")
  Spells[12] = new SpellInfo("170 Damage Absorption, 33% Chance of 18-33 Piercing Retaliation")
  Skills[15] = new Skill("Overgrowth", 24, Spells, 12, "Allows the Nymph to create a living shield around allies that absorbs damage and harms enemies that strike it.")

  // Susceptibility
    Spells = [];
  Spells[1] = new SpellInfo("-12% Damage Resistance, -12% Elemental Resistance")
  Spells[2] = new SpellInfo("-15% Damage Resistance, -15% Elemental Resistance")
  Spells[3] = new SpellInfo("-19% Damage Resistance, -19% Elemental Resistance")
  Spells[4] = new SpellInfo("-24% Damage Resistance, -24% Elemental Resistance")
  Spells[5] = new SpellInfo("-27% Damage Resistance, -27% Elemental Resistance")
  Spells[6] = new SpellInfo("-30% Damage Resistance, -30% Elemental Resistance")
  Spells[7] = new SpellInfo("-34% Damage Resistance, -34% Elemental Resistance")
  Spells[8] = new SpellInfo("-39% Damage Resistance, -39% Elemental Resistance")
  Skills[16] = new Skill("Susceptibility", 24, Spells, 5, "Weakens the constitution of adjacent enemies making them more susceptible to poison and damage from the elements.")

  // Refresh
    Spells = [];
  Spells[1] = new SpellInfo("-8.0 Second[s] to Recharge Time, 30 Energy Cost")
  Spells[2] = new SpellInfo("-12.0 Second[s] to Recharge Time, 45 Energy Cost")
  Spells[3] = new SpellInfo("-16.0 Second[s] to Recharge Time, 60 Energy Cost")
  Spells[4] = new SpellInfo("-20.0 Second[s] to Recharge Time, 75 Energy Cost")
  Spells[5] = new SpellInfo("-24.0 Second[s] to Recharge Time, 90 Energy Cost")
  Spells[6] = new SpellInfo("-28.0 Second[s] to Recharge Time, 105 Energy Cost")
  Spells[7] = new SpellInfo("-32.0 Second[s] to Recharge Time, 120 Energy Cost")
  Spells[8] = new SpellInfo("-36.0 Second[s] to Recharge Time, 135 Energy Cost")
  Spells[9] = new SpellInfo("-40.0 Second[s] to Recharge Time, 150 Energy Cost")
  Spells[10] = new SpellInfo("-44.0 Second[s] to Recharge Time, 165 Energy Cost")
  Spells[11] = new SpellInfo("-48.0 Second[s] to Recharge Time, 180 Energy Cost")
  Spells[12] = new SpellInfo("-52.0 Second[s] to Recharge Time, 192 Energy Cost")
  Skills[17] = new Skill("Refresh", 32, Spells, -1, "Subtracts time from recharging skills allows you to use them more frequently.")

  // Sanctuary
    Spells = [];
  Spells[1] = new SpellInfo("10% Damage Absorption, 18 Second Duration, 3.0 Meter Radius, +50% Health Regeneration, +50% Energy Regeneration")
  Spells[2] = new SpellInfo("12% Damage Absorption, 18 Second Duration, 3.0 Meter Radius, +68% Health Regeneration, +68% Energy Regeneration")
  Spells[3] = new SpellInfo("14% Damage Absorption, 18 Second Duration, 3.0 Meter Radius, +86% Health Regeneration, +86% Energy Regeneration")
  Spells[4] = new SpellInfo("16% Damage Absorption, 18 Second Duration, 3.0 Meter Radius, +104% Health Regeneration, +104% Energy Regeneration")
  Spells[5] = new SpellInfo("28% Damage Absorption, 18 Second Duration, 3.0 Meter Radius, +122% Health Regeneration, +122% Energy Regeneration")
  Spells[6] = new SpellInfo("20% Damage Absorption, 18 Second Duration, 3.0 Meter Radius, +140% Health Regeneration, +140% Energy Regeneration")
  Spells[7] = new SpellInfo("22% Damage Absorption, 18 Second Duration, 3.0 Meter Radius, +158% Health Regeneration, +158% Energy Regeneration")
  Spells[8] = new SpellInfo("24% Damage Absorption, 18 Second Duration, 3.0 Meter Radius, +176% Health Regeneration, +176% Energy Regeneration")
  Skills[18] = new Skill("Sanctuary", 32, Spells, 11, "The power of the grove revitalizes those within and reduces the energy consumed by skill use.")

  // Nature's Wrath
    Spells = [];
  Spells[1] = new SpellInfo("8 Energy Cost, 1.5 Meter Radius, 33% Chance to Pass Through Enemies, 33-58 Elemental Damage")
  Spells[2] = new SpellInfo("8 Energy Cost, 1.5 Meter Radius, 33% Chance to Pass Through Enemies, 38-66 Elemental Damage")
  Spells[3] = new SpellInfo("9 Energy Cost, 1.5 Meter Radius, 33% Chance to Pass Through Enemies, 42-74 Elemental Damage")
  Spells[4] = new SpellInfo("9 Energy Cost, 1.5 Meter Radius, 33% Chance to Pass Through Enemies, 48-82 Elemental Damage")
  Spells[5] = new SpellInfo("10 Energy Cost, 1.5 Meter Radius, 33% Chance to Pass Through Enemies, 52-91 Elemental Damage")
  Spells[6] = new SpellInfo("10 Energy Cost, 1.5 Meter Radius, 33% Chance to Pass Through Enemies, 57-100 Elemental Damage")
  Spells[7] = new SpellInfo("11 Energy Cost, 1.5 Meter Radius, 33% Chance to Pass Through Enemies, 61-109 Elemental Damage")
  Spells[8] = new SpellInfo("11 Energy Cost, 1.5 Meter Radius, 33% Chance to Pass Through Enemies, 67-118 Elemental Damage")
  Spells[9] = new SpellInfo("12 Energy Cost, 1.5 Meter Radius, 33% Chance to Pass Through Enemies, 71-127 Elemental Damage")
  Spells[10] = new SpellInfo("12 Energy Cost, 1.5 Meter Radius, 33% Chance to Pass Through Enemies, 76-137 Elemental Damage")
  Spells[11] = new SpellInfo("13 Energy Cost, 1.5 Meter Radius, 33% Chance to Pass Through Enemies, 80-148 Elemental Damage")
  Spells[12] = new SpellInfo("13 Energy Cost, 1.5 Meter Radius, 33% Chance to Pass Through Enemies, 88-160 Elemental Damage")
  Skills[19] = new Skill("Nature's Wrath", 32, Spells, 15, "Imbues the Nymph's attacks with the power of the elements.")

  // set the mastery array
  Mastery[4] = new setmastery(Skills, Attributes)

  // testing
  //alert(Mastery[2].Skills[19].spells[4].spellinfo)
  //alert(Skills[1][0].desc)

}