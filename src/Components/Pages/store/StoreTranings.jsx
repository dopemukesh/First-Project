import React from "react";
import Card from "./Card";
import TraningCard from "./TraningCard";

function StoreTranings() {
  const tranings = [
    {
      id: 1,
      name: "Full-Stack Web Development Bootcamp",
      description:
        "Learn to build modern web applications using HTML, CSS, JavaScript, React, and Node.js.",
      type: "training",
      platform: "Udemy",
      link: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
      image:
        "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&h=350",
      price: 19.99,
      instructor: {
        name: "Angela Yu",
        image: "https://avatars.githubusercontent.com/u/1?v=4",
        company: "App Brewery",
      },
    },
    {
      id: 2,
      name: "Python for Data Science and Machine Learning",
      description:
        "Master Python and its applications in data science, including pandas, NumPy, and scikit-learn.",
      type: "training",
      platform: "Coursera",
      link: "https://www.coursera.org/specializations/data-science-python",
      image:
        "https://images.pexels.com/photos/669622/pexels-photo-669622.jpeg?auto=compress&cs=tinysrgb&h=350",
      price: 49.99,
      instructor: {
        name: "Andrew Ng",
        image: "https://avatars.githubusercontent.com/u/2?v=4",
        company: "Stanford University",
      },
    },
    {
      id: 5,
      name: "Advanced JavaScript Concepts",
      description:
        "Dive deeper into closures, prototypal inheritance, and other advanced JavaScript topics.",
      type: "training",
      platform: "Pluralsight",
      link: "https://www.pluralsight.com/courses/javascript-advanced",
      image:
        "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&h=350",
      price: 29.99,
      instructor: {
        name: "Will Sentance",
        image: "https://avatars.githubusercontent.com/u/3?v=4",
        company: "Codesmith",
      },
    },
    {
      id: 7,
      name: "Git and GitHub Mastery",
      description:
        "A comprehensive course on version control with Git and using GitHub effectively.",
      type: "training",
      platform: "LinkedIn Learning",
      link: "https://www.linkedin.com/learning/git-essential-training/",
      image:
        "https://images.pexels.com/photos/1181253/pexels-photo-1181253.jpeg?auto=compress&cs=tinysrgb&h=350",
      price: 24.99,
      instructor: {
        name: "Kevin Skoglund",
        image: "https://avatars.githubusercontent.com/u/4?v=4",
        company: "LinkedIn Learning",
      },
    },
    {
      id: 8,
      name: "Top 10 VS Code Tips and Tricks",
      description:
        "A quick video showcasing the best tips and tricks for improving productivity with VS Code.",
      type: "video",
      platform: "YouTube",
      link: "https://www.youtube.com/watch?v=ifTF3ags0XI",
      image: "https://img.youtube.com/vi/ifTF3ags0XI/maxresdefault.jpg",
      price: 0,
      instructor: {
        name: "Ben Awad",
        image: "https://avatars.githubusercontent.com/u/5?v=4",
        company: "Self-employed",
      },
    },
  ];

  return (
    <>
      <div className="flex flex-wrap gap-y-0 gap-x-8 justify-center">
        {tranings.map((traning) => (
          <TraningCard key={traning.id} traning={traning} />
        ))}
      </div>
    </>
  );
}

export default StoreTranings;
