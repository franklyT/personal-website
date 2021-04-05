import { useState, useEffect, useContext } from 'react';
import CardContext from "../../Card.context";

import githubSplashIcon from "../../../../static/images/Card/githubSplash.jpg";

import styles from "./Code.module.scss";

function Code() {
    const [hoveredProject, setHoveredProject] = useState('');

    const { cardStyle, setCardStyle, code } = useContext(CardContext);

    useEffect(()=> {
        code ? setCardStyle(styles.codeStyle) : setCardStyle(styles.cardStyle);
    }, [code, cardStyle, setCardStyle]);

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

    return (
        <div className={ styles.container } >
            <div className={ styles.grid }>
                {/* <div className={ styles.title }> Work</div> */}

                <img
                    src={ githubSplashIcon }
                    onMouseEnter={ () => setHoveredProject("githubSplash") }
                    className={
                        hoveredProject === "githubSplash"
                            ? styles.gridImage
                            : `${ styles.gridImage } ${ styles.gridImageInactive }`
                    }
                    alt="Github Links"
                    onClick={ () => window.open("https://github.com/franklyT") }
                />

                <div
                    className={
                        hoveredProject === "githubSplash"
                            ? styles.projectDetailsBox
                            : `${ styles.projectDetailsBox } ${ styles.projectDetailsBoxInactive }`
                    }
                >
                    <div className={ styles.projectDetailsText }>
                        { githubSplash }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Code;
