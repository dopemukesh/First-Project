import React, { useState, useEffect } from "react";

const TypewriterEffect = () => {
  const words = ["CWT  ", "CodeWithTechries"];
  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const type = () => {
      const word = words[wordIndex];
      if (isDeleting) {
        setCurrentWord(word.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      } else {
        setCurrentWord(word.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex === word.length) {
          setIsDeleting(true);
        }
      }
    };

    const timer = setTimeout(() => {
      type();
    }, 100);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex, words]);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <h1 className="text-2xl font-semibold">{currentWord}</h1>
    </div>
  );
};

export default TypewriterEffect;
