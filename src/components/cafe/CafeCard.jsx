"use client"
import React from "react";
import { Progress } from "../ui/progress";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { Cpu, MemoryStick, Gpu, Monitor, Mouse, Headset } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const CafeCard = () => {
  const router = useRouter();

  const LayOut = () => {
    router.push("/cafeShow");
  };

  return (
    <div className="w-full">
      <Dialog>
        <DialogTrigger
          className="rounded-[16px] border border-[#242424] bg-[#0A0A0A] p-4 w-full
                     hover:bg-[#121212] transition-colors shadow-sm"
        >
          <h1 className="text-[14px] text-white mb-2">Skol</h1>
          <Progress value={53} />
        </DialogTrigger>

        <DialogContent className="bg-[#060606] border-0 rounded-lg p-6">
          <DialogTitle className="text-white mb-4">Specs</DialogTitle>
          <DialogDescription className="flex flex-col gap-4 text-gray-300">
            <div className="flex justify-between">
              <Cpu /> <p>i7-13700k</p>
            </div>
            <div className="flex justify-between">
              <MemoryStick /> <p>ddr5 2x16gb 6000mhz</p>
            </div>
            <div className="flex justify-between">
              <Gpu /> <p>rtx 5070ti</p>
            </div>
            <div className="flex justify-between">
              <Monitor /> <p>BENQ zowie 600hz</p>
            </div>
            <div className="flex justify-between">
              <Mouse /> <p>zowie ec3a</p>
            </div>
            <div className="flex justify-between">
              <Headset /> <p>hyperx cloud ii</p>
            </div>
          </DialogDescription>
          <DialogFooter>
            <Button onClick={LayOut}>Order</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CafeCard;
