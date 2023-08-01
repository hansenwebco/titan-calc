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
  this.masteryid = 7
  this.masteryname = "Hunting"
  this.Attributes = Attributes
}

window.loadHunter = loadHunter;
function loadHunter() {

  // set attributes
  if (!AttributesBase[0]) { // base att's are only set one time
    AttributesBase[0] = new Attribute(300, 300, 50, 50, 50) // base stats for characters
  }
    let Attributes = [];
  Attributes[1] = new Attribute(24, 0, 2, 2, 0)
  Attributes[2] = new Attribute(49, 0, 3, 5, 0)
  Attributes[3] = new Attribute(73, 0, 5, 7, 0)
  Attributes[4] = new Attribute(98, 0, 7, 10, 0)
  Attributes[5] = new Attribute(122, 0, 9, 12, 0)
  Attributes[6] = new Attribute(147, 0, 10, 15, 0)
  Attributes[7] = new Attribute(171, 0, 12, 17, 0)
  Attributes[8] = new Attribute(196, 0, 14, 20, 0)
  Attributes[9] = new Attribute(220, 0, 16, 22, 0)
  Attributes[10] = new Attribute(245, 0, 17, 25, 0)
  Attributes[11] = new Attribute(269, 0, 19, 27, 0)
  Attributes[12] = new Attribute(294, 0, 21, 30, 0)
  Attributes[13] = new Attribute(318, 0, 23, 32, 0)
  Attributes[14] = new Attribute(343, 0, 24, 35, 0)
  Attributes[15] = new Attribute(367, 0, 26, 37, 0)
  Attributes[16] = new Attribute(392, 0, 28, 40, 0)
  Attributes[17] = new Attribute(416, 0, 30, 42, 0)
  Attributes[18] = new Attribute(441, 0, 31, 45, 0)
  Attributes[19] = new Attribute(465, 0, 33, 47, 0)
  Attributes[20] = new Attribute(490, 0, 35, 50, 0)
  Attributes[21] = new Attribute(514, 0, 37, 52, 0)
  Attributes[22] = new Attribute(539, 0, 38, 55, 0)
  Attributes[23] = new Attribute(563, 0, 40, 57, 0)
  Attributes[24] = new Attribute(588, 0, 42, 60, 0)
  Attributes[25] = new Attribute(612, 0, 44, 62, 0)
  Attributes[26] = new Attribute(637, 0, 45, 65, 0)
  Attributes[27] = new Attribute(661, 0, 47, 67, 0)
  Attributes[28] = new Attribute(686, 0, 49, 70, 0)
  Attributes[29] = new Attribute(710, 0, 51, 72, 0)
  Attributes[30] = new Attribute(735, 0, 52, 75, 0)
  Attributes[31] = new Attribute(759, 0, 54, 77, 0)
  Attributes[32] = new Attribute(784, 0, 56, 80, 0)

    let Skills = [];

  // Ensnare
    let Spells = [];
  Spells[1] = new SpellInfo("15 Energy Cost, 3 Second Duration, 15 Piercing Damage, -33% Defensive Ability")
  Spells[2] = new SpellInfo("17 Energy Cost, 4 Second Duration, 19 Piercing Damage, -33% Defensive Ability")
  Spells[3] = new SpellInfo("19 Energy Cost, 5 Second Duration, 23 Piercing Damage, -33% Defensive Ability")
  Spells[4] = new SpellInfo("20 Energy Cost, 6 Second Duration, 27 Piercing Damage, -33% Defensive Ability")
  Spells[5] = new SpellInfo("22 Energy Cost, 7 Second Duration, 31 Piercing Damage, -33% Defensive Ability")
  Spells[6] = new SpellInfo("24 Energy Cost, 8 Second Duration, 35 Piercing Damage, -33% Defensive Ability")
  Skills[0] = new Skill("Ensnare", 1, Spells, -1, "Casts a weighted net around the feet of an enemy holding them in place but not preventing them from attacking if you are within their range.")

  // Take Down
    Spells = [];
  Spells[1] = new SpellInfo("30 Energy Cost, 25 Piercing Damage, 8% Reduction to Enemy's Health, +300% Movement")
  Spells[2] = new SpellInfo("32 Energy Cost, 31 Piercing Damage, 12% Reduction to Enemy's Health, +300% Movement")
  Spells[3] = new SpellInfo("34 Energy Cost, 38 Piercing Damage, 15% Reduction to Enemy's Health, +300% Movement")
  Spells[4] = new SpellInfo("36 Energy Cost, 47 Piercing Damage, 18% Reduction to Enemy's Health, +300% Movement")
  Spells[5] = new SpellInfo("38 Energy Cost, 52 Piercing Damage, 21% Reduction to Enemy's Health, +300% Movement")
  Spells[6] = new SpellInfo("40 Energy Cost, 57 Piercing Damage, 24% Reduction to Enemy's Health, +300% Movement")
  Spells[7] = new SpellInfo("42 Energy Cost, 61 Piercing Damage, 26 Reduction to Enemy's Health, +300% Movement")
  Spells[8] = new SpellInfo("44 Energy Cost, 68 Piercing Damage, 28% Reduction to Enemy's Health, +300% Movement")
  Spells[9] = new SpellInfo("46 Energy Cost, 72 Piercing Damage, 30% Reduction to Enemy's Health, +300% Movement")
  Spells[10] = new SpellInfo("48 Energy Cost, 77 Piercing Damage, 32% Reduction to Enemy's Health, +300% Movement")
  Spells[11] = new SpellInfo("50 Energy Cost, 81 Piercing Damage, 34% Reduction to Enemy's Health, +300% Movement")
  Spells[12] = new SpellInfo("52 Energy Cost, 88 Piercing Damage, 36% Reduction to Enemy's Health, +300% Movement")
  Skills[1] = new Skill("Take Down", 1, Spells, -1, "A brutal thrust from your spear delivers devastating piercing damage to enemies and diminishes a portion of your enemy's total life.")

  // Wood Lore
    Spells = [];
  Spells[1] = new SpellInfo("+10% Defensive Ability, +5% Attack Speed")
  Spells[2] = new SpellInfo("+14% Defensive Ability, +8% Attack Speed")
  Spells[3] = new SpellInfo("+18% Defensive Ability, +12% Attack Speed")
  Spells[4] = new SpellInfo("+24% Defensive Ability, +16% Attack Speed")
  Spells[5] = new SpellInfo("+28% Defensive Ability, +20% Attack Speed")
  Spells[6] = new SpellInfo("+32% Defensive Ability, +24% Attack Speed")
  Skills[2] = new Skill("Wood Lore", 1, Spells, -1, "Central to survival in the wilderness is the ability to hunt with bow and spear. Great familiarity with these weapons allows you to wield them with exceptional speed and precision.")

  // Marksmanship
    Spells = [];
  Spells[1] = new SpellInfo("2 Energy Cost, 4 Piercing Damage, +30% Increase in Projectile Speed")
  Spells[2] = new SpellInfo("2 Energy Cost, 8 Piercing Damage, +40% Increase in Projectile Speed")
  Spells[3] = new SpellInfo("2 Energy Cost, 12 Piercing Damage, +50% Increase in Projectile Speed")
  Spells[4] = new SpellInfo("2 Energy Cost, 16 Piercing Damage, +60% Increase in Projectile Speed")
  Spells[5] = new SpellInfo("2 Energy Cost, 20 Piercing Damage, +70% Increase in Projectile Speed")
  Spells[6] = new SpellInfo("2 Energy Cost, 24 Piercing Damage, +80% Increase in Projectile Speed")
  Spells[7] = new SpellInfo("2 Energy Cost, 28 Piercing Damage, +90% Increase in Projectile Speed")
  Spells[8] = new SpellInfo("2 Energy Cost, 33 Piercing Damage, +100% Increase in Projectile Speed")
  Spells[9] = new SpellInfo("2 Energy Cost, 38 Piercing Damage, +110% Increase in Projectile Speed")
  Spells[10] = new SpellInfo("2 Energy Cost, 43 Piercing Damage, +120% Increase in Projectile Speed")
  Spells[11] = new SpellInfo("2 Energy Cost, 49 Piercing Damage, +130% Increase in Projectile Speed")
  Spells[12] = new SpellInfo("2 Energy Cost, 55 Piercing Damage, +140% Increase in Projectile Speed")
  Skills[3] = new Skill("Marksmanship", 4, Spells, -1, "Marksmanship skill allows you to create and fire arrows that fly faster and increase pierce damage.")

  // Art of the Hunt
    Spells = [];
  Spells[1] = new SpellInfo("15.0 Meter Radius, +12% Pierce Damage, +15% Bleeding Damage, +75 Energy Reserved, +3 Damage to Beastmen, +3 Damage to Animals")
  Spells[2] = new SpellInfo("15.0 Meter Radius, +18% Pierce Damage, +18% Bleeding Damage, +75 Energy Reserved, +5 Damage to Beastmen, +5 Damage to Animals")
  Spells[3] = new SpellInfo("15.0 Meter Radius, +23% Pierce Damage, +21% Bleeding Damage, +75 Energy Reserved, +8 Damage to Beastmen, +8 Damage to Animals")
  Spells[4] = new SpellInfo("15.0 Meter Radius, +30% Pierce Damage, +24% Bleeding Damage, +75 Energy Reserved, +10 Damage to Beastmen, +10 Damage to Animals")
  Spells[5] = new SpellInfo("15.0 Meter Radius, +34% Pierce Damage, +27% Bleeding Damage, +75 Energy Reserved, +12 Damage to Beastmen, +12 Damage to Animals")
  Spells[6] = new SpellInfo("15.0 Meter Radius, +40% Pierce Damage, +30% Bleeding Damage, +75 Energy Reserved, +15 Damage to Beastmen, +15 Damage to Animals")
  Spells[7] = new SpellInfo("15.0 Meter Radius, +45% Pierce Damage, +33% Bleeding Damage, +75 Energy Reserved, +17 Damage to Beastmen, +17 Damage to Animals")
  Spells[8] = new SpellInfo("15.0 Meter Radius, +52% Pierce Damage, +36% Bleeding Damage, +75 Energy Reserved, +19 Damage to Beastmen, +19 Damage to Animals")
  Spells[9] = new SpellInfo("15.0 Meter Radius, +56% Pierce Damage, +39% Bleeding Damage, +75 Energy Reserved, +22 Damage to Beastmen, +22 Damage to Animals")
  Spells[10] = new SpellInfo("15.0 Meter Radius, +62% Pierce Damage, +42% Bleeding Damage, +75 Energy Reserved, +25 Damage to Beastmen, +25 Damage to Animals")
  Spells[11] = new SpellInfo("15.0 Meter Radius, +67% Pierce Damage, +45% Bleeding Damage, +75 Energy Reserved, +27 Damage to Beastmen, +27 Damage to Animals")
  Spells[12] = new SpellInfo("15.0 Meter Radius, +75% Pierce Damage, +48% Bleeding Damage, +75 Energy Reserved, +30 Damage to Beastmen, +30 Damage to Animals")
  Skills[4] = new Skill("Art of the Hunt", 4, Spells, -1, "Hunting experience gives you the edge when facing familiar quarry such as Animals and Beastmen.")

  // Herbal Remedy
    Spells = [];
  Spells[1] = new SpellInfo("35 Energy Cost, 180 Second Duration, +3.0 Health Regeneration/Second, 30% Poison Resistance")
  Spells[2] = new SpellInfo("40 Energy Cost, 240 Second Duration, +3.6 Health Regeneration/Second, 38% Poison Resistance")
  Spells[3] = new SpellInfo("45 Energy Cost, 300 Second Duration, +4.2 Health Regeneration/Second, 46% Poison Resistance")
  Spells[4] = new SpellInfo("50 Energy Cost, 360 Second Duration, +4.8 Health RegenerationSecond , 54% Poison Resistance")
  Spells[5] = new SpellInfo("55 Energy Cost, 420 Second Duration, +5.4 Health RegenerationSecond , 66% Poison Resistance")
  Spells[6] = new SpellInfo("60 Energy Cost, 480 Second Duration, +6.0 Health RegenerationSecond , 72% Poison Resistance")
  Skills[5] = new Skill("Herbal Remedy", 4, Spells, -1, "Living off the land, you learn to identify and utilize medicinal plants to create healing salves. When applied it will fortify against poison and healing is accelerated for a duration.")

  // Barbed Netting
    Spells = [];
  Spells[1] = new SpellInfo("45 Bleeding Damage Over 3 Seconds")
  Spells[2] = new SpellInfo("57 Bleeding Damage Over 3 Seconds")
  Spells[3] = new SpellInfo("72 Bleeding Damage Over 3 Seconds")
  Spells[4] = new SpellInfo("84 Bleeding Damage Over 3 Seconds")
  Spells[5] = new SpellInfo("96 Bleeding Damage Over 3 Seconds")
  Spells[6] = new SpellInfo("111 Bleeding Damage Over 3 Seconds")
  Spells[7] = new SpellInfo("123 Bleeding Damage Over 3 Seconds")
  Spells[8] = new SpellInfo("135 Bleeding Damage Over 3 Seconds")
  Skills[6] = new Skill("Barbed Netting", 10, Spells, 0, "Barbed hooks on the hunter's Ensnare net tear into enemies as they struggle causing them to bleed.")

  // Call of the Hunt
    Spells = [];
  Spells[1] = new SpellInfo("45 Energy Cost, 28 Second Duration, 15.0 Meter Radius, 18 Bleeding Damage Over 3 Seconds, +15% Attack Speed, +33% Damage to Beastmen, +33% Damage to Animals")
  Spells[2] = new SpellInfo("47 Energy Cost, 31 Second Duration, 15.0 Meter Radius, 22 Bleeding Damage Over 3 Seconds, +17% Attack Speed, +33% Damage to Beastmen, +33% Damage to Animals")
  Spells[3] = new SpellInfo("49 Energy Cost, 33 Second Duration, 15.0 Meter Radius, 26 Bleeding Damage Over 3 Seconds, +19% Attack Speed, +33% Damage to Beastmen, +33% Damage to Animals")
  Spells[4] = new SpellInfo("51 Energy Cost, 36 Second Duration, 15.0 Meter Radius, 30 Bleeding Damage Over 3 Seconds, +22% Attack Speed, +33% Damage to Beastmen, +33% Damage to Animals")
  Spells[5] = new SpellInfo("53 Energy Cost, 42 Second Duration, 15.0 Meter Radius, 34 Bleeding Damage Over 3 Seconds, +24% Attack Speed, +33% Damage to Beastmen, +33% Damage to Animals")
  Spells[6] = new SpellInfo("55 Energy Cost, 44 Second Duration, 15.0 Meter Radius, 38 Bleeding Damage Over 3 Seconds, +26% Attack Speed, +33% Damage to Beastmen, +33% Damage to Animals")
  Spells[7] = new SpellInfo("57 Energy Cost, 47 Second Duration, 15.0 Meter Radius, 42 Bleeding Damage Over 3 Seconds, +28% Attack Speed, +33% Damage to Beastmen, +33% Damage to Animals")
  Spells[8] = new SpellInfo("59 Energy Cost, 50 Second Duration, 15.0 Meter Radius, 46 Bleeding Damage Over 3 Seconds, +31% Attack Speed, +33% Damage to Beastmen, +33% Damage to Animals")
  Skills[7] = new Skill("Call of the Hunt", 10, Spells, -1, "Those who answer the call of the hunt will fight with increased speed and cunning.")

  // Eviscerate
    Spells = [];
  Spells[1] = new SpellInfo("5 Energy Cost, 33 Bleeding Damage Over 3 Seconds")
  Spells[2] = new SpellInfo("5 Energy Cost, 45 Bleeding Damage Over 3 Seconds")
  Spells[3] = new SpellInfo("5 Energy Cost, 60 Bleeding Damage Over 3 Seconds")
  Spells[4] = new SpellInfo("5 Energy Cost, 72 Bleeding Damage Over 3 Seconds")
  Spells[5] = new SpellInfo("5 Energy Cost, 84 Bleeding Damage Over 3 Seconds")
  Spells[6] = new SpellInfo("5 Energy Cost, 99 Bleeding Damage Over 3 Seconds")
  Spells[7] = new SpellInfo("5 Energy Cost, 111 Bleeding Damage Over 3 Seconds")
  Spells[8] = new SpellInfo("5 Energy Cost, 123 Bleeding Damage Over 3 Seconds")
  Spells[9] = new SpellInfo("5 Energy Cost, 138 Bleeding Damage Over 3 Seconds")
  Spells[10] = new SpellInfo("5 Energy Cost, 150 Bleeding Damage Over 3 Seconds")
  Skills[8] = new Skill("Eviscerate", 10, Spells, 1, "Targeting vital weak-points on your enemy causes sustained damage from bleeding.")

  // Monster Lure
    Spells = [];
  Spells[1] = new SpellInfo("34 Energy Cost, 3 Summon Limit, Monster Lure Attributes: Life Time 30 Seconds, 120 Health, 15 Energy, Monster Lure Ability: Provoke (15 Energy Cost, 5.0 Meter Radius)")
  Spells[2] = new SpellInfo("38 Energy Cost, 3 Summon Limit, Monster Lure Attributes: Life Time 30 Seconds, 150 Health, 15 Energy, Monster Lure Ability: Provoke (15 Energy Cost, 6.0 Meter Radius)")
  Spells[3] = new SpellInfo("42 Energy Cost, 3 Summon Limit, Monster Lure Attributes: Life Time 30 Seconds, 180 Health, 15 Energy, Monster Lure Ability: Provoke (15 Energy Cost, 7.0 Meter Radius)")
  Spells[4] = new SpellInfo("46 Energy Cost, 3 Summon Limit, Monster Lure Attributes: Life Time 30 Seconds, 210 Health, 15 Energy, Monster Lure Ability: Provoke (15 Energy Cost, 8.0 Meter Radius)")
  Spells[5] = new SpellInfo("50 Energy Cost, 3 Summon Limit, Monster Lure Attributes: Life Time 30 Seconds, 240 Health, 15 Energy, Monster Lure Ability: Provoke (15 Energy Cost, 9.0 Meter Radius)")
  Spells[6] = new SpellInfo("54 Energy Cost, 3 Summon Limit, Monster Lure Attributes: Life Time 30 Seconds, 270 Health, 15 Energy, Monster Lure Ability: Provoke (15 Energy Cost, 10.0 Meter Radius)")
  Skills[9] = new Skill("Monster Lure", 10, Spells, -1, "Drops down a decoy to attract the attention of nearby monsters.")

  // Study Prey
    Spells = [];
  Spells[1] = new SpellInfo("35 Energy Cost, 8 Second Duration, 6.0 Meter Radius, -21% Damage Resistance, -21% Pierce Resistance")
  Spells[2] = new SpellInfo("35 Energy Cost, 8 Second Duration, 6.0 Meter Radius, -26% Damage Resistance, -26% Pierce Resistance")
  Spells[3] = new SpellInfo("35 Energy Cost, 8 Second Duration, 6.0 Meter Radius, -30% Damage Resistance, -30% Pierce Resistance")
  Spells[4] = new SpellInfo("35 Energy Cost, 8 Second Duration, 6.0 Meter Radius, -34% Damage Resistance, -34% Pierce Resistance")
  Spells[5] = new SpellInfo("35 Energy Cost, 8 Second Duration, 6.0 Meter Radius, -38% Damage Resistance, -42% Pierce Resistance")
  Spells[6] = new SpellInfo("35 Energy Cost, 8 Second Duration, 6.0 Meter Radius, -42% Damage Resistance, -42% Pierce Resistance")
  Spells[7] = new SpellInfo("35 Energy Cost, 8 Second Duration, 6.0 Meter Radius, -46% Damage Resistance, -46% Pierce Resistance")
  Spells[8] = new SpellInfo("35 Energy Cost, 8 Second Duration, 6.0 Meter Radius, -50% Damage Resistance, -50% Pierce Resistance")
  Skills[10] = new Skill("Study Prey", 16, Spells, -1, "By observing your prey from a distance you may discover its weakness, resulting in greater pierce damage.")

  // Puncture Shot Arrows
    Spells = [];
  Spells[1] = new SpellInfo("1 Energy Cost, 8% Chance to Pass Through Enemies, +5% Pierce Damage, +9% Bleeding Damage")
  Spells[2] = new SpellInfo("1 Energy Cost, 12% Chance to Pass Through Enemies, +8% Pierce Damage, +12% Bleeding Damage")
  Spells[3] = new SpellInfo("1 Energy Cost, 16% Chance to Pass Through Enemies, +10% Pierce Damage, +15% Bleeding Damage")
  Spells[4] = new SpellInfo("1 Energy Cost, 21% Chance to Pass Through Enemies, +12% Pierce Damage, +20% Bleeding Damage")
  Spells[5] = new SpellInfo("1 Energy Cost, 25% Chance to Pass Through Enemies, +15% Pierce Damage, +23% Bleeding Damage")
  Spells[6] = new SpellInfo("1 Energy Cost, 29% Chance to Pass Through Enemies, +18% Pierce Damage, +27% Bleeding Damage")
  Spells[7] = new SpellInfo("1 Energy Cost, 33% Chance to Pass Through Enemies, +20% Pierce Damage, +30% Bleeding Damage")
  Spells[8] = new SpellInfo("1 Energy Cost, 38% Chance to Pass Through Enemies, +22% Pierce Damage, +35% Bleeding Damage")
  Spells[9] = new SpellInfo("1 Energy Cost, 42% Chance to Pass Through Enemies, +25% Pierce Damage, +38% Bleeding Damage")
  Spells[10] = new SpellInfo("1 Energy Cost, 46% Chance to Pass Through Enemies, +28% Pierce Damage, +42% Bleeding Damage")
  Spells[11] = new SpellInfo("1 Energy Cost, 50% Chance to Pass Through Enemies, +30% Pierce Damage, +45% Bleeding Damage")
  Spells[12] = new SpellInfo("1 Energy Cost, 55% Chance to Pass Through Enemies, +33% Pierce Damage, +50% Bleeding Damage")
  Skills[11] = new Skill("Puncture Shot Arrows", 16, Spells, 3, "Incorporating a more streamlined shaft into your arrows allows them to pass through targets and hit additional enemies in their path.")

  // Gouge
    Spells = [];
  Spells[1] = new SpellInfo("6% Chance to be Used, 48 Bleeding Damage Over 3 Seconds")
  Spells[2] = new SpellInfo("8% Chance to be Used, 72 Bleeding Damage Over 3 Seconds")
  Spells[3] = new SpellInfo("10% Chance to be Used, 99 Bleeding Damage Over 3 Seconds")
  Spells[4] = new SpellInfo("12% Chance to be Used, 129 Bleeding Damage Over 3 Seconds")
  Spells[5] = new SpellInfo("14% Chance to be Used, 162 Bleeding Damage Over 3 Seconds")
  Spells[6] = new SpellInfo("16% Chance to be Used, 198 Bleeding Damage Over 3 Seconds")
  Skills[12] = new Skill("Gouge", 16, Spells, -1, "A combat technique that uses the spear or bow to inflict deep wounds that will result in prolonged bleeding.")

  // Find Cover
    Spells = [];
  Spells[1] = new SpellInfo("+8% Chance to Avoid Projectiles, +10 Energy Reserved")
  Spells[2] = new SpellInfo("+10% Chance to Avoid Projectiles, +10 Energy Reserved")
  Spells[3] = new SpellInfo("+12% Chance to Avoid Projectiles, +10 Energy Reserved")
  Spells[4] = new SpellInfo("+15% Chance to Avoid Projectiles, +10 Energy Reserved")
  Spells[5] = new SpellInfo("+17% Chance to Avoid Projectiles, +10 Energy Reserved")
  Spells[6] = new SpellInfo("+19% Chance to Avoid Projectiles, +10 Energy Reserved")
  Spells[7] = new SpellInfo("+23% Chance to Avoid Projectiles, +10 Energy Reserved")
  Spells[8] = new SpellInfo("+25% Chance to Avoid Projectiles, +10 Energy Reserved")
  Skills[13] = new Skill("Find Cover", 16, Spells, 4, "Making use of available cover as you press your attack allows you to avoid unnecessary damage.")

  // Exploit Weakness
    Spells = [];
  Spells[1] = new SpellInfo("10 Energy Cost, +58% Pierce Damage, +58% Bleeding Damage")
  Spells[2] = new SpellInfo("10 Energy Cost, +66% Pierce Damage, +66% Bleeding Damage")
  Spells[3] = new SpellInfo("10 Energy Cost, +77% Pierce Damage, +77% Bleeding Damage")
  Spells[4] = new SpellInfo("10 Energy Cost, +85% Pierce Damage, +85% Bleeding Damage")
  Spells[5] = new SpellInfo("10 Energy Cost, +93% Pierce Damage, +93% Bleeding Damage")
  Spells[6] = new SpellInfo("10 Energy Cost, +104% Pierce Damage, +104% Bleeding Damage")
  Spells[7] = new SpellInfo("10 Energy Cost, +112% Pierce Damage, +112% Bleeding Damage")
  Spells[8] = new SpellInfo("10 Energy Cost, +120% Pierce Damage, +120% Bleeding Damage")
  Spells[9] = new SpellInfo("10 Energy Cost, +131% Pierce Damage, +131% Bleeding Damage")
  Spells[10] = new SpellInfo("10 Energy Cost, +139% Pierce Damage, +139% Bleeding Damage")
  Skills[14] = new Skill("Exploit Weakness", 24, Spells, 7, "Take full advantage of your enemy's mistakes and vulnerable moments to inflict savage wounds.")

  // Trail Blazing
    Spells = [];
  Spells[1] = new SpellInfo("+50 Energy Reserved, +5% Movement, 100% Reduced Entrapment Duration")
  Spells[2] = new SpellInfo("+50 Energy Reserved, +8% Movement, 100% Reduced Entrapment Duration")
  Spells[3] = new SpellInfo("+50 Energy Reserved, +10% Movement, 100% Reduced Entrapment Duration")
  Spells[4] = new SpellInfo("+50 Energy Reserved, +12% Movement, 100% Reduced Entrapment Duration")
  Spells[5] = new SpellInfo("+50 Energy Reserved, +16% Movement, 100% Reduced Entrapment Duration")
  Spells[6] = new SpellInfo("+50 Energy Reserved, +18% Movement, 100% Reduced Entrapment Duration")
  Skills[15] = new Skill("Trail Blazing", 24, Spells, 4, "Grants those who follow the hunt endurance to relentlessly track their quarry, preventing even the most tangled thicket from slowing pursuit.")

  // Detonate
    Spells = [];
  Spells[1] = new SpellInfo("15 Energy Cost, 6 Projectiles, 3.0 Meter Radius, 36-58 Fire Damage")
  Spells[2] = new SpellInfo("15 Energy Cost, 6 Projectiles, 3.0 Meter Radius, 42-66 Fire Damage")
  Spells[3] = new SpellInfo("15 Energy Cost, 6 Projectiles, 3.0 Meter Radius, 49-75 Fire Damage")
  Spells[4] = new SpellInfo("15 Energy Cost, 6 Projectiles, 3.0 Meter Radius, 58-86 Fire Damage")
  Spells[5] = new SpellInfo("15 Energy Cost, 6 Projectiles, 3.0 Meter Radius, 64-94 Fire Damage")
  Spells[6] = new SpellInfo("15 Energy Cost, 6 Projectiles, 3.0 Meter Radius, 70-102 Fire Damage")
  Spells[7] = new SpellInfo("15 Energy Cost, 6 Projectiles, 3.0 Meter Radius, 77-111 Fire Damage")
  Spells[8] = new SpellInfo("15 Energy Cost, 6 Projectiles, 3.0 Meter Radius, 86-122 Fire Damage")
  Spells[9] = new SpellInfo("15 Energy Cost, 6 Projectiles, 3.0 Meter Radius, 92-130 Fire Damage")
  Spells[10] = new SpellInfo("15 Energy Cost, 6 Projectiles, 3.0 Meter Radius, 98-138 Fire Damage")
  Spells[11] = new SpellInfo("15 Energy Cost, 6 Projectiles, 3.0 Meter Radius, 105-147 Fire Damage")
  Spells[12] = new SpellInfo("15 Energy Cost, 6 Projectiles, 3.0 Meter Radius, 114-158 Fire Damage")
  Skills[16] = new Skill("Detonate", 24, Spells, 9, "Adds a hidden explosive charge to the monster lure causing it to detonate when destroyed. In order to detonate the lure must be at full energy.")

  // Flush Out 
    Spells = [];
  Spells[1] = new SpellInfo("10 Energy Cost, -14% Defensive Ability, -14% Elemental Resistance")
  Spells[2] = new SpellInfo("10 Energy Cost, -18% Defensive Ability, -18% Elemental Resistance")
  Spells[3] = new SpellInfo("10 Energy Cost, -22% Defensive Ability, -22% Elemental Resistance")
  Spells[4] = new SpellInfo("10 Energy Cost, -26% Defensive Ability, -26% Elemental Resistance")
  Spells[5] = new SpellInfo("10 Energy Cost, -30% Defensive Ability, -30% Elemental Resistance")
  Spells[6] = new SpellInfo("10 Energy Cost, -36% Defensive Ability, -36% Elemental Resistance")
  Skills[17] = new Skill("Flush Out", 32, Spells, 10, "Draw your enemies into the open, making them more vulnerable to attack.")

  // Scatter Shot Arrows
    Spells = [];
  Spells[1] = new SpellInfo("1 Energy Cost, 3-4 Fragments, 15 Piercing Damage")
  Spells[2] = new SpellInfo("1 Energy Cost, 3-5 Fragments, 24 Piercing Damage")
  Spells[3] = new SpellInfo("1 Energy Cost, 4-5 Fragments, 33 Piercing Damage")
  Spells[4] = new SpellInfo("1 Energy Cost, 4-5 Fragments, 44 Piercing Damage")
  Spells[5] = new SpellInfo("1 Energy Cost, 4-6 Fragments, 55 Piercing Damage")
  Spells[6] = new SpellInfo("1 Energy Cost, 5-6 Fragments, 67 Piercing Damage")
  Spells[7] = new SpellInfo("1 Energy Cost, 5-7 Fragments, 80 Piercing Damage")
  Spells[8] = new SpellInfo("1 Energy Cost, 5-7 Fragments, 95 Piercing Damage")
  Spells[9] = new SpellInfo("1 Energy Cost, 6-7 Fragments, 110 Piercing Damage")
  Spells[10] = new SpellInfo("1 Energy Cost, 6-8 Fragments, 126 Piercing Damage")
  Spells[11] = new SpellInfo("1 Energy Cost, 6-8 Fragments, 143 Piercing Damage")
  Spells[12] = new SpellInfo("1 Energy Cost, 7-9 Fragments, 162 Piercing Damage")
  Skills[18] = new Skill("Scatter Shot Arrows", 32, Spells, 3, "A secret of master fletchers is the ability to craft special arrow heads that burst on impact sending out razor-sharp fragments in all directions.")

  // Volley
    Spells = [];
  Spells[1] = new SpellInfo("Launches 3 Projectiles, 6% Chance to be Used")
  Spells[2] = new SpellInfo("Launches 3 Projectiles, 8% Chance to be Used")
  Spells[3] = new SpellInfo("Launches 3 Projectiles, 10% Chance to be Used")
  Spells[4] = new SpellInfo("Launches 3 Projectiles, 12% Chance to be Used")
  Spells[5] = new SpellInfo("Launches 3 Projectiles, 14% Chance to be Used")
  Spells[6] = new SpellInfo("Launches 3 Projectiles, 16% Chance to be Used")
  Skills[19] = new Skill("Volley", 32, Spells, -1, "A combat technique that uses the spear or bow to rapidly strike three times in succession.")

  // set the mastery array
  Mastery[7] = new setmastery(Skills, Attributes)

  // testing
  //alert(Mastery[2].Skills[19].spells[4].spellinfo)
  //alert(Skills[1][0].desc)

}