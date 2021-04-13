const CodeCode = {
    codeJSX: `
// Code.tsx

import {useState, useEffect, useContext} from 'react';
import CardContext from "../../Card.context";

import githubSplashIcon from "../../../../static/images/Card/githubSplash.jpg";

import styles from "./Code.module.scss";
import Utils from "../Utils/Utils";
import SyntaxParser from "../../../../static/shared/Components/SyntaxParser/SyntaxParser";
import CodeCode from "./Code.code";

function Code() {
    const [hoveredProject, setHoveredProject] = useState('');

    const {extendedCardStyle, setExtendedCardStyle, code} = useContext(CardContext);

    useEffect(() => {
        code ? setExtendedCardStyle(styles.codeStyle) : setExtendedCardStyle(styles.cardStyle);
    }, [code, extendedCardStyle, setExtendedCardStyle]);

    const githubSplash = (
        <>
            <br/>
            -&gt; <a href="https://github.com" className={styles.linkGithub}> https://github.com </a> <br/>
            <br/>
            Technologies:

            <br/>
            &nbsp;\\ Languages: CSS, HTML, JavaScript, Python, Ruby, TypeScript <br/>
            &nbsp;\\ Frameworks: e.g. jQuery, React, Ruby on Rails, Svelte, Vue <br/>
            &nbsp;\\ Platforms/APIs: e.g. Firebase, Heroku, Docker, Google Platforms, Netlify <br/>
            &nbsp;\\ Build: e.g. Babel, Gulp, Webpack <br/>
        </>
    );

    function getCode() {
        return (
            <>
                <SyntaxParser language={"jsx"} code={CodeCode.codeJSX}/>
                <SyntaxParser language={"scss"} code={CodeCode.codeSCSS}/>
            </>
        )
    }

    function getCard() {
        return(
            <div className={styles.grid}>
                <img
                    src={githubSplashIcon}
                    onMouseEnter={() => setHoveredProject("githubSplash")}
                    className={
                        hoveredProject === "githubSplash"
                            ? styles.gridImage
                            : \`\${styles.gridImage} \${styles.gridImageInactive}\`
                    }
                    alt="Github Links"
                    onClick={() => window.open("https://github.com/franklyT")}
                />

                <div
                    className={
                        hoveredProject === "githubSplash"
                            ? styles.projectDetailsBox
                            : \`$\{styles.projectDetailsBox} \${styles.projectDetailsBoxInactive}\`
                    }
                >
                    <div className={styles.projectDetailsText}>
                        {githubSplash}
                    </div>
                </div>
            </div>

        )
    }

    return (
        <div className={styles.container}>
            <Utils />
            {code ? getCode() : getCard()}
        </div>
    );
}

export default Code;

    `,

    codeSCSS: `
// Code.module.scss
.cardStyle {
  bottom: 10vh;
  width: 100%;
  height: 100%;
}

.codeStyle {
  background-color: rgb(47, 47, 47);
  width: 50vw;
}

.container {
  flex-basis: 100%;
  position: relative;
  transition: 1s;
  width: 100%;

}

.grid {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.gridImage {
  cursor: pointer;
  display: flex;
  height: 45vh;
  margin-left: -1.2vw;
  transition: 1s;
  width: 52.2vw;
}

.gridImageInactive {
  filter: grayscale(50);
  transition: 1s;
}

.title {
  font-size: 3vw;
  padding-bottom: 2vh;
  padding-top: 0.4vh;
  text-align: center;
}

.projectDetailsBox {
  background-color: rgb(21, 21, 21);
  color: lime;
  height: 31vh;
  line-height: 2vh;
  margin-top: -.01vh; // Fixes flickering issue in Chrome
  overflow: hidden;
  transition: 1s;
  width: 44vw;
  margin-bottom: -2rem;
  margin-left: -2rem;
  margin-right: -2rem;
}

.projectDetailsBoxInactive {
  height: 0;
  transition: 1s;
}

.projectDetailsText {
  font-size: .7vw;
  padding: 1vh 1vw 1vh 1vw;
}

.linkGithub {
  color: rgb(60, 170, 255);
}
    `
}

export default CodeCode;