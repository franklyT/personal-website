const BlogCode = {
    blogJSX:
    /*jsx*/`
// Blog.tsx

import {useContext, useEffect} from 'react';
import CardContext from "../../Card.context";

import styles from './Blog.module.scss';
import Categories from "./Categories/Categories";
import Utils from "../Utils/Utils";

function Blog() {
    const {extendedCardStyle, setExtendedCardStyle, code, setCode} = useContext(CardContext);

    useEffect(() => {
        code ? setExtendedCardStyle(styles.codeStyle) : setExtendedCardStyle(styles.cardStyle);
    }, [code, extendedCardStyle, setExtendedCardStyle]);

    function getCode() {

    }

    function getCard() {
        return (
            <Categories />
        )
    }

    return (
        <div className={styles.container}>
            <Utils />
            {code ? getCode() : getCard()}
        </div>
    );
}

export default Blog;

// Categories/Categories.tsx

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
                        <section key={yearIndex} style={{marginBottom: "1rem"}}>
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

// Categories/Post/Post.tsx

import {useState} from 'react';
import ReactMarkdown from "react-markdown";
import {getTruncatedMonthDay} from "../../../../../../static/shared/Helpers/Dates";

import styles from './Post.module.scss';
import {IPostData} from "./Data/Interface/IPostData";

export function Post(props: { propObj: { post: IPostData } }) {
    const [showPost, setShowPost] = useState(false);
    const {post} = props.propObj;

    return (
        <div className={styles.container}>
            <div className={styles.flexContainer} onClick={() => setShowPost(!showPost)}>
                <span className={styles.monthDay}>
                    {getTruncatedMonthDay(post.date)}
                </span>

                <span className={styles.title}>
                    {post.title}
                </span>

                <span className={\`\${styles.chevron} \${showPost && styles.rotated}\`}>
                    &gt;
                </span>
            </div>

                <ReactMarkdown children={post.markdown} className={\`\${styles.markdown} \${showPost ? "expand" : "collapse"}\`}/>
        </div>
    )
}

export default Post;

`,
    blogSCSS:
    /*css*/`
// Blog.module.scss
    .cardStyle {
  width: 40vw;
}

.codeStyle {
  background-color: rgb(47, 47, 47);
  width: 50vw;
}

.container {
  width: 100%;
  height: 100%;
}

// Post/Post.module.scss
.container {
  overflow: hidden;
}

.flexContainer {
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: row;
}

.monthDay {
  color: gray;
  font-size: 0.75rem;
  margin-right: 2rem;
  white-space: nowrap;
}

.title {
  max-width: 70%;
}

.chevron {
  font-size: 1.5rem;
  justify-self: end;
  margin-left: auto;
  transition: transform 0.3s;
  user-select: none;
}

.rotated {
  transform: rotate(90deg);
}

.markdown {
  background-color: rgb(30, 30, 30);
  line-height: 1.75rem;
  padding-bottom: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1rem;
  font-family: Verdana;
  font-size: 1.2rem;
  color: lime;

  h1 {
    font-family: "Press Start 2P", cursive;
    line-height: 4rem;
    font-size: 1rem;
  }
}
`
}

export default BlogCode;