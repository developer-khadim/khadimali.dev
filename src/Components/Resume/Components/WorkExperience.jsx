import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import SectionTitle from './SectionTitle';
import ExperienceItem from './ExperienceItem';

const WorkExperience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "ThesisAI",
      location: "San Jose, California",
      period: "01/02/2024 - 31/10/2024",
      responsibilities: [
        "Collaborated on the development of large-scale AI applications within the StudioX AI apps web ecosystem.",
        "Worked remotely in the Pacific Time Zone.",
        "Created data visualizations for dashboards and reports, utilizing charts such as pie charts, heatmaps, bar charts, pie charts, and word clouds.",
        "Developed applications with advanced drag-and-drop functionality to enhance user interactivity and experience.",
        "Worked on applications integrated with OpenAI technologies to deliver intelligent and automated features."
      ]
    },
    {
      title: "Senior Full Stack JS Developer",
      company: "AVROX Solutions",
      location: "Islamabad",
      period: "06/2023 - 02/2024",
      responsibilities: [
        "Collaborated on the development of large-scale web applications, improving performance and user experience.",
        "Worked in a hybrid remote model with shifts in the Eastern Timezone.",
        "Ensured code quality through thorough reviews and performance optimization.",
        "Engaged directly with clients to understand and align project requirements.",
        "Trained and guided junior developers, enhancing team skills."
      ]
    },
    {
      title: "Freelance Full Stack JS Developer",
      company: "Fiverr",
      location: "Remote",
      period: "09/2019 - 2023",
      responsibilities: [
        "Freelancer specializing in Full Stack Mobile and Web App Development.",
        "Achieved Level 1 Seller status with numerous 5-star reviews from clients in the US, Canada, and France.",
        "Experienced in helping startups and established businesses achieve their digital goals."
      ]
    }
  ];

  return (
    <section className="mb-6">
      <SectionTitle icon={<Briefcase size={16}  />} title="Work Experience" />
      <hr className='mb-2' />
      {experiences.map((exp, index) => (
        <ExperienceItem key={index} experience={exp} />
      ))}
    </section>
  );
};

export default WorkExperience;