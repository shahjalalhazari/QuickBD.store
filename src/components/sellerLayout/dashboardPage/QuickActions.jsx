"use client"
import Link from "next/link";
import React from "react";
import { FaTag } from "react-icons/fa";
import { FaChartLine, FaGear, FaPlus } from "react-icons/fa6";
import { IoMdCube } from "react-icons/io";
import { RiFileListFill } from "react-icons/ri";

const actionList = [
  {
    id: 1,
    label: "Add Products",
    action: "add-product",
    icon: <FaPlus/>
  },
  {
    id: 2,
    label: "All Orders",
    path: "/seller/orders",
    icon: <RiFileListFill />
  },
  {
    id: 3,
    label: "Create Promotions",
    action: "create-promotion",
    icon: <FaTag />
  },
  {
    id: 4,
    label: "Update Inventory",
    path: "/seller/products",
    icon: <IoMdCube />
  },
  {
    id: 5,
    label: "View Report",
    path: "/seller/analytics",
    icon: <FaChartLine />
  },
  {
    id: 6,
    label: "Store Settings",
    path: "/seller/settings",
    icon: <FaGear />
  }
]


const QuickActions = () => {
  const handleAction = (action)=>{
    switch(action){
      case "add-product":
        console.log("Open add product modal");
        break;
      case "create-promotion":
        console.log("Open promotion modal");
        break;
      default:
        break;
    }
  };


  const ActionCard = ({item})=>{
    const content = (
      <React.Fragment>
        <div className="action-card-icon">
          {item.icon}
        </div>
        <p className="action-card-label">
          {item.label}
        </p>
      </React.Fragment>
    );


    if(item.path){
      return (
        <Link
          href={item.path}
          className="action-card quickbd-transition"
        >
          {content}
        </Link>
      )
    }


    return (
      <button
        type="button"
        onClick={()=> handleAction(item.action)}
        className="action-card quickbd-transition"
      >
        {content}
      </button>
    )
  };


  return (
    <section className="section-container h-fit">
      {/* SECTION HEADER */}
        <div className="section-header">
          <h5 className="">Quick Actions</h5>
        </div>

        {/* BUTTONS */}
        <div className="quick-action-layout">
          {actionList.map(item=>(
            <ActionCard
              key={item.id}
              item={item}
            />
          ))}
        </div>
    </section>
  );
};

export default QuickActions;