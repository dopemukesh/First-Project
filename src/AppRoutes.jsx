// Designed and developed by:
// - Mukesh Yadav

import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Members from "./Pages/Members/Members";
import Resources from "./Pages/Resources/Resources";
import Projects from "./Pages/Project/Projects";
import About from "./Pages/About/About";
import Store from "./Pages/Store/Store";
import StoreBooks from "./Pages/Store/StoreBooks";
import StoreProducts from "./Pages/Store/StoreProducts";
import StoreTranings from "./Pages/Store/StoreTranings";
import Error404 from "./Components/Error/Error404";

export const AppRoutes = () => (
    <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/store" element={<Store />}>
            <Route path="" element={<StoreBooks />} />
            <Route path="books" element={<StoreBooks />} />
            <Route path="products" element={<StoreProducts />} />
            <Route path="tranings" element={<StoreTranings />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
    </Routes>
);