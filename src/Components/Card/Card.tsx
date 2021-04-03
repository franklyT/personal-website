import {useState} from 'react';

import Nav from "./Nav/Nav";
import Utils from "./Utils/Utils";

import styles from './Card.module.scss';

import { CardContextProvider } from './Card.context';

function Card() {
    const [code, setCode] = useState(false);

    return (
        <CardContextProvider value={{setCode, code}} >
            <Nav propObj={{setCode, code}} />
            <Utils propObj={{setCode, code}} />
        </CardContextProvider>
    );
}

export default Card;
