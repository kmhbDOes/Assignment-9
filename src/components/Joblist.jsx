import React, { useEffect, useState } from "react";

const Joblist = ({ job }) => {
  const { job_title } = job;
  return (
    <div>
      <p>{job_title}</p>
    </div>
  );
};

export default Joblist;
