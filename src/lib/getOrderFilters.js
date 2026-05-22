export const getOrderFilters = (orders) => {
  const counts = orders.reduce((acc, order) => {
    acc[order.status] = (acc[order.status] || 0) + 1;
    return acc
  }, {});

  return [
    {
      label: "All Orders",
      value: "all",
      count: orders.length,
    },
    {
      label: "Pending",
      value: "pending",
      count: counts.length || 0,
    },
    {
      label: "Accepted",
      value: "Accepted",
      count: counts.Accepted || 0,
    },
    {
      label: "Processing",
      value: "Processing",
      count: counts.Processing || 0,
    },
    {
      label: "Shipped",
      value: "Shipped",
      count: counts.Shipped || 0,
    },
    {
      label: "Delivered",
      value: "Delivered",
      count: counts.Delivered || 0,
    },
    {
      label: "Cancelled",
      value: "Cancelled",
      count: counts.Cancelled || 0,
    },
  ]
}