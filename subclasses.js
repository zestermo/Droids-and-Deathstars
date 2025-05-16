const subclasses = [
    // Berserker
    {
      className: "Berserker",
      name: "Ballistic Approach",
      description: "A berserker excelling with ranged weapons, delivering devastating blaster attacks while raging.",
      features: "Level 3: Gain proficiency in martial blasters. Add rage damage to ranged weapon attacks. Use bonus action to make a ranged attack when entering rage."
    },
    {
      className: "Berserker",
      name: "Cyclone Approach",
      description: "A berserker who strikes multiple foes in a whirlwind of melee attacks.",
      features: "Level 3: When raging, use bonus action to make a melee attack against a different creature within 5 feet of your original target. Gain +1 AC while raging."
    },
    {
      className: "Berserker",
      name: "Juggernaut Approach",
      description: "A berserker who charges into battle, shrugging off damage and overpowering enemies.",
      features: "Level 3: Gain resistance to bludgeoning damage while raging. Use reaction to reduce damage from one attack by 1d6 + Constitution modifier."
    },
    {
      className: "Berserker",
      name: "Marauder Approach",
      description: "A force-sensitive berserker who channels rage through force powers for enhanced combat.",
      features: "Level 3: Learn one force power (e.g., Force Push). Gain ability to cast a force power as a bonus action while raging (1/rest)."
    },
    // Consular
    {
      className: "Consular",
      name: "Way of Balance",
      description: "A consular mastering both light and dark force powers for versatile combat and support.",
      features: "Level 3: Learn one light and one dark force power (e.g., Force Heal, Force Choke). Gain +1 to force power save DC when at half health or below."
    },
    {
      className: "Consular",
      name: "Way of Lightning",
      description: "A consular wielding electric force powers to strike enemies with devastating energy.",
      features: "Level 3: Learn one force power (e.g., Force Shock). Deal 1d6 lightning damage to a target within 10 feet as a bonus action (1/rest)."
    },
    {
      className: "Consular",
      name: "Way of Suggestion",
      description: "A consular manipulating minds with force powers to control and persuade others.",
      features: "Level 3: Learn one force power (e.g., Mind Trick). Use bonus action to impose disadvantage on a creature’s Wisdom saving throw (1/rest)."
    },
    {
      className: "Consular",
      name: "Way of the Sage",
      description: "A consular focusing on wisdom and force mastery to guide allies and debilitate foes.",
      features: "Level 3: Learn one force power (e.g., Force Guidance). Grant an ally advantage on one ability check or attack roll as a reaction (1/rest)."
    },
    // Engineer
    {
      className: "Engineer",
      name: "Acquisitions Practice",
      description: "An engineer skilled in scavenging and crafting, adept at acquiring and modifying tech.",
      features: "Level 3: Gain proficiency in scavenged tech. Create temporary tech items during a short rest (e.g., improvised gadgets). Add +2 to Intelligence (Investigation) checks for resources."
    },
    {
      className: "Engineer",
      name: "Armormech Engineering",
      description: "An engineer specializing in advanced armor, enhancing personal and party defenses.",
      features: "Level 3: Gain proficiency in armorsmith’s tools. Spend tech points to upgrade armor, granting +1 AC or resistance to one damage type. Upgrade ally armor during long rests."
    },
    {
      className: "Engineer",
      name: "Armstech Engineering",
      description: "An engineer crafting powerful weapons, boosting offensive capabilities.",
      features: "Level 3: Gain proficiency in weaponsmith’s tools. Spend tech points to enhance a weapon, adding +1 to attack or damage rolls. Craft temporary weapons during long rests."
    },
    {
      className: "Engineer",
      name: "Gadgeteer Engineering",
      description: "An engineer creating versatile gadgets for utility and combat support.",
      features: "Level 3: Gain proficiency in tinker’s tools. Create one gadget per short rest (e.g., smoke bomb, grappling hook). Gadgets last until next rest."
    },
    {
      className: "Engineer",
      name: "Unstable Engineering",
      description: "An engineer experimenting with volatile tech for high-risk, high-reward effects.",
      features: "Level 3: Gain proficiency in demolitions kit. Create unstable tech device (e.g., explosive) dealing 2d6 damage in 10-foot radius, with 10% chance to malfunction (1/rest)."
    },
    // Fighter
    {
      className: "Fighter",
      name: "Assault Specialist",
      description: "A versatile fighter excelling with any weapon, delivering devastating attacks.",
      features: "Level 3: After using Action Surge, make one additional attack as a bonus action. Add proficiency bonus to one damage roll per turn."
    },
    {
      className: "Fighter",
      name: "Blademaster Specialist",
      description: "A fighter mastering melee combat, wielding blades with precision and flair.",
      features: "Level 3: Gain +1 to attack rolls with melee weapons. Use reaction to parry, reducing melee damage by 1d6 + Dexterity modifier."
    },
    {
      className: "Fighter",
      name: "Shield Specialist",
      description: "A fighter using tech-enhanced shields to protect allies and control the battlefield.",
      features: "Level 3: Gain proficiency with shields. Use bonus action to grant +2 AC to an ally within 5 feet until your next turn (1/rest)."
    },
    {
      className: "Fighter",
      name: "Tactical Specialist",
      description: "A fighter coordinating team strategies for precise and effective combat.",
      features: "Level 3: Gain proficiency in Insight. Use bonus action to grant an ally within 30 feet advantage on their next attack roll (1/rest)."
    },
    // Guardian
    {
      className: "Guardian",
      name: "Makashi Form",
      description: "A guardian mastering elegant lightsaber dueling, excelling in one-on-one combat.",
      features: "Level 3: Gain +2 AC against one attacker when wielding a lightweapon. Use Channel the Force to impose disadvantage on one attack against you (1/rest)."
    },
    {
      className: "Guardian",
      name: "Niman Form",
      description: "A guardian balancing lightsaber combat with force powers for versatility.",
      features: "Level 3: Learn one force power (e.g., Force Pull). Use bonus action to cast a force power after making a lightweapon attack (1/rest)."
    },
    {
      className: "Guardian",
      name: "Shien/Djem So Form",
      description: "A guardian excelling in counterattacks, deflecting blaster bolts and striking back.",
      features: "Level 3: Use reaction to deflect a ranged attack, reducing damage by 1d10 + Dexterity modifier. If damage is reduced to 0, deal 1d8 damage to attacker (1/rest)."
    },
    {
      className: "Guardian",
      name: "Soresu Form",
      description: "A guardian specializing in defensive lightsaber techniques to protect allies.",
      features: "Level 3: Gain +2 AC when wielding a lightweapon and not attacking. Use Channel the Force to grant an ally within 10 feet +2 AC for 1 round (1/rest)."
    },
    // Monk
    {
      className: "Monk",
      name: "Crimson Order",
      description: "A monk trained in aggressive combat, using force to overwhelm foes.",
      features: "Level 3: Gain +1 to melee damage rolls when using ki points. Spend 1 ki point to make an additional unarmed strike as a bonus action."
    },
    {
      className: "Monk",
      name: "Echani Order",
      description: "A monk mastering precise martial arts, focusing on speed and agility.",
      features: "Level 3: Gain +10 feet to movement speed when not wearing armor. Spend 1 ki point to dodge as a bonus action, granting +2 AC until your next turn."
    },
    {
      className: "Monk",
      name: "Matukai Order",
      description: "A monk blending physical prowess with force sensitivity for endurance.",
      features: "Level 3: Gain resistance to one damage type (chosen at long rest) when using ki. Spend 1 ki point to regain hit points equal to Wisdom modifier."
    },
    {
      className: "Monk",
      name: "Nightsister Order",
      description: "A monk wielding dark force powers, specializing in stealth and mysticism.",
      features: "Level 3: Learn one force power (e.g., Force Cloak). Spend 1 ki point to become invisible for 1 minute or until you attack (1/rest)."
    },
    // Operative
    {
      className: "Operative",
      name: "Beguiler Practice",
      description: "An operative using force powers to deceive and manipulate enemies.",
      features: "Level 3: Learn one force power (e.g., Charm Person). Add Sneak Attack damage to targets affected by your force powers."
    },
    {
      className: "Operative",
      name: "Lethality Practice",
      description: "An operative specializing in precise, deadly strikes from the shadows.",
      features: "Level 3: Gain +2 to initiative rolls. Add 1d6 damage to Sneak Attack if you have advantage on the attack roll."
    },
    {
      className: "Operative",
      name: "Sharpshooter Practice",
      description: "An operative excelling at long-range sneak attacks with blasters.",
      features: "Level 3: Gain Steady Aim, granting advantage on your next ranged attack as a bonus action if you don’t move. Add Sneak Attack damage to ranged attacks without cover."
    },
    // Scholar
    {
      className: "Scholar",
      name: "Gambler Pursuit",
      description: "A scholar using cunning and luck to outwit opponents and seize opportunities.",
      features: "Level 3: Gain proficiency in Deception and Sleight of Hand. Use reaction to reroll one ability check or saving throw (1/rest)."
    },
    {
      className: "Scholar",
      name: "Physician Pursuit",
      description: "A scholar specializing in medicine, healing allies and countering ailments.",
      features: "Level 3: Gain proficiency in Medicine. Use bonus action to restore 1d8 + Intelligence modifier hit points to an ally within 5 feet (1/rest)."
    },
    {
      className: "Scholar",
      name: "Politician Pursuit",
      description: "A scholar mastering diplomacy and leadership to influence and inspire.",
      features: "Level 3: Gain proficiency in Persuasion. Use bonus action to grant an ally within 30 feet +1d4 to their next ability check or attack roll (1/rest)."
    },
    {
      className: "Scholar",
      name: "Tactician Pursuit",
      description: "A scholar orchestrating battlefield strategies to outmaneuver enemies.",
      features: "Level 3: Gain proficiency in History. Use reaction to grant an ally within 30 feet advantage on their next saving throw (1/rest)."
    },
    // Scout
    {
      className: "Scout",
      name: "Bulwark Technique",
      description: "A scout using tech to fortify defenses and protect allies in combat.",
      features: "Level 3: Deploy a temporary shield (10 temporary hit points) to an ally within 30 feet as a bonus action (1/rest). Gain proficiency in tech powers."
    },
    {
      className: "Scout",
      name: "Hunter Technique",
      description: "A scout specializing in tracking and eliminating high-value targets.",
      features: "Level 3: Mark a target to gain +2 to attack rolls against them for 1 minute (1/rest). Gain proficiency in Survival."
    },
    {
      className: "Scout",
      name: "Slayer Technique",
      description: "A scout exploiting enemy weaknesses to deal precise, lethal damage.",
      features: "Level 3: Add 1d6 damage to attacks against a marked target. Use bonus action to mark a new target (1/rest)."
    },
    {
      className: "Scout",
      name: "Stalker Technique",
      description: "A scout using stealth and tech to ambush and evade enemies.",
      features: "Level 3: Gain proficiency in Stealth. Use bonus action to hide even when lightly obscured (1/rest)."
    },
    // Sentinel
    {
      className: "Sentinel",
      name: "Path of Focus",
      description: "A sentinel channeling force powers for precise lightsaber combat.",
      features: "Level 3: Gain +1 to attack rolls with lightweapons. Spend 1 force point to add 1d6 force damage to a lightweapon attack."
    },
    {
      className: "Sentinel",
      name: "Path of Shadows",
      description: "A sentinel using stealth and force powers to strike from the dark.",
      features: "Level 3: Gain proficiency in Stealth. Spend 1 force point to become invisible for 1 round or until you attack (1/rest)."
    },
    {
      className: "Sentinel",
      name: "Path of the Corsair",
      description: "A sentinel combining saber and blaster for dual-wield combat.",
      features: "Level 3: Gain proficiency with simple blasters. Use bonus action to gain +2 AC when wielding a lightweapon and blaster (no two-weapon fighting)."
    },
    {
      className: "Sentinel",
      name: "Path of the Forceblade",
      description: "A sentinel mastering force-enhanced blades for versatile combat.",
      features: "Level 3: Gain +1 to damage rolls with lightweapons. Spend 1 force point to make a ranged lightweapon attack (30 feet, 1/rest)."
    }
  ];