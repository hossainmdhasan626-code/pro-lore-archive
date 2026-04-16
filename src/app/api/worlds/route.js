// app/api/worlds/route.ts
// This was a custom api 


import { NextResponse } from 'next/server';

// মক ডাটা (এটি ফাইলের বাইরে রাখা ভালো যাতে ফাংশন কলের সময় হারিয়ে না যায়)
let worldsData = [
  {
    id: "w1",
    name: "AETHERMOOR",
    tags: "FANTASY · HIGH MAGIC",
    description: '"Where the veil between worlds grows thin, and forgotten gods still whisper in the dark."',
    stats: { characters: 24, places: 12, events: 36 },
    type: "fantasy",
    details: {
      genre: "High Fantasy",
      magic: "Aetheric Weaving",
      era: "Third Age",
      fullStory: "In the age before the Sundering, when the Aether still flowed freely through the ley lines..."
    },
    characters: [
      { 
        id: "c1", 
        name: "ELOWEN ASHVEIL", 
        title: "The Last Threadweaver", 
        role: "Protagonist", 
        class: "Mage", 
        initial: "E",
        details: { age: 34, faction: "The Unravelers", status: "Alive" } 
      }
    ],
    places: [
      { id: "p1", name: "VETHARA PRIME", type: "City", subtype: "Capital", icon: "hexagon" }
    ],
    timeline: [
      { year: "Yr 1", category: "ARCANE", title: "THE FIRST WEAVING", desc: "The Aetheric network is established." }
    ]
  },
  {
    id: "w2",
    name: "THE DRIFT",
    tags: "SCI-FI · POST-COLLAPSE",
    description: '"Three hundred years after the Silence, humanity survives in orbital arks above a dying Earth."',
    stats: { characters: 18, places: 8, events: 22 },
    type: "sci-fi",
    details: { genre: "Hard Sci-Fi", magic: "Nanotechnology", era: "Post-Collapse" },
    characters: [], places: [], timeline: []
  },
  {
    id: "w3",
    name: "BELOW THE FOLD",
    tags: "HORROR · COSMIC",
    description: '"A small town in Vermont where the cartographers keep drawing maps that disagree with each other."',
    stats: { characters: 5, places: 4, events: 11 },
    type: "horror",
    details: { genre: "Cosmic Horror", magic: "Eldritch", era: "Modern" },
    characters: [], places: [], timeline: []
  },
  {
    id: "w4",
    name: "IRON HAVEN",
    tags: "STEAMPUNK · INDUSTRIAL",
    description: '"Steam-powered empires clash over the last remaining coal mines in the frozen North."',
    stats: { characters: 32, places: 15, events: 45 },
    type: "fantasy",
    details: { genre: "Steampunk", magic: "Steam Engine", era: "Industrial" },
    characters: [], places: [], timeline: []
  },
  {
    id: "w5",
    name: "NEON SHADOW",
    tags: "CYBERPUNK · DYSTOPIAN",
    description: '"In the city of eternal rain, data is the only currency that matters."',
    stats: { characters: 50, places: 20, events: 100 },
    type: "sci-fi",
    details: { genre: "Cyberpunk", magic: "Neural Links", era: "2099" },
    characters: [], places: [], timeline: []
  },
  {
    id: "w6",
    name: "SILENT PEAK",
    tags: "MYSTERY · SUPERNATURAL",
    description: '"The fog never lifts from the mountain, and neither do the souls of those who climb it."',
    stats: { characters: 12, places: 6, events: 15 },
    type: "horror",
    details: { genre: "Supernatural Mystery", magic: "Spiritualism", era: "1920s" },
    characters: [], places: [], timeline: []
  },
  {
    id: "w7",
    name: "GOLDEN SANDS",
    tags: "ADVENTURE · ANCIENT",
    description: '"Hidden beneath the dunes lies a civilization that mastered the sun."',
    stats: { characters: 20, places: 10, events: 25 },
    type: "fantasy",
    details: { genre: "Ancient Adventure", magic: "Solar", era: "Bronze Age" },
    characters: [], places: [], timeline: []
  },
  {
    id: "w8",
    name: "VOID SECTOR",
    tags: "SPACE OPERA · GALACTIC",
    description: '"At the edge of the galaxy, the stars are finally starting to go out."',
    stats: { characters: 40, places: 30, events: 80 },
    type: "sci-fi",
    details: { genre: "Space Opera", magic: "Dark Matter", era: "End Times" },
    characters: [], places: [], timeline: []
  },
  {
    id: "w9",
    name: "DARK WATER",
    tags: "GOTHIC · NAVAL",
    description: '"The ocean hides more than just shipwrecks; it hides a hunger."',
    stats: { characters: 15, places: 5, events: 18 },
    type: "horror",
    details: { genre: "Gothic Horror", magic: "Abyssal", era: "Age of Sail" },
    characters: [], places: [], timeline: []
  },
  {
    id: "w10",
    name: "SKY REACH",
    tags: "HIGH FANTASY · MAGIC",
    description: '"Floating islands connected by bridges of solid light."',
    stats: { characters: 28, places: 14, events: 42 },
    type: "fantasy",
    details: { genre: "High Fantasy", magic: "Light-bridging", era: "Golden Age" },
    characters: [], places: [], timeline: []
  },
  {
    id: "w11",
    name: "COBALT PRIME",
    tags: "MECHA · MILITARY",
    description: '"Giant steel guardians are all that stand between the colonies and the swarm."',
    stats: { characters: 35, places: 12, events: 55 },
    type: "sci-fi",
    details: { genre: "Mecha", magic: "Fusion Core", era: "Colonial Era" },
    characters: [], places: [], timeline: []
  },
  {
    id: "w12",
    name: "BONE VALLEY",
    tags: "GRIMDARK · SURVIVAL",
    description: '"In a world made of dust, the only thing that grows is vengeance."',
    stats: { characters: 10, places: 3, events: 20 },
    type: "horror",
    details: { genre: "Grimdark", magic: "Necromancy", era: "Aftermath" },
    characters: [], places: [], timeline: []
  },
  {
    id: "w13",
    name: "EMERALD ISLE",
    tags: "FOLKLORE · NATURE",
    description: '"The trees remember the names of everyone who has ever walked their paths."',
    stats: { characters: 18, places: 11, events: 24 },
    type: "fantasy",
    details: { genre: "Folklore", magic: "Nature", era: "Ancient" },
    characters: [], places: [], timeline: []
  },
  {
    id: "w14",
    name: "OMEGA POINT",
    tags: "TRANSHUMAN · TECH",
    description: '"The line between man and machine has been deleted."',
    stats: { characters: 45, places: 18, events: 90 },
    type: "sci-fi",
    details: { genre: "Cybernetic", magic: "Singularity", era: "Post-Human" },
    characters: [], places: [], timeline: []
  },
  {
    id: "w15",
    name: "WHISPER WOOD",
    tags: "ELDRITCH · FOREST",
    description: '"Don\'t close your eyes, the shadows here have teeth."',
    stats: { characters: 8, places: 5, events: 12 },
    type: "horror",
    details: { genre: "Eldritch Horror", magic: "Shadow", era: "Unknown" },
    characters: [], places: [], timeline: []
  }
];

export async function GET() {
  return NextResponse.json(worldsData);
}

