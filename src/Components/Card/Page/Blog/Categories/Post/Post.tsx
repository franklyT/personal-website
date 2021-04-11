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

                <span className={`${styles.chevron} ${showPost && styles.rotated}`}>
                    &gt;
                </span>
            </div>
            <ReactMarkdown children={post.markdown} className={showPost ? "expand" : "collapse"}/>
        </div>
    )
}

export default Post;