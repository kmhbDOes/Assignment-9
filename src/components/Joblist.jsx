const Joblist = ({ job }) => {
  const {
    job_title,
    company_logo,
    company_name,
    remote_or_onsite,
    fulltime_or_parttime,
    salary,
    location,
  } = job;
  return (
    <div class="  text-left p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-purple-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
      <img src={company_logo} className="h-10 my-4" alt="" />
      <p class="mb-2 text-2xl font-bold tracking-tight text-gray-500 dark:text-white">
        {job_title}
      </p>
      <p class="font-normal text-gray-700 text-xl">{company_name}</p>
      <div className="flex gap-x-4 text-purple-500 font-semibold my-4">
        {/* Job type */}
        <div className="rounded-lg border-transparent border-2 border-purple-500 text-xl">
          {remote_or_onsite}
        </div>
        <div className="rounded-xl border-transparent border-2 border-purple-500">
          {fulltime_or_parttime}
        </div>
      </div>

      {/* Job location */}
      <div className="flex gap-x-6 text-xl">
        <div>{location}</div>
        <div>{salary}</div>
      </div>
      <button className="btn-primary">View Details</button>
    </div>
  );
};

export default Joblist;
