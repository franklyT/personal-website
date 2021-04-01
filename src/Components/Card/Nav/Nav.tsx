import {useRef, useState} from 'react';

import styles from './Nav.module.scss';
import Portfolio from "./Contents/Cards/Portfolio/Portfolio";
import Blog from "./Contents/Cards/Blog/Blog";
import Code from "./Contents/Cards/Code/Code";
import At from "./Contents/Cards/At/At";
import Carets from "./Carets/Carets";

function Nav(props: any) {
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

            <Carets parentState={{portfolioRef, blogRef, codeRef, atRef, activeCard}} />

            <div className={styles.cardStyle} >
                <Portfolio renderCard={activeCard === portfolioRef} renderCode={props.propObj.code} />
                <Blog renderCard={activeCard === blogRef} />
                <Code renderCard={activeCard === codeRef} />
                <At renderCard={activeCard === atRef} />
            </div>
        </>
    );
}

export default Nav;
