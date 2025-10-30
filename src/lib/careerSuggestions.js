const careerSuggestions = [
  {
    "id": 1,
    "title": "UX Designer",
    "category": "Technology & Digital",
    "description": "Strong empathy, communication, and critical thinking are essential for understanding user needs and collaborating with cross-functional teams. They use wireframing, prototyping, and user research tools like Figma, Sketch, and usability testing platforms to design seamless user experiences.",
    "softSkills": ["empathy", "communication", "critical thinking"],
    "hardSkills": ["wireframing", "prototyping", "user research", "Figma", "Sketch"],
    "resources": [
      {
        "name": "Nielsen Norman Group",
        "url": "https://www.nngroup.com"
      },
      {
        "name": "Interaction Design Foundation",
        "url": "https://www.interaction-design.org"
      },
      {
        "name": "Smashing Magazine (UX Section)",
        "url": "https://www.smashingmagazine.com/category/ux-design/"
      },
      {
        "name": "UX Collective",
        "url": "https://uxdesign.cc/"
      }
    ]
  },
  {
    "id": 2,
    "title": "Frontend Developer",
    "category": "Technology & Digital",
    "description": "They rely on problem-solving, adaptability, and collaboration to build engaging interfaces. Core technical skills include HTML, CSS, JavaScript, and frameworks like React or Vue, plus responsive design techniques.",
    "softSkills": ["problem solving", "adaptability", "collaboration"],
    "hardSkills": ["HTML", "CSS", "JavaScript", "React", "Vue", "responsive design"],
    "resources": [
      {
        "name": "MDN Web Docs",
        "url": "https://developer.mozilla.org"
      },
      {
        "name": "freeCodeCamp",
        "url": "https://www.freecodecamp.org"
      },
      {
        "name": "Frontend Mentor",
        "url": "https://www.frontendmentor.io/"
      },
      {
        "name": "CSS-Tricks",
        "url": "https://css-tricks.com"
      }
    ]
  },
  {
    "id": 3,
    "title": "Data Analyst",
    "category": "Technology & Digital",
    "description": "Curiosity, attention to detail, and logical thinking help them discover insights from data. They work with Excel, SQL, Python, and visualization tools such as Tableau or Power BI to analyze and communicate findings.",
    "softSkills": ["curiosity", "attention to detail", "logical thinking"],
    "hardSkills": ["Excel", "SQL", "Python", "Tableau", "Power BI"],
    "resources": [
      {
        "name": "Kaggle",
        "url": "https://www.kaggle.com"
      },
      {
        "name": "DataCamp",
        "url": "https://www.datacamp.com"
      },
      {
        "name": "Coursera (Data Analytics Courses)",
        "url": "https://www.coursera.org/"
      },
      {
        "name": "Project Jupyter",
        "url": "https://jupyter.org/"
      }
    ]
  },
  {
    "id": 4,
    "title": "Software Engineer",
    "category": "Technology & Digital",
    "description": "Patience, structured problem-solving, and teamwork are key to shipping reliable software. They specialize in programming languages like Python, Java, or C++, software architecture, algorithms, and version control systems such as Git.",
    "softSkills": ["patience", "structured problem solving", "teamwork"],
    "hardSkills": ["Python", "Java", "C++", "algorithms", "software architecture", "Git"],
    "resources": [
      {
        "name": "GitHub",
        "url": "https://github.com"
      },
      {
        "name": "Stack Overflow",
        "url": "https://stackoverflow.com"
      },
      {
        "name": "LeetCode",
        "url": "https://leetcode.com/"
      },
      {
        "name": "The Algorithms",
        "url": "https://the-algorithms.com/"
      }
    ]
  },
  {
    "id": 5,
    "title": "Cybersecurity Specialist",
    "category": "Technology & Digital",
    "description": "They need strong ethical reasoning, strategic thinking, and quick decision-making to protect digital environments. Technical expertise involves network security, penetration testing, firewalls, encryption, and threat analysis.",
    "softSkills": ["ethical reasoning", "strategic thinking", "quick decision making"],
    "hardSkills": ["network security", "penetration testing", "firewalls", "encryption", "threat analysis"],
    "resources": [
      {
        "name": "SANS Institute",
        "url": "https://www.sans.org"
      },
      {
        "name": "OWASP",
        "url": "https://owasp.org"
      },
      {
        "name": "Dark Reading",
        "url": "https://www.darkreading.com/"
      },
      {
        "name": "The Hacker News",
        "url": "https://thehackernews.com/"
      }
    ]
  },
  {
    "id": 6,
    "title": "Game Developer",
    "category": "Technology & Digital",
    "description": "Creativity, storytelling, and iterative problem-solving drive their work. They use game engines like Unity or Unreal Engine, programming languages such as C# or C++, and tools for physics and asset integration.",
    "softSkills": ["creativity", "storytelling", "iterative problem solving"],
    "hardSkills": ["Unity", "Unreal Engine", "C#", "C++", "game physics", "asset integration"],
    "resources": [
      {
        "name": "Unity",
        "url": "https://unity.com"
      },
      {
        "name": "Unreal Engine",
        "url": "https://www.unrealengine.com"
      },
      {
        "name": "Gamasutra (Game Developer)",
        "url": "https://www.gamedeveloper.com/"
      },
      {
        "name": "GameDev.net",
        "url": "https://www.gamedev.net/"
      }
    ]
  },
  {
    "id": 7,
    "title": "AI Prompt Engineer",
    "category": "Technology & Digital",
    "description": "They excel at language clarity, creative problem-solving, and analytical thinking. Their work includes writing structured prompts, understanding LLM behaviors, and integrating models via APIs, sometimes with light scripting in Python.",
    "softSkills": ["language clarity", "creative problem solving", "analytical thinking"],
    "hardSkills": ["prompt design", "LLM behavior", "API integration", "Python scripting"],
    "resources": [
      {
        "name": "OpenAI Docs",
        "url": "https://platform.openai.com/docs"
      },
      {
        "name": "Hugging Face",
        "url": "https://huggingface.co"
      },
      {
        "name": "Prompt Engineering Guide",
        "url": "https://www.promptingguide.ai/"
      },
      {
        "name": "Google AI Prompt Design Guide",
        "url": "https://cloud.google.com/discover/what-is-prompt-engineering"
      }
    ]
  },
  {
    "id": 8,
    "title": "IT Support Technician",
    "category": "Technology & Digital",
    "description": "Patience, clear communication, and customer service are essential to assist users effectively. Their technical skill set includes troubleshooting hardware and software, basic networking, and system configuration.",
    "softSkills": ["patience", "clear communication", "customer service"],
    "hardSkills": ["hardware troubleshooting", "software troubleshooting", "basic networking", "system configuration"],
    "resources": [
      {
        "name": "CompTIA",
        "url": "https://www.comptia.org"
      },
      {
        "name": "Microsoft Learn",
        "url": "https://learn.microsoft.com"
      },
      {
        "name": "TechRepublic",
        "url": "https://www.techrepublic.com/"
      },
      {
        "name": "Reddit's r/ITCareerQuestions",
        "url": "https://www.reddit.com/r/ITCareerQuestions/"
      }
    ]
  },
  {
    "id": 9,
    "title": "Product Manager",
    "category": "Technology & Digital",
    "description": "Strong leadership, empathy, and organizational skills are needed to align teams around a shared vision. They use roadmapping, data analysis, and market research to define features and oversee development cycles.",
    "softSkills": ["leadership", "empathy", "organization"],
    "hardSkills": ["roadmapping", "data analysis", "market research", "product lifecycle"],
    "resources": [
      {
        "name": "Product School",
        "url": "https://www.productschool.com"
      },
      {
        "name": "Mind the Product",
        "url": "https://www.mindtheproduct.com"
      },
      {
        "name": "Reforge",
        "url": "https://www.reforge.com/"
      },
      {
        "name": "Product Hunt",
        "url": "https://www.producthunt.com/"
      }
    ]
  },
  {
    "id": 10,
    "title": "Web Designer",
    "category": "Technology & Digital",
    "description": "A blend of visual creativity, user empathy, and adaptability drives their soft skill set. On the technical side, they work with HTML, CSS, design tools like Figma, responsive layouts, and accessibility principles.",
    "softSkills": ["visual creativity", "user empathy", "adaptability"],
    "hardSkills": ["HTML", "CSS", "Figma", "responsive design", "accessibility"],
    "resources": [
      {
        "name": "CSS-Tricks",
        "url": "https://css-tricks.com"
      },
      {
        "name": "WebAIM",
        "url": "https://webaim.org"
      },
      {
        "name": "A List Apart",
        "url": "https://alistapart.com/"
      },
      {
        "name": "Canva Design School",
        "url": "https://www.canva.com/design-school/"
      }
    ]
  },
  {
    "id": 11,
    "title": "Graphic Designer",
    "category": "Creative & Design",
    "description": "They depend on creativity, visual communication, and time management to deliver impactful designs. Core hard skills include typography, layout composition, and design tools such as Adobe Illustrator and Photoshop.",
    "softSkills": ["creativity", "visual communication", "time management"],
    "hardSkills": ["typography", "layout", "Illustrator", "Photoshop"],
    "resources": [
      {
        "name": "Adobe Learn",
        "url": "https://www.adobe.com/creativecloud.html"
      },
      {
        "name": "Behance",
        "url": "https://www.behance.net"
      },
      {
        "name": "AIGA (American Institute of Graphic Arts)",
        "url": "https://www.aiga.org/"
      },
      {
        "name": "Creative Bloq",
        "url": "https://www.creativebloq.com/"
      }
    ]
  },
  {
    "id": 12,
    "title": "Interior Designer",
    "category": "Creative & Design",
    "description": "Empathy, spatial awareness, and communication skills help them understand clients’ needs and tastes. They apply CAD software, color theory, lighting design, and material selection to create functional spaces.",
    "softSkills": ["empathy", "spatial awareness", "communication"],
    "hardSkills": ["CAD", "color theory", "lighting design", "material selection"],
    "resources": [
      {
        "name": "American Society of Interior Designers",
        "url": "https://www.asid.org"
      },
      {
        "name": "Houzz",
        "url": "https://www.houzz.com"
      },
      {
        "name": "Architectural Digest",
        "url": "https://www.architecturaldigest.com/"
      },
      {
        "name": "SketchUp Community",
        "url": "https://forums.sketchup.com/"
      }
    ]
  },
  {
    "id": 13,
    "title": "Fashion Stylist",
    "category": "Creative & Design",
    "description": "They rely on trend awareness, confidence, and personal branding skills to guide client choices. Their technical skills include fashion theory, wardrobe curation, and textile knowledge to create cohesive looks.",
    "softSkills": ["trend awareness", "confidence", "personal branding"],
    "hardSkills": ["fashion theory", "wardrobe curation", "textile knowledge"],
    "resources": [
      {
        "name": "The Business of Fashion",
        "url": "https://www.businessoffashion.com"
      },
      {
        "name": "Fashionista",
        "url": "https://fashionista.com"
      },
      {
        "name": "Vogue Business",
        "url": "https://www.voguebusiness.com/"
      },
      {
        "name": "Fashion Stylist Institute",
        "url": "https://www.aici.org/page/Fashion_Stylist_Inst"
      }
    ]
  },
  {
    "id": 14,
    "title": "Illustrator",
    "category": "Creative & Design",
    "description": "Patience, imagination, and storytelling are key soft skills for their creative output. Their technical work involves drawing techniques, digital illustration tools such as Procreate or Adobe Illustrator, and color blending methods.",
    "softSkills": ["patience", "imagination", "storytelling"],
    "hardSkills": ["drawing", "Procreate", "Illustrator", "color theory"],
    "resources": [
      {
        "name": "Procreate",
        "url": "https://procreate.art"
      },
      {
        "name": "Society of Illustrators",
        "url": "https://www.societyillustrators.org"
      },
      {
        "name": "ArtStation",
        "url": "https://www.artstation.com/"
      },
      {
        "name": "Schoolism",
        "url": "https://www.schoolism.com/"
      }
    ]
  },
  {
    "id": 15,
    "title": "Photographer",
    "category": "Creative & Design",
    "description": "They lean on observational skills, timing, and interpersonal communication to capture meaningful images. Their hard skills include using DSLR or mirrorless cameras, lighting setups, editing with Lightroom, and strong composition.",
    "softSkills": ["observation", "timing", "interpersonal communication"],
    "hardSkills": ["camera operation", "lighting", "Lightroom", "composition"],
    "resources": [
      {
        "name": "PetaPixel",
        "url": "https://petapixel.com"
      },
      {
        "name": "Digital Photography School",
        "url": "https://digital-photography-school.com"
      },
      {
        "name": "The Phoblographer",
        "url": "https://www.thephoblographer.com/"
      },
      {
        "name": "Fstoppers",
        "url": "https://fstoppers.com/"
      }
    ]
  },
  {
    "id": 16,
    "title": "Videographer",
    "category": "Creative & Design",
    "description": "They bring collaboration, storytelling sense, and timing into their work. They handle camera equipment, lighting, sound design, and editing software such as Premiere Pro or DaVinci Resolve.",
    "softSkills": ["collaboration", "storytelling", "timing"],
    "hardSkills": ["camera operation", "lighting", "sound design", "Premiere Pro", "DaVinci Resolve"],
    "resources": [
      {
        "name": "No Film School",
        "url": "https://nofilmschool.com"
      },
      {
        "name": "Videomaker",
        "url": "https://www.videomaker.com"
      },
      {
        "name": "PremiumBeat (Shutterstock)",
        "url": "https://www.premiumbeat.com/blog/"
      },
      {
        "name": "Filmmaker IQ",
        "url": "https://filmmakeriq.com/"
      }
    ]
  },
  {
    "id": 17,
    "title": "3D Modeler",
    "category": "Creative & Design",
    "description": "Patience, spatial reasoning, and iterative creativity drive their process. They use software like Blender, Maya, or ZBrush to sculpt, texture, and render 3D assets for games, film, or products.",
    "softSkills": ["patience", "spatial reasoning", "iterative creativity"],
    "hardSkills": ["Blender", "Maya", "ZBrush", "texturing", "rendering"],
    "resources": [
      {
        "name": "Blender.org",
        "url": "https://www.blender.org"
      },
      {
        "name": "Sketchfab",
        "url": "https://sketchfab.com"
      },
      {
        "name": "CGTrader",
        "url": "https://www.cgtrader.com/"
      },
      {
        "name": "Autodesk Learning Hub",
        "url": "https://knowledge.autodesk.com/learning-hub"
      }
    ]
  },
  {
    "id": 18,
    "title": "Concept Artist",
    "category": "Creative & Design",
    "description": "Imagination, visual storytelling, and adaptability are core soft skills. They master digital painting techniques, anatomy, perspective, and tools such as Photoshop or Krita to visualize ideas.",
    "softSkills": ["imagination", "visual storytelling", "adaptability"],
    "hardSkills": ["digital painting", "anatomy", "perspective", "Photoshop", "Krita"],
    "resources": [
      {
        "name": "ArtStation",
        "url": "https://www.artstation.com"
      },
      {
        "name": "Ctrl+Paint",
        "url": "https://ctrlpaint.com"
      },
      {
        "name": "Muddy Colors",
        "url": "https://www.muddycolors.com/"
      },
      {
        "name": "Concept Art World",
        "url": "https://conceptartworld.com/"
      }
    ]
  },
  {
    "id": 19,
    "title": "Creative Director",
    "category": "Creative & Design",
    "description": "They rely on leadership, vision, and persuasive communication to guide teams toward cohesive creative goals. Their technical work involves art direction, design strategy, and familiarity with design suites and storytelling frameworks.",
    "softSkills": ["leadership", "vision", "persuasive communication"],
    "hardSkills": ["art direction", "design strategy", "design suites", "storytelling frameworks"],
    "resources": [
      {
        "name": "AIGA",
        "url": "https://www.aiga.org"
      },
      {
        "name": "Creative Bloq",
        "url": "https://www.creativebloq.com"
      },
      {
        "name": "The Drum",
        "url": "https://www.thedrum.com/"
      },
      {
        "name": "Communication Arts",
        "url": "https://www.commarts.com/"
      }
    ]
  },
  {
    "id": 20,
    "title": "Animator",
    "category": "Creative & Design",
    "description": "Timing, storytelling, and patience are crucial for bringing visuals to life. Their hard skills include frame-by-frame animation, rigging, motion graphics, and tools like After Effects or Toon Boom.",
    "softSkills": ["timing", "storytelling", "patience"],
    "hardSkills": ["frame-by-frame animation", "rigging", "motion graphics", "After Effects", "Toon Boom"],
    "resources": [
      {
        "name": "Animation Mentor",
        "url": "https://www.animationmentor.com"
      },
      {
        "name": "Toon Boom Learn",
        "url": "https://learn.toonboom.com"
      },
      {
        "name": "Animator Island",
        "url": "https://animatorisland.com/"
      },
      {
        "name": "AWN (Animation World Network)",
        "url": "https://www.awn.com/"
      }
    ]
  },
  {
    "id": 21,
    "title": "Copywriter",
    "category": "Writing, Media & Communication",
    "description": "They lean on empathy, language clarity, and persuasion to connect with audiences. Their craft includes SEO writing, marketing language structures, and content strategy.",
    "softSkills": ["empathy", "language clarity", "persuasion"],
    "hardSkills": ["SEO writing", "marketing copy", "content strategy"],
    "resources": [
      {
        "name": "Copyblogger",
        "url": "https://copyblogger.com"
      },
      {
        "name": "HubSpot Blog",
        "url": "https://blog.hubspot.com"
      },
      {
        "name": "The Copywriter's Handbook (Book)",
        "url": "https://www.amazon.com/Copywriters-Handbook-Step-Step-Winning/dp/0805063085"
      },
      {
        "name": "American Writers & Artists Institute (AWAI)",
        "url": "https://www.awai.com/"
      }
    ]
  },
  {
    "id": 22,
    "title": "Journalist",
    "category": "Writing, Media & Communication",
    "description": "Curiosity, integrity, and clear communication shape their soft skills. Their technical abilities include investigative research, fact-checking, interviewing, and multimedia reporting.",
    "softSkills": ["curiosity", "integrity", "clear communication"],
    "hardSkills": ["investigative research", "fact checking", "interviewing", "multimedia reporting"],
    "resources": [
      {
        "name": "Poynter",
        "url": "https://www.poynter.org"
      },
      {
        "name": "Investigative Reporters & Editors",
        "url": "https://www.ire.org"
      },
      {
        "name": "Columbia Journalism Review (CJR)",
        "url": "https://www.cjr.org/"
      },
      {
        "name": "Committee to Protect Journalists (CPJ)",
        "url": "https://cpj.org/"
      }
    ]
  },
  {
    "id": 23,
    "title": "Scriptwriter",
    "category": "Writing, Media & Communication",
    "description": "They rely on creativity, structure, and emotional intelligence to craft compelling narratives. They use screenplay formatting, storyboarding, and tools like Final Draft to develop scripts.",
    "softSkills": ["creativity", "structure", "emotional intelligence"],
    "hardSkills": ["screenplay formatting", "storyboarding", "Final Draft"],
    "resources": [
      {
        "name": "Final Draft",
        "url": "https://www.finaldraft.com"
      },
      {
        "name": "The Black List",
        "url": "https://blcklst.com"
      },
      {
        "name": "The Writers Guild of America (WGA)",
        "url": "https://www.wga.org/"
      },
      {
        "name": "Go Into The Story (Scott Myers)",
        "url": "https://gointothestory.blcklst.com/"
      }
    ]
  },
  {
    "id": 24,
    "title": "Content Creator",
    "category": "Writing, Media & Communication",
    "description": "Adaptability, audience awareness, and personal branding are essential to connect with followers. Their technical work often includes shooting, editing, analytics, and platform optimization.",
    "softSkills": ["adaptability", "audience awareness", "personal branding"],
    "hardSkills": ["shooting", "editing", "analytics", "platform optimization"],
    "resources": [
      {
        "name": "YouTube Creator Academy",
        "url": "https://creatoracademy.youtube.com"
      },
      {
        "name": "Buffer Resources",
        "url": "https://buffer.com/resources"
      },
      {
        "name": "Canva (Design & Video Tool)",
        "url": "https://www.canva.com/"
      },
      {
        "name": "Google Trends (Topic Research)",
        "url": "https://trends.google.com/trends/"
      }
    ]
  },
  {
    "id": 25,
    "title": "Social Media Manager",
    "category": "Writing, Media & Communication",
    "description": "Strategic thinking, trend awareness, and relationship-building form their soft skills. On the technical side, they use scheduling tools, analytics dashboards, and engagement strategy techniques.",
    "softSkills": ["strategic thinking", "trend awareness", "relationship building"],
    "hardSkills": ["scheduling tools", "analytics", "engagement strategy"],
    "resources": [
      {
        "name": "Hootsuite",
        "url": "https://hootsuite.com"
      },
      {
        "name": "Sprout Social",
        "url": "https://sproutsocial.com"
      },
      {
        "name": "Social Media Today",
        "url": "https://www.socialmediatoday.com/"
      },
      {
        "name": "Meta Blueprint (Courses)",
        "url": "https://www.facebookblueprint.com/"
      }
    ]
  },
  {
    "id": 26,
    "title": "Podcaster",
    "category": "Writing, Media & Communication",
    "description": "They rely on storytelling, conversational skills, and audience engagement to hold listeners’ attention. Their technical skills include audio recording, editing with tools like Audacity or Adobe Audition, and basic sound engineering.",
    "softSkills": ["storytelling", "conversational skills", "audience engagement"],
    "hardSkills": ["audio recording", "Audacity", "Adobe Audition", "sound engineering"],
    "resources": [
      {
        "name": "Podcast Insights",
        "url": "https://www.podcastinsights.com"
      },
      {
        "name": "Libsyn",
        "url": "https://libsyn.com"
      },
      {
        "name": "The Podcast Host",
        "url": "https://www.thepodcasthost.com/"
      },
      {
        "name": "Buzzsprout (Hosting)",
        "url": "https://www.buzzsprout.com/"
      }
    ]
  },
  {
    "id": 27,
    "title": "Editor (Video or Text)",
    "category": "Writing, Media & Communication",
    "description": "Patience, attention to detail, and a strong sense of narrative or language are essential. Their work involves editing software such as Premiere Pro or text tools, narrative pacing, fact-checking, and quality control.",
    "softSkills": ["patience", "attention to detail", "narrative sense"],
    "hardSkills": ["video editing", "text editing", "pacing", "fact checking"],
    "resources": [
      {
        "name": "Editorial Freelancers Association",
        "url": "https://www.the-efa.org"
      },
      {
        "name": "The Chicago Manual of Style",
        "url": "https://www.chicagomanualofstyle.org"
      },
      {
        "name": "Creative COW (Video Editing Forum)",
        "url": "https://www.creativecow.net/"
      },
      {
        "name": "Associated Press Stylebook (AP Style)",
        "url": "https://www.apstylebook.com/"
      }
    ]
  },
  {
    "id": 28,
    "title": "Public Relations Specialist",
    "category": "Writing, Media & Communication",
    "description": "Strong interpersonal communication, diplomacy, and crisis management are critical. They use media outreach strategies, press release writing, and brand positioning to manage public image.",
    "softSkills": ["interpersonal communication", "diplomacy", "crisis management"],
    "hardSkills": ["media outreach", "press release writing", "brand positioning"],
    "resources": [
      {
        "name": "Public Relations Society of America",
        "url": "https://www.prsa.org"
      },
      {
        "name": "Spin Sucks",
        "url": "https://spinsucks.com"
      },
      {
        "name": "PR News",
        "url": "https://www.prnewsonline.com/"
      },
      {
        "name": "Meltwater (Media Monitoring)",
        "url": "https://www.meltwater.com/"
      }
    ]
  },
  {
    "id": 29,
    "title": "Technical Writer",
    "category": "Writing, Media & Communication",
    "description": "Clarity, structured thinking, and empathy for the reader shape their communication. Their technical skill set involves writing detailed documentation, understanding complex systems, and using publishing or formatting tools.",
    "softSkills": ["clarity", "structured thinking", "reader empathy"],
    "hardSkills": ["documentation", "complex systems understanding", "publishing tools"],
    "resources": [
      {
        "name": "Society for Technical Communication",
        "url": "https://www.stc.org"
      },
      {
        "name": "Write the Docs",
        "url": "https://www.writethedocs.org"
      },
      {
        "name": "TechWhirl",
        "url": "https://www.techwhirl.com/"
      },
      {
        "name": "Google Developers Documentation Style Guide",
        "url": "https://developers.google.com/style"
      }
    ]
  },
  {
    "id": 30,
    "title": "Translator",
    "category": "Writing, Media & Communication",
    "description": "They depend on cultural sensitivity, linguistic precision, and adaptability. Their hard skills include fluency in multiple languages, localization techniques, and sometimes specialized translation software.",
    "softSkills": ["cultural sensitivity", "linguistic precision", "adaptability"],
    "hardSkills": ["language fluency", "localization", "CAT tools"],
    "resources": [
      {
        "name": "ProZ",
        "url": "https://www.proz.com"
      },
      {
        "name": "American Translators Association",
        "url": "https://www.atanet.org"
      },
      {
        "name": "Global Language Monitor",
        "url": "https://languagemonitor.com/"
      },
      {
        "name": "The Translator's Tool Box",
        "url": "https://www.translationdirectory.com/translators-tools.php"
      }
    ]
  },
  {
    "id": 31,
    "title": "Carpenter",
    "category": "Hands-On & Craft-Based",
    "description": "Patience, precision, and problem-solving are core soft skills for quality workmanship. Their technical skills include woodworking, blueprint reading, measuring, cutting, and safe use of power tools.",
    "softSkills": ["patience", "precision", "problem solving"],
    "hardSkills": ["woodworking", "blueprint reading", "measuring", "power tools"],
    "resources": [
      {
        "name": "Fine Woodworking",
        "url": "https://www.finewoodworking.com"
      },
      {
        "name": "Family Handyman",
        "url": "https://www.familyhandyman.com"
      },
      {
        "name": "The Wood Whisperer",
        "url": "https://thewoodwhisperer.com/"
      },
      {
        "name": "NAHB (National Association of Home Builders)",
        "url": "https://www.nahb.org/"
      }
    ]
  },
  {
    "id": 32,
    "title": "Chef",
    "category": "Hands-On & Craft-Based",
    "description": "Creativity, stress management, and collaboration are essential in a fast-paced kitchen. They master knife skills, cooking techniques, plating, recipe development, and kitchen operations.",
    "softSkills": ["creativity", "stress management", "collaboration"],
    "hardSkills": ["knife skills", "cooking techniques", "plating", "recipe development"],
    "resources": [
      {
        "name": "American Culinary Federation",
        "url": "https://www.acfchefs.org"
      },
      {
        "name": "Serious Eats",
        "url": "https://www.seriouseats.com"
      },
      {
        "name": "The Culinary Institute of America (CIA)",
        "url": "https://www.ciachef.edu/"
      },
      {
        "name": "Chef's Resources",
        "url": "https://www.chefs-resources.com/"
      }
    ]
  },
  {
    "id": 33,
    "title": "Baker",
    "category": "Hands-On & Craft-Based",
    "description": "They rely on patience, timing, and consistency to create high-quality baked goods. Their specialized skills include dough preparation, fermentation control, precision in measurements, and decorating techniques.",
    "softSkills": ["patience", "timing", "consistency"],
    "hardSkills": ["dough preparation", "fermentation", "precision measurements", "decorating"],
    "resources": [
      {
        "name": "King Arthur Baking",
        "url": "https://www.kingarthurbaking.com"
      },
      {
        "name": "The Fresh Loaf",
        "url": "https://www.thefreshloaf.com"
      },
      {
        "name": "Bakers Journal",
        "url": "https://www.bakersjournal.com/"
      },
      {
        "name": "Bread Bakers Guild of America",
        "url": "https://www.bbga.org/"
      }
    ]
  },
  {
    "id": 34,
    "title": "Mechanic",
    "category": "Hands-On & Craft-Based",
    "description": "Logical reasoning, troubleshooting, and clear communication help diagnose vehicle issues. Hard skills include engine repair, diagnostic tools, tool use, and working with vehicle electronics and safety protocols.",
    "softSkills": ["logical reasoning", "troubleshooting", "communication"],
    "hardSkills": ["engine repair", "diagnostic tools", "electrical systems", "tool use"],
    "resources": [
      {
        "name": "Haynes Manuals",
        "url": "https://haynes.com"
      },
      {
        "name": "iATN",
        "url": "https://www.iatn.net"
      },
      {
        "name": "ASE (Automotive Service Excellence)",
        "url": "https://www.ase.com/"
      },
      {
        "name": "Motor Age",
        "url": "https://www.motor.com/"
      }
    ]
  },
  {
    "id": 35,
    "title": "Electrician",
    "category": "Hands-On & Craft-Based",
    "description": "Problem-solving, responsibility, and attention to safety guide their work. They use wiring techniques, read electrical diagrams, perform circuit testing, and follow regulatory compliance.",
    "softSkills": ["problem solving", "responsibility", "safety focus"],
    "hardSkills": ["wiring", "electrical diagrams", "circuit testing", "code compliance"],
    "resources": [
      {
        "name": "NECA",
        "url": "https://www.necanet.org"
      },
      {
        "name": "NFPA",
        "url": "https://www.nfpa.org"
      },
      {
        "name": "electrical training ALLIANCE",
        "url": "https://www.electricaltrainingalliance.org/resources/resources"
      },
      {
        "name": "Mike Holt Enterprises (Code Training)",
        "url": "https://www.mikeholt.com/"
      }
    ]
  },
  {
    "id": 36,
    "title": "Plumber",
    "category": "Hands-On & Craft-Based",
    "description": "They need technical aptitude, precision, and troubleshooting skills for complex water and drainage systems. Hard skills include pipe cutting, soldering, blueprint reading, fixture installation, and following water safety regulations.",
    "softSkills": ["technical aptitude", "precision", "troubleshooting"],
    "hardSkills": ["pipe cutting", "soldering", "blueprint reading", "fixture installation"],
    "resources": [
      {
        "name": "Plumbing & Mechanical Magazine",
        "url": "https://www.pmmag.com"
      },
      {
        "name": "IAPMO (International Association of Plumbing and Mechanical Officials)",
        "url": "https://www.iapmo.org"
      },
      {
        "name": "Contractor Magazine",
        "url": "https://www.contractormag.com/"
      },
      {
        "name": "PHCC (Plumbing-Heating-Cooling Contractors Association)",
        "url": "https://www.phccweb.org/"
      }
    ]
  },
  {
    "id": 37,
    "title": "Welder",
    "category": "Hands-On & Craft-Based",
    "description": "Attention to detail, spatial awareness, and manual dexterity are vital for strong, safe welds. They are skilled in different welding types (MIG, TIG, Stick), metal preparation, and interpreting engineering drawings.",
    "softSkills": ["attention to detail", "spatial awareness", "manual dexterity"],
    "hardSkills": ["MIG/TIG welding", "metal preparation", "engineering drawings", "safety protocol"],
    "resources": [
      {
        "name": "American Welding Society",
        "url": "https://www.aws.org"
      },
      {
        "name": "The Fabricator",
        "url": "https://www.thefabricator.com"
      },
      {
        "name": "Welding Web",
        "url": "https://www.weldingweb.com/"
      },
      {
        "name": "Hobart Institute of Welding Technology",
        "url": "https://www.welding.org/"
      }
    ]
  },
  {
    "id": 38,
    "title": "HVAC Technician",
    "category": "Hands-On & Craft-Based",
    "description": "They use critical thinking, troubleshooting, and customer service to maintain climate control systems. Hard skills include refrigerant handling, thermodynamics knowledge, diagnostic testing, and system repair.",
    "softSkills": ["critical thinking", "troubleshooting", "customer service"],
    "hardSkills": ["refrigerant handling", "thermodynamics", "diagnostic testing", "system repair"],
    "resources": [
      {
        "name": "ASHRAE",
        "url": "https://www.ashrae.org"
      },
      {
        "name": "HVAC Talk",
        "url": "https://hvac-talk.com"
      },
      {
        "name": "ACCA (Air Conditioning Contractors of America)",
        "url": "https://www.acca.org/"
      },
      {
        "name": "NATE (North American Technician Excellence)",
        "url": "https://www.natex.org/"
      }
    ]
  },
  {
    "id": 39,
    "title": "Landscaper/Horticulturist",
    "category": "Hands-On & Craft-Based",
    "description": "They need plant knowledge, spatial design sense, and physical stamina for outdoor work. Hard skills include plant care, soil science, irrigation systems, pruning techniques, and landscape design principles.",
    "softSkills": ["plant knowledge", "spatial design sense", "physical stamina"],
    "hardSkills": ["plant care", "soil science", "irrigation", "pruning"],
    "resources": [
      {
        "name": "The American Horticultural Society",
        "url": "https://ahsgardening.org"
      },
      {
        "name": "Landscape Management Magazine",
        "url": "https://www.landscape-manager.net"
      },
      {
        "name": "ASLA (American Society of Landscape Architects)",
        "url": "https://www.asla.org/"
      },
      {
        "name": "Garden Gate Magazine",
        "url": "https://www.gardengatemagazine.com/"
      }
    ]
  },
  {
    "id": 40,
    "title": "Aviation Maintenance Technician (AMT)",
    "category": "Hands-On & Craft-Based",
    "description": "They must be detail-oriented, adhere to strict procedures, and have sharp troubleshooting skills for aircraft systems. Hard skills include reading complex schematics, using specialized tools, and following FAA regulations and documentation.",
    "softSkills": ["detail-oriented", "adherence to procedure", "troubleshooting"],
    "hardSkills": ["schematic reading", "specialized tool use", "FAA regulations", "logbook documentation"],
    "resources": [
      {
        "name": "FAA Aviation Maintenance Handbook",
        "url": "https://www.faa.gov/regulations_policies/handbooks_manuals/aircraft/amt_handbook"
      },
      {
        "name": "Aviation Pros",
        "url": "https://www.aviationpros.com"
      },
      {
        "name": "AOPA (Aircraft Owners and Pilots Association)",
        "url": "https://www.aopa.org/"
      },
      {
        "name": "AMT Society",
        "url": "https://www.amtsociety.org/"
      }
    ]
  },
  {
    "id": 41,
    "title": "Financial Analyst",
    "category": "Business & Finance",
    "description": "They require analytical thinking, attention to detail, and integrity to assess financial data. Hard skills include financial modeling, valuation, advanced Excel, and knowledge of accounting principles.",
    "softSkills": ["analytical thinking", "attention to detail", "integrity"],
    "hardSkills": ["financial modeling", "valuation", "advanced Excel", "accounting principles"],
    "resources": [
      {
        "name": "Investopedia",
        "url": "https://www.investopedia.com"
      },
      {
        "name": "Wall Street Oasis",
        "url": "https://www.wallstreetoasis.com"
      },
      {
        "name": "CFA Institute",
        "url": "https://www.cfainstitute.org/"
      },
      {
        "name": "Bloomberg Terminal (Industry Standard)",
        "url": "https://www.bloomberg.com/professional/solution/bloomberg-terminal/"
      }
    ]
  },
  {
    "id": 42,
    "title": "Marketing Manager",
    "category": "Business & Finance",
    "description": "Creativity, strategic thinking, and strong communication skills drive successful campaigns. Hard skills include market research, campaign management, SEO/SEM, and data analysis with tools like Google Analytics.",
    "softSkills": ["creativity", "strategic thinking", "communication"],
    "hardSkills": ["market research", "campaign management", "SEO/SEM", "Google Analytics"],
    "resources": [
      {
        "name": "HubSpot Marketing Blog",
        "url": "https://blog.hubspot.com/marketing"
      },
      {
        "name": "Moz Blog",
        "url": "https://moz.com/blog"
      },
      {
        "name": "American Marketing Association",
        "url": "https://www.ama.org/"
      },
      {
        "name": "Digital Marketing Institute",
        "url": "https://digitalmarketinginstitute.com/"
      }
    ]
  },
  {
    "id": 43,
    "title": "Sales Representative",
    "category": "Business & Finance",
    "description": "They excel with active listening, resilience, and persuasive skills to close deals. Their toolkit includes CRM software, sales strategy, negotiation, and product knowledge.",
    "softSkills": ["active listening", "resilience", "persuasion"],
    "hardSkills": ["CRM software", "sales strategy", "negotiation", "product knowledge"],
    "resources": [
      {
        "name": "Salesforce Blog",
        "url": "https://www.salesforce.com/blog/category/sales/"
      },
      {
        "name": "LinkedIn Sales Solutions",
        "url": "https://business.linkedin.com/sales-solutions"
      },
      {
        "name": "The Sales Blog (Anthony Iannarino)",
        "url": "https://thesalesblog.com/"
      },
      {
        "name": "Gartner for Sales",
        "url": "https://www.gartner.com/en/sales"
      }
    ]
  },
  {
    "id": 44,
    "title": "HR Specialist",
    "category": "Business & Finance",
    "description": "They must have high emotional intelligence, confidentiality, and diplomacy to manage employee relations. Hard skills cover labor law, recruiting, payroll processing, and HRIS (Human Resources Information Systems).",
    "softSkills": ["emotional intelligence", "confidentiality", "diplomacy"],
    "hardSkills": ["labor law", "recruiting", "payroll", "HRIS"],
    "resources": [
      {
        "name": "Society for Human Resource Management (SHRM)",
        "url": "https://www.shrm.org"
      },
      {
        "name": "HR Dive",
        "url": "https://www.hrdive.com"
      },
      {
        "name": "HR.com",
        "url": "https://www.hr.com/"
      },
      {
        "name": "The Balance Careers (HR Resources)",
        "url": "https://www.thebalancecareers.com/human-resources-4161801"
      }
    ]
  },
  {
    "id": 45,
    "title": "Management Consultant",
    "category": "Business & Finance",
    "description": "Exceptional problem-solving, structured communication, and strong organizational skills are a must. They use framework analysis, presentation software, data modeling, and industry-specific knowledge to advise clients.",
    "softSkills": ["problem solving", "structured communication", "organization"],
    "hardSkills": ["framework analysis", "presentation software", "data modeling", "industry knowledge"],
    "resources": [
      {
        "name": "McKinsey & Company Insights",
        "url": "https://www.mckinsey.com/insights"
      },
      {
        "name": "Consulting Magazine",
        "url": "https://www.consultingmag.com"
      },
      {
        "name": "Management Consulted",
        "url": "https://managementconsulted.com/"
      },
      {
        "name": "Bain & Company Articles & Reports",
        "url": "https://www.bain.com/insights/"
      }
    ]
  },
  {
    "id": 46,
    "title": "Accountant/Bookkeeper",
    "category": "Business & Finance",
    "description": "Accuracy, organization, and adherence to regulations are crucial for managing finances. Hard skills include GAAP/IFRS, using accounting software (QuickBooks, SAP), auditing, and tax preparation.",
    "softSkills": ["accuracy", "organization", "regulatory adherence"],
    "hardSkills": ["GAAP/IFRS", "accounting software", "auditing", "tax preparation"],
    "resources": [
      {
        "name": "AICPA",
        "url": "https://www.aicpa.org"
      },
      {
        "name": "QuickBooks Blog",
        "url": "https://quickbooks.intuit.com/blog/"
      },
      {
        "name": "Journal of Accountancy",
        "url": "https://www.journalofaccountancy.com/"
      },
      {
        "name": "IRS Tax Professionals Site",
        "url": "https://www.irs.gov/tax-professionals"
      }
    ]
  },
  {
    "id": 47,
    "title": "Project Manager",
    "category": "Business & Finance",
    "description": "Leadership, organization, and clear communication are essential to guide projects to completion. They use Agile/Scrum methodologies, scheduling software (Gantt charts), budgeting, and risk management.",
    "softSkills": ["leadership", "organization", "communication"],
    "hardSkills": ["Agile/Scrum", "Gantt charts", "budgeting", "risk management"],
    "resources": [
      {
        "name": "Project Management Institute (PMI)",
        "url": "https://www.pmi.org"
      },
      {
        "name": "Atlassian (Jira/Confluence)",
        "url": "https://www.atlassian.com"
      },
      {
        "name": "Scrum Alliance",
        "url": "https://www.scrumalliance.org/"
      },
      {
        "name": "Project Smart",
        "url": "https://www.projectsmart.co.uk/"
      }
    ]
  },
  {
    "id": 48,
    "title": "Supply Chain Manager",
    "category": "Business & Finance",
    "description": "Strategic planning, negotiation, and logistics management are key. Hard skills include inventory management, forecasting, supply chain software, and process optimization.",
    "softSkills": ["strategic planning", "negotiation", "logistics management"],
    "hardSkills": ["inventory management", "forecasting", "supply chain software", "process optimization"],
    "resources": [
      {
        "name": "APICS (ASCM)",
        "url": "https://www.ascm.org"
      },
      {
        "name": "Supply Chain Management Review",
        "url": "https://www.scmr.com"
      },
      {
        "name": "Logistics Management",
        "url": "https://www.logisticsmgmt.com/"
      },
      {
        "name": "Council of Supply Chain Management Professionals (CSCMP)",
        "url": "https://cscmp.org/"
      }
    ]
  },
  {
    "id": 49,
    "title": "Real Estate Agent",
    "category": "Business & Finance",
    "description": "They must have excellent communication, relationship building, and strong ethical practice. Hard skills include market analysis, contract negotiation, property valuation, and local legal compliance.",
    "softSkills": ["communication", "relationship building", "ethical practice"],
    "hardSkills": ["market analysis", "contract negotiation", "property valuation", "legal compliance"],
    "resources": [
      {
        "name": "National Association of Realtors (NAR)",
        "url": "https://www.nar.realtor"
      },
      {
        "name": "Inman News",
        "url": "https://www.inman.com"
      },
      {
        "name": "Zillow Premier Agent Resources",
        "url": "https://www.zillow.com/agent-resources/"
      },
      {
        "name": "The Close (Real Estate Tips)",
        "url": "https://theclose.com/"
      }
    ]
  },
  {
    "id": 50,
    "title": "Business Development Manager",
    "category": "Business & Finance",
    "description": "They rely on strategic networking, relationship building, and business acumen to drive growth. Hard skills involve market analysis, cold calling/outreach, proposal writing, and understanding financial statements.",
    "softSkills": ["strategic networking", "relationship building", "business acumen"],
    "hardSkills": ["market analysis", "cold outreach", "proposal writing", "financial statements"],
    "resources": [
      {
        "name": "Harvard Business Review (HBR)",
        "url": "https://hbr.org"
      },
      {
        "name": "Forbes Business Development Council",
        "url": "https://councils.forbes.com/business-development"
      },
      {
        "name": "The Business Development Blog",
        "url": "https://www.businessdevelopmentblog.com/"
      },
      {
        "name": "Chamber of Commerce Resources",
        "url": "https://www.uschamber.com/"
      }
    ]
  },
  {
    "id": 51,
    "title": "Cloud Architect",
    "category": "Technology & Digital",
    "description": "Requires strategic planning, technical leadership, and continuous learning to design cloud systems. Hard skills include deep knowledge of AWS, Azure, or GCP, networking, security best practices, and infrastructure-as-code (IaC).",
    "softSkills": ["strategic planning", "technical leadership", "continuous learning"],
    "hardSkills": ["AWS/Azure/GCP", "cloud security", "networking", "Infrastructure-as-Code (IaC)"],
    "resources": [
      {
        "name": "AWS Architecture Center",
        "url": "https://aws.amazon.com/architecture/"
      },
      {
        "name": "Microsoft Azure Documentation",
        "url": "https://docs.microsoft.com/en-us/azure/"
      },
      {
        "name": "Google Cloud Architecture Framework",
        "url": "https://cloud.google.com/architecture"
      },
      {
        "name": "Cloud Academy",
        "url": "https://cloudacademy.com/"
      }
    ]
  },
  {
    "id": 52,
    "title": "DevOps Engineer",
    "category": "Technology & Digital",
    "description": "Collaboration, automation mindset, and troubleshooting are vital for bridging development and operations. Hard skills involve continuous integration/continuous delivery (CI/CD), Docker, Kubernetes, and scripting (Bash, Python).",
    "softSkills": ["collaboration", "automation mindset", "troubleshooting"],
    "hardSkills": ["CI/CD", "Docker", "Kubernetes", "Scripting (Bash/Python)"],
    "resources": [
      {
        "name": "DevOps Institute",
        "url": "https://devopsinstitute.com"
      },
      {
        "name": "Kubernetes Documentation",
        "url": "https://kubernetes.io/docs/"
      },
      {
        "name": "Docker Documentation",
        "url": "https://docs.docker.com/"
      },
      {
        "name": "The Phoenix Project (Book)",
        "url": "https://itrevolution.com/the-phoenix-project/"
      }
    ]
  },
  {
    "id": 53,
    "title": "Machine Learning Engineer",
    "category": "Technology & Digital",
    "description": "They need strong mathematical intuition, experimentation, and logical thinking to build predictive models. Hard skills include Python (TensorFlow, PyTorch), statistical modeling, data preprocessing, and model deployment.",
    "softSkills": ["mathematical intuition", "experimentation", "logical thinking"],
    "hardSkills": ["Python", "TensorFlow/PyTorch", "statistical modeling", "model deployment"],
    "resources": [
      {
        "name": "Towards Data Science",
        "url": "https://towardsdatascience.com"
      },
      {
        "name": "Kaggle Competitions",
        "url": "https://www.kaggle.com/competitions"
      },
      {
        "name": "Deep Learning.ai",
        "url": "https://www.deeplearning.ai/"
      },
      {
        "name": "Google AI Blog",
        "url": "https://ai.googleblog.com/"
      }
    ]
  },
  {
    "id": 54,
    "title": "Mobile App Developer (iOS/Android)",
    "category": "Technology & Digital",
    "description": "Requires attention to detail, debugging skills, and adaptability to platform changes. Hard skills include Swift/Kotlin, native SDKs (iOS/Android), API integration, and performance optimization.",
    "softSkills": ["attention to detail", "debugging", "adaptability"],
    "hardSkills": ["Swift/Kotlin", "Native SDKs", "API integration", "performance optimization"],
    "resources": [
      {
        "name": "Apple Developer Documentation",
        "url": "https://developer.apple.com/documentation/"
      },
      {
        "name": "Android Developers",
        "url": "https://developer.android.com/"
      },
      {
        "name": "Ray Wenderlich",
        "url": "https://www.raywenderlich.com/"
      },
      {
        "name": "Stack Overflow (Mobile Tags)",
        "url": "https://stackoverflow.com/tags/ios"
      }
    ]
  },
  {
    "id": 55,
    "title": "Database Administrator (DBA)",
    "category": "Technology & Digital",
    "description": "Attention to detail, security focus, and performance optimization skills are vital. Hard skills include SQL, database design, backup/recovery strategies, and familiarity with systems like MySQL, PostgreSQL, or Oracle.",
    "softSkills": ["attention to detail", "security focus", "performance optimization"],
    "hardSkills": ["SQL", "database design", "backup/recovery", "MySQL/PostgreSQL/Oracle"],
    "resources": [
      {
        "name": "SQLZoo (Practice SQL)",
        "url": "https://sqlzoo.net"
      },
      {
        "name": "DBA Stack Exchange",
        "url": "https://dba.stackexchange.com"
      },
      {
        "name": "Oracle Documentation",
        "url": "https://docs.oracle.com/"
      },
      {
        "name": "PostgreSQL Documentation",
        "url": "https://www.postgresql.org/docs/"
      }
    ]
  },
  {
    "id": 56,
    "title": "UX Writer / Content Strategist",
    "category": "Writing, Media & Communication",
    "description": "Empathy, language precision, and collaboration are essential for designing clear in-product communication. Hard skills include content design principles, style guides, information architecture, and user journey mapping.",
    "softSkills": ["empathy", "language precision", "collaboration"],
    "hardSkills": ["content design", "style guides", "information architecture", "user journey mapping"],
    "resources": [
      {
        "name": "UX Writing Hub",
        "url": "https://uxwritinghub.com"
      },
      {
        "name": "Content Strategy Alliance",
        "url": "https://contentstrategyalliance.com"
      },
      {
        "name": "Google UX Writing",
        "url": "https://developers.google.com/style/ux-writing"
      },
      {
        "name": "Writers for Design",
        "url": "https://writersfordesign.com/"
      }
    ]
  },
  {
    "id": 57,
    "title": "Medical Writer",
    "category": "Writing, Media & Communication",
    "description": "They rely on scientific literacy, attention to detail, and clarity to communicate complex medical information. Hard skills include knowledge of clinical trial documentation, regulatory guidelines, and scientific editing.",
    "softSkills": ["scientific literacy", "attention to detail", "clarity"],
    "hardSkills": ["clinical documentation", "regulatory guidelines", "scientific editing"],
    "resources": [
      {
        "name": "American Medical Writers Association (AMWA)",
        "url": "https://www.amwa.org"
      },
      {
        "name": "The Write Stuff",
        "url": "https://www.raps.org/the-write-stuff"
      },
      {
        "name": "International Committee of Medical Journal Editors (ICMJE)",
        "url": "http://www.icmje.org/"
      },
      {
        "name": "European Medical Writers Association (EMWA)",
        "url": "https://www.emwa.org/"
      }
    ]
  },
  {
    "id": 58,
    "title": "Proofreader / Quality Assurance",
    "category": "Writing, Media & Communication",
    "description": "Exceptional focus, patience, and adherence to style are critical for flawless final products. Hard skills include deep grammar knowledge, style guide mastery (e.g., AP, Chicago), and track changes/annotation tools.",
    "softSkills": ["exceptional focus", "patience", "adherence to style"],
    "hardSkills": ["grammar mastery", "style guide knowledge", "track changes", "annotation tools"],
    "resources": [
      {
        "name": "Grammarly Handbook",
        "url": "https://www.grammarly.com/handbook"
      },
      {
        "name": "The Chicago Manual of Style Online",
        "url": "https://www.chicagomanualofstyle.org/book/ed17/frontmatter/toc.html"
      },
      {
        "name": "Editorial Freelancers Association",
        "url": "https://www.the-efa.org/resources/proofreading-editing-resources/"
      },
      {
        "name": "Merriam-Webster",
        "url": "https://www.merriam-webster.com/"
      }
    ]
  },
  {
    "id": 59,
    "title": "Cinematographer / Director of Photography (DP)",
    "category": "Creative & Design",
    "description": "They rely on visual storytelling, technical leadership, and strong artistic vision. Hard skills include advanced camera operation, lighting design, lens knowledge, and color theory/grading.",
    "softSkills": ["visual storytelling", "technical leadership", "artistic vision"],
    "hardSkills": ["camera operation", "lighting design", "lens knowledge", "color grading"],
    "resources": [
      {
        "name": "American Cinematographer Magazine",
        "url": "https://ascmag.com"
      },
      {
        "name": "PremiumBeat Cinematography",
        "url": "https://www.premiumbeat.com/blog/category/cinematography/"
      },
      {
        "name": "The Film Look (YouTube)",
        "url": "https://www.youtube.com/@TheFilmLook"
      },
      {
        "name": "The Cinematography Database",
        "url": "https://www.cinematographydatabase.com/"
      }
    ]
  },
  {
    "id": 60,
    "title": "Set Designer / Art Director (Film/Theatre)",
    "category": "Creative & Design",
    "description": "Requires spatial creativity, budget management, and collaborative communication to realize a visual mood. Hard skills involve drafting, scale modeling, material sourcing, and interpreting a script's visual needs.",
    "softSkills": ["spatial creativity", "budget management", "collaborative communication"],
    "hardSkills": ["drafting", "scale modeling", "material sourcing", "script interpretation"],
    "resources": [
      {
        "name": "Set Decorators Society of America (SDSA)",
        "url": "https://www.setdecorators.org"
      },
      {
        "name": "Art Directors Guild (ADG)",
        "url": "https://adg.org"
      },
      {
        "name": "Design Scene",
        "url": "https://www.designscene.net/category/set-design"
      },
      {
        "name": "Stage Directors and Choreographers Society (SDC)",
        "url": "https://sdcweb.org/"
      }
    ]
  },
  {
    "id": 61,
    "title": "Industrial Designer",
    "category": "Creative & Design",
    "description": "A blend of aesthetic sense, technical functionality, and user empathy guides the design of manufactured products. Hard skills include sketching, 3D CAD modeling, prototyping, and understanding manufacturing processes.",
    "softSkills": ["aesthetic sense", "technical functionality", "user empathy"],
    "hardSkills": ["sketching", "3D CAD modeling", "prototyping", "manufacturing processes"],
    "resources": [
      {
        "name": "Industrial Designers Society of America (IDSA)",
        "url": "https://www.idsa.org"
      },
      {
        "name": "Core77",
        "url": "https://www.core77.com"
      },
      {
        "name": "Yanko Design",
        "url": "https://www.yankodesign.com/"
      },
      {
        "name": "Solidworks Community",
        "url": "https://www.solidworks.com/community"
      }
    ]
  },
  {
    "id": 62,
    "title": "Sound Designer / Audio Engineer",
    "category": "Creative & Design",
    "description": "They need critical listening, attention to detail, and creative problem-solving to craft a soundscape. Hard skills include mixing, mastering, Pro Tools/Logic Pro, microphone techniques, and acoustics.",
    "softSkills": ["critical listening", "attention to detail", "creative problem solving"],
    "hardSkills": ["mixing/mastering", "Pro Tools/Logic Pro", "microphone techniques", "acoustics"],
    "resources": [
      {
        "name": "Audio Engineering Society (AES)",
        "url": "https://www.aes.org"
      },
      {
        "name": "Sound on Sound",
        "url": "https://www.soundonsound.com"
      },
      {
        "name": "Gearspace (Recording Forum)",
        "url": "https://gearspace.com/"
      },
      {
        "name": "Berklee Online (Audio Production Courses)",
        "url": "https://online.berklee.edu/areas-of-study/audio-production"
      }
    ]
  },
  {
    "id": 63,
    "title": "Civil Engineer",
    "category": "Science & Engineering",
    "description": "Responsibility, structural thinking, and adherence to codes are key for designing infrastructure. Hard skills include CAD software, structural analysis, project management, and knowledge of materials and building codes.",
    "softSkills": ["responsibility", "structural thinking", "adherence to codes"],
    "hardSkills": ["CAD software", "structural analysis", "materials science", "building codes"],
    "resources": [
      {
        "name": "American Society of Civil Engineers (ASCE)",
        "url": "https://www.asce.org"
      },
      {
        "name": "Civil Engineering Magazine",
        "url": "https://www.asce.org/publications-periodicals-magazines-journals/civil-engineering-magazine"
      },
      {
        "name": "The Constructor",
        "url": "https://theconstructor.org/"
      },
      {
        "name": "Transportation Research Board (TRB)",
        "url": "https://www.trb.org/"
      }
    ]
  },
  {
    "id": 64,
    "title": "Biomedical Engineer",
    "category": "Science & Engineering",
    "description": "Requires interdisciplinary curiosity, ethical consideration, and systematic problem-solving to merge medicine and engineering. Hard skills include signal processing, biomaterials, medical device design, and programming (MATLAB/Python).",
    "softSkills": ["interdisciplinary curiosity", "ethical consideration", "systematic problem solving"],
    "hardSkills": ["signal processing", "biomaterials", "medical device design", "MATLAB/Python"],
    "resources": [
      {
        "name": "Biomedical Engineering Society (BMES)",
        "url": "https://www.bmes.org"
      },
      {
        "name": "IEEE Engineering in Medicine and Biology Society",
        "url": "https://www.embs.org"
      },
      {
        "name": "Medgadget",
        "url": "https://www.medgadget.com/"
      },
      {
        "name": "Nature Biomedical Engineering (Journal)",
        "url": "https://www.nature.com/natbiomedeng/"
      }
    ]
  },
  {
    "id": 65,
    "title": "Environmental Scientist",
    "category": "Science & Engineering",
    "description": "They use critical thinking, field observation, and data analysis to study environmental issues. Hard skills involve GIS mapping, sampling techniques, statistical software, and knowledge of ecology and regulatory compliance.",
    "softSkills": ["critical thinking", "field observation", "data analysis"],
    "hardSkills": ["GIS mapping", "sampling techniques", "statistical software", "regulatory compliance"],
    "resources": [
      {
        "name": "Environmental Protection Agency (EPA)",
        "url": "https://www.epa.gov"
      },
      {
        "name": "National Environmental Education Foundation (NEEF)",
        "url": "https://www.neefusa.org"
      },
      {
        "name": "Earth Observatory (NASA)",
        "url": "https://earthobservatory.nasa.gov/"
      },
      {
        "name": "The Wildlife Society",
        "url": "https://wildlife.org/"
      }
    ]
  },
  {
    "id": 66,
    "title": "Chemist",
    "category": "Science & Engineering",
    "description": "Precision, laboratory safety, and hypothesis testing are crucial for chemical research. Hard skills include instrumental analysis (e.g., Spectroscopy), organic synthesis, chemical safety, and data interpretation.",
    "softSkills": ["precision", "laboratory safety", "hypothesis testing"],
    "hardSkills": ["spectroscopy", "organic synthesis", "chemical safety", "data interpretation"],
    "resources": [
      {
        "name": "American Chemical Society (ACS)",
        "url": "https://www.acs.org"
      },
      {
        "name": "Royal Society of Chemistry",
        "url": "https://www.rsc.org"
      },
      {
        "name": "Chemistry World",
        "url": "https://www.chemistryworld.com/"
      },
      {
        "name": "ChemTube3D (Visualization)",
        "url": "http://www.chemtube3d.com/"
      }
    ]
  },
  {
    "id": 67,
    "title": "Aerospace Engineer",
    "category": "Science & Engineering",
    "description": "They require systematic problem-solving, attention to mission-critical detail, and a focus on optimization. Hard skills include fluid dynamics, structural mechanics, CAD/CFD software, and flight control systems.",
    "softSkills": ["systematic problem solving", "mission-critical detail", "optimization focus"],
    "hardSkills": ["fluid dynamics", "structural mechanics", "CAD/CFD", "flight control systems"],
    "resources": [
      {
        "name": "NASA Technical Reports Server",
        "url": "https://ntrs.nasa.gov"
      },
      {
        "name": "American Institute of Aeronautics and Astronautics (AIAA)",
        "url": "https://www.aiaa.org"
      },
      {
        "name": "Space.com",
        "url": "https://www.space.com/"
      },
      {
        "name": "Engineering.com (Aerospace Section)",
        "url": "https://www.engineering.com/aerospace"
      }
    ]
  },
  {
    "id": 68,
    "title": "Physician Assistant (PA)",
    "category": "Healthcare & Wellness",
    "description": "They must have diagnostic reasoning, patient empathy, and effective team communication to provide medical care. Hard skills include medical history taking, physical examination, diagnostic test interpretation, and pharmacology.",
    "softSkills": ["diagnostic reasoning", "patient empathy", "team communication"],
    "hardSkills": ["medical history taking", "physical examination", "diagnostic test interpretation", "pharmacology"],
    "resources": [
      {
        "name": "American Academy of Physician Assistants (AAPA)",
        "url": "https://www.aapa.org"
      },
      {
        "name": "The New England Journal of Medicine (NEJM)",
        "url": "https://www.nejm.org"
      },
      {
        "name": "UpToDate (Clinical Resource)",
        "url": "https://www.uptodate.com/home"
      },
      {
        "name": "Journal of the American Academy of PAs (JAAPA)",
        "url": "https://journals.lww.com/jaapa/"
      }
    ]
  },
  {
    "id": 69,
    "title": "Physical Therapist (PT)",
    "category": "Healthcare & Wellness",
    "description": "Patience, motivational skills, and anatomical knowledge are crucial for patient rehabilitation. Hard skills include therapeutic exercise prescription, manual therapy, gait analysis, and electrotherapy.",
    "softSkills": ["patience", "motivational skills", "anatomical knowledge"],
    "hardSkills": ["therapeutic exercise", "manual therapy", "gait analysis", "electrotherapy"],
    "resources": [
      {
        "name": "American Physical Therapy Association (APTA)",
        "url": "https://www.apta.org"
      },
      {
        "name": "Physiopedia",
        "url": "https://www.physio-pedia.com"
      },
      {
        "name": "Journal of Orthopaedic & Sports Physical Therapy (JOSPT)",
        "url": "https://www.jospt.org/"
      },
      {
        "name": "Cochrane Rehabilitation",
        "url": "https://rehabilitation.cochrane.org/"
      }
    ]
  },
  {
    "id": 70,
    "title": "Dietitian / Nutritionist",
    "category": "Healthcare & Wellness",
    "description": "Requires strong communication, client empathy, and evidence-based decision-making. Hard skills include nutritional assessment, meal planning, biochemistry, and interpreting dietary guidelines.",
    "softSkills": ["communication", "client empathy", "evidence-based decision-making"],
    "hardSkills": ["nutritional assessment", "meal planning", "biochemistry", "dietary guidelines"],
    "resources": [
      {
        "name": "Academy of Nutrition and Dietetics",
        "url": "https://www.eatright.org"
      },
      {
        "name": "NutritionFacts.org",
        "url": "https://nutritionfacts.org"
      },
      {
        "name": "NIH Office of Dietary Supplements",
        "url": "https://ods.od.nih.gov/"
      },
      {
        "name": "The American Journal of Clinical Nutrition (AJCN)",
        "url": "https://academic.oup.com/ajcn"
      }
    ]
  },
  {
    "id": 71,
    "title": "Mental Health Counselor / Therapist",
    "category": "Healthcare & Wellness",
    "description": "Active listening, non-judgmental empathy, and ethical confidentiality are paramount. Hard skills include specific therapeutic modalities (CBT, DBT), crisis intervention, and diagnostic assessment (DSM-5).",
    "softSkills": ["active listening", "non-judgmental empathy", "confidentiality"],
    "hardSkills": ["therapeutic modalities (CBT/DBT)", "crisis intervention", "diagnostic assessment (DSM-5)"],
    "resources": [
      {
        "name": "American Counseling Association (ACA)",
        "url": "https://www.counseling.org"
      },
      {
        "name": "National Alliance on Mental Illness (NAMI)",
        "url": "https://www.nami.org"
      },
      {
        "name": "Psychology Today",
        "url": "https://www.psychologytoday.com/"
      },
      {
        "name": "National Institute of Mental Health (NIMH)",
        "url": "https://www.nimh.nih.gov/"
      }
    ]
  },
  {
    "id": 72,
    "title": "Pharmacist",
    "category": "Healthcare & Wellness",
    "description": "Requires precision, attention to safety, and patient communication for medication management. Hard skills include pharmacology, drug interaction analysis, dispensing procedures, and patient counseling.",
    "softSkills": ["precision", "attention to safety", "patient communication"],
    "hardSkills": ["pharmacology", "drug interaction analysis", "dispensing procedures", "patient counseling"],
    "resources": [
      {
        "name": "American Pharmacists Association (APhA)",
        "url": "https://www.pharmacist.com"
      },
      {
        "name": "Drug Information Portal (NIH)",
        "url": "https://druginfo.nlm.nih.gov/"
      },
      {
        "name": "RxList (Drug Information)",
        "url": "https://www.rxlist.com/"
      },
      {
        "name": "The Pharmacist's Letter",
        "url": "https://www.pharmacistsletter.com/"
      }
    ]
  },
  {
    "id": 73,
    "title": "Teacher (K-12)",
    "category": "Education & Community Service",
    "description": "Patience, classroom management, and adaptive teaching styles are essential for engaging students. Hard skills include curriculum design, pedagogical strategies, assessment techniques, and educational technology (EdTech).",
    "softSkills": ["patience", "classroom management", "adaptive teaching"],
    "hardSkills": ["curriculum design", "pedagogical strategies", "assessment techniques", "EdTech"],
    "resources": [
      {
        "name": "Edutopia",
        "url": "https://www.edutopia.org"
      },
      {
        "name": "National Education Association (NEA)",
        "url": "https://www.nea.org"
      },
      {
        "name": "Teach Starter",
        "url": "https://www.teachstarter.com/"
      },
      {
        "name": "Khan Academy (Educational Content)",
        "url": "https://www.khanacademy.org/"
      }
    ]
  },
  {
    "id": 74,
    "title": "Librarian / Archivist",
    "category": "Education & Community Service",
    "description": "They need strong organizational skills, research aptitude, and customer service to manage information. Hard skills include cataloging systems (Dewey/LC), digital preservation, database management, and information literacy instruction.",
    "softSkills": ["organization", "research aptitude", "customer service"],
    "hardSkills": ["cataloging systems", "digital preservation", "database management", "information literacy"],
    "resources": [
      {
        "name": "American Library Association (ALA)",
        "url": "https://www.ala.org"
      },
      {
        "name": "Society of American Archivists (SAA)",
        "url": "https://www2.archivists.org"
      },
      {
        "name": "Library Journal",
        "url": "https://www.libraryjournal.com/"
      },
      {
        "name": "International Federation of Library Associations (IFLA)",
        "url": "https://www.ifla.org/"
      }
    ]
  },
  {
    "id": 75,
    "title": "Social Worker",
    "category": "Education & Community Service",
    "description": "High empathy, non-judgmental attitude, and strong boundaries are vital for supporting clients. Hard skills include case management, crisis intervention, resource navigation, and understanding social policy/law.",
    "softSkills": ["empathy", "non-judgmental attitude", "strong boundaries"],
    "hardSkills": ["case management", "crisis intervention", "resource navigation", "social policy/law"],
    "resources": [
      {
        "name": "National Association of Social Workers (NASW)",
        "url": "https://www.socialworkers.org"
      },
      {
        "name": "Social Work Today",
        "url": "https://www.socialworktoday.com"
      },
      {
        "name": "The New Social Worker",
        "url": "https://www.socialworker.com/"
      },
      {
        "name": "Council on Social Work Education (CSWE)",
        "url": "https://www.cswe.org/"
      }
    ]
  },
  {
    "id": 76,
    "title": "Museum Curator / Collections Manager",
    "category": "Education & Community Service",
    "description": "Requires historical/artistic knowledge, meticulous organization, and public speaking for exhibits. Hard skills include conservation methods, exhibition design, collections database management, and grant writing.",
    "softSkills": ["historical/artistic knowledge", "meticulous organization", "public speaking"],
    "hardSkills": ["conservation methods", "exhibition design", "collections database management", "grant writing"],
    "resources": [
      {
        "name": "American Alliance of Museums (AAM)",
        "url": "https://www.aam-us.org"
      },
      {
        "name": "Museums Association",
        "url": "https://www.museumsassociation.org"
      },
      {
        "name": "International Council of Museums (ICOM)",
        "url": "https://icom.museum/"
      },
      {
        "name": "National Endowment for the Humanities (NEH) Grants",
        "url": "https://www.neh.gov/grants"
      }
    ]
  },
  {
    "id": 77,
    "title": "Firefighter",
    "category": "Emergency & Public Service",
    "description": "They need quick decision-making, exceptional teamwork, and high physical stamina in crisis situations. Hard skills include fire suppression, first aid/EMT, search and rescue, and hazardous material (HazMat) handling.",
    "softSkills": ["quick decision-making", "exceptional teamwork", "physical stamina"],
    "hardSkills": ["fire suppression", "first aid/EMT", "search and rescue", "HazMat handling"],
    "resources": [
      {
        "name": "National Fire Protection Association (NFPA)",
        "url": "https://www.nfpa.org"
      },
      {
        "name": "International Association of Fire Fighters (IAFF)",
        "url": "https://www.iaff.org"
      },
      {
        "name": "Firehouse Magazine",
        "url": "https://www.firehouse.com/"
      },
      {
        "name": "U.S. Fire Administration",
        "url": "https://www.usfa.fema.gov/"
      }
    ]
  },
  {
    "id": 78,
    "title": "Police Officer / Law Enforcement",
    "category": "Emergency & Public Service",
    "description": "Requires integrity, conflict resolution, and strong ethical reasoning to maintain public safety. Hard skills include knowledge of criminal law, patrol procedures, defensive tactics, and report writing.",
    "softSkills": ["integrity", "conflict resolution", "ethical reasoning"],
    "hardSkills": ["criminal law knowledge", "patrol procedures", "defensive tactics", "report writing"],
    "resources": [
      {
        "name": "International Association of Chiefs of Police (IACP)",
        "url": "https://www.theiacp.org"
      },
      {
        "name": "Police One",
        "url": "https://www.policeone.com"
      },
      {
        "name": "Bureau of Justice Statistics",
        "url": "https://bjs.ojp.gov/"
      },
      {
        "name": "National Criminal Justice Reference Service (NCJRS)",
        "url": "https://www.ncjrs.gov/"
      }
    ]
  },
  {
    "id": 79,
    "title": "Emergency Medical Technician (EMT) / Paramedic",
    "category": "Emergency & Public Service",
    "description": "Calm under pressure, rapid critical thinking, and patient empathy are essential. Hard skills include advanced life support (ALS), trauma assessment, CPR, and use of emergency medical equipment.",
    "softSkills": ["calm under pressure", "rapid critical thinking", "patient empathy"],
    "hardSkills": ["advanced life support (ALS)", "trauma assessment", "CPR", "emergency medical equipment"],
    "resources": [
      {
        "name": "National Association of Emergency Medical Technicians (NAEMT)",
        "url": "https://www.naemt.org"
      },
      {
        "name": "Journal of Emergency Medical Services (JEMS)",
        "url": "https://www.jems.com"
      },
      {
        "name": "American Heart Association (AHA)",
        "url": "https://www.heart.org/"
      },
      {
        "name": "National Registry of EMTs (NREMT)",
        "url": "https://www.nremt.org/"
      }
    ]
  },
  {
    "id": 80,
    "title": "Pilot (Commercial/Airlines)",
    "category": "Emergency & Public Service",
    "description": "They need disciplined adherence to protocol, quick problem-solving, and continuous risk assessment. Hard skills include aircraft systems knowledge, navigation, meteorology, and FAA/international flight regulations.",
    "softSkills": ["disciplined adherence to protocol", "quick problem solving", "risk assessment"],
    "hardSkills": ["aircraft systems", "navigation", "meteorology", "FAA/Flight regulations"],
    "resources": [
      {
        "name": "Federal Aviation Administration (FAA)",
        "url": "https://www.faa.gov"
      },
      {
        "name": "Aircraft Owners and Pilots Association (AOPA)",
        "url": "https://www.aopa.org"
      },
      {
        "name": "Boldmethod (Aviation Training)",
        "url": "https://boldmethod.com/"
      },
      {
        "name": "Airliners.net (Aviation Forum)",
        "url": "https://www.airliners.net/forum/viewforum.php?f=3"
      }
    ]
  },
  {
    "id": 81,
    "title": "Paralegal / Legal Assistant",
    "category": "Law & Public Policy",
    "description": "Requires strong attention to detail, organization, and discretion with sensitive information. Hard skills include legal research (Westlaw/LexisNexis), document drafting, case management, and legal terminology.",
    "softSkills": ["attention to detail", "organization", "discretion"],
    "hardSkills": ["legal research", "document drafting", "case management", "legal terminology"],
    "resources": [
      {
        "name": "National Federation of Paralegal Associations (NFPA)",
        "url": "https://www.paralegals.org"
      },
      {
        "name": "LexisNexis",
        "url": "https://www.lexisnexis.com"
      },
      {
        "name": "American Bar Association (ABA) Resources",
        "url": "https://www.americanbar.org/groups/paralegals/"
      },
      {
        "name": "Westlaw",
        "url": "https://www.westlaw.com/"
      }
    ]
  },
  {
    "id": 82,
    "title": "Policy Analyst",
    "category": "Law & Public Policy",
    "description": "They rely on critical analysis, quantitative research, and clear, non-partisan communication to inform government action. Hard skills include statistical software (SPSS/R), cost-benefit analysis, report writing, and public finance.",
    "softSkills": ["critical analysis", "quantitative research", "non-partisan communication"],
    "hardSkills": ["statistical software (SPSS/R)", "cost-benefit analysis", "report writing", "public finance"],
    "resources": [
      {
        "name": "Brookings Institution",
        "url": "https://www.brookings.edu"
      },
      {
        "name": "RAND Corporation",
        "url": "https://www.rand.org"
      },
      {
        "name": "Journal of Policy Analysis and Management (JPAM)",
        "url": "https://onlinelibrary.wiley.com/journal/15206688"
      },
      {
        "name": "Council on Foreign Relations (CFR)",
        "url": "https://www.cfr.org/"
      }
    ]
  },
  {
    "id": 83,
    "title": "Lobbyist / Advocate",
    "category": "Law & Public Policy",
    "description": "Exceptional networking, persuasive communication, and strategic planning are essential to influence legislation. Hard skills include legislative tracking, public speaking, campaign finance, and coalition building.",
    "softSkills": ["exceptional networking", "persuasive communication", "strategic planning"],
    "hardSkills": ["legislative tracking", "public speaking", "campaign finance", "coalition building"],
    "resources": [
      {
        "name": "OpenSecrets (Campaign Finance)",
        "url": "https://www.opensecrets.org"
      },
      {
        "name": "The Hill",
        "url": "https://thehill.com/category/lobbying/"
      },
      {
        "name": "National Conference of State Legislatures (NCSL)",
        "url": "https://www.ncsl.org/"
      },
      {
        "name": "Government Relations Industry Professionals (GRIP)",
        "url": "https://www.gripinfo.org/"
      }
    ]
  },
  {
    "id": 84,
    "title": "Urban Planner",
    "category": "Law & Public Policy",
    "description": "Requires systems thinking, negotiation skills, and community engagement to develop public spaces. Hard skills include GIS mapping, zoning codes, demographic analysis, and transportation modeling.",
    "softSkills": ["systems thinking", "negotiation skills", "community engagement"],
    "hardSkills": ["GIS mapping", "zoning codes", "demographic analysis", "transportation modeling"],
    "resources": [
      {
        "name": "American Planning Association (APA)",
        "url": "https://www.planning.org"
      },
      {
        "name": "Planetizen",
        "url": "https://www.planetizen.com"
      },
      {
        "name": "Urban Land Institute (ULI)",
        "url": "https://uli.org/"
      },
      {
        "name": "ESRI (GIS Software)",
        "url": "https://www.esri.com/"
      }
    ]
  },
  {
    "id": 85,
    "title": "Judge / Magistrate",
    "category": "Law & Public Policy",
    "description": "Requires objectivity, moral courage, and precise legal reasoning to apply the law fairly. Hard skills include deep legal knowledge, courtroom procedure, evidence analysis, and clear judicial writing.",
    "softSkills": ["objectivity", "moral courage", "legal reasoning"],
    "hardSkills": ["legal knowledge", "courtroom procedure", "evidence analysis", "judicial writing"],
    "resources": [
      {
        "name": "Federal Judicial Center (FJC)",
        "url": "https://www.fjc.gov"
      },
      {
        "name": "The American Judicature Society",
        "url": "https://www.ajs.org"
      },
      {
        "name": "Law.com",
        "url": "https://www.law.com"
      },
      {
        "name": "ABA Judicial Division",
        "url": "https://www.americanbar.org/groups/judicial/"
      }
    ]
  },
  {
    "id": 86,
    "title": "Financial Advisor / Planner",
    "category": "Financial Services",
    "description": "High integrity, client-facing communication, and long-term strategic thinking are key. Hard skills include retirement planning, investment analysis, tax planning, and regulatory compliance (e.g., FINRA).",
    "softSkills": ["integrity", "client-facing communication", "strategic thinking"],
    "hardSkills": ["retirement planning", "investment analysis", "tax planning", "FINRA/Regulatory compliance"],
    "resources": [
      {
        "name": "Certified Financial Planner Board of Standards (CFP)",
        "url": "https://www.cfp.net"
      },
      {
        "name": "Investopedia Financial Advisor Corner",
        "url": "https://www.investopedia.com/financial-advisor/"
      },
      {
        "name": "The Wall Street Journal (Money Section)",
        "url": "https://www.wsj.com/personal-finance"
      },
      {
        "name": "National Association of Personal Financial Advisors (NAPFA)",
        "url": "https://www.napfa.org/"
      }
    ]
  },
  {
    "id": 87,
    "title": "Investment Banker",
    "category": "Financial Services",
    "description": "Requires intensive work ethic, quantitative analysis, and presentation skills for high-stakes deals. Hard skills include M&A (Mergers & Acquisitions), leveraged buyouts (LBOs), valuation modeling, and capital markets knowledge.",
    "softSkills": ["intensive work ethic", "quantitative analysis", "presentation skills"],
    "hardSkills": ["M&A/LBOs", "valuation modeling", "capital markets", "Excel proficiency"],
    "resources": [
      {
        "name": "Wall Street Prep",
        "url": "https://www.wallstreetprep.com"
      },
      {
        "name": "Corporate Finance Institute (CFI)",
        "url": "https://corporatefinanceinstitute.com"
      },
      {
        "name": "Bloomberg",
        "url": "https://www.bloomberg.com/professional"
      },
      {
        "name": "PitchBook (Private Equity/Venture Capital Data)",
        "url": "https://pitchbook.com/"
      }
    ]
  },
  {
    "id": 88,
    "title": "Auditor (Financial/IT)",
    "category": "Financial Services",
    "description": "They must have professional skepticism, attention to detail, and integrity to assess financial statements or systems. Hard skills include GAAP/IFRS, control testing, data analysis software (ACL), and regulatory reporting (SOX/GDPR).",
    "softSkills": ["professional skepticism", "attention to detail", "integrity"],
    "hardSkills": ["GAAP/IFRS", "control testing", "data analysis software", "regulatory reporting"],
    "resources": [
      {
        "name": "PwC Global Reports",
        "url": "https://www.pwc.com/gx/en/publications.html"
      },
      {
        "name": "AICPA (Auditing Standards)",
        "url": "https://www.aicpa.org/content/aicpa/en/about/history/aicpa-statements-on-auditing-standards.html"
      },
      {
        "name": "ISACA (IT Audit/Governance)",
        "url": "https://www.isaca.org/"
      },
      {
        "name": "The IIA (Internal Audit)",
        "url": "https://www.theiia.org/"
      }
    ]
  },
  {
    "id": 89,
    "title": "Venture Capital Analyst",
    "category": "Financial Services",
    "description": "Requires high curiosity, trend spotting, and pattern recognition to identify high-growth startups. Hard skills include financial modeling for startups, due diligence, pitch deck evaluation, and market sizing.",
    "softSkills": ["high curiosity", "trend spotting", "pattern recognition"],
    "hardSkills": ["startup financial modeling", "due diligence", "pitch deck evaluation", "market sizing"],
    "resources": [
      {
        "name": "TechCrunch",
        "url": "https://techcrunch.com"
      },
      {
        "name": "CB Insights",
        "url": "https://www.cbinsights.com"
      },
      {
        "name": "National Venture Capital Association (NVCA)",
        "url": "https://nvca.org/"
      },
      {
        "name": "Andreessen Horowitz (a16z) Blog",
        "url": "https://a16z.com/category/future/"
      }
    ]
  },
  {
    "id": 90,
    "title": "Insurance Underwriter",
    "category": "Financial Services",
    "description": "They need meticulous risk assessment, analytical reasoning, and clear communication to determine coverage. Hard skills include actuarial science principles, pricing models, contract drafting, and regulatory compliance.",
    "softSkills": ["meticulous risk assessment", "analytical reasoning", "clear communication"],
    "hardSkills": ["actuarial science principles", "pricing models", "contract drafting", "regulatory compliance"],
    "resources": [
      {
        "name": "The Institutes Risk and Insurance",
        "url": "https://www.theinstitutes.org"
      },
      {
        "name": "Insurance Journal",
        "url": "https://www.insurancejournal.com"
      },
      {
        "name": "Casualty Actuarial Society (CAS)",
        "url": "https://www.casact.org/"
      },
      {
        "name": "National Association of Insurance Commissioners (NAIC)",
        "url": "https://www.naic.org/"
      }
    ]
  },
  {
    "id": 91,
    "title": "Barista",
    "category": "Food & Hospitality",
    "description": "Customer focus, speed, and positive attitude are essential for a great coffee experience. Hard skills include espresso machine operation, latte art, coffee bean knowledge, and food safety standards.",
    "softSkills": ["customer focus", "speed", "positive attitude"],
    "hardSkills": ["espresso machine operation", "latte art", "coffee knowledge", "food safety"],
    "resources": [
      {
        "name": "Specialty Coffee Association (SCA)",
        "url": "https://sca.coffee"
      },
      {
        "name": "Barista Magazine",
        "url": "https://www.baristamagazine.com"
      },
      {
        "name": "Perfect Daily Grind",
        "url": "https://www.perfectdailygrind.com/"
      },
      {
        "name": "Coffee Geek (Forum)",
        "url": "https://www.coffeegeek.com/forums/"
      }
    ]
  },
  {
    "id": 92,
    "title": "Hotel Manager",
    "category": "Food & Hospitality",
    "description": "Requires strong leadership, multitasking, and problem-solving to oversee operations. Hard skills include property management systems (PMS), revenue management, budgeting, and staff scheduling.",
    "softSkills": ["leadership", "multitasking", "problem solving"],
    "hardSkills": ["property management systems (PMS)", "revenue management", "budgeting", "staff scheduling"],
    "resources": [
      {
        "name": "American Hotel & Lodging Association (AHLA)",
        "url": "https://www.ahla.com"
      },
      {
        "name": "Hotel Management Magazine",
        "url": "https://www.hotelmanagement.net"
      },
      {
        "name": "Hospitality Net",
        "url": "https://www.hospitalitynet.org/"
      },
      {
        "name": "Cornell University School of Hotel Administration (SHA) Resources",
        "url": "https://sha.cornell.edu/"
      }
    ]
  },
  {
    "id": 93,
    "title": "Sommelier / Wine Expert",
    "category": "Food & Hospitality",
    "description": "They must have a refined palate, exceptional memory, and client communication skills. Hard skills include blind tasting, wine regions knowledge, cellar management, and food pairing principles.",
    "softSkills": ["refined palate", "exceptional memory", "client communication"],
    "hardSkills": ["blind tasting", "wine regions knowledge", "cellar management", "food pairing"],
    "resources": [
      {
        "name": "Court of Master Sommeliers",
        "url": "https://www.mastersommeliers.org"
      },
      {
        "name": "Wine Enthusiast Magazine",
        "url": "https://www.winemag.com"
      },
      {
        "name": "Wine Spectator",
        "url": "https://www.winespectator.com/"
      },
      {
        "name": "GuildSomm",
        "url": "https://www.guildsomm.com/"
      }
    ]
  },
  {
    "id": 94,
    "title": "Event Planner / Coordinator",
    "category": "Food & Hospitality",
    "description": "Strong organization, stress management, and meticulous attention to detail ensure flawless execution. Hard skills include vendor negotiation, budgeting, timeline creation (Gantt charts), and venue logistics.",
    "softSkills": ["organization", "stress management", "attention to detail"],
    "hardSkills": ["vendor negotiation", "budgeting", "timeline creation", "venue logistics"],
    "resources": [
      {
        "name": "International Live Events Association (ILEA)",
        "url": "https://www.ileahub.com"
      },
      {
        "name": "Special Events Magazine",
        "url": "https://www.specialevents.com"
      },
      {
        "name": "Cvent (Event Technology)",
        "url": "https://www.cvent.com/"
      },
      {
        "name": "Event Manager Blog (Skift Meetings)",
        "url": "https://www.skift.com/meetings"
      }
    ]
  },
  {
    "id": 95,
    "title": "Travel Agent / Advisor",
    "category": "Food & Hospitality",
    "description": "Requires strong customer service, geographical knowledge, and attention to complex booking details. Hard skills include global distribution systems (GDS), itinerary planning, visa/passport requirements, and sales/up-selling.",
    "softSkills": ["customer service", "geographical knowledge", "attention to detail"],
    "hardSkills": ["GDS systems", "itinerary planning", "visa/passport requirements", "sales/up-selling"],
    "resources": [
      {
        "name": "American Society of Travel Advisors (ASTA)",
        "url": "https://www.asta.org"
      },
      {
        "name": "Travel Weekly",
        "url": "https://www.travelweekly.com"
      },
      {
        "name": "Skift (Travel Industry News)",
        "url": "https://skift.com/"
      },
      {
        "name": "IATAN (Travel Agent Accreditation)",
        "url": "https://www.iatan.org/"
      }
    ]
  },
  {
    "id": 96,
    "title": "Machinist / CNC Operator",
    "category": "Hands-On & Craft-Based",
    "description": "Precision, spatial visualization, and safety adherence are critical for manufacturing components. Hard skills include blueprint reading, G-Code programming, calibration, and use of measurement tools (micrometers/calipers).",
    "softSkills": ["precision", "spatial visualization", "safety adherence"],
    "hardSkills": ["blueprint reading", "G-Code programming", "calibration", "micrometers/calipers"],
    "resources": [
      {
        "name": "National Tooling and Machining Association (NTMA)",
        "url": "https://www.ntma.org"
      },
      {
        "name": "Modern Machine Shop",
        "url": "https://www.mmsonline.com"
      },
      {
        "name": "Practical Machinist (Forum)",
        "url": "https://www.practicalmachinist.com/"
      },
      {
        "name": "Haas CNC Educational Resources",
        "url": "https://www.haascnc.com/training.html"
      }
    ]
  },
  {
    "id": 97,
    "title": "Tattoo Artist",
    "category": "Creative & Design",
    "description": "Requires artistic skill, client communication, and meticulous sterilization protocols. Hard skills include drawing, machine operation, needle depth control, color theory, and blood-borne pathogen certification.",
    "softSkills": ["artistic skill", "client communication", "sterilization protocol"],
    "hardSkills": ["drawing", "tattoo machine operation", "color theory", "pathogen certification"],
    "resources": [
      {
        "name": "Tattoo Artist Magazine",
        "url": "https://www.tattooartistmagazine.com"
      },
      {
        "name": "Bloodborne Pathogen Training (e.g., Red Cross)",
        "url": "https://www.redcross.org/take-a-class/first-aid/bloodborne-pathogens-training"
      },
      {
        "name": "Inked Magazine",
        "url": "https://www.inkedmag.com/"
      },
      {
        "name": "Worldwide Tattoo Conference",
        "url": "https://www.tattooconference.com/"
      }
    ]
  },
  {
    "id": 98,
    "title": "Actuary",
    "category": "Financial Services",
    "description": "Excellent statistical aptitude, complex problem-solving, and attention to regulatory nuance are vital. Hard skills include probability theory, financial mathematics, statistical modeling (R/Python), and risk management.",
    "softSkills": ["statistical aptitude", "complex problem solving", "regulatory nuance"],
    "hardSkills": ["probability theory", "financial mathematics", "statistical modeling (R/Python)", "risk management"],
    "resources": [
      {
        "name": "Society of Actuaries (SOA)",
        "url": "https://www.soa.org"
      },
      {
        "name": "Casualty Actuarial Society (CAS)",
        "url": "https://www.casact.org"
      },
      {
        "name": "The Actuarial Outpost (Forum)",
        "url": "https://www.actuarialoutpost.com/"
      },
      {
        "name": "Be An Actuary",
        "url": "https://www.beanactuary.org/"
      }
    ]
  },
  {
    "id": 99,
    "title": "Ethical Hacker / Penetration Tester",
    "category": "Technology & Digital",
    "description": "Requires strong ethical judgment, relentless curiosity, and structured investigative skills to find vulnerabilities. Hard skills include network defense, exploit development, programming (e.g., Python), and tools like Metasploit.",
    "softSkills": ["ethical judgment", "relentless curiosity", "structured investigative skills"],
    "hardSkills": ["network defense", "exploit development", "Python scripting", "Metasploit"],
    "resources": [
      {
        "name": "Offensive Security (Kali Linux)",
        "url": "https://www.kali.org"
      },
      {
        "name": "Certified Ethical Hacker (CEH) - EC-Council",
        "url": "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/"
      },
      {
        "name": "OWASP (Open Web Application Security Project)",
        "url": "https://owasp.org"
      },
      {
        "name": "Dark Reading",
        "url": "https://www.darkreading.com/"
      }
    ]
  },
  {
    "id": 100,
    "title": "Executive Assistant / Chief of Staff",
    "category": "Business & Finance",
    "description": "Exceptional organization, proactive anticipation, and discretion are essential to support top leadership. Hard skills include advanced calendar management, meeting orchestration, presentation software (PowerPoint), and business writing.",
    "softSkills": ["exceptional organization", "proactive anticipation", "discretion"],
    "hardSkills": ["advanced calendar management", "meeting orchestration", "PowerPoint", "business writing"],
    "resources": [
      {
        "name": "Executive Assistant Organization (EAA)",
        "url": "https://executiveassistants.org"
      },
      {
        "name": "Chief of Staff Network",
        "url": "https://chiefofstaff.network"
      },
      {
        "name": "Forbes Executive Assistant Insights",
        "url": "https://www.forbes.com/advisor/business/executive-assistant-salary/"
      },
      {
        "name": "Asana/Trello (Task Management)",
        "url": "https://asana.com/"
      }
    ]
  }
];

export default careerSuggestions