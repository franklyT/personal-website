import {useContext} from 'react';
import styles from './Carets.module.scss';
import CardContext from "../Card.context";
import RenderedCard from "../../../static/shared/Enums/RenderedCard";

// TODO: Refactor this entire concept... it's too dependent on media queries.

function Carets() {
    const {activeCard, code} = useContext(CardContext);

    return (
        <div className={styles.containerRow}>
            <i
                className={`${styles.caretStyle} ${styles.caretStylePortfolio}`}
                style={
                    activeCard === RenderedCard.portfolio ?
                        code ? {
                            height: "0px",
                            borderColor: 'transparent transparent rgb(47,47, 47) transparent'
                        } : {height: "0px"} : {
                            opacity: 0,
                            height: "100px"
                        }}
            />

            <i
                className={`${styles.caretStyle} ${styles.caretStyleBlog}`}
                style={
                    activeCard === RenderedCard.blog ?
                        code ? {
                            height: "0px",
                            borderColor: 'transparent transparent rgb(47,47, 47) transparent'
                        } : {height: "0px"} : {
                            opacity: 0,
                            height: "100px"
                        }}
            />

            <i
                className={`${styles.caretStyle} ${styles.caretStyleCode}`}
                style={
                    activeCard === RenderedCard.code ?
                        code ? {
                            height: "0px",
                            borderColor: 'transparent transparent rgb(47,47, 47) transparent'
                        } : {height: "0px"} : {
                            opacity: 0,
                            height: "100px"
                        }}
            />

            <i
                className={`${styles.caretStyle} ${styles.caretStyleAt}`}
                style={
                    activeCard === RenderedCard.at ?
                        code ? {
                            height: "0px",
                            borderColor: 'transparent transparent rgb(47,47, 47) transparent'
                        } : {height: "0px"} : {
                            opacity: 0,
                            height: "100px"
                        }}
            />
        </div>
    );
}

export default Carets;
