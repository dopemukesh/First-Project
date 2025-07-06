import {
  Megaphone,
  Laptop,
  Database,
  Cloud,
  Palette,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../../../Components/Common/Container/Container";

const color = [
  "red-500",
  "purple-500",
  "teal-500",
  "yellow-400",
  "emerald-400",
  "blue-500",
];
const categories = [
  {
    name: "Digital Marketing",
    id: "digital-marketing",
    icon: <Megaphone className={`text-${color[0]}`} size={32} />,
  },
  {
    name: "Web Development",
    id: "web-development",
    icon: <Laptop className={`text-${color[1]}`} size={32} />,
  },
  {
    name: "Data Science & AI",
    id: "data-science-ai",
    icon: <Database className={`text-${color[2]}`} size={32} />,
  },
  {
    name: "Cloud Computing",
    id: "cloud-computing",
    icon: <Cloud className={`text-${color[3]}`} size={32} />,
  },
  {
    name: "UI/UX Design",
    id: "ui-ux-design",
    icon: <Palette className={`text-${color[4]}`} size={32} />,
  },
  {
    name: "Cybersecurity",
    id: "cybersecurity",
    icon: <Shield className={`text-${color[5]}`} size={32} />,
  },
];

const bgGrad =
  "bg-gradient-to-tl from-white/10 via-transparent via-30% to-white/10 backdrop-blur border border-gray-200 dark:border-gray-700/50 shadow-2xl shadow-gray-300 dark:shadow-gray-950 rounded-2xl";

export default function Categories() {
  return (
    <Container className="py-14 px-4">
      <div className="bg-transparent flex flex-col items-center justify-center">
      <div className={`w-full`}>
        <div className="flex flex-col items-center text-center mb-14 gap-4">
          <h2 className="text-3xl md:text-4xl text-gray-900 dark:text-white font-semibold max-w-3xl">
            Categories
          </h2>
          <p className="md:text-lg text-gray-500 dark:text-gray-400">
            Find Your Passion and Build Your Future
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <Link
              key={index}
              to={`#`}
              className={`${bgGrad} p-6 flex flex-col items-center justify-center hover:scale-105 transition duration-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-500`}
            >
              <div className="mb-4 bg-[#101720] p-3 rounded-full">
                {cat.icon}
              </div>
              <h3 className={`text-sm whitespace-nowrap md:text-lg font-semibold mb-1 text-center`}>{cat.name}</h3>
              <span className="text-sm text-teal-600 dark:text-teal-500 flex items-center gap-1">
                View all <span className="ml-1">&rarr;</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
      </Container>
  );
}
