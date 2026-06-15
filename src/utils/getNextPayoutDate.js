export const getNextPayoutDate = (cycleDays = 7) => {
  const today = new Date();
  const next = new Date(today);

  next.setDate(today.getDate() + cycleDays);

  return next.toISOString().split("T")[0];
};