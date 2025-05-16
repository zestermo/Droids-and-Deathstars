const classes = [
  {
    name: "Berserker",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/classes/berserker_01.png",
    description: "Berserkers are primal warriors who channel raw fury into devastating combat, excelling in melee with unmatched strength and resilience.",
    hitDice: "1d12 per berserker level",
    proficiencies: {
      savingThrows: ["Strength", "Constitution"],
      armor: ["Light armor", "Medium armor", "Shields"],
      weapons: ["Simple weapons", "Martial weapons"],
      skills: ["Choose two from Animal Handling, Athletics, Intimidation, Nature, Perception, Survival"]
    },
    primaryAbility: "Strength",
    traits: "Rage: Enter a rage to gain bonus damage and resistance to damage.\nInstincts: Gain customizable combat abilities starting at 2nd level."
  },
  {
    name: "Consular",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/classes/consular_01.png",
    description: "Consulars are masters of the Force, wielding powerful abilities to heal, manipulate, or destroy, with a focus on wisdom and versatility.",
    hitDice: "1d6 per consular level",
    proficiencies: {
      savingThrows: ["Wisdom", "Charisma"],
      armor: ["None"],
      weapons: ["Simple weapons"],
      skills: ["Choose two from Deception, Insight, Lore, Persuasion, Religion"]
    },
    primaryAbility: "Wisdom or Charisma",
    traits: "Force Casting: Cast force powers with force points.\nForce-Empowered Casting: Modify powers with additional effects."
  },
  {
    name: "Engineer",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/classes/engineer_01.png",
    description: "Engineers are tech-savvy innovators, crafting gadgets and casting tech powers to support allies or disrupt enemies.",
    hitDice: "1d8 per engineer level",
    proficiencies: {
      savingThrows: ["Intelligence", "Dexterity"],
      armor: ["Light armor"],
      weapons: ["Simple weapons", "Blaster pistols"],
      skills: ["Choose three from Investigation, Mechanics, Medicine, Nature, Perception, Piloting, Technology"]
    },
    primaryAbility: "Intelligence",
    traits: "Tech Casting: Cast tech powers with tech points.\nAptitude: Grant bonuses to allies, similar to Bardic Inspiration."
  },
  {
    name: "Fighter",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/classes/fighter_01.png",
    description: "Fighters are versatile combatants, skilled in a wide range of weapons and tactics, adaptable to any battlefield role.",
    hitDice: "1d10 per fighter level",
    proficiencies: {
      savingThrows: ["Strength", "Constitution"],
      armor: ["All armor", "Shields"],
      weapons: ["Simple weapons", "Martial weapons"],
      skills: ["Choose two from Acrobatics, Athletics, History, Insight, Intimidation, Perception, Survival"]
    },
    primaryAbility: "Strength or Dexterity",
    traits: "Fighting Style: Gain a bonus to specific combat styles.\nManeuvers: Perform tactical combat actions."
  },
  {
    name: "Guardian",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/classes/guardian_01.png",
    description: "Guardians are noble protectors, blending martial prowess with force powers to defend allies and smite foes.",
    hitDice: "1d10 per guardian level",
    proficiencies: {
      savingThrows: ["Wisdom", "Charisma"],
      armor: ["Light armor", "Medium armor", "Shields"],
      weapons: ["Simple weapons", "Vibroblades"],
      skills: ["Choose two from Athletics, Insight, Intimidation, Lore, Persuasion, Religion"]
    },
    primaryAbility: "Strength or Charisma",
    traits: "Force Casting: Limited force powers.\nAuras: Provide bonuses to nearby allies."
  },
  {
    name: "Monk",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/classes/monk_01.png",
    description: "Monks are disciplined martial artists, using agility and force techniques to strike swiftly and evade danger.",
    hitDice: "1d8 per monk level",
    proficiencies: {
      savingThrows: ["Strength", "Dexterity"],
      armor: ["None"],
      weapons: ["Simple weapons", "Vibrodaggers"],
      skills: ["Choose two from Acrobatics, Athletics, History, Insight, Religion, Stealth"]
    },
    primaryAbility: "Dexterity and Wisdom",
    traits: "Martial Arts: Unarmed strikes deal extra damage.\nVows: Gain customizable monastic abilities."
  },
  {
    name: "Operative",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/classes/operative_01.png",
    description: "Operatives are stealthy specialists, excelling in subterfuge, ambushes, and precision strikes.",
    hitDice: "1d8 per operative level",
    proficiencies: {
      savingThrows: ["Dexterity", "Intelligence"],
      armor: ["Light armor"],
      weapons: ["Simple weapons", "Martial blasters"],
      skills: ["Choose four from Acrobatics, Deception, Insight, Investigation, Perception, Performance, Persuasion, Sleight of Hand, Stealth, Survival"]
    },
    primaryAbility: "Dexterity",
    traits: "Sneak Attack: Deal extra damage to surprised or flanked enemies.\nExploits: Gain tactical tricks."
  },
  {
    name: "Scholar",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/classes/scholar_01.png",
    description: "Scholars are intellectual experts, using knowledge and charisma to support allies and outwit opponents.",
    hitDice: "1d8 per scholar level",
    proficiencies: {
      savingThrows: ["Intelligence", "Wisdom"],
      armor: ["Light armor"],
      weapons: ["Simple weapons"],
      skills: ["Choose three from History, Insight, Investigation, Lore, Medicine, Nature, Persuasion, Religion"]
    },
    primaryAbility: "Intelligence or Charisma",
    traits: "Discoveries: Gain unique abilities to enhance skills.\nManeuvers: Support allies with tactical boosts."
  },
  {
    name: "Scout",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/classes/scout_01.png",
    description: "Scouts are survivalists and trackers, adept at navigating hostile environments and striking from range.",
    hitDice: "1d10 per scout level",
    proficiencies: {
      savingThrows: ["Dexterity", "Wisdom"],
      armor: ["Light armor", "Medium armor"],
      weapons: ["Simple weapons", "Martial weapons"],
      skills: ["Choose three from Acrobatics, Athletics, Investigation, Nature, Perception, Stealth, Survival"]
    },
    primaryAbility: "Dexterity or Wisdom",
    traits: "Routines: Provide bonuses to allies in specific situations.\nForce Casting: Limited force powers."
  },
  {
    name: "Sentinel",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/classes/sentinel_01.png",
    description: "Sentinels are force-wielding warriors, balancing martial skill with force powers to adapt to any challenge.",
    hitDice: "1d8 per sentinel level",
    proficiencies: {
      savingThrows: ["Dexterity", "Charisma"],
      armor: ["Light armor"],
      weapons: ["Simple weapons", "Vibroblades"],
      skills: ["Choose two from Acrobatics, Deception, Insight, Intimidation, Lore, Persuasion, Stealth"]
    },
    primaryAbility: "Dexterity or Charisma",
    traits: "Force Casting: Cast force powers.\nIdeals: Gain customizable force-based abilities."
  }
];

// For external use, export the classes array (uncomment if using as a separate file)
// export default classes;