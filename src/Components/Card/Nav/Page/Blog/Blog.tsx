import { useEffect } from 'react';
import styles from './Blog.module.scss';

import Pages from './Pages/Pages';

function Blog(props: any) {
    useEffect( ()=> {
        props.renderCard && props.propObj.setCardStyle(styles.cardStyle);
        props.renderCode && props.propObj.setCardStyle(styles.renderCode);
      }, [props.renderCard, props.renderCode, props.propObj]);
    
    // TODO: Endless scroll blog component, descending
    return (
        <div className={ `${styles.masterDiv} ${props.renderCard && styles.masterDivVisible}` } >
            <Pages />
        </div>
    );
}

export default Blog;
