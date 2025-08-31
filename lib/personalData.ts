import {
  CodeIcon,
  CpuIcon,
  LayersIcon,
  MessageCircleIcon,
  EyeIcon,
  BrainIcon,
  ContainerIcon,
  HexagonIcon,
  GitBranchIcon,
  ChefHatIcon,
  CameraIcon,
} from "lucide-react";

export const SKILL_ICONS: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  Python: CodeIcon,
  TensorFlow: CpuIcon,
  PyTorch: CpuIcon,
  Keras: LayersIcon,
  NLP: MessageCircleIcon,
  GenAI: MessageCircleIcon,
  "Computer Vision": EyeIcon,
  "Deep Learning": BrainIcon,
  Docker: ContainerIcon,
  Kubernetes: HexagonIcon,
  Git: GitBranchIcon,
};

interface TechStackItem {
  name: string;
  tooltip?: string;
}

export interface CaseStudy {
  challenge: string;
  solution: string;
  impact: string;
}

export interface ResponsibilityWithCaseStudy {
  text: string;
  skills: string[];
  caseStudy: CaseStudy;
}

export interface ResponsibilityWithoutCaseStudy {
  text: string;
  skills: string[];
  caseStudy?: undefined;
}

export type Responsibility =
  | ResponsibilityWithCaseStudy
  | ResponsibilityWithoutCaseStudy;

interface Publication {
  text: string;
  url: string;
}

interface Job {
  title: string;
  company: string;
  companyUrl: string;
  location: string;
  date: string;
  techStack?: TechStackItem[];
  responsibilities: Responsibility[];
  publications?: Publication[];
}

interface EDUCATION {
  cursus: string;
  school: string;
  date: string;
  description: string;
}

// --- Data for Skills, Experience, and Interests ---
export const CONTACT_INFO = {
  email: "theo.marcille@gmail.com",
  phone: "+33 (0)6 28 47 85 08",
  linkedin: {
    url: "https://www.linkedin.com/in/th%C3%A9o-marcille-0913a6141/",
    display: "LinkedIn",
  },
};

export const SKILLS_BY_CATEGORY = [
  {
    category: "Programming Languages",
    skills: ["Python", "React"],
  },
  {
    category: "ML Specializations",
    skills: ["NLP", "Computer Vision", "Deep Learning", "GenAI"],
  },
  {
    category: "Tools & Technologies",
    skills: ["Docker", "Kubernetes", "Git"],
  },
  {
    category: "Cloud Platforms",
    skills: ["AWS", "GCP", "Azure"],
  },
];

export const PROFESSIONAL_EXPERIENCE: Job[] = [
  {
    title: "Machine Learning Engineer",
    company: "AGC Glass Europe",
    companyUrl: "https://www.agc-glass.eu/en",
    location: "Louvain-La-Neuve (Belgium)",
    date: "2023 - Present",
    techStack: [
      { name: "AWS", tooltip: "Managed deployment on SageMaker." },
      { name: "Docker" },
      { name: "Kubernetes" },
    ],
    responsibilities: [
      {
        text: "Development of internal Chatbot platform with RAG capabilities (Tech Lead)",
        skills: ["Git"],
      },
      {
        text: "Development of a configurable email processing pipeline to facilitate order intakes",
        skills: ["Git"],
        caseStudy: {
          challenge: "",
          solution: "",
          impact: "",
        },
      },
      {
        text: "Made multiple webinars and trainings as part of the change management process",
        skills: [],
      } as ResponsibilityWithoutCaseStudy,
      {
        text: "Development of safety apps with alerting system in case of dangerous situations",
        skills: ["Git"],
      } as ResponsibilityWithoutCaseStudy,
    ],
  },
  {
    title: "Data Scientist",
    company: "Sêmeia",
    companyUrl: "https://www.semeia.io/",
    location: "Toulouse (France)",
    date: "2020 - 2023",
    techStack: [{ name: "Pytorch", tooltip: "" }],
    responsibilities: [
      {
        text: "Development of safety apps with alerting system in case of dangerous situations",
        skills: [],
      },
      {
        text: "In charge of the internal python library used to speed-up the studies (preprocess the data, create features, facilitate the creation of predictive models and deploy them in production)",
        skills: [],
      } as ResponsibilityWithoutCaseStudy,
      {
        text: "Made posters presenting these studies in both french and international conferences",
        skills: [],
      } as ResponsibilityWithoutCaseStudy,
    ],
    publications: [
      {
        text: "Dynamic Projection of Medication Nonpersistence and Nonadherence Among Patients With Early Breast Cancer",
        url: "https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2818949",
      },
      {
        text: "Epidemiology, Comorbidity, Treatment and Outcome of Autoimmune Liver Diseases: A French Nationwide Study",
        url: "https://www.sciencedirect.com/science/article/pii/S2589555925002253",
      },
    ],
  },
];

export const EDUCATION: EDUCATION[] = [
  {
    cursus:
      "Research Master, specializing in Machine Learning and Optimization of Complex Systems",
    school: "Université de Technologie de Compiègne",
    date: "2019-2020",
    description: "Machine Learning, Operational research, Decision theory",
  },
  {
    cursus:
      "Master in Computer Engineering, specializing in Data Mining and Decision-making",
    school: "Université de Technologie de Compiègne",
    date: "2014-2020",
    description:
      "Main subjects : Machine Learning, Data mining and analysis, Statistics, Data-warehouse conception and population General subjects : Object-oriented programming and conception, Linear programming, Databases, Project management",
  },
];

export const INTERESTS = [
  {
    name: "Cooking",
    icon: ChefHatIcon,
    tooltip: "",
  },
  {
    name: "Photography",
    icon: CameraIcon,
    tooltip:
      "Shooting with a Fujifilm X-100F, focusing on street and landscape.",
  },
];
