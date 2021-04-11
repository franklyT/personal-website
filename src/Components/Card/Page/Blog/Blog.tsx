import {useContext, useEffect} from 'react';
import CardContext from "../../Card.context";

import styles from './Blog.module.scss';
import Categories from "./Categories/Categories";

function Blog() {
    const {extendedCardStyle, setExtendedCardStyle, code} = useContext(CardContext);

    useEffect(() => {
        code ? setExtendedCardStyle(styles.codeStyle) : setExtendedCardStyle(styles.cardStyle);
    }, [code, extendedCardStyle, setExtendedCardStyle]);

    return (
        <div className={styles.container}>
            <Categories />
        </div>
    );
}

export default Blog;
