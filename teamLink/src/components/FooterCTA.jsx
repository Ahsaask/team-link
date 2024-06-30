import { Link } from "react-router-dom";

Link

const FooterCTA = () => {
  return (
    <section className="mx-auto max-w-lg my-10 px-6 pb-1">
      <Link
        to="/projects"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700 mb-10"
      >
        View All Jobs
      </Link>
    </section>
  );
};

export default FooterCTA;
