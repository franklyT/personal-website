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
                    className={
                        activeCard === portfolioRef
                            ? `fa fa-user-circle ${styles.iconStyle} ${styles.iconStyleActive}`
                            : `fa fa-user-circle ${styles.iconStyle}`
                    }
                    ref={portfolioRef}
                    onClick={() => setActiveCard(portfolioRef)}
                />

                <button
                    className={
                        activeCard === blogRef
                            ? `fa fa-pencil-square-o ${styles.iconStyle} ${styles.iconStyleActive}`
                            : `fa fa-pencil-square-o ${styles.iconStyle}`
                    }
                    ref={blogRef}
                    onClick={() => setActiveCard(blogRef)}
                />

                <button
                    className={
                        activeCard === codeRef
                            ? `fa fa-code ${styles.iconStyle} ${styles.iconStyleActive}`
                            : `fa fa-code ${styles.iconStyle}`
                    }
                    ref={codeRef}
                    onClick={() => setActiveCard(codeRef)}
                />

                <button
                    className={
                        activeCard === atRef
                            ? `fa fa-at ${styles.iconStyle} ${styles.iconStyleActive}`
                            : `fa fa-at ${styles.iconStyle}`
                    }
                    ref={atRef}
                    onClick={() => setActiveCard(atRef)}
                />

                <button
                    className={`fa fa-github ${styles.iconStyle}`}
                    onClick={() => window.open('https://github.com/franklyT')}
                />
            </div>

            <Carets propObj={{portfolioRef, blogRef, codeRef, atRef, activeCard}} />

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
