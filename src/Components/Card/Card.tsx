import React, {useState} from 'react';

import Nav from "./Nav/Nav";
import Utils from "./Utils/Utils";

function Card() {
    const [code, setCode] = useState(false);

    return (
        <React.Fragment>
            <Nav propObj={{setCode, code}} />
            <Utils propObj={{setCode, code}} />
        </React.Fragment>
    );
}

export default Card;
