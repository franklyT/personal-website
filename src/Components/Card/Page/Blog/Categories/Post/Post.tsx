import {useState} from 'react';
import ReactMarkdown from "react-markdown";
import {getTruncatedMonthDay} from "../../../../../../static/shared/Helpers/Dates";

export function Post(props: any) {
    const [isPostRendered, setIsPostRendered] = useState(false);
    const {page} = props.propObj;

    return (
        <div style={{overflowY: "hidden"}}
             onClick={() => isPostRendered ? setIsPostRendered(false) : setIsPostRendered(true)}>
            <div style={{display: 'flex', flexDirection: "row", alignItems: "center"}}>
                <p style={{fontSize: '0.75rem', color: "gray", marginRight: "2rem", whiteSpace: "nowrap"}}>
                    {getTruncatedMonthDay(page.date)}
                </p>

                <p>
                    {page.title}
                </p>
            </div>
            <ReactMarkdown children={page.markdown} className={isPostRendered ? "expand" : "collapse"}/>
        </div>
    )
}

export default Post;