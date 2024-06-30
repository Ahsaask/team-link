import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar";
import grad from "../assets/gradient.png";

const MainLayout = () => {
  return (
    <>
     <div className="bg-white h-screen w-full">
        <img className=" absolute w-[1440px] h-[316px] top-0" src={grad} />
        <Navbar />
        <Outlet/>
     </div>
    </>
  )
}

export default MainLayout