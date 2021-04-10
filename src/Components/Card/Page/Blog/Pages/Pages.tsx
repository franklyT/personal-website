import ReactMarkdown from 'react-markdown';
import { MarkdownData } from './Entries/Enum/MarkdownData';
import * as PageIndex from "./Pages.index";

function Pages() {
    const sanitizeDate = (date: string) => Number(date.replaceAll("/", ''));
    const getLongMonthDay = (date: string) => `${ ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][Number(date.substring(0, 2)) - 1]} ${Number(date.substring(3, 5)) }`;

    // const sortedEntries: any = Object.values(PageIndex).sort((a, b) => sanitizeDate(a.date) > sanitizeDate(b.date) ? 1 : -1);

    const extractMarkdownData = (markdown: string, dataStr: string) => {
        const markdownRegex = new RegExp(`\\[${dataStr}\\]: <> \\((.*)\\)`);

        return markdown.match(markdownRegex)![1];
    }

    return (
        <>
            { Object.values(PageIndex).map( (page: string, index: number) => {
                return (
                    <div key={index}>
                        <h1> { extractMarkdownData(page, MarkdownData.title) } </h1>
                        <h3> { extractMarkdownData(page, MarkdownData.date) } <span> { extractMarkdownData(page, MarkdownData.time) } </span> </h3>
                        <ReactMarkdown>
                            {page}
                        </ReactMarkdown>
                    </div>
                )
            })
            }
        </>
    )
}

export default Pages;