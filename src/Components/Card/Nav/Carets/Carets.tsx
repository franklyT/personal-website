import React from 'react';
import styles from './Carets.module.scss';

function Carets(props: any) {
    return (
      <div className={styles.containerRow}>
        <i
            className={`${styles.cardCaretStyle} ${styles.portfolioCaretStyle}`}
            style={ props.propObj.activeCard === props.propObj.portfolioRef ? { height: "0px" } : { height: "100px" }}
        />

        <i
            className={`${styles.cardCaretStyle} ${styles.codeCaretStyle}`}
            style={ props.propObj.activeCard === props.propObj.codeRef ? { height: "0px" } : { height: "100px" }}
        />

        <i
            className={`${styles.cardCaretStyle} ${styles.atCaretStyle}`}
            style={ props.propObj.activeCard === props.propObj.atRef ? { height: "0px" } : { height: "100px" }}
        />
      </div>
    );
}

export default Carets;
