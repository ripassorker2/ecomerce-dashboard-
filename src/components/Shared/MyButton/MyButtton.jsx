import React from "react";

const MyButtton = ({ text, classes }) => {
   return (
      <div className={`text-gray1 bg-black px-3 py-1.5 rounded-md ${classes}`}>
         {text}
      </div>
   );
};

export default MyButtton;
