import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JObDetailsBanner from "./JObDetailsBanner";

const JobDetails = () => {
  const { id } = useParams();
  console.log(id);
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

      {/* flex div */}
      <div className="bg-white flex flex-col md:flex-row py-4">
        <div className="bg-white text-center md:text-left">
          <p className="text-4xl font-bold py-4">Job Details</p>
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
            <p class="text-gray-700 text-base">
              <span className="font-bold">Salary:</span>
              {salary}
            </p>
            <p>
              <span className="font-bold text-gray-700">Job Title:</span>{" "}
              {job_title}
            </p>
          </div>
          <div className="py-2">
            <p className="py-4 font-bold">Contact Information</p>
            <hr className="h-5 w-60 mx-auto" />
            <p>
              <span className="font-bold text-gray-600">Phone:</span> {phone}
            </p>
            <p>
              <span className="font-bold text-gray-600">Email:</span> {email}
            </p>
            <p>
              <span className="font-bold text-gray-600">Address:</span>{" "}
              {location}
            </p>
          </div>
        </div>
      </div>
      {/* Ends Here------- */}
    </div>
  );
};

export default JobDetails;
