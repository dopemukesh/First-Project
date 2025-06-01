import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "../../../Components/Common/Button/Button";
import trainingsData from '../../../api/StoreTrainings.json';

const TrainingDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const training = trainingsData.find(t => t.id === parseInt(id));

    if (!training) {
        return <div className="text-center p-8">Training not found</div>;
    }

    return (
        <div className="max-w-6xl mx-auto p-4 sm:p-6">
            <Button 
                variant="ghost" 
                onClick={() => navigate('/store')}
                className="mb-6"
            >
                ← Back to Store
            </Button>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8 p-6">
                    {/* Image and Price Section */}
                    <div className="space-y-6">
                        <div className="rounded-lg overflow-hidden">
                            <img 
                                src={training.image} 
                                alt={training.name} 
                                className="w-full h-[300px] object-cover"
                            />
                        </div>
                        
                        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                            <div className="flex items-center justify-between mb-4">
                                <div className="text-2xl font-bold text-teal-600">
                                    {training.price > 0 ? `$${training.price}` : 'Free'}
                                </div>
                                <Button as="a" href={training.link} target="_blank">
                                    Enroll Now
                                </Button>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                                <span>{training.duration}</span>
                                •
                                <span>{training.level}</span>
                                •
                                <span>{training.language}</span>
                            </div>
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="space-y-6">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">
                                    {training.platform}
                                </span>
                                <span className="flex items-center gap-1">
                                    <span className="text-yellow-400">★</span>
                                    <span>{training.rating}</span>
                                    <span className="text-gray-500">({training.reviews} reviews)</span>
                                </span>
                            </div>
                            <h1 className="text-3xl font-bold mb-4">{training.name}</h1>
                            <p className="text-gray-600 dark:text-gray-300">{training.description}</p>
                        </div>

                        {/* Instructor Info */}
                        <div className="border-t pt-4">
                            <h2 className="text-xl font-semibold mb-4">Instructor</h2>
                            <div className="flex items-center gap-4">
                                <img 
                                    src={training.instructor.image} 
                                    alt={training.instructor.name}
                                    className="w-12 h-12 rounded-full"
                                />
                                <div>
                                    <p className="font-semibold">{training.instructor.name}</p>
                                    <p className="text-gray-600 dark:text-gray-400">{training.instructor.company}</p>
                                </div>
                            </div>
                        </div>

                        {/* Skills */}
                        <div className="border-t pt-4">
                            <h2 className="text-xl font-semibold mb-4">What you'll learn</h2>
                            <div className="flex flex-wrap gap-2">
                                {training.skills.map((skill, index) => (
                                    <span 
                                        key={index}
                                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Certificate Info */}
                        {training.certificate && (
                            <div className="border-t pt-4">
                                <div className="flex items-center gap-2 text-teal-600">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697A8.001 8.001 0 0 1 12 3a8 8 0 0 1 0 16 8.001 8.001 0 0 1-4.165-14.303" />
                                    </svg>
                                    <span>Certificate of completion included</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainingDetails;
