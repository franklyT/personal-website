import { useState } from 'react';
import RenderedCard from '../../../static/shared/RenderedCard';

import styles from './Nav.module.scss';

import Carets from "./Carets/Carets";
import Page from "./Page/Page";

function Nav(props: any) {

    const [cardStyle, setCardStyle] = useState(styles.defaultCardStyle);
    const [activeCard, setActiveCard] = useState(RenderedCard.portfolio);

    return (
        <>
            <div className={styles.iconContainerRow}>
                {
                    [
                        { icon: "fa-user-circle", card: RenderedCard.portfolio },
                        { icon: "fa-pencil-square-o", card: RenderedCard.blog },
                        { icon: "fa-github", card: RenderedCard.code },
                        { icon: "fa-at", card: RenderedCard.at }
                    ].map((button: any, key: number) => {
                        return <button
                                key={key}
                                className={`fa ${button.icon} ${styles.iconStyle} ${activeCard === button.card && styles.iconStyleActive}`}
                                onClick={() => setActiveCard(button.card)} 
                                />
                    })
                }
            </div>

            <Carets parentState={{ activeCard }} parentProps={props.propObj.code} />

            <div className={cardStyle}>
                <Page activeCard={activeCard} renderCode={props.propObj.code} cardStyle={{ setCardStyle }} />
            </div>
        </>
    );
}

export default Nav;
