import {useContext, useEffect} from 'react';
import CardContext from "../../Card.context";

import styles from './Blog.module.scss';
import Categories from "./Categories/Categories";
import Utils from "../Utils/Utils";
import SyntaxParser from "../../../../static/shared/Components/SyntaxParser/SyntaxParser";
import BlogCode from "./Blog.code";

function Blog() {
    const {extendedCardStyle, setExtendedCardStyle, code} = useContext(CardContext);

    useEffect(() => {
        code ? setExtendedCardStyle(styles.codeStyle) : setExtendedCardStyle(styles.cardStyle);
    }, [code, extendedCardStyle, setExtendedCardStyle]);

    function getCode() {
        return (
        <>
            <SyntaxParser language={"jsx"} code={BlogCode.blogJSX}/>
            <SyntaxParser language={"scss"} code={BlogCode.blogSCSS}/>
        </>
        )
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
