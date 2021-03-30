import React from 'react';
import styles from './Blog.module.scss';

import Pages from './Pages/Pages';

function Blog(props: any) {
// TODO: Endless scroll blog component, descending
    return (
        <div
            className={
                props.renderCard
                    ? `${styles.masterDiv} ${styles.masterDivVisible}`
                    : styles.masterDiv
            }
        >
            <Pages />
        </div>
    );
}

export default Blog;
