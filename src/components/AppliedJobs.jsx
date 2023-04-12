import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import JObDetailsBanner from "./JObDetailsBanner";
import { getStoredJob } from "./utils/fakeDb";

const AppliedJobs = () => {
  const jData = useLoaderData();
  console.log(jData);

  let jb = [];
  const savedJob = getStoredJob();
  for (const id in savedJob) {
    const foundJob = jData.jobs.find((j) => parseInt(j.id) === parseInt(id));
    if (foundJob) {
      jb.push(foundJob);
    }
  }
  console.log(jb);
  return (
    <div className="bg-white top-32 left-96">
      <div className="header">
        <JObDetailsBanner />
        <h2 className="font-bold text-2xl py-4">Applied Jobs</h2>
      </div>

      <div className="flex gap-4">
        <h1 className="font-bold text-gray-600">Filter By: </h1>
        <button className="border-2 border-purple-600 rounded-lg text-purple-600">
          Remote
        </button>
        <button className="border-2 border-purple-600 rounded-lg text-purple-600">
          Onsite
        </button>
      </div>

      {jb.length === 0 ? (
        <p>You haven't applied to any jobs yet.</p>
      ) : (
        <ul>
          {jb.map((job) => (
            <li
              className="py-4 border-2 my-2 w-1/2 mx-auto text-left px-4 rounded"
              key={job.id}
            >
              <div className="flex gap-x-6 my-4 items-center">
                <div>
                  <img className="w-40" src={job.company_logo} alt="" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-600">{job.job_title}</h3>
                  <p>{job.company_name}</p>
                  <div className="flex gap-x-4">
                    <p className="border-2 border-purple-500 rounded-lg w-24 text-center my-auto text-purple-600">
                      {job.remote_or_onsite}
                    </p>
                    <p className="border-2 border-purple-500 rounded-lg w-24 text-center my-auto text-purple-600">
                      {job.fulltime_or_parttime}
                    </p>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <div className="flex items-center gap-x-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                      <p>{job.location}</p>
                    </div>
                    <div className="flex gap-x-4 justify-between items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p>{job.salary}</p>
                    </div>
                  </div>
                </div>
                <button className="btn-primary h-12 w-48">View Details</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AppliedJobs;
