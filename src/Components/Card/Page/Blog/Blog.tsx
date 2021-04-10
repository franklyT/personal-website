import { useContext, useEffect } from 'react';
import CardContext from "../../Card.context";

import Pages from './Pages/Pages';

import styles from './Blog.module.scss';

function Blog() {
    const { cardStyle, setCardStyle, code } = useContext(CardContext);

    useEffect( ()=> {
        code ? setCardStyle(styles.codeStyle) : setCardStyle(styles.cardStyle);
    }, [code, cardStyle, setCardStyle]);

    // TODO: Endless scroll blog component, descending
    return (
        <div className={ styles.container } >
            <Pages />
        </div>
    );
}

export default Blog;
