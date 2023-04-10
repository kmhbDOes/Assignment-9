import React from "react";

const CategoryList = ({ clist }) => {
  return (
    <div>
      <div class=" prim-col text-left w-60 h-44 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-purple-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <img src={clist.image} alt="" />
        <p class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {clist.title}
        </p>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          {clist.jobsAvailable}
        </p>
      </div>
    </div>
  );
};

export default CategoryList;
