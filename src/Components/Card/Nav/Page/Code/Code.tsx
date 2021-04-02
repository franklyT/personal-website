import {useState, useEffect} from 'react';
import styles from "./Code.module.scss";
import TheresMore from "../../../../../static/Images/Card/githubSplash.jpg";

function Code(props: any) {
    const [hoveredProject, setHoveredProject] = useState('');

    useEffect( ()=> {
        props.renderCard && props.propObj.setCardStyle(styles.cardStyle);
        props.renderCode && props.propObj.setCardStyle(styles.renderCode);
      }, [props.renderCard, props.renderCode, props.propObj]);

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
        <div className={ `${styles.masterDiv} ${props.renderCard && styles.masterDivVisible}` } >
            <div className={styles.grid}>
                {/* <div className={styles.title}> Work</div> */}

                <img
                    src={TheresMore}
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
        </div>
    );
}

export default Code;
