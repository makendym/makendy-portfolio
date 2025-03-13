import {
  nyuBannerEducation,
  nyuLogo,
  stacTrackEducation,
  stacLogo,
  xlabProject,
  apComptutor,
  stackOverflow,
  nyuInterview,
  purpleGlow,
  fatEar,
  portfolioProject,
} from "../assets";

const headings = [
  "Innovating education with AI-driven solutions.",
  "From the field to the future of EdTech.",
  "Turning research into transformative learning tools.",
  "Empowering the next generation through technology.",
];
const aboutText =
  "Makendy Midouin is a first-generation college graduate whose journey has been fueled by leadership, innovation, and a passion for learning. Excelling in both athletics and academics, he became a league MVP, conference champion, and honor society inductee, demonstrating his drive for excellence across disciplines. His research on bias in virtual reality and his role in raising $125,000 in STEM scholarships reflect his commitment to using technology for meaningful impact. Balancing software engineering, research, and teaching, Makendy has cultivated a career at the intersection of education, AI, and entrepreneurship, developing tech-driven solutions that empower learners worldwide.";
const skillsDataAbout = {
  "Programming Languages": [
    "Java",
    "JavaScript",
    "Python",
    "C#",
    "C++",
    "HTML",
    "CSS",
    "SQL",
  ],
  "Frameworks & Libraries": [
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "Django",
    "Flask",
    "Bootstrap",
  ],
  "Cloud & DevOps": [
    "AWS",
    "Git",
    "GitHub",
    "CI/CD Pipelines",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
  ],
  "Tools & Technologies": [
    "Hadoop",
    "Spark",
    "Unity",
    "Figma",
    "OpenAI API",
    "Virtual Reality",
    "Agile/Scrum",
  ],
};

const educationData = [
  {
    imagePath: nyuBannerEducation.src,
    logo: nyuLogo.src,
    schoolName: "New York University",
    degree: "M.S in Computer Science",
    title: "Community-Driven Growth",
    description:
      "At NYU, Makendy deepened his technical expertise and entrepreneurial vision through the Master’s in Computer Science program. His studies were enriched by participation in the NYU Entrepreneurial Institute’s Startup Accelerator Program, where he refined his approach to innovation and business development. He applied his skills in an internship at a trucking logistics startup, co-designing platform features to solve real-world challenges. This period of academic and professional growth solidified his commitment to creating technology that enhances education.",
    graduationDate: "Dec 2024",
  },
  {
    imagePath: stacTrackEducation.src,
    logo: stacLogo.src,
    schoolName: "St. Thomas Aquinas College",
    degree: "B.S in Computer Science",
    title: "Lessons Beyond the Field",
    description:
      "Makendy’s time at STAC was transformative, combining athletic excellence with academic rigor. As part of a championship-winning track team, he learned how discipline and teamwork drive success. His research at XLAB on bias in virtual reality sharpened his analytical thinking, while induction into Chi Alpha Sigma and Sigma Zeta recognized his commitment to excellence. Representing the School of STEM at fundraising events and securing his first software engineering internship at Treehouse Strategy laid the foundation for his career at the intersection of technology and education.",
    graduationDate: "May 2022",
    imageStyle: {objectFit: "cover", objectPosition: "center"},
  },
];

const skillsDataWork = {
  "Related Skills": [
    "React",
    "GraphQL",
    "Express.js",
    "Node.js",
    "MongoDB",
    "Git",
    "GitHub",
    "C++",
    "Jira",
    "Redux",
    "Bit Bucket",
    "C#",
    "Rest API",
    "Agile Scrum",
    "JavaScript",
    "Python",
    "Java",
    "SQL",
    "MYSQL",
    "SFML",
    "Presentation",
    "Excel",
  ],
};
const projects = [
  {
    title: "The Virtual Mirror",
    description:
      "Bias-revealing VR journey that places students in immersive scenarios to expose hidden prejudices about weight, race, and gender. Designed to spark self-reflection and personal transformation.",
    image: xlabProject.src,
    size: "large",
    link: "https://github.com/makendym/-Finding-Discrimination-using-Virtual-Reality",
    video: "https://d3lh4iw97b9uun.cloudfront.net/xlab.mp4",
  },
  {
    title: "AP CompTutor",
    description:
      "AI-powered study buddy that creates custom practice questions to help sharpen coding skills and ace the AP CSA exam.",
    image: apComptutor.src,
    size: "medium",
    link: "https://github.com/makendym/APCompTutor",
  },
  {
    title: "Stack Overflow",
    description:
      "StackOverflow ecosystem explorer that transforms vast forum data into interactive visual narratives, answering key questions about the developer community's digital conversations.",
    image: stackOverflow.src,
    size: "small",
    link: "https://github.com/makendym/StackOverflow-BigData",
  },

  {
    title: "NYU Interview Prep",
    description:
      "Career matchmaker for NYU students, connecting those with shared professional interests and career paths.",
    image: nyuInterview.src,
    size: "medium",
    link: "https://github.com/makendym/NYU-Interview-Prep",
  },
  {
    title: "Purple Glow",
    description:
      "One-tap booking system that simplifies scheduling and payment for cleaning services, turning booking chaos into seamless user experience.",
    image: purpleGlow.src,
    size: "medium",
    link: "https://github.com/makendym/Cleaning-Service-app",
  },
  {
    title: "Fat Ear",
    description:
      "Dynamic music streaming platform that uses advanced SQL queries, offering seamless login, personalized playlists, and fast song search.",
    image: fatEar.src,
    size: "small",
    link: "https://github.com/makendym/FatEar",
  },
  {
    title: "Portfolio Design",
    description:
      "A clean, intuitive Figma design showcasing Makendy’s journey with easy navigation and key achievements.",
    image: portfolioProject.src,
    size: "small",
    link: "https://www.figma.com/design/FeKGi60NgShEUTddoupNSt/Portfolio-Page?node-id=0-1&t=iTMwYYVWYHnklRYx-1",
  },
];
const testimonialData = [
  {
    testimonial:
      "Makendy has worked with me on multiple projects, notably the XLAB Discrimination research using virtual reality. His ability to learn new technologies and work within a group proved to me that he is quite a dependable team-player.",
    collaboration: "XLAB VR Research Project at STAC",
    author: "Taulant Xhakli, Assistant Application Analyst at Montefiore Einstein Technology",
  },
  {
    testimonial:
      "I mentored Makendy during his internship, and his curiosity and problem-solving skills were impressive. He took initiative and delivered beyond expectations.",
    collaboration: "Summer Internship at XYZ Corp",
    author: "Jane Smith, CTO at Startup ABC",
  },
  {
    testimonial:
      "Makendy's passion for education technology was evident when we worked together at a summer coding camp. His ability to connect with students and simplify complex concepts was remarkable.",
    collaboration: "STEM Summer Coding Camp Instructor",
    author: "Emily Johnson, Senior Product Manager at EdTech Co.",
  },
];

export {
  headings,
  aboutText,
  skillsDataAbout,
  educationData,
  skillsDataWork,
  projects,
  testimonialData,
};
