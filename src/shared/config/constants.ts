import classNames from "classnames";
import { ProjectTypes } from "./types";

// whenever wee need to change default className value we will use this
export const cx = classNames;

// nav data
export const navData = ["About", "Experience", "Works", "Contact"];

// project data
export const projects: ProjectTypes[] = [
  {
    title: "Tech Blog Apps",
    description:
      "This project is a technical article that records my personal implementation. I used Confluence before. Since I have no way to share it, I suddenly thought of making a blog myself.",
    tech: ["Next 13", "Contentlayer", "Tailwind CSS"],
    code: "https://github.com/charlesboshell/tech-blog-apps",
    live: "https://eugene-tech-blog-app.vercel.app",
    thumnail: "tech-blog-apps.jpg",
    featured: true,
  },
  {
    title: "Shortener URL Dashboard",
    description: "Short URL Dashboard",
    tech: ["Vite + React", "Axios", "Tailwind CSS"],
    code: "https://github.com/charlesboshell/shortener-url-frontend",
    live: "https://charles-url-shortener.netlify.app",
    thumnail: "url-shortener.jpg",
    featured: true,
  },
  {
    title: "Worked Project",
    description: "Works in collaboration with designers",
    tech: ["HTML", "CSS", "Javascript"],
    code: "https://github.com/charlesboshell/preview-worked-project",
    live: "https://worked-project.netlify.app",
    thumnail: "worked-project.jpg",
    featured: false,
  },
  {
    title: "Finance Dashboard",
    description:
      "Build a MERN Finance Dashboard App that has Machine Learning Predictions",
    tech: ["MongoDB", "Expressjs", "React", "Nodejs", "Typescript"],
    code: "https://github.com/charlesboshell/Finance-App",
    live: "https://charles-finance-app.netlify.app",
    thumnail: "finance-dashboard.jpg",
    featured: false,
  },
  {
    title: "Robot Process Automation Dashboard",
    description: "Build a Automation process front-end Dashboard",
    tech: [
      "Vue 3",
      "Tailwind CSS",
      "Axios",
      "highcharts-vue",
      "pinia",
      "vue-flatpickr-component",
      "pinia",
      "vue-i18n",
      "vue-multiselect",
      "vue-router",
      "vue3-easy-data-table",
      "vue3-google-signin",
    ],
    code: "https://github.com/charlesboshell/rpa-dashboard-frontend",
    live: "https://rpa-dashboard-f2e.netlify.app",
    thumnail: "robot-process-automation-dashboard.jpg",
    featured: false,
  },
  {
    title: "Portfolio website",
    description:
      "Personal Website V2 Second iteration of my personal website. Designed and developed with a conscious effort to avoid Personal Website V1 Second iteration of my personal website. and Also I add Blog section",
    tech: ["Next js 13", "Tailwind CSS", "Express js", "MongoDB"],
    code: "https://github.com/charlesboshell/charlesboshell",
    live: "https://charles-boshell.vercel.app/",
    thumnail: "portfolio-v2.jpg",
    featured: true,
  },
  {
    title: "Transportation SPA Website",
    description: "This project is a transportation spa website. ",
    code: "https://github.com/charlesboshell/Transportation-Template",
    tech: ["Next js", "Node js"],
    live: "https://transportation-spa-project.vercel.app",
    thumnail: "transportation.jpg",
    featured: false,
  },
  {
    title: "Frontend Kanban",
    description:
      "Using Pure HTML, CSS, Javascript implementation frontend mission kanban",
    code: "https://github.com/charlesboshell/Frontend-Kanban",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "DnD",
      "Google Login",
      "Firebase Auth",
      "Firebase Firestore",
    ],
    live: "https://charles-kanban.netlify.app",
    thumnail: "frontend-kanban.jpg",
    featured: false,
  },
  {
    title: "Eugene UI Webpage",
    description: "Frontend UI Collection",
    code: "https://github.com/charlesboshell/Eugene-UI-Webpage",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://eugene-ui.vercel.app",
    thumnail: "ui-collection.jpg",
    featured: false,
  },
  {
    title: "Eugene Dashboard",
    description: "Dashboard Template",
    code: "https://github.com/charlesboshell/Fake-Dashboard",
    tech: [
      "React",
      "Fullcalendar",
      "Mui",
      "Nivo",
      "Reduxjs",
      "Chart",
      "Formik",
      "Reduxjs",
      "React-pro-sidebar",
      "Yup",
    ],
    live: "https://eugene-ui.vercel.app",
    thumnail: "eugene-dashboard.jpg",
    featured: false,
  },
  {
    title: "Tech Notes",
    description: "Memorize alot tech post, roadmap and skill.",
    code: "https://github.com/charlesboshell/Notes",
    tech: ["Nextjs 12", "Cheerio", "MongoDB"],
    live: "https://charles-favorite.vercel.app",
    thumnail: "tech-note.jpg",
    featured: false,
  },
];
