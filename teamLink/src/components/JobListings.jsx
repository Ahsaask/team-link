import { useState, useEffect } from "react";
import JobCard from "./JobCard";

// eslint-disable-next-line react/prop-types
const JobListings = ({ isHome = false }) => {
  // const jobListings = isHome ? Jobs.slice(0, 3) : Jobs;
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { 
    const fetchJobs = async () => {
      const ApiURl = isHome ? "/api/jobs?_limit=3" : "/api/jobs"

      try {
        const res = await fetch(`${ApiURl}`);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Error fetching data for", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

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
