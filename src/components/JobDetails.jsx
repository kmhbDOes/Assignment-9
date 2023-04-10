import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const { id } = useParams();
  console.log(id);
  const data = useLoaderData();
  console.log(data);
  const [job, setJob] = useState({});

  useEffect(() => {
    if (data) {
      const jobD = data.jobs.find((j) => j.id === Number(id));
      setJob(jobD);
    }
  }, [id, data]);
  console.log(data.jobs);
  return (
    <div>
      <h1>Details of single job post {data.jobs.location}</h1>
    </div>
  );
};

export default JobDetails;
