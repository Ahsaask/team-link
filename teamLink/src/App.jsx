import Navbar from "./components/Navbar";
import grad from "./assets/gradient.png"
import DashboardCTA from "./components/DashboardCTA";

DashboardCTA

const App = () => {
  return (
    <>
      <div className="bg-white h-screen w-full">
        
      <img className=" absolute w-[1440px] h-[616px] top-0" src={grad}/>
        <Navbar />
        
        <DashboardCTA/>

      </div>
    </>
  );
};

export default App;
