// @ts-nocheck

import HighlightSyntax from "../../Meta/HighlightSyntax/HighlightSyntax";

const getPortfolioText = (<HighlightSyntax code={`
import React, { useState } from 'react';
import styles from './Portfolio.module.scss';

import getPortfolioText from './Portfolio.code';

function Portfolio(props: any) {
    const [hoveredCheck, setHoveredCheck] = useState(false);

    const PortfolioRPGText =
      <div className={styles.portraitStyleBox}>
        Name: Winry <br /> Class: Feline <br /> Faction: Frank <br /> <br />
        STATS <br /> <br /> AGI: 8 <br /> CHR: 10 <br/> INT: 2 <br />
        STR: 2 <br /> <br /> SKILLS <br /> <br /> Catlike Reflexes <br />
        Mascot <br /> Endless Hunger
      </div>;

    return (
        <div className={ \`\${styles.masterDiv} \${props.renderCard && styles.masterDivVisible}\` } >
            { props.renderCode ? <React.Fragment> {getPortfolioText} </React.Fragment> :
                <React.Fragment>
                    <div className={styles.meContainer}>
                        <h1 className={styles.meNameStyle}> Francis Traina <span className={styles.meNameCaret}/></h1>
                        <h2 className={styles.meTitleStyle}>
                            Web Developer
                        </h2>
                    </div>

                    <div
                    onMouseEnter={() => setHoveredCheck(true)}
                    onMouseLeave={() => setHoveredCheck(false)}
                    className={styles.portraitContainer}
                    >
                {PortfolioRPGText}
                    <div
                    className={hoveredCheck ? \`\${styles.portrait} \${styles.portraitHover}\` : styles.portrait}
                    />
                    </div>
                </React.Fragment>
            }
        </div>
    );
}

export default Portfolio;
`} />);

export default getPortfolioText;