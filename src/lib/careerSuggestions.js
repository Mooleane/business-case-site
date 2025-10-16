const careerSuggestions = [
  {
    id: 1,
    title: "UX Designer",
    category: "Technology & Digital",
    description: "Strong empathy, communication, and critical thinking are essential for understanding user needs and collaborating with cross-functional teams. They use wireframing, prototyping, and user research tools like Figma, Sketch, and usability testing platforms to design seamless user experiences.",
    softSkills: ["empathy", "communication", "critical thinking"],
    hardSkills: ["wireframing", "prototyping", "user research", "Figma", "Sketch"],
    resources: [
      { name: "Nielsen Norman Group", url: "https://www.nngroup.com" },
      { name: "Interaction Design Foundation", url: "https://www.interaction-design.org" }
    ]
  },
  {
    id: 2,
    title: "Frontend Developer",
    category: "Technology & Digital",
    description: "They rely on problem-solving, adaptability, and collaboration to build engaging interfaces. Core technical skills include HTML, CSS, JavaScript, and frameworks like React or Vue, plus responsive design techniques.",
    softSkills: ["problem solving", "adaptability", "collaboration"],
    hardSkills: ["HTML", "CSS", "JavaScript", "React", "Vue", "responsive design"],
    resources: [
      { name: "MDN Web Docs", url: "https://developer.mozilla.org" },
      { name: "freeCodeCamp", url: "https://www.freecodecamp.org" }
    ]
  },
  {
    id: 3,
    title: "Data Analyst",
    category: "Technology & Digital",
    description: "Curiosity, attention to detail, and logical thinking help them discover insights from data. They work with Excel, SQL, Python, and visualization tools such as Tableau or Power BI to analyze and communicate findings.",
    softSkills: ["curiosity", "attention to detail", "logical thinking"],
    hardSkills: ["Excel", "SQL", "Python", "Tableau", "Power BI"],
    resources: [
      { name: "Kaggle", url: "https://www.kaggle.com" },
      { name: "DataCamp", url: "https://www.datacamp.com" }
    ]
  },
  {
    id: 4,
    title: "Software Engineer",
    category: "Technology & Digital",
    description: "Patience, structured problem-solving, and teamwork are key to shipping reliable software. They specialize in programming languages like Python, Java, or C++, software architecture, algorithms, and version control systems such as Git.",
    softSkills: ["patience", "structured problem solving", "teamwork"],
    hardSkills: ["Python", "Java", "C++", "algorithms", "software architecture", "Git"],
    resources: [
      { name: "GitHub", url: "https://github.com" },
      { name: "Stack Overflow", url: "https://stackoverflow.com" }
    ]
  },
  {
    id: 5,
    title: "Cybersecurity Specialist",
    category: "Technology & Digital",
    description: "They need strong ethical reasoning, strategic thinking, and quick decision-making to protect digital environments. Technical expertise involves network security, penetration testing, firewalls, encryption, and threat analysis.",
    softSkills: ["ethical reasoning", "strategic thinking", "quick decision making"],
    hardSkills: ["network security", "penetration testing", "firewalls", "encryption", "threat analysis"],
    resources: [
      { name: "SANS Institute", url: "https://www.sans.org" },
      { name: "OWASP", url: "https://owasp.org" }
    ]
  },
  {
    id: 6,
    title: "Game Developer",
    category: "Technology & Digital",
    description: "Creativity, storytelling, and iterative problem-solving drive their work. They use game engines like Unity or Unreal Engine, programming languages such as C# or C++, and tools for physics and asset integration.",
    softSkills: ["creativity", "storytelling", "iterative problem solving"],
    hardSkills: ["Unity", "Unreal Engine", "C#", "C++", "game physics", "asset integration"],
    resources: [
      { name: "Unity", url: "https://unity.com" },
      { name: "Unreal Engine", url: "https://www.unrealengine.com" }
    ]
  },
  {
    id: 7,
    title: "AI Prompt Engineer",
    category: "Technology & Digital",
    description: "They excel at language clarity, creative problem-solving, and analytical thinking. Their work includes writing structured prompts, understanding LLM behaviors, and integrating models via APIs, sometimes with light scripting in Python.",
    softSkills: ["language clarity", "creative problem solving", "analytical thinking"],
    hardSkills: ["prompt design", "LLM behavior", "API integration", "Python scripting"],
    resources: [
      { name: "OpenAI Docs", url: "https://platform.openai.com/docs" },
      { name: "Hugging Face", url: "https://huggingface.co" }
    ]
  },
  {
    id: 8,
    title: "IT Support Technician",
    category: "Technology & Digital",
    description: "Patience, clear communication, and customer service are essential to assist users effectively. Their technical skill set includes troubleshooting hardware and software, basic networking, and system configuration.",
    softSkills: ["patience", "clear communication", "customer service"],
    hardSkills: ["hardware troubleshooting", "software troubleshooting", "basic networking", "system configuration"],
    resources: [
      { name: "CompTIA", url: "https://www.comptia.org" },
      { name: "Microsoft Learn", url: "https://learn.microsoft.com" }
    ]
  },
  {
    id: 9,
    title: "Product Manager",
    category: "Technology & Digital",
    description: "Strong leadership, empathy, and organizational skills are needed to align teams around a shared vision. They use roadmapping, data analysis, and market research to define features and oversee development cycles.",
    softSkills: ["leadership", "empathy", "organization"],
    hardSkills: ["roadmapping", "data analysis", "market research", "product lifecycle"],
    resources: [
      { name: "Product School", url: "https://www.productschool.com" },
      { name: "Mind the Product", url: "https://www.mindtheproduct.com" }
    ]
  },
  {
    id: 10,
    title: "Web Designer",
    category: "Technology & Digital",
    description: "A blend of visual creativity, user empathy, and adaptability drives their soft skill set. On the technical side, they work with HTML, CSS, design tools like Figma, responsive layouts, and accessibility principles.",
    softSkills: ["visual creativity", "user empathy", "adaptability"],
    hardSkills: ["HTML", "CSS", "Figma", "responsive design", "accessibility"],
    resources: [
      { name: "CSS-Tricks", url: "https://css-tricks.com" },
      { name: "WebAIM", url: "https://webaim.org" }
    ]
  },
  {
    id: 11,
    title: "Graphic Designer",
    category: "Creative & Design",
    description: "They depend on creativity, visual communication, and time management to deliver impactful designs. Core hard skills include typography, layout composition, and design tools such as Adobe Illustrator and Photoshop.",
    softSkills: ["creativity", "visual communication", "time management"],
    hardSkills: ["typography", "layout", "Illustrator", "Photoshop"],
    resources: [
      { name: "Adobe Learn", url: "https://www.adobe.com/creativecloud.html" },
      { name: "Behance", url: "https://www.behance.net" }
    ]
  },
  {
    id: 12,
    title: "Interior Designer",
    category: "Creative & Design",
    description: "Empathy, spatial awareness, and communication skills help them understand clients’ needs and tastes. They apply CAD software, color theory, lighting design, and material selection to create functional spaces.",
    softSkills: ["empathy", "spatial awareness", "communication"],
    hardSkills: ["CAD", "color theory", "lighting design", "material selection"],
    resources: [
      { name: "American Society of Interior Designers", url: "https://www.asid.org" },
      { name: "Houzz", url: "https://www.houzz.com" }
    ]
  },
  {
    id: 13,
    title: "Fashion Stylist",
    category: "Creative & Design",
    description: "They rely on trend awareness, confidence, and personal branding skills to guide client choices. Their technical skills include fashion theory, wardrobe curation, and textile knowledge to create cohesive looks.",
    softSkills: ["trend awareness", "confidence", "personal branding"],
    hardSkills: ["fashion theory", "wardrobe curation", "textile knowledge"],
    resources: [
      { name: "The Business of Fashion", url: "https://www.businessoffashion.com" },
      { name: "Fashionista", url: "https://fashionista.com" }
    ]
  },
  {
    id: 14,
    title: "Illustrator",
    category: "Creative & Design",
    description: "Patience, imagination, and storytelling are key soft skills for their creative output. Their technical work involves drawing techniques, digital illustration tools such as Procreate or Adobe Illustrator, and color blending methods.",
    softSkills: ["patience", "imagination", "storytelling"],
    hardSkills: ["drawing", "Procreate", "Illustrator", "color theory"],
    resources: [
      { name: "Procreate", url: "https://procreate.art" },
      { name: "Society of Illustrators", url: "https://www.societyillustrators.org" }
    ]
  },
  {
    id: 15,
    title: "Photographer",
    category: "Creative & Design",
    description: "They lean on observational skills, timing, and interpersonal communication to capture meaningful images. Their hard skills include using DSLR or mirrorless cameras, lighting setups, editing with Lightroom, and strong composition.",
    softSkills: ["observation", "timing", "interpersonal communication"],
    hardSkills: ["camera operation", "lighting", "Lightroom", "composition"],
    resources: [
      { name: "PetaPixel", url: "https://petapixel.com" },
      { name: "Digital Photography School", url: "https://digital-photography-school.com" }
    ]
  },
  {
    id: 16,
    title: "Videographer",
    category: "Creative & Design",
    description: "They bring collaboration, storytelling sense, and timing into their work. They handle camera equipment, lighting, sound design, and editing software such as Premiere Pro or DaVinci Resolve.",
    softSkills: ["collaboration", "storytelling", "timing"],
    hardSkills: ["camera operation", "lighting", "sound design", "Premiere Pro", "DaVinci Resolve"],
    resources: [
      { name: "No Film School", url: "https://nofilmschool.com" },
      { name: "Videomaker", url: "https://www.videomaker.com" }
    ]
  },
  {
    id: 17,
    title: "3D Modeler",
    category: "Creative & Design",
    description: "Patience, spatial reasoning, and iterative creativity drive their process. They use software like Blender, Maya, or ZBrush to sculpt, texture, and render 3D assets for games, film, or products.",
    softSkills: ["patience", "spatial reasoning", "iterative creativity"],
    hardSkills: ["Blender", "Maya", "ZBrush", "texturing", "rendering"],
    resources: [
      { name: "Blender.org", url: "https://www.blender.org" },
      { name: "Sketchfab", url: "https://sketchfab.com" }
    ]
  },
  {
    id: 18,
    title: "Concept Artist",
    category: "Creative & Design",
    description: "Imagination, visual storytelling, and adaptability are core soft skills. They master digital painting techniques, anatomy, perspective, and tools such as Photoshop or Krita to visualize ideas.",
    softSkills: ["imagination", "visual storytelling", "adaptability"],
    hardSkills: ["digital painting", "anatomy", "perspective", "Photoshop", "Krita"],
    resources: [
      { name: "ArtStation", url: "https://www.artstation.com" },
      { name: "Ctrl+Paint", url: "https://ctrlpaint.com" }
    ]
  },
  {
    id: 19,
    title: "Creative Director",
    category: "Creative & Design",
    description: "They rely on leadership, vision, and persuasive communication to guide teams toward cohesive creative goals. Their technical work involves art direction, design strategy, and familiarity with design suites and storytelling frameworks.",
    softSkills: ["leadership", "vision", "persuasive communication"],
    hardSkills: ["art direction", "design strategy", "design suites", "storytelling frameworks"],
    resources: [
      { name: "AIGA", url: "https://www.aiga.org" },
      { name: "Creative Bloq", url: "https://www.creativebloq.com" }
    ]
  },
  {
    id: 20,
    title: "Animator",
    category: "Creative & Design",
    description: "Timing, storytelling, and patience are crucial for bringing visuals to life. Their hard skills include frame-by-frame animation, rigging, motion graphics, and tools like After Effects or Toon Boom.",
    softSkills: ["timing", "storytelling", "patience"],
    hardSkills: ["frame-by-frame animation", "rigging", "motion graphics", "After Effects", "Toon Boom"],
    resources: [
      { name: "Animation Mentor", url: "https://www.animationmentor.com" },
      { name: "Toon Boom Learn", url: "https://learn.toonboom.com" }
    ]
  },
  {
    id: 21,
    title: "Copywriter",
    category: "Writing, Media & Communication",
    description: "They lean on empathy, language clarity, and persuasion to connect with audiences. Their craft includes SEO writing, marketing language structures, and content strategy.",
    softSkills: ["empathy", "language clarity", "persuasion"],
    hardSkills: ["SEO writing", "marketing copy", "content strategy"],
    resources: [
      { name: "Copyblogger", url: "https://copyblogger.com" },
      { name: "HubSpot Blog", url: "https://blog.hubspot.com" }
    ]
  },
  {
    id: 22,
    title: "Journalist",
    category: "Writing, Media & Communication",
    description: "Curiosity, integrity, and clear communication shape their soft skills. Their technical abilities include investigative research, fact-checking, interviewing, and multimedia reporting.",
    softSkills: ["curiosity", "integrity", "clear communication"],
    hardSkills: ["investigative research", "fact checking", "interviewing", "multimedia reporting"],
    resources: [
      { name: "Poynter", url: "https://www.poynter.org" },
      { name: "Investigative Reporters & Editors", url: "https://www.ire.org" }
    ]
  },
  {
    id: 23,
    title: "Scriptwriter",
    category: "Writing, Media & Communication",
    description: "They rely on creativity, structure, and emotional intelligence to craft compelling narratives. They use screenplay formatting, storyboarding, and tools like Final Draft to develop scripts.",
    softSkills: ["creativity", "structure", "emotional intelligence"],
    hardSkills: ["screenplay formatting", "storyboarding", "Final Draft"],
    resources: [
      { name: "Final Draft", url: "https://www.finaldraft.com" },
      { name: "The Black List", url: "https://blcklst.com" }
    ]
  },
  {
    id: 24,
    title: "Content Creator",
    category: "Writing, Media & Communication",
    description: "Adaptability, audience awareness, and personal branding are essential to connect with followers. Their technical work often includes shooting, editing, analytics, and platform optimization.",
    softSkills: ["adaptability", "audience awareness", "personal branding"],
    hardSkills: ["shooting", "editing", "analytics", "platform optimization"],
    resources: [
      { name: "YouTube Creator Academy", url: "https://creatoracademy.youtube.com" },
      { name: "Buffer Resources", url: "https://buffer.com/resources" }
    ]
  },
  {
    id: 25,
    title: "Social Media Manager",
    category: "Writing, Media & Communication",
    description: "Strategic thinking, trend awareness, and relationship-building form their soft skills. On the technical side, they use scheduling tools, analytics dashboards, and engagement strategy techniques.",
    softSkills: ["strategic thinking", "trend awareness", "relationship building"],
    hardSkills: ["scheduling tools", "analytics", "engagement strategy"],
    resources: [
      { name: "Hootsuite", url: "https://hootsuite.com" },
      { name: "Sprout Social", url: "https://sproutsocial.com" }
    ]
  },
  {
    id: 26,
    title: "Podcaster",
    category: "Writing, Media & Communication",
    description: "They rely on storytelling, conversational skills, and audience engagement to hold listeners’ attention. Their technical skills include audio recording, editing with tools like Audacity or Adobe Audition, and basic sound engineering.",
    softSkills: ["storytelling", "conversational skills", "audience engagement"],
    hardSkills: ["audio recording", "Audacity", "Adobe Audition", "sound engineering"],
    resources: [
      { name: "Podcast Insights", url: "https://www.podcastinsights.com" },
      { name: "Libsyn", url: "https://libsyn.com" }
    ]
  },
  {
    id: 27,
    title: "Editor (Video or Text)",
    category: "Writing, Media & Communication",
    description: "Patience, attention to detail, and a strong sense of narrative or language are essential. Their work involves editing software such as Premiere Pro or text tools, narrative pacing, fact-checking, and quality control.",
    softSkills: ["patience", "attention to detail", "narrative sense"],
    hardSkills: ["video editing", "text editing", "pacing", "fact checking"],
    resources: [
      { name: "Editorial Freelancers Association", url: "https://www.the-efa.org" },
      { name: "The Chicago Manual of Style", url: "https://www.chicagomanualofstyle.org" }
    ]
  },
  {
    id: 28,
    title: "Public Relations Specialist",
    category: "Writing, Media & Communication",
    description: "Strong interpersonal communication, diplomacy, and crisis management are critical. They use media outreach strategies, press release writing, and brand positioning to manage public image.",
    softSkills: ["interpersonal communication", "diplomacy", "crisis management"],
    hardSkills: ["media outreach", "press release writing", "brand positioning"],
    resources: [
      { name: "Public Relations Society of America", url: "https://www.prsa.org" },
      { name: "Spin Sucks", url: "https://spinsucks.com" }
    ]
  },
  {
    id: 29,
    title: "Technical Writer",
    category: "Writing, Media & Communication",
    description: "Clarity, structured thinking, and empathy for the reader shape their communication. Their technical skill set involves writing detailed documentation, understanding complex systems, and using publishing or formatting tools.",
    softSkills: ["clarity", "structured thinking", "reader empathy"],
    hardSkills: ["documentation", "complex systems understanding", "publishing tools"],
    resources: [
      { name: "Society for Technical Communication", url: "https://www.stc.org" },
      { name: "Write the Docs", url: "https://www.writethedocs.org" }
    ]
  },
  {
    id: 30,
    title: "Translator",
    category: "Writing, Media & Communication",
    description: "They depend on cultural sensitivity, linguistic precision, and adaptability. Their hard skills include fluency in multiple languages, localization techniques, and sometimes specialized translation software.",
    softSkills: ["cultural sensitivity", "linguistic precision", "adaptability"],
    hardSkills: ["language fluency", "localization", "CAT tools"],
    resources: [
      { name: "ProZ", url: "https://www.proz.com" },
      { name: "American Translators Association", url: "https://www.atanet.org" }
    ]
  },
  {
    id: 31,
    title: "Carpenter",
    category: "Hands-On & Craft-Based",
    description: "Patience, precision, and problem-solving are core soft skills for quality workmanship. Their technical skills include woodworking, blueprint reading, measuring, cutting, and safe use of power tools.",
    softSkills: ["patience", "precision", "problem solving"],
    hardSkills: ["woodworking", "blueprint reading", "measuring", "power tools"],
    resources: [
      { name: "Fine Woodworking", url: "https://www.finewoodworking.com" },
      { name: "Family Handyman", url: "https://www.familyhandyman.com" }
    ]
  },
  {
    id: 32,
    title: "Chef",
    category: "Hands-On & Craft-Based",
    description: "Creativity, stress management, and collaboration are essential in a fast-paced kitchen. They master knife skills, cooking techniques, plating, recipe development, and kitchen operations.",
    softSkills: ["creativity", "stress management", "collaboration"],
    hardSkills: ["knife skills", "cooking techniques", "plating", "recipe development"],
    resources: [
      { name: "American Culinary Federation", url: "https://www.acfchefs.org" },
      { name: "Serious Eats", url: "https://www.seriouseats.com" }
    ]
  },
  {
    id: 33,
    title: "Baker",
    category: "Hands-On & Craft-Based",
    description: "They rely on patience, timing, and consistency to create high-quality baked goods. Their specialized skills include dough preparation, fermentation control, precision in measurements, and decorating techniques.",
    softSkills: ["patience", "timing", "consistency"],
    hardSkills: ["dough preparation", "fermentation", "precision measurements", "decorating"],
    resources: [
      { name: "King Arthur Baking", url: "https://www.kingarthurbaking.com" },
      { name: "The Fresh Loaf", url: "https://www.thefreshloaf.com" }
    ]
  },
  {
    id: 34,
    title: "Mechanic",
    category: "Hands-On & Craft-Based",
    description: "Logical reasoning, troubleshooting, and clear communication help diagnose vehicle issues. Hard skills include engine repair, diagnostic tools, tool use, and working with vehicle electronics and safety protocols.",
    softSkills: ["logical reasoning", "troubleshooting", "communication"],
    hardSkills: ["engine repair", "diagnostic tools", "electrical systems", "tool use"],
    resources: [
      { name: "Haynes Manuals", url: "https://haynes.com" },
      { name: "iATN", url: "https://www.iatn.net" }
    ]
  },
  {
    id: 35,
    title: "Electrician",
    category: "Hands-On & Craft-Based",
    description: "Problem-solving, responsibility, and attention to safety guide their work. They use wiring techniques, read electrical diagrams, perform circuit testing, and follow regulatory compliance.",
    softSkills: ["problem solving", "responsibility", "safety focus"],
    hardSkills: ["wiring", "electrical diagrams", "circuit testing", "code compliance"],
    resources: [
      { name: "NECA", url: "https://www.necanet.org" },
      { name: "NFPA", url: "https://www.nfpa.org" }
    ]
  },
  {
    id: 36,
    title: "Florist",
    category: "Hands-On & Craft-Based",
    description: "Creativity, color sense, and customer service are important for building arrangements people love. They apply floral design principles, trimming and preservation techniques, and event styling skills.",
    softSkills: ["creativity", "color sense", "customer service"],
    hardSkills: ["floral design", "preservation", "event styling"],
    resources: [
      { name: "Society of American Florists", url: "https://safnow.org" },
      { name: "Floret Flowers", url: "https://www.floretflowers.com" }
    ]
  },
  {
    id: 37,
    title: "Tailor",
    category: "Hands-On & Craft-Based",
    description: "Patience, precision, and listening to client preferences shape their work. Technical skills include sewing, fabric cutting, pattern making, and garment fitting.",
    softSkills: ["patience", "precision", "client listening"],
    hardSkills: ["sewing", "pattern making", "fabric cutting", "fitting"],
    resources: [
      { name: "Threads Magazine", url: "https://www.threadsmagazine.com" },
      { name: "Sewing.org", url: "https://www.sewing.org" }
    ]
  },
  {
    id: 38,
    title: "Furniture Maker",
    category: "Hands-On & Craft-Based",
    description: "Craftsmanship, patience, and an eye for detail are essential for producing durable pieces. Their technical expertise includes joinery, finishing, wood selection, and advanced tool handling.",
    softSkills: ["craftsmanship", "patience", "attention to detail"],
    hardSkills: ["joinery", "finishing", "wood selection", "tool handling"],
    resources: [
      { name: "WoodMagazine", url: "https://www.woodmagazine.com" },
      { name: "Woodworking for Mere Mortals", url: "https://woodworkingformeremortals.com" }
    ]
  },
  {
    id: 39,
    title: "Pottery Artist",
    category: "Hands-On & Craft-Based",
    description: "They rely on creative expression, patience, and steady hands. Their hard skills include wheel throwing, hand-building, glazing, and kiln firing.",
    softSkills: ["creative expression", "patience", "steady hands"],
    hardSkills: ["wheel throwing", "hand building", "glazing", "kiln firing"],
    resources: [
      { name: "Ceramic Arts Network", url: "https://ceramicartsnetwork.org" },
      { name: "The Spruce Crafts - Pottery", url: "https://www.thesprucecrafts.com/pottery-4127766" }
    ]
  },
  {
    id: 40,
    title: "Blacksmith",
    category: "Hands-On & Craft-Based",
    description: "Focus, persistence, and physical discipline are core traits for the craft. Their work involves forging, metal shaping, heat treatment, and skilled use of an anvil and hammer.",
    softSkills: ["focus", "persistence", "physical discipline"],
    hardSkills: ["forging", "metal shaping", "heat treatment", "anvil work"],
    resources: [
      { name: "Anvilfire", url: "https://www.anvilfire.com" },
      { name: "ABANA", url: "https://www.abana.org" }
    ]
  },
  {
    id: 41,
    title: "Teacher",
    category: "Education & Community",
    description: "They use empathy, communication, and adaptability to guide learners of different needs. Their technical skills include lesson planning, curriculum design, classroom management, and subject mastery.",
    softSkills: ["empathy", "communication", "adaptability"],
    hardSkills: ["lesson planning", "curriculum design", "classroom management", "subject expertise"],
    resources: [
      { name: "Edutopia", url: "https://www.edutopia.org" },
      { name: "Teach.org", url: "https://www.teach.org" }
    ]
  },
  {
    id: 42,
    title: "Academic Researcher",
    category: "Education & Community",
    description: "Curiosity, analytical thinking, and resilience are key soft skills behind successful research. Their technical abilities cover research methodologies, data collection, statistical analysis, and academic writing.",
    softSkills: ["curiosity", "analytical thinking", "resilience"],
    hardSkills: ["research methods", "data collection", "statistics", "academic writing"],
    resources: [
      { name: "Google Scholar", url: "https://scholar.google.com" },
      { name: "ResearchGate", url: "https://www.researchgate.net" }
    ]
  },
  {
    id: 43,
    title: "Career Coach",
    category: "Education & Community",
    description: "Active listening, empathy, and motivational skills help individuals shape their paths. Their technical skill set includes goal mapping, resume and interview strategy, and knowledge of career frameworks.",
    softSkills: ["active listening", "empathy", "motivation"],
    hardSkills: ["goal mapping", "resume strategy", "interview prep", "career frameworks"],
    resources: [
      { name: "The Muse", url: "https://www.themuse.com" },
      { name: "CareerOneStop", url: "https://www.careeronestop.org" }
    ]
  },
  {
    id: 44,
    title: "Librarian",
    category: "Education & Community",
    description: "They rely on organization, information literacy, and patience to help users find resources. Hard skills include cataloging systems, research databases, and digital archiving techniques.",
    softSkills: ["organization", "information literacy", "patience"],
    hardSkills: ["cataloging", "research databases", "digital archiving"],
    resources: [
      { name: "American Library Association", url: "https://www.ala.org" },
      { name: "Library of Congress", url: "https://www.loc.gov" }
    ]
  },
  {
    id: 45,
    title: "Museum Curator",
    category: "Education & Community",
    description: "They use storytelling, cultural sensitivity, and organization to preserve and present history. Their technical expertise includes collection management, preservation methods, and exhibition design.",
    softSkills: ["storytelling", "cultural sensitivity", "organization"],
    hardSkills: ["collection management", "preservation", "exhibition design"],
    resources: [
      { name: "American Alliance of Museums", url: "https://www.aam-us.org" },
      { name: "Smithsonian Institution", url: "https://www.si.edu" }
    ]
  },
  {
    id: 46,
    title: "Physical Therapist",
    category: "Health, Wellness & Sports",
    description: "Empathy, patience, and clear communication are essential to support patient recovery. Their technical skills include anatomy knowledge, rehabilitation exercises, and injury treatment planning.",
    softSkills: ["empathy", "patience", "communication"],
    hardSkills: ["anatomy", "rehabilitation", "treatment planning"],
    resources: [
      { name: "American Physical Therapy Association", url: "https://www.apta.org" },
      { name: "Physiopedia", url: "https://www.physiopedia.com" }
    ]
  },
  {
    id: 47,
    title: "Nutritionist",
    category: "Health, Wellness & Sports",
    description: "They use listening, motivational skills, and critical thinking to guide health goals. Their technical expertise involves dietary science, meal planning, and health assessments.",
    softSkills: ["listening", "motivation", "critical thinking"],
    hardSkills: ["dietary science", "meal planning", "health assessments"],
    resources: [
      { name: "Academy of Nutrition and Dietetics", url: "https://www.eatright.org" },
      { name: "Nutrition.gov", url: "https://www.nutrition.gov" }
    ]
  },
  {
    id: 48,
    title: "Personal Trainer",
    category: "Health, Wellness & Sports",
    description: "Motivation, empathy, and communication are key for supporting clients toward fitness goals. They bring expertise in exercise programming, biomechanics, strength training, and fitness assessments.",
    softSkills: ["motivation", "empathy", "communication"],
    hardSkills: ["exercise programming", "biomechanics", "strength training", "fitness testing"],
    resources: [
      { name: "NASM", url: "https://www.nasm.org" },
      { name: "ACE Fitness", url: "https://www.acefitness.org" }
    ]
  },
  {
    id: 49,
    title: "Yoga Instructor",
    category: "Health, Wellness & Sports",
    description: "Calmness, presence, and interpersonal skills help build trust with students. Their technical knowledge includes anatomy, alignment techniques, breathwork, and yoga philosophy.",
    softSkills: ["calmness", "presence", "interpersonal skills"],
    hardSkills: ["anatomy", "alignment", "breathwork", "yoga philosophy"],
    resources: [
      { name: "Yoga Alliance", url: "https://www.yogaalliance.org" },
      { name: "DoYogaWithMe", url: "https://www.doyogawithme.com" }
    ]
  },
  {
    id: 50,
    title: "Outdoor Guide / Wilderness Instructor",
    category: "Health, Wellness & Sports",
    description: "Leadership, risk awareness, and clear communication are critical in unpredictable environments. Their technical skills include navigation, survival techniques, first aid, and outdoor safety protocols.",
    softSkills: ["leadership", "risk awareness", "communication"],
    hardSkills: ["navigation", "survival skills", "first aid", "safety protocols"],
    resources: [
      { name: "NOLS", url: "https://www.nols.edu" },
      { name: "Leave No Trace", url: "https://lnt.org" }
    ]
  }
];

export default careerSuggestions