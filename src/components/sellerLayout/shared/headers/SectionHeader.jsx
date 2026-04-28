import ViewAllBtn from "@/components/shared/buttons/ViewAllBtn";
import Link from "next/link";

const SectionHeader = ({heading, path, btnText="View All", btnClassName="view-all-btn"}) => {
  return (
    <div className="section-header">
      <h5>{heading}</h5>
      <Link href={path}>
        <ViewAllBtn text={btnText} className={btnClassName} />
      </Link>
    </div>
  );
};

export default SectionHeader;