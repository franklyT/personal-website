export const sanitizeDate = (date: string) => Number(date.replaceAll("/", ''));
export const getTruncatedMonthDay = (date: string, isTruncated: boolean = true) =>
    `${(isTruncated ?
        ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] :
        ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"])
            [Number(date.substring(0, 2)) - 1] || "Jan"
    } 
        ${date.substring(3, 5).padStart(2, '0')}`;

//     const sortedEntries: IEntry[] = Object.values(PageIndex).sort((a, b) => sanitizeDate(a.date) > sanitizeDate(b.date) ? 1 : -1);