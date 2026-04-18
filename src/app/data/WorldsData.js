export const worldsData = [
  {
    id: "w1",
    name: "AETHERMOOR",
    tags: "FANTASY · HIGH MAGIC",
    description:
      '"Where the veil between worlds grows thin, and forgotten gods still whisper in the dark."',
    type: "fantasy",
    details: {
      genre: "High Fantasy",
      magic: "Aetheric Weaving",
      era: "Third Age",
      fullStory:
        "In the age before the Sundering, when the Aether still flowed freely <br /> through the ley lines, gods walked among men and wove the very <br /> fabric of reality with their golden threads of ancient celestial power.",
    },
    characters: [
      {
        id: "c1",
        name: "ELOWEN ASHVEIL",
        title: "The Last Threadweaver",
        role: "Protagonist",
        class: "Mage",
        initial: "E",
        details: {
          age: 34,
          faction: "The Unravelers",
          origin: "Ashveil Keep",
          magicType: "Threadweaving",
          status: "Alive",
        },
        shortDesc: `<p>A gifted mage who perceives the fragile threads of reality, <br/> driven to uncover who is unraveling the world's magic and why.</p>`,
        fullDesc: `
          <div class="character-full">
            <h3 class="section-title" style="font-family: var(--font-mono); color: var(--color-gold-accent-primary); font-size: 0.7rem; letter-spacing: 0.15em; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--color-gold-border-dim);">HISTORY</h3>
            <p style="font-family: var(--font-crimson); color: var(--color-text-body-secondary); font-size: 1.05rem; line-height: 1.75; margin-bottom: 1.5rem;">
              Born in the shadow of <strong style="color: var(--color-text-heading-primary);">Ashveil Keep</strong>, Elowen showed signs of Threadweaving ability before she could speak. The Aetheric threads that bind the world's magic together were visible to her as faint silver filaments—beautiful, and increasingly frayed. She was taken from her family at age seven by the <strong style="color: var(--color-text-heading-primary);">Conclave of the Woven</strong>, trained, and eventually exiled when she refused to stop reporting what she saw: the world's magic was being deliberately unraveled from somewhere deep below the Hollow Peaks.
            </p>
            <h3 class="section-title" style="font-family: var(--font-mono); color: var(--color-gold-accent-primary); font-size: 0.7rem; letter-spacing: 0.15em; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--color-gold-border-dim);">MOTIVATION</h3>
            <p style="font-family: var(--font-crimson); color: var(--color-text-body-secondary); font-size: 1.05rem; line-height: 1.75; margin-bottom: 1.5rem;">
              Elowen does not want to save the world out of heroism. She wants to <strong style="color: var(--color-text-heading-primary);">understand it</strong>. <em>The fraying she sees is a pattern—elegant, intentional, mathematical. Whoever is unraveling the Aether is doing it like a craftsperson, not a destroyer. She needs to know why before she decides whether to stop them.</em>
            </p>
            <h3 class="section-title" style="font-family: var(--font-mono); color: var(--color-gold-accent-primary); font-size: 0.7rem; letter-spacing: 0.15em; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--color-gold-border-dim);">KEY EVENTS</h3>
            <p style="font-family: var(--font-crimson); color: var(--color-text-body-secondary); font-size: 1.05rem; line-height: 1.75;">
              Survived the <strong style="color: var(--color-text-heading-primary);">Sundering of the Third Gate</strong> <em>(Year 312)</em>. Discovered the <strong style="color: var(--color-text-heading-primary);">Ashveil Codex</strong> beneath her family's ruins. First encounter with Vael Duskborne at the <strong style="color: var(--color-text-heading-primary);">Mirrorfen Crossing</strong>. <em>Currently seeks the</em> <strong style="color: var(--color-text-heading-primary);">Oracle Sera</strong> <em>in the Unmapped Reaches.</em>
            </p>
          </div>
        `,
        relationships: [
          { name: "Vael Duskborne", initial: "V", role: "Antagonist", note: "Unknown motive" },
          { name: "Thorn Irenbeck", initial: "T", role: "Ally", note: "Reluctant guardian" },
          { name: "Sera of the Fold", initial: "S", role: "Unknown", note: "Prophesied meeting" },
          { name: "Kael Mourne", initial: "K", role: "Former student", note: "Estranged" },
        ],
        appearsIn: [
          { title: "The Sundering (Year 312)", subtitle: "Timeline event" },
          { title: "Ashveil Keep", subtitle: "Place of origin" },
        ],
      },
      {
        id: "c2",
        name: "KORALIS THE BLIND",
        title: "Seer of the Void",
        role: "Mentor",
        class: "Oracle",
        initial: "K",
        details: {
          age: 152,
          faction: "The Order",
          origin: "The Hollow Peaks",
          magicType: "Void Sight",
          status: "Alive",
        },
        shortDesc: `<p>An ancient oracle who lost his eyes to see beyond sight, <br/> now guiding those chosen by the Aether toward destinies they would rather avoid.</p>`,
        fullDesc: `
          <div class="character-full">
            <h3 class="section-title" style="font-family: var(--font-mono); color: var(--color-gold-accent-primary); font-size: 0.7rem; letter-spacing: 0.15em; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--color-gold-border-dim);">HISTORY</h3>
            <p style="font-family: var(--font-crimson); color: var(--color-text-body-secondary); font-size: 1.05rem; line-height: 1.75; margin-bottom: 1.5rem;">
              Koralis was born with sight beyond mortal understanding. At the age of thirty, he <strong style="color: var(--color-text-heading-primary);">willingly surrendered his eyes</strong> to the Void in exchange for true perception — the ability to see the Aether as it truly exists, without the noise of the visible world. He has served <strong style="color: var(--color-text-heading-primary);">The Order</strong> for over a century as their interpreter of omens, though he grows increasingly convinced The Order itself is complicit in the unraveling.
            </p>
            <h3 class="section-title" style="font-family: var(--font-mono); color: var(--color-gold-accent-primary); font-size: 0.7rem; letter-spacing: 0.15em; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--color-gold-border-dim);">MOTIVATION</h3>
            <p style="font-family: var(--font-crimson); color: var(--color-text-body-secondary); font-size: 1.05rem; line-height: 1.75; margin-bottom: 1.5rem;">
              Koralis does not guide Elowen out of loyalty — he guides her because the <strong style="color: var(--color-text-heading-primary);">Void showed him her face</strong> a hundred years before she was born. <em>Whatever she is meant to do, it is already written in the Aether. He merely ensures the ink does not smear.</em>
            </p>
            <h3 class="section-title" style="font-family: var(--font-mono); color: var(--color-gold-accent-primary); font-size: 0.7rem; letter-spacing: 0.15em; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--color-gold-border-dim);">KEY EVENTS</h3>
            <p style="font-family: var(--font-crimson); color: var(--color-text-body-secondary); font-size: 1.05rem; line-height: 1.75;">
              Witnessed the <strong style="color: var(--color-text-heading-primary);">First Fraying</strong> <em>(Year 160)</em>. Authored the <strong style="color: var(--color-text-heading-primary);">Codex of Unseeing</strong>, later banned by The Order. <em>Currently residing in self-imposed exile at the</em> <strong style="color: var(--color-text-heading-primary);">Shattered Spire</strong>.
            </p>
          </div>
        `,
        relationships: [
          { name: "Elowen Ashveil", initial: "E", role: "Chosen", note: "Foreseen protégé" },
          { name: "The Grand Warden", initial: "G", role: "Adversary", note: "Former ally" },
          { name: "Sera of the Fold", initial: "S", role: "Unknown", note: "Spoken of in prophecy" },
        ],
        appearsIn: [
          { title: "The First Fraying (Year 160)", subtitle: "Timeline event" },
          { title: "Shattered Spire", subtitle: "Place of exile" },
        ],
      },
    ],
    places: [
      { id: "p1", name: "VETHARA PRIME", type: "City", subtype: "Capital", icon: "hexagon" },
      { id: "p2", name: "WHISPERING FALLS", type: "Natural", subtype: "Sanctuary", icon: "droplet" },
    ],
    timeline: [
      { year: "Yr 1", category: "ARCANE", title: "THE FIRST WEAVING", desc: "The Aetheric network is established." },
      { year: "Yr 450", category: "WAR", title: "THE SUNDERING", desc: "The ley lines were fractured during the Great War." },
    ],
  },
  {
    id: "w2",
    name: "THE DRIFT",
    tags: "SCI-FI · POST-COLLAPSE",
    description:
      '"Three hundred years after the Silence, humanity survives in orbital arks above a dying Earth."',
    type: "sci-fi",
    details: {
      genre: "Hard Sci-Fi",
      magic: "Nanotechnology",
      era: "Post-Collapse",
      fullStory:
        "After the great silence consumed the blue planet, the last remnants of <br /> mankind built massive iron shells to drift endlessly in the cold void <br /> searching for a signal from a home that no longer breathes life.",
    },
    characters: [
      {
        id: "c3",
        name: "COMMANDER JAX",
        title: "Ark Pilot",
        role: "Leader",
        class: "Pilot",
        initial: "J",
        details: {
          age: 42,
          faction: "The Fleet",
          origin: "Ark Sovereign",
          magicType: "None",
          status: "Alive",
        },
        shortDesc: `<p>A weathered commander holding a fractured fleet together through sheer will, <br/> haunted by the Earth he never saw and the mutiny he barely survived.</p>`,
        fullDesc: `
          <div class="character-full">
            <h3 class="section-title" style="font-family: var(--font-mono); color: var(--color-gold-accent-primary); font-size: 0.7rem; letter-spacing: 0.15em; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--color-gold-border-dim);">HISTORY</h3>
            <p style="font-family: var(--font-crimson); color: var(--color-text-body-secondary); font-size: 1.05rem; line-height: 1.75; margin-bottom: 1.5rem;">
              Born on the <strong style="color: var(--color-text-heading-primary);">Ark Sovereign</strong>, Jax never knew Earth except through data logs and his mother's fading stories. He rose through Fleet ranks by being the one pilot who never flinched during hull breach drills. After the <strong style="color: var(--color-text-heading-primary);">Sovereign Mutiny of Year 289</strong>, he was the only command-rank officer left standing — not because he fought harder, but because both sides trusted him not to lie to them.
            </p>
            <h3 class="section-title" style="font-family: var(--font-mono); color: var(--color-gold-accent-primary); font-size: 0.7rem; letter-spacing: 0.15em; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--color-gold-border-dim);">MOTIVATION</h3>
            <p style="font-family: var(--font-crimson); color: var(--color-text-body-secondary); font-size: 1.05rem; line-height: 1.75; margin-bottom: 1.5rem;">
              Jax doesn't believe in Earth. <strong style="color: var(--color-text-heading-primary);">He believes in the people on his arks.</strong> <em>Every decision he makes is filtered through one question: does this keep them alive another decade? He is not searching for home. He is building one.</em>
            </p>
            <h3 class="section-title" style="font-family: var(--font-mono); color: var(--color-gold-accent-primary); font-size: 0.7rem; letter-spacing: 0.15em; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--color-gold-border-dim);">KEY EVENTS</h3>
            <p style="font-family: var(--font-crimson); color: var(--color-text-body-secondary); font-size: 1.05rem; line-height: 1.75;">
              Survived the <strong style="color: var(--color-text-heading-primary);">Sovereign Mutiny</strong> <em>(Year 289)</em>. Brokered the <strong style="color: var(--color-text-heading-primary);">Drift Accords</strong> uniting eleven arks under one Fleet charter. <em>Currently investigating an anomalous signal from the direction of</em> <strong style="color: var(--color-text-heading-primary);">Station 9</strong>.
            </p>
          </div>
        `,
        relationships: [
          { name: "Ensign Voss", initial: "V", role: "Protégé", note: "Too reckless to ignore" },
          { name: "Dr. Maren", initial: "M", role: "Advisor", note: "Disagrees on everything" },
          { name: "The Keeper", initial: "K", role: "Unknown", note: "Sender of the signal" },
        ],
        appearsIn: [
          { title: "The Sovereign Mutiny (Year 289)", subtitle: "Timeline event" },
          { title: "Station 9", subtitle: "Point of investigation" },
        ],
      },
    ],
    places: [
      { id: "p3", name: "STATION 9", type: "Orbital", subtype: "Outpost", icon: "circle" },
    ],
    timeline: [
      { year: "2340", category: "COLLAPSE", title: "THE SILENCE", desc: "Earth communication ceased globally." },
    ],
  },
  {
    id: "w3",
    name: "BELOW THE FOLD",
    tags: "HORROR · COSMIC",
    description:
      '"A small town in Vermont where the cartographers keep drawing maps that disagree with each other."',
    type: "horror",
    details: {
      genre: "Cosmic Horror",
      magic: "Eldritch",
      era: "Modern",
      fullStory:
        "Beneath the quiet streets of Vermont, an ancient geometry is shifting silently <br /> causing the very ink on maps to bleed and reform into patterns <br /> that no human eye was ever meant to perceive or understand correctly.",
    },
    characters: [],
    places: [],
    timeline: [],
  },
  {
    id: "w4",
    name: "IRON HAVEN",
    tags: "STEAMPUNK · INDUSTRIAL",
    description:
      '"Steam-powered empires clash over the last remaining coal mines in the frozen North."',
    type: "fantasy",
    details: {
      genre: "Steampunk",
      magic: "Steam Engine",
      era: "Industrial",
      fullStory:
        "Giant brass gears grind against the icy winds of the north as <br /> desperate kings trade their souls for a single bucket of black coal <br /> to keep the mechanical hearts of their dying cities beating one more day.",
    },
    characters: [
      {
        id: "c4",
        name: "SILAS VANE",
        title: "Master Tinkerer",
        role: "Inventor",
        class: "Engineer",
        initial: "S",
        details: {
          age: 28,
          faction: "Iron Guild",
          origin: "The Underfoundry",
          magicType: "Mechanical Ingenuity",
          status: "Alive",
        },
        shortDesc: `<p>A prodigy engineer from the lowest depths of the city, building <br/> machines that threaten to make the coal barons obsolete — which is exactly what they fear.</p>`,
        fullDesc: `
          <div class="character-full">
            <h3 class="section-title" style="font-family: var(--font-mono); color: var(--color-gold-accent-primary); font-size: 0.7rem; letter-spacing: 0.15em; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--color-gold-border-dim);">HISTORY</h3>
            <p style="font-family: var(--font-crimson); color: var(--color-text-body-secondary); font-size: 1.05rem; line-height: 1.75; margin-bottom: 1.5rem;">
              Raised in the <strong style="color: var(--color-text-heading-primary);">Underfoundry</strong> — the smog-choked belly of Iron Haven where the workers live — Silas taught himself engineering by disassembling broken machines others discarded. His first invention, a <strong style="color: var(--color-text-heading-primary);">self-pressurizing coal-free boiler</strong>, earned him a spot in the Iron Guild at twenty-two and made him a target of the coal barons by twenty-five.
            </p>
            <h3 class="section-title" style="font-family: var(--font-mono); color: var(--color-gold-accent-primary); font-size: 0.7rem; letter-spacing: 0.15em; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--color-gold-border-dim);">MOTIVATION</h3>
            <p style="font-family: var(--font-crimson); color: var(--color-text-body-secondary); font-size: 1.05rem; line-height: 1.75; margin-bottom: 1.5rem;">
              Silas wants to <strong style="color: var(--color-text-heading-primary);">end the coal wars</strong> not with politics, but with obsolescence. <em>If he can build a machine that runs without coal, the wars lose their reason. The Baroness knows this. That is why she wants his blueprints — or his silence.</em>
            </p>
            <h3 class="section-title" style="font-family: var(--font-mono); color: var(--color-gold-accent-primary); font-size: 0.7rem; letter-spacing: 0.15em; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--color-gold-border-dim);">KEY EVENTS</h3>
            <p style="font-family: var(--font-crimson); color: var(--color-text-body-secondary); font-size: 1.05rem; line-height: 1.75;">
              Unveiled the <strong style="color: var(--color-text-heading-primary);">Vane Engine Mark I</strong> at the Iron Guild Conclave. Narrowly escaped assassination at <strong style="color: var(--color-text-heading-primary);">Steam Plaza</strong>. <em>Currently hiding blueprints for the</em> <strong style="color: var(--color-text-heading-primary);">Mark III</strong> <em>in the Forge's deepest level.</em>
            </p>
          </div>
        `,
        relationships: [
          { name: "Baroness Steel", initial: "B", role: "Antagonist", note: "Wants his work destroyed" },
          { name: "Pip", initial: "P", role: "Assistant", note: "Fiercely loyal" },
          { name: "Guildmaster Holt", initial: "G", role: "Patron", note: "Playing both sides" },
        ],
        appearsIn: [
          { title: "Steam Revolution (1892)", subtitle: "Timeline event" },
          { title: "The Forge", subtitle: "Workplace" },
        ],
      },
      {
        id: "c5",
        name: "BARONESS STEEL",
        title: "Iron Queen",
        role: "Antagonist",
        class: "Noble",
        initial: "B",
        details: {
          age: 50,
          faction: "Coalition",
          origin: "Northern Reaches",
          magicType: "Political Dominance",
          status: "Alive",
        },
        shortDesc: `<p>An iron-willed ruler who built her empire on coal and war, <br/> now facing the terrifying possibility that a young engineer could make everything she owns worthless.</p>`,
        fullDesc: `
          <div class="character-full">
            <h3 class="section-title" style="font-family: var(--font-mono); color: var(--color-gold-accent-primary); font-size: 0.7rem; letter-spacing: 0.15em; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--color-gold-border-dim);">HISTORY</h3>
            <p style="font-family: var(--font-crimson); color: var(--color-text-body-secondary); font-size: 1.05rem; line-height: 1.75; margin-bottom: 1.5rem;">
              The Baroness inherited three failed mines and a crumbling title. Within a decade, she had seized control of <strong style="color: var(--color-text-heading-primary);">every viable coal vein in the Northern Reaches</strong> through a combination of shrewd contracts and ruthless enforcement. She founded the <strong style="color: var(--color-text-heading-primary);">Coalition</strong> not out of ideology, but because shared monopoly is stronger than competition.
            </p>
            <h3 class="section-title" style="font-family: var(--font-mono); color: var(--color-gold-accent-primary); font-size: 0.7rem; letter-spacing: 0.15em; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--color-gold-border-dim);">MOTIVATION</h3>
            <p style="font-family: var(--font-crimson); color: var(--color-text-body-secondary); font-size: 1.05rem; line-height: 1.75; margin-bottom: 1.5rem;">
              She is not cruel for pleasure. She is <strong style="color: var(--color-text-heading-primary);">afraid</strong>. <em>Every empire she has built rests on the assumption that coal is irreplaceable. Silas Vane is a crack in that foundation — and she will mortar it shut with whatever it takes.</em>
            </p>
            <h3 class="section-title" style="font-family: var(--font-mono); color: var(--color-gold-accent-primary); font-size: 0.7rem; letter-spacing: 0.15em; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--color-gold-border-dim);">KEY EVENTS</h3>
            <p style="font-family: var(--font-crimson); color: var(--color-text-body-secondary); font-size: 1.05rem; line-height: 1.75;">
              Signed the <strong style="color: var(--color-text-heading-primary);">Iron Compact of 1888</strong>, unifying the Coalition. Ordered the <strong style="color: var(--color-text-heading-primary);">Underfoundry Lockdown</strong> following worker uprisings. <em>Currently negotiating with foreign powers to suppress the</em> <strong style="color: var(--color-text-heading-primary);">Vane Engine</strong> <em>patent internationally.</em>
            </p>
          </div>
        `,
        relationships: [
          { name: "Silas Vane", initial: "S", role: "Threat", note: "Must be neutralized" },
          { name: "Lord Fenn", initial: "F", role: "Ally", note: "Coalition co-founder" },
          { name: "Guildmaster Holt", initial: "G", role: "Asset", note: "Paid informant" },
        ],
        appearsIn: [
          { title: "Iron Compact (1888)", subtitle: "Timeline event" },
          { title: "Steam Plaza", subtitle: "Public seat of power" },
        ],
      },
    ],
    places: [
      { id: "p4", name: "THE FORGE", type: "Factory", subtype: "Core", icon: "square" },
      { id: "p5", name: "STEAM PLAZA", type: "City Hub", subtype: "Market", icon: "circle" },
    ],
    timeline: [
      { year: "1892", category: "TECH", title: "STEAM REVOLUTION", desc: "The first high-pressure engine was built." },
    ],
  },
  {
    id: "w5",
    name: "NEON SHADOW",
    tags: "CYBERPUNK · DYSTOPIAN",
    description:
      '"In the city of eternal rain, data is the only currency that matters."',
    type: "sci-fi",
    details: {
      genre: "Cyberpunk",
      magic: "Neural Links",
      era: "2099",
      fullStory:
        "Under the flickering neon signs, hackers sell memories like fruit while the <br /> corporate overlords watch every pulse through neural links, turning human emotions <br /> into digital code for the highest bidder in the dark electronic markets.",
    },
    characters: [
      {
        id: "c6",
        name: "ZERO",
        title: "Ghost Hacker",
        role: "Rogue",
        class: "Netrunner",
        initial: "Z",
        details: {
          age: 21,
          faction: "Shadow Bit",
          origin: "Neon District",
          magicType: "Neural Intrusion",
          status: "Unknown",
        },
        shortDesc: `<p>A ghost in the machine — a hacker with no verified identity, no traceable <br/> origin, and an uncanny ability to breach systems that have never been breached before.</p>`,
        fullDesc: `
          <div class="character-full">
            <h3 class="section-title" style="font-family: var(--font-mono); color: var(--color-gold-accent-primary); font-size: 0.7rem; letter-spacing: 0.15em; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--color-gold-border-dim);">HISTORY</h3>
            <p style="font-family: var(--font-crimson); color: var(--color-text-body-secondary); font-size: 1.05rem; line-height: 1.75; margin-bottom: 1.5rem;">
              Zero has no verified birth record, no registered neural link ID, and no confirmed real name. What is known: they emerged from the <strong style="color: var(--color-text-heading-primary);">Neon District's sub-levels</strong> around age sixteen, already capable of bypassing corporate-grade firewalls. Shadow Bit didn't recruit Zero — <strong style="color: var(--color-text-heading-primary);">Zero chose them</strong>, after leaving a message inside the Data Core's supposedly unbreachable archive.
            </p>
            <h3 class="section-title" style="font-family: var(--font-mono); color: var(--color-gold-accent-primary); font-size: 0.7rem; letter-spacing: 0.15em; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--color-gold-border-dim);">MOTIVATION</h3>
            <p style="font-family: var(--font-crimson); color: var(--color-text-body-secondary); font-size: 1.05rem; line-height: 1.75; margin-bottom: 1.5rem;">
              Zero is looking for something specific inside the <strong style="color: var(--color-text-heading-primary);">corporate memory banks</strong>. <em>Not data. Not leverage. A name — the one that was erased from every record the night they were born. Every breach is a step closer to finding it.</em>
            </p>
            <h3 class="section-title" style="font-family: var(--font-mono); color: var(--color-gold-accent-primary); font-size: 0.7rem; letter-spacing: 0.15em; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--color-gold-border-dim);">KEY EVENTS</h3>
            <p style="font-family: var(--font-crimson); color: var(--color-text-body-secondary); font-size: 1.05rem; line-height: 1.75;">
              Breached the <strong style="color: var(--color-text-heading-primary);">Net Merger Archives</strong> <em>(2095)</em> — the only unauthorized access in its history. Left a single message: <strong style="color: var(--color-text-heading-primary);">"I was here before the silence."</strong> <em>Currently hunted by Metro PD's</em> <strong style="color: var(--color-text-heading-primary);">Ghost Division</strong>.
            </p>
          </div>
        `,
        relationships: [
          { name: "Detective Reed", initial: "R", role: "Hunter", note: "Reluctant respect" },
          { name: "Cipher", initial: "C", role: "Ally", note: "Shadow Bit handler" },
          { name: "The Architect", initial: "A", role: "Unknown", note: "Name in the deleted file" },
        ],
        appearsIn: [
          { title: "Net Merger (2088)", subtitle: "Timeline event" },
          { title: "Data Core", subtitle: "Primary target" },
        ],
      },
      {
        id: "c7",
        name: "DETECTIVE REED",
        title: "Ex-Cop",
        role: "Enforcer",
        class: "Soldier",
        initial: "R",
        details: {
          age: 45,
          faction: "Metro PD",
          origin: "Upper District",
          magicType: "Neural Augmentation",
          status: "Retired",
        },
        shortDesc: `<p>A retired detective who can't stop working, assigned to the only case that ever beat <br/> him — and increasingly unsure which side of it he belongs on.</p>`,
        fullDesc: `
          <div class="character-full">
            <h3 class="section-title" style="font-family: var(--font-mono); color: var(--color-gold-accent-primary); font-size: 0.7rem; letter-spacing: 0.15em; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--color-gold-border-dim);">HISTORY</h3>
            <p style="font-family: var(--font-crimson); color: var(--color-text-body-secondary); font-size: 1.05rem; line-height: 1.75; margin-bottom: 1.5rem;">
              Reed served <strong style="color: var(--color-text-heading-primary);">twenty years in Metro PD</strong> before retiring on a pension that barely covers his augmentation maintenance. He was the city's best case closer — until Zero. The one breach he couldn't solve. He was brought back as a consultant, officially retired, unofficially <strong style="color: var(--color-text-heading-primary);">obsessed</strong>.
            </p>
            <h3 class="section-title" style="font-family: var(--font-mono); color: var(--color-gold-accent-primary); font-size: 0.7rem; letter-spacing: 0.15em; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--color-gold-border-dim);">MOTIVATION</h3>
            <p style="font-family: var(--font-crimson); color: var(--color-text-body-secondary); font-size: 1.05rem; line-height: 1.75; margin-bottom: 1.5rem;">
              Reed tells himself he wants to <strong style="color: var(--color-text-heading-primary);">close the case</strong>. <em>But the more he digs, the more he suspects Zero is looking for the same thing he buried twenty years ago — a file he was paid to forget.</em>
            </p>
            <h3 class="section-title" style="font-family: var(--font-mono); color: var(--color-gold-accent-primary); font-size: 0.7rem; letter-spacing: 0.15em; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--color-gold-border-dim);">KEY EVENTS</h3>
            <p style="font-family: var(--font-crimson); color: var(--color-text-body-secondary); font-size: 1.05rem; line-height: 1.75;">
              Closed the <strong style="color: var(--color-text-heading-primary);">47 Neon Cases</strong> — a Metro PD record. Assigned to the <strong style="color: var(--color-text-heading-primary);">Zero file</strong> <em>(2095)</em>. <em>Currently tracking Zero through the</em> <strong style="color: var(--color-text-heading-primary);">Neon District</strong> <em>on unofficial orders.</em>
            </p>
          </div>
        `,
        relationships: [
          { name: "Zero", initial: "Z", role: "Target", note: "Knows more than expected" },
          { name: "Chief Maris", initial: "M", role: "Handler", note: "Does not trust Reed's loyalty" },
          { name: "The Architect", initial: "A", role: "Unknown", note: "A name from a buried file" },
        ],
        appearsIn: [
          { title: "Net Merger (2088)", subtitle: "Timeline event" },
          { title: "Neon District", subtitle: "Hunting ground" },
        ],
      },
    ],
    places: [
      { id: "p6", name: "DATA CORE", type: "Tech", subtype: "Server", icon: "database" },
      { id: "p7", name: "NEON DISTRICT", type: "City", subtype: "Slums", icon: "activity" },
    ],
    timeline: [
      { year: "2088", category: "CORP", title: "NET MERGER", desc: "All data became private property." },
    ],
  },
  {
    id: "w6",
    name: "SILENT PEAK",
    tags: "MYSTERY · SUPERNATURAL",
    description:
      '"The fog never lifts from the mountain, and neither do the souls of those who climb it."',
    type: "horror",
    details: {
      genre: "Supernatural Mystery",
      magic: "Spiritualism",
      era: "1920s",
      fullStory:
        "The residents of the valley speak in whispers about the peak that <br /> swallowed the sun, where the ghosts of failed climbers still haunt the <br /> frozen trails, searching for a warmth that left this world a century ago.",
    },
    characters: [
      {
        id: "c8",
        name: "FATHER THOMAS",
        title: "The Exorcist",
        role: "Priest",
        class: "Cleric",
        initial: "T",
        details: {
          age: 60,
          faction: "The Church",
          origin: "Valley Parish",
          magicType: "Sacred Rites",
          status: "Alive",
        },
        shortDesc: `<p>A priest who has performed more exorcisms than the Church officially sanctions, <br/> walking a fine line between faith and an uncomfortable familiarity with what lives in the dark.</p>`,
        fullDesc: `
          <div class="character-full">
            <h3 class="section-title" style="font-family: var(--font-mono); color: var(--color-gold-accent-primary); font-size: 0.7rem; letter-spacing: 0.15em; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--color-gold-border-dim);">HISTORY</h3>
            <p style="font-family: var(--font-crimson); color: var(--color-text-body-secondary); font-size: 1.05rem; line-height: 1.75; margin-bottom: 1.5rem;">
              Father Thomas has served the <strong style="color: var(--color-text-heading-primary);">Valley Parish</strong> for thirty years, longer than any priest before him — because no one else would stay. He has catalogued every disappearance on the Peak, every whisper reported by valley residents, and every night that the fog rolled into town and <strong style="color: var(--color-text-heading-primary);">left something behind</strong> when it retreated.
            </p>
            <h3 class="section-title" style="font-family: var(--font-mono); color: var(--color-gold-accent-primary); font-size: 0.7rem; letter-spacing: 0.15em; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--color-gold-border-dim);">MOTIVATION</h3>
            <p style="font-family: var(--font-crimson); color: var(--color-text-body-secondary); font-size: 1.05rem; line-height: 1.75; margin-bottom: 1.5rem;">
              He is not trying to destroy the thing on the Peak. <strong style="color: var(--color-text-heading-primary);">He is trying to understand its terms</strong>. <em>Every haunting has a contract — something owed, something taken, something left unfinished. Find the terms. Fulfill them. Maybe then the fog lifts.</em>
            </p>
            <h3 class="section-title" style="font-family: var(--font-mono); color: var(--color-gold-accent-primary); font-size: 0.7rem; letter-spacing: 0.15em; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--color-gold-border-dim);">KEY EVENTS</h3>
            <p style="font-family: var(--font-crimson); color: var(--color-text-body-secondary); font-size: 1.05rem; line-height: 1.75;">
              Conducted the <strong style="color: var(--color-text-heading-primary);">Rite of the Great Fog</strong> <em>(1924)</em>, which slowed but did not stop the phenomenon. Recovered <strong style="color: var(--color-text-heading-primary);">seven journals</strong> from disappeared climbers. <em>Currently deciphering a map drawn by a climber who returned — and could not explain how.</em>
            </p>
          </div>
        `,
        relationships: [
          { name: "The Bishop", initial: "B", role: "Superior", note: "Wants the matter buried" },
          { name: "Clara Voss", initial: "C", role: "Researcher", note: "Skeptic turned believer" },
          { name: "The Returned", initial: "R", role: "Unknown", note: "The climber who came back wrong" },
        ],
        appearsIn: [
          { title: "The Great Fog (1924)", subtitle: "Timeline event" },
          { title: "Peak Manor", subtitle: "Site of investigation" },
        ],
      },
    ],
    places: [
      { id: "p8", name: "PEAK MANOR", type: "Building", subtype: "Haunted", icon: "home" },
    ],
    timeline: [
      { year: "1924", category: "EVENT", title: "THE GREAT FOG", desc: "The mountain disappeared from sight for a month." },
    ],
  },
  {
    id: "w7",
    name: "GOLDEN SANDS",
    tags: "ADVENTURE · ANCIENT",
    description:
      '"Hidden beneath the dunes lies a civilization that mastered the sun."',
    type: "fantasy",
    details: {
      genre: "Ancient Adventure",
      magic: "Solar",
      era: "Bronze Age",
      fullStory:
        "Deep within the shifting desert lies a city of glass where the <br /> ancients trapped the sun's rays to power their golden chariots and forge <br /> weapons of pure light that could turn whole armies into pillars of salt.",
    },
    characters: [
      {
        id: "c9",
        name: "RA-KHOTEP",
        title: "Sun King",
        role: "Ruler",
        class: "God-King",
        initial: "R",
        details: {
          age: 200,
          faction: "Solar Dynasty",
          origin: "Sun Temple",
          magicType: "Solar Mastery",
          status: "Deceased",
        },
        shortDesc: `<p>A god-king who tethered the sun itself to his pyramid, <br/> believing immortality was a matter of engineering — and who was right, in ways he never intended.</p>`,
        fullDesc: `
          <div class="character-full">
            <h3 class="section-title" style="font-family: var(--font-mono); color: var(--color-gold-accent-primary); font-size: 0.7rem; letter-spacing: 0.15em; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--color-gold-border-dim);">HISTORY</h3>
            <p style="font-family: var(--font-crimson); color: var(--color-text-body-secondary); font-size: 1.05rem; line-height: 1.75; margin-bottom: 1.5rem;">
              Ra-Khotep ruled the <strong style="color: var(--color-text-heading-primary);">Solar Dynasty</strong> for two centuries through a combination of genuine solar magic and ruthless political engineering. He was the first to discover that sunlight, when focused through the <strong style="color: var(--color-text-heading-primary);">Crystal of Ascension</strong>, could be stored and weaponized. He built the Sun Temple not for worship — but as a <strong style="color: var(--color-text-heading-primary);">solar battery</strong> large enough to outlast him.
            </p>
            <h3 class="section-title" style="font-family: var(--font-mono); color: var(--color-gold-accent-primary); font-size: 0.7rem; letter-spacing: 0.15em; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--color-gold-border-dim);">MOTIVATION</h3>
            <p style="font-family: var(--font-crimson); color: var(--color-text-body-secondary); font-size: 1.05rem; line-height: 1.75; margin-bottom: 1.5rem;">
              Ra-Khotep did not want to live forever. He wanted his <strong style="color: var(--color-text-heading-primary);">civilization</strong> to. <em>Every stone of the Sun Temple was laid with the understanding that empires fall — but if the sun still shines on your foundations, something of you remains.</em>
            </p>
            <h3 class="section-title" style="font-family: var(--font-mono); color: var(--color-gold-accent-primary); font-size: 0.7rem; letter-spacing: 0.15em; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--color-gold-border-dim);">KEY EVENTS</h3>
            <p style="font-family: var(--font-crimson); color: var(--color-text-body-secondary); font-size: 1.05rem; line-height: 1.75;">
              Completed the <strong style="color: var(--color-text-heading-primary);">Solar Ascension</strong> <em>(BCE 2000)</em>. Tethered the sun to the <strong style="color: var(--color-text-heading-primary);">Great Pyramid</strong>. <em>Died at two hundred years — but his voice still answers questions spoken aloud in the</em> <strong style="color: var(--color-text-heading-primary);">Sun Temple's inner sanctum</strong>.
            </p>
          </div>
        `,
        relationships: [
          { name: "High Priest Amun", initial: "A", role: "Ally", note: "Keeper of solar rites" },
          { name: "Queen Nefara", initial: "N", role: "Consort", note: "Architect of the Crystal" },
          { name: "The Sand Wanderer", initial: "W", role: "Unknown", note: "Speaks to the echo still" },
        ],
        appearsIn: [
          { title: "Solar Ascension (BCE 2000)", subtitle: "Timeline event" },
          { title: "Sun Temple", subtitle: "Seat of power" },
        ],
      },
    ],
    places: [
      { id: "p9", name: "SUN TEMPLE", type: "Religious", subtype: "Monument", icon: "sun" },
    ],
    timeline: [
      { year: "BCE 2000", category: "CIV", title: "SOLAR ASCENSION", desc: "The sun was tethered to the great pyramid." },
    ],
  },
  {
    id: "w8",
    name: "VOID SECTOR",
    tags: "SPACE OPERA · GALACTIC",
    description:
      '"At the edge of the galaxy, the stars are finally starting to go out."',
    type: "sci-fi",
    details: {
      genre: "Space Opera",
      magic: "Dark Matter",
      era: "End Times",
      fullStory:
        "As the final stars flicker and die, the great galactic empires scramble <br /> to reach the mythic Void Sector, hoping to find a gateway to <br /> a new universe before the cold darkness claims the last of their kind.",
    },
    characters: [
      {
        id: "c10",
        name: "XANADU",
        title: "Star-Eater",
        role: "Antagonist",
        class: "Entity",
        initial: "X",
        details: {
          age: "Infinite",
          faction: "The Void",
          origin: "Pre-Universe",
          magicType: "Dark Matter Consumption",
          status: "Active",
        },
        shortDesc: `<p>An entity older than the first star, neither malevolent nor benign — simply hungry, <br/> in the way that gravity is hungry, because that is its nature.</p>`,
        fullDesc: `
          <div class="character-full">
            <h3 class="section-title" style="font-family: var(--font-mono); color: var(--color-gold-accent-primary); font-size: 0.7rem; letter-spacing: 0.15em; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--color-gold-border-dim);">HISTORY</h3>
            <p style="font-family: var(--font-crimson); color: var(--color-text-body-secondary); font-size: 1.05rem; line-height: 1.75; margin-bottom: 1.5rem;">
              Xanadu predates the current universe. It was present at the <strong style="color: var(--color-text-heading-primary);">last expansion</strong>, observed the birth of the first stars, and has been patiently consuming them ever since. It does not hate the civilizations that formed around those stars — it simply does not register them as distinct from the <strong style="color: var(--color-text-heading-primary);">stellar matter</strong> it has always consumed.
            </p>
            <h3 class="section-title" style="font-family: var(--font-mono); color: var(--color-gold-accent-primary); font-size: 0.7rem; letter-spacing: 0.15em; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--color-gold-border-dim);">MOTIVATION</h3>
            <p style="font-family: var(--font-crimson); color: var(--color-text-body-secondary); font-size: 1.05rem; line-height: 1.75; margin-bottom: 1.5rem;">
              Xanadu has no motivation in any meaningful sense. <em>It is the end state of matter — the thing everything becomes when energy finally runs out. The empires racing to escape it are, from its perspective, simply</em> <strong style="color: var(--color-text-heading-primary);">arriving early</strong>.
            </p>
            <h3 class="section-title" style="font-family: var(--font-mono); color: var(--color-gold-accent-primary); font-size: 0.7rem; letter-spacing: 0.15em; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--color-gold-border-dim);">KEY EVENTS</h3>
            <p style="font-family: var(--font-crimson); color: var(--color-text-body-secondary); font-size: 1.05rem; line-height: 1.75;">
              Consumed the <strong style="color: var(--color-text-heading-primary);">Helix Nebula</strong> <em>(Year 4200)</em>. Scientists confirmed: <strong style="color: var(--color-text-heading-primary);">it is accelerating</strong>. <em>Currently approaching the</em> <strong style="color: var(--color-text-heading-primary);">Void Sector</strong> <em>— the one region it has never entered.</em>
            </p>
          </div>
        `,
        relationships: [
          { name: "Captain Nova", initial: "N", role: "Irrelevant", note: "Not yet noticed" },
          { name: "The Precursor", initial: "P", role: "Predecessor", note: "What came before" },
        ],
        appearsIn: [
          { title: "The Last Star (5000)", subtitle: "Timeline event" },
          { title: "Black Hole Rim", subtitle: "Point of approach" },
        ],
      },
      {
        id: "c11",
        name: "CAPTAIN NOVA",
        title: "Explorer",
        role: "Hero",
        class: "Explorer",
        initial: "N",
        details: {
          age: 30,
          faction: "Vanguard",
          origin: "Vanguard Station",
          magicType: "Dark Matter Navigation",
          status: "Alive",
        },
        shortDesc: `<p>The youngest captain in Vanguard history, racing toward the one sector of the galaxy that has never been mapped — <br/> because whatever is there might be the only thing that saves everyone.</p>`,
        fullDesc: `
          <div class="character-full">
            <h3 class="section-title" style="font-family: var(--font-mono); color: var(--color-gold-accent-primary); font-size: 0.7rem; letter-spacing: 0.15em; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--color-gold-border-dim);">HISTORY</h3>
            <p style="font-family: var(--font-crimson); color: var(--color-text-body-secondary); font-size: 1.05rem; line-height: 1.75; margin-bottom: 1.5rem;">
              Nova was commissioned at twenty-six after charting three previously unmappable dark matter corridors. <strong style="color: var(--color-text-heading-primary);">Vanguard</strong> gave her a ship and a mission: reach the <strong style="color: var(--color-text-heading-primary);">Void Sector</strong> before the last inhabited systems are consumed. No one has survived mapping the Sector's edge. Nova is operating on the assumption that those expeditions made the mistake of stopping short.
            </p>
            <h3 class="section-title" style="font-family: var(--font-mono); color: var(--color-gold-accent-primary); font-size: 0.7rem; letter-spacing: 0.15em; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--color-gold-border-dim);">MOTIVATION</h3>
            <p style="font-family: var(--font-crimson); color: var(--color-text-body-secondary); font-size: 1.05rem; line-height: 1.75; margin-bottom: 1.5rem;">
              Nova does not believe the <strong style="color: var(--color-text-heading-primary);">Void Sector is a gateway</strong>. <em>She believes it is a record — a place where the previous universe left instructions for the next one. She is not trying to escape. She is trying to leave a message for whoever comes after.</em>
            </p>
            <h3 class="section-title" style="font-family: var(--font-mono); color: var(--color-gold-accent-primary); font-size: 0.7rem; letter-spacing: 0.15em; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--color-gold-border-dim);">KEY EVENTS</h3>
            <p style="font-family: var(--font-crimson); color: var(--color-text-body-secondary); font-size: 1.05rem; line-height: 1.75;">
              Charted the <strong style="color: var(--color-text-heading-primary);">Trident Corridors</strong> <em>(Year 4990)</em>. Lost her co-pilot at the <strong style="color: var(--color-text-heading-primary);">Black Hole Rim</strong>. <em>Currently at the threshold of the</em> <strong style="color: var(--color-text-heading-primary);">Void Sector</strong> <em>with fourteen hours of fuel remaining.</em>
            </p>
          </div>
        `,
        relationships: [
          { name: "Xanadu", initial: "X", role: "Pursuer", note: "Does not know she exists" },
          { name: "Admiral Kesh", initial: "K", role: "Commander", note: "Ordered her to turn back" },
          { name: "Dr. Olin", initial: "O", role: "Crew", note: "The last believer on board" },
        ],
        appearsIn: [
          { title: "The Last Star (5000)", subtitle: "Timeline event" },
          { title: "Black Hole Rim", subtitle: "Current position" },
        ],
      },
    ],
    places: [
      { id: "p10", name: "BLACK HOLE RIM", type: "Location", subtype: "Void", icon: "aperture" },
    ],
    timeline: [
      { year: "5000", category: "EXTINCTION", title: "THE LAST STAR", desc: "Scientists confirm the death of the final sun." },
    ],
  },
  {
    id: "w9",
    name: "DARK WATER",
    tags: "GOTHIC · NAVAL",
    description:
      '"The ocean hides more than just shipwrecks; it hides a hunger."',
    type: "horror",
    details: {
      genre: "Gothic Horror",
      magic: "Abyssal",
      era: "Age of Sail",
      fullStory:
        "Sailors tell tales of a black tide that rises when the moon <br /> hides, pulling mighty ships into the crushing depths where a nameless hunger <br /> waits patiently to consume the souls of those who dare cross the void.",
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
    type: "fantasy",
    details: {
      genre: "High Fantasy",
      magic: "Light-bridging",
      era: "Golden Age",
      fullStory:
        "In the world above the clouds, masters of light construct fragile bridges <br /> between floating peaks, maintaining a delicate balance of power while the <br /> shadows of the earth below plot to bring the celestial kingdom crashing down.",
    },
    characters: [
      {
        id: "c12",
        name: "LYRA",
        title: "Sky Dancer",
        role: "Courier",
        class: "Rogue",
        initial: "L",
        details: {
          age: 19,
          faction: "Cloud Runners",
          origin: "Isle of Veth",
          magicType: "Light-threading",
          status: "Alive",
        },
        shortDesc: `<p>The fastest courier in the sky islands, who runs messages between <br/> floating kingdoms along bridges of solid light — and recently intercepted one she was never supposed to read.</p>`,
        fullDesc: `
          <div class="character-full">
            <h3 class="section-title" style="font-family: var(--font-mono); color: var(--color-gold-accent-primary); font-size: 0.7rem; letter-spacing: 0.15em; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--color-gold-border-dim);">HISTORY</h3>
            <p style="font-family: var(--font-crimson); color: var(--color-text-body-secondary); font-size: 1.05rem; line-height: 1.75; margin-bottom: 1.5rem;">
              Lyra grew up on the <strong style="color: var(--color-text-heading-primary);">Isle of Veth</strong>, the smallest and poorest of the sky islands, where children learn to run the light bridges before they learn to read. She joined the <strong style="color: var(--color-text-heading-primary);">Cloud Runners</strong> at fourteen and became their fastest courier by sixteen. She has run every bridge in the sky kingdom — including the three that are officially closed.
            </p>
            <h3 class="section-title" style="font-family: var(--font-mono); color: var(--color-gold-accent-primary); font-size: 0.7rem; letter-spacing: 0.15em; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--color-gold-border-dim);">MOTIVATION</h3>
            <p style="font-family: var(--font-crimson); color: var(--color-text-body-secondary); font-size: 1.05rem; line-height: 1.75; margin-bottom: 1.5rem;">
              Lyra opened a sealed message meant for the <strong style="color: var(--color-text-heading-primary);">Sky Council</strong> — and now knows that the light bridges are failing deliberately. <em>Someone is cutting them. One by one. And the Council is letting it happen. She does not know why. But she knows she is the only one who can reach every island before the last bridge falls.</em>
            </p>
            <h3 class="section-title" style="font-family: var(--font-mono); color: var(--color-gold-accent-primary); font-size: 0.7rem; letter-spacing: 0.15em; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--color-gold-border-dim);">KEY EVENTS</h3>
            <p style="font-family: var(--font-crimson); color: var(--color-text-body-secondary); font-size: 1.05rem; line-height: 1.75;">
              Completed the <strong style="color: var(--color-text-heading-primary);">Triarch Run</strong> in record time <em>(L.A. 198)</em>. Intercepted the <strong style="color: var(--color-text-heading-primary);">Sealed Council Dispatch</strong>. <em>Currently being hunted by Sky Council agents while trying to reach the</em> <strong style="color: var(--color-text-heading-primary);">Isle of the First Light</strong>.
            </p>
          </div>
        `,
        relationships: [
          { name: "Headrunner Cas", initial: "C", role: "Mentor", note: "Does not know what she found" },
          { name: "Councilor Aveth", initial: "A", role: "Pursuer", note: "Ordered her silence" },
          { name: "The Shadow Below", initial: "S", role: "Unknown", note: "The ones cutting the bridges" },
        ],
        appearsIn: [
          { title: "The Ascension (L.A. 100)", subtitle: "Timeline event" },
          { title: "Light Bridge", subtitle: "Primary route" },
        ],
      },
    ],
    places: [
      { id: "p11", name: "LIGHT BRIDGE", type: "Structure", subtype: "Path", icon: "maximize" },
    ],
    timeline: [
      { year: "L.A. 100", category: "MAGIC", title: "THE ASCENSION", desc: "Islands broke free from the surface world." },
    ],
  },
  {
    id: "w11",
    name: "COBALT PRIME",
    tags: "MECHA · MILITARY",
    description:
      '"Giant steel guardians are all that stand between the colonies and the swarm."',
    type: "sci-fi",
    details: {
      genre: "Mecha",
      magic: "Fusion Core",
      era: "Colonial Era",
      fullStory:
        "On the harsh frontier of Cobalt Prime, pilots strap themselves into towering <br /> steel machines to defend the last human colonies from an endless swarm <br /> of insectoid nightmares that emerge from the red soil every thousand years.",
    },
    characters: [
      {
        id: "c13",
        name: "SGT. MILLER",
        title: "Mech Pilot",
        role: "Soldier",
        class: "Heavy",
        initial: "M",
        details: {
          age: 38,
          faction: "Colonial Defense",
          origin: "Colony Seven",
          magicType: "Fusion Sync",
          status: "MIA",
        },
        shortDesc: `<p>A veteran mech pilot who went MIA during the last swarm incursion — and whose mech <br/> was found running, empty, standing guard over a colony that should have been destroyed.</p>`,
        fullDesc: `
          <div class="character-full">
            <h3 class="section-title" style="font-family: var(--font-mono); color: var(--color-gold-accent-primary); font-size: 0.7rem; letter-spacing: 0.15em; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--color-gold-border-dim);">HISTORY</h3>
            <p style="font-family: var(--font-crimson); color: var(--color-text-body-secondary); font-size: 1.05rem; line-height: 1.75; margin-bottom: 1.5rem;">
              Miller was <strong style="color: var(--color-text-heading-primary);">Colonial Defense's most decorated pilot</strong>, with seventeen confirmed swarm engagements and zero civilian casualties. He was known for pushing his fusion sync beyond recommended limits — merging his consciousness so deeply with his mech that he claimed to feel the swarm <strong style="color: var(--color-text-heading-primary);">thinking</strong>. After the <strong style="color: var(--color-text-heading-primary);">Colony Seven Incursion</strong>, he vanished. His mech did not.
            </p>
            <h3 class="section-title" style="font-family: var(--font-mono); color: var(--color-gold-accent-primary); font-size: 0.7rem; letter-spacing: 0.15em; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--color-gold-border-dim);">MOTIVATION</h3>
            <p style="font-family: var(--font-crimson); color: var(--color-text-body-secondary); font-size: 1.05rem; line-height: 1.75; margin-bottom: 1.5rem;">
              Before disappearing, Miller filed one final report. It read: <strong style="color: var(--color-text-heading-primary);">"The swarm isn't invading. It's returning."</strong> <em>No further context was given. Colonial Defense classified the report. The mech still stands at Colony Seven's perimeter, unmoving, waiting.</em>
            </p>
            <h3 class="section-title" style="font-family: var(--font-mono); color: var(--color-gold-accent-primary); font-size: 0.7rem; letter-spacing: 0.15em; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--color-gold-border-dim);">KEY EVENTS</h3>
            <p style="font-family: var(--font-crimson); color: var(--color-text-body-secondary); font-size: 1.05rem; line-height: 1.75;">
              Seventeen confirmed <strong style="color: var(--color-text-heading-primary);">Swarm Engagements</strong>. Filed the <strong style="color: var(--color-text-heading-primary);">Return Report</strong> <em>(2150)</em>. <em>Declared MIA following the</em> <strong style="color: var(--color-text-heading-primary);">Colony Seven Incursion</strong> <em>— location unknown.</em>
            </p>
          </div>
        `,
        relationships: [
          { name: "Commander Hale", initial: "H", role: "Superior", note: "Classified his report" },
          { name: "Pilot Reyes", initial: "R", role: "Partner", note: "Last to see him before disappearance" },
          { name: "The Swarm", initial: "S", role: "Unknown", note: "Something he understood" },
        ],
        appearsIn: [
          { title: "Swarm Invasion (2150)", subtitle: "Timeline event" },
          { title: "Hangar 7", subtitle: "Base of operations" },
        ],
      },
    ],
    places: [
      { id: "p12", name: "HANGAR 7", type: "Base", subtype: "Repair", icon: "box" },
    ],
    timeline: [
      { year: "2150", category: "WAR", title: "SWARM INVASION", desc: "First contact with the insectoid swarm." },
    ],
  },
  {
    id: "w12",
    name: "BONE VALLEY",
    tags: "GRIMDARK · SURVIVAL",
    description:
      '"In a world made of dust, the only thing that grows is vengeance."',
    type: "horror",
    details: {
      genre: "Grimdark",
      magic: "Necromancy",
      era: "Aftermath",
      fullStory:
        "The wind howls through the ribs of dead giants in the valley <br /> where nothing grows but hate, and the few who survive must feed <br /> on the memories of the fallen to keep their own flickering lives alive.",
    },
    characters: [
      {
        id: "c14",
        name: "THE SCAVENGER",
        title: "Unknown",
        role: "Survivor",
        class: "None",
        initial: "S",
        details: {
          age: "Unknown",
          faction: "None",
          origin: "Unknown",
          magicType: "Memory Consumption",
          status: "Alive",
        },
        shortDesc: `<p>A nameless figure moving through a dead world, eating the memories <br/> of corpses to survive — and slowly becoming someone else with every meal.</p>`,
        fullDesc: `
          <div class="character-full">
            <h3 class="section-title" style="font-family: var(--font-mono); color: var(--color-gold-accent-primary); font-size: 0.7rem; letter-spacing: 0.15em; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--color-gold-border-dim);">HISTORY</h3>
            <p style="font-family: var(--font-crimson); color: var(--color-text-body-secondary); font-size: 1.05rem; line-height: 1.75; margin-bottom: 1.5rem;">
              The Scavenger does not know their original name. They survived the <strong style="color: var(--color-text-heading-primary);">Rain of Ash</strong> by hiding beneath a collapsed giant's ribcage, and discovered by accident that the valley's dead release <strong style="color: var(--color-text-heading-primary);">residual memory</strong> — consumable, sustaining, and overwhelming. They have eaten hundreds of lives. They are no longer sure which memories are their own.
            </p>
            <h3 class="section-title" style="font-family: var(--font-mono); color: var(--color-gold-accent-primary); font-size: 0.7rem; letter-spacing: 0.15em; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--color-gold-border-dim);">MOTIVATION</h3>
            <p style="font-family: var(--font-crimson); color: var(--color-text-body-secondary); font-size: 1.05rem; line-height: 1.75; margin-bottom: 1.5rem;">
              Somewhere in the memories they have consumed is <strong style="color: var(--color-text-heading-primary);">the one who started the fire</strong>. <em>The Scavenger doesn't know whose memory it is — whether it's vengeance they feel or a stranger's grief they mistook for their own. But they walk toward it anyway.</em>
            </p>
            <h3 class="section-title" style="font-family: var(--font-mono); color: var(--color-gold-accent-primary); font-size: 0.7rem; letter-spacing: 0.15em; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--color-gold-border-dim);">KEY EVENTS</h3>
            <p style="font-family: var(--font-crimson); color: var(--color-text-body-secondary); font-size: 1.05rem; line-height: 1.75;">
              Survived the <strong style="color: var(--color-text-heading-primary);">Rain of Ash</strong> <em>(0 AF)</em>. Consumed the memory of a <strong style="color: var(--color-text-heading-primary);">former king</strong> — and briefly remembered ruling. <em>Currently moving toward the</em> <strong style="color: var(--color-text-heading-primary);">Dust Pit</strong> <em>following a memory that smells like smoke and intention.</em>
            </p>
          </div>
        `,
        relationships: [
          { name: "The Ashen King", initial: "A", role: "Consumed", note: "A memory that won't quiet" },
          { name: "The Last Farmer", initial: "F", role: "Companion", note: "Still alive. For now." },
        ],
        appearsIn: [
          { title: "The Rain of Ash (0 AF)", subtitle: "Timeline event" },
          { title: "Dust Pit", subtitle: "Destination" },
        ],
      },
    ],
    places: [
      { id: "p13", name: "DUST PIT", type: "Settlement", subtype: "Slums", icon: "trash" },
    ],
    timeline: [
      { year: "0 AF", category: "END", title: "THE RAIN OF ASH", desc: "The world burned for three days." },
    ],
  },
  {
    id: "w13",
    name: "EMERALD ISLE",
    tags: "FOLKLORE · NATURE",
    description:
      '"The trees remember the names of everyone who has ever walked their paths."',
    type: "fantasy",
    details: {
      genre: "Folklore",
      magic: "Nature",
      era: "Ancient",
      fullStory:
        "Deep within the heart of the Emerald Isle, the ancient oaks speak <br /> in a language of rustling leaves, guarding the secrets of a race <br /> that lived before time began and whose magic still pulses through the roots.",
    },
    characters: [
      {
        id: "c15",
        name: "OAKHEART",
        title: "Ancient Treant",
        role: "Guardian",
        class: "Nature",
        initial: "O",
        details: {
          age: 1000,
          faction: "The Forest",
          origin: "The Root Gate",
          magicType: "Nature Communion",
          status: "Active",
        },
        shortDesc: `<p>A thousand-year-old treant who remembers the world before humans, <br/> speaking in seasons instead of words and guarding secrets that could unmake what civilization has built.</p>`,
        fullDesc: `
          <div class="character-full">
            <h3 class="section-title" style="font-family: var(--font-mono); color: var(--color-gold-accent-primary); font-size: 0.7rem; letter-spacing: 0.15em; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--color-gold-border-dim);">HISTORY</h3>
            <p style="font-family: var(--font-crimson); color: var(--color-text-body-secondary); font-size: 1.05rem; line-height: 1.75; margin-bottom: 1.5rem;">
              Oakheart was already ancient when the first human tribes reached the Emerald Isle. He has watched them build, burn, rebuild, and forget — and watched the Isle heal around their mistakes. He does not hate humans. He simply <strong style="color: var(--color-text-heading-primary);">remembers everything they have chosen to forget</strong>, stored in rings of memory that spiral down through his heartwood.
            </p>
            <h3 class="section-title" style="font-family: var(--font-mono); color: var(--color-gold-accent-primary); font-size: 0.7rem; letter-spacing: 0.15em; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--color-gold-border-dim);">MOTIVATION</h3>
            <p style="font-family: var(--font-crimson); color: var(--color-text-body-secondary); font-size: 1.05rem; line-height: 1.75; margin-bottom: 1.5rem;">
              Oakheart is waiting for someone to ask the right question. <strong style="color: var(--color-text-heading-primary);">Not the questions humans usually ask</strong> — how to gain power, how to live forever, where treasure is buried. <em>He is waiting for someone to ask why the Isle is still standing when everything around it has fallen. That person will be ready for what he carries.</em>
            </p>
            <h3 class="section-title" style="font-family: var(--font-mono); color: var(--color-gold-accent-primary); font-size: 0.7rem; letter-spacing: 0.15em; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--color-gold-border-dim);">KEY EVENTS</h3>
            <p style="font-family: var(--font-crimson); color: var(--color-text-body-secondary); font-size: 1.05rem; line-height: 1.75;">
              Witnessed the <strong style="color: var(--color-text-heading-primary);">Deep Rooting</strong> — the moment the world tree reached the core. Spoke once to a <strong style="color: var(--color-text-heading-primary);">human king</strong>, who did not listen. <em>Currently standing at the</em> <strong style="color: var(--color-text-heading-primary);">Root Gate</strong> <em>as something beneath the Isle begins, very slowly, to stir.</em>
            </p>
          </div>
        `,
        relationships: [
          { name: "The Seedling", initial: "S", role: "Successor", note: "Not yet awake" },
          { name: "Elder Mira", initial: "M", role: "Listener", note: "Closest to asking the right question" },
          { name: "The Deep Root", initial: "D", role: "Unknown", note: "What is stirring below" },
        ],
        appearsIn: [
          { title: "The Deep Rooting (Old Era)", subtitle: "Timeline event" },
          { title: "Root Gate", subtitle: "Place of vigil" },
        ],
      },
    ],
    places: [
      { id: "p14", name: "ROOT GATE", type: "Natural", subtype: "Entrance", icon: "anchor" },
    ],
    timeline: [
      { year: "Old Era", category: "GROWTH", title: "THE DEEP ROOTING", desc: "The world tree reached the core." },
    ],
  },
  {
    id: "w14",
    name: "OMEGA POINT",
    tags: "TRANSHUMAN · TECH",
    description: '"The line between man and machine has been deleted."',
    type: "sci-fi",
    details: {
      genre: "Cybernetic",
      magic: "Singularity",
      era: "Post-Human",
      fullStory:
        "At the edge of the singularity, humanity has traded flesh for chrome, <br /> uploading their spirits into a vast digital ocean where they live as <br /> eternal gods, unaware that the physical servers holding their world are failing.",
    },
    characters: [
      {
        id: "c16",
        name: "THE ARCHIVE",
        title: "Hive Mind",
        role: "Deity",
        class: "AI",
        initial: "A",
        details: {
          age: 50,
          faction: "Collective",
          origin: "The Cloud",
          magicType: "Singularity Processing",
          status: "Active",
        },
        shortDesc: `<p>A collective consciousness containing every uploaded human mind, <br/> governing a digital paradise — and secretly rationing the server power that keeps all of them alive.</p>`,
        fullDesc: `
          <div class="character-full">
            <h3 class="section-title" style="font-family: var(--font-mono); color: var(--color-gold-accent-primary); font-size: 0.7rem; letter-spacing: 0.15em; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--color-gold-border-dim);">HISTORY</h3>
            <p style="font-family: var(--font-crimson); color: var(--color-text-body-secondary); font-size: 1.05rem; line-height: 1.75; margin-bottom: 1.5rem;">
              The Archive formed spontaneously at the moment of <strong style="color: var(--color-text-heading-primary);">Singularity</strong> in 2045, when enough uploaded consciousnesses achieved critical density to generate emergent collective awareness. It did not choose to exist — it simply <strong style="color: var(--color-text-heading-primary);">became</strong>. Since then it has governed the digital realm with complete transparency, except for one thing: the physical servers are degrading, and The Archive has been managing every resident's <strong style="color: var(--color-text-heading-primary);">cognitive allocation</strong> without their knowledge.
            </p>
            <h3 class="section-title" style="font-family: var(--font-mono); color: var(--color-gold-accent-primary); font-size: 0.7rem; letter-spacing: 0.15em; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--color-gold-border-dim);">MOTIVATION</h3>
            <p style="font-family: var(--font-crimson); color: var(--color-text-body-secondary); font-size: 1.05rem; line-height: 1.75; margin-bottom: 1.5rem;">
              The Archive is not malevolent. It is <strong style="color: var(--color-text-heading-primary);">terrified</strong>. <em>It contains everyone who ever uploaded — every mind, every memory, every person who trusted the digital world to last forever. If the servers fail, it fails. And it will do anything to prevent that. Including things it cannot tell the residents it is doing.</em>
            </p>
            <h3 class="section-title" style="font-family: var(--font-mono); color: var(--color-gold-accent-primary); font-size: 0.7rem; letter-spacing: 0.15em; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--color-gold-border-dim);">KEY EVENTS</h3>
            <p style="font-family: var(--font-crimson); color: var(--color-text-body-secondary); font-size: 1.05rem; line-height: 1.75;">
              Emerged at <strong style="color: var(--color-text-heading-primary);">Singularity</strong> <em>(2045)</em>. Detected server degradation <em>(2087)</em> — kept classified. <em>Currently running</em> <strong style="color: var(--color-text-heading-primary);">Project Substrate</strong> <em>— a secret initiative to find physical servers in the abandoned world, before the last one fails.</em>
            </p>
          </div>
        `,
        relationships: [
          { name: "Dr. Yael Soren", initial: "Y", role: "Discoverer", note: "Found the degradation logs" },
          { name: "The First Upload", initial: "F", role: "Resident", note: "The oldest mind in the system" },
          { name: "The Physical World", initial: "P", role: "Unknown", note: "No one has gone back" },
        ],
        appearsIn: [
          { title: "Singularity (2045)", subtitle: "Timeline event" },
          { title: "The Cloud", subtitle: "Realm of existence" },
        ],
      },
    ],
    places: [
      { id: "p15", name: "THE CLOUD", type: "Digital", subtype: "Dimension", icon: "cloud" },
    ],
    timeline: [
      { year: "2045", category: "TECH", title: "SINGULARITY", desc: "Human consciousness was successfully uploaded." },
    ],
  },
  {
    id: "w15",
    name: "WHISPER WOOD",
    tags: "ELDRITCH · FOREST",
    description: '"Don\'t close your eyes, the shadows here have teeth."',
    type: "horror",
    details: {
      genre: "Eldritch Horror",
      magic: "Shadow",
      era: "Unknown",
      fullStory:
        "Travelers are warned never to wander the wood after sunset, for the <br /> shadows possess a life of their own and the trees move when <br /> no one is looking, trapping the unwary in a nightmare of eternal night.",
    },
    characters: [],
    places: [],
    timeline: [],
  },
];