import ReactMarkdown from 'react-markdown';
import { Entry } from './Entries/Interface/Entry';
import * as PageIndex from "./Pages.index";

function Pages() {
    const sanitizeDate = (date: string) => Number(date.replaceAll("/", ''));
    const getLongMonthDay = (date: string) => `${ ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][Number(date.substring(0, 2)) - 1]} ${Number(date.substring(3, 5)) }`;

    const sortedEntries: Entry[] = Object.values(PageIndex).sort((a, b) => sanitizeDate(a.date) > sanitizeDate(b.date) ? 1 : -1);

    return (
        <>
            { Object.values(sortedEntries).map( (entry: Entry, index: number) => {
                {console.log(entry.markdown)}
                return (
                    <div key={index}>
                        <h1> { entry.title } </h1>
                        <h3> { getLongMonthDay(entry.date) } <span> { entry.time } </span> </h3>

                        <ReactMarkdown children={entry.markdown}/>
                    </div>
                )
            })
            }
        </>
    )
}

export default Pages;