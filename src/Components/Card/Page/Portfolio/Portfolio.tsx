import {useContext, useEffect} from 'react';
import CardContext from "../../Card.context";

import SyntaxParser from '../../../../static/shared/Components/SyntaxParser/SyntaxParser';
import PortfolioCode from './Portfolio.code';

import styles from './Portfolio.module.scss';

function Portfolio() {
    const {code, extendedCardStyle, setExtendedCardStyle} = useContext(CardContext);

    useEffect(() => {
        code ? setExtendedCardStyle(styles.codeStyle) : setExtendedCardStyle(styles.cardStyle);
    }, [code, extendedCardStyle, setExtendedCardStyle]);

    function getCard() {
        return (
            <div className={styles.container}>
                <div className={styles.meContainer}>
                    <h1 className={styles.meNameStyle}>
                        Francis Traina <span className={styles.meNameCaret}/>
                    </h1>

                    <h2 className={styles.meTitleStyle}>
                        Web Developer
                    </h2>
                </div>
            </div>
        );
    }

    function getCode() {
        return (
            <div className={styles.container}>
                <SyntaxParser language={"jsx"} code={PortfolioCode.portfolioJSX}/>
                <SyntaxParser language={"scss"} code={PortfolioCode.portfolioSCSS}/>
            </div>
        );
    }

    function getCardOrCode() {
        return code ? getCode() : getCard();
    }

    return (
        <>
            {getCardOrCode()}
        </>
    )
}

export default Portfolio;
