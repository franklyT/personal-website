import {useState, useEffect, useContext} from 'react';
import CardContext from "../../Card.context";

import githubSplashIcon from "../../../../static/Images/Card/githubSplash.jpg";

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
            &nbsp;\ Languages: CSS, HTML, JavaScript, Python, Ruby, TypeScript <br/>
            &nbsp;\ Frameworks: e.g. jQuery, React, Ruby on Rails, Svelte, Vue <br/>
            &nbsp;\ Platforms/APIs: e.g. Firebase, Heroku, Docker, Google Platforms, Netlify <br/>
            &nbsp;\ Build: e.g. Babel, Gulp, Webpack <br/>
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
                            : `${styles.gridImage} ${styles.gridImageInactive}`
                    }
                    alt="Github Links"
                    onClick={() => window.open("https://github.com/franklyT")}
                />

                <div
                    className={
                        hoveredProject === "githubSplash"
                            ? styles.projectDetailsBox
                            : `${styles.projectDetailsBox} ${styles.projectDetailsBoxInactive}`
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
