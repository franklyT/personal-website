import styles from './Footer.module.scss';

import ReactIcon from '../../static/images/Footer/react.svg';
import SASSIcon from '../../static/images/Footer/sass.svg';
import TypeScriptIcon from '../../static/images/Footer/typescript.svg';

function Footer() {
    return (
        <footer className={styles.container}>
            <p className={styles.me}> © Francis Traina </p>

            <div className={styles.break}>
                <img
                    src={ReactIcon}
                    className={styles.icon}
                    onClick={() => window.open('https://reactjs.org/')}
                    alt="React Icon"
                />

                <img
                    src={SASSIcon}
                    className={styles.icon}
                    onClick={() => window.open('https://sass-lang.com/')}
                    alt="Sass Icon"
                />

                <img
                    src={TypeScriptIcon}
                    className={styles.icon}
                    onClick={() => window.open('https://www.typescriptlang.org/')}
                    alt="TypeScript Icon"
                />
            </div>
        </footer>
    );
}

export default Footer;
