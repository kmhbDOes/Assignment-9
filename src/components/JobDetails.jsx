import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const jobDetail = useParams(id);
  //   console.log(id);
  const data = useLoaderData();
  console.log(data);
  const [job, setJob] = useState({});

  useEffect(() => {
    if (data) {
      const jobD = data.find((j) => j.id === jobDetail.id);
      console.log(jobD);
    }
  }, [data]);
  return (
    <div>
      <h1>Details of single job post {job.location}</h1>
    </div>
  );
};

export default JobDetails;
