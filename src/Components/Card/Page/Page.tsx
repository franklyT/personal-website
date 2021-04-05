import {useContext} from "react";

import Portfolio from './Portfolio/Portfolio';
import Blog from './Blog/Blog';
import Code from './Code/Code';
import At from './At/At';

import CardContext from "../Card.context";

function Page() {
    const {activeCard, cardStyle} = useContext(CardContext);

    console.log(cardStyle);

    function getActiveCard() {
        switch (activeCard) {
            case "PORTFOLIO": return <Portfolio />
            case "BLOG": return <Blog />
            case "CODE": return <Code />
            case "AT": return <At />
        }
    }

    return (
        <>
            {getActiveCard()}
        </>
    )
}

export default Page;