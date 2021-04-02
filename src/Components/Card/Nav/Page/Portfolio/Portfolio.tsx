import { useEffect } from 'react';
import SyntaxParser from '../SyntaxParser/SyntaxParser';
import code from './Portfolio.code';
import styles from './Portfolio.module.scss';

function Portfolio(props: any) {
    useEffect(() => {
        if (!props.renderCard) return;

        props.renderCode ? props.propObj.setCardStyle(styles.codeStyle) : props.propObj.setCardStyle(styles.cardStyle);
    }, [props.renderCard, props.renderCode, props.propObj]);

    function getCard() {
        return (
            <div className={styles.masterDiv}>
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
            <div className={styles.masterDiv}>
                <SyntaxParser language={"jsx"} code={code.portfolioJSX} /> <SyntaxParser language={"scss"} code={code.portfolioSCSS} />
            </div>
        );
    }

    function renderComponent() {
        if (!props.renderCard) return;

        return props.renderCode ? getCode() : getCard();
    }

    return (
        <>
            {renderComponent()}
        </>
    )
}

export default Portfolio;
