import {useContext} from "react";
import CardContext from "../../Card.context";

import styles from "./Utils.module.scss";

function Utils() {
    const {code, setCode} = useContext(CardContext);

    return (
        <>
            <button
                className={`fa fa-code ${styles.iconStyle} ${code && 'iconStyleActive'}`}
                onClick={() => code ? setCode(false) : setCode(true)}
            />
        </>
    )
}

export default Utils;