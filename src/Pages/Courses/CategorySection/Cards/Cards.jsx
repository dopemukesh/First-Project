import { Star } from "lucide-react";
import { Button } from "../../../../Components/Common/Button/Button";

// Single course display card
export const CourseCard = ({ course, index, getCardColor }) => {
    // Generate a URL-friendly slug from className
    const slug = course.className.toLowerCase().replace(/\s+/g, '-');
    // Badge styling for topics
    const chipClass =
        "px-2 py-0.5 border dark:border-gray-700 rounded-full text-[10px] text-gray-500 dark:text-gray-400 whitespace-nowrap";
    // Teacher rating as integer (handles undefined, decimal, string cases)
    const teacherRating = Math.round(Number(course.teacherRating) || 0);

    return (
        <div
            key={index}
            className="rounded-xl h-fit overflow-hidden bg-white dark:bg-gray-900 border dark:border-gray-700/50 hover:border-gray-300 dark:hover:border-gray-600 shadow-xl shadow-gray-500/10 relative hover:shadow-gray-800/10 transition duration-300"
        >
            {/* Course title */}
            <div className="flex items-center justify-between gap-1 p-2">
                <h3 className="text-sm font-semibold">{course.className}</h3>
            </div>

            {/* Short description (if provided) */}
            {course.shortDescription && (
                <div className="flex items-center justify-between gap-1 p-2">
                    <h3 className="text-xs text-gray-500 dark:text-gray-400">
                        {course.shortDescription}
                    </h3>
                </div>
            )}

            {/* Topics and Teacher Rating */}
            {(course.relatedTopics?.length > 0 || teacherRating > 0) && (
                <div className="flex flex-col gap-2 p-2">
                    {/* Related topics badges */}
                    {course.relatedTopics?.length > 0 && (
                        <div className="flex overflow-x-auto gap-2">
                            {course.relatedTopics.map((topic, idx) => (
                                <span key={idx} className={chipClass}>
                                    {topic}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Teacher star rating */}
                    {teacherRating > 0 && (
                        <div className="flex gap-0.5 pt-2">
                            {Array.from({ length: teacherRating }).map((_, i) => (
                                <Star
                                    key={i}
                                    size={12}
                                    className="fill-amber-500 stroke-amber-400"
                                />
                            ))}
                        </div>
                    )}
                </div>
            )}

            {/* Teacher info and details button */}
            <div className="flex items-center justify-between p-2">
                <div>
                    {/* Teacher name and language */}
                    <div className="flex items-end gap-1">
                        <p className="text-xs font-semibold">{course.teacherName}</p>
                        <p className="text-[10px] text-gray-500 dark:text-gray-400">{course.language}</p>
                    </div>

                    {/* Specialization */}
                    <div className="flex">
                        <p className="pe-2 text-[10px] text-gray-500 dark:text-gray-400">{course.teacherSpecialization}</p>
                    </div>
                </div>
                {/* Explore Button */}
                <Button
                    to={`${slug}/${course._id}`}
                    variant="secondary"
                    size="ssm"
                    className="w-fit"
                >
                    Explore
                </Button>
            </div>
        </div>
    );
};


// Project card component
export const ProjectCard = ({ title, description, image, userName, userImage, userRole, id }) => {

    const slug = title.toLowerCase().replace(/\s+/g, '-');

    return (
        <div
            className="bg-white/5 backdrop-blur-md p-5 h-fit shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
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

                    <Button
                        to={`${slug}/${id}`}
                        variant="secondary"
                        size="sm"
                    >
                        Contribute
                    </Button>
                </div>
            </div>
        </div>
    );
};