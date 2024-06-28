import reactImg from "../assets/react.svg";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto pr-6 sm:px-6 lg:px-8">
          <div className="h-20 flex items-center justify-between">
            <div className="flex items-center justify-center flex-1 md:items-stretch md:justify-start">
              <a
                className="flex items-center flex-shrink-0 gap-2 mr-4"
                href="#"
              >
                <img
                  className="sm:h-[40px] h-10 w-auto"
                  src={reactImg}
                  alt="React Jobs"
                />
                <span className="hidden md:block font-mono text-black text-4xl font-bold">
  
                </span>
              </a>
            </div>

            <div className="md:ml-5">
              <div className="flex space-x-2">
                <a
                  href="/index.html"
                  className="text-black active:bg-black hover:bg-gray-100 hover:text-black rounded-3xl px-3 py-2"
                >
                  Home
                </a>
                <a
                  href="/jobs.html"
                  className="text-black hover:bg-gray-100 hover:text-black rounded-3xl px-3 py-2"
                >
                  Projects
                </a>
                <a
                  href="/add-job.html"
                  className="text-white bg-gray-950 hover:bg-black hover:text-white rounded-3xl px-4 py-2 flex gap-1"
                >
                  Proposal +
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
