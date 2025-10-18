import { Routes, Route, Navigate, Outlet } from "react-router-dom";

// 🌐 Public Pages
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Community from "./Pages/Community/Community";
import Projects from "./Pages/Project/Projects";
import ProjectDetails from "./Pages/Project/ProjectDetails";
import Career from "./Pages/Career/Career";
import PostJob from "./Pages/Career/PostJob/PostJob";
import JobDetails from "./Pages/Career/Jobs/Job-details";

// 🎓 Courses
import Courses from "./Pages/Courses/Cources";
import CourseDetails from "./Pages/Courses/CourseDetail/CourseDetails";

// 🏪 Store Pages
import Store from "./Pages/Store/Store";
import StoreBooks from "./Pages/Store/Books/StoreBooks";
import StoreProducts from "./Pages/Store/Product/StoreProducts";
import StoreTranings from "./Pages/Store/Trainings/StoreTranings";
import BookDetails from "./Pages/Store/Books/Bookdetails";
import ProductDetails from "./Pages/Store/Product/Productdetails";
import TrainingDetails from "./Pages/Store/Trainings/Trainingdetails";
import CheckoutPage from "./Pages/Store/CheckoutPage";

// 👤 User Profile Pages
import UserProfile from "./Pages/UserProfile/UserProfile";
import ProfileDashboard from "./Pages/UserProfile/UserDataComps/ProfileDashboard";
import EditForm from "./Pages/UserProfile/RoleSpecific/EditForm";
import ProfileEditForm from "./Pages/UserProfile/UserDataComps/ProfileEditForm";
import Notification from "./Pages/UserProfile/UserDataComps/Notification";
import PublicProfiles from "./Pages/UserProfile/PublicProfile/PublicProfiles";

// 🔐 Auth Pages
import Login from "./Pages/Registration/Login";
import Signup from "./Pages/Registration/Signup";
import ForgetPassword from "./Pages/Registration/ForgetPassword";

// 🧱 Protected Dashboards
import AdminDashboard from "./Pages/ProtectedPages/Admins/AdminDashboard";
import TeacherDashboard from "./Pages/ProtectedPages/Teachers/TeacherDashboard";
import SuperAdminPanel from "./Pages/ProtectedPages/SuperAdmin/SuperAdminPanel";

// 🧩 Layouts
import MainLayout from "./Components/Layout/allLayouts/MainLayout";
import AuthLayout from "./Components/Layout/allLayouts/AuthLayout";
import DashboardLayout from "./Components/Layout/allLayouts/DashboardLayout";

// ⚙️ Guards
import ProtectedRoutes from "./ProtectedRoutes/ProtectedRoutes";

// 🚫 Error Page
import Error404 from "./Components/Error/Error404";
import { getRoleFromToken } from "./utils/GetUserRoleFromToken";

const token = localStorage.getItem("token");
const role = getRoleFromToken(token);

// =========================
// 🚀 Application Routes
// =========================
export const AppRoutes = () => (
  <Routes>
    {/* ===================== */}
    {/* 🌐 Main Layout Routes */}
    {/* ===================== */}
    <Route element={<MainLayout />}>
      {/* Static Pages */}
      <Route path="/" index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/community" element={<Community />} />

      {/* 📚 Courses */}
      <Route path="/classes">
        <Route index element={<Navigate to="web-development" replace />} />
        <Route path=":category" element={<Courses />} />
        <Route path=":category/:title/:id" element={<CourseDetails />} />
      </Route>

      {/* 💼 Career */}
      <Route path="/career">
        <Route index element={<Career />} />
        <Route path="post-job" element={<PostJob />} />
      </Route>
      <Route path="/job-details/:id" element={<JobDetails />} />

      {/* 🧩 Projects */}
      <Route path="/projects">
        <Route index element={<Navigate to="all" replace />} />
        <Route path=":category" element={<Projects />} />
        <Route path=":category/:title/:id" element={<ProjectDetails />} />
      </Route>

      {/* 🏪 Store */}
      <Route path="/store" element={<Store />}>
        <Route index element={<StoreBooks />} />
        <Route path="books" element={<StoreBooks />} />
        <Route path="products" element={<StoreProducts />} />
        <Route path="tranings" element={<StoreTranings />} />
      </Route>
      <Route path="/book-details/:id" element={<BookDetails />} />
      <Route path="/product-details/:id" element={<ProductDetails />} />
      <Route path="/training-details/:id" element={<TrainingDetails />} />
      <Route path="/checkout" element={<CheckoutPage />} />

      {/* 404 Fallback */}
      <Route path="*" element={<Error404 />} />
    </Route>

    {/* ===================== */}
    {/* 🔐 Auth Layout Routes */}
    {/* ===================== */}
    <Route element={<AuthLayout />}>
      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/forget-password" element={<ForgetPassword />} />

      {/* 👤 User Profile */}
      <Route path="/profile" element={<UserProfile />}>
        <Route index element={<ProfileDashboard />} />
        <Route path="edit" element={<EditForm />} />
        <Route
          path="editProfile"
          element={<ProfileEditForm userType={`${role}`} />}
        />
        <Route path="notification" element={<Notification />} />
      </Route>

      {/* Public Profile (search results) */}
      <Route path="/:role/:nameSlug/:id" element={<PublicProfiles />} />

      {/* Optional: Standalone SuperAdmin Route */}
      <Route path="/superAdmin" element={<SuperAdminPanel />} />
    </Route>

    {/* ============================ */}
    {/* 🧱 Protected Dashboard Routes */}
    {/* ============================ */}
    <Route element={<DashboardLayout />}>
      {/* 👨‍🏫 Teacher Dashboard */}
      <Route
        path="/teacher-dashboard"
        element={
          <ProtectedRoutes minimumRole="teacher">
            <TeacherDashboard />
          </ProtectedRoutes>
        }
      />

      {/* 🧑‍💼 Admin Dashboard (Nested) */}
      <Route
        path="/admin/dashboard/*"
        element={
          <ProtectedRoutes minimumRole="admin">
            <Outlet />
          </ProtectedRoutes>
        }
      >
        <Route index element={<Navigate to="overview" replace />} />
        <Route path="overview" element={<AdminDashboard />} />
        <Route path=":id" element={<AdminDashboard />} />
      </Route>

      {/* 👑 Super Admin Panel */}
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
