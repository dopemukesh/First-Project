import React from "react";
import ProductCard from "./ProductCard";

function StoreProducts() {
  const products = [
    {
      id: 1,
      name: "Mechanical Keyboard",
      description:
        "A high-quality keyboard with customizable keys and tactile feedback, perfect for programmers.",
      image:
        "https://www.getwox.com/wp-content/uploads/2020/12/Mechanical-Keyboards.jpg",
      price: 120,
      tags: ["hardware", "keyboard", "programming"],
    },
    {
      id: 3,
      name: "Monitor Arm",
      description:
        "An adjustable arm for monitors, helping to optimize desk space and ergonomics.",
      image:
        "https://images.steelcase.com/image/upload/v1424370228/www.steelcase.com/12-0002605.jpg",
      price: 80,
      tags: ["hardware", "monitor", "ergonomics"],
    },
    {
      id: 5,
      name: "Headphones",
      description:
        "High-quality headphones to block out distractions and focus on coding.",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.jje6rG-fFTT2zePCDxS9hgHaHa&pid=Api&P=0&h=180",
      price: 200,
      tags: ["hardware", "audio", "focus"],
    },
    {
      id: 6,
      name: "Programming Books Bundle",
      description:
        "A set of popular programming books, including Clean Code, The Pragmatic Programmer, and more.",
      image:
        "https://images.pexels.com/photos/5904936/pexels-photo-5904936.jpeg?auto=compress&cs=tinysrgb&h=350",
      price: 150,
      tags: ["books", "education", "programming"],
    },
    {
      id: 7,
      name: "External SSD",
      description:
        "A portable solid-state drive with fast read/write speeds, ideal for storing code projects.",
      image:
        "https://images.pexels.com/photos/4195335/pexels-photo-4195335.jpeg?auto=compress&cs=tinysrgb&h=350",
      price: 100,
      tags: ["hardware", "storage", "programming"],
    },
    {
      id: 8,
      name: "Code Editor Subscription",
      description:
        "A one-year subscription to a premium code editor like JetBrains IntelliJ or Sublime Text.",
      image:
        "https://images.pexels.com/photos/5082561/pexels-photo-5082561.jpeg?auto=compress&cs=tinysrgb&h=350",
      price: 120,
      tags: ["software", "tools", "coding"],
    },
  ];

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
