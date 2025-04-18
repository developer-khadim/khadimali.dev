import React from 'react';
import { IoArrowBack, IoPrint } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const ActionButtons = () => {
    const navigate = useNavigate();



    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="fixed w-full flex justify-between px-4 sm:px-8 max-w-[100vw] mx-auto print:hidden">
            <a
               href='/'
                className="flex items-center gap-2 px-4 p   y-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
                <IoArrowBack className="text-lg" />
                <span>Go Back</span>
            </a>

            <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
                <IoPrint className="text-lg" />
                <span>Print Resume</span>
            </button>
        </div>
    );
};

export default ActionButtons;