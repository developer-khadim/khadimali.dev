import { Cpu, Code } from "lucide-react"
import SectionTitle from "./SectionTitle"

import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaGitAlt, FaLinux } from "react-icons/fa"

import { PiCompassToolDuotone } from "react-icons/pi"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { VscVscode } from "react-icons/vsc"
import { BiLogoNetlify } from "react-icons/bi"
import {
  SiCanva,
  SiGooglechrome,
  SiBrave,
  SiVercel,
  SiShadcnui,
  SiMaterialdesign,
  SiFramer,
  SiAxios,
} from "react-icons/si"
import { IoLogoWindows } from "react-icons/io"
import SkillCategory from "./SkillCategory"

const TechnicalExpertise = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code size={18} />,
      skills: [
        {
          name: "HTML",
          icon: <FaHtml5 className="w-3 h-3 text-primary group-hover:scale-110 transition-transform duration-300" />,
        },
        {
          name: "CSS",
          icon: <FaCss3Alt className="w-3 h-3 text-primary group-hover:scale-110 transition-transform duration-300" />,
        },
        {
          name: "JavaScript",
          icon: <FaJsSquare className="w-3 h-3 text-primary group-hover:scale-110 transition-transform duration-300" />,
        },
        {
          name: "React",
          icon: <FaReact className="w-3 h-3 text-primary group-hover:scale-110 transition-transform duration-300" />,
        },
        {
          name: "Next.js",
          icon: (
            <RiNextjsFill className="w-3 h-3 text-primary group-hover:scale-110 transition-transform duration-300" />
          ),
        },
        {
          name: "Axios",
          icon: <SiAxios className="w-3 h-3 text-primary group-hover:scale-110 transition-transform duration-300" />,
        },
        {
          name: "TailwindCSS",
          icon: (
            <RiTailwindCssFill className="w-3 h-3 text-primary group-hover:scale-110 transition-transform duration-300" />
          ),
        },
        {
          name: "MaterialUI",
          icon: (
            <SiMaterialdesign className="w-3 h-3 text-primary group-hover:scale-110 transition-transform duration-300" />
          ),
        },
        {
          name: "ShadcnUI",
          icon: <SiShadcnui className="w-3 h-3 text-primary group-hover:scale-110 transition-transform duration-300" />,
        },
        {
          name: "Framer ",
          icon: <SiFramer className="w-3 h-3 text-primary group-hover:scale-110 transition-transform duration-300" />,
        },
        {
          name: "Bootstrap",
          icon: (
            <FaBootstrap className="w-3 h-3 text-primary group-hover:scale-110 transition-transform duration-300" />
          ),
        },
        {
          name: "AOS",
          icon: <SiAxios className="w-3 h-3 text-primary group-hover:scale-110 transition-transform duration-300" />,
        },
        
      ],
    },

    {
      title: "Tools I Use",
      icon: <PiCompassToolDuotone size={18} className="text-primary" />,
      skills: [
        {
          name: "Git",
          icon: (
            <FaGitAlt className="w-3 h-3 text-primary group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
          ),
        },
        {
          name: "VS Code",
          icon: (
            <VscVscode className="w-3 h-3 text-primary group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
          ),
        },
        {
          name: "Linux",
          icon: (
            <FaLinux className="w-3 h-3 text-primary group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
          ),
        },
        {
          name: "Windows",
          icon: (
            <IoLogoWindows className="w-3 h-3 text-primary group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
          ),
        },
        {
          name: "Brave",
          icon: (
            <SiBrave className="w-3 h-3 text-primary group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
          ),
        },
        {
          name: "Chrome",
          icon: (
            <SiGooglechrome className="w-3 h-3 text-primary group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
          ),
        },
        {
          name: "Vercel",
          icon: (
            <SiVercel className="w-3 h-3 text-primary group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
          ),
        },
        {
          name: "Netlify",
          icon: (
            <BiLogoNetlify className="w-3 h-3 text-primary group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
          ),
        },
        {
          name: "Canva",
          icon: (
            <SiCanva className="w-3 h-3 text-primary group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
          ),
        },
      ],
    },
  ]

  return (
    <section className="mb-6 ">
      <SectionTitle icon={<Cpu size={16} />} title="Technical Expertise" />
      <hr className="border-gray-200 dark:border-gray-700 mb-3" />

      <div className="space-y-4">
        {skillCategories.map((category, index) => (
          <SkillCategory
            key={index}
            title={category.title}
            icon={category.icon}
            skills={category.skills}
            isLast={index === skillCategories.length - 1}
          />
        ))}
      </div>
    </section>
  )
}

export default TechnicalExpertise

