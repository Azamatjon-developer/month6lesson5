import React from "react";
import { SearchIcon, RemindIcon } from "../../components/Icons";
import navbarImg from "../../assets/images/photo.png"
function Overview() {
  return (
    <>
      <header className="mt-[36px] flex items-center justify-between p-[30px]">
          <h2 className="text-[24px] tracking-widest font-bold text-[#252733]">Overview</h2>
        <div className="flex items-center gap-[25px]">
          <SearchIcon />
          <RemindIcon />
          <h3 className="text-[#252733] text-sm text-right"> | Jones Ferdinand</h3>
          <img src= {navbarImg} alt="navbarImg" />
        </div>
      </header>
    </>
  );
}

export default Overview;
