/* =============================================================
   ✏️  EDIT ONLY THIS FILE TO UPDATE THE WEBSITE
   Replace links, dates, names and downloadable file paths below.
   For downloads, upload your files into: dist/downloads/
   ============================================================= */

window.SIH_CONFIG = {
  // EVENT TEXT: title, year, college, date and venue.
  event: {
    title: "SMART INDIA INTERNAL HACKATHON",
    year: "2026",
    shortName: "SIH 2026",
    college: "D.N.R. COLLEGE OF ENGINEERING & TECHNOLOGY",
    subtitle: "Think • Innovate • Transform",
    // =========================================================
    // CHANGE EVENT DATE HERE
    // Edit only the text inside quotes. Example: "15 & 16 October 2026"
    // The updated date appears automatically on the main website.
    // =========================================================
    date: "15-09-2026 & 16-09-2026",
    // CHANGE VENUE HERE: shown below and slightly right of Register Now.
    venue: "DNR College Campus, Bhimavaram"
  },

  // MANUAL DOWNLOAD FILES: put files in dist/downloads/ and change paths here.
  downloads: {
    brochure: "downloads/SIH-2026-Brochure.pdf",
    pptTemplate: "downloads/SIH-2026-Presentation-Template.pptx"
  },

  // =============================================================
  // MANUAL DASHBOARD / EXTERNAL LINKS
  // To change any destination, paste the complete https:// link
  // between the quotes below. The dashboard buttons update automatically.
  // =============================================================
  links: {
    // "About SIH" dashboard button link:
    aboutSih: "https://www.sih.gov.in/",

    // =========================================================
    // CHANGE PROBLEM STATEMENT LINK HERE
    // Paste the new official SIH Problem Statements URL below.
    // This updates the "Problem Statements" dashboard/menu button.
    // =========================================================
    problemStatements: "https://www.sih.gov.in/sih2026PS",

    // Registration, WhatsApp group and official-site links:
    register: "https://docs.google.com/forms/d/e/1FAIpQLSecqX8snsR9aL7BcTyCFYW0XRdK6jIH8sZQcM0pCBt9OC97rw/viewform?usp=header",
    whatsapp: "https://chat.whatsapp.com/KnGplSnqGKK2srD339pXN0",
    sihOfficial: "https://www.sih.gov.in/"
  },

  // OPTIONAL ABOUT TEXT: retained here for future use.
  about: [
    "Smart India Hackathon is a nationwide initiative that gives students a platform to solve real-world challenges.",
    "The DNR Internal Hackathon identifies innovative teams and prepares them for the Smart India Hackathon journey."
  ],

  // OPTIONAL PROBLEM CARDS: add, remove or edit objects in this list.
  problemStatements: [
    { id: "PS-01", theme: "Smart Education", title: "AI-powered learning support for students", type: "Software" },
    { id: "PS-02", theme: "Clean & Green Technology", title: "Technology for efficient waste management", type: "Hardware" },
    { id: "PS-03", theme: "MedTech", title: "Accessible digital healthcare solutions", type: "Software" },
    { id: "PS-04", theme: "Agriculture", title: "Smart tools for sustainable farming", type: "Hardware" }
  ],

  // QUICK-LINK CARDS: urlKey must match a key in the links section above.
  quickLinks: [
    { label: "Join WhatsApp Group", urlKey: "whatsapp", icon: "whatsapp" },
    { label: "Register Your Team", urlKey: "register", icon: "arrow" },
    { label: "Official SIH Website", urlKey: "sihOfficial", icon: "external" }
  ]
};
