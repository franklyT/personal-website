const AtCode = {
    atJSX: `
// At.tsx

import {useContext, useEffect, useState} from 'react';
import CardContext from "../../Card.context";

import styles from './At.module.scss';
import SyntaxParser from "../../../../static/shared/Components/SyntaxParser/SyntaxParser";
import BlogCode from "../Blog/Blog.code";
import Categories from "../Blog/Categories/Categories";
import AtCode from "./At.code";

function At() {
    const {extendedCardStyle, setExtendedCardStyle, code, setCode} = useContext(CardContext);

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
                        className={\`\${styles.input} \${styles.inputBox} \${styles.inputBoxName}\`}
                        required
                    />

                    <br/>
                    <br/>

                    <input
                        name="entry.1045781291"
                        type="text"
                        placeholder="Email"
                        className={\`\${styles.input} \${styles.inputBox} \${styles.inputBoxEmail}\`}
                        required
                    />

                    <br/>

                    <input
                        name="entry.50456214"
                        type="text"
                        placeholder="Subject"
                        className={\`\${styles.input} \${styles.inputBox} \${styles.inputBoxSubject}\`}
                        required
                    />

                    <br/>

                    <textarea
                        name="entry.839337160"
                        placeholder="Message"
                        className={\`\${styles.input} \${styles.textarea}\`}
                        required
                    />

                    <br/>

                    <span> What is {verifyNum1} + {verifyNum2} ? <span role="img"
                                                                       className={styles.mrRoboto}> 🤖🚫 </span> </span>

                    <input
                        name="verify"
                        type="text"
                        placeholder="Verify"
                        className={\`\${styles.input} \${styles.inputBox} \${styles.inputBoxVerify}\`}
                        onChange={evt => setVerifyInput(Number(evt.target.value))}
                        required
                    />

                    <span style={verified ? {display: "inline-block"} : {display: "none"}}> &nbsp; ✅ </span>

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
    `,

    atSCSS: `
// At.module.scss
    
.cardStyle {
  width: 42vw;
}

.codeStyle {
  background-color: rgb(47, 47, 47);
  width: 50vw;
}

.container {
  width: 100%;
  height: 100%;
  transition: 1s;
}

.title {
  font-size: 2.5vw;
  margin-bottom: 0;
}

.subtitle {
  color: rgb(98, 98, 98);
  font-size: 1.1vw;
  font-weight: 300;
  margin-bottom: 0;
}

.input {
  &:focus::placeholder {
    color: transparent;
  }
}

.inputBox {
  background: rgba(240, 240, 240, 1);
  border: none;
  display: inline-flex;
  height: 4vh;
  margin-top: 3vh;
  padding-left: .7vw;
  width: 18vw;
}

.inputBoxName {
  margin-right: 1vw;
}

.inputBoxEmail {
  margin: 0;
  width: 18vw;
}

.inputBoxSubject {
  width: 36vw;
}

.inputBoxVerify {
  margin-bottom: 1.5em;
  margin-top: -1.5em;
  width: 10em;
}

.textarea {
  background: rgba(240, 240, 240, 1);
  border: none;
  display: inline-flex;
  height: 20vh;
  margin-bottom: 3vh;
  margin-top: 3vh;
  padding-left: .7vw;
  padding-top: 1.5vh;
  resize: none;
  width: 36vw; // Double width + margin-right
}

.mrRoboto {
  font-size: 1.3em;
}

.submit {
  background-color: rgb(21, 21, 21);
  border: none;
  color: white;
  font-size: 2vh;
  height: auto;
  padding: 0.7vh 0.3vw 0.7vh 0.5vw;
  width: fit-content;

  &:active {
    background: rgba(50, 50, 50, 1);
  }

  &:focus {
    outline: 0
  }

  &:hover {
    background: rgba(0, 0, 0, .8);
    cursor: pointer;
  }
}

.linkGithub {
  color: rgb(60, 170, 255);
}`
}

export default AtCode;