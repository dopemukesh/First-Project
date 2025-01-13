import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Members from "./Components/Pages/Members";
import Resources from "./Components/Pages/Resources";
import Projects from "./Components/Projects/Projects";
import Store from "./Components/Pages/store/Store";
import About from "./Components/Pages/About";
import Loader from "./Loader";
import StoreBooks from "./Components/Pages/store/StoreBooks";
import StoreProducts from "./Components/Pages/store/StoreProducts";
import StoreTranings from "./Components/Pages/store/StoreTranings";


const App = () => {
  return (
    <>
      <Loader />
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project-details" element={<ProjectDetails />} />
        <Route path="/store" element={<Store />}>
          <Route path="" element={<StoreBooks />} />
          <Route path="books" element={<StoreBooks />} />
          <Route path="products" element={<StoreProducts />} />
          <Route path="tranings" element={<StoreTranings />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
