import React from "react";
import Card from "./Card";

function StoreBooks() {
  const books = [
    {
      id: 1,
      name: "Eloquent JavaScript",
      description:
        "A modern introduction to JavaScript, covering language features and programming techniques.",
      image: "https://eloquentjavascript.net/img/cover.jpg",
    },
    {
      id: 2,
      name: "You Don't Know JS",
      description:
        "A deep dive into JavaScript concepts and its core mechanisms.",
      image: "https://images-na.ssl-images-amazon.com/images/I/81kqrwS1nNL.jpg",
    },
    {
      id: 3,
      name: "Clean Code",
      description:
        "A handbook of Agile software craftsmanship, focusing on writing clean and maintainable code.",
      image:
        "https://m.media-amazon.com/images/I/41jEbK-jG+L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    },
    {
      id: 4,
      name: "The Pragmatic Programmer",
      description:
        "Classic advice for software developers on coding practices and career growth.",
      image:
        "https://m.media-amazon.com/images/I/41uPjEenkFL._SX396_BO1,204,203,200_.jpg",
    },

    {
      id: 5,
      name: "JavaScript: The Good Parts",
      description:
        "A concise guide to the best features of JavaScript, written by Douglas Crockford.",
      image: "https://m.media-amazon.com/images/I/81kqrwS1nNL.jpg",
    },
    {
      id: 6,
      name: "Effective Java",
      description:
        "Best practices for Java programming, authored by Joshua Bloch.",
      image:
        "https://m.media-amazon.com/images/I/518FqJvR9aL._SX396_BO1,204,203,200_.jpg",
    },
  ];

  return (
    <>
      <div className="m-8 flex flex-wrap gap-8 justify-center">
        {books.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </div>
    </>
  );
}

export default StoreBooks;
