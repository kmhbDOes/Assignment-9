import { Link } from "react-router-dom";

const Joblist = ({ id, job }) => {
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
    <div class="  text-left px-3 py-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-purple-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
      <img src={company_logo} className="h-10 my-4" alt="" />
      <p class="mb-2 text-2xl font-bold tracking-tight text-gray-500 dark:text-white">
        {job_title}
      </p>
      <p class="font-normal text-gray-700 text-xl">{company_name}</p>
      <div className="flex gap-x-4 text-purple-500 font-semibold my-4">
        {/* Job type */}
        <div className="rounded-lg border-transparent border-2 border-purple-600 text-xl">
          {remote_or_onsite}
        </div>
        <div className="rounded-xl border-transparent border-2 border-purple-600">
          {fulltime_or_parttime}
        </div>
      </div>

      {/* Job location */}
      <div className="flex flex-col  md:flex-row gap-y-4 md:gap-x-6 text-xl">
        <div className="flex items-center">
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
          <div className="text-sm md:text-xl">{location}</div>
        </div>
        <div className="flex items-center">
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
          <div className="text-sm"> {salary}</div>
        </div>
      </div>
      <Link to={`/job/${id}`}>
        <button className="btn-primary">View Details</button>
      </Link>
    </div>
  );
};

export default Joblist;
