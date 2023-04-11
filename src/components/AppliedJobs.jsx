import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
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
    <div>
      <h2>Applied Jobs:</h2>
      {jb.length === 0 ? (
        <p>You haven't applied to any jobs yet.</p>
      ) : (
        <ul>
          {jb.map((job) => (
            <li key={job.id}>
              <h3>{job.title}</h3>
              <p>Company: {job.company_name}</p>
              <p>Location: {job.location}</p>
              <p>Salary: {job.salary}</p>
              <p>Description: {job.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AppliedJobs;
