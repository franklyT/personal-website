import React from 'react';
import styles from './Carets.module.scss';

function Carets(props: any) {
    return (
      <div className={styles.containerRow}>
        <i
            className={`${styles.caretStyle} ${styles.portfolioCaretStyle}`}
            style={ props.parentState.activeCard === props.parentState.portfolioRef ? { height: "0px" } : { height: "100px" }}
        />

        <i
            className={`${styles.caretStyle} ${styles.blogCaretStyle}`}
            style={ props.parentState.activeCard === props.parentState.blogRef ? { height: "0px" } : { height: "100px" }}
        />

        <i
            className={`${styles.caretStyle} ${styles.codeCaretStyle}`}
            style={ props.parentState.activeCard === props.parentState.codeRef ? { height: "0px" } : { height: "100px" }}
        />

        <i
            className={`${styles.caretStyle} ${styles.atCaretStyle}`}
            style={ props.parentState.activeCard === props.parentState.atRef ? { height: "0px" } : { height: "100px" }}
        />
      </div>
    );
}

export default Carets;
