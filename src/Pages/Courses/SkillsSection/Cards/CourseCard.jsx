import { Star } from "lucide-react";
import { Button } from "../../../../Components/Common/Button/Button";
// import projectData from "../../../../api/ProjectDetails.json";

// Default course card component
export const DefaultCard = ({ course, index, getCardColor }) => (
    <div
        key={index}
        className={`rounded-2xl ${getCardColor(index)} p-6 text-black relative hover:shadow-lg transition duration-300`}
    >
        <div className="flex items-center justify-between gap-1">
            <div>
                <h3 className="text-lg font-bold mb-2">{course.title}</h3>
                <p className="text-sm font-medium">{course.instructor.name}</p>
                <div className="flex gap-1 mt-1 mb-4">
                    {[...Array(course.rating)].map((_, i) => (
                        <Star key={i} size={16} className="fill-amber-500 stroke-amber-400" />
                    ))}
                </div>
            </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-white text-xs px-3 py-1 rounded-full">{course.level}</span>
            <span className="bg-white text-xs px-3 py-1 rounded-full">{course.type}</span>
        </div>

        <Button
            to={`details/${course.id}`}
            variant="info"
            size="sm"
            className="w-fit"
        >
            View Details
        </Button>
    </div>
);

// Project card component
export const ProjectCard = ({ title, description, image, userName, userImage, userRole, id }) => {
    return (
        <div
            className="bg-white/5 backdrop-blur-md p-5 h-fit shadow-xl border border-gray-300/50 dark:border-gray-700/50 rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
        >
            <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-4">
                {title || "Untitled"}
            </h3>

            <div className="overflow-hidden h-44 my-2 rounded-2xl bg-gray-200 dark:bg-gray-800">
                {image ? (
                    <img
                        src={image}
                        alt={title || "Project Image"}
                        className="w-full h-full object-cover group-hover:scale-125 transition-all duration-700"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                        No Image
                    </div>
                )}
            </div>

            <div className="mt-4 flex flex-col justify-between h-40">
                <p className="text-gray-500 dark:text-gray-400 my-2">
                    {(description?.length > 100 ? description.slice(0, 100) + "..." : description) ||
                        "No description available."}
                </p>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <div className="flex items-center gap-2 bg-gray-300 dark:bg-gray-800 h-10 w-10 overflow-hidden rounded-full">
                            {userImage ? (
                                <img
                                    src={userImage}
                                    alt={userName || "User"}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-xs font-semibold text-gray-500">
                                    ?
                                </div>
                            )}
                        </div>
                        <div>
                            <p className="font-medium text-sm text-gray-800 dark:text-gray-400">
                                {userName || "Unknown"}
                            </p>
                            <p className="text-xs text-gray-500">
                                {userRole || "Not Specified"}
                            </p>
                        </div>
                    </div>

                    <Button to={`details/${id}`} variant="secondary">
                        Read More
                    </Button>
                </div>
            </div>
        </div>
    );
};
