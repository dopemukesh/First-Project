// TeamMember.jsx
/* eslint-disable react/prop-types */
// Designed and developed by:
// - Mukesh Yadav

import { Button } from "../../../Components/Common/Button/Button";

// Reusable Social Buttons Component
export const SocialButtons = ({ instagram, linkedIn }) => {
    if (instagram && linkedIn) {
        return (
            <div className="flex items-center gap-2">
                <Button to={instagram} variant="outline2" size="xs">Instagram</Button>
                <Button to={linkedIn} variant="outline2" size="xs">LinkedIn</Button>
            </div>
        );
    }

    return (
        <div className="flex items-center gap-2">
            {instagram && (
                <Button to={instagram} variant="outline2" size="xs">Instagram</Button>
            )}
            {linkedIn && (
                <Button to={linkedIn} variant="outline2" size="xs">LinkedIn</Button>
            )}
        </div>
    );
};

const TeamMember = ({ name, position, description, image, profilePic, instagram, linkedIn }) => {
    return (
        <div className="flex flex-col gap-6">
            {/* Profile Pic Card */}
            {profilePic && !image && (
                <div className="relative flex flex-col gap-2 p-4 bg-white dark:bg-gray-900 rounded-[18px] border dark:border-gray-800">
                    <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                            <div className="flex justify-center items-center w-8 h-8 rounded-full overflow-hidden bg-gray-300">
                                <img
                                    src={profilePic}
                                    alt={name}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-sm font-semibold">{name}</h2>
                                {position && <p className="text-xs text-purple-500 dark:text-purple-400">{position}</p>}
                            </div>
                        </div>

                        {/* Reusable Social Buttons */}
                        <SocialButtons instagram={instagram} linkedIn={linkedIn} />
                    </div>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {description}
                    </p>
                </div>
            )}

            {/* Image Card with Info */}
            {image && (
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
                                <div className="flex flex-col">
                                    <h2 className="text-sm font-semibold">{name}</h2>
                                    {position && <p className="text-xs text-purple-500 dark:text-purple-400">{position}</p>}
                                </div>

                                {/* Reusable Social Buttons */}
                                <SocialButtons instagram={instagram} linkedIn={linkedIn} />
                            </div>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TeamMember;
