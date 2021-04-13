import {useContext, useEffect} from 'react';
import CardContext from "../../Card.context";

import SyntaxParser from '../../../../static/shared/Components/SyntaxParser/SyntaxParser';
import PortfolioCode from './Portfolio.code';

import styles from './Portfolio.module.scss';
import Utils from "../Utils/Utils";

function Portfolio() {
    const {code, extendedCardStyle, setExtendedCardStyle} = useContext(CardContext);

    useEffect(() => {
        code ? setExtendedCardStyle(styles.codeStyle) : setExtendedCardStyle(styles.cardStyle);
    }, [code, extendedCardStyle, setExtendedCardStyle]);

    const JAVASCRIPT_GOTCHAS = [
        '"b" + "a" + +"a" + "a"; // -> \'baNaNa\'',
        '[] == ![]; // -> true',
        'NaN === NaN; // -> false',
        '![] + []; // -> \'false\'',
        '[] == true // -> false',
        '!!null; // -> false',
        '[1, 2, 3] + [4, 5, 6]; // -> \'1,2,34,5,6\''
    ]

    function getCard() {
        return (
            <>
                <div className={styles.meContainer}>
                    <h1 className={styles.meNameStyle}>
                        Francis Traina <span className={styles.meNameCaret}/>
                    </h1>

                    <h2 className={styles.meTitleStyle}>
                        Web Developer
                    </h2>
                </div>

                <div className={styles.gotchas}>
                    <code>
                        {JAVASCRIPT_GOTCHAS[Math.floor(Math.random() * JAVASCRIPT_GOTCHAS.length)]}
                    </code>
                </div>
            </>
        );
    }

    function getCode() {
        return (
            <>
                <SyntaxParser language={"jsx"} code={PortfolioCode.portfolioJSX}/>
                <SyntaxParser language={"scss"} code={PortfolioCode.portfolioSCSS}/>
            </>
        );
    }

    function getCardOrCode() {
        return code ? getCode() : getCard();
    }

    return (
        <div className={styles.container}>
            <Utils />

            {getCardOrCode()}
        </div>
    )
}

export default Portfolio;
