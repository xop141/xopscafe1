
import React from "react";
import { Button } from "../ui/button";

const AllOrders = ({ orders, selectedOrderId, onSelectOrder }) => {
  return (
    <div className="flex gap-4 w-full mb-6 flex-col">
      {orders.map((order) => (
        <Button
          key={order.id}
          className={`rounded-[4px] py-[4px] px-[16px] w-min ${
            selectedOrderId === order.id ? "bg-[#FF5500]" : ""
          }`}
          onClick={() => onSelectOrder(order.id)}
        >
          Order {order.id}
          <br />
          <span className="text-xs opacity-70">{order.startTime}</span>
        </Button>
      ))}
    </div>
  );
};

export default AllOrders;
