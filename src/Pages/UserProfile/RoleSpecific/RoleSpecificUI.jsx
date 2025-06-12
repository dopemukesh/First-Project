import React from 'react'
import { HeadIcon } from '../UserProfile'
import { MdEdit, MdLink } from 'react-icons/md';
import ExpandableTextbox from '../../../utils/ExpandableContent';

const RoleSpecificUI = ({ role, userData }) => {
    return (
        <>
            {/* Role-Specific ui like work/education/jobs Section */}
            <div className="mt-6 space-y-2">
                {role === "student" && (
                    <>
                        <HeadIcon text="Education" icon={<MdEdit />} />
                        <div className="border-y dark:border-gray-700/60 bg-gray-50 dark:bg-gray-900 py-2 px-4 text-sm">
                            {userData.education?.length > 0 ? (
                                userData.education.map((edu, index) => (
                                    <div key={index} className="mb-2">
                                        <p className="font-semibold">{edu.degree} ({edu.year})</p>
                                        <p className="text-sm text-gray-500">{edu.institute}</p>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500 italic">No education details added yet.</p>
                            )}
                        </div>
                    </>
                )}

                {role === "developer" && (
                    <>
                        <HeadIcon text="Work Experience" iconText={'Edit'} color={'text-rose-600 dark:text-rose-500'} />
                        <div className="border-y dark:border-gray-700/60 bg-gray-50 dark:bg-gray-900 py-2 px-4 text-sm">

                            {Array.isArray(userData.experience) && userData.experience?.length > 0 ? (
                                <div className="border-l-[1.2px] border-dashed border-gray-300 dark:border-gray-700 space-y-2 relative flex-col-reverse">
                                    <i className="w-1.5 h-1.5 absolute -left-[3.5px] top-0 border-s-[2px] border-t-[2px] border-gray-300 dark:border-gray-700 rotate-45"></i>
                                    <i className="w-1.5 h-1.5 absolute -left-1 bottom-0 bg-gray-50 dark:bg-gray-900 rotate-45"></i>

                                    {userData.experience.map((exp, index) => (
                                        <div key={index} className="ml-2 relative">
                                            <i className="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-700 block flex-1 absolute -left-[11.5px] bottom-1.5 rounded-full"></i>

                                            <h1 className="font-semibold dark:text-gray-300">{exp.position || 'Undefined'} at {exp.company || 'Unknown'}</h1>
                                            <p className="text-xs dark:text-gray-300">{exp.startDate || '03/2025'} - {exp.endDate || "Present"}</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{exp.description || 'No description found!'}</p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-gray-500 italic">No work experience added yet.</p>
                            )}
                        </div>

                        <HeadIcon text="Project" iconText={'Edit'} color={'text-rose-600 dark:text-rose-500'} />
                        <div className="border-y dark:border-gray-700/60 bg-gray-50 dark:bg-gray-900 flex flex-col gap-6 py-2 px-4 text-sm">
                            {userData.project?.length > 0 ? (
                                userData.project.map((proj, index) => (
                                    <div key={index} className="flex flex-col gap-1">
                                        <h1 className="font-semibold dark:text-gray-300">{proj.title}</h1>
                                        <ExpandableTextbox
                                            text={proj.description}
                                            limit={100}
                                            textClass={'text-gray-500 dark:text-gray-400 text-xs'}
                                        />
                                        <div className='flex gap-2 items-center mt-2'>
                                            <MdLink className='bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-600 rounded text-base p-0.5' />
                                            <a href={proj.url} className="text-xs text-teal-600 max-w-56 dark:text-teal-500 truncate">{proj.url}</a>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500 italic">No projects available.</p>
                            )}
                        </div>
                    </>
                )}

                {role === "recruiter" && (
                    <>
                        <HeadIcon text="Open Positions" icon={<MdEdit />} />
                        <div className="border-y dark:border-gray-700/60 bg-gray-50 dark:bg-gray-900 py-2 px-4 text-sm">
                            {userData.openPositions?.length > 0 ? (
                                userData.openPositions.map((job, index) => (
                                    <div key={index} className="mb-2">
                                        <p className="font-semibold">{job.title}</p>
                                        <p className="text-sm text-gray-500">{job.location} | {job.salaryRange}</p>
                                        <p className="text-sm text-gray-500">Posted on: {job.postedOn}</p>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500 italic">No open positions listed yet.</p>
                            )}
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default RoleSpecificUI;
