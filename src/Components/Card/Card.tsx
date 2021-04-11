import {useState} from 'react';
import {CardContextProvider} from './Card.context';

import Nav from "./Nav/Nav";
import Utils from "./Utils/Utils";

import styles from './Card.module.scss';

import RenderedCard from "../../static/shared/Enums/RenderedCard";
import Carets from "./Carets/Carets";
import Page from "./Page/Page";

function Card() {
    const [code, setCode] = useState(false);
    const [activeCard, setActiveCard] = useState(RenderedCard.portfolio);
    const [cardStyle, setCardStyle] = useState(styles.defaultCardStyle);

    return (
        <CardContextProvider value={{setCode, code, activeCard, setActiveCard, cardStyle, setCardStyle}}>
            <Nav/>
            <Carets/>

            <div className={cardStyle}>
                <Page/>
            </div>

            <Utils/>
        </CardContextProvider>
    );
}

export default Card;
