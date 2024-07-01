import { useState, useEffect } from "react";
import JobCard from "./JobCard";

// eslint-disable-next-line react/prop-types
const JobListings = ({ isHome = false }) => {
  // const jobListings = isHome ? Jobs.slice(0, 3) : Jobs;
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const ApiURl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
      const BASE_URL = 'https://team-link-fujc3hj0d-ahsaas-projects.vercel.app';

      try {
        const res = await fetch(`${BASE_URL}${ApiURl}`);
        const data = await res.json();
        if (Array.isArray(data)) {
          setJobs(data);
        } else {
          console.error('Data fetched is not an array:', data);
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [isHome]);


  if (loading) {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(jobs)) {
    return <div>Error: Jobs data is not an array</div>;
  }

  return (
    <section className="bg-white px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Projects" : "Browse Projects"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <>
              {jobs.map((job, index) => (
                <JobCard key={index} job={job} />
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobListings;
