const DataTable = ({ columns=[], data=[]}) => {
  const emptyMessage = "No Data Found";

  return (
    <section className="dashboard-table-layout">
      <div className="overflow-x-auto">
        <table className="dashboard-table">

          {/* TABLE HEAD */}
          <thead>
            <tr>
              {columns.map((column)=>(
                <th
                  key={column.accessor}
                  className={`${column.headerClassName || ""}`}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>


          {/* TABLE BODY */}
          <tbody>
            {data.length > 0 ? (
              data.slice(0,10).map((row,rowIndex)=>(
                <tr key={row.id || rowIndex}>
                  {columns.map((column)=>(
                    <td key={column.accessor}>
                      {
                        column.render
                          ? column.render(
                              row[column.accessor],
                              row
                            )
                          : String(
                              row[column.accessor] ?? ""
                            )
                        }
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="py-10 text-center text-body-color"
                >
                  {emptyMessage}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DataTable;