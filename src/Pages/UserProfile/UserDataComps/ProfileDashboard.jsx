import React, { useEffect, useState } from "react";
import RoleSpecificUI from "../RoleSpecific/RoleSpecificUI";
import { HeadIcon } from "../UserProfile";
import ExpandableTextbox from "../../../utils/ExpandableContent";
import { MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { getRoleFromToken } from "../../../utils/GetUserRoleFromToken";
import SectionCard from "../SectionCard";

const ProfileDashboard = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    const token = localStorage.getItem("token");

    if (!storedUser || !token) {
      navigate("/login");
      return;
    }

    const user = JSON.parse(storedUser);
    if (!user.isLoggedIn) {
      navigate("/login");
    } else {
      setUserData(user);
      const roleFromToken = getRoleFromToken(token);
      setRole(roleFromToken);
    }
  }, [navigate]);

  if (!userData) {
    return (
      <div className="flex justify-center items-center h-32 text-sm text-gray-600 dark:text-gray-400">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="w-full mx-auto space-y-4 px-4 md:px-0">
      <header>
        <h2 className="text-2xl font-semibold dark:text-white">Dashboard</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Welcome to your dashboard!
        </p>
      </header>

      {/* About Section */}
      <section className="space-y-2">
        <SectionCard title="About" textBtn={"Edit"}>
          <ExpandableTextbox
          className={'text-sm text-gray-500 dark:text-gray-400'}
            text={userData.bio || "No bio added yet."}
            limit={150}
          />
        </SectionCard>
      </section>

      {/* Role-specific UI */}
      {role && (
        <section>
          <RoleSpecificUI role={role} userData={userData} />
        </section>
      )}
    </div>
  );
};

export default ProfileDashboard;
