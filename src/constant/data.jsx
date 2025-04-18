// src/constant/data.js
import { FaCode, FaReact, FaGlobe } from "react-icons/fa";

import {
  PiCodeSimple,
  PiCompassToolDuotone,
  PiMedal,
  PiStarFour,
} from "react-icons/pi";

import {
  Home,
  Code,
  GraduationCap,
  Briefcase,
  Contact,
  FolderGit2,
} from "lucide-react";

// backend api endpoints
export const USER_API_ENDPOINT =
  "https://backend-puce-xi.vercel.app/api/v1/user";

export const EDUCATION_API_ENDPOINT =
  "https://backend-puce-xi.vercel.app/api/v1/education";

export const EXPERIENCE_API_ENDPOINT =
  "https://backend-puce-xi.vercel.app/api/v1/experience";

export const COURSE_API_ENDPOINT =
  "https://backend-puce-xi.vercel.app/api/v1/course";

export const EXPERTISE_API_ENDPOINT = 
  "https://backend-puce-xi.vercel.app/api/v1/expertise";

export const PROJECTS_API_ENDPOINT =
  "https://backend-puce-xi.vercel.app/api/v1/projects";

export const MESSAGE_API_ENDPOINT =
  "https://backend-puce-xi.vercel.app/api/v1/messages";

export const heroDataRoles = [
  { text: "Front-End Developer" },
  { text: "React js Developer" },
  { text: "Builder of Seamless Web Experiences"  },
  { text: "Next js Developer" },
  { text: "Freelancer" },
];

export const statsCardData = [
  {
    icon: <PiMedal className="text-white" />,
    title: "Projects Completed",
    value: 10,
  },
  {
    icon: <PiCodeSimple className="text-white" />,
    title: "Years of Experience",
    value: 2,
  },
  {
    icon: <PiStarFour className="text-white" />,
    title: "Skills & Technologies",
    value: 16,
  },
  {
    icon: <PiCompassToolDuotone className="text-white" />,
    title: "Tools Used",
    value: 7,
  },
];

// nav link data
export const NavItems = [
  { id: "home", icon: Home, label: "Home", to: "#home" },
  { id: "code", icon: Code, label: "Skills & Experiences", to: "#code" },
  {
    id: "education",
    icon: GraduationCap,
    label: "Academic Journey",
    to: "#education",
  },
  { id: "work", icon: Briefcase, label: "Experiences", to: "#work" },
  { id: "projects", icon: FolderGit2, label: "Projects", to: "#projects" },
  { id: "contact", icon: Contact, label: "Contact", to: "#contact" },
];
