import React from "react";
import { MapPin, Phone, Mail, Github, Linkedin, Globe } from "lucide-react";

const Header = () => {
  return (
    <header className="mb-2">
      <h1 className="text-3xl sm:text-4xl font-bold text-indigo-600 dark:text-secondary ">
        Khadim Ali
      </h1>
      <p className="text-[14px]  sm:text-xl mb-4">Frontend Developer</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pr-8 mb-4 ">
        <div className="flex items-center gap-1">
          <MapPin
            size={16}
            className="text-indigo-600 dark:text-secondary flex-shrink-0"
          />
          <span className="text-sm">
            Shikarpur, Sindh, Pakistan
          </span>
        </div>
        <div className="flex items-center gap-1">
          <Phone
            size={16}
            className="text-indigo-600 dark:text-secondary flex-shrink-0"
          />
          <a href="tel:+923490393306" className="text-sm hover:text-indigo-600">
            +92-349-0393306
          </a>
        </div>
        <div className="flex items-center gap-1">
          <Mail
            size={16}
            className="text-indigo-600 dark:text-secondary flex-shrink-0"
          />
          <a href="mailto:Khadimalisoomro33@gmail.com" className="text-sm hover:text-indigo-600">
            Khadimalisoomro33@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-1">
          <Github
            size={16}
            className="text-indigo-600 dark:text-secondary flex-shrink-0"
          />
          <a href="https://github.com/developer-khadim" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-indigo-600">
            github.com/developer-khadim
          </a>
        </div>
        <div className="flex items-center gap-1">
          <Linkedin
            size={16}
            className="text-indigo-600 dark:text-secondary flex-shrink-0"
          />
          <a href="https://www.linkedin.com/in/khadim-ali12/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-indigo-600">
            www.linkedin.com/khadim_ali12
          </a>
        </div>
        <div className="flex items-center gap-1">
          <Globe
            size={16}
            className="text-indigo-600 dark:text-secondary flex-shrink-0"
          />
          <a href="https://www.khadim-dev.vercel.app" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-indigo-600">
            www.khadim-dev.vercel.app
          </a>
        </div>
      </div>
      <hr />
    </header>
  );
};

export default Header;
