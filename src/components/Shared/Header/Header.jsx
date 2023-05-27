import React from "react";

const Header = () => {
   return (
      <div className="bg-secondary">
         <div className="container px-4  py-4">
            <div className="flex justify-between items-center">
               <h2 className="text-primary lg:text-4xl text-[28px]  font-bold">
                  E-SHOP{" "}
               </h2>
               <div className="md:flex items-center hidden">
                  <input
                     type="text"
                     name="query"
                     className="focus:outline-none px-2 md:w-[280px] py-1.5 bg-black rounded-md border b border-black focus:border-gray-950 text-gray1"
                     placeholder="Search......"
                     required
                  />

                  <button className="text-gray1 bg-black px-4 py-1.5 rounded-md ml-3">
                     Search
                  </button>
               </div>
               <div className="ml-3 flex items-center text-gray1 text-base">
                  <div className="leading-[10px] mr-4 hidde md:block">
                     <h3>Ripas Sorker</h3>
                     <p className="text-end text-sm">Admin</p>
                  </div>
                  <img
                     src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png"
                     alt="user"
                     className="h-12 w-12 rounded-full"
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Header;
