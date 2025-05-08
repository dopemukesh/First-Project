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

// Layouts
import MainLayout from "./Components/Layout/allLayouts/MainLayout";
import AuthLayout from "./Components/Layout/allLayouts/AuthLayout";
import DashboardLayout from "./Components/Layout/allLayouts/DashboardLayout";

export const AppRoutes = () => (
  <Routes>
    {/* Main layout (with header & footer) */}
    <Route element={<MainLayout />}>
      <Route path="/" index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/community" element={<Community />} />
      <Route path="/profile" element={<UserProfile />} />

      {/* Courses */}
      <Route path="/classes">
        <Route index element={<Courses />} />
        <Route path="details/:id" element={<CourseDetails />} />
      </Route>

      {/* Career */}
      <Route path="/career">
        <Route index element={<Career />} />
        <Route path="post-job" element={<PostJob />} />
      </Route>

      {/* Projects */}
      <Route path="/projects">
        <Route index element={<Projects />} />
        <Route path="details/:id" element={<ProjectDetails />} />
      </Route>

      {/* Store */}
      <Route path="/store" element={<Store />}>
        <Route index element={<StoreBooks />} />
        <Route path="books" element={<StoreBooks />} />
        <Route path="products" element={<StoreProducts />} />
        <Route path="tranings" element={<StoreTranings />} />
      </Route>

      {/* Catch-all */}
      <Route path="*" element={<Error404 />} />
    </Route>

    {/* Auth layout (without header & footer) */}
    <Route element={<AuthLayout />}>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
    </Route>

    {/* Protected Routes (optional: you can wrap in another layout if needed) */}
    <Route element={<DashboardLayout />}>
      <Route
        path="/teacher-dashboard"
        element={
          <ProtectedRoutes minimumRole="teacher">
            <TeacherDashboard />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/admin-dashboard"
        element={
          <ProtectedRoutes minimumRole="admin">
            <AdminDashboard />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/superadmin-panel"
        element={
          <ProtectedRoutes minimumRole="superadmin">
            <SuperAdminPanel />
          </ProtectedRoutes>
        }
      />
    </Route>
  </Routes>
);
