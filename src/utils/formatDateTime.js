export const formatDateTime = (dateString) => {
    const date = new Date(dateString);

    return date.toLocaleString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
    });
}