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
  bam,
  roadcall,
  stac,
  treehouse,
  varsitytutors,
  purpleGlowIcon,
} from "../assets";

const videoUrl = "https://d3lh4iw97b9uun.cloudfront.net/portfolioVid4.mp4";
const headings = [
  "Innovating education with AI-driven solutions.",
  "From the field to the future of EdTech.",
  "Turning research into transformative learning tools.",
  "Empowering the next generation through technology.",
];
const aboutText =
  "Makendy Midouin is a first-generation college graduate whose journey has been fueled by leadership, innovation, and a passion for learning. Excelling in both athletics and academics, he became a captain, league MVP, conference champion, and honor society inductee, demonstrating his drive for excellence across disciplines. His research on bias in virtual reality and his role in raising $125,000 in STEM scholarships reflect his commitment to using technology for meaningful impact. Balancing software engineering, research, and teaching, Makendy has cultivated a career at the intersection of education, AI, and entrepreneurship, developing tech-driven solutions that empower learners worldwide.";
const skillsDataAbout = {
  "Programming Languages": [
    "Java",
    "JavaScript",
    "TypeScript",
    "Python",
    "C#",
    "HTML/CSS",
    "SQL",
  ],
  "Frameworks & Libraries": [
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
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
    "Agile Scrum",
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
const workExperience = [
  {
    role: "Site Director",
    company: "Brains & Motion Education",
    date: "Jun 2025 - Aug 2025",
    icon: bam,
  },
  {
    role: "Computer Science Adjunct Faculty",
    company: "St. Thomas Aquinas College",
    date: "Sept 2024 - Present",
    icon: stac,
  },
  {
    role: "Lead Coding Instructor",
    company: "Brains & Motion Education",
    date: "Jun 2024 - Aug 2024",
    icon: bam,
  },
  {
    role: "Freelance Software Engineer",
    company: "Independent Contractor",
    date: "Jun 2023 - Jan 2024",
    icon: purpleGlowIcon,
  },

  {
    role: "Software Engineer Intern",
    company: "Roadcall.co",
    date: "Jun 2023 - Sep 2023",
    icon: roadcall,
  },
  {
    role: "Software Engineer Intern",
    company: "Treehouse Strategy and Communications",
    date: "May 2021 - Sep 2021",
    icon: treehouse,
  },
  {
    role: "Computer Science Tutor",
    company: "Varsity Tutor",
    date: "May 2020 - Sep 2023",
    icon: varsitytutors,
  },
  {
    role: "XLAB Researcher",
    company: "St. Thomas Aquinas College",
    date: "Sept 2019 - May 2022",
    icon: stac,
  },
];
const skillsDataWork = {
  "Related Skills": [
    "TypeScript",
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
    "Bitbucket",
    "C#",
    "REST API",
    "Agile Scrum",
    "JavaScript",
    "Python",
    "Java",
    "SQL",
    "MySQL",
    "SFML",
    "Presentation",
    "Excel",
  ],
};

// Map skills to companies based on resume
const skillToCompanyMap = {
  // Languages
  JavaScript: [
    "Roadcall.co",
    "Treehouse Strategy",
    "NYU Interview Prep",
    "Cleaning Service",
  ],
  Python: ["Brains & Motion", "NYU Interview Prep", "Stack Overflow"],
  Java: ["Academic Projects", "St. Thomas Aquinas College"],
  "C#": ["XLAB Research", "The Virtual Mirror"],
  "C++": ["Treehouse Strategy"],
  "HTML/CSS": ["Treehouse Strategy", "NYU Interview Prep", "Cleaning Service"],
  SQL: ["FatEar", "NYU Interview Prep"],

  // Frameworks & Libraries
  React: [
    "Roadcall.co",
    "Treehouse Strategy",
    "NYU Interview Prep",
    "Cleaning Service",
  ],
  "Next.js": ["Personal Projects", "Portfolio"],
  Flask: ["FatEar"],
  Django: ["NYU Interview Prep"],
  "Node.js": ["NYU Interview Prep", "Cleaning Service"],
  "Express.js": ["Cleaning Service"],
  Bootstrap: ["Various Projects"],
  Redux: ["Roadcall.co"],

  // Databases
  MongoDB: ["NYU Interview Prep", "Stack Overflow"],
  PostgreSQL: ["NYU Interview Prep"],
  MySQL: ["FatEar"],

  // Big Data Tools
  Hadoop: ["Stack Overflow Project"],
  Spark: ["Stack Overflow Project"],

  // Cloud & Services
  AWS: ["NYU Interview Prep", "Stack Overflow", "Cleaning Service"],
  GraphQL: ["Cleaning Service"],
  "REST API": ["Treehouse Strategy", "NYU Interview Prep"],

  // Version Control & Collaboration
  Git: ["Roadcall.co", "Treehouse Strategy", "XLAB Research", "All Projects"],
  GitHub: ["NYU Interview Prep", "Stack Overflow", "FatEar"],
  Bitbucket: ["Roadcall.co"],

  // Project Management & Methodologies
  "Agile Scrum": ["Roadcall.co", "XLAB Research"],
  Jira: ["Roadcall.co"],
  Zenhub: ["Various Projects"],
  Trello: ["Various Projects"],
  "CI/CD Pipelines": ["Various Projects"],

  // Design & Other Tools
  Figma: ["UI/UX Design Projects"],
  Unity: ["XLAB Research", "The Virtual Mirror"],
  "Virtual Reality": ["XLAB Research"],
  "OpenAI API": ["AP CompTutor"],

  // Specialized Skills
  TypeScript: ["Roadcall.co"],
  "Data Visualization": ["Stack Overflow", "Treehouse Strategy"],
  "Apache Echarts": ["Stack Overflow"],
  DynamoDB: ["Stack Overflow"],
  AI: ["NYU Coursework", "Brains & Motion"],
  Algorithms: ["NYU Coursework", "Brains & Motion"],
  "Game Design": ["Brains & Motion"],
  Presentation: ["Brains & Motion", "St. Thomas Aquinas College"],
  Excel: ["St. Thomas Aquinas College"],
  SFML: ["St. Thomas Aquinas College"],
  Teaching: ["Brains & Motion", "St. Thomas Aquinas College"],
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
    title: "SmartFRQ",
    description:
      "Built a focused prototype for APCompTutor.AI, an AI-powered AP Computer Science practice platform that processes PDF questions into structured JSON format, and uses the Feynman Technique for enhanced learning. Used Next.js, TypeScript, and multi-model AI integration to create a user-friendly platform to provide custom prompts and intelligent feedback for students.",
    image:
      "https://cdn.loom.com/sessions/thumbnails/95adb06b15ea45f8983508b04d50a41c-4f5ada8a03dacb81-full-play.gif",
    size: "medium",
    link: "",
    video: "https://www.loom.com/share/95adb06b15ea45f8983508b04d50a41c",
  },
  {
    title: "Java Lambda Runner",
    description:
      "Microservice built with TypeScript-based AWS Lambda function that provides Java execution capabilities within a serverless environment. Combines Node.js and Java to create a flexible serverless solution with Docker containerization, API Gateway integration for compiling and running Java code via HTTP requests.",
    image: "https://cdn.loom.com/sessions/thumbnails/aabf192a1d8444239d0dc3b9fc6c20d4-f6fc632e57ccf82a-full-play.gif",
    size: "medium",
    link: "https://github.com/makendym/java-lambda-runner",
    video: "https://www.loom.com/share/aabf192a1d8444239d0dc3b9fc6c20d4",
  },
  {
    title: "AWS Frontend Todo App",
    description: "Frontend implementation tutorial for cloud computing students - React-based todo application with S3 static hosting deployment. Part 1 of a comprehensive AWS serverless tutorial series.",
    image: "https://raw.githubusercontent.com/makendym/AWS-Frontend-Todo-App/main/app-step1-img.png",
    size: "medium",
    link: "https://github.com/makendym/AWS-Frontend-Todo-App",
  },
  {
    title: "AWS Lambda Backend Tutorial",
    description: "Backend implementation tutorial for cloud computing students - AWS Lambda functions with API Gateway and DynamoDB integration. Part 2 of a comprehensive AWS serverless tutorial series.",
    image: "https://raw.githubusercontent.com/makendym/AWS-Lambda-Todo-App/main/lambda-step1-img.png",
    size: "medium",
    link: "https://github.com/makendym/AWS-Lambda-Todo-App",
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
      "Makendy has been an absolutely incredible mentor to me. His technical skills are truly impressive, particularly when it comes to DSA and resume building. He consistently pushed me to achieve my best, patiently guiding me through complex problems and conducting thorough mock interviews, which were crucial in my successful journey to becoming a Software Engineer at Amazon Web Services. Beyond that, Makendy's support has been unwavering. He's always been there to offer encouragement and insightful advice, never failing to go above and beyond. It's clear he's invested significant time and energy into my development, and his impact has been profound. He's a truly wonderful mentor, and I credit him significantly for my success in breaking into AWS.",
    collaboration: "Technical Mentorship - DSA and Career Coaching",
    author: "Brian St-Juste, Software Engineer Intern at Amazon Web Services",
  },
  {
    testimonial:
      "Makendy has worked with me on multiple projects, notably the XLAB Discrimination research using virtual reality. His ability to learn new technologies and work within a group proved to me that he is quite a dependable team-player.",
    collaboration: "XLAB Virtual Reality Research - Lead Researcher(STAC)",
    author:
      "Taulant Xhakli, Assistant Application Analyst at Montefiore Einstein Technology",
  },
  {
    testimonial:
      "Makendy has been tutoring me in Java for several months. His style of teaching adapts to my learning style breaking down complex concepts into clear, understandable fundamentals. His patience and ability to explain things step by step have made a huge difference in my understanding of the language. I truly appreciate his support and highly recommend him to anyone looking to strengthen their Java or any programming skills!",
    collaboration: "Varsity Tutors - Private Java Instructor",
    author: "Despina Kotanidis, Lead Data Analyst at Arora Engineers",
  },
  {
    testimonial:
      "Working with Makendy as the Lead Instructor at the NYU STEM & Arts Summer Camp was truly an exceptional experience. Makendy brought an incredible blend of passion, creativity, and leadership to the program, fostering an environment where students not only learned but thrived. His ability to engage campers with both technical and artistic concepts was impressive, seamlessly blending STEM principles with artistic creativity. Makendy demonstrated strong problem-solving skills and a unique ability to adapt lessons to meet the diverse needs of our students, making complex ideas accessible and exciting. His dedication to the campers’ growth and his unwavering enthusiasm made a lasting impact on both the students and the team. I couldn’t have asked for a more committed and talented instructor to lead the program.",
    collaboration: "NYU BAM! Summer Camp - Lead Instructor",
    author:
      "Kristopher Kasper, Chief Operating Officer, Brains & Motion Education.",
  },
  {
    testimonial:
      "Makendy was my right hand man while running Brains and Motion day camp. He was not only a naturally gifted educator, he made himself indispensable with his leadership skills and big picture thinking. Makendy immediately distinguished himself as a world class manager, able to juggle customer support, logistics, and creative problem solving. I lost track of how many times parents took me aside to specifically praise him and his work.",
    collaboration: "NYU BAM! Summer Camp - Lead Instructor",
    author: "Jack Aman, Camp Director at Brains & Motion",
  },
  {
    testimonial:
      "Makendy was a standout student in my class at St. Thomas Aquinas College while pursuing his Bachelor's in Computer Science. He demonstrated strong engagement by actively participating in discussions, asking insightful questions, and supporting his peers. His dedication was evident in his consistently timely and high-quality work, often exceeding expectations.",
    collaboration: "St.Thomas Aquinas College - Computer Science Student",
    author:
      "Paola Garcia Cardenas, Sr. Staff Cybersecurity Engineer & CS/Cybersecurity Adjunct",
  },
  {
    testimonial:
      "I worked with Makendy on multiple projects at NYU, and honestly, what stood out the most was his passion for tech and creating impact. He’s one of those people who’s always coming up with creative ideas and actually gets excited about building cool stuff. One of the most talented, driven, and passionate people that I’ve met, and genuinely loves what he does.",
    collaboration: "NYU Software Development - Project Collaborator",
    author: "Sean Pan, Software Engineer Associate at Capital One",
  },
  {
    testimonial:
      "Makendy was a dedicated and talented intern during our time working together at RoadCall.co. His ability to quickly grasp complex frontend concepts and contribute meaningful features in React.js was impressive. He played a crucial role in implementing key functionalities like admin notes, pagination, and badge counts, ensuring a seamless user experience. Beyond his technical skills, Makendy was an excellent team player—always open to feedback, eager to learn, and proactive in code reviews. His work ethic and problem-solving mindset made him a valuable asset to our team. I have no doubt that he will continue to thrive in his career.",
    collaboration: "RoadCall Co. - Software Engineer Intern",
    author: "Apurva Raj Purohit, Frontend Developer at RoadCall Co.",
  },
  {
    testimonial:
      "Working with Makendy has been an exceptional experience. His ability to break down complex technical challenges, particularly in web development, showcases both technical expertise and a problem-solving mindset. Whether addressing intricate issues like Google Maps clustering behavior or special case customer issues, Makendy has consistently demonstrated a proactive approach to problem-solving, ensuring efficient and effective resolutions. I’ve had the opportunity to work directly with Makendy and observe his collaboration with team members, particularly in debugging and brainstorming solutions in the web development space.",
    collaboration: "Web Development Collaboration",
    author: "Lugduni Desrosiers, Software Engineer at Google",
  },
  {
    testimonial:
      "I had the pleasure of working with Makendy on several projects. Most notably, we collaborated on an EdTech startup. It was very clear to me from the start that he likes to learn as much as he likes to teach – always filling gaps and picking up new skills. Definitely a doer by nature and always biases towards action. He consistently impressed me with his dedication, showing up fully committed every day, ready to tackle any challenges head-on. Can’t recommend him enough if you’re looking for someone to make an immediate impact.",
    collaboration:
      "NYU Entrepreneurial Institute's Startup Accelerator Program - EdTech Startup Collaborator",
    author:
      "Chinmayan Pradeep, AI Engineer Intern & Graduate Research Assistant, Subconsious AI and Neuroinformatics Lab, NYU",
  },
];

export {
  videoUrl,
  headings,
  aboutText,
  skillsDataAbout,
  educationData,
  workExperience,
  skillsDataWork,
  projects,
  testimonialData,
  skillToCompanyMap,
};
