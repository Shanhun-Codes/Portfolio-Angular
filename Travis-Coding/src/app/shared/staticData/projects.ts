export default [
  {
    title: 'ApplyIQ Front-End',
    description:
      'The front-end for the ApplyIQ platform, built using Angular. This web application provides a user-friendly interface for job seekers to track and manage their job applications. Features include profile management, job application history, integration with the AI-powered backend for resume parsing, cover letter generation, and application status updates. The front-end communicates with the Ruby on Rails API backend to manage and store job-related data securely.',
    technologies: [
      'Angular',
      'TypeScript',
      'HTML',
      'CSS',
      'Tailwind', 
      'JWT Auth', 
      'RxJS', 
      'NGRX', 
    ],
    imageUrls: ['/assets/images/projectImages/applyIQ-frontend/home.jpg'],
    githubUrl: 'https://github.com/Shanhun-Codes/ApplyIQ-Angular-Front-End',
    liveDemoUrl: 'https://applyiq.netlify.app/',
    isFeatured: true,
  },
  {
    title: 'ApplyIQ Rails API',
    description:
      'The backend API for the ApplyIQ platform, built with Ruby on Rails. This API handles user authentication, profile management, and integrates with AWS S3 for file storage. It provides secure endpoints for handling job application tracking, including file uploads, status updates, and user preferences. The API uses JWT for authentication, ensuring secure communication between the client and server. The platform is built to be scalable, with a focus on security and performance.',
    technologies: [
      'Ruby on Rails',
      'JWT Auth', 
      'AWS S3', 
      'PostgreSQL', 
      'ActiveStorage', 
      'RSpec', 
      'Docker', 
      'AWS', 
    ],
    imageUrls: ['/assets/images/projectImages/default.png'],
    githubUrl: 'https://github.com/Shanhun-Codes/applyiq-rails-api',
    liveDemoUrl: 'https://applyiq-rails-api.onrender.com',
    isFeatured: true,
  },
  {
    title: 'K-Collective',
    description:
      'A privacy-focused mobile community platform built with React Native, designed for niche interests and secure social interaction.',
    technologies: ['React Native', 'Ruby on Rails', 'JWT Auth', 'Tailwind'],
    imageUrls: ['/assets/images/projectImages/default.png'],
    githubUrl: 'https://github.com/yourname/k-collective',
    liveDemoUrl: '',
    isFeatured: true,
  },
];
