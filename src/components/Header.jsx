import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold">RecruitForum</h1>
        </div>
        <div className="flex justify-around gap-x-3 text-2xl">
          <Link>Statistics</Link>
          <Link>Applied Jobs</Link>
          <Link>Blog</Link>
        </div>
        <div className="text-3xl">
          <button className="btn-primary">Start Applying</button>
        </div>
      </div>

      {/* Header bg */}
    </div>
  );
};

export default Header;
