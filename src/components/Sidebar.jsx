import { useRef, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiDashboard3Line } from "react-icons/ri";
import { MdContactMail } from "react-icons/md";
import { ImInfo } from "react-icons/im";
import { MdOutlineRemoveDone } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaWind } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";
import { NavLink } from 'react-router-dom'
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Search from "../pages/Search/Search";
import Faq from "../pages/Faq/Faq";
import Effect from "../pages/Information/Effects";
import Dodonts from "../pages/DoDonts/Dodonts";
import Contact from "../pages/Contact/Contact";
import Footer from "./Footer";
import Home from "./Home";

const Sidebar = () => {

    const [open, setOpen] = useState(true);
    const main = useRef();
    const Menus = [
        { title: "Dashboard", src: "Chart_fill", child: <RiDashboard3Line size={32} color="white" />, to: "/dashboard" },
        { title: "Search", src: "Search", child: <FaSearch size={32} color="white" />, to: "/search" },
        { title: "Faq", src: "Search", child: <FaQuestion size={32} color="white" />, to: "/faq" },
        { title: "Information", src: "info", child: <ImInfo size={32} color="white" />, to: "/info" },
        { title: "Do's & Dont's", src: "info", child: <MdOutlineRemoveDone size={32} color="white" />, to: "/dodonts" },
        { title: "Contact us", src: "info", child: <MdContactMail size={32} color="white" />, to: "/contact" },

    ];
    const linkStyle = ({ isActive }) => {
        return {
            color: isActive && "white",
            fontWeight: isActive && "700",
            fontSize: isActive && "48px"
        }
    }
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
                    <div
                        className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"
                            }`}
                    ><FaWind size={32} /></div>
                    <h1
                        className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                            }`}
                        style={{ fontWeight: "900", fontSize: "2.4rem" }}
                    >
                        A<span className={`text-black origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                            }`} style={{ fontWeight: "900", fontSize: "2.5rem" }}>Q</span>I
                    </h1>
                </div>
                <ul className="pt-6">
                    {Menus.map((Menu, index) => (
                        <NavLink to={Menu.to} key={index} style={linkStyle}>
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
                        </NavLink>
                    ))}
                </ul>
            </div>
            <div className="h-screen flex-1 overflow-auto main" ref={main}>
                <Routes>
                    <Route path='/' element={<><div className="second"><Home /></div><Footer main={main} /></>} />
                    <Route path='/dashboard' element={<><div className="second"><Dashboard /></div><Footer main={main} /></>} />
                    <Route path='/search' element={<><div className="second"><Search /></div><Footer main={main} /></>} />
                    <Route path='/faq' element={<><div className="second"><Faq /></div><Footer main={main} /></>} />
                    <Route path='/info' element={<><div className="second"><Effect /></div><Footer main={main} /></>} />
                    <Route path='/dodonts' element={<><div className="second"><Dodonts /></div><Footer main={main} /></>} />
                    <Route path='/contact' element={<><div className="second"><Contact /></div><Footer main={main} /></>} />
                    {/* <Route path='/' element={<Home />} />
                    <Route path='/' element={<Home />} /> */}
                </Routes>
            </div>
        </div>
    );
};
export default Sidebar;