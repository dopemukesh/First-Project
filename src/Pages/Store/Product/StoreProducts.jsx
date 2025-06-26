import React from "react";
import ProductCard from "./ProductCard";
import productsData from "../../../api/StoreProducts.json";

function StoreProducts() {
  const products = productsData.map((product)=>{
  return{
    id: product.id,
    name: product.name,
    description: product.description,
    image: product.image,
    price: product.price,
    tags: product.tags,
 } })




  

  return (
    <>
      <div className="m-8 flex flex-wrap gap-8 justify-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default StoreProducts;
