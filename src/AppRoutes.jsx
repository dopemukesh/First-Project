import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Community from "./Pages/Community/Community";
import Projects from "./Pages/Project/Projects";
import ProjectDetails from "./Pages/Project/ProjectDetails";
import Store from "./Pages/Store/Store";
import StoreBooks from "./Pages/Store/StoreBooks";
import StoreProducts from "./Pages/Store/StoreProducts";
import StoreTranings from "./Pages/Store/StoreTranings";
import Courses from "./Pages/Courses/Cources";
import CourseDetails from "./Pages/Courses/CourseDetail/CourseDetails";
import Career from "./Pages/Career/Career";
import PostJob from "./Pages/Career/PostJob/PostJob";
import Login from "./Pages/Registration/Login";
import Signup from "./Pages/Registration/Signup";
import ForgetPassword from "./Pages/Registration/ForgetPassword";
import Error404 from "./Components/Error/Error404";

// Profile Pages
import UserProfile from "./Pages/UserProfile/UserProfile";
import ProfileDashboard from "./Pages/UserProfile/UserDataComps/ProfileDashboard";
import Notification from "./Pages/UserProfile/UserDataComps/Notification";
import EditForm from "./Pages/UserProfile/RoleSpecific/EditForm";

// Protected Pages
import AdminDashboard from "./Pages/ProtectedPages/Admins/AdminDashboard";
import TeacherDashboard from "./Pages/ProtectedPages/Teachers/TeacherDashboard";
import SuperAdminPanel from "./Pages/ProtectedPages/SuperAdmin/SuperAdminPanel";

// Layouts
import MainLayout from "./Components/Layout/allLayouts/MainLayout";
import AuthLayout from "./Components/Layout/allLayouts/AuthLayout";
import DashboardLayout from "./Components/Layout/allLayouts/DashboardLayout";

// Route Guards
import ProtectedRoutes from "./ProtectedRoutes/ProtectedRoutes";
import ProfileEditForm from "./Pages/UserProfile/UserDataComps/ProfileEditForm";

export const AppRoutes = () => (
  <Routes>

    {/* Main layout with header/footer */}
    <Route element={<MainLayout />}>
      {/* Home and static pages */}
      <Route path="/" index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/community" element={<Community />} />

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

      {/* Fallback */}
      <Route path="*" element={<Error404 />} />
    </Route>

    {/* Auth layout without header/footer */}
    <Route element={<AuthLayout />}>
      {/* Auth pages */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/forget-password" element={<ForgetPassword />} />

      {/* Profile section */}
      <Route path="/profile" element={<UserProfile />}>
        <Route index element={<ProfileDashboard />} />
        <Route path="edit" element={<EditForm />} />
        <Route path="editProfile" element={<ProfileEditForm />} />
        <Route path="notification" element={<Notification />} />
      </Route>

      {/* Standalone admin route under AuthLayout (optional placement) */}
      <Route path="/superAdmin" element={<SuperAdminPanel />} />
    </Route>

    {/* Protected dashboard routes with dashboard layout */}
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
