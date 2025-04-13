import { Briefcase, Building2, Handshake } from "lucide-react";
import Container from "../../../Components/Common/Container/Container";

// Constants
const STATS_DATA = [
  {
    icon: Briefcase,
    count: "1000 +",
    label: "Total Job Listings"
  },
  {
    icon: Building2,
    count: "500 +",
    label: "Companies Hiring"
  },
  {
    icon: Handshake,
    count: "400 +",
    label: "Internships Available"
  }
];

const HeroStats = () => {
  // Styles
  const bgGrads = `
    bg-white dark:bg-gray-900 
    border border-gray-300 dark:border-gray-800 
    hover:border-teal-600 hover:scale-105 
    transition-all duration-700 
    shadow-2xl shadow-gray-300 dark:shadow-gray-950
  `.trim();

  // Render stat box
  const renderStatBox = ({ icon: Icon, count, label }, index) => (
    <div key={index} className={`${bgGrads} rounded-2xl px-6 py-8 flex flex-col items-start`}>
      <Icon size={28} />
      <h2 className="text-2xl font-bold mt-2">{count}</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">{label}</p>
    </div>
  );

  return (
    <Container className="bg-gray-50 dark:bg-gray-900/50 py-14 px-4">
      <div className="py-4">
        {/* Header Section */}
        <div className="mb-12 space-y-2">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Find Your Perfect Job Match
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Connect with Top Recruiters, Hiring Right Now
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STATS_DATA.map(renderStatBox)}
        </div>
      </div>
    </Container>
  );
};

export default HeroStats;