import React, { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import CategoryList from "./CategoryList";

const Home = () => {
  const category = useLoaderData();
  console.log(category);
  useEffect(() => {
    fetch("jobInfo.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
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
          </span>{" "}
          <br />
          <span className="text-xl text-gray-500">
            ExploreThousands of job opportunities with all the information you
            need, It's your future
          </span>
          <div className="flex flex-col md:flex-row justify-center items-center my-8 gap-y-6 md:gap-x-6">
            {category.map((clist) => (
              <CategoryList key={clist.id} clist={clist}></CategoryList>
            ))}
          </div>
        </p>
      </div>

      {/* Featured Jobs */}
      <div className="bg-white mb-4">
        <p className="text-3xl font-bold py-3">Featured Jobs</p>
        <p>
          Explore Thousands of job opportunities with all teh information you
          need. It's your future.
        </p>
      </div>

      {/* Job Listing */}

      <div></div>
    </div>
  );
};

export default Home;
