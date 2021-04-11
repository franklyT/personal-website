const PortfolioCode = {
portfolioJSX:
/*jsx*/`
// Portfolio.code.tsx

import {useContext, useEffect} from 'react';
import CardContext from "../../Card.context";

import SyntaxParser from '../../../../static/shared/Components/SyntaxParser/SyntaxParser';
import PortfolioCode from './Portfolio.code';

import styles from './Portfolio.module.scss';

function Portfolio() {
    const {code, cardStyle, setCardStyle} = useContext(CardContext);

    useEffect(() => {
        code ? setCardStyle(styles.codeStyle) : setCardStyle(styles.cardStyle);
    }, [code, cardStyle, setCardStyle]);

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

`,

portfolioJEST: 
/*js*/`
`,

portfolioSCSS:
/*css*/`
// Portfolio.module.scss

@import '../../../../../../SCSS/animations';

.masterDiv {
    flex-basis: 100%;
    min-width: 30vw;
    transition: 0s;
    opacity: 0;
    position: absolute;
    pointer-events: none;

    padding-right: 10vw;
    margin-right: -10vw;
}

.masterDivVisible {
    transition: 1s;
    opacity: 1;
    position: relative;
    pointer-events: auto;
}

.portrait {
    position: absolute;
    height: 12em;
    width: auto;

    top: 5.4vh;
    right: -24vw;

    z-index: 100;
}

.oneAndOnlyDiv {
    // I like ths
    transform: scaleY(0.8);

    position: absolute;
    height: 29.6vh;
    width: 21.5vw;
    color: lime;
    padding: 2em 2em 2em 2em;
    border: 6px solid lime;
    border-radius: 1em;

    right: -17vw;
    top: -3vh;
    background: #151515;
    z-index: 101;

    &:before {
        content: "";
        position: absolute;

        right: -2.8em;
        bottom: 50%;

        border-left: 20px solid lime;
        border-right: 20px solid transparent;
        border-top: 20px solid transparent;
        border-bottom: 20px solid transparent;
    }

    &:after {
        content: "";
        position: absolute;

        right: -2.2em;
        bottom: 50%;

        border-left: 20px solid black;
        border-right: 20px solid transparent;
        border-top: 20px solid transparent;
        border-bottom: 20px solid transparent;
    }
}

.meContainer {
    position: absolute;
    margin-top: 12vh;

    font-size: .8vw;

}

.meNameStyle {
    font-weight: 600;
}

.meNameCaret {
    position: absolute;
    display: inline-flex;
    margin-left: 0.4vw;
    margin-top: -0.2vh;
    height: 4vh;
    width: 0.3vw;

    animation: blink 1.3s linear infinite;

    @keyframes blink {
        from, to {
            background-color: transparent;
          }
          50% {
            background-color: lime;
          }
        }
}

.meTitleStyle {
    margin-top: -3vh;
    color: lime;
    font-weight: 300;

    font-size: 1vw;

    padding-top: 2vh;
}
`
}

export default PortfolioCode;