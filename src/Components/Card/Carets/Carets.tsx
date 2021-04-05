import {ReactElement, useContext} from 'react';
import styles from './Carets.module.scss';
import CardContext from "../Card.context";

// TODO: Refactor this entire concept... it's too dependent on media queries.

function Carets() {
    return (<div>CARET</div>)
   /* const { activeCard, code} = useContext(CardContext);

    // Destructure refs
    // const { portfolioRef, blogRef, codeRef, atRef, activeCard } = props.parentState;

    return (
        <div className={styles.containerRow}>
            {[
            { elm: portfolioRef, style: styles.caretStylePortfolio },
            { elm: blogRef, style: styles.caretStyleBlog },
            { elm: codeRef, style: styles.caretStyleCode },
            { elm: atRef, style: styles.caretStyleAt }
            ].map((ref: { elm: ReactElement, style: string }, index) => {
                return <i
                    key={index}
                    className={`${styles.caretStyle} ${ref.style}`}
                    style={
                        activeCard === ref.elm ?
                        code ? { height: "0px", borderColor: 'transparent transparent rgb(47,47, 47) transparent' } : { height: "0px" } : {
                                opacity: 0,
                                height: "100px"
                            }}
                />
            })
            }
        </div>
    );
    */
}

export default Carets;