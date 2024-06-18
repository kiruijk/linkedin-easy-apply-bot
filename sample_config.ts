export default {
  // LOGIN DETAILS
  LINKEDIN_EMAIL: "${{ secrets.LINKEDIN_USERNAME }}",
  LINKEDIN_PASSWORD: "${{ secrets.LINKEDIN_PASSWORD }}",

  // JOB SEARCH PARAMETERS
  KEYWORDS: "DevOps", 
  LOCATION: "United States",
  WORKPLACE: {
    REMOTE: true,
    ON_SITE: false,
    HYBRID: false,
  },
  JOB_TITLE: "(javascript|frontend|front-end|fullstack|full-stack|nodejs|node|js).*(developer|engineer)",
  JOB_DESCRIPTION: "^((?!(primeit))(.|[\n\r]))*$",
  JOB_DESCRIPTION_LANGUAGES: ["english"], // replace value with ["any"] to accept all job description laguages

  // FORM DATA
  PHONE: "2403676644",
  CV_PATH: "",
  COVER_LETTER_PATH: "",
  HOME_CITY: "Frederick, Maryland",
  YEARS_OF_EXPERIENCE: {
    "kubernetes": 4,
    "CI/CD": 4,
    "python": 4,
    "drupal": 4,
    "sass": 4,
    "AWS": 4,
    "docker": 4,
    "terraform": 4,

  },
  LANGUAGE_PROFICIENCY: {
    "english": "fluent",
    "swahili": "native",

  },
  REQUIRES_VISA_SPONSORSHIP: false,
  TEXT_FIELDS: { "salary": "100k" },
  BOOLEANS: {
    "bachelhor|bacharelado": true,
    "authorized": true
  },
  MULTIPLE_CHOICE_FIELDS: { "pronouns": "They/them" },

  // OTHER SETTINGS
  SINGLE_PAGE: false,
}
