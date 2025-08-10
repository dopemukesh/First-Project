import { Button } from "../../../Components/Common/Button/Button";

// TeamMember.jsx
const TeamMember = ({ name, position, description, image, profilePic, reverse, instagram }) => {
    return (
        <div className={`flex ${reverse ? "flex-col-reverse" : "flex-col"} gap-6`}>
            {/* Info Card */}
            {/* <div className="relative flex flex-col gap-2 p-4 bg-white dark:bg-gray-900 rounded-[24px] border dark:border-gray-800">
                <div className="flex items-center gap-4">
                    <div className="flex justify-center items-center w-11 h-11 rounded-full overflow-hidden bg-gray-300">
                        <img
                            src={profilePic}
                            alt={name}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="font-bold">{name}</h2>
                        <p className="text-sm text-teal-600 dark:text-teal-500">{position}</p>
                    </div>
                </div>
                <p className="mt-2 text-gray-600 dark:text-gray-400 leading-relaxed">
                    {description}
                </p>

                {image && <div className={`w-6 h-6 bg-gray-200 dark:bg-gray-800 absolute left-[48%] ${reverse ? "-top-2.5" : "-bottom-2.5"} -z-10 rotate-45`}></div>}
            </div> */}

            {profilePic && !image &&
                <div className="relative flex flex-col gap-2 p-4 bg-white dark:bg-gray-900 rounded-[18px] border dark:border-gray-800">
                    <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                            <div className="flex justify-center items-center w-8 h-8 rounded-full overflow-hidden bg-gray-300">
                                {profilePic && <img
                                    src={profilePic}
                                    alt={name}
                                    className="h-full w-full object-cover"
                                />}
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-sm font-semibold">{name}</h2>
                                {position && <p className="text-xs text-purple-500 dark:text-purple-400">{position}</p>}
                            </div>
                        </div>

                        <div>
                            <Button to={instagram} variant="outline2" size="xs">Instagram</Button>
                        </div>
                    </div>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {description}
                    </p>
                </div>
            }

            {/* Image Card */}
            {image &&
                <div className="aspect-[9/16] bg-white dark:bg-gray-900 rounded-[36px] border dark:border-gray-800 relative overflow-hidden">
                    <img
                        src={image}
                        alt={name}
                        className="h-full w-full object-cover rounded-[24px]"
                    />

                    {/* Info Card */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="relative flex flex-col gap-2 p-4 bg-white dark:bg-gray-900 rounded-[18px] border dark:border-gray-800">
                            <div className="flex items-center justify-between gap-2">
                                <div className="flex items-center gap-2">
                                    {/* <div className="flex justify-center items-center w-8 h-8 rounded-full overflow-hidden bg-gray-300">
                                        <img
                                            src={profilePic}
                                            alt={name}
                                            className="h-full w-full object-cover"
                                        />
                                    </div> */}
                                    <div className="flex flex-col">
                                        <h2 className="text-sm font-semibold">{name}</h2>
                                        {position && <p className="text-xs text-purple-500 dark:text-purple-400">{position}</p>}
                                    </div>
                                </div>

                                <div>
                                    <Button to={instagram} variant="outline2" size="xs">Instagram</Button>
                                </div>
                            </div>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>}
        </div>
    );
};

export default TeamMember;
