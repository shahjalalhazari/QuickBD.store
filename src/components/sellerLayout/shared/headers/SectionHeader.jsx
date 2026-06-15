"use client";
import AddBtn from "@/components/shared/buttons/AddBtn";
import ViewAllBtn from "@/components/shared/buttons/ViewAllBtn";
import Link from "next/link";

const SectionHeader = ({
  heading, 
  btnText="View All", 
  btnClassName="view-all-btn",
  path,
  onClick,
  showBtn=true
}) => {
  return (
    <div className="section-header">
      <h5>{heading}</h5>
      {showBtn && (
        <>
          {/* LINK BUTTON */}
          {path && (
            <Link href={path}>
              <ViewAllBtn
                text={btnText}
                className={btnClassName}
              />
            </Link>
          )}

          {/* ACTION BUTTON */}
          {!path && onClick && (
            <button onClick={onClick}>
              <AddBtn text={btnText} />
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default SectionHeader;