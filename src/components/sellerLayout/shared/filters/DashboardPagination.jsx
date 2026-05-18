"use client"
import { useState } from 'react';

const DashboardPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  return (
    <div className="dashboard-pagination">
      <p> Showing 1 - 10 of 50 Items</p>

      {/* PAGE NUMBERS */}
      <ul className="page-numbers">
        {[1,2,3,4,5].map((page) => (
          <li key={page}>
            <button
              onClick={() => setCurrentPage(page)}
              className={`page-number quickbd-transition ${
                  currentPage === page
                    ? "active-page" : ""
                }
              `}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardPagination;