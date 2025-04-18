import React from 'react';
import { Code } from 'lucide-react';
import SectionTitle from './SectionTitle';

const ProfessionalSummary = () => {
    return (
        <section className="mb-6">  
            <SectionTitle icon={<Code size={16} className='text-primary dark:text-secondary' />} title="Professional Summary" />
            <hr className="mb-2"/>
            <p className="text-sm">
                Passionate Frontend Developer specializing in <span className="text-indigo-600 dark:text-secondary font-medium">React.js development</span>, 
                with strong expertise in building responsive and user-friendly web applications. 
                Proficient in modern JavaScript, state management, and UI/UX best practices. 
                Committed to writing clean, maintainable code and creating engaging user experiences.
            </p>
        </section>
    );
};

export default ProfessionalSummary;
