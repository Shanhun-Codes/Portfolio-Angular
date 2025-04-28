interface TechItem {
  name: string;
  imgPath: string;
}

interface TechStack {
  languages: TechItem[];
  frameworks: TechItem[];
  tools: TechItem[];
}

export default TechStack;
