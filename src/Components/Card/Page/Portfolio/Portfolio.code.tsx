const PortfolioCode = {
portfolioJSX:
/*jsx*/`
// Portfolio.tsx

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
        '"b" + "a" + +"a" + "a"; // -> \\'baNaNa\\'',
        '[] == ![]; // -> true',
        'NaN === NaN; // -> false',
        '![] + []; // -> \\'false\\'',
        '[] == true // -> false',
        '!!null; // -> false',
        '[1, 2, 3] + [4, 5, 6]; // -> \\'1,2,34,5,6\\''
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
`,

portfolioSCSS:
/*css*/`
// Portfolio.module.scss

.container {
  flex-basis: 100%;
  margin-right: -10vw;
  padding-right: 10vw;
  position: relative;
  transition: 1s;
}

.codeStyle {
  background-color: rgb(47, 47, 47);
  width: 50vw;
}

.cardStyle {
  animation: test 0.3s, fadeIn 1s;
  width: 30vw;

  @keyframes test {
    0% {
      max-height: 0 !important;
      min-height: 10vh;
    }

    100% {
      max-height: 100vh;
      min-height: 30vh;
    }
  }
}

.meContainer {
  font-size: .8vw;
  margin-bottom: 2em;
  margin-top: 10vh;
  margin-left: auto;
  margin-right: auto;
  height: fit-content;
  width: fit-content;
}

.meNameStyle {
  font-weight: 600;
}

.meNameCaret {
  animation: blink 1.3s linear infinite;
  height: 4vh;
  margin-left: 0.4vw;
  margin-top: -0.2vh;
  position: absolute;
  width: 0.3vw;

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
  color: lime;
  font-size: 1vw;
  font-weight: 300;
  margin-top: -3vh;
  padding-top: 2vh;
}

.gotchas {
  margin-left: auto;
  margin-right: auto;
  width: 57%;
  height: fit-content;
  font-size: 1.5rem;
}`
}

export default PortfolioCode;