import React from 'react';
import { Award, Briefcase, Calendar } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Certifications = () => {
return (
    <section className='my-6' >
        <SectionTitle icon={<Award size={16} />} title="Certifications" />
        <hr className='mb-2'/>
        <div>
            <h3 className="font-bold text-sm">Frontend Development using React</h3>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <div className="flex items-center">
                    <Briefcase size={14} className="text-indigo-600 mr-1 flex-shrink-0" />
                    <span className="text-[12px]  ">Board Infinity (via Coursera)</span>
                </div>
                <div className="flex items-center">
                    <Calendar size={14} className="text-indigo-600 mr-1 flex-shrink-0" />
                    <span className="text-sm">23/03/2024</span>
                </div>
            </div>  
            <p className="text-sm  mt-1"> Proficient in React.js, state management, hooks, and modern web development. Built responsive UIs and SPAs. </p>
        </div>
        <div className='pt-2' >
            <h3 className="font-bold text-sm ">  HTML ,CSS , JS for Web Development </h3>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <div className="flex items-center">
                    <Briefcase size={14} className="text-indigo-600 mr-1 flex-shrink-0" />
                    <span className="text-[12px]  ">JH University (via Coursera)</span>
                </div>
                <div className="flex items-center">
                    <Calendar size={14} className="text-indigo-600 mr-1 flex-shrink-0" />
                    <span className="text-sm">04/01/2024</span>
                </div>
            </div>  
            <p className="text-sm  mt-1"> Mastered core web technologies: HTML5 for structure, CSS3 for styling and responsive design, JavaScript for interactive functionality and DOM manipulation. </p>
        </div>
    </section>
);
};

export default Certifications;