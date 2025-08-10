import React from "react";

const Ad = () => {
  return (
    <div
      className="pointer-events-auto antialiased font-[Play,sans-serif] text-[14px] leading-[1.15] text-[#f1f1f1]"
      style={{
        WebkitTextSizeAdjust: "100%",
        WebkitTapHighlightColor: "transparent",
        touchAction: "manipulation",
      }}
    >
      <div
        className="
          flex flex-col items-start justify-center w-full
          overflow-hidden
          bg-no-repeat bg-cover bg-center
          h-[180px]
          px-6
          gap-4
          text-start
          relative
          rounded-[8px]
        "
        style={{
          backgroundImage:
            'url("https://distribution.faceit-cdn.net/images/aad2a3ac-aab1-42f8-afef-1488f70426d7.webp")',
        }}
      >
        <span className="text-[28px] text-[#32D35A]">SKOL</span>
        <button className="px-[24px] py-[8px] bg-[#32D35A] text-[#060606] rounded-[8px] font-bold">
          Order now -25% off
        </button>
      </div>
    </div>
  );
};

export default Ad;
