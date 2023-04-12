import React, { useEffect, useState } from "react";
import CategoryList from "./CategoryList";
import Joblist from "./Joblist";

const Home = () => {
  const [showAllJobs, setShowAllJobs] = useState(false);
  // const handleSeeAllJobs = () => {
  //   setJobCount(details.length);
  // }
  const [categoryDetails, setCategoryDetails] = useState([]);
  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategoryDetails(data));
  }, []);
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch("jobInfo.json")
      .then((res) => res.json())
      .then((data) => setDetails(data.jobs));
  }, []);

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-around items-center mx-8">
        <div className="text-center md:text-left ">
          <p className="text-5xl font-bold my-4">
            One Step <br /> Closer To Your <br />{" "}
            <span className="text-purple-600 hover:text-purple-800">
              Dream Job
            </span>
          </p>
          <p className="text-gray-500 my-6">
            Explore thousands of job opportunities with all the <br />
            information you need. Its your future. Come find it. Manage all
            <br /> your job application from start to finish.
          </p>
          <button className="btn-primary mt-4">Get Started</button>
        </div>
        <div>
          <img src="https://i.ibb.co/6XQ7YjK/header-banner.png" alt="" />
        </div>
      </div>
      {/* Header Done */}

      {/* Category Section */}
      <div className="py-6 bg-white">
        <p>
          <span className="text-xl md:text-3xl font-bold">
            Job Category List
          </span>
          <br />
          <span className="text-xl text-gray-500">
            ExploreThousands of job opportunities with all the information you
            need, It's your future
          </span>
          <div className="flex flex-col md:flex-row justify-center items-center my-8 gap-y-6 md:gap-x-6">
            {categoryDetails.map((clist) => (
              <CategoryList key={clist.id} clist={clist}></CategoryList>
            ))}
          </div>
        </p>
      </div>

      {/* Featured Jobs */}
      <div className="bg-white mb-4">
        <p className="text-3xl font-bold py-3">Featured Jobs</p>
        <p className="my-2 text-gray-500 text-xl">
          Explore Thousands of job opportunities with all teh information you
          need. It's your future.
        </p>
      </div>

      {/* Job Listing */}

      {/* <div className="grid md:grid-cols-2 gap-x-4 gap-y-4 my-4 bg-white ">
        {details.slice(0, 4).map((job) => (
          <Joblist key={job.id} id={job.id} job={job}></Joblist>
        ))}
      </div> */}
      <div className="grid md:grid-cols-2 gap-x-4 gap-y-4 my-4 bg-white ">
        {details.slice(0, showAllJobs ? details.length : 4).map((job) => (
          <Joblist key={job.id} id={job.id} job={job}></Joblist>
        ))}
      </div>
      {!showAllJobs && (
        <button className="btn-primary" onClick={() => setShowAllJobs(true)}>
          View All Jobs
        </button>
      )}
    </div>
  );
};

export default Home;
