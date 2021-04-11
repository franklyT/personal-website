import {useState} from 'react';
import ReactMarkdown from "react-markdown";
import {getTruncatedMonthDay} from "../../../../../../static/shared/Helpers/Dates";

import styles from './Post.module.scss';

export function Post(props: any) {
    const [showPost, setShowPost] = useState(false);
    const {page} = props.propObj;

    return (
        <div className={styles.container}>
            <div className={styles.flexContainer} onClick={() => setShowPost(!showPost)}>
                <p className={styles.monthDay}>
                    {getTruncatedMonthDay(page.date)}
                </p>

                <p className={styles.title}>
                    {page.title}
                </p>

                <p className={`${styles.chevron} ${showPost ? styles.rotated : ''}`}>
                    &gt;
                </p>
            </div>
            <ReactMarkdown children={page.markdown} className={showPost ? "expand" : "collapse"}/>
        </div>
    )
}

export default Post;