import React from "react";
import { NavLink } from "react-router-dom";
import {
  OverviewLogo,
  TicketsLogo,
  IdeasLogo,
  ContactsLogo,
  AgentsLogo,
  SettingsLogo,
  SubsrictionLogo,
  ArticlesLogo,
  DashboardLogo1,
  PlusIcon,
} from "../components/Icons";

function Navbar() {
  return (
    <>
      <nav className="min-w-[20%]  overflow-y-auto bg-[#363740] flex flex-col ">
        <div className="flex px-[32px] mt-[41px] mb-[61px] gap-2 items-center text-white">
          {" "}
          <DashboardLogo1/>
           <h2>Dashboard Kit</h2>{" "}
        </div>
        <NavLink
          className={
            "py-[10px] text-[16px] pl-[32px] text-white  border-l-4 border-transparent flex items-center gap-[20px] mt-2 mb-2"
          }
          to={"/"}
        >
          {" "}
          <OverviewLogo /> Overview{" "}
        </NavLink>
        <NavLink
          className={
            "py-[10px] text-[16px] pl-[32px] text-white border-l-4 border-transparent flex items-center gap-[20px] mt-2 mb-2"
          }
          to={"/tickets"}
        >
          {" "}
          <TicketsLogo /> Tickets{" "}
        </NavLink>
        <NavLink
          className={
            "py-[10px] pl-[32px] text-white flex border-l-4 border-transparent items-center gap-[20px] mt-2 mb-2"
          }
          to={"/ideas"}
        >
          {" "}
          <IdeasLogo /> Ideas{" "}
        </NavLink>
        <NavLink
          className={
            "py-[10px] pl-[32px] text-white flex border-l-4 border-transparent items-center gap-[20px] mt-2 mb-2"
          }
          to={"/contacts"}
        >
          {" "}
          <ContactsLogo /> Contacts{" "}
        </NavLink>
        <NavLink
          className={
            "py-[10px] pl-[32px] text-white flex border-l-4 border-transparent items-center gap-[20px] mt-2 mb-2"
          }
          to={"/agents"}
        >
          {" "}
          <AgentsLogo /> Agents{" "}
        </NavLink>
        <NavLink
          className={
            "py-[10px] pl-[32px] text-white flex border-l-4 border-transparent items-center gap-[20px] mt-2 mb-2"
          }
          to={"/articles"}
        >
          {" "}
          <ArticlesLogo /> Articles{" "}
        </NavLink>
        <NavLink
          className={
            "py-[10px] pl-[32px] text-white flex border-l-4 border-transparent items-center gap-[20px] mt-2 mb-2"
          }
          to={"/settings"}
        >
          {" "}
          <SettingsLogo /> Settings{" "}
        </NavLink>
        <NavLink
          className={
            "py-[10px] pl-[32px] text-white flex border-l-4 border-transparent items-center gap-[20px] mt-2 mb-2"
          }
          to={"/subsriction"}
        >
          {" "}
          <SubsrictionLogo /> Subsricption{" "}
        </NavLink>
      </nav>
    </>
  );
}

export default Navbar;
