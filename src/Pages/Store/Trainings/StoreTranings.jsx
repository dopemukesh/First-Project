import React from "react";
import TrainingCard from "./TrainingCard";
import trainingsData from "../../../api/StoreTrainings.json";

function StoreTrainings() {
  if (!Array.isArray(trainingsData)) {
    return <div className="text-center p-8">Error loading training data</div>;
  }

  const trainings = trainingsData.map((training) => ({
    id: training.id,
    name: training.name,
    description: training.description,
    image: training.image,
    price: training.price,
    platform: training.platform,
    duration: training.duration,
    level: training.level,
    instructor: training.instructor,
    skills: training.skills || [],
    rating: training.rating,
    link: training.link,
  }));

  return (
    <div className="flex flex-wrap gap-8 justify-center p-4">
      {trainings.map((training) => (
        <TrainingCard key={training.id} training={training} />
      ))}
    </div>
  );
}

export default StoreTrainings;
