import {useContext} from "react";
import CardContext from "../Card.context";

import Portfolio from './Portfolio/Portfolio';
import Blog from './Blog/Blog';
import Code from './Code/Code';
import At from './At/At';
import RenderedCard from "../../../static/shared/Enums/RenderedCard";

function Page() {
    const {activeCard} = useContext(CardContext);

    function getActiveCard() {
        switch (activeCard) {
            case RenderedCard.portfolio: return <Portfolio/>
            case RenderedCard.blog: return <Blog/>
            case RenderedCard.code: return <Code/>
            case RenderedCard.at: return <At/>
        }
    }

    return (
        <>
            {getActiveCard()}
        </>
    )
}

export default Page;