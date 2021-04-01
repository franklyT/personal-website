import {useState} from 'react';

import Nav from "./Nav/Nav";
import Utils from "./Utils/Utils";

function Card() {
    const [code, setCode] = useState(false);

    return (
        <>
            <Nav propObj={{setCode, code}} />
            <Utils propObj={{setCode, code}} />
        </>
    );
}

export default Card;
