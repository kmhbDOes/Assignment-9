import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JObDetailsBanner from "./JObDetailsBanner";
import { addToDb } from "./utils/fakeDb";

const JobDetails = () => {
  const handleAppliedJobs = (id) => {
    addToDb(id);
  };
  const { id } = useParams();
  const [job, setJob] = useState({});

  useEffect(() => {
    fetch("/jobInfo.json")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          const jobD = data.jobs.find((j) => j.id === parseInt(id));
          setJob(jobD);
        }
      });
  }, []);
  const {
    job_title,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    location,
    phone,
    email,
  } = job;
  return (
    <div className="py-4">
      <JObDetailsBanner></JObDetailsBanner>
      <p className="text-4xl font-bold py-4">Job Details</p>
      {/* flex div */}
      <div className="bg-white flex flex-col md:flex-row py-4">
        <div className="bg-white text-center md:text-left">
          <p className="my-2">
            <span className="text-gray-600 font-bold">Job Description:</span>{" "}
            {job_description}
          </p>
          <p className="my-2">
            <span className="text-gray-600 font-bold">Job Responsibility:</span>{" "}
            {job_responsibility}{" "}
          </p>
          <p className="my-2">
            <span className="font-bold text-gray-600">
              Educational Requirements:
            </span>{" "}
            {educational_requirements}
          </p>
          <p className="my-2">
            <span className="font-bold text-gray-600">Experience:</span>{" "}
            {experiences}
          </p>
        </div>

        {/* Job Details */}
        <div class="max-w-sm rounded overflow-hidden shadow-lg prim-col mx-auto">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Job Details</div>
            <hr className="h-5 w-60 mx-auto" />
            <div className="flex justify-center">
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
              <p class="text-gray-700 text-base">
                <span className="font-bold">Salary:</span>
                {salary}
              </p>
            </div>
            <p className="flex justify-center">
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
                  d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                />
              </svg>
              <span className="font-bold text-gray-700">Job Title:</span>{" "}
              {job_title}
            </p>
          </div>
          <div className="py-4">
            <p className="py-4 font-bold">Contact Information</p>
            <hr className="h-5 w-60 mx-auto" />
            <div className="flex justify-center">
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
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <p>
                <span className="font-bold text-gray-600">Phone:</span> {phone}
              </p>
            </div>
            <div className="flex justify-center">
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
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <p>
                <span className="font-bold text-gray-600">Email:</span> {email}
              </p>
            </div>
            <p className="flex justify-center">
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
              <span className="font-bold text-gray-600">Address:</span>

              {location}
            </p>
            <button
              onClick={() => handleAppliedJobs(id)}
              className="btn-primary w-52"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
      {/* Ends Here------- */}
    </div>
  );
};

export default JobDetails;
