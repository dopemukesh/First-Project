import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Project/Projects";
import About from "./Pages/About/About";
import Store from "./Pages/Store/Store";
import StoreBooks from "./Pages/Store/StoreBooks";
import StoreProducts from "./Pages/Store/StoreProducts";
import StoreTranings from "./Pages/Store/StoreTranings";
import Error404 from "./Components/Error/Error404";
import ProjectDetails from "./Pages/Project/ProjectDetails";
import Community from "./Pages/Community/Community";
import Career from "./Pages/Career/Career";
import PostJob from "./Pages/Career/PostJob/PostJob";
import Signup from "./Pages/Registration/Signup";
import Login from "./Pages/Registration/Login";
import ForgetPassword from "./Pages/Registration/ForgetPassword";
import Courses from "./Pages/Courses/Cources";
import CourseDetails from "./Pages/Courses/CourseDetail/CourseDetails";
import ProtectedRoutes from "./ProtectedRoutes/ProtectedRoutes";
import AdminDashboard from "./Pages/ProtectedPages/Admins/AdminDashboard";
import TeacherDashboard from "./Pages/ProtectedPages/Teachers/TeacherDashboard";
import SuperAdminPanel from "./Pages/ProtectedPages/SuperAdmin/SuperAdminPanel";
import UserProfile from "./Pages/UserProfile/UserProfile";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" index element={<Home />} />
    <Route path="/community" element={<Community />} />
    {/* <Route path="/courses" element={<Courses />} /> */}
    <Route path="/classes">
      <Route index element={<Courses />} />
      <Route path="details/:id" element={<CourseDetails />} />
    </Route>
    <Route path="/about" element={<About />} />

    {/* ✅ Fixed Career Routes */}
    <Route path="/career">
      <Route index element={<Career />} />
      <Route path="post-job" element={<PostJob />} /> {/* Fixed path */}
    </Route>

    {/* Projects Routes */}
    <Route path="/projects">
      <Route index element={<Projects />} />
      <Route path="details/:id" element={<ProjectDetails />} />
    </Route>

    {/* Store Routes */}
    <Route path="/store" element={<Store />}>
      <Route index element={<StoreBooks />} />
      <Route path="books" element={<StoreBooks />} />
      <Route path="products" element={<StoreProducts />} />
      <Route path="tranings" element={<StoreTranings />} />
    </Route>

    {/* Catch-all Route for Errors */}
    <Route path="*" element={<Error404 />} />
    <Route path="/unauthorized" element={<Error404 />} />
    <Route path="/register" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route path="/forget-password" element={<ForgetPassword />} />

    {/* User routes */}
    <Route path="/profile" element={<UserProfile />} />

    {/* Protected routes here starts */}
    {/* 🧑‍🏫 Teacher route (teacher, admin, superadmin dekh sakte hain) */}
    <Route
      path="/teacher-dashboard"
      element={
        <ProtectedRoutes minimumRole="teacher">
          <TeacherDashboard />
        </ProtectedRoutes>
      }
    />

    {/* 🛡️ Admin route (admin aur superadmin dekh sakte hain) */}
    <Route
      path="/admin-dashboard"
      element={
        <ProtectedRoutes minimumRole="admin">
          <AdminDashboard />
        </ProtectedRoutes>
      }
    />

    {/* 👑 Superadmin route (sirf superadmin dekh sakta hai) */}
    <Route
      path="/superadmin-panel"
      element={
        <ProtectedRoutes minimumRole="superadmin">
          <SuperAdminPanel />
        </ProtectedRoutes>
      }
    />
    {/* Protected routes here ends */}
  </Routes>
);
