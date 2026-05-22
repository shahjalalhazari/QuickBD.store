export const getOrderNextStep = (status) => {
  switch (status) {
    case "Pending":
      return ["Accept", "Cancel"];

    case "Accepted":
      return ["Process Order"];

    case "Processing":
      return ["Shipped"];

    default:
      return [];
  }
};