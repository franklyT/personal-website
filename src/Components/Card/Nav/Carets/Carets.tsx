import styles from './Carets.module.scss';

// TODO: Refactor this entire concept... it's too dependent on media queries.

function Carets(props: any) {
    return (
        <div className={styles.containerRow}>
            <i
                className={`${styles.caretStyle} ${styles.caretStylePortfolio}`}
                style={props.parentState.activeCard === props.parentState.portfolioRef ? {height: "0px"} : {
                    opacity: 0,
                    height: "100px"
                }}
            />

            <i
                className={`${styles.caretStyle} ${styles.caretStyleBlog}`}
                style={props.parentState.activeCard === props.parentState.blogRef ? {height: "0px"} : {
                    opacity: 0,
                    height: "100px"
                }}
            />

            <i
                className={`${styles.caretStyle} ${styles.caretStyleCode}`}
                style={props.parentState.activeCard === props.parentState.codeRef ? {height: "0px"} : {
                    opacity: 0,
                    height: "100px"
                }}
            />

            <i
                className={`${styles.caretStyle} ${styles.caretStyleAt}`}
                style={props.parentState.activeCard === props.parentState.atRef ? {height: "0px"} : { /* Critical to hide caret when Portfolio component fades in. */
                    opacity: 0,
                    height: "100px"
                }}
            />
        </div>
    );
}

export default Carets;
