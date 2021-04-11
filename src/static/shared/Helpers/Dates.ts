export const sanitizeDate = (date: string) => Number(date.replaceAll("/", ''));
export const getTruncatedMonthDay = (date: string) => `${["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][Number(date.substring(0, 2)) - 1] || "Jan"} ${Number(date.substring(3, 5)) || "1"}`;
