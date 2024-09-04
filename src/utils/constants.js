import suffolkImg from '../assets/img/suffolk.jpg';
import mmIcon from '../assets/img/mm.jpg';
import sbraIcon from '../assets/img/sb.png';
import suffolkIcon from '../assets/img/suffolk.jpg';
import microsoftIcon from '../assets/img/microsoft.png';
import quiz from '../assets/img/projects/quizapp.png';
import s3 from '../assets/img/projects/s3.png';
import database from '../assets/img/projects/database.png';

// constants for NavBar.js
export const TIEN_CHUNG = 'Tien Chung';
export const ABOUT = 'About';
export const ACHIEVEMENTS = 'Achievements';
export const PROJECTS = 'Projects';
export const EXPERIENCE = 'Learning & Growth Journey';
export const CONNECT = 'Connect';


// constants for Banner.js
export const WELCOME_MSG = 'Welcome to my Portfolio';
export const NAME = 'My name is ';
export const ROLE = 'I\'m a Full Stack Developer';
export const INTRODUCTION_P1 = 'Insightful problem solver leveraging strong collaboration and communication skills to work effectively with cross-functional teams to achieve project goals. Adept at utilizing strong foundation in front-end development in combination with knowledge of back-end technologies to consistently deliver scalable and reliable solutions that align with business goals. Excel in continuous learning, quickly adapting to new challenges and environments while maintaining focus on quality and customer satisfaction.';
export const LETS_CONNECT = 'Let\'s connect';

// constatns for Achievements.js
export const ACHIEVEMET_DES = 'This section highlights key certifications and learning achievements that demonstrate my commitment to continuous professional development. It includes accomplishments from my Security Journey, where I earned white, yellow, and green belts, as well as certificates from LinkedIn Learning courses. These achievements reflect my dedication to enhancing my skills, ensuring that I stay current with industry practices and that the code I write is secure and effective.';

//constants for Experience.js
export const EXPERIENCE_DES = 'This section represents my holistic approach to continuous improvement and development, encompassing formal education, practical work experiences, and personal projects. My academic background in Computer Science laid the groundwork for my technical expertise, while my professional experiences allowed me to apply and expand that knowledge in real-world scenarios. Alongside this, my personal projects reflect my passion for innovation and learning, providing a space to experiment, solve problems, and bring creative ideas to life. Together, these elements illustrate my commitment to lifelong learning and growth in the tech field.';

//constants for Education.js
export const EDUCATION = 'Education';
export const UNIVERSITY_INFO = [
  {
    imgSrc: suffolkImg,
    imgAlt: "Sufolk University",
    title: "Sufolk University",
    desc: "BS in Computer Science, Minor in Graphic Design",
    items: [
      "Graduation Year: 2023",
      "Grade: Summa Cum Laude",
      "College of Arts and Sciences Honors Scholar",
      "Nathan Miller Scholar",
    ],
    link: "https://www.suffolk.edu/",
    linkTitle: "Suffolk.edu",
  },
];
export const RELATED_COURSEWORK = 'Related Coursework';
export const COURSEWORKS = [
  "Data Structures and Algorithms",
  "Object-Oriented Programming",
  "Architecture of Computer Systems",
  "Introduction to Database Systems",
  "Introduction to Computer Networks"
];
export const FEATURE = 'Newspaper Feature';
export const FEATURE_DES = '"For her senior capstone project, computer science major Tien Chung helped bring StarSet, a largely forgotten programming language, back to life by implementing a compiler—an unprecedented achievement for an undergraduate, says Mathematics & Computer Science Professor Dmitry Zinoviev."';
export const FEATURE_LINK = 'https://www.suffolk.edu/news-features/news/2023/05/17/16/51/commencement-cas-senior-stories';
export const FEATURE_CHECKOUT = 'Check out my feature in Suffolk University\'s commencement stories!';

//constants for Work.js
export const WORK = 'Work Experience';
export const WORK_EXPERIENCE_DES = [
  'Welcome to my career journey! Although I\'m just starting my path as a Full Stack Developer, my experience spans several years and diverse roles. I began my career as a robotics trainer in high school, which led to a position at SoftBank Robotics. This role, which I continued throughout college, provided me with invaluable experience in maintaining and repairing advanced robotic systems.',
  'At MassMutual, where I am currently a Full Stack Developer, I focus on delivering comprehensive solutions that enhance user experience and optimize processes. My work involves developing and maintaining top transactions on MassMutual.com, automating address updates, and leading projects to improve customer retention and satisfaction. I thrive in collaborative environments, leveraging my skills to support my teammates and drive impactful results.',
  'In addition to my technical skills, I bring a strong foundation in teamwork, problem-solving, and continuous learning. I am committed to growing my expertise and contributing to innovative projects that align with business objectives and customer needs.',
]
export const WORK_TIMELINE = [
  {
    title: 'MassMutual',
    role: 'Full Stack Developer',
    duration: 'June 2023 - Present',
    logo: mmIcon,
    description: 'Developed and maintained top transactions on MassMutual.com, focusing on enhancing user experience and operational efficiency. Played key role in projects impacting over 40K annual transactions, collaborating closely with team members to deliver high-quality, scalable solutions aligned with business objectives.',
    skills: 'React.js, React Hooks, Test Suites, Jest, MongoDB, Java, XML, Communications, Code Review, Agile Methodologies, Git, Github, JVM',
    reverse: false,
  },
  {
    title: 'SoftBank Robotics America',
    role: 'Robotics Repair Technician',
    duration: 'June 2019 - May 2022; Sept 2022 - May 2023',
    logo: sbraIcon,
    description: 'Maintained and repaired humanoid and autonomous robots to ensure high operational reliability. Designed repair protocols to improve efficiency and reduce downtime. Mentored team members to facilitate consistent repair processes.',
    skills: 'Robotics Maintenance, Repair Protocols, Troubleshooting, Diagnostics, Data Analysis, Process Improvement, Technical Documentation, Time Management, Attention to Detail, Adaptability, Mentorship, Team Collaboration',
    reverse: true,
  },
  {
    title: 'MassMutual',
    role: 'Digital Experience Developer Intern',
    duration: 'May 2022 - Aug 2022',
    logo: mmIcon,
    description: 'Created accessible web components and spearheaded project to improve user engagement on MassMutual\'s website. Collaborated with team on redesigns and demonstrated strong agile development skills.',
    skills: 'JavaScript, React.js, HTML5, CSS, SCSS, Bootstrap, Git, GitHub, Manual Testing, Code Review, Agile Methodologies, Jira, Webstorm, Visual Studio, Confluence, Figma, Oral Communication, Written Communication',
    reverse: false,
  },
  {
    title: 'Suffolk University',
    role: 'Research Assistant',
    duration: 'May 2021 - Sept 2021',
    logo: suffolkIcon,
    description: 'Collaborated with economics professor to assist in execution of departmental research project. Worked closely with faculty to facilitate communication and project progress.',
    skills: 'MATLAB, C, Code Optimization, Computational Efficiency, Research Assistance, Collaboration, Communication, Code Structuring, Redundancy Reduction, Academic Research',
    reverse: true,
  },
  {
    title: 'MICROSOFT NEW ENGLAND RESEARCH & DEVELOPMENT CENTER',
    role: 'TEALS High School Intern',
    duration: 'July 2018',
    logo: microsoftIcon,
    description: 'Collaborated with development team to build SeeBoat App for MIT PhD student, involving coding, testing, and debugging tasks to enhance app functionality and user experience.',
    skills: 'Software Development, Problem-Solving, Rapid Learning, Coding, Testing, Debugging, Version Control (GitHub), User Interface Design (XAML), Hardware Integration (Adafruit), Presentation Skills, Award Recognition',
    reverse: false,
  },
];

// constants for Projects.jsx
export const PROJECTS_DES = [
  'Here are some awesome projects that I\'ve worked on :)',
]

export const PROJECTS_INFO = [
  {
    imgSrc: quiz,
    imgAlt: "Quiz App",
    title: "Anime Manga Quiz App",
    desc: "A fun and interactive quiz app for anime and manga enthusiasts",
    items: [
      "ReactJS, State Management (useContext, and useReducer), Side Effects Management (data fetching), Responsive Design",
    ],
    link: "https://manga-anime-quiz.netlify.app/",
    linkTitle: "manga-anime-quiz.netlify.app",
  },
  {
    imgSrc: s3,
    imgAlt: "Starset",
    title: "Bringing Code to Life",
    desc: "Implemented a Starset Programming Language Compiler",
    items: [
      "Traditional compiler design process: lexical analysis, syntax analysis, semantic analysis and interpretation",
    ],
    link: "https://drive.google.com/file/d/17qD_A0IkzeDQqsL4v_TejySC3S4rLCjD/view?usp=sharing",
    linkTitle: "Symposium Poster",
  },
  {
    imgSrc: database,
    imgAlt: "database",
    title: "University Database",
    desc: "This is a dabase project include both Front end UI and back end services",
    link: 'https://drive.google.com/drive/folders/1r6Fod5ZHnXc_zsoEHswe-BE0Y6bu61M_?usp=drive_link',
    linkTitle: 'Screenshots of the application',
    items: [
      "JavaScript, Java, ReactJS, Java Spring Boot, MySQL, VSCode",
    ],
  },
];

export const GITHUB_LINK = "https://github.com/tien-chung";
