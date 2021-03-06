import {useContext, useEffect, useState} from 'react';
import CardContext from "../../Card.context";

import styles from './At.module.scss';
import SyntaxParser from "../../../../static/shared/Components/SyntaxParser/SyntaxParser";
import AtCode from "./At.code";
import Utils from "../Utils/Utils";

function At() {
    const {extendedCardStyle, setExtendedCardStyle, code} = useContext(CardContext);

    const [submitted, setSubmitted] = useState(false);
    const [verifyInput, setVerifyInput] = useState(0);
    const [verifyNum1] = useState(Math.floor(Math.random() * 9) + 1);
    const [verifyNum2] = useState(Math.floor(Math.random() * 9) + 1);
    const [verified, setVerified] = useState(false);

    useEffect(() => setVerified(verifyInput === verifyNum1 + verifyNum2), [verifyInput, verifyNum1, verifyNum2]);

    useEffect(() => {
        code ? setExtendedCardStyle(styles.codeStyle) : setExtendedCardStyle(styles.cardStyle);
    }, [code, extendedCardStyle, setExtendedCardStyle]);

    // TODO: Improve verify check css

    function getCode() {
        return (
            <>
                <SyntaxParser language={"jsx"} code={AtCode.atJSX}/>
                <SyntaxParser language={"scss"} code={AtCode.atSCSS}/>
            </>
        )
    }

    function getCard() {
        return (
            <>
                <h1 className={styles.title}> Let's chat </h1>
                <h2 className={styles.subtitle}>
                    I'm always open to new ideas and opportunities (or any type of
                    pleasant conversation).
                </h2>
                <br/>

                <iframe
                    title="Contact Form"
                    name="hidden_iframe"
                    id="hidden_iframe"
                    style={{display: 'none'}}
                    onLoad={() => {
                        if (submitted) (window as any).location = 'https://github.com/franklyT/portfolio-thanks';
                    }}
                />

                <form
                    action="https://docs.google.com/forms/d/e/1FAIpQLSfEduqkAM9Dma3wZHe85FPVjGUGjJWkaYyOAww-v0_GaRGqwQ/formResponse"
                    method="post"
                    target="hidden_iframe"
                    onSubmit={() => {
                        if (verifyInput === (verifyNum1 + verifyNum2)) setSubmitted(true);
                    }}
                >

                    <input
                        name="entry.2005620554"
                        type="text"
                        placeholder="Name"
                        className={`${styles.input} ${styles.inputBox} ${styles.inputBoxName}`}
                        required
                    />

                    <br/>
                    <br/>

                    <input
                        name="entry.1045781291"
                        type="text"
                        placeholder="Email"
                        className={`${styles.input} ${styles.inputBox} ${styles.inputBoxEmail}`}
                        required
                    />

                    <br/>

                    <input
                        name="entry.50456214"
                        type="text"
                        placeholder="Subject"
                        className={`${styles.input} ${styles.inputBox} ${styles.inputBoxSubject}`}
                        required
                    />

                    <br/>

                    <textarea
                        name="entry.839337160"
                        placeholder="Message"
                        className={`${styles.input} ${styles.textarea}`}
                        required
                    />

                    <br/>

                    <span> What is {verifyNum1} + {verifyNum2} ? <span role="img"
                                                                       className={styles.mrRoboto}> ???????? </span> </span>

                    <input
                        name="verify"
                        type="text"
                        placeholder="Verify"
                        className={`${styles.input} ${styles.inputBox} ${styles.inputBoxVerify}`}
                        onChange={evt => setVerifyInput(Number(evt.target.value))}
                        required
                    />

                    <span style={verified ? {display: "inline-block"} : {display: "none"}}> &nbsp; ??? </span>

                    <br/>
                    <button className={styles.submit} type="submit">
                        Submit
                    </button>
                </form>
            </>
        )
    }

    return (
        <div className={styles.container}>
            <Utils />
            {code ? getCode() : getCard()}
        </div>
    );
}

export default At;
