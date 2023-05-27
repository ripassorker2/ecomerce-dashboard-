import React, { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";

import { Link, NavLink, Outlet } from "react-router-dom";

const menus = [
   {
      name: "Dashboard",
      link: "/",
      icon: MdOutlineDashboard,
   },
   {
      name: "Orders",
      link: "/hj",
      icon: MdOutlineDashboard,
   },
   {
      name: "Sellers",
      link: "/jh",
      icon: MdOutlineDashboard,
   },
   {
      name: "Buyers",
      link: "/jh",
      icon: MdOutlineDashboard,
   },
];
const Sidebar = () => {
   const [open, setOpen] = useState(true);
   return (
      <div>
         <section className=" md:flex hidden">
            <div
               className={`bg-secondary border-t border-gray1 lg:h-[87vh]   overflow-y-auto 
                 w-[260px] duration-500 text-gray1 px-4`}
            >
               <div className="mt-4 flex flex-col gap-4 relative">
                  {menus?.map((menu, i) => (
                     <NavLink
                        to={menu?.link}
                        key={i}
                        style={({ isActive }) => ({
                           background: isActive && "#333649",
                        })}
                        className={`group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-black rounded-md`}
                     >
                        <div>
                           {React.createElement(menu?.icon, { size: "20" })}
                        </div>
                        <h2
                           style={{
                              transitionDelay: `${i + 3}00ms`,
                           }}
                           className={`whitespace-pre duration-500 ${
                              !open &&
                              "opacity-0 translate-x-28 overflow-hidden"
                           }`}
                        >
                           {menu?.name}
                        </h2>
                        <h2
                           className={`${
                              open && "hidden"
                           } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                        >
                           {menu?.name}
                        </h2>
                     </NavLink>
                  ))}
               </div>
            </div>
            <div className="overflow-y-auto h-[86vh] p-5" style={{ flex: 10 }}>
               <Outlet />
            </div>
         </section>
      </div>
   );
};

export default Sidebar;
