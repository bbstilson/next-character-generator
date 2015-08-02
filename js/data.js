var races = {
	"Hill-Dwarf":			{ str : 0, dex: 0, con: 2, wis: 0, int: 1, chr: 0 },
	"Mountain-Dwarf":		{ str : 0, dex: 2, con: 2, wis: 0, int: 0, chr: 0 },
	"High-Elf": 			{ str : 0, dex: 2, con: 0, wis: 1, int: 0, chr: 0 },
	"Wood-Elf": 			{ str : 0, dex: 2, con: 0, wis: 0, int: 1, chr: 0 },
	"Drow": 				{ str : 0, dex: 2, con: 0, wis: 0, int: 0, chr: 1 },
	"Lightfoot-Halfling": 	{ str : 0, dex: 2, con: 0, wis: 0, int: 0, chr: 1 },
	"Stout-Halfling": 		{ str : 0, dex: 2, con: 1, wis: 0, int: 0, chr: 0 },
	"Human": 				{ str : 1, dex: 1, con: 1, wis: 1, int: 1, chr: 1 },
	"Dragonborn": 			{ str : 2, dex: 0, con: 0, wis: 0, int: 0, chr: 1 },
	"Forest-Gnome": 		{ str : 0, dex: 1, con: 0, wis: 2, int: 0, chr: 0 },
	"Rock-Gnome": 			{ str : 0, dex: 0, con: 1, wis: 2, int: 0, chr: 0 },
	"Half-Elf": 			{ str : 0, dex: 0, con: 0, wis: 0, int: 0, chr: 2 },
	"Half-Orc": 			{ str : 2, dex: 0, con: 1, wis: 0, int: 0, chr: 0 },
	"Tiefling": 			{ str : 0, dex: 0, con: 0, wis: 1, int: 0, chr: 2 },
};
var classes = {
	"Barbarian":  { highest: ['str'],       	randomized: ['dex','con','chr'],    	lowest: ['int','wis']	},
	"Bard":       { highest: ['chr'],       	randomized: ['dex','con','int','wis'],  lowest: ['str']			},
	"Cleric":     { highest: ['wis'],       	randomized: ['dex','con','int','chr'],  lowest: ['str']			},
	"Druid":      { highest: ['wis'],       	randomized: ['dex','con','int','chr'],  lowest: ['str']			},
	"Fighter":    { highest: ['str','dex'],		randomized: ['con','int','chr'],		lowest: ['wis']			},
	"Monk":       { highest: ['dex','wis'],   	randomized: ['str','con','int'],      	lowest: ['chr']			},
	"Paladin":    { highest: ['str','chr'], 	randomized: ['dex','con','int'],      	lowest: ['wis']			},
	"Ranger":     { highest: ['dex','wis'], 	randomized: ['int','chr'],          	lowest: ['str','con']	},
	"Rogue":      { highest: ['dex'],       	randomized: ['str','con','int','chr'],  lowest: ['wis']			},
	"Sorcerer":   { highest: ['chr'],       	randomized: ['dex','con','int','wis'],  lowest: ['str']			},
	"Warlock":    { highest: ['chr'],       	randomized: ['dex','con','int','wis'],  lowest: ['str']			},
	"Wizard":     { highest: ['int'],       	randomized: ['dex','con','wis','chr'],  lowest: ['str']			},
};
var bioRace = {
	"Hill-Dwarf" 			: "Do not let the height of a Dwarf fool you. Their bodies are tough, dense, and broad, which make them fearsome fighters who can live for over 400 years. Hill-Dwarves, in particular, have keen senses, deep intuition, and remarkable resilience.",
	"Mountain-Dwarf"		: "Do not let the height of a Dwarf fool you. Their bodies are tough, dense, and broad, which make them fearsome fighters who can live for over 400 years. Mountain-Dwarves, in particular, are incredibly tough having lived their in rugged terrain.",
	"High-Elf"				: "Elves are not entirely material; part of them resides in the realm of magic. They are known for their talents in everything ranging from the fine arts to magic. High-Elves have keen minds and are adept at magic.",
	"Wood-Elf"				: "Elves are not entirely material; part of them resides in the realm of magic. They are known for their talents in everything ranging from the fine arts to magic. Wood-Elves have impeccable senses and intuition and can move quickly and silently through even the toughest terrain.",
	"Drow"					: "Elves are not entirely material; part of them resides in the realm of magic. They are known for their talents in everything ranging from the fine arts to magic. The ancestors of the Dark-Elves, or Drow, followed a dark path wrought with evil and corruption.",
	"Lightfoot-Halfling"	: "Halflings have survived as long as they have by avoiding notice and combat. They cherish family and nature, and get along well with all races. Lightfoot-Halfings are particularly slight and sneaky and can easily hide from notice.",
	"Stout-Halfling"		: "Halflings have survived as long as they have by avoiding notice and combat. They cherish family and nature, and get along well with all races. Stout-Halflings are more sturdy than other halflings and are resistant to some poisons. Rumor has it they have Dwarf blood in them.",
	"Human"					: "Humans are more physically diverse than other races and are largely driven by their relatively short lifespans. They are adaptable and ambitious and have wildly varying tastes, philosophies, talents, myths, and cultures.",
	"Dragonborn"			: "Dragonborn are humanoid creatures resembling dragons in every way except for their size and lack of wings or a tail. The original Dragonborn had brilliantly colored scales, but years of interbreeding have created a more uniform appearance.",
	"Forest-Gnome"			: "Gnomes are lovers of life and expression. Their personalities, ambitions, and passions are immediately visible on their face or their clothes. Forest-Gnomes are naturally stealthy.",
	"Rock-Gnome"			: "Gnomes are lovers of life and expression. Their personalities, ambitions, and passions are immediately visible on their face or their clothes. Rock-Gnomes are more creative and have a proclivity towards tinkering and inventing.",
	"Half-Elf"				: "Half-Elves look neither wholly human nor wholly elf. They make excellent diplomats, understanding the dichotomies of life. They enjoy the company of other half-elves, the only people who can appreciate living between two worlds.",
	"Half-Orc"				: "The orcs were created with rage in their hearts, and although Half-Orcs are half human, the struggle to quell that feel is a constant struggle. Half-Orcs tend to live either with Orcs or Humans getting by on their physical strength and human-like tenacity.",
	"Tiefling"				: "Tieflings are humanoid creatures with large horns protruding from their heads that manifest in as many ways as can be discovered in nature, long tails, sharp, canine teeth, and pupil-less eyes. Tieflings are not known for their honesty or ethical practices."
};
var bioClass = {
	"Barbarian" : "A fierce warrior of primitive background who can enter a battle rage. You let their muscles do the talking and are proficient with simple and martial weapons, shields, and use light or medium armor.",
	"Bard"		: "An inspiring magician whose power echoes the music of creation. A very talented class that is skilled in the use of all simple weapons, hand crossbows, longswords, rapiers, and short swords. However, they can only use light armor.",
	"Cleric" 	: "A priestly champion who wields divine magic in service of a higher power. Clerics rely on their magic and stick to simple weapons. They can wear both light and medium armor.",
	"Druid"		: "A priest of the Old Faith, wielding the powers of nature — moonlight and plant growth, fire and lightning — and adopting animal forms. A unique class talented in all manner of weapons ranging from clubs and daggers to scimitars and quarterstaffs. All armor is non-metal to allow shifting forms.",
	"Fighter"	: "A master of martial combat, skilled with a variety of weapons and armor. A gifted class that can use all armor, shields, simple and martial weapons.",
	"Monk"		: "A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection. Harnessing the power of her fists, the Monk is only proficient in simple weapons and short swords.",
	"Paladin" 	: "A holy warrior bound to a sacred oath. Able to use both might and magic, this class able to use all armor, shields, simple and martial weapons.",
	"Ranger"	: "A warrior who uses martial prowess and nature magic to combat threats on the edges of civilization. A gifted class able to use both light and medium armor, shields, and all simple and martial weapons.",
	"Rogue"		: "A scoundrel who uses stealth and trickery to overcome obstacles and enemies. A talented class capable of using simple weapons, hand crossbows, longswords, rapiers, and shorts swords, and wearing light armor.",
	"Sorcerer"	: "A spell-caster who draws on inherent magic from a gift or bloodline. Like their fellow magic user, the wizard, they are proficient in the use of daggers, darts, slings, quarterstaves, and light crossbows.",
	"Warlock"	: "A wielder of magic that is derived from a bargain with an extra-planar entity. Depending heavily on their magic, a warlock is only able to use simple weapons and light armor.",
	"Wizard"	: "A scholarly magic-user capable of manipulating the structures of reality. While their main form of attack is magic, they are proficient in the use of daggers, darts, slings, quarterstaves, and light crossbows."
};

var wildcard = [
	"You are smelly and stupid. But there's a plus side!! No, no there's not. But I thought you might enjoy that for a moment. Sucks to suck", 
	"But you have really nice hair, and that's usually enough.", 
	"You don't like bees. But who does, amirite?", 
	"You're a bit of a ditz. Act accordingly.", 
	"You have epilespy. Try to avoid stressful situation.", 
	"You are a afraid of heights and men.", 
	"You find water, particularly deep water, frightening for an unknown reason.", 
	"You don't know where or who you are.", 
	"You're awesome at everything and super humble. Everyone hates to love you.", 
	"You're super awesome at everything and you know it. If your closest friends had a dollar for every time you bragged, you'd probably just brag about it.", 
	"You're so clutzy it's remarkable that you've made it this far. Good luck on your adventures.", 
	"You're really average at pretty much everything. It doesn't take you long to learn something new, but you never get really good at it. Perpetual mediocrity.", 
	"You talk like a baby to all cute animals. It weirds out a lot of people, but you're too busy oogling at tiny animals to notice.", 
	"YA BRO. HUGE GAINZ LAST NIGHT BRO. YOU LIFT? PSH LIKE THAT'S A QUESTION. I LOVE CHICKS YA BRO", 
	"You're a hipster. But as a hipster you hate the term 'hipster' and find it super offensive. Plus that term is so OVER...are you gonna put a bird on that or should I?", 
	"You're like a bird. You only fly away. You know neither where your soul nor your home is. (And baby all I need for you to know is)",
	"Your name is Craig.\nYou did drugs once.\nYou are a spartan\nSo check you out!",
	"You're dead. Roll again.",
	"You're that guy.",
	"You hate everything and everything is boring. UGH.",
	"You have a B.S. in Astral Projection and a PhD in Alchemy. But unfortunately, most of the world is illiterate, so that doesn't tend to do you much good with the commoners. Best take the time to think out your approaches to people.",
	"You're a pathological liar, and the best at everything.",
	"You're really smart but incredibly lazy. Most of the time, you'll quit halfway through a quest and go start another.",
	"You're a musician but not a good one. You only really know Wonderwall and Good Riddance, and you always mess up the bridge.",
	"Life is boring without risk. You make irrational decisions if it means you getting a rush.",
	"NYAAHHHHHHHHH. What? Um. You...like giraffes. Every private moment is spent furthing your efforts to join your giraffian bretheren.",
	"You're a real G. You roll silent like lasagna.",
	"You're obsessed with time. You constantly confirm meeting times, and want to know exactly how long quests will take.",
	"Dude, what if, like, we see colors different than every one else, and, like, no one sees the same color. Like, if my orange isn't your orange? How would you know??",
	"You're Jaden Smith, and your eyes aren't real. You're blind. You're the son of a famous rapper/actor, and you're blind.",
	"You really like money. Like, really really like money. Once, your mom walked in on you masturbating to a stone tablet of a pile of gold coins.",
	"Roller blading is your main means of transportation. You have different sets of wheels for different terrain. If the terrain changes, you have to stop and change the wheels.",
	"You're a widow. Your husband died farming. Now free from the monotony of the country life, you're searching for your next adventure.",
	"You have the most beautiful face.",
	"You cry wolf all the time. But people know the story, so everytime you cry wolf people are like, '...are you fucking kidding?'",
	"You dream of potato. You look at cloud and see potato. But life is only pain and no potato.",
	"WHY ARE THERE ALL THESE BEES IN YOUR TEETH?!?!",
	"You sound exactly like Nick Cage, but have the face of Whoopi Goldberg.",
	"You're the lochness monster. Try to get treefitty from people.",
	"You're trying to be a stand up comedian. Any time there's a crowd of people, you have to get their attention and tell a joke.",
	"One of your boobs (or balls) is bigger than the other, and you're not sure if that's normal. You have to try and find out by bringing it up subtlely all the time.", 
	"You're a savant. Pick a thing to be really good at, and now you're terrible at everything else.",
	"You only speak in rhymes.",
	"Every day, your brain rewires and you have a different accent.",
	"You're Scottish and just a wee bit drunk. Affect an accent."
];