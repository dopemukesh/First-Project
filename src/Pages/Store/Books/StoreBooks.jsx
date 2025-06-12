import React from "react";
import Card from "./Card";
import booksData from "../../../api/StoreBooks.json";

function StoreBooks() {
  // Map the JSON data to only include required fields
  const books = booksData.map((book) => ({
    id: book.id,
    name: book.name,
    description: book.description,
    image: book.image,
  }));

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
