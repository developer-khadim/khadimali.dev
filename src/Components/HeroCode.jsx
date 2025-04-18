// import { Code } from "lucide-react";

// const HeroCode = () => {
//   return (
//     <section
//       className="group dark:bg-gray-800 rounded-2xl
//       border-2 border-indigo-600 dark:border-gray-800
//       shadow-[3px_3px_0px_0px_rgba(67,56,202,0.9)] sm:shadow-[4px_4px_0px_0px_rgba(67,56,202,0.9)]
//       hover:shadow-[4px_4px_0px_0px_rgba(67,56,202,1)] sm:hover:shadow-[5px_5px_0px_0px_rgba(67,56,202,1)]
//       dark:shadow-[3px_3px_0px_0px_rgba(55,65,81,0.9)] sm:dark:shadow-[4px_4px_0px_0px_rgba(55,65,81,0.9)]
//       dark:hover:shadow-[4px_4px_0px_0px_rgba(55,65,81,1)] sm:dark:hover:shadow-[5px_5px_0px_0px_rgba(55,65,81,1)]
//       transform transition-all duration-300 ease-out
//       hover:-translate-y-1 hover:bg-indigo-50 dark:hover:bg-gray-750 h-max"
//     >
//       <div className="bg-gray-200 dark:bg-gray-800 rounded-t-2xl p-4 flex items-center justify-between border-b-2 border-indigo-600 dark:border-gray-700">
//         <div className="flex space-x-2">
//           <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
//           <span className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" />
//           <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
//         </div>

//         <div className="flex items-center text-gray-300">
//           <Code className="w-4 h-4 mr-2 text-black dark:text-white" />
//           <span className="text-sm font-medium dark:text-secondary text-primary">
//             JavaScript
//           </span>
//         </div>
//       </div>

//       <pre className="relative p-4 sm:p-8 text-xs h-max sm:text-sm md:text-base font-mono rounded-b-2xl text-gray-300 overflow-x-auto dark:bg-[#0F172A] bg-gray-50 leading-relaxed">
//         {/* Background Pattern */}
//         <div
//           className="absolute inset-0 rounded-xl z-0
//                     bg-[radial-gradient(circle,#6366f1_1px,transparent_1px)]
//                     [background-size:10px_10px] opacity-10 dark:opacity-15
//                     pointer-events-none transition-opacity duration-300
//                     group-hover:opacity-20"
//         />
//         <code className="block">
//           <span className="text-blue-600 dark:text-blue-400">const</span>{" "}
//           <span className="text-yellow-700 dark:text-yellow-300">
//             Programmer
//           </span>{" "}
//           <span className="text-pink-600 dark:text-pink-400">=</span>{" "}
//           <span className="text-green-700 dark:text-green-400">&#123;</span>
//           <div className="pl-4  text-black dark:text-gray-300">
//             <span className="text-blue-700 dark:text-blue-300">name</span>
//             <span className="text-pink-600 dark:text-pink-400">:</span>{" "}
//             <span className="text-orange-700 dark:text-orange-300">
//               {`Abdul Ali`}
//             </span>
//             ,
//             <div>
//               <span className="text-blue-700 dark:text-blue-300">skills</span>
//               <span className="text-pink-600 dark:text-pink-400">:</span>{" "}
//               <span className="text-green-700 dark:text-green-400">[</span>
//               <div className="pl-4">
//                 <span className="text-orange-700 dark:text-orange-300">
//                   "HTML"
//                 </span>
//                 ,{" "}
//                 <span className="text-orange-700 dark:text-orange-300">
//                   "CSS"
//                 </span>
//                 ,{" "}
//                 <span className="text-orange-700 dark:text-orange-300">
//                   "JavaScript"
//                 </span>
//                 ,
//                 <span className="text-orange-700 dark:text-orange-300">
//                   "React JS"
//                 </span>
//                 ,{" "}
//                 <span className="text-orange-700 dark:text-orange-300">
//                   "Next JS"
//                 </span>
//                 , <br />
//                 <span className="text-orange-700 dark:text-orange-300">
//                   "Tailwind CSS"
//                 </span>
//                 ,{" "}
//                 <span className="text-orange-700 dark:text-orange-300">
//                   "Shadcn UI"
//                 </span>
//                 ,
//                 <span className="text-orange-700 dark:text-orange-300">
//                   "BootStrap"
//                 </span>
//               </div>
//               <span className="text-green-700 dark:text-green-400">]</span>,
//             </div>
//             <span className="text-blue-700 dark:text-blue-300">experience</span>
//             <span className="text-pink-600 dark:text-pink-400">:</span>{" "}
//             <span className="text-orange-700 dark:text-orange-300">
//               "2 years"
//             </span>
//             ,
//             <div>
//               <span className="text-blue-600 dark:text-blue-400">
//                 hardWorker
//               </span>
//               <span className="text-pink-600 dark:text-pink-400">:</span>{" "}
//               <span className="text-green-800 dark:text-green-500">true</span>{" "}
//               <br />
//               <span className="text-blue-600 dark:text-blue-400">
//                 quickLearner
//               </span>
//               <span className="text-pink-600 dark:text-pink-400">:</span>{" "}
//               <span className="text-green-800 dark:text-green-500">true</span>,
//               <br />
//               <span className="text-blue-600 dark:text-blue-400">
//                 problemSolver
//               </span>
//               <span className="text-pink-600 dark:text-pink-400">:</span>{" "}
//               <span className="text-green-800 dark:text-green-500">true</span>,
//             </div>
//             <div>
//               <span className="text-blue-700 dark:text-blue-300">hireable</span>
//               <span className="text-pink-600 dark:text-pink-400">:</span>{" "}
//               <span className="text-blue-600 dark:text-blue-400">function</span>
//               <span className="text-yellow-700 dark:text-yellow-300">
//                 ()
//               </span>{" "}
//               <span className="text-green-700 dark:text-green-400">&#123;</span>
//               <div className="pl-4">
//                 <span className="text-blue-600 dark:text-blue-400">return</span>{" "}
//                 <span className="text-green-700 dark:text-green-400">(</span>
//                 <div className="pl-4">
//                   <span className="text-orange-700 dark:text-orange-300">
//                     this.hardWorker &amp;&amp;
//                   </span>
//                   , <br />
//                   <span className="text-orange-700 dark:text-orange-300">
//                     this.problemSolver &amp;&amp;
//                   </span>
//                   , <br />
//                   <span className="text-orange-700 dark:text-orange-300">
//                     this.skills.length &gt;= 5
//                   </span>
//                 </div>
//                 <span className="text-green-700 dark:text-green-400">)</span>;
//               </div>
//               <span className="text-green-700 dark:text-green-400">&#125;</span>
//             </div>
//           </div>
//           <span className="text-green-700 dark:text-green-400">&#125;</span>;
//         </code>
//       </pre>
//     </section>
//   );
// };

// export default HeroCode;


import React, { useEffect } from "react";
import { Code } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const HeroCode = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    hover: {
      y: -10,
      boxShadow: "5px 5px 0px 0px rgba(67,56,202,1)",
      backgroundColor: "#EEF2FF",
      transition: { duration: 0.3 },
    },
  };

  // Animation variants for the code elements
  const codeLineVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  // Dot bounce animation
  const dotVariants = {
    pulse: {
      scale: [1, 1.2, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="group dark:bg-gray-800 rounded-2xl
        border-2 border-indigo-600 dark:border-gray-800  
        shadow-[3px_3px_0px_0px_rgba(67,56,202,0.9)] sm:shadow-[4px_4px_0px_0px_rgba(67,56,202,0.9)]
        dark:shadow-[3px_3px_0px_0px_rgba(55,65,81,0.9)] sm:dark:shadow-[4px_4px_0px_0px_rgba(55,65,81,0.9)]
        transform transition-all duration-300 ease-out
        h-[60vh] w-[30vw]"
    >
      <div className="bg-gray-200 dark:bg-gray-800 rounded-t-2xl p-4 flex items-center justify-between border-b-2 border-indigo-600 dark:border-gray-700">
        <div className="flex space-x-2">
          <motion.span
            variants={dotVariants}
            animate="pulse"
            className="w-3 h-3 bg-red-500 rounded-full"
          />
          <motion.span
            variants={dotVariants}
            animate="pulse"
            transition={{ delay: 0.2 }}
            className="w-3 h-3 bg-yellow-500 rounded-full"
          />
          <motion.span
            variants={dotVariants}
            animate="pulse"
            transition={{ delay: 0.4 }}
            className="w-3 h-3 bg-green-500 rounded-full"
          />
        </div>

        <motion.div
          className="flex items-center text-gray-300"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Code className="w-4 h-4 mr-2 text-black dark:text-white" />
          <span className="text-sm font-medium dark:text-secondary text-primary">
            JavaScript
          </span>
        </motion.div>
      </div>

      <pre className="relative p-4 sm:p-8 text-xs h-[54vh] sm:text-sm md:text-base font-mono rounded-b-2xl text-gray-300 overflow-x-auto dark:bg-[#0F172A] bg-gray-50 leading-relaxed">
        {/* Background Pattern with motion */}
        <motion.div
          initial={{ opacity: 0.1 }}
          animate={{ opacity: 0.1 }}
          whileHover={{ opacity: 0.2 }}
          className="absolute inset-0 rounded-xl z-0 
                    bg-[radial-gradient(circle,#6366f1_1px,transparent_1px)] 
                    [background-size:10px_10px] opacity-10 dark:opacity-15 
                    pointer-events-none transition-opacity duration-300 
                    group-hover:opacity-20"
        />
        <code className="block">
          <motion.span
            variants={codeLineVariants}
            className="text-blue-600 dark:text-blue-400"
          >
            const
          </motion.span>{" "}
          <motion.span
            variants={codeLineVariants}
            className="text-yellow-700 dark:text-yellow-300"
          >
            Programmer
          </motion.span>{" "}
          <motion.span
            variants={codeLineVariants}
            className="text-pink-600 dark:text-pink-400"
          >
            =
          </motion.span>{" "}
          <motion.span
            variants={codeLineVariants}
            className="text-green-700 dark:text-green-400"
          >
            &#123;
          </motion.span>
          <motion.div
            variants={codeLineVariants}
            className="pl-4 text-black dark:text-gray-300"
          >
            <span className="text-blue-700 dark:text-blue-300">name</span>
            <span className="text-pink-600 dark:text-pink-400">:</span>{" "}
            <span className="text-orange-700 dark:text-orange-300">
              `Khadim Ali`
            </span>
            ,
            <motion.div variants={codeLineVariants}>
              <span className="text-blue-700 dark:text-blue-300">skills</span>
              <span className="text-pink-600 dark:text-pink-400">:</span>{" "}
              <span className="text-green-700 dark:text-green-400">[</span>
              <div className="pl-4">
                <span className="text-orange-700 dark:text-orange-300">
                  `HTML`
                </span>
                ,{" "}
                <span className="text-orange-700 dark:text-orange-300">
                  `CSS`
                </span>
                ,{" "}
                <span className="text-orange-700 dark:text-orange-300">
                  `JavaScript`
                </span>
                ,
                <span className="text-orange-700 dark:text-orange-300">
                  `React JS`
                </span>
                ,{" "}
                <span className="text-orange-700 dark:text-orange-300">
                  `Next Js`
                </span>
                , <br />
                <span className="text-orange-700 dark:text-orange-300">
                  `Tailwind CSS`
                </span>
                ,
                <span className="text-orange-700 dark:text-orange-300">
                  `BootStrap`
                </span>
                ,{" "}
                <span className="text-orange-700 dark:text-orange-300">
                  `Framer Motion`
                </span>
              </div>
              <span className="text-green-700 dark:text-green-400">]</span>,
            </motion.div>
            <motion.span
              variants={codeLineVariants}
              className="text-blue-700 dark:text-blue-300"
            >
              experience
            </motion.span>
            <motion.span
              variants={codeLineVariants}
              className="text-pink-600 dark:text-pink-400"
            >
              :
            </motion.span>{" "}
            <motion.span
              variants={codeLineVariants}
              className="text-orange-700 dark:text-orange-300"
            >
              `2+ years`
            </motion.span>
            ,
            <motion.div variants={codeLineVariants}>
              <span className="text-blue-600 dark:text-blue-400">
                hardWorker
              </span>
              <span className="text-pink-600 dark:text-pink-400">:</span>{" "}
              <span className="text-green-800 dark:text-green-500">true</span>{" "}
              <br />
              <span className="text-blue-600 dark:text-blue-400">
                quickLearner
              </span>
              <span className="text-pink-600 dark:text-pink-400">:</span>{" "}
              <span className="text-green-800 dark:text-green-500">true</span>,
              <br />
              <span className="text-blue-600 dark:text-blue-400">
                problemSolver
              </span>
              <span className="text-pink-600 dark:text-pink-400">:</span>{" "}
              <span className="text-green-800 dark:text-green-500">true</span>,
            </motion.div>
            <motion.div variants={codeLineVariants}>
              <span className="text-blue-700 dark:text-blue-300">hireable</span>
              <span className="text-pink-600 dark:text-pink-400">:</span>{" "}
              <span className="text-blue-600 dark:text-blue-400">function</span>
              <span className="text-yellow-700 dark:text-yellow-300">
                ()
              </span>{" "}
              <span className="text-green-700 dark:text-green-400">&#123;</span>
              <div className="pl-4">
                <span className="text-blue-600 dark:text-blue-400">return</span>{" "}
                <span className="text-green-700 dark:text-green-400">(</span>
                <div className="pl-4">
                  <span className="text-orange-700 dark:text-orange-300">
                    `this.hardWorker &&`
                  </span>
                  , <br />
                  <span className="text-orange-700 dark:text-orange-300">
                    `this.problemSolver &&`
                  </span>
                  , <br />
                  <span className="text-orange-700 dark:text-orange-300">
  {'this.skills.length >= 5'}
</span>
 
                </div>
                <span className="text-green-700 dark:text-green-400">)</span>;
              </div>
              <span className="text-green-700 dark:text-green-400">&#125;</span>
            </motion.div>
          </motion.div>
          <motion.span
            variants={codeLineVariants}
            className="text-green-700 dark:text-green-400"
          >
            &#125;
          </motion.span>
          ;
        </code>
      </pre>
    </motion.div>
  );
};

export default HeroCode;
