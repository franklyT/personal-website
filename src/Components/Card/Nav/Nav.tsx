import React, {useContext} from 'react';
import RenderedCard from '../../../static/shared/Enums/RenderedCard';

import styles from './Nav.module.scss';

import CardContext from "../Card.context";

function Nav() {
    const {activeCard, setActiveCard} = useContext(CardContext);

    return (
        <>
            <div className={styles.iconContainerRow}>
                {
                    [
                        {icon: "fa-user-circle", card: RenderedCard.portfolio},
                        {icon: "fa-pencil-square-o", card: RenderedCard.blog},
                        {icon: "fa-github", card: RenderedCard.code},
                        {icon: "fa-at", card: RenderedCard.at}
                    ].map((button: { icon: string, card: RenderedCard }, key: number) => {
                        return <button
                            key={key}
                            className={`fa ${button.icon} ${styles.iconStyle} ${activeCard === button.card && styles.iconStyleActive}`}
                            onClick={() => setActiveCard(button.card)}
                        />
                    })
                }
            </div>
        </>
    );
}

export default Nav;
