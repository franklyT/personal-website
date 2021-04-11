import ReactMarkdown from 'react-markdown';
import {Entry} from './Entries/Interface/Entry';
import * as PageIndex from "./Pages.index";
import {sanitizeDate, getTruncatedMonthDay} from "../../../../../static/shared/Helpers/Dates";

function Pages() {
    const sortedEntries: Entry[] = Object.values(PageIndex).sort((a, b) => sanitizeDate(a.date) > sanitizeDate(b.date) ? 1 : -1);

    return (
        <>
            {Object.values(sortedEntries).map((entry: Entry, index: number) => {
                return (
                    <div key={index}>
                        <h1> {entry.title} </h1>
                        <h3> {getTruncatedMonthDay(entry.date)} <span> {entry.time} </span></h3>

                        <ReactMarkdown children={entry.markdown}/>
                    </div>
                )
            })
            }
        </>
    )
}

export default Pages;