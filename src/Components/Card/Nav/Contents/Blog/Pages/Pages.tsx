import React from 'react';

import * as PageIndex from "./Pages.index";
import {Entry} from "./Entries/Interface/Entry";

function Pages() {
    const sanitizeDate = (date: string) => Number(date.replaceAll("/", ''));
    const getLongMonthDay = (date: string) => `${["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][Number(date.substring(0, 2)) - 1]} ${Number(date.substring(3, 5))}`;

    const collatePages: Entry[] = Object.values(PageIndex).sort((a, b) => sanitizeDate(a.date) > sanitizeDate(b.date) ? 1 : -1);

    return (<React.Fragment>
        {collatePages.map((page, index) => {
            return <div key={index}>
                <h1>
                    {page.title}
                </h1>

                <h2>
                    {getLongMonthDay(page.date)}
                    <span> {page.time} </span>
                </h2>

                {page.content}

                <br/>
                <br/>
            </div>
        })}
    </React.Fragment>)
}

export default Pages;