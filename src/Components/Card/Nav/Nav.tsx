import React, {useRef, useState} from 'react';

import styles from './Nav.module.scss';
import Portfolio from "./Contents/Portfolio/Portfolio";
import Blog from "./Contents/Blog/Blog";
import Code from "./Contents/Code/Code";
import At from "./Contents/At/At";
import Carets from "./Carets/Carets";

function Nav() {
    const portfolioRef = useRef(null);
    const blogRef = useRef(null);
    const codeRef = useRef(null);
    const atRef = useRef(null);

    const [activeCard, setActiveCard] = useState(portfolioRef);

    return (
        <React.Fragment>
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
                    className={ `fa fa-code ${activeCard === codeRef ? `${styles.iconStyle} ${styles.iconStyleActive}` : styles.iconStyle}` }
                    ref={codeRef}
                    onClick={() => setActiveCard(codeRef)}
                />

                <button
                    className={ `fa fa-at ${activeCard === atRef ? `${styles.iconStyle} ${styles.iconStyleActive}` : styles.iconStyle}` }
                    ref={atRef}
                    onClick={() => setActiveCard(atRef)}
                />

                {/* <button
                    className={`fa fa-github ${styles.iconStyle}`}
                    onClick={() => window.open('https://github.com/franklyT')}
                />*/}
            </div>

            <Carets parentState={{portfolioRef, blogRef, codeRef, atRef, activeCard}} />

            <div className={styles.cardStyle} >
                <Portfolio renderCard={activeCard === portfolioRef} />
                <Blog renderCard={activeCard === blogRef} />
                <Code renderCard={activeCard === codeRef} />
                <At renderCard={activeCard === atRef} />
            </div>

        </React.Fragment>
    );
}

export default Nav;
