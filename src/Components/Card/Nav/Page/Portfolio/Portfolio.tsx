import { useEffect } from 'react';
import SyntaxParser from '../SyntaxParser/SyntaxParser';
import code from './Portfolio.code';
import styles from './Portfolio.module.scss';

function Portfolio(props: any) {
    useEffect(() => {
        props.renderCode ? props.cardStyle.setCardStyle(styles.codeStyle) : props.cardStyle.setCardStyle(styles.cardStyle);
    }, [props.renderCard, props.renderCode, props.cardStyle]);

    function getCard() {
        return (
            <div className={styles.container}>
                <div className={styles.meContainer}>
                    <h1 className={styles.meNameStyle}>
                        Francis Traina <span className={styles.meNameCaret} />
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
                <SyntaxParser language={"jsx"} code={code.portfolioJSX} /> <SyntaxParser language={"scss"} code={code.portfolioSCSS} />
            </div>
        );
    }

    function getCardOrCode() {
        return props.renderCode ? getCode() : getCard();
    }

    return (
        <>
            {getCardOrCode()}
        </>
    )
}

export default Portfolio;
