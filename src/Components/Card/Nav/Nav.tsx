import {useRef, useState} from 'react';

import styles from './Nav.module.scss';
import Portfolio from "./Page/Portfolio/Portfolio";
import Blog from "./Page/Blog/Blog";
import Code from "./Page/Code/Code";
import At from "./Page/At/At";
import Carets from "./Carets/Carets";

function Nav(props: any) {
    const [cardStyle, setCardStyle] = useState(styles.defaultCardStyle);
    const portfolioRef = useRef(null);
    const blogRef = useRef(null);
    const codeRef = useRef(null);
    const atRef = useRef(null);

    const [activeCard, setActiveCard] = useState(portfolioRef);

    return (
        <>
            <div className={styles.iconContainerRow}>
                <button
                    className={ `fa fa-user-circle ${activeCard === portfolioRef ? `${styles.iconStyle} ${styles.iconStyleActive}` : styles.iconStyle}` }
                    ref={portfolioRef}
                    onClick={() => setActiveCard(portfolioRef)}
                />

                <button
                    className={ `fa fa-pencil-square-o ${activeCard === blogRef ? `${styles.iconStyle} ${styles.iconStyleActive}` : styles.iconStyle}` }
                    ref={blogRef}
                    onClick={() => setActiveCard(blogRef)}
                />

                <button
                    className={ `fa fa-github ${activeCard === codeRef ? `${styles.iconStyle} ${styles.iconStyleActive}` : styles.iconStyle}` }
                    ref={codeRef}
                    onClick={() => setActiveCard(codeRef)}
                />

                <button
                    className={ `fa fa-at ${activeCard === atRef ? `${styles.iconStyle} ${styles.iconStyleActive}` : styles.iconStyle}` }
                    ref={atRef}
                    onClick={() => setActiveCard(atRef)}
                />
            </div>

            <Carets parentState={{portfolioRef, blogRef, codeRef, atRef, activeCard}} parentProps={props.propObj.code} />

            <div className={cardStyle} >
                <Portfolio renderCard={activeCard === portfolioRef} renderCode={props.propObj.code} propObj={{setCardStyle}} />
                <Blog renderCard={activeCard === blogRef} propObj={{setCardStyle}} />
                <Code renderCard={activeCard === codeRef} propObj={{setCardStyle}} />
                <At renderCard={activeCard === atRef} propObj={{setCardStyle}} />
            </div>
        </>
    );
}

export default Nav;
