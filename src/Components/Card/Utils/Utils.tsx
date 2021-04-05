import styles from "./Utils.module.scss";
import {useContext} from "react";
import CardContext from "../Card.context";

function Utils() {
    const {code, setCode} = useContext(CardContext);

    return(
        <div style={{textAlign: "center", marginLeft: "auto", marginRight: "auto"}}>
            <button
                className={ `fa fa-code ${styles.iconStyle}` }
                onClick={() => code ? setCode(false) : setCode(true)}
            />
        </div>
    )
}

export default Utils;