import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa6';

const Breadcrumbs = ({ items }) => {
  return (
    <ul className="breadcrumbs-list">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <li key={index} className="breadcrumbs-item">
            {index !== 0 && <FaAngleRight className="text-xs" />}
            {isLast ? (
              <span className="fontmedium">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="breadcrumbs-link quickbd-transition"
              >
                {item.label}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Breadcrumbs;