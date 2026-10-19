/* EDIT THIS FILE ONLY. The site rebuilds itself from it.
   Add a project: copy one { ... } block inside a "cards" section and change the text.
   Add a section: copy a whole section block. Reorder by moving blocks.
   Section types: "text" (body: [paragraphs]) | "cards" (items) | "timeline" (items)
   Card fields: title, status, date, scale, tags[], blurb, link (optional), linkText (optional)
   Timeline fields: when, what, where, blurb
   Leave a field out and it simply doesn't show. */
window.SITE = {
  name: "Miguel Duran-Diaz",
  role: "Civil Engineering, Temple University, Class of 2029",
  tagline: "I draw structures on paper and build everything else in code, plastic, and silicon.",
  contact: { email: "you@example.com", github: "", linkedin: "", location: "Philadelphia, PA and Millbury, MA" },
  sections: [
    { id: "about", title: "About", sheet: "A-101", type: "text", body: [
      "First-year civil engineering student at Temple University, pulled toward civil and environmental work: the infrastructure that quietly decides how people live.",
      "Outside class I build. Custom GPTs, Python data projects, Chrome extensions, 3D prints, and ESP32 prototypes all live here. I also work at Temple’s Small Business Development Center on AI tools for advisors.",
      "I’m in Philadelphia during the school year and in Millbury, Massachusetts over the summer."
    ]},
    { id: "projects", title: "Projects", sheet: "P-201", type: "cards", items: [
      { title: "The Miguel Chronical", status: "Live", date: "2026", scale: "Personal", tags: ["Web"],
        blurb: "A satirical publication in crimson and blackletter, built from plug-in parts and hosted on GitHub Pages." },
      { title: "Custom GPTs", status: "Ongoing", scale: "Tools", tags: ["AI"],
        blurb: "Purpose-built assistants for specific jobs, from advisor workflows to personal research." },
      { title: "Python Data Projects", status: "Ongoing", scale: "Analysis", tags: ["Data"],
        blurb: "Scripts and notebooks that turn messy data into something you can decide with." },
      { title: "Chrome Extensions", status: "Ongoing", scale: "Tools", tags: ["Web"],
        blurb: "Small browser tools that remove repeated clicks from daily work." },
      { title: "ESP32 and 3D Printing", status: "Ongoing", scale: "Prototype", tags: ["Hardware"],
        blurb: "Printed enclosures and microcontroller builds, from sketch to working device." },
      { title: "Maine Documentary", status: "Concept", scale: "Zero budget", tags: ["Film"],
        blurb: "A documentary set in Maine and Acadia, built on an A plot and a B plot." }
    ]},
    { id: "experience", title: "Experience and Education", sheet: "E-301", type: "timeline", items: [
      { when: "Current", what: "Consulting Assistant, AI Project", where: "Small Business Development Center, Temple University",
        blurb: "Building AI tools, assessments, and workflows that help business advisors serve small businesses." },
      { when: "2025 to 2029", what: "B.S. Civil Engineering", where: "Temple University",
        blurb: "Structures, materials, and environmental systems, with a hands-on lab track." }
    ]},
    { id: "coursework", title: "Coursework", sheet: "C-401", type: "cards", items: [
      { title: "CEE 2011 Materials Lab", status: "In progress", date: "Fall 2026", scale: "Lab reports", tags: ["Materials"],
        blurb: "Aggregate testing: specific gravity and absorption (ASTM C127), bulk density (C29), and gradation (C136) checked against C33 limits." }
    ]},
    { id: "field", title: "Field Notes", sheet: "F-501", type: "cards", items: [
      { title: "Acadia National Park", status: "Planning", date: "Summer", scale: "4 days", tags: ["Outdoors"],
        blurb: "Hiking plan built around Precipice and Beehive." },
      { title: "Birding", status: "Ongoing", scale: "Field", tags: ["Outdoors"],
        blurb: "Species lists and sightings from trails and campuses." },
      { title: "Film Photography", status: "Ongoing", scale: "35 mm", tags: ["Photo"],
        blurb: "Rolls shot on film, with scans added as they come back." }
    ]}
  ]
};
