import {IPosts} from "./Post/Posts/Interface/IPosts";
import Post from "./Post/Post";
import * as PageIndex from "./Post/PostIndex";

export function Categories() {
    let pagesByYear: Record<string, IPosts[]> = {};
    Object.values(PageIndex).forEach((page: IPosts) => {
        const PAGE_YEAR = page.date.substring(6, 8);
        pagesByYear["20" + PAGE_YEAR] = pagesByYear["20" + PAGE_YEAR] || [];
        pagesByYear["20" + PAGE_YEAR].push(page);
    });

    return (
        <>
            {Object.keys(pagesByYear).reverse().map((year, yearIndex: number) => {
                    return (
                        <section key={yearIndex} style={{marginBottom: "1rem"}}>
                            <span> {year} </span>

                            <hr style={{borderTop: '4px solid lime'}}/>

                            {pagesByYear[year].reverse().map((page: IPosts, pageIndex: number) => {
                                return <Post key={pageIndex} propObj={{page}}/>
                            })}
                        </section>
                    )
                }
            )}
        </>
    )
}

export default Categories;