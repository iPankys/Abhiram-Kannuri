import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  bootstrap,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  jquery,
  php,
  laravel,
  livewire,
  git,
  figma,
  vuejs,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  react,
  trust,
  hblab,
  vegas,
  overflow
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: react,
  },
  {
    title: "Data Engineer",
    icon: backend,
  },
  {
    title: "Web Scraping Expert",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JQuery",
    icon: jquery,
  },
  {
    name: "PHP",
    icon: php,
  }, 
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "Livewire",
    icon: livewire,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "vuejs",
    icon: vuejs,
  },
];

const experiences = [
  {
    title: "Frontend Developer | Data Analyst",
    // company_name: "Starbucks",
    // icon: starbucks,
    company_name: "D Link Technologies Pvt Ltd",
    icon: trust,
    iconBg: "#383E56",
    date: "March 2017 - January 2019",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Created dashboards in Tableau using Excel Files.",
      "Synthesized current business intelligence data to produce reports and polished presentations, highlighting findings and recommending changes",
    ],
  },
  {
    title: "Backend Developer | Junior Data Scientist",
    company_name: "SanSys Technologies",
    icon: hblab,
    iconBg: "#E6DEDD",
    date: "October 2020 - February 2022",
    points: [
      "Improved performance by resolving more than 80 critical bugs in the company's products.",
      "Reduced development time by 70% through code reuse in jQuery libraries for various projects with over 1.8K combined page visits.",
      "Increased daily traffic from 35% to 80% by repairing existing websites to improve user experience and incorporated SEO.",
      "Conduct software analysis, programming, testing, and debugging",
      "Design, implement and maintain the software using Data Science",
    ],
  },
  {
    title: "Blockchain Developer | Blockchain Data Engineer",
    company_name: "Coinbase",
    icon: vegas,
    iconBg: "#383E56",
    date: "April 2022 - October 2022",
    points: [
      "Spearheaded the design and development of the NFT deployer, resulting in a 40% increase in efficiency in deploying non-fungible tokens on various blockchain platforms.",
      "Successfully implemented over 20 smart contracts and decentralized applications, resulting in a 60% reduction in transaction processing time and a 75% reduction in gas fees.",
      "Utilized coding, cryptography, and security skills to ensure the secure and seamless operation of the NFT Deployer, resulting in a 90% decrease in the number of security incidents reported by users.",
      "Ensuring data quality and integrity",
      "Scraping Data from ETH Sites",
    ],
  },
  {
    title: "Full stack Developer | Data Engineer",
    company_name: "Talysis",
    icon: overflow,
    iconBg: "#E6DEDD",
    date: "February 2022 - Present",
    points: [
      "Created an application interface that integrated 35 third-party APIs and improved sales results by 80% within 3 weeks on the job.",
      "Wrote 200֡ unit tests to verify the functionality of user interfaces, back-end processing, connectivity, and relational database interactions.",
      "Implemented software design patterns and best practices, resulting in a 25% reduction in software issues.",
      "Revamped website flows and navigation menus, reducing the frequency of misdirected customer service queries by 30% and increasing traffic to previously neglected pages.",
      "Utilize AWS services such as S3, EC2, to deploy, scale, and monitor machine learning models",
      "Building and managing ETL Pipelines in Python, with integration into AWS services such as Glue, Lambda, and RDS for scalable data processing",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Abhiram proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Abhiram does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Abhiram optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "DNI (Daily Need Items)",
    description:
      "DNI is an online shopping store for selling and buying products. By just having a smartphone, it can easily accomplish all HR procedures, which is impressive. With this application, it’s easyto order your favorite products even though when you are on the go. It also includes delivery system and invoice system.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "liviwire",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    project_link: "https://dnistore.com/",
  },
  {
    name: "SG Myanmar Info",
    description:
      "Web-based platform that allows users to search, book, and manage Lands, Jobs from various providers. This website is an Information Sharing website. All front-end data are retrieved from the database using API.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "Livewire",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    project_link: "https://sgmyanmarinfo.com/",
  },
  {
    name: "Invoce Ecommerce",
    description:
      "Developed an invoice system that allows businesses to easily create, manage, and send invoices to their clients. The system is built using Laravel Livewire and MySQL, and includes a user friendly interface that allows businesses to easily create and customize invoices, track payments, and generate reports.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "Livewire",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    project_link: "https://mmeasyinvoice.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
