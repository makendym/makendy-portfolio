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
const workExperience = [
  {
    role: "Computer Science Adjunct Faculty",
    company: "St. Thomas Aquinas College",
    date: "Sep 2024 - Present",
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
    date: "Sep 2019 - May 2022",
    icon: stac,
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
    collaboration: "VR Research Collaboration at XLAB (STAC)",
    author:
      "Taulant Xhakli, Assistant Application Analyst at Montefiore Einstein Technology",
  },
  {
    testimonial:
      "Makendy has been tutoring me in Java for several months. His style of teaching adapts to my learning style breaking down complex concepts into clear, understandable fundamentals. His patience and ability to explain things step by step have made a huge difference in my understanding of the language. I truly appreciate his support and highly recommend him to anyone looking to strengthen their Java or any programming skills!",
    collaboration: "Java Tutoring at Varsity Tutors",
    author: "Despina Kotanidis, Lead Data Analyst at Arora Engineers",
  },
  {
    testimonial:
      "Makendy was my right hand man while running Brains and Motion day camp. He was not only a naturally gifted educator, he made himself indispensable with his leadership skills and big picture thinking. Makendy immediately distinguished himself as a world class manager, able to juggle customer support, logistics, and creative problem solving. I lost track of how many times parents took me aside to specifically praise him and his work.",
    collaboration: "Leadership & Education at Brains and Motion",
    author: "Jack Aman, Camp Director at Brains & Motion",
  },
  {
    testimonial:
      "Makendy was a standout student in my class at St. Thomas Aquinas College while pursuing his Bachelor's in Computer Science. He demonstrated strong engagement by actively participating in discussions, asking insightful questions, and supporting his peers. His dedication was evident in his consistently timely and high-quality work, often exceeding expectations.",
    collaboration: "Student at St. Thomas Aquinas College",
    author: "Paola Garcia Cardenas, Sr. Staff Cybersecurity Engineer & CS/Cybersecurity Adjunct",
  },
  {
    testimonial:
    "I worked with Makendy on multiple projects at NYU, and honestly, what stood out the most was his passion for tech and creating impact. He’s one of those people who’s always coming up with creative ideas and actually gets excited about building cool stuff. One of the most talented, driven, and passionate people that I’ve met, and genuinely loves what he does.",
    collaboration: "Software Projects at NYU",
    author: "Sean Pan, Software Engineer Associate at Capital One",
  },
  {
    testimonial:
    "Makendy was a dedicated and talented intern during our time working together at RoadCall.co. His ability to quickly grasp complex frontend concepts and contribute meaningful features in React.js was impressive. He played a crucial role in implementing key functionalities like admin notes, pagination, and badge counts, ensuring a seamless user experience. Beyond his technical skills, Makendy was an excellent team player—always open to feedback, eager to learn, and proactive in code reviews. His work ethic and problem-solving mindset made him a valuable asset to our team. I have no doubt that he will continue to thrive in his career.",
    collaboration: "Application Development at RoadCall Co.",
    author: "Apurva Raj Purohit, Frontend Developer at RoadCall Co.",
  },
  {
    testimonial: 
      "Working with Makendy has been an exceptional experience. His ability to break down complex technical challenges, particularly in web development, showcases both technical expertise and a problem-solving mindset. Whether addressing intricate issues like Google Maps clustering behavior or special case customer issues, Makendy has consistently demonstrated a proactive approach to problem-solving, ensuring efficient and effective resolutions. I’ve had the opportunity to work directly with Makendy and observe his collaboration with team members, particularly in debugging and brainstorming solutions in the web development space.",  
    collaboration: 
      "Web Development Collaboration",  
    author: 
      "Lugduni Desrosiers, Software Engineer at Google"
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
};
