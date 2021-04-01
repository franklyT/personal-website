import styles from './Portfolio.module.scss';

import getPortfolioText from './Portfolio.code';

import portrait from '../../../../../../static/Images/Portfolio/francis.png';

function Portfolio(props: any) {
    return (
        <div className={`${styles.masterDiv} ${props.renderCard && styles.masterDivVisible}`}>
            { props.renderCode ? <> {getPortfolioText} </> :
                <>
                    <div className={styles.meContainer}>
                        <h1 className={styles.meNameStyle}> Francis Traina <span className={styles.meNameCaret} /> </h1>
                        <h2 className={styles.meTitleStyle}>
                            Web Developer
                        </h2>
                    </div>

                    <div className={styles.oneAndOnlyDiv}>
                        <p> Explanation stuff in the div. </p>
                        <p> Some more lines. </p>
                    </div>

                    <img className={styles.portrait} src={portrait} />
                </>
            }
        </div>
    );
}

export default Portfolio;
