import React from 'react';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Education = () => {
    return (
        <section className="mb-2">
            <SectionTitle icon={<GraduationCap size={16} />} title="Education" />
            <hr className='mb-2' />
            <div className="mb-2">
                <h3 className="font-bold text-sm dark:text-white">B.S Computer Science</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <div className="flex items-center">
                        <Briefcase size={14} className="text-indigo-600 dark:text-indigo-400 mr-1 flex-shrink-0" />
                        <a href='https://saus.edu.pk/' target='_blank' className="text-sm dark:text-gray-300 hover:text-underline">The Shaikh Ayaz University Shikarpur</a>
                    </div>
                    <div className="flex items-center">
                        <Calendar size={14} className="text-indigo-600 dark:text-indigo-400 mr-1 flex-shrink-0" />
                        <span className="text-sm dark:text-gray-300">2023 - Present</span>
                    </div>
                </div>
            </div>

            <div className="mb-2">
                <h3 className="font-bold text-sm dark:text-white">Intermediate (Pre-Engineering)</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <div className="flex items-center">
                        <Briefcase size={14} className="text-indigo-600 dark:text-indigo-400 mr-1 flex-shrink-0" />
                        <span className="text-[12px] dark:text-gray-300">Govt. Qazi Habibullah Higher Secondary School Shikarpur</span>
                    </div>
                    <div className="flex items-center">
                        <Calendar size={14} className="text-indigo-600 dark:text-indigo-400 mr-1 flex-shrink-0" />
                        <span className="text-sm dark:text-gray-300">2021 - 2022</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;