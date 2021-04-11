import {useContext, useEffect} from 'react';
import CardContext from "../../Card.context";

import Pages from './Pages/Pages';
import {sanitizeDate, getTruncatedMonthDay} from "../../../../static/shared/Helpers/Dates";

import * as PageIndex from "./Pages/Pages.index";

import styles from './Blog.module.scss';
import {Entry} from "./Pages/Entries/Interface/Entry";

function Blog() {
    const {extendedCardStyle, setExtendedCardStyle, code} = useContext(CardContext);

    useEffect(() => {
        code ? setExtendedCardStyle(styles.codeStyle) : setExtendedCardStyle(styles.cardStyle);
    }, [code, extendedCardStyle, setExtendedCardStyle]);

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
                {Object.keys(pagesByYear).map((key, yearIndex: number) => {
                        return <section key={yearIndex} style={{marginBottom: "1rem"}}>
                            <span>
                                {key}
                            </span>

                            <hr style={{borderTop: '4px solid lime'}}/>
                            {pagesByYear[key].map((page: Entry, pageIndex: number) => {
                                return <div style={{display: 'flex', flexDirection: "row", alignItems: "center"}} key={pageIndex}>
                                    <p style={{fontSize: '0.75rem', color: "gray", marginRight: "2rem", whiteSpace: "nowrap"}}>
                                        {getTruncatedMonthDay(page.date)}
                                    </p>

                                    <p>
                                        {page.title}
                                    </p>
                                </div>
                            })}
                        </section>
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
