import styles from "./Utils.module.scss";

function Utils(props: any) {
    return(
        <div style={{textAlign: "center", marginLeft: "auto", marginRight: "auto"}}>
            <button
                className={ `fa fa-code ${styles.iconStyle}` }
                onClick={() => props.propObj.code ? props.propObj.setCode(false) : props.propObj.setCode(true)}
            />
        </div>
    )
}

export default Utils;