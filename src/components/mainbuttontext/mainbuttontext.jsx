import React from "react";

const Mainbuttontext = () => {
  return (
    <div>
      <div className="flex justify-center items-center text-[white] text-[60px] w-[100%] text-[bold] ">
        <p>Turn your audience into email and <br /> text message subscribers.</p>
      </div>
      <div className=" text-[#fff] flex justify-center  gap-[17px] mr-[200px] mt-[50px] ">
       <button className="  rounded-[30px]  w-[313px] p-[10px] h-[100px] bg-[#326CF9]">Get Started Now</button>
        <button className=" rounded-[23px]   w-[313px] h-[100px] p-[20px] border-[2px]">View A Demo</button>
      </div>
      <div>
        <span>1000+ creators have already started</span>
      </div>
    </div>
  );
};
export default Mainbuttontext;
