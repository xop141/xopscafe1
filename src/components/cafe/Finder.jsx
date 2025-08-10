"use client";
import React, { useState } from "react";
import { Moon, Sun } from "lucide-react";
import CafeCard from "./CafeCard";

const Finder = () => {
  const [selected, setSelected] = useState("day");

  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex justify-between items-center">
        <h1 className="text-[22px] font-bold">Place Finder</h1>
        <div className="p-[4px] rounded-[4px] border border-[#242424] flex ">
          <div
            onClick={() => setSelected("day")}
            className={`py-[4px] px-[16px] flex items-center justify-center gap-[10px] rounded-[4px] cursor-pointer transition-colors duration-200
              ${
                selected === "day"
                  ? "bg-[#FF5500] text-white"
                  : "bg-transparent text-gray-400"
              }`}
          >
            <Sun size={18} />
          </div>
          <div
            onClick={() => setSelected("night")}
            className={`py-[4px] px-[16px] flex items-center justify-center gap-[10px] rounded-[4px] cursor-pointer transition-colors duration-200
              ${
                selected === "night"
                  ? "bg-[#FF5500] text-white"
                  : "bg-transparent text-gray-400"
              }`}
          >
            <Moon size={18} />
          </div>
        </div>
      </div>
      <div className="">
        <CafeCard />
      </div>
    </div>
  );
};

export default Finder;
