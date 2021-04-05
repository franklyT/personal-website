import { useContext } from "react";
import CardContext from "../Card.context";

import Portfolio from './Portfolio/Portfolio';
import Blog from './Blog/Blog';
import Code from './Code/Code';
import At from './At/At';

function Page() {
    const { activeCard } = useContext(CardContext);

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
            { getActiveCard() }
        </>
    )
}

export default Page;