import {
  FiAward,
  FiLoader,
  FiBook,
  FiClock,
  FiCode,
  FiLayers,
} from "react-icons/fi";
import StatCard from "../Components/StatCard";
import useGetData from "../../../hooks/useGetData";
import {
  COURSE_API_ENDPOINT,
  EDUCATION_API_ENDPOINT,
  EXPERIENCE_API_ENDPOINT,
  EXPERTISE_API_ENDPOINT,
  PROJECTS_API_ENDPOINT,
} from "../../../constant/data";

const Dashboard = () => {
  // Fetch data from different endpoints
  const { data: projects, loading: projectsLoading } = useGetData(
    `${PROJECTS_API_ENDPOINT}/get-all`
  );
  const { data: education, loading: educationLoading } = useGetData(
    `${EDUCATION_API_ENDPOINT}/get-degrees`
  );
  const { data: experience, loading: experienceLoading } = useGetData(
    `${EXPERIENCE_API_ENDPOINT}/get-experience`
  );
  const { data: skills, loading: skillsLoading } = useGetData(
    `${EXPERTISE_API_ENDPOINT}/get-expertise`
  );
  const { data: certifications, loading: certsLoading } = useGetData(
    `${COURSE_API_ENDPOINT}/get-courses`
  );

  // Calculate counts
  const projectsCount = projects?.length || 0;
  const educationCount = education?.degrees?.length || 0;
  const experienceCount = experience?.experiences?.length || 0;
  const skillsCount = skills?.length || 0;
  const certificationsCount = certifications?.courses?.length || 0;

  // Loading state for all data
  const isLoading =
    projectsLoading ||
    educationLoading ||
    experienceLoading ||
    skillsLoading ||
    certsLoading;

  return (
    <div className="space-y-6 select-none">
      <h1 className="text-2xl md:text-3xl font-bold text-primary dark:text-secondary">
        Dashboard
      </h1>

      {isLoading ? (
        <div className="text-center py-16">
          <FiLoader className="h-12 w-12 animate-spin mx-auto text-blue-500" />
          <h3 className="text-xl text-gray-600 dark:text-gray-400 mt-4">
            Loading dashboard...
          </h3>
        </div>
      ) : (
        <>
          {/* Stats cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              title="Projects"
              value={projectsCount}
              icon={
                <FiLayers className="h-6 w-6 dark:text-secondary text-primary" />
              }
              change={`+${
                projectsCount > 0 ? Math.floor(projectsCount * 0.2) : 0
              }`}
            />
            <StatCard
              title="Education"
              value={educationCount}
              icon={
                <FiBook className="h-6 w-6 dark:text-secondary text-primary" />
              }
              change={`+${
                educationCount > 0 ? Math.floor(educationCount * 0.2) : 0
              }`}
            />
            <StatCard
              title="Experience"
              value={experienceCount}
              icon={
                <FiClock className="h-6 w-6 dark:text-secondary text-primary" />
              }
              change={`+${
                experienceCount > 0 ? Math.floor(experienceCount * 0.2) : 0
              }`}
            />
            <StatCard
              title="Skills"
              value={skillsCount}
              icon={
                <FiCode className="h-6 w-6 dark:text-secondary text-primary" />
              }
              change={`+${skillsCount > 0 ? Math.floor(skillsCount * 0.2) : 0}`}
            />
            <StatCard
              title="Certifications"
              value={certificationsCount}
              icon={
                <FiAward className="h-6 w-6 dark:text-secondary text-primary" />
              }
              change={`+${
                certificationsCount > 0
                  ? Math.floor(certificationsCount * 0.2)
                  : 0
              }`}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
