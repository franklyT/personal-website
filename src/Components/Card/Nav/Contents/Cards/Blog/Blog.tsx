import styles from './Blog.module.scss';

import Pages from './Pages/Pages';

function Blog(props: any) {
// TODO: Endless scroll blog component, descending
    return (
        <div className={ `${styles.masterDiv} ${props.renderCard && styles.masterDivVisible}` } >
            <Pages />
        </div>
    );
}

export default Blog;
