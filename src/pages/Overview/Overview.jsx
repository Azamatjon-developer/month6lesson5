import React, { useState } from "react";
import { SearchIcon, RemindIcon, PlusIcon } from "../../components/Icons";
import navbarImg from "../../assets/images/photo.png";
function Overview() {
  return (
    <>
      <div className="container">
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

        <div className="flex  gap-6 items-center mt-[54px]">
          <div className="w-[258px] h-[134px] bg-[#fff]  text-center pt-10 hover:border border-[#3751FF]">
            <h3 className="text-[#9FA2B4]">Unresolved</h3>
            <p className="text-[#252733] text-[40px] mb-[12px]">60</p>
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

        <div className="w-full flex h-[546px] bg-white">
          <div className="w-full p-8 ">
            <div className="flex justify-between items-end">
              <div className="flex flex-col gap-4">
                <h3>Today’s trends</h3>
                <p>as of 25 May 2019, 09:41 PM</p>
              </div>
              <div className="flex items-center gap-5 ">
                <div className="flex items-center gap-5">
                  <span className="block h-[2px] w-[16px] bg-[#3751FF]"></span>
                  <h3 className="text-[#9FA2B4]">today </h3>
                </div>
                <div className="flex items-center gap-5">
                  <span className="block h-[2px] w-[16px] bg-[#DFE0EB]"></span>
                  <h3 className="text-[#9FA2B4]"> Yesterday </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-10 border-l">
            <div className="min-w-[278px] max-w-[342px] flex flex-col items-center justify-center min-h-[85.5px] border-b">
              <h3 className="text-[#9FA2B4] text-center text-sm ">
                {" "}
                Resolved{" "}
              </h3>
              <p className="text-2xl">449</p>
            </div>
            <div className="min-w-[278px] max-w-[342px] flex flex-col items-center justify-center min-h-[85.5px] border-b">
              <h3 className="text-[#9FA2B4] text-center text-sm ">
                {" "}
                Received{" "}
              </h3>
              <p className="text-2xl"> 426 </p>
            </div>
            <div className="min-w-[278px] max-w-[342px] flex flex-col items-center justify-center min-h-[85.5px] border-b">
              <h3 className="text-[#9FA2B4] text-center text-sm">
                {" "}
                Average first response time{" "}
              </h3>
              <p className="text-2xl">33m</p>
            </div>
            <div className="min-w-[278px] max-w-[342px] flex flex-col items-center justify-center min-h-[85.5px] border-b">
              <h3 className="text-[#9FA2B4] text-center text-sm">
                {" "}
                Average response time{" "}
              </h3>
              <p className="text-2xl">3h 8m</p>
            </div>
            <div className="min-w-[278px] max-w-[342px] flex flex-col items-center justify-center min-h-[85.5px] border-b">
              <h3 className="text-[#9FA2B4] text-center text-sm">
                {" "}
                Resolution within SLA{" "}
              </h3>
              <p className="text-2xl">94%</p>
            </div>
          </div>
        </div>

        <div className="min-h-[336px] w-full flex  justify-between  gap-3 mt-[30px] mb-[30px]">
          <div className="w-full flex flex-col p-[30px]  bg-white">
            <div className="flex items-start justify-between ">
              <div className="flex flex-col">
                <h3>
                  Unresolved tickets <br />{" "}
                  <span className="text-[#9FA2B4] mb-2">Group: Support</span>{" "}
                </h3>
              </div>
              <div>
                <p className="text-[#3751FF]"> View details</p>
              </div>
            </div>
            <div className="flex justify-between gap-5 border-b border-[#9FA2B4] pb-3 py-[20px]">
              <p>Waiting on Feature Request</p>
              <h3>4238</h3>
            </div>
            <div className="flex justify-between gap-5 border-b border-[#9FA2B4] pb-3 py-[20px]">
              <p>Awaiting Customer Response</p>
              <h3>1005</h3>
            </div>
            <div className="flex justify-between gap-5 border-b border-[#9FA2B4] pb-3 py-[20px]">
              <p>Awaiting Developer Fix</p>
              <h3>914</h3>
            </div>
            <div className="flex justify-between gap-5 py-[20px]">
              <p>Pending</p>
              <h3>281</h3>
            </div>
          </div>

          <div className="w-full  mb-4 p-[30px] bg-white">
            <div className="flex justify-between mb-4">
              <h3>
                Tasks <br /> <span className="text-[#9FA2B4]">Today</span>
              </h3>
              <p className="text-[#3751FF]">View all</p>
            </div>

            <div className="flex justify-between items-center gap-3">
              <input
                className="text-[#C5C7CD] p-[20px] w-full bg-inherit border-none"
                type="text"
                placeholder="Create new task"
              />
              <PlusIcon />
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between gap-[16px]">
                <div className="flex items-center gap-3">
                  <input type="checkbox" />
                  <p>Finish ticket update</p>
                </div>
                <button className="text-[#FFFFFF] bg-[#FEC400] rounded-lg px-[12px] py-[5px]">
                  Urgent
                </button>
              </div>
              <div className="flex items-center justify-between gap-[16px]">
                <div className="flex items-center gap-3">
                  <input type="checkbox" />
                  <p>Create new ticket example</p>
                </div>
                <button className="text-[#FFFFFF] bg-[#29CC97] rounded-lg px-[12px] py-[5px]">
                  New
                </button>
              </div>
              <div className="flex items-center justify-between gap-[16px]">
                <div className="flex items-center gap-3">
                  <input type="checkbox" />
                  <p>Update ticket report</p>
                </div>
                <button className="text-[#9FA2B4] bg-[#F0F1F7] rounded-lg px-[12px] py-[5px]">
                  Default
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Overview;
