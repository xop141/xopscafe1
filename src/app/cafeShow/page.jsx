
"use client";
import React, { useState } from "react";
import AllOrders from "../../components/cafe/AllOrders";

const initialOrders = [
  {
    id: 1,
    startTime: "2025-08-10 14:00",
    pcs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 2,
    startTime: "2025-08-10 15:30",
    pcs: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  },
  {
    id: 3,
    startTime: "2025-08-10 16:00",
    pcs: [5, 6, 21, 22, 23, 24, 25, 26, 27, 28],
  },
  {
    id: 4,
    startTime: "2025-08-10 17:45",
    pcs: [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
  },
];

const page = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [selectedPCs, setSelectedPCs] = useState([]);

  const pcGroups = [
    { label: "Standard Group 1", start: 1, count: 20, vip: false, cols: 2 },
    { label: "Standard Group 2", start: 21, count: 20, vip: false, cols: 2 },
    { label: "fps zone", start: 41, count: 20, vip: false, cols: 5 },
    { label: "VIP Groups", start: 61, count: 30, vip: true, cols: 5 },
  ];

  const bookedPCs =
    selectedOrderId != null
      ? orders.find((o) => o.id === selectedOrderId)?.pcs || []
      : [];

  const toggleOrderSelection = (orderId) => {
    if (selectedOrderId === orderId) {
      setSelectedOrderId(null);
    } else {
      setSelectedOrderId(orderId);
    }
  };

  const togglePCSelection = (pcNumber) => {
    setSelectedPCs((prev) =>
      prev.includes(pcNumber)
        ? prev.filter((pc) => pc !== pcNumber)
        : [...prev, pcNumber]
    );
  };
  const generateNewOrderId = () =>
    orders.reduce((maxId, o) => (o.id > maxId ? o.id : maxId), 0) + 1;
  const getCurrentTimestamp = () => {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, "0");
    const d = String(now.getDate()).padStart(2, "0");
    const h = String(now.getHours()).padStart(2, "0");
    const min = String(now.getMinutes()).padStart(2, "0");
    return `${y}-${m}-${d} ${h}:${min}`;
  };

  const makeOrder = () => {
    if (selectedPCs.length === 0) {
      alert("Select some PCs first!");
      return;
    }
    const newOrder = {
      id: generateNewOrderId(),
      startTime: getCurrentTimestamp(),
      pcs: [...selectedPCs],
    };
    setOrders((prev) => [...prev, newOrder]);
    setSelectedOrderId(newOrder.id);
    setSelectedPCs([]);
  };

  return (
    <div className="space-y-8 px-4 py-6 text-[#A7A7A7] overflow-x-hidden">
      <AllOrders
        orders={orders}
        selectedOrderId={selectedOrderId}
        onSelectOrder={toggleOrderSelection}
      />

      {pcGroups.map(({ label, start, count, vip, cols }) => {
        const pcs = Array.from({ length: count }, (_, i) => start + i);
        const gridColsClass = cols === 2 ? "grid-cols-2" : "grid-cols-5";

        return (
          <div key={label}>
            <h2
              className={`${
                vip ? "text-yellow-400" : "text-white"
              } mb-4 font-semibold`}
            >
              {label}
            </h2>

            {vip ? (
              <div className="space-y-6">
                {Array.from({ length: count / 5 }, (_, groupIndex) => (
                  <div
                    key={groupIndex}
                    className="grid grid-cols-5 gap-2 overflow-x-auto"
                  >
                    {pcs
                      .slice(groupIndex * 5, groupIndex * 5 + 5)
                      .map((pcNumber) => {
                        const isBooked = bookedPCs.includes(pcNumber);
                        const isSelected = selectedPCs.includes(pcNumber);
                        return (
                          <div
                            key={pcNumber}
                            onClick={() => togglePCSelection(pcNumber)}
                            className={`cursor-pointer w-[80px] text-center p-2 rounded flex-shrink-0 border select-none ${
                              isSelected
                                ? "bg-orange-600 border-orange-400 text-orange-100"
                                : isBooked
                                ? "bg-green-700 border-green-500 text-green-300"
                                : vip
                                ? "border-yellow-500 bg-yellow-900 text-yellow-300"
                                : "border-gray-600"
                            }`}
                          >
                            PC-{pcNumber}
                          </div>
                        );
                      })}
                  </div>
                ))}
              </div>
            ) : (
              <div className={`grid ${gridColsClass} gap-2 overflow-x-auto`}>
                {pcs.map((pcNumber) => {
                  const isBooked = bookedPCs.includes(pcNumber);
                  const isSelected = selectedPCs.includes(pcNumber);
                  return (
                    <div
                      key={pcNumber}
                      onClick={() => togglePCSelection(pcNumber)}
                      className={`cursor-pointer w-[80px] text-center h-fit p-2 rounded flex-shrink-0 border select-none ${
                        isSelected
                          ? "bg-orange-600 border-orange-400 text-orange-100"
                          : isBooked
                          ? "bg-green-700 border-green-500 text-green-300"
                          : "border-gray-600"
                      }`}
                    >
                      PC-{pcNumber}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}

      {selectedPCs.length > 0 && (
        <div className="mt-8 flex items-center gap-4">
          <div>
            <h3 className="text-white font-semibold mb-2">Selected PCs:</h3>
            <div className="flex flex-wrap gap-2">
              {selectedPCs.map((pc) => (
                <div
                  key={pc}
                  className="bg-orange-600 text-orange-100 rounded px-3 py-1 select-none"
                >
                  PC-{pc}
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={makeOrder}
            className="bg-[#FF5500] rounded px-6 py-2 text-white font-semibold hover:bg-[#e64e00] transition"
          >
            Make Order
          </button>
        </div>
      )}
    </div>
  );
};

export default page;
