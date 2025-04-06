import React from "react";
import { accessElf } from "../../auth/utils/accessElf";
import Navigation from "../../application/Navigation";

function ProfilePage() {
  accessElf.track("ProfilePage");
  return (
    <div className="flex flex-col w-full bg-white">
      <Navigation />
      <div className="flex flex-col items-center px-4 mt-4">
        <h1 className="text-2xl font-bold">Profile Page</h1>
        <p className="text-gray-600">Welcome to your profile!</p>
      </div>
    </div>
  );
}

export default ProfilePage;
