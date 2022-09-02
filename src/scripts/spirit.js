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
  this.masteryid = 2
  this.masteryname = "Spirit"
  this.Attributes = Attributes
}

window.loadSpirit = loadSpirit;
function loadSpirit() {

  // set attributes
  if (!AttributesBase[0]) { // base att's are only set one time
    AttributesBase[0] = new Attribute(300, 300, 50, 50, 50) // base stats for characters
  }
  Attributes = new Array();
  Attributes[1] = new Attribute(20, 8, 0, 1, 3)
  Attributes[2] = new Attribute(40, 16, 0, 3, 6)
  Attributes[3] = new Attribute(60, 24, 0, 4, 9)
  Attributes[4] = new Attribute(80, 32, 0, 6, 12)
  Attributes[5] = new Attribute(100, 40, 0, 7, 15)
  Attributes[6] = new Attribute(120, 48, 0, 9, 18)
  Attributes[7] = new Attribute(140, 56, 0, 10, 21)
  Attributes[8] = new Attribute(160, 64, 0, 12, 24)
  Attributes[9] = new Attribute(180, 72, 0, 13, 27)
  Attributes[10] = new Attribute(200, 80, 0, 15, 30)
  Attributes[11] = new Attribute(220, 88, 0, 16, 33)
  Attributes[12] = new Attribute(240, 96, 0, 18, 36)
  Attributes[13] = new Attribute(260, 104, 0, 19, 39)
  Attributes[14] = new Attribute(280, 112, 0, 21, 42)
  Attributes[15] = new Attribute(300, 120, 0, 22, 45)
  Attributes[16] = new Attribute(320, 128, 0, 24, 48)
  Attributes[17] = new Attribute(340, 136, 0, 25, 51)
  Attributes[18] = new Attribute(360, 144, 0, 27, 54)
  Attributes[19] = new Attribute(380, 152, 0, 28, 57)
  Attributes[20] = new Attribute(400, 160, 0, 30, 60)
  Attributes[21] = new Attribute(420, 168, 0, 31, 63)
  Attributes[22] = new Attribute(440, 176, 0, 33, 66)
  Attributes[23] = new Attribute(460, 184, 0, 34, 69)
  Attributes[24] = new Attribute(480, 192, 0, 36, 72)
  Attributes[25] = new Attribute(500, 200, 0, 37, 75)
  Attributes[26] = new Attribute(520, 208, 0, 39, 78)
  Attributes[27] = new Attribute(540, 216, 0, 40, 81)
  Attributes[28] = new Attribute(560, 224, 0, 42, 84)
  Attributes[29] = new Attribute(580, 232, 0, 43, 87)
  Attributes[30] = new Attribute(600, 240, 0, 45, 90)
  Attributes[31] = new Attribute(620, 248, 0, 46, 93)
  Attributes[32] = new Attribute(640, 256, 0, 48, 96)


  Skills = new Array();

  // Deathchill Aura
  Spells = new Array();
  Spells[1] = new SpellInfo("1 Active Energy Cost/Second, 1 Second Duration, 2.5 Meter Radius, 1-3% Reduction to Enemy's Health, -13% Total Speed")
  Spells[2] = new SpellInfo("1 Active Energy Cost/Second, 1 Second Duration, 2.7 Meter Radius, 1-4% Reduction to Enemy's Health, -15% Total Speed")
  Spells[3] = new SpellInfo("1 Active Energy Cost/Second, 1 Second Duration, 3.0 Meter Radius, 2-5% Reduction to Enemy's Health, -17% Total Speed")
  Spells[4] = new SpellInfo("1 Active Energy Cost/Second, 1 Second Duration, 3.2 Meter Radius, 2-6% Reduction to Enemy's Health, -19% Total Speed")
  Spells[5] = new SpellInfo("1 Active Energy Cost/Second, 1 Second Duration, 3.4 Meter Radius, 3-7% Reduction to Enemy's Health, -21% Total Speed")
  Spells[6] = new SpellInfo("1 Active Energy Cost/Second, 1 Second Duration, 3.7 Meter Radius, 3-9% Reduction to Enemy's Health, -25% Total Speed")
  Skills[0] = new Skill("Deathchill Aura", 1, Spells, -1, "A deathly chill radiates from the character slowing the attack and movement of enemies as it diminishes their life.")

  // Life Drain
  Spells = new Array();
  Spells[1] = new SpellInfo("54 Energy Cost, 49 Vitality Damage, 150% of Attack Damage Converted to Health")
  Spells[2] = new SpellInfo("58 Energy Cost, 53 Vitality Damage, 160% of Attack Damage Converted to Health")
  Spells[3] = new SpellInfo("64 Energy Cost, 57 Vitality Damage, 170% of Attack Damage Converted to Health")
  Spells[4] = new SpellInfo("68 Energy Cost, 61 Vitality Damage, 180% of Attack Damage Converted to Health")
  Spells[5] = new SpellInfo("72 Energy Cost, 65 Vitality Damage, 190% of Attack Damage Converted to Health")
  Spells[6] = new SpellInfo("78 Energy Cost, 69 Vitality Damage, 200% of Attack Damage Converted to Health")
  Spells[7] = new SpellInfo("82 Energy Cost, 73 Vitality Damage, 210% of Attack Damage Converted to Health")
  Spells[8] = new SpellInfo("86 Energy Cost, 77 Vitality Damage, 220% of Attack Damage Converted to Health")
  Spells[9] = new SpellInfo("92 Energy Cost, 81 Vitality Damage, 230% of Attack Damage Converted to Health")
  Spells[10] = new SpellInfo("96 Energy Cost, 87 Vitality Damage, 240% of Attack Damage Converted to Health")
  Spells[11] = new SpellInfo("100 Energy Cost, 93 Vitality Damage, 250% of Attack Damage Converted to Health")
  Spells[12] = new SpellInfo("106 Energy Cost, 99 Vitality Damage, 260% of Attack Damage Converted to Health")
  Skills[1] = new Skill("Life Drain", 1, Spells, -1, "Leeches life from an enemy to replenish your own.")

  // Ternion Attack
  Spells = new Array();
  Spells[1] = new SpellInfo("Launches 3 Projectiles, 30 Energy Cost, -75% Elemental Damage")
  Spells[2] = new SpellInfo("Launches 3 Projectiles, 31 Energy Cost, -70% Elemental Damage")
  Spells[3] = new SpellInfo("Launches 3 Projectiles, 31 Energy Cost, -65% Elemental Damage")
  Spells[4] = new SpellInfo("Launches 3 Projectiles, 32 Energy Cost, -60% Elemental Damage")
  Spells[5] = new SpellInfo("Launches 3 Projectiles, 32 Energy Cost, -55% Elemental Damage")
  Spells[6] = new SpellInfo("Launches 3 Projectiles, 33 Energy Cost, -50% Elemental Damage")
  Spells[7] = new SpellInfo("Launches 3 Projectiles, 33 Energy Cost, -45% Elemental Damage")
  Spells[8] = new SpellInfo("Launches 3 Projectiles, 34 Energy Cost, -40% Elemental Damage")
  Spells[9] = new SpellInfo("Launches 3 Projectiles, 34 Energy Cost, -35% Elemental Damage")
  Spells[10] = new SpellInfo("Launches 3 Projectiles, 35 Energy Cost, -30% Elemental Damage")
  Spells[11] = new SpellInfo("Launches 3 Projectiles, 35 Energy Cost, -25% Elemental Damage")
  Spells[12] = new SpellInfo("Launches 3 Projectiles, 36 Energy Cost, -20% Elemental Damage")
  Skills[2] = new Skill("Ternion Attack", 4, Spells, -1, "This powerful wizard's trick allows you to triple the attack of your staff by channeling magical energy into it. Initially each hit is not as powerful as a normal attack but the effectiveness increases every level.")

  // Ravages of Time
  Spells = new Array();
  Spells[1] = new SpellInfo("1 Active Energy Cost/Second, -11% Damage, -11% Pierce Damage, -11% Armor Absorption")
  Spells[2] = new SpellInfo("1 Active Energy Cost/Second, -15% Damage, -15% Pierce Damage, -15% Armor Absorption")
  Spells[3] = new SpellInfo("1 Active Energy Cost/Second, -18% Damage, -18% Pierce Damage, -18% Armor Absorption")
  Spells[4] = new SpellInfo("1 Active Energy Cost/Second, -22% Damage, -22% Pierce Damage, -22% Armor Absorption")
  Spells[5] = new SpellInfo("1 Active Energy Cost/Second, -25% Damage, -25% Pierce Damage, -25% Armor Absorption")
  Spells[6] = new SpellInfo("1 Active Energy Cost/Second, -29% Damage, -29% Pierce Damage, -29% Armor Absorption")
  Spells[7] = new SpellInfo("1 Active Energy Cost/Second, -32% Damage, -32% Pierce Damage, -32% Armor Absorption")
  Spells[8] = new SpellInfo("1 Active Energy Cost/Second, -36% Damage, -36% Pierce Damage, -36% Armor Absorption")
  Skills[3] = new Skill("Ravages of Time", 4, Spells, 0, "Accelerates the effects of time on adjacent enemies' equipment causing weapons to dull and armor to crumble.")

  // Vision of Death
  Spells = new Array();
  Spells[1] = new SpellInfo("55 Energy Cost, 3.0 Meter Radius, 3 Reduced Damage for 3 Seconds, 66% Chance to Fumble Attacks for 11 Seconds, 3.0 Seconds of Fear")
  Spells[2] = new SpellInfo("60 Energy Cost, 3.0 Meter Radius, 5 Reduced Damage for 3.6 Seconds, 66% Chance to Fumble Attacks for 11 Seconds, 3.5 Seconds of Fear")
  Spells[3] = new SpellInfo("65 Energy Cost, 3.0 Meter Radius, 7 Reduced Damage for 4.2 Seconds, 66% Chance to Fumble Attacks for 11 Seconds, 4.1 Seconds of Fear")
  Spells[4] = new SpellInfo("70 Energy Cost, 3.0 Meter Radius, 9 Reduced Damage for 4.8 Seconds, 66% Chance to Fumble Attacks for 11 Seconds, 4.6 Seconds of Fear")
  Spells[5] = new SpellInfo("75 Energy Cost, 3.0 Meter Radius, 11 Reduced Damage for 5.4 Seconds, 66% Chance to Fumble Attacks for 11 Seconds, 5.2 Seconds of Fear")
  Spells[6] = new SpellInfo("80 Energy Cost, 3.0 Meter Radius, 13 Reduced Damage for 6 Seconds, 66% Chance to Fumble Attacks for 11 Seconds, 5.9 Seconds of Fear")
  Skills[4] = new Skill("Vision of Death", 4, Spells, -1, "Assaults the minds of surrounding enemies with images of their own death causing the weak-hearted to flee in horror and more resolute foes to fight less effectively.")

  // Spirit Ward
  Spells = new Array();
  Spells[1] = new SpellInfo("1 Active Energy Cost/Second, 6.0 Meter Radius, +3 Damage to Undead, +15% Less Damage from Undead")
  Spells[2] = new SpellInfo("1 Active Energy Cost/Second, 6.0 Meter Radius, +5 Damage to Undead, +18% Less Damage from Undead")
  Spells[3] = new SpellInfo("1 Active Energy Cost/Second, 6.0 Meter Radius, +7 Damage to Undead, +21% Less Damage from Undead")
  Spells[4] = new SpellInfo("1 Active Energy Cost/Second, 6.0 Meter Radius, +9 Damage to Undead, +25% Less Damage from Undead")
  Spells[5] = new SpellInfo("1 Active Energy Cost/Second, 6.0 Meter Radius, +11 Damage to Undead, +28% Less Damage from Undead")
  Spells[6] = new SpellInfo("2 Active Energy Cost/Second, 6.0 Meter Radius, +13 Damage to Undead, +31% Less Damage from Undead")
  Spells[7] = new SpellInfo("2 Active Energy Cost/Second, 6.0 Meter Radius, +15 Damage to Undead, +35% Less Damage from Undead")
  Spells[8] = new SpellInfo("2 Active Energy Cost/Second, 6.0 Meter Radius, +17 Damage to Undead, +39% Less Damage from Undead")
  Skills[5] = new Skill("Spirit Ward", 4, Spells, -1, "Casts a protective ward that will reduce the damage of undead attacks on the player and nearby allies.")

  // Cascade
  Spells = new Array();
  Spells[1] = new SpellInfo("35 Vitality Damage, 150% of Attack Damage Converted to Health")
  Spells[2] = new SpellInfo("39 Vitality Damage, 160% of Attack Damage Converted to Health")
  Spells[3] = new SpellInfo("44 Vitality Damage, 170% of Attack Damage Converted to Health")
  Spells[4] = new SpellInfo("48 Vitality Damage, 180% of Attack Damage Converted to Health")
  Spells[5] = new SpellInfo("52 Vitality Damage, 190% of Attack Damage Converted to Health")
  Spells[6] = new SpellInfo("57 Vitality Damage, 200% of Attack Damage Converted to Health")
  Spells[7] = new SpellInfo("63 Vitality Damage, 210% of Attack Damage Converted to Health")
  Spells[8] = new SpellInfo("71 Vitality Damage, 220% of Attack Damage Converted to Health")
  Spells[9] = new SpellInfo("79 Vitality Damage, 230% of Attack Damage Converted to Health")
  Spells[10] = new SpellInfo("88 Vitality Damage, 240% of Attack Damage Converted to Health")
  Skills[6] = new Skill("Cascade", 10, Spells, 1, "Causes Life Drain to blast through the primary target and hit multiple enemies.")

  // Dark Covenant
  Spells = new Array();
  Spells[1] = new SpellInfo("18 Active Health Cost/Second, 10 Second Duration, 15.0 Meter Radius, +5 Energy Regeneration/Second, +10% Run Speed")
  Spells[2] = new SpellInfo("18 Active Health Cost/Second, 12 Second Duration, 15.0 Meter Radius, +7 Energy Regeneration/Second, +10% Run Speed")
  Spells[3] = new SpellInfo("18 Active Health Cost/Second, 14 Second Duration, 15.0 Meter Radius, +9 Energy Regeneration/Second, +10% Run Speed")
  Spells[4] = new SpellInfo("18 Active Health Cost/Second, 16 Second Duration, 15.0 Meter Radius, +11 Energy Regeneration/Second, +10% Run Speed")
  Spells[5] = new SpellInfo("18 Active Health Cost/Second, 18 Second Duration, 15.0 Meter Radius, +13 Energy Regeneration/Second, +10% Run Speed")
  Spells[6] = new SpellInfo("18 Active Health Cost/Second, 21 Second Duration, 15.0 Meter Radius, +15 Energy Regeneration/Second, +10% Run Speed")
  Skills[7] = new Skill("Dark Covenant", 10, Spells, -1, "Mysterious otherworldly entities offer great power to Spirit Masters who can commune with them. The cost, however, is measured in life.")

  // Summon Liche King
  Spells = new Array();
  Spells[1] = new SpellInfo("250 Energy Cost, Liche King Enslaved Soul Attributes: 370 Health, 307 Energy, Liche King Enslaved Soul Ability: Spectral Bolt (13 Elemental Damage, 3% Reduction to Enemy's Health, 19 Vitality Damage, 15% of Attack Damage Converted to Health)")
  Spells[2] = new SpellInfo("258 Energy Cost, Liche King Enslaved Soul Attributes: 391 Health, 324 Energy, Liche King Enslaved Soul Ability: Spectral Bolt (16 Elemental Damage, 3% Reduction to Enemy's Health, 23 Vitality Damage, 15% of Attack Damage Converted to Health)")
  Spells[3] = new SpellInfo("266 Energy Cost, Liche King Enslaved Soul Attributes: 411 Health, 341 Energy, Liche King Enslaved Soul Ability: Spectral Bolt (20 Elemental Damage, 4% Reduction to Enemy's Health, 27 Vitality Damage, 15% of Attack Damage Converted to Health)")
  Spells[4] = new SpellInfo("274 Energy Cost, Liche King Enslaved Soul Attributes: 430 Health, 358 Energy, Liche King Enslaved Soul Ability: Spectral Bolt (24 Elemental Damage, 4% Reduction to Enemy's Health, 30 Vitality Damage, 15% of Attack Damage Converted to Health)")
  Spells[5] = new SpellInfo("282 Energy Cost, Liche King Enslaved Soul Attributes: 451 Health, 375 Energy, Liche King Enslaved Soul Ability 1: Spectral Bolt (28 Elemental Damage, 6% Reduction to Enemy's Health, 34 Vitality Damage, 15% of Attack Damage Converted to Health), Liche King Enslaved Soul Ability 2: Soul Blight (32 Energy Cost, 6.0 Meter Radius, 33% Reduction to Enemy's Health, 33% of Attack Damage Converted to Health, 15 Reduced Resistance for 8 Seconds)")
  Spells[6] = new SpellInfo("290 Energy Cost, Liche King Enslaved Soul Attributes: 471 Health, 392 Energy, Liche King Enslaved Soul Ability 1: Spectral Bolt (31 Elemental Damage, 6% Reduction to Enemy's Health, 38 Vitality Damage, 15% of Attack Damage Converted to Health), Liche King Enslaved Soul Ability 2: Soul Blight (33 Energy Cost, 6.0 Meter Radius, 33% Reduction to Enemy's Health, 33% of Attack Damage Converted to Health, 18 Reduced Resistance for 8 Seconds)")
  Spells[7] = new SpellInfo("298 Energy Cost, Liche King Enslaved Soul Attributes: 490 Health, 409 Energy, Liche King Enslaved Soul Ability 1: Spectral Bolt (35 Elemental Damage, 6% Reduction to Enemy's Health, 41 Vitality Damage, 15% of Attack Damage Converted to Health), Liche King Enslaved Soul Ability 2: Soul Blight (35 Energy Cost, 6.0 Meter Radius, 33% Reduction to Enemy's Health, 33% of Attack Damage Converted to Health, 22 Reduced Resistance for 8 Seconds)")
  Spells[8] = new SpellInfo("306 Energy Cost, Liche King Enslaved Soul Attributes: 511 Health, 426 Energy, Liche King Enslaved Soul Ability 1: Spectral Bolt (39 Elemental Damage, 7% Reduction to Enemy's Health, 45 Vitality Damage, 15% of Attack Damage Converted to Health), Liche King Enslaved Soul Ability 2: Soul Blight (36 Energy Cost, 6.0 Meter Radius, 33% Reduction to Enemy's Health, 33% of Attack Damage Converted to Health, 26 Reduced Resistance for 8 Seconds)")
  Spells[9] = new SpellInfo("314 Energy Cost, Liche King Enslaved Soul Attributes: 531 Health, 443 Energy, Liche King Enslaved Soul Ability 1: Spectral Bolt (43 Elemental Damage, 7% Reduction to Enemy's Health, 49 Vitality Damage, 15% of Attack Damage Converted to Health), Liche King Enslaved Soul Ability 2: Soul Blight (38 Energy Cost, 6.0 Meter Radius, 33% Reduction to Enemy's Health, 33% of Attack Damage Converted to Health, 30 Reduced Resistance for 8 Seconds)")
  Spells[10] = new SpellInfo("322 Energy Cost, Liche King Enslaved Soul Attributes: 550 Health, 460 Energy, Liche King Enslaved Soul Ability 1: Spectral Bolt (46 Elemental Damage, 9% Reduction to Enemy's Health, 52 Vitality Damage, 15% of Attack Damage Converted to Health), Liche King Enslaved Soul Ability 2: Soul Blight (39 Energy Cost, 6.0 Meter Radius, 33% Reduction to Enemy's Health, 33% of Attack Damage Converted to Health, 34 Reduced Resistance for 8 Seconds)")
  Spells[11] = new SpellInfo("330 Energy Cost, Liche King Enslaved Soul Attributes: 571 Health, 477 Energy, Liche King Enslaved Soul Ability 1: Spectral Bolt (50 Elemental Damage, 9% Reduction to Enemy's Health, 56 Vitality Damage, 15% of Attack Damage Converted to Health), Liche King Enslaved Soul Ability 2: Soul Blight (41 Energy Cost, 6.0 Meter Radius, 33% Reduction to Enemy's Health, 33% of Attack Damage Converted to Health, 38 Reduced Resistance for 8 Seconds)")
  Spells[12] = new SpellInfo("338 Energy Cost, Liche King Enslaved Soul Attributes: 591 Health, 494 Energy, Liche King Enslaved Soul Ability 1: Spectral Bolt (54 Elemental Damage, 9% Reduction to Enemy's Health, 60 Vitality Damage, 15% of Attack Damage Converted to Health), Liche King Enslaved Soul Ability 2: Soul Blight (42 Energy Cost, 6.0 Meter Radius, 33% Reduction to Enemy's Health, 33% of Attack Damage Converted to Health, 42 Reduced Resistance for 8 Seconds)")
  Spells[13] = new SpellInfo("346 Energy Cost, Liche King Enslaved Soul Attributes: 610 Health, 511 Energy, Liche King Enslaved Soul Ability 1: Spectral Bolt (58 Elemental Damage, 10% Reduction to Enemy's Health, 63 Vitality Damage, 15% of Attack Damage Converted to Health), Liche King Enslaved Soul Ability 2: Soul Blight (44 Energy Cost, 6.0 Meter Radius, 33% Reduction to Enemy's Health, 33% of Attack Damage Converted to Health, 46 Reduced Resistance for 8 Seconds)")
  Spells[14] = new SpellInfo("354 Energy Cost, Liche King Enslaved Soul Attributes: 631 Health, 528 Energy, Liche King Enslaved Soul Ability 1: Spectral Bolt (61 Elemental Damage, 10% Reduction to Enemy's Health, 67 Vitality Damage, 15% of Attack Damage Converted to Health), Liche King Enslaved Soul Ability 2: Soul Blight (45 Energy Cost, 6.0 Meter Radius, 33% Reduction to Enemy's Health, 33% of Attack Damage Converted to Health, 50 Reduced Resistance for 8 Seconds)")
  Spells[15] = new SpellInfo("362 Energy Cost, Liche King Enslaved Soul Attributes: 651 Health, 545 Energy, Liche King Enslaved Soul Ability 1: Spectral Bolt (65 Elemental Damage, 12% Reduction to Enemy's Health, 71 Vitality Damage, 15% of Attack Damage Converted to Health), Liche King Enslaved Soul Ability 2: Soul Blight (47 Energy Cost, 6.0 Meter Radius, 33% Reduction to Enemy's Health, 33% of Attack Damage Converted to Health, 54 Reduced Resistance for 8 Seconds)")
  Spells[16] = new SpellInfo("362 Energy Cost, Liche King Enslaved Soul Attributes: 670 Health, 562 Energy, Liche King Enslaved Soul Ability 1: Spectral Bolt (70 Elemental Damage, 12% Reduction to Enemy's Health, 71 Vitality Damage, 15% of Attack Damage Converted to Health), Liche King Enslaved Soul Ability 2: Soul Blight (48 Energy Cost, 6.0 Meter Radius, 33% Reduction to Enemy's Health, 33% of Attack Damage Converted to Health, 58 Reduced Resistance for 8 Seconds)")
  Skills[8] = new Skill("Summon Liche King", 10, Spells, -1, "In ages past, powerful sorcerers learned how to cheat Hades and persist as undead liches long after death had robbed their bodies of life. A dangerous practice of Theurgists is to bind the souls of these ancient liches to their will, thus acquiring their powers.")

  // Spirit Bane
  Spells = new Array();
  Spells[1] = new SpellInfo("1 Active Energy Cost/Second, +33% Damage to Undead, +9 Damage to Undead")
  Spells[2] = new SpellInfo("1 Active Energy Cost/Second, +37% Damage to Undead, +13 Damage to Undead")
  Spells[3] = new SpellInfo("1 Active Energy Cost/Second, +42% Damage to Undead, +17 Damage to Undead")
  Spells[4] = new SpellInfo("1 Active Energy Cost/Second, +46% Damage to Undead, +21 Damage to Undead")
  Spells[5] = new SpellInfo("1 Active Energy Cost/Second, +50% Damage to Undead, +25 Damage to Undead")
  Spells[6] = new SpellInfo("1 Active Energy Cost/Second, +55% Damage to Undead, +29 Damage to Undead")
  Skills[9] = new Skill("Spirit Bane", 10, Spells, 5, "Adds damage against undead to the attacks of those under the effect of Spirit Ward.")

  // Arcane Lore
  Spells = new Array();
  Spells[1] = new SpellInfo("4 Energy Cost, 1 Meter Radius, +10% Increase in Projectile Speed")
  Spells[2] = new SpellInfo("4 Energy Cost, 1.2 Meter Radius, +18% Increase in Projectile Speed")
  Spells[3] = new SpellInfo("4 Energy Cost, 1.4 Meter Radius, +26% Increase in Projectile Speed")
  Spells[4] = new SpellInfo("4 Energy Cost, 1.6 Meter Radius, +34% Increase in Projectile Speed")
  Spells[5] = new SpellInfo("4 Energy Cost, 1.7 Meter Radius, +42% Increase in Projectile Speed")
  Spells[6] = new SpellInfo("4 Energy Cost, 1.9 Meter Radius, +50% Increase in Projectile Speed")
  Skills[10] = new Skill("Arcane Lore", 16, Spells, 2, "The magic practitioners of older civilizations devised many insidious techniques to bolster the destructive capabilities of their magical staves. Knowledge of these methods will unlock the true power of your staff attacks.")

  // Necrosis
  Spells = new Array();
  Spells[1] = new SpellInfo("1 Active Energy Cost/Second, -23% Bleeding Resistance, -23% Vitality Damage Resistance, -23% Life Leech Resistance")
  Spells[2] = new SpellInfo("1 Active Energy Cost/Second, -32% Bleeding Resistance, -32% Vitality Damage Resistance, -32% Life Leech Resistance")
  Spells[3] = new SpellInfo("1 Active Energy Cost/Second, -39% Bleeding Resistance, -39% Vitality Damage Resistance, -39% Life Leech Resistance")
  Spells[4] = new SpellInfo("1 Active Energy Cost/Second, -48% Bleeding Resistance, -48% Vitality Damage Resistance, -48% Life Leech Resistance")
  Spells[5] = new SpellInfo("1 Active Energy Cost/Second, -56% Bleeding Resistance, -56% Vitality Damage Resistance, -56% Life Leech Resistance")
  Spells[6] = new SpellInfo("1 Active Energy Cost/Second, -65% Bleeding Resistance, -65% Vitality Damage Resistance, -65% Life Leech Resistance")
  Spells[7] = new SpellInfo("1 Active Energy Cost/Second, -72% Bleeding Resistance, -72% Vitality Damage Resistance, -72% Life Leech Resistance")
  Spells[8] = new SpellInfo("1 Active Energy Cost/Second, -81% Bleeding Resistance, -81% Vitality Damage Resistance, -81% Life Leech Resistance")
  Skills[11] = new Skill("Necrosis", 16, Spells, 0, "Weakens the constitution of adjacent enemies making them more susceptible to attacks that directly damage their life such as vitality damage and life leeching.")

  // Enslave Spirit
  Spells = new Array();
  Spells[1] = new SpellInfo("90 Energy Cost, 36-48 Seconds of Mind Control")
  Spells[2] = new SpellInfo("92 Energy Cost, 40-54 Seconds of Mind Control")
  Spells[3] = new SpellInfo("94 Energy Cost, 44-60 Seconds of Mind Control")
  Spells[4] = new SpellInfo("96 Energy Cost, 48-66 Seconds of Mind Control")
  Spells[5] = new SpellInfo("98 Energy Cost, 52-72 Seconds of Mind Control")
  Spells[6] = new SpellInfo("100 Energy Cost, 56-78 Seconds of Mind Control")
  Spells[7] = new SpellInfo("102 Energy Cost, 60-84 Seconds of Mind Control")
  Spells[8] = new SpellInfo("104 Energy Cost, 64-90 Seconds of Mind Control")
  Spells[9] = new SpellInfo("106 Energy Cost, 68-96 Seconds of Mind Control")
  Spells[10] = new SpellInfo("106 Energy Cost, 68-96 Seconds of Mind Control")
  Spells[11] = new SpellInfo("108 Energy Cost, 72-102 Seconds of Mind Control")
  Spells[12] = new SpellInfo("110 Energy Cost, 76-108 Seconds of Mind Control")
  Skills[12] = new Skill("Enslave Spirit", 16, Spells, -1, "Slip through the barriers of your enemies' consciousness and dominate their mind, binding them to your will. While enslaved, your enemy will be forced to obey your commands, but eventually they will regain control of their mind and turn against you.")

  // Death Nova
  Spells = new Array();
  Spells[1] = new SpellInfo("60 Energy Cost, 6.0 Meter Radius, 11% Reduction to Enemy's Health, 33 Vitality Damage, 50% of Attack Damage Converted to Health")
  Spells[2] = new SpellInfo("62 Energy Cost, 6.0 Meter Radius, 13% Reduction to Enemy's Health, 42 Vitality Damage, 50% of Attack Damage Converted to Health")
  Spells[3] = new SpellInfo("63 Energy Cost, 6.0 Meter Radius, 15% Reduction to Enemy's Health, 51 Vitality Damage, 50% of Attack Damage Converted to Health")
  Spells[4] = new SpellInfo("66 Energy Cost, 6.0 Meter Radius, 17% Reduction to Enemy's Health, 63 Vitality Damage, 50% of Attack Damage Converted to Health")
  Spells[5] = new SpellInfo("67 Energy Cost, 6.0 Meter Radius, 19% Reduction to Enemy's Health, 73 Vitality Damage, 50% of Attack Damage Converted to Health")
  Spells[6] = new SpellInfo("69 Energy Cost, 6.0 Meter Radius, 21% Reduction to Enemy's Health, 84 Vitality Damage, 50% of Attack Damage Converted to Health")
  Spells[7] = new SpellInfo("71 Energy Cost, 6.0 Meter Radius, 23% Reduction to Enemy's Health, 95 Vitality Damage, 50% of Attack Damage Converted to Health")
  Spells[8] = new SpellInfo("73 Energy Cost, 6.0 Meter Radius, 25% Reduction to Enemy's Health, 108 Vitality Damage, 50% of Attack Damage Converted to Health")
  Spells[9] = new SpellInfo("74 Energy Cost, 6.0 Meter Radius, 27% Reduction to Enemy's Health, 119 Vitality Damage, 50% of Attack Damage Converted to Health")
  Spells[10] = new SpellInfo("77 Energy Cost, 6.0 Meter Radius, 29% Reduction to Enemy's Health, 132 Vitality Damage, 50% of Attack Damage Converted to Health")
  Spells[11] = new SpellInfo("78 Energy Cost, 6.0 Meter Radius, 31% Reduction to Enemy's Health, 144 Vitality Damage, 50% of Attack Damage Converted to Health")
  Spells[12] = new SpellInfo("80 Energy Cost, 6.0 Meter Radius, 33% Reduction to Enemy's Health, 158 Vitality Damage, 50% of Attack Damage Converted to Health")
  Skills[13] = new Skill("Death Nova", 16, Spells, 8, "Emits a wave of death that will deplete life from any living being it contacts.")

  // Unearthly Power
  Spells = new Array();
  Spells[1] = new SpellInfo("10 Active Health Cost/Second, +8% Damage, +8% Elemental Damage, +8% Vitality Damage")
  Spells[2] = new SpellInfo("10 Active Health Cost/Second, +14% Damage, +10% Elemental Damage, +14% Vitality Damage")
  Spells[3] = new SpellInfo("11 Active Health Cost/Second, +20% Damage, +14% Elemental Damage, +20% Vitality Damage")
  Spells[4] = new SpellInfo("11 Active Health Cost/Second, +26% Damage, +18% Elemental Damage, +26% Vitality Damage")
  Spells[5] = new SpellInfo("12 Active Health Cost/Second, +32% Damage, +22% Elemental Damage, +32% Vitality Damage")
  Spells[6] = new SpellInfo("12 Active Health Cost/Second, +38% Damage, +26% Elemental Damage, +38% Vitality Damage")
  Spells[7] = new SpellInfo("13 Active Health Cost/Second, +44% Damage, +30% Elemental Damage, +44% Vitality Damage")
  Spells[8] = new SpellInfo("13 Active Health Cost/Second, +50% Damage, +34% Elemental Damage, +50% Vitality Damage")
  Skills[14] = new Skill("Unearthly Power", 24, Spells, 7, "Draw upon even greater otherworldly powers to augment yourself and allies in battle but be wary of the cost exacted from your own vitality.")

  // Wraith Shell
  Spells = new Array();
  Spells[1] = new SpellInfo("50 Energy Cost, 2 Active Energy Cost/Second, 19% Damage Absorption, 33% Damage Resistance")
  Spells[2] = new SpellInfo("50 Energy Cost, 2 Active Energy Cost/Second, 24% Damage Absorption, 33% Damage Resistance")
  Spells[3] = new SpellInfo("50 Energy Cost, 2 Active Energy Cost/Second, 28% Damage Absorption, 33% Damage Resistance")
  Spells[4] = new SpellInfo("50 Energy Cost, 2 Active Energy Cost/Second, 33% Damage Absorption, 33% Damage Resistance")
  Spells[5] = new SpellInfo("50 Energy Cost, 2 Active Energy Cost/Second, 38% Damage Absorption, 33% Damage Resistance")
  Spells[6] = new SpellInfo("50 Energy Cost, 2 Active Energy Cost/Second, 42% Damage Absorption, 33% Damage Resistance")
  Spells[7] = new SpellInfo("50 Energy Cost, 2 Active Energy Cost/Second, 47% Damage Absorption, 33% Damage Resistance")
  Spells[8] = new SpellInfo("50 Energy Cost, 2 Active Energy Cost/Second, 51% Damage Absorption, 33% Damage Resistance")
  Spells[9] = new SpellInfo("50 Energy Cost, 2 Active Energy Cost/Second, 56% Damage Absorption, 33% Damage Resistance")
  Spells[10] = new SpellInfo("50 Energy Cost, 2 Active Energy Cost/Second, 61% Damage Absorption, 33% Damage Resistance")
  Spells[11] = new SpellInfo("50 Energy Cost, 2 Active Energy Cost/Second, 65% Damage Absorption, 33% Damage Resistance")
  Spells[12] = new SpellInfo("50 Energy Cost, 2 Active Energy Cost/Second, 70% Damage Absorption, 33% Damage Resistance")
  Skills[15] = new Skill("Wraith Shell", 24, Spells, 13, "Allows the Liche King to diminish its corporeal presence making it less vulnerable to all types of damage.")

  // Circle of Power
  Spells = new Array();
  Spells[1] = new SpellInfo("64 Energy Cost, 12 Second Duration, 6.0 Meter Radius, +17 Damage to Undead")
  Spells[2] = new SpellInfo("68 Energy Cost, 12 Second Duration, 6.0 Meter Radius, +21 Damage to Undead")
  Spells[3] = new SpellInfo("72 Energy Cost, 12 Second Duration, 6.0 Meter Radius, +25 Damage to Undead")
  Spells[4] = new SpellInfo("76 Energy Cost, 12 Second Duration, 6.0 Meter Radius, +30 Damage to Undead")
  Spells[5] = new SpellInfo("80 Energy Cost, 12 Second Duration, 6.0 Meter Radius, +34 Damage to Undead")
  Spells[6] = new SpellInfo("84 Energy Cost, 12 Second Duration, 6.0 Meter Radius, +39 Damage to Undead")
  Spells[7] = new SpellInfo("88 Energy Cost, 12 Second Duration, 6.0 Meter Radius, +43 Damage to Undead")
  Spells[8] = new SpellInfo("92 Energy Cost, 12 Second Duration, 6.0 Meter Radius, +49 Damage to Undead")
  Spells[9] = new SpellInfo("96 Energy Cost, 12 Second Duration, 6.0 Meter Radius, +54 Damage to Undead")
  Spells[10] = new SpellInfo("100 Energy Cost, 12 Second Duration, 6.0 Meter Radius, +60 Damage to Undead")
  Spells[11] = new SpellInfo("104 Energy Cost, 12 Second Duration, 6.0 Meter Radius, +67 Damage to Undead")
  Spells[12] = new SpellInfo("108 Energy Cost, 12 Second Duration, 6.0 Meter Radius, +75 Damage to Undead")
  Skills[16] = new Skill("Circle of Power", 24, Spells, -1, "Creates a circle of power that protects allies from the undead and damages any undead creatures that pass within it.")

  // Death Ward
  Spells = new Array();
  Spells[1] = new SpellInfo("Activates When Health Drops Below 15%, +330 Health Restored, 3 Second Duration")
  Spells[2] = new SpellInfo("Activates When Health Drops Below 15%, +360 Health Restored, 3 Second Duration")
  Spells[3] = new SpellInfo("Activates When Health Drops Below 15%, +390 Health Restored, 3 Second Duration")
  Spells[4] = new SpellInfo("Activates When Health Drops Below 15%, +420 Health Restored, 3 Second Duration")
  Spells[5] = new SpellInfo("Activates When Health Drops Below 15%, +450 Health Restored, 3 Second Duration")
  Spells[6] = new SpellInfo("Activates When Health Drops Below 15%, +480 Health Restored, 3 Second Duration")
  Spells[7] = new SpellInfo("Activates When Health Drops Below 15%, +510 Health Restored, 3 Second Duration")
  Spells[8] = new SpellInfo("Activates When Health Drops Below 15%, +540 Health Restored, 3 Second Duration")
  Skills[17] = new Skill("Death Ward", 32, Spells, -1, "Places a magical ward on the player that protects them from death by granting additional life when their life gets dangerously low.")

  // Summon Outsider
  Spells = new Array();
  Spells[1] = new SpellInfo("286 Energy Cost, Ether Lord Attributes: Life Time 30 Seconds, 1065 Health, 518 Energy, Ether Lord Abilities: Ether Strike, 27 Energy Cost, 200 Arc of Attack, 3 Target Maximum, 75-115 Elemental Damage, 33% Reduction to Enemy's Health")
  Spells[2] = new SpellInfo("292 Energy Cost, Ether Lord Attributes: Life Time 30 Seconds, 1130 Health, 536 Energy, Ether Lord Abilities: Ether Strike, 29 Energy Cost, 200 Arc of Attack, 3 Target Maximum, 83-124 Elemental Damage, 33% Reduction to Enemy's Health")
  Spells[3] = new SpellInfo("298 Energy Cost, Ether Lord Attributes: Life Time 30 Seconds, 1195 Health, 554 Energy, Ether Lord Abilities: Ether Strike, 31 Energy Cost, 200 Arc of Attack, 3 Target Maximum, 90-132 Elemental Damage, 33% Reduction to Enemy's Health")
  Spells[4] = new SpellInfo("304 Energy Cost, Ether Lord Attributes: Life Time 30 Seconds, 1260 Health, 572 Energy, Ether Lord Abilities: Ether Strike, 33 Energy Cost, 200 Arc of Attack, 3 Target Maximum, 99-141 Elemental Damage, 33% Reduction to Enemy's Health")
  Spells[5] = new SpellInfo("310 Energy Cost, Ether Lord Attributes: Life Time 30 Seconds, 1325 Health, 590 Energy, Ether Lord Abilities: Ether Strike, 35 Energy Cost, 200 Arc of Attack, 3 Target Maximum, 107-150 Elemental Damage, 33% Reduction to Enemy's Health")
  Spells[6] = new SpellInfo("316 Energy Cost, Ether Lord Attributes: Life Time 30 Seconds, 1390 Health, 608 Energy, Ether Lord Abilities: Ether Strike, 37 Energy Cost, 200 Arc of Attack, 3 Target Maximum, 117-161 Elemental Damage, 33% Reduction to Enemy's Health")
  Spells[7] = new SpellInfo("322 Energy Cost, Ether Lord Attributes: Life Time 30 Seconds, 1455 Health, 626 Energy, Ether Lord Abilities: Ether Strike, 39 Energy Cost, 200 Arc of Attack, 3 Target Maximum, 126-171 Elemental Damage, 33% Reduction to Enemy's Health")
  Spells[8] = new SpellInfo("328 Energy Cost, Ether Lord Attributes: Life Time 30 Seconds, 1520 Health, 644 Energy, Ether Lord Abilities: Ether Strike, 41 Energy Cost, 200 Arc of Attack, 3 Target Maximum, 137-182 Elemental Damage, 33% Reduction to Enemy's Health")
  Spells[9] = new SpellInfo("334 Energy Cost, Ether Lord Attributes: Life Time 30 Seconds, 1585 Health, 662 Energy, Ether Lord Abilities: Ether Strike, 43 Energy Cost, 200 Arc of Attack, 3 Target Maximum, 147-193 Elemental Damage, 33% Reduction to Enemy's Health")
  Spells[10] = new SpellInfo("340 Energy Cost, Ether Lord Attributes: Life Time 30 Seconds, 1650 Health, 680 Energy, Ether Lord Abilities: Ether Strike, 45 Energy Cost, 200 Arc of Attack, 3 Target Maximum, 159-206 Elemental Damage, 33% Reduction to Enemy's Health")
  Spells[11] = new SpellInfo("346 Energy Cost, Ether Lord Attributes: Life Time 30 Seconds, 1715 Health, 698 Energy, Ether Lord Abilities: Ether Strike, 47 Energy Cost, 200 Arc of Attack, 3 Target Maximum, 170-218 Elemental Damage, 33% Reduction to Enemy's Health")
  Spells[12] = new SpellInfo("352 Energy Cost, Ether Lord Attributes: Life Time 30 Seconds, 1780 Health, 716 Energy, Ether Lord Abilities: Ether Strike, 49 Energy Cost, 200 Arc of Attack, 3 Target Maximum, 182-230 Elemental Damage, 33% Reduction to Enemy's Health")
  Spells[13] = new SpellInfo("358 Energy Cost, Ether Lord Attributes: Life Time 30 Seconds, 1845 Health, 734 Energy, Ether Lord Abilities: Ether Strike, 51 Energy Cost, 200 Arc of Attack, 3 Target Maximum, 194-243 Elemental Damage, 33% Reduction to Enemy's Health")
  Spells[14] = new SpellInfo("364 Energy Cost, Ether Lord Attributes: Life Time 30 Seconds, 1910 Health, 752 Energy, Ether Lord Abilities: Ether Strike, 53 Energy Cost, 200 Arc of Attack, 3 Target Maximum, 207-257 Elemental Damage, 33% Reduction to Enemy's Health")
  Spells[15] = new SpellInfo("370 Energy Cost, Ether Lord Attributes: Life Time 30 Seconds, 1975 Health, 770 Energy, Ether Lord Abilities: Ether Strike, 55 Energy Cost, 200 Arc of Attack, 3 Target Maximum, 219-270 Elemental Damage, 33% Reduction to Enemy's Health")
  Spells[16] = new SpellInfo("376 Energy Cost, Ether Lord Attributes: Life Time 30 Seconds, 2040 Health, 788 Energy, Ether Lord Abilities: Ether Strike, 55 Energy Cost, 200 Arc of Attack, 3 Target Maximum, 219-270 Elemental Damage, 33% Reduction to Enemy's Health")
  Skills[18] = new Skill("Summon Outsider", 32, Spells, -1, "Calls forth a powerful extra-dimensional entity from beyond the ether. The link can only be maintained for a short time.")

  // Arcane Blast
  Spells = new Array();
  Spells[1] = new SpellInfo("32 Energy Cost, 2 Projectiles, 51 Elemental Damage, 15 Vitality Damage, 1 Second of Stun, 15% Slowed for 1.5 Seconds")
  Spells[2] = new SpellInfo("33 Energy Cost, 2 Projectiles, 56 Elemental Damage, 19 Vitality Damage, 1 Second of Stun, 15% Slowed for 1.5 Seconds")
  Spells[3] = new SpellInfo("36 Energy Cost, 3 Projectiles, 61 Elemental Damage, 23 Vitality Damage, 1 Second of Stun, 15% Slowed for 1.5 Seconds")
  Spells[4] = new SpellInfo("38 Energy Cost, 3 Projectiles, 66 Elemental Damage, 26 Vitality Damage, 1 Second of Stun, 15% Slowed for 1.5 Seconds")
  Spells[5] = new SpellInfo("39 Energy Cost, 3 Projectiles, 73 Elemental Damage, 30 Vitality Damage, 1 Second of Stun, 15% Slowed for 1.5 Seconds")
  Spells[6] = new SpellInfo("40 Energy Cost, 3 Projectiles, 77 Elemental Damage, 33 Vitality Damage, 1 Second of Stun, 15% Slowed for 1.5 Seconds")
  Spells[7] = new SpellInfo("42 Energy Cost, 3 Projectiles, 82 Elemental Damage, 37 Vitality Damage, 1 Second of Stun, 15% Slowed for 1.5 Seconds")
  Spells[8] = new SpellInfo("42 Energy Cost, 3 Projectiles, 87 Elemental Damage, 41 Vitality Damage, 1 Second of Stun, 15% Slowed for 1.5 Seconds")
  Spells[9] = new SpellInfo("46 Energy Cost, 4 Projectiles, 92 Elemental Damage, 44 Vitality Damage, 1 Second of Stun, 15% Slowed for 1.5 Seconds")
  Spells[10] = new SpellInfo("47 Energy Cost, 4 Projectiles, 100 Elemental Damage, 49 Vitality Damage, 1 Second of Stun, 15% Slowed for 1.5 Seconds")
  Spells[11] = new SpellInfo("49 Energy Cost, 4 Projectiles, 104 Elemental Damage, 52 Vitality Damage, 1 Second of Stun, 15% Slowed for 1.5 Seconds")
  Spells[12] = new SpellInfo("50 Energy Cost, 4 Projectiles, 110 Elemental Damage, 56 Vitality Damage, 1 Second of Stun, 15% Slowed for 1.5 Seconds")
  Spells[13] = new SpellInfo("51 Energy Cost, 4 Projectiles, 114 Elemental Damage, 59 Vitality Damage, 1 Second of Stun, 15% Slowed for 1.5 Seconds")
  Spells[14] = new SpellInfo("52 Energy Cost, 4 Projectiles, 120 Elemental Damage, 63 Vitality Damage, 1 Second of Stun, 15% Slowed for 1.5 Seconds")
  Spells[15] = new SpellInfo("55 Energy Cost, 5 Projectiles, 129 Elemental Damage, 69 Vitality Damage, 1 Second of Stun, 15% Slowed for 1.5 Seconds")
  Spells[16] = new SpellInfo("57 Energy Cost, 5 Projectiles, 133 Elemental Damage, 72 Vitality Damage, 1 Second of Stun, 15% Slowed for 1.5 Seconds")
  Skills[19] = new Skill("Arcane Blast", 32, Spells, 15, "Drawing upon ancient arcane craft the Liche King forms deadly bolts of elemental energy and launches them at enemies.")

  // set the mastery array
  Mastery[2] = new setmastery(Skills, Attributes)

  // testing
  //alert(Mastery[2].Skills[19].spells[4].spellinfo)
  //alert(Skills[1][0].desc)

}