import React, {useRef, useState} from 'react';

import styles from './Nav.module.scss';
import Portfolio from "./Contents/Portfolio/Portfolio";
import Code from "./Contents/Code/Code";
import At from "./Contents/At/At";
import Carets from "./Carets/Carets";

function Nav() {
    const portfolioRef = useRef(null);
    const codeRef = useRef(null);
    const atRef = useRef(null);

    const [activeCard, setActiveCard] = useState(portfolioRef);

    return (
        <div>
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

            <Carets propObj={{portfolioRef, atRef, codeRef, activeCard}} />

            <div className={styles.cardStyle} >
                <Portfolio renderCard={activeCard === portfolioRef} />
                <Code renderCard={activeCard === codeRef} />
                <At renderCard={activeCard === atRef} />
            </div>

        </div>
    );
}

export default Nav;
