import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "../../../Components/Common/Button/Button";
import booksData from '../../../api/StoreBooks.json';

const BookDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const book = booksData.find(b => b.id === parseInt(id));

    if (!book) {
        return <div className="text-center p-8">Book not found</div>;
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
                    {/* Image Section */}
                    <div className="flex justify-center items-start">
                        <img 
                            src={book.image} 
                            alt={book.name} 
                            className="max-w-sm w-full rounded-lg shadow-md"
                        />
                    </div>

                    {/* Details Section */}
                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold">{book.name}</h1>
                        <p className="text-gray-600 dark:text-gray-300">{book.description}</p>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <p className="font-semibold">Author</p>
                                <p className="text-gray-600 dark:text-gray-400">{book.author}</p>
                            </div>
                            <div>
                                <p className="font-semibold">Publisher</p>
                                <p className="text-gray-600 dark:text-gray-400">{book.publisher}</p>
                            </div>
                            <div>
                                <p className="font-semibold">Publication Year</p>
                                <p className="text-gray-600 dark:text-gray-400">{book.publicationYear}</p>
                            </div>
                            <div>
                                <p className="font-semibold">Pages</p>
                                <p className="text-gray-600 dark:text-gray-400">{book.pages}</p>
                            </div>
                            <div>
                                <p className="font-semibold">Language</p>
                                <p className="text-gray-600 dark:text-gray-400">{book.language}</p>
                            </div>
                            <div>
                                <p className="font-semibold">Format</p>
                                <p className="text-gray-600 dark:text-gray-400">{book.format}</p>
                            </div>
                        </div>

                        <div className="pt-4">
                            <p className="font-semibold mb-2">Genres</p>
                            <div className="flex flex-wrap gap-2">
                                {book.genres.map((genre, index) => (
                                    <span 
                                        key={index}
                                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                                    >
                                        {genre}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center justify-between pt-6">
                            <div className="text-2xl font-bold text-teal-600 dark:text-teal-500">
                                {book.price}
                            </div>
                            <div className="space-x-4">
                               
                                <Button as="a" href={book.buyLink} target="_blank">
                                    Buy Now
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
