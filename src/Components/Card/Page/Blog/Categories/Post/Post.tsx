import {useState} from 'react';
import ReactMarkdown from "react-markdown";
import {getTruncatedMonthDay} from "../../../../../../static/shared/Helpers/Dates";

import styles from './Post.module.scss';
import {IPosts} from "./Posts/Interface/IPosts";

export function Post(props: { propObj: { post: IPosts } }) {
    const [showPost, setShowPost] = useState(false);
    const {post} = props.propObj;

    return (
        <div className={styles.container}>
            <div className={styles.flexContainer} onClick={() => setShowPost(!showPost)}>
                <p className={styles.monthDay}>
                    {getTruncatedMonthDay(post.date)}
                </p>

                <p className={styles.title}>
                    {post.title}
                </p>

                <p className={`${styles.chevron} ${showPost && styles.rotated}`}>
                    &gt;
                </p>
            </div>
            <ReactMarkdown children={post.markdown} className={showPost ? "expand" : "collapse"}/>
        </div>
    )
}

export default Post;