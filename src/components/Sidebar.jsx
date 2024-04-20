import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiDashboard3Line } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { FaWind } from "react-icons/fa";
import { Link } from 'react-router-dom'
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Search from "../pages/Search/Search";
import { FaQuestion } from "react-icons/fa";
import Faq from "./Faq";
import { ImInfo } from "react-icons/im";
import Effect from "./Effects";
import { MdOutlineRemoveDone } from "react-icons/md";
import Dodonts from "./Dodonts";

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Dashboard", src: "Chart_fill", child: <RiDashboard3Line size={32} color="white" />, to: "/dashboard" },
        { title: "Search", src: "Search", child: <FaSearch size={32} color="white" />, to: "/search" },
        { title: "Faq", src: "Search", child: <FaQuestion size={32} color="white" />, to: "/faq" },
        { title: "Information", src: "info", child: <ImInfo size={32} color="white" />, to: "/info" },
        { title: "Do's & Dont's", src: "info", child: <MdOutlineRemoveDone size={32} color="white" />, to: "/dodonts" },
        { title: "Analytics", src: "Chart", child: <TbDeviceDesktopAnalytics size={32} color="white" /> },
        { title: "Setting", src: "Setting", child: <IoSettingsOutline size={32} color="white" /> },
    ];

    return (
        <div className="flex">
            <div
                className={` ${open ? "w-72" : "w-20 "
                    } bg-blue-900 h-full min-h-screen p-5  pt-8 relative duration-300`}
            >
                <MdKeyboardArrowRight
                    size={32}
                    className={`absolute cursor-pointer -right-3 top-9 w-7 bg-white text-blue-900 border-blue-900
           border-2 rounded-full  ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                />
                <div className="flex gap-x-4 items-center">
                    <FaWind size={32}
                        className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"
                            }`}
                    />
                    <h1
                        className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                            }`}
                    >
                        AQI
                    </h1>
                </div>
                <ul className="pt-6">
                    {Menus.map((Menu, index) => (
                        <Link to={Menu.to} key={index}>
                            <li
                                key={index}
                                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"
                                    } `}
                            >
                                {Menu.child}
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                    {Menu.title}
                                </span>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="h-screen flex-1 p-7 overflow-auto main">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/search' element={<Search />} />
                    <Route path='/faq' element={<Faq />} />
                    <Route path='/info' element={<Effect />} />
                    <Route path='/dodonts' element={<Dodonts />} />
                    <Route path='/' element={<Home />} />
                    <Route path='/' element={<Home />} />
                </Routes>
                {/* <Dashboard /> */}
            </div>
        </div>
    );
};
export default Sidebar;