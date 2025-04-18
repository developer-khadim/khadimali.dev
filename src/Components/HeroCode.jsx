import { Code } from "lucide-react";

const HeroCode = () => {
  return (
    <section
      className="group dark:bg-gray-800 rounded-2xl
      border-2 border-indigo-600 dark:border-gray-800
      shadow-[3px_3px_0px_0px_rgba(67,56,202,0.9)] sm:shadow-[4px_4px_0px_0px_rgba(67,56,202,0.9)]
      hover:shadow-[4px_4px_0px_0px_rgba(67,56,202,1)] sm:hover:shadow-[5px_5px_0px_0px_rgba(67,56,202,1)]
      dark:shadow-[3px_3px_0px_0px_rgba(55,65,81,0.9)] sm:dark:shadow-[4px_4px_0px_0px_rgba(55,65,81,0.9)]
      dark:hover:shadow-[4px_4px_0px_0px_rgba(55,65,81,1)] sm:dark:hover:shadow-[5px_5px_0px_0px_rgba(55,65,81,1)]
      transform transition-all duration-300 ease-out
      hover:-translate-y-1 hover:bg-indigo-50 dark:hover:bg-gray-750 h-max"
    >
      <div className="bg-gray-200 dark:bg-gray-800 rounded-t-2xl p-4 flex items-center justify-between border-b-2 border-indigo-600 dark:border-gray-700">
        <div className="flex space-x-2">
          <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
          <span className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" />
          <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
        </div>

        <div className="flex items-center text-gray-300">
          <Code className="w-4 h-4 mr-2 text-black dark:text-white" />
          <span className="text-sm font-medium dark:text-secondary text-primary">
            JavaScript
          </span>
        </div>
      </div>

      <pre className="relative p-4 sm:p-8 text-xs h-max sm:text-sm md:text-base font-mono rounded-b-2xl text-gray-300 overflow-x-auto dark:bg-[#0F172A] bg-gray-50 leading-relaxed">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 rounded-xl z-0
                    bg-[radial-gradient(circle,#6366f1_1px,transparent_1px)]
                    [background-size:10px_10px] opacity-10 dark:opacity-15
                    pointer-events-none transition-opacity duration-300
                    group-hover:opacity-20"
        />
        <code className="block">
          <span className="text-blue-600 dark:text-blue-400">const</span>{" "}
          <span className="text-yellow-700 dark:text-yellow-300">
            Programmer
          </span>{" "}
          <span className="text-pink-600 dark:text-pink-400">=</span>{" "}
          <span className="text-green-700 dark:text-green-400">&#123;</span>
          <div className="pl-4  text-black dark:text-gray-300">
            <span className="text-blue-700 dark:text-blue-300">name</span>
            <span className="text-pink-600 dark:text-pink-400">:</span>{" "}
            <span className="text-orange-700 dark:text-orange-300">
              {`Abdul Ali`}
            </span>
            ,
            <div>
              <span className="text-blue-700 dark:text-blue-300">skills</span>
              <span className="text-pink-600 dark:text-pink-400">:</span>{" "}
              <span className="text-green-700 dark:text-green-400">[</span>
              <div className="pl-4">
                <span className="text-orange-700 dark:text-orange-300">
                  "HTML"
                </span>
                ,{" "}
                <span className="text-orange-700 dark:text-orange-300">
                  "CSS"
                </span>
                ,{" "}
                <span className="text-orange-700 dark:text-orange-300">
                  "JavaScript"
                </span>
                ,
                <span className="text-orange-700 dark:text-orange-300">
                  "React JS"
                </span>
                ,{" "}
                <span className="text-orange-700 dark:text-orange-300">
                  "Next JS"
                </span>
                , <br />
                <span className="text-orange-700 dark:text-orange-300">
                  "Tailwind CSS"
                </span>
                ,{" "}
                <span className="text-orange-700 dark:text-orange-300">
                  "Shadcn UI"
                </span>
                ,
                <span className="text-orange-700 dark:text-orange-300">
                  "BootStrap"
                </span>
              </div>
              <span className="text-green-700 dark:text-green-400">]</span>,
            </div>
            <span className="text-blue-700 dark:text-blue-300">experience</span>
            <span className="text-pink-600 dark:text-pink-400">:</span>{" "}
            <span className="text-orange-700 dark:text-orange-300">
              "2 years"
            </span>
            ,
            <div>
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
            </div>
            <div>
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
                    this.hardWorker &amp;&amp;
                  </span>
                  , <br />
                  <span className="text-orange-700 dark:text-orange-300">
                    this.problemSolver &amp;&amp;
                  </span>
                  , <br />
                  <span className="text-orange-700 dark:text-orange-300">
                    this.skills.length &gt;= 5
                  </span>
                </div>
                <span className="text-green-700 dark:text-green-400">)</span>;
              </div>
              <span className="text-green-700 dark:text-green-400">&#125;</span>
            </div>
          </div>
          <span className="text-green-700 dark:text-green-400">&#125;</span>;
        </code>
      </pre>
    </section>
  );
};

export default HeroCode;
