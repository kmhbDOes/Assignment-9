import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const JobDetails = () => {
  const dynamic = useParams();
  console.log(dynamic.id);
  const [job, setJob] = useState({});

  useEffect(() => {
    fetch("/jobInfo.json")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          const jobD = data.jobs.find((j) => j.id === parseInt(dynamic.id));
          setJob(jobD);
        }
      });
  }, []);

  return (
    <div>
      <h1>Details of single job post {job.location}</h1>
      <p>Title: {job.title}</p>
      <p>Phone: {job.phone}</p>
    </div>
  );
};

export default JobDetails;
