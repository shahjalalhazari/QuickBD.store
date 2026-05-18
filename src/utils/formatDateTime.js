export const formatDateTime = (dateString) => {
  if (!dateString) return "--";

  const date = new Date(dateString);

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);

  const formattedTime = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
  }).format(date);

  return `${formattedDate}\n${formattedTime}`;
};