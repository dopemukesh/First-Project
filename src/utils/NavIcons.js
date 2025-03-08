import { FaHome, FaUsers, FaBook, FaStore, FaInfoCircle, FaProjectDiagram } from "react-icons/fa";

export const iconMap = {
    FaHome,
    FaUsers,
    FaBook,
    FaStore,
    FaInfoCircle,
    FaProjectDiagram
};

export const getIcon = (iconName) => {
    return iconMap[iconName] || FaHome;
}; 