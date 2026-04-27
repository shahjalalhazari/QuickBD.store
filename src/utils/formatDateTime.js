export const formatDateTime = (dateString) => {
    if(!dateString) return "--";
    const date = new Date(dateString);

    return new Intl.DateTimeFormat(
    "en-US",
    {
        day:"numeric",
        month:"short",
        year:"numeric",
        hour:"numeric",
        minute:"2-digit"
    }
    ).format(date);
}