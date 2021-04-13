import {IPostData} from "./Post/Data/Interface/IPostData";
import Post from "./Post/Post";

import * as PageIndex from './Post/Data/Indexer/index';

export function Categories() {
    let pagesByYear: Record<string, IPostData[]> = {};
    Object.values(PageIndex).forEach((page: IPostData) => {
        const PAGE_YEAR = page.date.substring(6, 8);
        pagesByYear["20" + PAGE_YEAR] = pagesByYear["20" + PAGE_YEAR] || [];
        pagesByYear["20" + PAGE_YEAR].push(page);
    });

    return (
        <>
            {Object.keys(pagesByYear).reverse().map((year, yearIndex: number) => {
                    return (
                        <section key={yearIndex} style={{marginBottom: "1rem", marginTop: "2rem"}}>
                            <span> {year} </span>

                            <hr style={{borderTop: '4px solid lime'}}/>

                            {pagesByYear[year].reverse().map((post: IPostData, pageIndex: number) => {
                                return <Post key={pageIndex} propObj={{post}}/>
                            })}
                        </section>
                    )
                }
            )}
        </>
    )
}

export default Categories;