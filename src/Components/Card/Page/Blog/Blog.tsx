import {useContext, useEffect} from 'react';
import CardContext from "../../Card.context";

import Pages from './Pages/Pages';
import {sanitizeDate, getLongMonthDay} from "../../../../static/shared/Helpers/Dates";

import * as PageIndex from "./Pages/Pages.index";

import styles from './Blog.module.scss';
import {Entry} from "./Pages/Entries/Interface/Entry";

function Blog() {
    const {cardStyle, setCardStyle, code} = useContext(CardContext);

    useEffect(() => {
        code ? setCardStyle(styles.codeStyle) : setCardStyle(styles.cardStyle);
    }, [code, cardStyle, setCardStyle]);

    function pagesByYear() {
        let pagesByYear: Record<string, Entry[]> = {};

        Object.values(PageIndex).forEach((page: Entry) => {
            const PAGE_YEAR = page.date.substring(6, 8);

            pagesByYear["20" + PAGE_YEAR] = pagesByYear["20" + PAGE_YEAR] || [];

            pagesByYear["20" + PAGE_YEAR].push(page);
        });

        // extract to component
        return (
            <>
                {Object.keys(pagesByYear).map((key, index) => {
                        return <div key={index}>
                            {key}
                            <hr/>
                            {pagesByYear[key].map((page: Entry) => {
                                return <>
                                    {getLongMonthDay(page.date)} {page.title}
                                    <br/>
                                    <br/>
                                </>
                            })}
                        </div>
                    }
                )}
            </>
        )
    }

    return (
        <div className={styles.container}>
            {pagesByYear()}
        </div>
    );
}

export default Blog;
