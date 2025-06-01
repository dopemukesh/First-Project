import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "../../../Components/Common/Button/Button";
import productsData from '../../../api/StoreProducts.json';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = productsData.find(p => p.id === parseInt(id));

    if (!product) {
        return <div className="text-center p-8">Product not found</div>;
    }

    return (
        <div className="max-w-7xl mx-auto p-4 sm:p-6">
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
                    <div className="flex flex-col justify-between">
                        <div className="rounded-lg overflow-hidden">
                            <img 
                                src={product.image} 
                                alt={product.name} 
                                className="w-full h-[400px] object-contain bg-gray-50 dark:bg-gray-700"
                            />
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl font-bold">{product.name}</h1>
                            <p className="text-gray-600 dark:text-gray-300 mt-2">{product.description}</p>
                        </div>

                        {/* Price and Availability */}
                        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <span className="text-3xl font-bold text-teal-600">${product.finalPrice}</span>
                                    {product.discount && (
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="text-lg text-gray-500 line-through">${product.price}</span>
                                            <span className="text-rose-500 font-semibold">{product.discount} OFF</span>
                                        </div>
                                    )}
                                </div>
                                <div className={`${product.availability === 'In Stock' ? 'text-green-600' : 'text-rose-500'} font-semibold`}>
                                    {product.availability}
                                </div>
                            </div>
                            <Button as="a" href={product.buyLink} target="_blank" className="w-full">
                                Buy Now
                            </Button>
                        </div>

                        {/* Specifications */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold">Specifications</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {Object.entries(product.specs).map(([key, value]) => (
                                    <div key={key} className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                                        <p className="text-sm font-medium">{key}</p>
                                        <p className="text-gray-600 dark:text-gray-300">{value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Features */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold">Key Features</h2>
                            <ul className="list-disc list-inside space-y-2">
                                {product.features.map((feature, index) => (
                                    <li key={index} className="text-gray-600 dark:text-gray-300">{feature}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Additional Info */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <p className="font-semibold">Brand</p>
                                <p className="text-gray-600 dark:text-gray-300">{product.brand}</p>
                            </div>
                            <div className="space-y-2">
                                <p className="font-semibold">Warranty</p>
                                <p className="text-gray-600 dark:text-gray-300">{product.warranty}</p>
                            </div>
                            <div className="space-y-2">
                                <p className="font-semibold">Return Policy</p>
                                <p className="text-gray-600 dark:text-gray-300">{product.returnPolicy}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
