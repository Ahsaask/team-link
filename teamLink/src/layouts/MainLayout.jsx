import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar";
import grad from "../assets/gradient.png";
import {ToastContainer} from 'react-toastify';

import 'react-toastify/ReactToastify.css';

const MainLayout = () => {
  return (
    <>
     <div className="bg-white h-screen w-full">
        <img className=" absolute w-[1440px] h-[316px] top-0" src={grad} />
        <Navbar />
        <Outlet/>
        <ToastContainer/>
     </div>
    </>
  )
}

export default MainLayout