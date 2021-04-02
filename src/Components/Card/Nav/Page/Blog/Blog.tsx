import { useEffect } from 'react';
import styles from './Blog.module.scss';

import Pages from './Pages/Pages';

function Blog(props: any) {
    useEffect(() => {
        props.renderCode ? props.cardStyle.setCardStyle(styles.codeStyle) : props.cardStyle.setCardStyle(styles.cardStyle);
    }, [props.renderCode, props.cardStyle]);

    
    // TODO: Endless scroll blog component, descending
    return (
        <div className={styles.container} >
            <Pages />
        </div>
    );
}

export default Blog;
