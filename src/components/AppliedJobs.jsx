import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJob } from "./utils/fakeDb";

const AppliedJobs = () => {
  const jData = useLoaderData();
  console.log(jData);

  let jb = [];
  const savedJob = getStoredJob();
  for (const id in savedJob) {
    const foundJob = jData.jobs.find((j) => parseInt(id) === parseInt(id));
    if (foundJob) {
      jb.push(foundJob);
    }
  }
  console.log(jb);
  return <div>Applied Jobs</div>;
};

export default AppliedJobs;
