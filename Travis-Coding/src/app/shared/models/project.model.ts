export interface Project {
    title: string;
    description: string;
    technologies: string[]; 
    imageUrls: string[];
    githubUrl: string;
    liveDemoUrl: string;
    isFeatured?: boolean; 
  }
