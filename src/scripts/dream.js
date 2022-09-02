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
  this.masteryid = 9
  this.masteryname = "Dream"
  this.Attributes = Attributes
}


window.loadDream = loadDream;
function loadDream() {

  // set attributes
  if (!AttributesBase[0]) { // base att's are only set one time
    AttributesBase[0] = new Attribute(300, 300, 50, 50, 50) // base stats for characters
  }
  Attributes = new Array();
  Attributes[1] = new Attribute(35, 8, 2, 0, 2)
  Attributes[2] = new Attribute(70, 16, 4, 0, 3)
  Attributes[3] = new Attribute(105, 24, 6, 0, 5)
  Attributes[4] = new Attribute(140, 32, 8, 0, 7)
  Attributes[5] = new Attribute(175, 40, 10, 0, 9)
  Attributes[6] = new Attribute(210, 48, 12, 0, 10)
  Attributes[7] = new Attribute(245, 56, 14, 0, 12)
  Attributes[8] = new Attribute(280, 64, 16, 0, 14)
  Attributes[9] = new Attribute(315, 72, 18, 0, 16)
  Attributes[10] = new Attribute(350, 80, 20, 0, 17)
  Attributes[11] = new Attribute(385, 88, 22, 0, 19)
  Attributes[12] = new Attribute(420, 96, 24, 0, 21)
  Attributes[13] = new Attribute(455, 104, 26, 0, 23)
  Attributes[14] = new Attribute(490, 112, 28, 0, 24)
  Attributes[15] = new Attribute(525, 120, 30, 0, 26)
  Attributes[16] = new Attribute(560, 128, 32, 0, 28)
  Attributes[17] = new Attribute(595, 136, 34, 0, 30)
  Attributes[18] = new Attribute(630, 144, 36, 0, 31)
  Attributes[19] = new Attribute(665, 152, 38, 0, 33)
  Attributes[20] = new Attribute(700, 160, 40, 0, 35)
  Attributes[21] = new Attribute(735, 168, 42, 0, 37)
  Attributes[22] = new Attribute(770, 176, 44, 0, 38)
  Attributes[23] = new Attribute(805, 184, 46, 0, 40)
  Attributes[24] = new Attribute(840, 192, 48, 0, 42)
  Attributes[25] = new Attribute(875, 200, 50, 0, 44)
  Attributes[26] = new Attribute(910, 208, 52, 0, 45)
  Attributes[27] = new Attribute(945, 216, 54, 0, 47)
  Attributes[28] = new Attribute(980, 224, 56, 0, 49)
  Attributes[29] = new Attribute(1015, 232, 58, 0, 51)
  Attributes[30] = new Attribute(1050, 240, 60, 0, 52)
  Attributes[31] = new Attribute(1085, 248, 62, 0, 54)
  Attributes[32] = new Attribute(1120, 256, 64, 0, 56)


  Skills = new Array();

  // Sands of Sleep
  Spells = new Array();
  Spells[1] = new SpellInfo("25 Energy Cost, 2.5 - 4.0 seconds of Sleep")
  Spells[2] = new SpellInfo("30 Energy Cost, 3.0 - 4.8 seconds of Sleep")
  Spells[3] = new SpellInfo("35 Energy Cost, 3.5 - 5.6 seconds of Sleep")
  Spells[4] = new SpellInfo("40 Energy Cost, 3.9 - 6.4 seconds of Sleep")
  Spells[5] = new SpellInfo("45 Energy Cost, 4.3 - 7.2 seconds of Sleep")
  Spells[6] = new SpellInfo("50 Energy Cost, 4.7 - 8.0 seconds of Sleep")
  Spells[7] = new SpellInfo("55 Energy Cost, 5.0 - 8.8 seconds of Sleep")
  Spells[8] = new SpellInfo("60 Energy Cost, 5.3 - 9.6 seconds of Sleep")
  Skills[0] = new Skill("Sands of Sleep", 1, Spells, -1, "Puts enemies to sleep, rendering them immobile for a duration or until awakened by an attack.")

  // Psionic Touch
  Spells = new Array();
  Spells[1] = new SpellInfo("3 Charge Levels, +30% Total Damage, 15 Vitality Damage")
  Spells[2] = new SpellInfo("3 Charge Levels, +36% Total Damage, 19 Vitality Damage")
  Spells[3] = new SpellInfo("3 Charge Levels, +42% Total Damage, 23 Vitality Damage")
  Spells[4] = new SpellInfo("3 Charge Levels, +48% Total Damage, 27 Vitality Damage")
  Spells[5] = new SpellInfo("3 Charge Levels, +54% Total Damage, 31 Vitality Damage")
  Spells[6] = new SpellInfo("3 Charge Levels, +60% Total Damage, 36 Vitality Damage")
  Spells[7] = new SpellInfo("3 Charge Levels, +66% Total Damage, 42 Vitality Damage")
  Spells[8] = new SpellInfo("3 Charge Levels, +72% Total Damage, 49 Vitality Damage")
  Spells[9] = new SpellInfo("3 Charge Levels, +78% Total Damage, 57 Vitality Damage")
  Spells[10] = new SpellInfo("3 Charge Levels, +84% Total Damage, 66 Vitality Damage")
  Spells[11] = new SpellInfo("3 Charge Levels, +90% Total Damage, 76 Vitality Damage")
  Spells[12] = new SpellInfo("3 Charge Levels, +96% Total Damage, 87 Vitality Damage")
  Skills[1] = new Skill("Psionic Touch", 1, Spells, -1, "Psionic energies focused within your weapons will create a bone shattering resonance when they contact your enemies.")

  // Distoration Wave
  Spells = new Array();
  Spells[1] = new SpellInfo("36 Energy Cost, 12 Damage, 50% Slowed for 4.0 Seconds")
  Spells[2] = new SpellInfo("40 Energy Cost, 18 Damage, 50% Slowed for 4.0 Seconds")
  Spells[3] = new SpellInfo("44 Energy Cost, 25 Damage, 50% Slowed for 4.0 Seconds")
  Spells[4] = new SpellInfo("48 Energy Cost, 32 Damage, 50% Slowed for 4.0 Seconds")
  Spells[5] = new SpellInfo("52 Energy Cost, 43 Damage, 50% Slowed for 4.0 Seconds")
  Spells[6] = new SpellInfo("56 Energy Cost, 56 Damage, 50% Slowed for 4.0 Seconds")
  Spells[7] = new SpellInfo("60 Energy Cost, 78 Damage, 50% Slowed for 4.0 Seconds")
  Spells[8] = new SpellInfo("64 Energy Cost, 92 Damage, 50% Slowed for 4.0 Seconds")
  Spells[9] = new SpellInfo("68 Energy Cost, 108 Damage, 50% Slowed for 4.0 Seconds")
  Spells[10] = new SpellInfo("72 Energy Cost, 125 Damage, 50% Slowed for 4.0 Seconds")
  Spells[11] = new SpellInfo("76 Energy Cost, 143 Damage, 50% Slowed for 4.0 Seconds")
  Spells[12] = new SpellInfo("80 Energy Cost, 165 Damage, 50% Slowed for 4.0 Seconds")
  Skills[2] = new Skill("Distoration Wave", 1, Spells, -1, "A wave of force is projected outward that forms chaotic ripples in the fabric of reality and delivers devastating damage to the body and mind of enemies.")

  // Trance of Empathy
  Spells = new Array();
  Spells[1] = new SpellInfo("1 Active Energy Cost per Second, 12.0 Meter Radius, 3 - 10% of Attack damage converted to Health, 15% Damage Reflected")
  Spells[2] = new SpellInfo("1 Active Energy Cost per Second, 12.0 Meter Radius, 3 - 10% of Attack damage converted to Health, 18% Damage Reflected")
  Spells[3] = new SpellInfo("1 Active Energy Cost per Second, 12.0 Meter Radius, 3 - 10% of Attack damage converted to Health, 21% Damage Reflected")
  Spells[4] = new SpellInfo("1 Active Energy Cost per Second, 12.0 Meter Radius, 3 - 10% of Attack damage converted to Health, 24% Damage Reflected")
  Spells[5] = new SpellInfo("1 Active Energy Cost per Second, 12.0 Meter Radius, 3 - 10% of Attack damage converted to Health, 28% Damage Reflected")
  Spells[6] = new SpellInfo("1 Active Energy Cost per Second, 12.0 Meter Radius, 3 - 10% of Attack damage converted to Health, 32% Damage Reflected")
  Spells[7] = new SpellInfo("1 Active Energy Cost per Second, 12.0 Meter Radius, 3 - 10% of Attack damage converted to Health, 36% Damage Reflected")
  Spells[8] = new SpellInfo("1 Active Energy Cost per Second, 12.0 Meter Radius, 3 - 10% of Attack damage converted to Health, 40% Damage Reflected")
  Spells[9] = new SpellInfo("1 Active Energy Cost per Second, 12.0 Meter Radius, 3 - 10% of Attack damage converted to Health, 44% Damage Reflected")
  Spells[10] = new SpellInfo("1 Active Energy Cost per Second, 12.0 Meter Radius, 3 - 10% of Attack damage converted to Health, 49% Damage Reflected")
  Spells[11] = new SpellInfo("1 Active Energy Cost per Second, 12.0 Meter Radius, 3 - 10% of Attack damage converted to Health, 54% Damage Reflected")
  Spells[12] = new SpellInfo("1 Active Energy Cost per Second, 12.0 Meter Radius, 3 - 10% of Attack damage converted to Health, 60% Damage Reflected")
  Skills[3] = new Skill("Trance of Empathy", 4, Spells, -1, "Force enemies to share the damage they inflict upon you by forming a telepathic link to their minds that conveys only pain and siphions life in retribution.  <BR><B>Trance Skill - Only one trance can be active at a time</B>.")

  // Lucid Dream
  Spells = new Array();
  Spells[1] = new SpellInfo("+10% Damage, +15% Electical Burn Damage, +15% Vitality Damage")
  Spells[2] = new SpellInfo("+12% Damage, +19% Electical Burn Damage, +19% Vitality Damage")
  Spells[3] = new SpellInfo("+15% Damage, +23% Electical Burn Damage, +23% Vitality Damage")
  Spells[4] = new SpellInfo("+18% Damage, +27% Electical Burn Damage, +27% Vitality Damage")
  Spells[5] = new SpellInfo("+21% Damage, +31% Electical Burn Damage, +31% Vitality Damage")
  Spells[6] = new SpellInfo("+23% Damage, +35% Electical Burn Damage, +35% Vitality Damage")
  Spells[7] = new SpellInfo("+25% Damage, +39% Electical Burn Damage, +39% Vitality Damage")
  Spells[8] = new SpellInfo("+28% Damage, +45% Electical Burn Damage, +45% Vitality Damage")
  Skills[4] = new Skill("Lucid Dream", 4, Spells, -1, "Increased conscious control over your dream state enhances abilities that derive power from the dream world.")

  // Phantom Strike
  Spells = new Array();
  Spells[1] = new SpellInfo("50 Energy Cost, +35% Total Damage")
  Spells[2] = new SpellInfo("50 Energy Cost, +50% Total Damage")
  Spells[3] = new SpellInfo("50 Energy Cost, +65% Total Damage")
  Spells[4] = new SpellInfo("50 Energy Cost, +80% Total Damage")
  Spells[5] = new SpellInfo("50 Energy Cost, +95% Total Damage")
  Spells[6] = new SpellInfo("50 Energy Cost, +109% Total Damage")
  Spells[7] = new SpellInfo("50 Energy Cost, +123% Total Damage")
  Spells[8] = new SpellInfo("50 Energy Cost, +137% Total Damage")
  Spells[9] = new SpellInfo("50 Energy Cost, +151% Total Damage")
  Spells[10] = new SpellInfo("50 Energy Cost, +164% Total Damage")
  Spells[11] = new SpellInfo("50 Energy Cost, +177% Total Damage")
  Spells[12] = new SpellInfo("50 Energy Cost, +190% Total Damage")
  Skills[5] = new Skill(" Phantom Strike", 4, Spells, -1, "Vanish from the waking world and reappear before a target enemy to deliver a monstrous attack.")

  // Premonition
  Spells = new Array();
  Spells[1] = new SpellInfo("+5% Offensive Ability, +5% Defensive Ability")
  Spells[2] = new SpellInfo("+8% Offensive Ability, +8% Defensive Ability")
  Spells[3] = new SpellInfo("+10% Offensive Ability, +10% Defensive Ability")
  Spells[4] = new SpellInfo("+12% Offensive Ability, +12% Defensive Ability")
  Spells[5] = new SpellInfo("+15% Offensive Ability, +15% Defensive Ability")
  Spells[6] = new SpellInfo("+18% Offensive Ability, +18% Defensive Ability")
  Skills[6] = new Skill("Premonition", 10, Spells, 4, "A procognitive sense of the imminent future allows you to stay one step ahead of your enemies in combat.")

  // Summon Nightmare
  Spells = new Array();
  Spells[1] = new SpellInfo("150 Energy Cost,Nighmare Attributes:, 105 Health 930 Energy,<B>Nightmare Abilities:</B>, Psionic Beam: 8 Damage 8 Vitality Damage, Dodge Attack: 34% Chance to Dodge Attacks +34% Chance to Avoid Projectiles")
  Spells[2] = new SpellInfo("154 Energy Cost,Nighmare Attributes:, 120 Health 960 Energy,<B>Nightmare Abilities:</B>, Psionic Beam: 12 Damage 12 Vitality Damage, Dodge Attack: 35% Chance to Dodge Attacks +35% Chance to Avoid Projectiles")
  Spells[3] = new SpellInfo("158 Energy Cost,Nighmare Attributes:, 136 Health 990 Energy,<B>Nightmare Abilities:</B>, Psionic Beam: 16 Damage 16 Vitality Damage, Dodge Attack: 36% Chance to Dodge Attacks +36% Chance to Avoid Projectiles")
  Spells[4] = new SpellInfo("162 Energy Cost,Nighmare Attributes:, 153 Health 1020 Energy,<B>Nightmare Abilities:</B>, Psionic Beam: 20 Damage 20 Vitality Damage, Dodge Attack: 37% Chance to Dodge Attacks +37% Chance to Avoid Projectiles")
  Spells[5] = new SpellInfo("166 Energy Cost,Nighmare Attributes:, 171 Health 1050 Energy,<B>Nightmare Abilities:</B>, Psionic Beam: 24 Damage 24 Vitality Damage,Dream Surge: 10 Projectiles 100% Chance to pass through enemies 37 Damage 37 Vitality Damage 30% of Attack damage converted to Health, Dodge Attack: 38% Chance to Dodge Attacks +38% Chance to Avoid Projectiles")
  Spells[6] = new SpellInfo("170 Energy Cost,Nighmare Attributes:, 190 Health 1080 Energy,<B>Nightmare Abilities:</B>, Psionic Beam: 28 Damage 28 Vitality Damage,Dream Surge: 10 Projectiles 100% Chance to pass through enemies 40 Damage 40 Vitality Damage 30% of Attack damage converted to Health, Dodge Attack: 39% Chance to Dodge Attacks +39% Chance to Avoid Projectiles")
  Spells[7] = new SpellInfo("174 Energy Cost,Nighmare Attributes:, 210 Health 1110 Energy,<B>Nightmare Abilities:</B>, Psionic Beam: 32 Damage 32 Vitality Damage,Dream Surge: 10 Projectiles 100% Chance to pass through enemies 44 Damage 44 Vitality Damage 30% of Attack damage converted to Health, Dodge Attack: 40% Chance to Dodge Attacks +40% Chance to Avoid Projectiles")
  Spells[8] = new SpellInfo("178 Energy Cost,Nighmare Attributes:, 231 Health 1140 Energy,<B>Nightmare Abilities:</B>, Psionic Beam: 36 Damage 36 Vitality Damage,Dream Surge: 10 Projectiles 100% Chance to pass through enemies 48 Damage 48 Vitality Damage 30% of Attack damage converted to Health, Dodge Attack: 41% Chance to Dodge Attacks +41% Chance to Avoid Projectiles")
  Spells[9] = new SpellInfo("182 Energy Cost,Nighmare Attributes:, 253 Health 1170 Energy,<B>Nightmare Abilities:</B>, Psionic Beam: 39 Damage 39 Vitality Damage,Dream Surge: 10 Projectiles 100% Chance to pass through enemies 51 Damage 51 Vitality Damage 30% of Attack damage converted to Health, Dodge Attack: 42% Chance to Dodge Attacks +42% Chance to Avoid Projectiles")
  Spells[10] = new SpellInfo("186 Energy Cost,Nighmare Attributes:, 277 Health 1200 Energy,<B>Nightmare Abilities:</B>, Psionic Beam: 42 Damage 42 Vitality Damage,Dream Surge: 10 Projectiles 100% Chance to pass through enemies 54 Damage 54 Vitality Damage 30% of Attack damage converted to Health, Dodge Attack: 43% Chance to Dodge Attacks +43% Chance to Avoid Projectiles")
  Spells[11] = new SpellInfo("190 Energy Cost,Nighmare Attributes:, 303 Health 1230 Energy,<B>Nightmare Abilities:</B>, Psionic Beam: 45 Damage 45 Vitality Damage,Dream Surge: 10 Projectiles 100% Chance to pass through enemies 56 Damage 56 Vitality Damage 30% of Attack damage converted to Health, Dodge Attack: 44% Chance to Dodge Attacks +44% Chance to Avoid Projectiles")
  Spells[12] = new SpellInfo("194 Energy Cost,Nighmare Attributes:, 331 Health 1260 Energy,<B>Nightmare Abilities:</B>, Psionic Beam: 48 Damage 48 Vitality Damage,Dream Surge: 10 Projectiles 100% Chance to pass through enemies 59 Damage 59 Vitality Damage 30% of Attack damage converted to Health, Dodge Attack: 45% Chance to Dodge Attacks +45% Chance to Avoid Projectiles")
  Spells[13] = new SpellInfo("198 Energy Cost,Nighmare Attributes:, 361 Health 1290 Energy,<B>Nightmare Abilities:</B>, Psionic Beam: 51 Damage 51 Vitality Damage,Dream Surge: 10 Projectiles 100% Chance to pass through enemies 62 Damage 62 Vitality Damage 30% of Attack damage converted to Health, Dodge Attack: 46% Chance to Dodge Attacks +46% Chance to Avoid Projectiles")
  Spells[14] = new SpellInfo("202 Energy Cost,Nighmare Attributes:, 393 Health 1320 Energy,<B>Nightmare Abilities:</B>, Psionic Beam: 54 Damage 54 Vitality Damage,Dream Surge: 10 Projectiles 100% Chance to pass through enemies 65 Damage 65 Vitality Damage 30% of Attack damage converted to Health, Dodge Attack: 47% Chance to Dodge Attacks +47% Chance to Avoid Projectiles")
  Spells[15] = new SpellInfo("206 Energy Cost,Nighmare Attributes:, 428 Health 1350 Energy,<B>Nightmare Abilities:</B>, Psionic Beam: 56 Damage 56 Vitality Damage,Dream Surge: 10 Projectiles 100% Chance to pass through enemies 67 Damage 67 Vitality Damage 30% of Attack damage converted to Health, Dodge Attack: 48% Chance to Dodge Attacks +48% Chance to Avoid Projectiles")
  Spells[16] = new SpellInfo("166 Energy Cost,Nighmare Attributes:, 466 Health 1380 Energy,<B>Nightmare Abilities:</B>, Psionic Beam: 58 Damage 58 Vitality Damage,Dream Surge: 10 Projectiles 100% Chance to pass through enemies 69 Damage 69 Vitality Damage 30% of Attack damage converted to Health, Dodge Attack: 49% Chance to Dodge Attacks +49% Chance to Avoid Projectiles")
  Skills[7] = new Skill("Summon Nightmare", 10, Spells, -1, "Calls forth a nightmarish phantasm from the dream world to serve as your familiar.")

  // Psionic Burn
  Spells = new Array();
  Spells[1] = new SpellInfo("3.5 Meter Radius, 36 Electrical Burn Damage over 4.0 Seconds, +8% Damage to Demons")
  Spells[2] = new SpellInfo("3.5 Meter Radius, 57 Electrical Burn Damage over 4.0 Seconds, +12% Damage to Demons")
  Spells[3] = new SpellInfo("3.5 Meter Radius, 70 Electrical Burn Damage over 4.0 Seconds, +16% Damage to Demons")
  Spells[4] = new SpellInfo("3.5 Meter Radius, 84 Electrical Burn Damage over 4.0 Seconds, +20% Damage to Demons")
  Spells[5] = new SpellInfo("3.5 Meter Radius, 100 Electrical Burn Damage over 4.0 Seconds, +24% Damage to Demons")
  Spells[6] = new SpellInfo("3.5 Meter Radius, 116 Electrical Burn Damage over 4.0 Seconds, +28% Damage to Demons")
  Spells[7] = new SpellInfo("3.5 Meter Radius, 132 Electrical Burn Damage over 4.0 Seconds, +32% Damage to Demons")
  Spells[8] = new SpellInfo("3.5 Meter Radius, 150 Electrical Burn Damage over 4.0 Seconds, +36% Damage to Demons")
  Skills[8] = new Skill("Psionic Burn", 10, Spells, 1, "Psionic energy within the target ignites and explodes outward, burning through their material being and inflicting severe damage to adjacent targets.")

  // Dream Stealer
  Spells = new Array();
  Spells[1] = new SpellInfo("10 Energy Cost, 360 Arc of Attack, 3 Target Maximum,171 Damage,90 Energy Leech over 3.0 Seconds, 1.5 seconds of Stun.")
  Spells[2] = new SpellInfo("12 Energy Cost, 360 Arc of Attack, 3 Target Maximum,197 Damage,135 Energy Leech over 3.0 Seconds, 2.0 seconds of Stun.")
  Spells[3] = new SpellInfo("14 Energy Cost, 360 Arc of Attack, 4 Target Maximum,233 Damage,180 Energy Leech over 3.0 Seconds, 2.5 seconds of Stun.")
  Spells[4] = new SpellInfo("16 Energy Cost, 360 Arc of Attack, 4 Target Maximum,252 Damage,225 Energy Leech over 3.0 Seconds, 3.0 seconds of Stun.")
  Spells[5] = new SpellInfo("18 Energy Cost, 360 Arc of Attack, 5 Target Maximum,283 Damage,270 Energy Leech over 3.0 Seconds, 3.4 seconds of Stun.")
  Spells[6] = new SpellInfo("20 Energy Cost, 360 Arc of Attack, 5 Target Maximum,315 Damage,318 Energy Leech over 3.0 Seconds, 4.8 seconds of Stun.")
  Spells[7] = new SpellInfo("22 Energy Cost, 360 Arc of Attack, 6 Target Maximum,348 Damage,360 Energy Leech over 3.0 Seconds, 4.1 seconds of Stun.")
  Spells[8] = new SpellInfo("24 Energy Cost, 360 Arc of Attack, 6 Target Maximum,382 Damage,405 Energy Leech over 3.0 Seconds, 4.5 seconds of Stun.")
  Skills[9] = new Skill("Dream Stealer", 10, Spells, 5, "Devastate your enemies and steal their power by ripping the very dreams from their minds.")

  // Chaotic Resonance
  Spells = new Array();
  Spells[1] = new SpellInfo("8 Energy Cost, +14% Damage, 25 Reduced Armor for 5.0 Seconds")
  Spells[2] = new SpellInfo("10 Energy Cost, +20% Damage, 39 Reduced Armor for 5.0 Seconds")
  Spells[3] = new SpellInfo("11 Energy Cost, +26% Damage, 55 Reduced Armor for 5.0 Seconds")
  Spells[4] = new SpellInfo("13 Energy Cost, +32% Damage, 73 Reduced Armor for 5.0 Seconds")
  Spells[5] = new SpellInfo("14 Energy Cost, +38% Damage, 93 Reduced Armor for 5.0 Seconds")
  Spells[6] = new SpellInfo("16 Energy Cost, +44% Damage, 115 Reduced Armor for 5.0 Seconds")
  Spells[7] = new SpellInfo("17 Energy Cost, +50% Damage, 140 Reduced Armor for 5.0 Seconds")
  Spells[8] = new SpellInfo("19 Energy Cost, +56% Damage, 168 Reduced Armor for 5.0 Seconds")
  Skills[10] = new Skill("Chaotic Resonance", 10, Spells, 2, "Amplifies the physical distortion effect, causing it to shatter armor and break bones.")

  // Trance of Convalescence
  Spells = new Array();
  Spells[1] = new SpellInfo("12.0 Meter Radius, 3% Damage Absoption, +1.0 Health Regeneration per second,+1.0 Energy Regeneration per second,+100 Energy Reserved")
  Spells[2] = new SpellInfo("12.0 Meter Radius, 4% Damage Absoption, +2.0 Health Regeneration per second,+1.2 Energy Regeneration per second,+100 Energy Reserved")
  Spells[3] = new SpellInfo("12.0 Meter Radius, 5% Damage Absoption, +3.0 Health Regeneration per second,+1.4 Energy Regeneration per second,+100 Energy Reserved")
  Spells[4] = new SpellInfo("12.0 Meter Radius, 6% Damage Absoption, +4.0 Health Regeneration per second,+1.6 Energy Regeneration per second,+100 Energy Reserved")
  Spells[5] = new SpellInfo("12.0 Meter Radius, 7% Damage Absoption, +5.0 Health Regeneration per second,+1.8 Energy Regeneration per second,+100 Energy Reserved")
  Spells[6] = new SpellInfo("12.0 Meter Radius, 8% Damage Absoption, +6.0 Health Regeneration per second,+2.0 Energy Regeneration per second,+100 Energy Reserved")
  Spells[7] = new SpellInfo("12.0 Meter Radius, 9% Damage Absoption, +7.0 Health Regeneration per second,+2.2 Energy Regeneration per second,+100 Energy Reserved")
  Spells[8] = new SpellInfo("12.0 Meter Radius, 10% Damage Absoption, +8.0 Health Regeneration per second,+2.4 Energy Regeneration per second,+100 Energy Reserved")
  Spells[9] = new SpellInfo("12.0 Meter Radius, 11% Damage Absoption, +9.0 Health Regeneration per second,+2.6 Energy Regeneration per second,+100 Energy Reserved")
  Spells[10] = new SpellInfo("12.0 Meter Radius, 12% Damage Absoption, +10.0 Health Regeneration per second,+2.8 Energy Regeneration per second,+100 Energy Reserved")
  Spells[11] = new SpellInfo("12.0 Meter Radius, 13% Damage Absoption, +11.0 Health Regeneration per second,+3.0 Energy Regeneration per second,+100 Energy Reserved")
  Spells[12] = new SpellInfo("12.0 Meter Radius, 15% Damage Absoption, +12.0 Health Regeneration per second,+3.2 Energy Regeneration per second,+100 Energy Reserved")
  Skills[11] = new Skill("Trance of Convalescence", 16, Spells, -1, "A restful state of mind causes increased life recovery and damage absorption for the player and allies<BR><B>Trance Skill - Only one trance can be active at a time</b>.")

  // Hypnotic Gaze
  Spells = new Array();
  Spells[1] = new SpellInfo("72 Energy Cost, 3.0 seconds of Confusion")
  Spells[2] = new SpellInfo("74 Energy Cost, 3.5 seconds of Confusion")
  Spells[3] = new SpellInfo("75 Energy Cost, 4.0 seconds of Confusion")
  Spells[4] = new SpellInfo("77 Energy Cost, 4.5 seconds of Confusion")
  Spells[5] = new SpellInfo("78 Energy Cost, 5.0 seconds of Confusion")
  Spells[6] = new SpellInfo("80 Energy Cost, 5.5 seconds of Confusion")
  Spells[7] = new SpellInfo("82 Energy Cost, 6.0 seconds of Confusion")
  Spells[8] = new SpellInfo("83 Energy Cost, 6.5 seconds of Confusion")
  Skills[12] = new Skill("Hypnotic Gaze", 16, Spells, 7, "The mesmerizing stare of the Nightmare is able to dominate lesser inds and throw them into a state of confusion, causing them to wander aimlessly and attack phantom images.")

  // Distortion Field
  Spells = new Array();
  Spells[1] = new SpellInfo("5% Chance of Activating, 15.0 Second Duration, 18 Damage Absorption, 3 Damage Retaliation")
  Spells[2] = new SpellInfo("5% Chance of Activating, 15.0 Second Duration, 21 Damage Absorption, 7 Damage Retaliation")
  Spells[3] = new SpellInfo("5% Chance of Activating, 15.0 Second Duration, 24 Damage Absorption, 11 Damage Retaliation")
  Spells[4] = new SpellInfo("5% Chance of Activating, 15.0 Second Duration, 27 Damage Absorption, 17 Damage Retaliation")
  Spells[5] = new SpellInfo("5% Chance of Activating, 15.0 Second Duration, 30 Damage Absorption, 23 Damage Retaliation")
  Spells[6] = new SpellInfo("5% Chance of Activating, 15.0 Second Duration, 33 Damage Absorption, 30 Damage Retaliation")
  Spells[7] = new SpellInfo("5% Chance of Activating, 15.0 Second Duration, 36 Damage Absorption, 37 Damage Retaliation")
  Spells[8] = new SpellInfo("5% Chance of Activating, 15.0 Second Duration, 39 Damage Absorption, 45 Damage Retaliation")
  Skills[13] = new Skill("Distortion Field", 16, Spells, -1, "A field of psionic power bends the fabric of reality around the player, negating some of the damage from enemy attacks and dealing retaliatory damage to enemies that strike you.")

  // Distort Reality
  Spells = new Array();
  Spells[1] = new SpellInfo("100 Energy Cost, 8.0 Meter Radius, 57 Damage, 45 Vitality Damage, 1.5 seconds of Stun")
  Spells[2] = new SpellInfo("104 Energy Cost, 8.0 Meter Radius, 69 Damage, 53 Vitality Damage, 1.5 seconds of Stun")
  Spells[3] = new SpellInfo("108 Energy Cost, 8.0 Meter Radius, 80 Damage, 61 Vitality Damage, 1.5 seconds of Stun")
  Spells[4] = new SpellInfo("112 Energy Cost, 8.0 Meter Radius, 92 Damage, 69 Vitality Damage, 1.5 seconds of Stun")
  Spells[5] = new SpellInfo("116 Energy Cost, 8.0 Meter Radius, 106 Damage, 79 Vitality Damage, 1.5 seconds of Stun")
  Spells[6] = new SpellInfo("120 Energy Cost, 8.0 Meter Radius, 120 Damage, 89 Vitality Damage, 1.5 seconds of Stun")
  Spells[7] = new SpellInfo("124 Energy Cost, 8.0 Meter Radius, 135 Damage, 100 Vitality Damage, 1.5 seconds of Stun")
  Spells[8] = new SpellInfo("128 Energy Cost, 8.0 Meter Radius, 151 Damage, 111 Vitality Damage, 1.5 seconds of Stun")
  Spells[9] = new SpellInfo("132 Energy Cost, 8.0 Meter Radius, 168 Damage, 123 Vitality Damage, 1.5 seconds of Stun")
  Spells[10] = new SpellInfo("136 Energy Cost, 8.0 Meter Radius, 186 Damage, 136 Vitality Damage, 1.5 seconds of Stun")
  Spells[11] = new SpellInfo("140 Energy Cost, 8.0 Meter Radius, 205 Damage, 150 Vitality Damage, 1.5 seconds of Stun")
  Spells[12] = new SpellInfo("144 Energy Cost, 8.0 Meter Radius, 225 Damage, 164 Vitality Damage, 1.5 seconds of Stun")
  Skills[14] = new Skill("Distort Reality", 16, Spells, -1, "Sends out a powerful ripple of distortion around the player that tears the fabric of reality, causing severe damage to enemies caught within it.")

  // Temporal Flux
  Spells = new Array();
  Spells[1] = new SpellInfo("+2% Total Speed, +3% Chance to Avoid Projectiles, 8% Slow Resistance")
  Spells[2] = new SpellInfo("+4% Total Speed, +5% Chance to Avoid Projectiles, 12% Slow Resistance")
  Spells[3] = new SpellInfo("+6% Total Speed, +8% Chance to Avoid Projectiles, 16% Slow Resistance")
  Spells[4] = new SpellInfo("+8% Total Speed, +10% Chance to Avoid Projectiles, 20% Slow Resistance")
  Spells[5] = new SpellInfo("+10% Total Speed, +12% Chance to Avoid Projectiles, 24% Slow Resistance")
  Spells[6] = new SpellInfo("+12% Total Speed, +15% Chance to Avoid Projectiles, 28% Slow Resistance")
  Skills[15] = new Skill("Temporal Flux", 24, Spells, 4, "A subtle acceleration of time around the player allows them to move more quickly, anticipate attacks, and negate the dlowing effects of enemy skills.")

  // Psionic Immonlation
  Spells = new Array();
  Spells[1] = new SpellInfo("+18 Energy Cost, 96 Electrical Burn Damage over 4.0 Seconds,+50% Damage to Demons")
  Spells[2] = new SpellInfo("+26 Energy Cost, 129 Electrical Burn Damage over 4.0 Seconds,+50% Damage to Demons")
  Spells[3] = new SpellInfo("+34 Energy Cost, 164 Electrical Burn Damage over 4.0 Seconds,+50% Damage to Demons")
  Spells[4] = new SpellInfo("+42 Energy Cost, 199 Electrical Burn Damage over 4.0 Seconds,+50% Damage to Demons")
  Spells[5] = new SpellInfo("+50 Energy Cost, 236 Electrical Burn Damage over 4.0 Seconds,+50% Damage to Demons")
  Spells[6] = new SpellInfo("+58 Energy Cost, 275 Electrical Burn Damage over 4.0 Seconds,+50% Damage to Demons")
  Spells[7] = new SpellInfo("+66 Energy Cost, 316 Electrical Burn Damage over 4.0 Seconds,+50% Damage to Demons")
  Spells[8] = new SpellInfo("+74 Energy Cost, 358 Electrical Burn Damage over 4.0 Seconds,+50% Damage to Demons")
  Spells[9] = new SpellInfo("+82 Energy Cost, 401 Electrical Burn Damage over 4.0 Seconds,+50% Damage to Demons")
  Spells[10] = new SpellInfo("+90 Energy Cost, 447 Electrical Burn Damage over 4.0 Seconds,+50% Damage to Demons")
  Spells[11] = new SpellInfo("+95 Energy Cost, 494 Electrical Burn Damage over 4.0 Seconds,+50% Damage to Demons")
  Spells[12] = new SpellInfo("+99 Energy Cost, 544 Electrical Burn Damage over 4.0 Seconds,+50% Damage to Demons")
  Skills[16] = new Skill("Psionic Immonlation", 24, Spells, 2, "Psionic energies ignite into a surge of electrical power that causes horrific burning over a short duration.")

  // Trance of Wrath
  Spells = new Array();
  Spells[1] = new SpellInfo("1 Active Energy Cost per Second,2.8 Meter Radius,26 Electrical Burn Damage over 4.0 Seconds, 10% Reduced Resistance for 4.0 Seconds,1.0 seconds of Skill Disruption")
  Spells[2] = new SpellInfo("1 Active Energy Cost per Second,3.0 Meter Radius,38 Electrical Burn Damage over 4.0 Seconds, 12% Reduced Resistance for 4.0 Seconds,1.0 seconds of Skill Disruption")
  Spells[3] = new SpellInfo("1 Active Energy Cost per Second,3.2 Meter Radius,49 Electrical Burn Damage over 4.0 Seconds, 14% Reduced Resistance for 4.0 Seconds,1.0 seconds of Skill Disruption")
  Spells[4] = new SpellInfo("1 Active Energy Cost per Second,3.4 Meter Radius,61 Electrical Burn Damage over 4.0 Seconds, 16% Reduced Resistance for 4.0 Seconds,1.0 seconds of Skill Disruption")
  Spells[5] = new SpellInfo("1 Active Energy Cost per Second,3.6 Meter Radius,73 Electrical Burn Damage over 4.0 Seconds, 18% Reduced Resistance for 4.0 Seconds,1.0 seconds of Skill Disruption")
  Spells[6] = new SpellInfo("1 Active Energy Cost per Second,3.8 Meter Radius,86 Electrical Burn Damage over 4.0 Seconds, 20% Reduced Resistance for 4.0 Seconds,1.0 seconds of Skill Disruption")
  Spells[7] = new SpellInfo("1 Active Energy Cost per Second,4.0 Meter Radius,100 Electrical Burn Damage over 4.0 Seconds, 22% Reduced Resistance for 4.0 Seconds,1.0 seconds of Skill Disruption")
  Spells[8] = new SpellInfo("1 Active Energy Cost per Second,4.2 Meter Radius,115 Electrical Burn Damage over 4.0 Seconds, 24% Reduced Resistance for 4.0 Seconds,1.0 seconds of Skill Disruption")
  Spells[9] = new SpellInfo("1 Active Energy Cost per Second,4.4 Meter Radius,130 Electrical Burn Damage over 4.0 Seconds, 26% Reduced Resistance for 4.0 Seconds,1.0 seconds of Skill Disruption")
  Spells[10] = new SpellInfo("1 Active Energy Cost per Second,4.6 Meter Radius,147 Electrical Burn Damage over 4.0 Seconds, 28% Reduced Resistance for 4.0 Seconds,1.0 seconds of Skill Disruption")
  Spells[11] = new SpellInfo("1 Active Energy Cost per Second,4.8 Meter Radius,163 Electrical Burn Damage over 4.0 Seconds, 30% Reduced Resistance for 4.0 Seconds,1.0 seconds of Skill Disruption")
  Spells[12] = new SpellInfo("1 Active Energy Cost per Second,5.0 Meter Radius,182 Electrical Burn Damage over 4.0 Seconds, 32% Reduced Resistance for 4.0 Seconds,1.0 seconds of Skill Disruption")
  Skills[17] = new Skill("Trance of Wrath", 32, Spells, -1, "Waves of negative psionic energy emanate from the player, disrupting enemy thoughts and burning through their physical being.<BR><B>Trance Skill - Only one trance can be active at a time.</b>")

  // Master Mind
  Spells = new Array();
  Spells[1] = new SpellInfo("50 Energy Cost, 15.0 Meter Radius,Bonus to All Pets:,+5% Total Damage, +30% Health Regeneration, +30% Energy Regeneration")
  Spells[2] = new SpellInfo("50 Energy Cost, 15.0 Meter Radius,Bonus to All Pets:,+10% Total Damage, +45% Health Regeneration, +45% Energy Regeneration")
  Spells[3] = new SpellInfo("50 Energy Cost, 15.0 Meter Radius,Bonus to All Pets:,+15% Total Damage, +60% Health Regeneration, +60% Energy Regeneration")
  Spells[4] = new SpellInfo("50 Energy Cost, 15.0 Meter Radius,Bonus to All Pets:,+20% Total Damage, +75% Health Regeneration, +75% Energy Regeneration")
  Spells[5] = new SpellInfo("50 Energy Cost, 15.0 Meter Radius,Bonus to All Pets:,+25% Total Damage, +90% Health Regeneration, +90% Energy Regeneration")
  Spells[6] = new SpellInfo("50 Energy Cost, 15.0 Meter Radius,Bonus to All Pets:,+30% Total Damage, +105% Health Regeneration, +105% Energy Regeneration")
  Spells[7] = new SpellInfo("50 Energy Cost, 15.0 Meter Radius,Bonus to All Pets:,+35% Total Damage, +120% Health Regeneration, +120% Energy Regeneration")
  Spells[8] = new SpellInfo("50 Energy Cost, 15.0 Meter Radius,Bonus to All Pets:,+40% Total Damage, +135% Health Regeneration, +135% Energy Regeneration")
  Skills[18] = new Skill("Master Mind", 32, Spells, 12, "The Nightmare is able to speak to the minds of your other minions and coordinate their attacks, making them more effective in combat.")

  // Temporal Rift
  Spells = new Array();
  Spells[1] = new SpellInfo("3 Energy Cost, 216 Electical Burn Damage over 4.0 Seconds, 15% Energy Drained (45% Energy drained causes Damage), 1.5 seconds of Petrify, +27 Damage to Demons")
  Spells[2] = new SpellInfo("4 Energy Cost, 256 Electical Burn Damage over 4.0 Seconds, 15% Energy Drained (60% Energy drained causes Damage), 2.0 seconds of Petrify, +38 Damage to Demons")
  Spells[3] = new SpellInfo("5 Energy Cost, 300 Electical Burn Damage over 4.0 Seconds, 15% Energy Drained (75% Energy drained causes Damage), 2.5 seconds of Petrify, +49 Damage to Demons")
  Spells[4] = new SpellInfo("6 Energy Cost, 344 Electical Burn Damage over 4.0 Seconds, 15% Energy Drained (90% Energy drained causes Damage), 3.0 seconds of Petrify, +60 Damage to Demons")
  Spells[5] = new SpellInfo("7 Energy Cost, 392 Electical Burn Damage over 4.0 Seconds, 15% Energy Drained (105% Energy drained causes Damage), 3.5 seconds of Petrify, +72 Damage to Demons")
  Spells[6] = new SpellInfo("8 Energy Cost, 444 Electical Burn Damage over 4.0 Seconds, 15% Energy Drained (120% Energy drained causes Damage), 4.0 seconds of Petrify, +85 Damage to Demons")
  Spells[7] = new SpellInfo("9 Energy Cost, 492 Electical Burn Damage over 4.0 Seconds, 15% Energy Drained (135% Energy drained causes Damage), 4.5 seconds of Petrify, +97 Damage to Demons")
  Spells[8] = new SpellInfo("10 Energy Cost, 552 Electical Burn Damage over 4.0 Seconds, 15% Energy Drained (150% Energy drained causes Damage), 5.0 seconds of Petrify, +112 Damage to Demons")
  Spells[9] = new SpellInfo("11 Energy Cost, 608 Electical Burn Damage over 4.0 Seconds, 15% Energy Drained (165% Energy drained causes Damage), 5.5 seconds of Petrify, +126 Damage to Demons")
  Spells[10] = new SpellInfo("12 Energy Cost, 668 Electical Burn Damage over 4.0 Seconds, 15% Energy Drained (180% Energy drained causes Damage), 6.0 seconds of Petrify, +141 Damage to Demons")
  Spells[11] = new SpellInfo("12 Energy Cost, 732 Electical Burn Damage over 4.0 Seconds, 15% Energy Drained (195% Energy drained causes Damage), 6.5 seconds of Petrify, +157 Damage to Demons")
  Spells[12] = new SpellInfo("12 Energy Cost, 796 Electical Burn Damage over 4.0 Seconds, 15% Energy Drained (210% Energy drained causes Damage), 7.0 seconds of Petrify, +173 Damage to Demons")
  Skills[19] = new Skill("Temporal Rift", 32, Spells, 14, "Enhances the power of the distortion ripple, unleashing a surge of psionic energy that causes massive damage to enemies and temporarily freezes them in time.")


  // set the mastery array
  Mastery[9] = new setmastery(Skills, Attributes)

  // testing
  //alert(Mastery[2].Skills[19].spells[4].spellinfo)
  //alert(Skills[1][0].desc)

}