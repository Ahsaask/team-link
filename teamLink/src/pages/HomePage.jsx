
import DashboardCTA from "../components/DashboardCTA";
import HomeCard from "../components/HomeCard";
import JobListings from "../components/JobListings";
import FooterCTA from "../components/FooterCTA";

const HomePage = () => {
return (
    <>
    <DashboardCTA/>
    <HomeCard/>
    <JobListings isHome={true}/>
    <FooterCTA/>
    </>
  );
}

export default HomePage