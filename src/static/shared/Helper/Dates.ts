export const sanitizeDate = (date: string) => Number(date.replaceAll("/", ''));
export const getLongMonthDay = (date: string) => `${ ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][Number(date.substring(0, 2)) - 1] || "January" } ${ Number(date.substring(3, 5)) || "1" }`;
