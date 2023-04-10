import React from "react";

const CategoryList = ({ clist }) => {
  return (
    <div>
      <img className=" mb-6 rounded shadow-lg " src={clist.image} alt="" />
      <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
        {clist.title}
      </p>
      <p className="text-gray-700 ">Category: {clist.jobsAvailable}</p>
    </div>
  );
};

export default CategoryList;
