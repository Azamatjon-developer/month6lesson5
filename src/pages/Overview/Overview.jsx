import React from "react";
import { SearchIcon, RemindIcon } from "../../components/Icons";
import navbarImg from "../../assets/images/photo.png";
function Overview() {
  return (
    <>
      <header className="mt-[36px] flex items-center justify-between p-[30px]">
        <h2 className="text-[24px] tracking-widest font-bold text-[#252733]">
          Overview
        </h2>
        <div className="flex items-center gap-[25px]">
          <SearchIcon />
          <RemindIcon />
          <h3 className="text-[#252733] text-sm text-right">
            {" "}
            | Jones Ferdinand
          </h3>
          <img src={navbarImg} alt="navbarImg" />
        </div>
      </header>


      <div className="flex justify-around items-center mt-[54px]">
          <div className="w-[258px] h-[134px] bg-[#fff]  text-center pt-10 hover:border border-[#3751FF]">
            <h3 className="text-[#9FA2B4]">Unresolved</h3>
            <p className="text-[#252733] text-[40px] mb-[12px]">60</p>
            <h4>Azamat </h4>
          </div>

          <div className="w-[258px] h-[134px] bg-[#fff]  text-center pt-10  hover:border border-[#3751FF] ">
            <h3 className="text-[#3751FF]">Overdue</h3>
            <p className="text-[#3751FF] text-[40px] mb-[12px]">16</p>
          </div>
          <div className="w-[258px] h-[134px] bg-[#fff]  text-center pt-10  hover:border border-[#3751FF]">
            <h3 className="text-[#9FA2B4]">Open</h3>
            <p className="text-[#252733] text-[40px] mb-[12px]">43</p>
          </div>
          <div className="w-[258px] h-[134px] bg-[#fff]  text-center pt-10  hover:border border-[#3751FF]">
            <h3 className="text-[#9FA2B4]">On hold</h3>
            <p className="text-[#252733] text-[40px] mb-[12px]">64</p>
          </div>



           </div>
         
    </>
  );
}

export default Overview;
