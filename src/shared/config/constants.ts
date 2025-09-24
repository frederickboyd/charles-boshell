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
  {
    title: "WhatsApp AI Chatbot Flow Builder",
    description:
      "The WhatsApp AI Chatbot Flow Builder lets businesses automate chat flows using a drag-and-drop UI. It supports editable questions, dynamic responses, and Twilio integration. Clean UI, easy setup, and smooth automation.",
    code: "https://github.com/Saini-Yogesh/WhatsApp-AI-Chatbot",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Twilio API",
      "OpenAI API",
    ],
    live: "https://whatsapp-ai-chatbot.vercel.app/",
    thumnail: "Flow-Builder.61f63a3f818087a33578.png",
    featured: false,
  },
  {
    title: "Trip-connect",
    description:
      "Trip-Connect is a platform that connects solo travelers to share expenses and enhance social interactions. Built with React.js, Node.js, Express.js, and MongoDB, it offers a responsive UI and real-time travel planning features for a seamless experience.",
    code: "https://github.com/Saini-Yogesh/Trip-connect",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    live: "https://saini-yogesh.github.io/Trip-connect/",
    thumnail: "TripConnect.91abd21a463ee95115cc.png",
    featured: false,
  },
  {
    title: "Segment Tree Visualizer",
    description:
      "The Segment Tree Visualizer is a web-based application built using Next.js that provides an interactive way to understand and visualize different types of segment trees. This project showcases efficient data structure operations and dynamic visualizations.",
    code: "https://github.com/Saini-Yogesh/segment-tree-visualization",
    tech: ["Next.js", "D3.js", "JavaScript"],
    live: "https://segment-tree-visualization.vercel.app/",
    thumnail: "SGT.fc0d5b4ce6e13cb54e58.png",
    featured: false,
  },
  {
    title: "E-Commerce-Store",
    description:
      "E-Commerce Website is a modern shopping platform built with React, Node.js, Express.js, and MongoDB. It features user authentication, product browsing, shopping cart, secure payments (PayPal/Stripe), and an admin dashboard for managing inventory and orders. With a responsive design and seamless experience, it ensures smooth transactions.",
    code: "https://github.com/Saini-Yogesh/E-Commerce-Store",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    live: "https://github.com/Saini-Yogesh/E-Commerce-Store",
    thumnail: "E-commerce-store.442c0760eac36617fab8.png",
    featured: false,
  },
];
