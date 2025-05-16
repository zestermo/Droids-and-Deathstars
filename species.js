const species = [
  {
    name: "Aqualish",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/species/species_aqualish.png",
    description: "Aqualish are a walrus-like species from Ando, known for their tusks and amphibious adaptations, often working as mercenaries or traders.",
    abilityScoreIncrease: "Your Strength score increases by 2, and your Constitution score increases by 1.",
    age: "Aqualish reach adulthood at 15 and live up to 70 years.",
    size: "Aqualish are Medium, typically standing between 5 and 6 feet tall.",
    speed: "Your base walking speed is 30 feet, and you have a swimming speed of 30 feet.",
    languages: "You can speak, read, and write Galactic Basic and Aqualish.",
    traits: "Amphibious: You can breathe air and water.\nTusked Bite: Your tusks are natural weapons, dealing 1d6 piercing damage on a hit.",
    otherTraits: {
      darkvision: "You can see in darkness within 60 feet of you in grayscale."
    }
  },
  {
    name: "Arkanian",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/species/species_arkanian.png",
    description: "Arkanians are near-humans from Arkania, renowned for their scientific prowess and arrogance, often excelling in genetics and cybernetics.",
    abilityScoreIncrease: "Your Intelligence score increases by 2, and your Wisdom score increases by 1.",
    age: "Arkanians mature at the same rate as humans and live up to 90 years.",
    size: "Arkanians are Medium, typically 5 to 6 feet tall.",
    speed: "Your base walking speed is 30 feet.",
    languages: "You can speak, read, and write Galactic Basic and Arkanian.",
    traits: "Scientific Mind: You have proficiency in the Investigation skill.\nTech Savvy: You have proficiency with one tool of your choice.",
    otherTraits: {
      darkvision: "You can see in darkness within 60 feet of you in grayscale."
    }
  },
  {
    name: "Bith",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/species/species_bith.png",
    description: "Bith are a species of highly intelligent, cranium-heavy humanoids hailing from Clak'dor VII, a planet with a toxic atmosphere. They are known for their advanced intellect and contributions to music, science, and diplomacy across the galaxy.",
    abilityScoreIncrease: "Your Intelligence score increases by 2, and your Charisma score increases by 1.",
    age: "Bith mature at the same rate as humans but can live up to 100 years.",
    size: "Bith are Medium, typically standing between 5 and 6 feet tall.",
    speed: "Your base walking speed is 30 feet.",
    languages: "You can speak, read, and write Galactic Basic and Bith.",
    traits: "Keen Mind: You have advantage on Intelligence (Investigation) checks to recall information.\nMusical Aptitude: You have proficiency in one musical instrument of your choice.",
    otherTraits: {
      darkvision: "You can see in darkness within 60 feet of you in grayscale.",
      toxicResistance: "You have resistance to poison damage and advantage on saving throws against being poisoned."
    }
  },
  {
    name: "Bothan",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/species/species_bothan.png",
    description: "Bothans are furry, bipedal mammals from Bothawui, renowned for their espionage and information-gathering skills. They are agile, cunning, and often serve as spies or diplomats.",
    abilityScoreIncrease: "Your Dexterity score increases by 2, and your Intelligence score increases by 1.",
    age: "Bothans reach adulthood at 15 and live up to 80 years.",
    size: "Bothans are Medium, typically 4 to 5 feet tall.",
    speed: "Your base walking speed is 30 feet.",
    languages: "You can speak, read, and write Galactic Basic and Bothese.",
    traits: "Stealthy: You have proficiency in the Stealth skill.\nInformation Network: You have advantage on Charisma (Persuasion) checks when gathering information.",
    otherTraits: {
      darkvision: "You can see in darkness within 60 feet of you in grayscale.",
      nimble: "You can move through the space of any creature that is of a size larger than yours."
    }
  },
  {
    name: "Cathar",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/species/species_cathar.png",
    description: "Cathar are feline humanoids from Cathar, known for their bravery, loyalty, and martial prowess, often serving as warriors or protectors.",
    abilityScoreIncrease: "Your Dexterity score increases by 2, and your Strength score increases by 1.",
    age: "Cathar reach adulthood at 15 and live up to 80 years.",
    size: "Cathar are Medium, typically 5 to 6 feet tall.",
    speed: "Your base walking speed is 35 feet.",
    languages: "You can speak, read, and write Galactic Basic and Catharese.",
    traits: "Claws: Your claws are natural weapons, dealing 1d4 slashing damage on a hit.\nFeline Agility: Your speed increases by 10 feet when you take the Dash action.",
    otherTraits: {
      darkvision: "You can see in darkness within 60 feet of you in grayscale."
    }
  },
  {
    name: "Cerean",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/species/species_cerean.png",
    description: "Cereans are cone-headed humanoids from Cerea, known for their binary brains, which grant exceptional wisdom and analytical skills.",
    abilityScoreIncrease: "Your Wisdom score increases by 2, and your Intelligence score increases by 1.",
    age: "Cereans mature at 20 and live up to 100 years.",
    size: "Cereans are Medium, typically 6 to 7 feet tall.",
    speed: "Your base walking speed is 30 feet.",
    languages: "You can speak, read, and write Galactic Basic and Cerean.",
    traits: "Binary Brain: You have advantage on Wisdom (Insight) checks.\nMeditative Trance: You need only 4 hours of sleep per day.",
    otherTraits: {}
  },
  {
    name: "Chagrian",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/species/species_chagrian.png",
    description: "Chagrians are amphibious humanoids from Champala, known for their blue skin and horn-like lethorns, often excelling in diplomacy and commerce.",
    abilityScoreIncrease: "Your Charisma score increases by 2, and your Constitution score increases by 1.",
    age: "Chagrians reach adulthood at 15 and live up to 85 years.",
    size: "Chagrians are Medium, typically 5 to 6 feet tall.",
    speed: "Your base walking speed is 30 feet, and you have a swimming speed of 30 feet.",
    languages: "You can speak, read, and write Galactic Basic and Chagri.",
    traits: "Amphibious: You can breathe air and water.\nPersuasive: You have proficiency in the Persuasion skill.",
    otherTraits: {
      radiationResistance: "You have resistance to radiant damage."
    }
  },
  {
    name: "Chiss",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/species/species_chiss.png",
    description: "Chiss are blue-skinned, red-eyed humanoids from Csilla, known for their strategic minds and disciplined society. They are often found in military or leadership roles.",
    abilityScoreIncrease: "Your Intelligence score increases by 2, and your Wisdom score increases by 1.",
    age: "Chiss mature slightly slower than humans, reaching adulthood at 18, and can live up to 90 years.",
    size: "Chiss are Medium, typically 5 to 6 feet tall.",
    speed: "Your base walking speed is 30 feet.",
    languages: "You can speak, read, and write Galactic Basic and Cheunh.",
    traits: "Tactical Acumen: You have proficiency in the Insight skill.\nInfrared Vision: You can see in darkness within 60 feet, perceiving heat signatures.",
    otherTraits: {
      disciplined: "You have advantage on saving throws against being charmed.",
      coldResistance: "You have resistance to cold damage due to your adaptation to Csilla’s icy environment."
    }
  },
  {
    name: "Clawdite",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/species/species_clawdite.png",
    description: "Clawdites are shape-shifting reptilian humanoids from Zolan, often working as spies or assassins due to their natural disguise abilities.",
    abilityScoreIncrease: "Your Charisma score increases by 2, and your Dexterity score increases by 1.",
    age: "Clawdites reach adulthood at 15 and live up to 70 years.",
    size: "Clawdites are Medium, typically 5 to 6 feet tall in their natural form.",
    speed: "Your base walking speed is 30 feet.",
    languages: "You can speak, read, and write Galactic Basic and Zolan.",
    traits: "Shapechanger: You can use an action to polymorph into any humanoid of your size, retaining only your mental ability scores.",
    otherTraits: {}
  },
  {
    name: "Devaronian",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/species/species_devaronian.png",
    description: "Devaronians are horned humanoids from Devaron, with males often being adventurous and females more grounded, known for their charm and wanderlust.",
    abilityScoreIncrease: "Your Charisma score increases by 2, and your Constitution score increases by 1.",
    age: "Devaronians mature at 15 and live up to 90 years.",
    size: "Devaronians are Medium, typically 5 to 6 feet tall.",
    speed: "Your base walking speed is 30 feet.",
    languages: "You can speak, read, and write Galactic Basic and Devaronese.",
    traits: "Charming: You have proficiency in the Deception skill.\nWanderer: You have advantage on Wisdom (Survival) checks for navigation.",
    otherTraits: {}
  },
  {
    name: "Droid",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/species/species_droidclass01.png",
    description: "Droids are mechanical beings with artificial intelligence, designed for various tasks across the galaxy.",
    abilityScoreIncrease: "Your Constitution score increases by 2, and one other ability score of your choice increases by 1.",
    age: "Droids do not age but require maintenance to function optimally.",
    size: "Droids vary in size; most are Medium, standing between 4 and 6 feet tall.",
    speed: "Your base walking speed is 30 feet.",
    languages: "You can speak, read, and write Galactic Basic and Binary.",
    traits: "Construct: You do not need to eat, drink, or breathe.\nIntegrated Tools: You have proficiency with one tool of your choice.",
    otherTraits: {
      inorganic: "You are immune to poison and disease.",
      memoryBank: "You have advantage on Intelligence (History) checks to recall information."
    }
  },
  {
    name: "Dug",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/species/species_dug.png",
    description: "Dugs are small, agile humanoids from Malastare, known for their quick tempers and dexterity, often working as mechanics or racers.",
    abilityScoreIncrease: "Your Dexterity score increases by 2, and your Strength score increases by 1.",
    age: "Dugs reach adulthood at 12 and live up to 60 years.",
    size: "Dugs are Small, typically 3 to 4 feet tall.",
    speed: "Your base walking speed is 25 feet.",
    languages: "You can speak, read, and write Galactic Basic and Dugese.",
    traits: "Nimble: You can move through the space of larger creatures.\nQuick Reflexes: You have advantage on Dexterity saving throws.",
    otherTraits: {}
  },
  {
    name: "Duros",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/species/species_duros.png",
    description: "Duros are green-skinned humanoids from Duro, renowned as starfarers and navigators, with a natural aptitude for space travel.",
    abilityScoreIncrease: "Your Intelligence score increases by 2, and your Dexterity score increases by 1.",
    age: "Duros mature at 15 and live up to 80 years.",
    size: "Duros are Medium, typically 5 to 6 feet tall.",
    speed: "Your base walking speed is 30 feet.",
    languages: "You can speak, read, and write Galactic Basic and Durese.",
    traits: "Starfarer: You have proficiency in the Piloting skill.\nSpatial Awareness: You have advantage on Wisdom (Perception) checks in space.",
    otherTraits: {}
  },
  {
    name: "Ewok",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/species/species_ewok.png",
    description: "Ewoks are small, furry humanoids from Endor, known for their resourcefulness and tribal culture, often underestimated by outsiders.",
    abilityScoreIncrease: "Your Dexterity score increases by 2, and your Wisdom score increases by 1.",
    age: "Ewoks reach adulthood at 10 and live up to 60 years.",
    size: "Ewoks are Small, typically 3 to 4 feet tall.",
    speed: "Your base walking speed is 25 feet.",
    languages: "You can speak, read, and write Ewokese and understand Galactic Basic.",
    traits: "Stealthy: You have proficiency in the Stealth skill.\nPrimitive Traps: You have proficiency with improvised weapons.",
    otherTraits: {
      keenSenses: "You have advantage on Wisdom (Perception) checks that rely on smell or hearing."
    }
  },
  {
    name: "Gamorrean",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/species/species_gamorrean.png",
    description: "Gamorreans are porcine humanoids from Gamorr, known for their brute strength and loyalty, often serving as guards or mercenaries.",
    abilityScoreIncrease: "Your Strength score increases by 2, and your Constitution score increases by 1.",
    age: "Gamorreans reach adulthood at 12 and live up to 50 years.",
    size: "Gamorreans are Medium, typically 5 to 6 feet tall.",
    speed: "Your base walking speed is 30 feet.",
    languages: "You can speak Gamorrean and understand Galactic Basic.",
    traits: "Brute Force: You have proficiency in the Intimidation skill.\nTough Hide: Your AC increases by 1 when not wearing armor.",
    otherTraits: {}
  },
  {
    name: "Gand",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/species/species_gand.png",
    description: "Gands are insectoid humanoids from Gand, known for their respiratory adaptations and tracking skills, often working as bounty hunters.",
    abilityScoreIncrease: "Your Wisdom score increases by 2, and your Constitution score increases by 1.",
    age: "Gands mature at 15 and live up to 70 years.",
    size: "Gands are Medium, typically 4 to 5 feet tall.",
    speed: "Your base walking speed is 30 feet.",
    languages: "You can speak, read, and write Gand and Galactic Basic.",
    traits: "Tracker: You have proficiency in the Survival skill.\nAmmonia Breather: You require a respirator in oxygen-rich environments.",
    otherTraits: {
      darkvision: "You can see in darkness within 60 feet of you in grayscale."
    }
  },
  {
    name: "Geonosian",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/species/species_geonosian.png",
    description: "Geonosians are insectoid humanoids from Geonosis, known for their hive-based society and engineering skills, often serving as laborers or technicians.",
    abilityScoreIncrease: "Your Dexterity score increases by 2, and your Intelligence score increases by 1.",
    age: "Geonosians mature at 10 and live up to 50 years.",
    size: "Geonosians are Medium, typically 5 to 6 feet tall.",
    speed: "Your base walking speed is 30 feet, and you have a flying speed of 30 feet (if winged).",
    languages: "You can speak, read, and write Geonosian and Galactic Basic.",
    traits: "Hive Mind: You have advantage on Intelligence (Investigation) checks when working with others.\nEngineering: You have proficiency with one artisan tool.",
    otherTraits: {}
  },
  {
    name: "Gotal",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/species/species_gotal.png",
    description: "Gotals are horned humanoids from Antar 4, known for their empathic cones, which allow them to sense emotions and navigate.",
    abilityScoreIncrease: "Your Wisdom score increases by 2, and your Charisma score increases by 1.",
    age: "Gotals mature at 15 and live up to 80 years.",
    size: "Gotals are Medium, typically 5 to 6 feet tall.",
    speed: "Your base walking speed is 30 feet.",
    languages: "You can speak, read, and write Galactic Basic and Gotal.",
    traits: "Empathic Cones: You have advantage on Wisdom (Insight) checks to sense emotions.\nNatural Navigator: You have proficiency in the Survival skill.",
    otherTraits: {}
  },
  {
    name: "Gran",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/species/species_gran.png",
    description: "Gran are three-eyed humanoids from Kinyen, known for their social nature and keen vision, often working as traders or diplomats.",
    abilityScoreIncrease: "Your Charisma score increases by 2, and your Wisdom score increases by 1.",
    age: "Gran mature at 15 and live up to 80 years.",
    size: "Gran are Medium, typically 5 to 6 feet tall.",
    speed: "Your base walking speed is 30 feet.",
    languages: "You can speak, read, and write Galactic Basic and Gran,ST: You have proficiency in the Perception skill.\nSocial: You have advantage on Charisma (Persuasion) checks in social settings.",
    otherTraits: {}
  },
  {
    name: "Gungan",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/species/species_gungan.png",
    description: "Gungans are amphibious humanoids from Naboo, known for their resilience and unique technology, often living in underwater cities.",
    abilityScoreIncrease: "Your Constitution score increases by 2, and your Dexterity score increases by 1.",
    age: "Gungans reach adulthood at 15 and live up to 70 years.",
    size: "Gungans are Medium, typically 5 to 6 feet tall.",
    speed: "Your base walking speed is 30 feet, and you have a swimming speed of 30 feet.",
    languages: "You can speak, read, and write Galactic Basic and Gungan.",
    traits: "Amphibious: You can breathe air and water.\nResilient: You have advantage on saving throws against poison.",
    otherTraits: {}
  },
  {
    name: "Human",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/species/species_human.png",
    description: "Humans are the most numerous and widespread species in the galaxy, found on countless worlds from the Core to the Outer Rim. Known for their adaptability, ambition, and diversity, they excel in a wide range of roles, from pilots and smugglers to senators and Jedi.",
    abilityScoreIncrease: "Your ability scores each increase by 1, or you can increase one ability score by 2 and another by 1.",
    age: "Humans reach adulthood in their late teens and live less than a century, typically around 80–100 years.",
    size: "Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Your size is Medium.",
    speed: "Your base walking speed is 30 feet.",
    languages: "You can speak, read, and write Galactic Basic and one additional language of your choice.",
    traits: "Versatility: You gain proficiency in one skill of your choice.\nExtra Training: You gain proficiency in one tool or vehicle (land or starship) of your choice.",
    otherTraits: {}
  },
  {
    name: "Hutt",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/species/species_hutt.png",
    description: "Hutts are slug-like humanoids from Nal Hutta, known for their cunning, wealth, and influence in the criminal underworld.",
    abilityScoreIncrease: "Your Charisma score increases by 2, and your Constitution score increases by 1.",
    age: "Hutts mature at 50 and can live up to 1,000 years.",
    size: "Hutts are Large, typically 10 to 15 feet long.",
    speed: "Your base walking speed is 20 feet.",
    languages: "You can speak, read, and write Galactic Basic and Huttese.",
    traits: "Cunning: You have proficiency in the Deception skill.\nMassive: You have advantage on Strength checks to push or pull objects.",
    otherTraits: {
      thickSkin: "You have resistance to bludgeoning damage."
    }
  },
  {
    name: "Ithorian",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/species/species_ithorian.png",
    description: "Ithorians are hammer-headed humanoids from Ithor, known for their pacifism and connection to nature, often serving as healers or ecologists.",
    abilityScoreIncrease: "Your Wisdom score increases by 2, and your Charisma score increases by 1.",
    age: "Ithorians mature at 20 and live up to 100 years.",
    size: "Ithorians are Medium, typically 6 to 7 feet tall.",
    speed: "Your base walking speed is 30 feet.",
    languages: "You can speak, read, and write Galactic Basic and Ithorian.",
    traits: "Pacifist: You have proficiency in the Medicine skill.\nSonic Bellow: You can emit a loud bellow, deafening creatures within 10 feet for 1 minute (Constitution save DC 12).",
    otherTraits: {}
  },
  {
    name: "Jawa",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/species/species_jawa.png",
    description: "Jawas are small, robed humanoids from Tatooine, known for their scavenging and trading skills, often dealing in droids and tech.",
    abilityScoreIncrease: "Your Dexterity score increases by 2, and your Intelligence score increases by 1.",
    age: "Jawas reach adulthood at 10 and live up to 50 years.",
    size: "Jawas are Small, typically 3 to 4 feet tall.",
    speed: "Your base walking speed is 25 feet.",
    languages: "You can speak, read, and write Jawaese and understand Galactic Basic.",
    traits: "Scavenger: You have proficiency in the Investigation skill.\nTinkerer: You have proficiency with one artisan tool.",
    otherTraits: {
      darkvision: "You can see in darkness within 60 feet of you in grayscale."
    }
  },
  {
    name: "Kaleesh",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/species/species_kaleesh.png",
    description: "Kaleesh are reptilian humanoids from Kalee, known for their martial culture and honor, often serving as warriors or mercenaries.",
    abilityScoreIncrease: "Your Strength score increases by 2, and your Dexterity score increases by 1.",
    age: "Kaleesh mature at 15 and live up to 70 years.",
    size: "Kaleesh are Medium, typically 5 to 6 feet tall.",
    speed: "Your base walking speed is 30 feet.",
    languages: "You can speak, read, and write Galactic Basic and Kaleesh.",
    traits: "Warrior Culture: You have proficiency in the Intimidation skill.\nInfrared Vision: You can see in darkness within 60 feet, perceiving heat signatures.",
    otherTraits: {}
  },
  {
    name: "Kaminoan",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/species/species_kaminoan.png",
    description: "Kaminoans are tall, slender humanoids from Kamino, known for their scientific expertise and cloning technology, often aloof and analytical.",
    abilityScoreIncrease: "Your Intelligence score increases by 2, and your Wisdom score increases by 1.",
    age: "Kaminoans mature at 20 and live up to 80 years.",
    size: "Kaminoans are Medium, typically 6 to 7 feet tall.",
    speed: "Your base walking speed is 30 feet.",
    languages: "You can speak, read, and write Galactic Basic and Kaminoan.",
    traits: "Analytical: You have proficiency in the Medicine skill.\nAquatic Affinity: You have advantage on checks related to water environments.",
    otherTraits: {}
  },
  {
    name: "Kel Dor",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/species/species_keldor.png",
    description: "Kel Dor are gas-breathing humanoids from Dorin, known for their Force sensitivity and distinctive masks, often serving as mystics or diplomats.",
    abilityScoreIncrease: "Your Wisdom score increases by 2, and your Charisma score increases by 1.",
    age: "Kel Dor mature at 15 and live up to 70 years.",
    size: "Kel Dor are Medium, typically 5 to 6 feet tall.",
    speed: "Your base walking speed is 30 feet.",
    languages: "You can speak, read, and write Galactic Basic and Kel Dor.",
    traits: "Gas Breather: You require a mask in oxygen-rich environments.\nForce Sensitive: You have advantage on Wisdom (Insight) checks.",
    otherTraits: {
      darkvision: "You can see in darkness within 60 feet of you in grayscale."
    }
  },
  {
    name: "Kubaz",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/species/species_kubaz.png",
    description: "Kubaz are insect-eating humanoids from Kubindi, known for their sensitive snouts and espionage skills, often working as informants.",
    abilityScoreIncrease: "Your Intelligence score increases by 2, and your Dexterity score increases by 1.",
    age: "Kubaz mature at 15 and live up to 70 years.",
    size: "Kubaz are Medium, typically 5 to 6 feet tall.",
    speed: "Your base walking speed is 30 feet.",
    languages: "You can speak, read, and write Galactic Basic and Kubaz.",
    traits: "Sensitive Snout: You have advantage on Wisdom (Perception) checks that rely on smell.\nEspionage: You have proficiency in the Deception skill.",
    otherTraits: {}
  },
  {
    name: "Mirialan",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/species/species_mirialan.png",
    description: "Mirialans are near-humans from Mirial, known for their spirituality and distinctive tattoos, often serving as Force users or scholars.",
    abilityScoreIncrease: "Your Wisdom score increases by 2, and your Dexterity score increases by 1.",
    age: "Mirialans mature at the same rate as humans and live up to 80 years.",
    size: "Mirialans are Medium, typically 5 to 6 feet tall.",
    speed: "Your base walking speed is 30 feet.",
    languages: "You can speak, read, and write Galactic Basic and Mirialan.",
    traits: "Spiritual: You have proficiency in the Religion skill.\nTattooed Destiny: You have advantage on saving throws against fear.",
    otherTraits: {}
  },
  {
    name: "Mon Calamari",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/species/species_moncalamari.png",
    description: "Mon Calamari are amphibious humanoids from Mon Cala, known for their shipbuilding and leadership, often serving as commanders or engineers.",
    abilityScoreIncrease: "Your Intelligence score increases by 2, and your Charisma score increases by 1.",
    age: "Mon Calamari mature at 15 and live up to 80 years.",
    size: "Mon Calamari are Medium, typically 5 to 6 feet tall.",
    speed: "Your base walking speed is 30 feet, and you have a swimming speed of 30 feet.",
    languages: "You can speak, read, and write Galactic Basic and Mon Calamari.",
    traits: "Amphibious: You can breathe air and water.\nShipwright: You have proficiency in the Mechanics skill.",
    otherTraits: {}
  },
  {
    name: "Nautolan",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/species/species_nautolan.png",
    description: "Nautolans are amphibious humanoids from Glee Anselm, known for their head-tresses and emotional sensitivity, often serving as warriors or diplomats.",
    abilityScoreIncrease: "Your Constitution score increases by 2, and your Charisma score increases by 1.",
    age: "Nautolans mature at 15 and live up to 70 years.",
    size: "Nautolans are Medium, typically 5 to 6 feet tall.",
    speed: "Your base walking speed is 30 feet, and you have a swimming speed of 30 feet.",
    languages: "You can speak, read, and write Galactic Basic and Nautila.",
    traits: "Amphibious: You can breathe air and water.\nEmpathic Tresses: You have advantage on Wisdom (Insight) checks to sense emotions.",
    otherTraits: {}
  },
  {
    name: "Neimoidian",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/species/species_neimoidian.png",
    description: "Neimoidians are green-skinned humanoids from Neimoidia, known for their greed and business savvy, often leading trade organizations.",
    abilityScoreIncrease: "Your Intelligence score increases by 2, and your Charisma score increases by 1.",
    age: "Neimoidians mature at 15 and live up to 70 years.",
    size: "Neimoidians are Medium, typically 5 to 6 feet tall.",
    speed: "Your base walking speed is 30 feet.",
    languages: "You can speak, read, and write Galactic Basic and Neimoidian.",
    traits: "Business Savvy: You have proficiency in the Persuasion skill.\nCautious: You have advantage on saving throws against being frightened.",
    otherTraits: {}
  },
  {
    name: "Nikto",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/species/species_nikto.png",
    description: "Nikto are reptilian humanoids from Kintan, known for their resilience and adaptability, often serving as mercenaries or laborers.",
    abilityScoreIncrease: "Your Constitution score increases by 2, and your Strength score increases by 1.",
    age: "Nikto mature at 15 and live up to 70 years.",
    size: "Nikto are Medium, typically 5 to 6 feet tall.",
    speed: "Your base walking speed is 30 feet.",
    languages: "You can speak, read, and write Galactic Basic and Nikto.",
    traits: "Resilient: You have advantage on saving throws against poison.\nHardy: You have proficiency in the Athletics skill.",
    otherTraits: {}
  },
  {
    name: "Ortolan",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/species/species_ortolan.png",
    description: "Ortolans are small, elephantine humanoids from Orto, known for their love of food and music, often working as entertainers or chefs.",
    abilityScoreIncrease: "Your Charisma score increases by 2, and your Constitution score increases by 1.",
    age: "Ortolans mature at 10 and live up to 60 years.",
    size: "Ortolans are Small, typically 3 to 4 feet tall.",
    speed: "Your base walking speed is 25 feet.",
    languages: "You can speak, read, and write Galactic Basic and Ortolan.",
    traits: "Gourmand: You have proficiency in the Cooking skill.\nMusical Talent: You have proficiency with one musical instrument.",
    otherTraits: {
      keenSmell: "You have advantage on Wisdom (Perception) checks that rely on smell."
    }
  },
  {
    name: "Rodian",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/species/species_rodian.png",
    description: "Rodians are green-skinned humanoids from Rodia, known for their hunting instincts and bounty hunting skills, often working in dangerous professions.",
    abilityScoreIncrease: "Your Dexterity score increases by 2, and your Wisdom score increases by 1.",
    age: "Rodians mature at 15 and live up to 70 years.",
    size: "Rodians are Medium, typically 5 to 6 feet tall.",
    speed: "Your base walking speed is 30 feet.",
    languages: "You can speak, read, and write Galactic Basic and Rodese.",
    traits: "Hunter: You have proficiency in the Survival skill.\nKeen Senses: You have advantage on Wisdom (Perception) checks.",
    otherTraits: {
      darkvision: "You can see in darkness within 60 feet of you in grayscale."
    }
  },
  {
    name: "Sullustan",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/species/species_sullustan.png",
    description: " області, часто працюють пілотами або інженерами.",
    abilityScoreIncrease: "Your Dexterity score increases by 2, and your Intelligence score increases by 1.",
    age: "Sullustans mature at 15 and live up to 80 years.",
    size: "Sullustans are Medium, typically 4 to 5 feet tall.",
    speed: "Your base walking speed is 30 feet.",
    languages: "You can speak, read, and write Galactic Basic and Sullustese.",
    traits: "Navigator: You have proficiency in the Piloting skill.\nUnderground Adaptation: You have advantage on checks in subterranean environments.",
    otherTraits: {
      darkvision: "You can see in darkness within 60 feet of you in grayscale."
    }
  },
  {
    name: "Togruta",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/species/species_togruta.png",
    description: "Togruta are colorful humanoids from Shili, known for their montrals and cooperative nature, often serving as leaders or Force users.",
    abilityScoreIncrease: "Your Charisma score increases by 2, and your Wisdom score increases by 1.",
    age: "Togruta mature at 15 and live up to 90 years.",
    size: "Togruta are Medium, typically 5 to 6 feet tall.",
    speed: "Your base walking speed is 30 feet.",
    languages: "You can speak, read, and write Galactic Basic and Togruti.",
    traits: "Montrals: You have advantage on Wisdom (Perception) checks that rely on hearing.\nPack Hunter: You have advantage on attack rolls when an ally is within 5 feet of your target.",
    otherTraits: {}
  },
  {
    name: "Trandoshan",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/species/species_trandoshan (2).png",
    description: "Trandoshans are reptilian humanoids from Trandosha, known for their strength and hunting prowess, often working as bounty hunters or mercenaries.",
    abilityScoreIncrease: "Your Strength score increases by 2, and your Constitution score increases by 1.",
    age: "Trandoshans mature at 15 and live up to 60 years.",
    size: "Trandoshans are Medium, typically 6 to 7 feet tall.",
    speed: "Your base walking speed is 30 feet.",
    languages: "You can speak, read, and write Galactic Basic and Dosh.",
    traits: "Claws: Your claws are natural weapons, dealing 1d4 slashing damage on a hit.\nRegeneration: You regain 1 hit point at the start of your turn if you have at least 1 hit point.",
    otherTraits: {
      darkvision: "You can see in darkness within 60 feet of you in grayscale."
    }
  },
  {
    name: "Twi'lek",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/species/species_twilek.png",
    description: "Twi’leks are colorful humanoids from Ryloth, known for their charm and adaptability, often working as dancers, diplomats, or smugglers.",
    abilityScoreIncrease: "Your Charisma score increases by 2, and your Dexterity score increases by 1.",
    age: "Twi’leks mature at 15 and live up to 80 years.",
    size: "Twi’leks are Medium, typically 5 to 6 feet tall.",
    speed: "Your base walking speed is 30 feet.",
    languages: "You can speak, read, and write Galactic Basic and Ryl.",
    traits: "Charming: You have proficiency in the Persuasion skill.\nLekku: You can communicate simple ideas through your lekku without speaking.",
    otherTraits: {
      darkvision: "You can see in darkness within 60 feet of you in grayscale."
    }
  },
  {
    name: "Weequay",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/species/species_weequay.png",
    description: "Weequay are leathery-skinned humanoids from Sriluur, known for their stoicism and tribal loyalty, often serving as mercenaries or guards.",
    abilityScoreIncrease: "Your Constitution score increases by 2, and your Strength score increases by 1.",
    age: "Weequay mature at 15 and live up to 70 years.",
    size: "Weequay are Medium, typically 5 to 6 feet tall.",
    speed: "Your base walking speed is 30 feet.",
    languages: "You can speak, read, and write Galactic Basic and Weequay.",
    traits: "Tough Skin: Your AC increases by 1 when not wearing armor.\nTribal Loyalty: You have advantage on Charisma (Persuasion) checks with allies.",
    otherTraits: {}
  },
  {
    name: "Wookiee",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/species/species_wookiee.png",
    description: "Wookiees are tall, fur-covered beings from Kashyyyk, renowned for their strength and loyalty, often serving as warriors or mechanics.",
    abilityScoreIncrease: "Your Strength score increases by 2, and your Constitution score increases by 1.",
    age: "Wookiees mature at 20 and can live up to 400 years.",
    size: "Wookiees are Medium, typically 6 to 8 feet tall.",
    speed: "Your base walking speed is 30 feet.",
    languages: "You can speak Shyriiwook and understand Galactic Basic.",
    traits: "Powerful Build: You count as one size larger for carrying capacity.\nClaws: Your claws are natural weapons, dealing 1d4 slashing damage on a hit.",
    otherTraits: {
      climbingSpeed: "You have a climbing speed of 30 feet."
    }
  },
  {
    name: "Zabrak",
    image: "https://starwars5ecentral.blob.core.windows.net/site-images/species/species_zabrak.png",
    description: "Zabraks are horned humanoids from Iridonia, known for their resilience and independence, often serving as warriors or explorers.",
    abilityScoreIncrease: "Your Constitution score increases by 2, and your Wisdom score increases by 1.",
    age: "Zabraks mature at 15 and live up to 80 years.",
    size: "Zabraks are Medium, typically 5 to 6 feet tall.",
    speed: "Your base walking speed is 30 feet.",
    languages: "You can speak, read, and write Galactic Basic and Zabraki.",
    traits: "Resilient: You have advantage on saving throws against poison.\nSurvivalist: You have proficiency in the Survival skill.",
    otherTraits: {
      darkvision: "You can see in darkness within 60 feet of you in grayscale."
    }
  }
];

// For external use, export the species array (uncomment if using as a separate file)
// export default species;