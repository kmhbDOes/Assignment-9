import React from "react";

const Home = () => {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row justify-around items-center mx-8">
        <div className="text-center md:text-left ">
          <p className="text-5xl font-bold my-4">
            One Step <br /> Closer To Your <br />{" "}
            <span className="text-purple-600 hover:text-purple-800">
              Dream Job
            </span>
          </p>
          <p className="text-gray-500 my-64">
            Explore thousands of job opportunities with all the <br />
            information you need. Its your future. Come find it. Manage all
            <br /> your job application from start to finish.
          </p>
          <button className="btn-primary mt-4">Get Started</button>
        </div>
        <div>
          <img src="../../public/header-banner.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
