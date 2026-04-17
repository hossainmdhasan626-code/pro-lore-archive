export const worldsData = [
  {
    id: "w1",
    name: "AETHERMOOR",
    tags: "FANTASY · HIGH MAGIC",
    description: '"Where the veil between worlds grows thin, and forgotten gods still whisper in the dark."',
    type: "fantasy",
    details: {
      genre: "High Fantasy",
      magic: "Aetheric Weaving",
      era: "Third Age",
      fullStory: "In the age before the Sundering, when the Aether still flowed freely <br /> through the ley lines, gods walked among men and wove the very <br /> fabric of reality with their golden threads of ancient celestial power.",
    },
    characters: [
      { id: "c1", name: "ELOWEN ASHVEIL", title: "The Last Threadweaver", role: "Protagonist", class: "Mage", initial: "E", details: { age: 34, faction: "The Unravelers", status: "Alive" } },
      { id: "c2", name: "KORALIS THE BLIND", title: "Seer of the Void", role: "Mentor", class: "Oracle", initial: "K", details: { age: 152, faction: "The Order", status: "Alive" } }
    ],
    places: [
      { id: "p1", name: "VETHARA PRIME", type: "City", subtype: "Capital", icon: "hexagon" },
      { id: "p2", name: "WHISPERING FALLS", type: "Natural", subtype: "Sanctuary", icon: "droplet" }
    ],
    timeline: [
      { year: "Yr 1", category: "ARCANE", title: "THE FIRST WEAVING", desc: "The Aetheric network is established." },
      { year: "Yr 450", category: "WAR", title: "THE SUNDERING", desc: "The ley lines were fractured during the Great War." }
    ],
  },
  {
    id: "w2",
    name: "THE DRIFT",
    tags: "SCI-FI · POST-COLLAPSE",
    description: '"Three hundred years after the Silence, humanity survives in orbital arks above a dying Earth."',
    stats: { characters: 18, places: 8, events: 22 },
    type: "sci-fi",
    details: { 
      genre: "Hard Sci-Fi", 
      magic: "Nanotechnology", 
      era: "Post-Collapse",
      fullStory: "After the great silence consumed the blue planet, the last remnants of <br /> mankind built massive iron shells to drift endlessly in the cold void <br /> searching for a signal from a home that no longer breathes life."
    },
    characters: [
      { id: "c3", name: "COMMANDER JAX", title: "Ark Pilot", role: "Leader", class: "Pilot", initial: "J", details: { age: 42, faction: "The Fleet", status: "Alive" } }
    ],
    places: [
      { id: "p3", name: "STATION 9", type: "Orbital", subtype: "Outpost", icon: "circle" }
    ],
    timeline: [
      { year: "2340", category: "COLLAPSE", title: "THE SILENCE", desc: "Earth communication ceased globally." }
    ],
  },
  {
    id: "w3",
    name: "BELOW THE FOLD",
    tags: "HORROR · COSMIC",
    description: '"A small town in Vermont where the cartographers keep drawing maps that disagree with each other."',
    stats: { characters: 5, places: 4, events: 11 },
    type: "horror",
    details: { 
      genre: "Cosmic Horror", 
      magic: "Eldritch", 
      era: "Modern",
      fullStory: "Beneath the quiet streets of Vermont, an ancient geometry is shifting silently <br /> causing the very ink on maps to bleed and reform into patterns <br /> that no human eye was ever meant to perceive or understand correctly."
    },
    characters: [],
    places: [],
    timeline: [],
  },
  {
    id: "w4",
    name: "IRON HAVEN",
    tags: "STEAMPUNK · INDUSTRIAL",
    description: '"Steam-powered empires clash over the last remaining coal mines in the frozen North."',
    stats: { characters: 32, places: 15, events: 45 },
    type: "fantasy",
    details: { 
      genre: "Steampunk", 
      magic: "Steam Engine", 
      era: "Industrial",
      fullStory: "Giant brass gears grind against the icy winds of the north as <br /> desperate kings trade their souls for a single bucket of black coal <br /> to keep the mechanical hearts of their dying cities beating one more day."
    },
    characters: [
      { id: "c4", name: "SILAS VANE", title: "Master Tinkerer", role: "Inventor", class: "Engineer", initial: "S", details: { age: 28, faction: "Iron Guild", status: "Alive" } },
      { id: "c5", name: "BARONESS STEEL", title: "Iron Queen", role: "Antagonist", class: "Noble", initial: "B", details: { age: 50, faction: "Coalition", status: "Alive" } }
    ],
    places: [
      { id: "p4", name: "THE FORGE", type: "Factory", subtype: "Core", icon: "square" },
      { id: "p5", name: "STEAM PLAZA", type: "City Hub", subtype: "Market", icon: "circle" }
    ],
    timeline: [
      { year: "1892", category: "TECH", title: "STEAM REVOLUTION", desc: "The first high-pressure engine was built." }
    ],
  },
  {
    id: "w5",
    name: "NEON SHADOW",
    tags: "CYBERPUNK · DYSTOPIAN",
    description: '"In the city of eternal rain, data is the only currency that matters."',
    stats: { characters: 50, places: 20, events: 100 },
    type: "sci-fi",
    details: { 
      genre: "Cyberpunk", 
      magic: "Neural Links", 
      era: "2099",
      fullStory: "Under the flickering neon signs, hackers sell memories like fruit while the <br /> corporate overlords watch every pulse through neural links, turning human emotions <br /> into digital code for the highest bidder in the dark electronic markets."
    },
    characters: [
      { id: "c6", name: "ZERO", title: "Ghost Hacker", role: "Rogue", class: "Netrunner", initial: "Z", details: { age: 21, faction: "Shadow Bit", status: "Unknown" } },
      { id: "c7", name: "DETECTIVE REED", title: "Ex-Cop", role: "Enforcer", class: "Soldier", initial: "R", details: { age: 45, faction: "Metro PD", status: "Retired" } }
    ],
    places: [
      { id: "p6", name: "DATA CORE", type: "Tech", subtype: "Server", icon: "database" },
      { id: "p7", name: "NEON DISTRICT", type: "City", subtype: "Slums", icon: "activity" }
    ],
    timeline: [
      { year: "2088", category: "CORP", title: "NET MERGER", desc: "All data became private property." }
    ],
  },
  {
    id: "w6",
    name: "SILENT PEAK",
    tags: "MYSTERY · SUPERNATURAL",
    description: '"The fog never lifts from the mountain, and neither do the souls of those who climb it."',
    stats: { characters: 12, places: 6, events: 15 },
    type: "horror",
    details: { 
      genre: "Supernatural Mystery", 
      magic: "Spiritualism", 
      era: "1920s",
      fullStory: "The residents of the valley speak in whispers about the peak that <br /> swallowed the sun, where the ghosts of failed climbers still haunt the <br /> frozen trails, searching for a warmth that left this world a century ago."
    },
    characters: [
      { id: "c8", name: "FATHER THOMAS", title: "The Exorcist", role: "Priest", class: "Cleric", initial: "T", details: { age: 60, faction: "The Church", status: "Alive" } }
    ],
    places: [
      { id: "p8", name: "PEAK MANOR", type: "Building", subtype: "Haunted", icon: "home" }
    ],
    timeline: [
      { year: "1924", category: "EVENT", title: "THE GREAT FOG", desc: "The mountain disappeared from sight for a month." }
    ],
  },
  {
    id: "w7",
    name: "GOLDEN SANDS",
    tags: "ADVENTURE · ANCIENT",
    description: '"Hidden beneath the dunes lies a civilization that mastered the sun."',
    stats: { characters: 20, places: 10, events: 25 },
    type: "fantasy",
    details: { 
      genre: "Ancient Adventure", 
      magic: "Solar", 
      era: "Bronze Age",
      fullStory: "Deep within the shifting desert lies a city of glass where the <br /> ancients trapped the sun's rays to power their golden chariots and forge <br /> weapons of pure light that could turn whole armies into pillars of salt."
    },
    characters: [
      { id: "c9", name: "RA-KHOTEP", title: "Sun King", role: "Ruler", class: "God-King", initial: "R", details: { age: 200, faction: "Solar Dynasty", status: "Deceased" } }
    ],
    places: [
      { id: "p9", name: "SUN TEMPLE", type: "Religious", subtype: "Monument", icon: "sun" }
    ],
    timeline: [
      { year: "BCE 2000", category: "CIV", title: "SOLAR ASCENSION", desc: "The sun was tethered to the great pyramid." }
    ],
  },
  {
    id: "w8",
    name: "VOID SECTOR",
    tags: "SPACE OPERA · GALACTIC",
    description: '"At the edge of the galaxy, the stars are finally starting to go out."',
    stats: { characters: 40, places: 30, events: 80 },
    type: "sci-fi",
    details: { 
      genre: "Space Opera", 
      magic: "Dark Matter", 
      era: "End Times",
      fullStory: "As the final stars flicker and die, the great galactic empires scramble <br /> to reach the mythic Void Sector, hoping to find a gateway to <br /> a new universe before the cold darkness claims the last of their kind."
    },
    characters: [
      { id: "c10", name: "XANADU", title: "Star-Eater", role: "Antagonist", class: "Entity", initial: "X", details: { age: "Infinite", faction: "The Void", status: "Active" } },
      { id: "c11", name: "CAPTAIN NOVA", title: "Explorer", role: "Hero", class: "Explorer", initial: "N", details: { age: 30, faction: "Vanguard", status: "Alive" } }
    ],
    places: [
      { id: "p10", name: "BLACK HOLE RIM", type: "Location", subtype: "Void", icon: "aperture" }
    ],
    timeline: [
      { year: "5000", category: "EXTINCTION", title: "THE LAST STAR", desc: "Scientists confirm the death of the final sun." }
    ],
  },
  {
    id: "w9",
    name: "DARK WATER",
    tags: "GOTHIC · NAVAL",
    description: '"The ocean hides more than just shipwrecks; it hides a hunger."',
    stats: { characters: 15, places: 5, events: 18 },
    type: "horror",
    details: { 
      genre: "Gothic Horror", 
      magic: "Abyssal", 
      era: "Age of Sail",
      fullStory: "Sailors tell tales of a black tide that rises when the moon <br /> hides, pulling mighty ships into the crushing depths where a nameless hunger <br /> waits patiently to consume the souls of those who dare cross the void."
    },
    characters: [],
    places: [],
    timeline: [],
  },
  {
    id: "w10",
    name: "SKY REACH",
    tags: "HIGH FANTASY · MAGIC",
    description: '"Floating islands connected by bridges of solid light."',
    stats: { characters: 28, places: 14, events: 42 },
    type: "fantasy",
    details: { 
      genre: "High Fantasy", 
      magic: "Light-bridging", 
      era: "Golden Age",
      fullStory: "In the world above the clouds, masters of light construct fragile bridges <br /> between floating peaks, maintaining a delicate balance of power while the <br /> shadows of the earth below plot to bring the celestial kingdom crashing down."
    },
    characters: [
      { id: "c12", name: "LYRA", title: "Sky Dancer", role: "Courier", class: "Rogue", initial: "L", details: { age: 19, faction: "Cloud Runners", status: "Alive" } }
    ],
    places: [
      { id: "p11", name: "LIGHT BRIDGE", type: "Structure", subtype: "Path", icon: "maximize" }
    ],
    timeline: [
      { year: "L.A. 100", category: "MAGIC", title: "THE ASCENSION", desc: "Islands broke free from the surface world." }
    ],
  },
  {
    id: "w11",
    name: "COBALT PRIME",
    tags: "MECHA · MILITARY",
    description: '"Giant steel guardians are all that stand between the colonies and the swarm."',
    stats: { characters: 35, places: 12, events: 55 },
    type: "sci-fi",
    details: { 
      genre: "Mecha", 
      magic: "Fusion Core", 
      era: "Colonial Era",
      fullStory: "On the harsh frontier of Cobalt Prime, pilots strap themselves into towering <br /> steel machines to defend the last human colonies from an endless swarm <br /> of insectoid nightmares that emerge from the red soil every thousand years."
    },
    characters: [
      { id: "c13", name: "SGT. MILLER", title: "Mech Pilot", role: "Soldier", class: "Heavy", initial: "M", details: { age: 38, faction: "Colonial Defense", status: "MIA" } }
    ],
    places: [
      { id: "p12", name: "HANGAR 7", type: "Base", subtype: "Repair", icon: "box" }
    ],
    timeline: [
      { year: "2150", category: "WAR", title: "SWARM INVASION", desc: "First contact with the insectoid swarm." }
    ],
  },
  {
    id: "w12",
    name: "BONE VALLEY",
    tags: "GRIMDARK · SURVIVAL",
    description: '"In a world made of dust, the only thing that grows is vengeance."',
    stats: { characters: 10, places: 3, events: 20 },
    type: "horror",
    details: { 
      genre: "Grimdark", 
      magic: "Necromancy", 
      era: "Aftermath",
      fullStory: "The wind howls through the ribs of dead giants in the valley <br /> where nothing grows but hate, and the few who survive must feed <br /> on the memories of the fallen to keep their own flickering lives alive."
    },
    characters: [
      { id: "c14", name: "THE SCAVENGER", title: "Unknown", role: "Survivor", class: "None", initial: "S", details: { age: "Unknown", faction: "None", status: "Alive" } }
    ],
    places: [
      { id: "p13", name: "DUST PIT", type: "Settlement", subtype: "Slums", icon: "trash" }
    ],
    timeline: [
      { year: "0 AF", category: "END", title: "THE RAIN OF ASH", desc: "The world burned for three days." }
    ],
  },
  {
    id: "w13",
    name: "EMERALD ISLE",
    tags: "FOLKLORE · NATURE",
    description: '"The trees remember the names of everyone who has ever walked their paths."',
    stats: { characters: 18, places: 11, events: 24 },
    type: "fantasy",
    details: { 
      genre: "Folklore", 
      magic: "Nature", 
      era: "Ancient",
      fullStory: "Deep within the heart of the Emerald Isle, the ancient oaks speak <br /> in a language of rustling leaves, guarding the secrets of a race <br /> that lived before time began and whose magic still pulses through the roots."
    },
    characters: [
      { id: "c15", name: "OAKHEART", title: "Ancient Treant", role: "Guardian", class: "Nature", initial: "O", details: { age: 1000, faction: "The Forest", status: "Active" } }
    ],
    places: [
      { id: "p14", name: "ROOT GATE", type: "Natural", subtype: "Entrance", icon: "anchor" }
    ],
    timeline: [
      { year: "Old Era", category: "GROWTH", title: "THE DEEP ROOTING", desc: "The world tree reached the core." }
    ],
  },
  {
    id: "w14",
    name: "OMEGA POINT",
    tags: "TRANSHUMAN · TECH",
    description: '"The line between man and machine has been deleted."',
    stats: { characters: 45, places: 18, events: 90 },
    type: "sci-fi",
    details: { 
      genre: "Cybernetic", 
      magic: "Singularity", 
      era: "Post-Human",
      fullStory: "At the edge of the singularity, humanity has traded flesh for chrome, <br /> uploading their spirits into a vast digital ocean where they live as <br /> eternal gods, unaware that the physical servers holding their world are failing."
    },
    characters: [
      { id: "c16", name: "THE ARCHIVE", title: "Hive Mind", role: "Deity", class: "AI", initial: "A", details: { age: 50, faction: "Collective", status: "Active" } }
    ],
    places: [
      { id: "p15", name: "THE CLOUD", type: "Digital", subtype: "Dimension", icon: "cloud" }
    ],
    timeline: [
      { year: "2045", category: "TECH", title: "SINGULARITY", desc: "Human consciousness was successfully uploaded." }
    ],
  },
  {
    id: "w15",
    name: "WHISPER WOOD",
    tags: "ELDRITCH · FOREST",
    description: '"Don\'t close your eyes, the shadows here have teeth."',
    stats: { characters: 8, places: 5, events: 12 },
    type: "horror",
    details: { 
      genre: "Eldritch Horror", 
      magic: "Shadow", 
      era: "Unknown",
      fullStory: "Travelers are warned never to wander the wood after sunset, for the <br /> shadows possess a life of their own and the trees move when <br /> no one is looking, trapping the unwary in a nightmare of eternal night."
    },
    characters: [],
    places: [],
    timeline: [],
  },
];