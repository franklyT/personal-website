import React, {useEffect, useState} from 'react';
import styles from './At.module.scss';

function At (props:any) {
  const [submitted, setSubmitted] = useState(false);
  const [verify, setVerify] = useState(0);
  const [verifyInt1] = useState(Math.floor(Math.random() * 9) + 1);
  const [verifyInt2] = useState(Math.floor(Math.random() * 9) + 1);
  const [verified, setVerified] = useState(false);

  useEffect(() => setVerified(verify === verifyInt1 + verifyInt2), [verify, verifyInt1, verifyInt2]);

  // TODO: Improve verify check css

    return (
      <div className={ `${styles.masterDiv} ${props.renderCard ? styles.masterDivVisible : null}` } >
        <h1 className={styles.title}> Let's chat </h1>
        <h2 className={styles.subtitle}>
          I'm always open to new ideas and opportunities (or any type of
          pleasant conversation).
        </h2>

        <br />

        <iframe
          title="Contact Form"
          name="hidden_iframe"
          id="hidden_iframe"
          style={{ display: 'none' }}
          onLoad={ () => { if (submitted) (window as any).location = 'https://github.com/franklyT/portfolio-thanks'; }}
        />

        <form
          action="https://docs.google.com/forms/d/e/1FAIpQLSfEduqkAM9Dma3wZHe85FPVjGUGjJWkaYyOAww-v0_GaRGqwQ/formResponse"
          method="post"
          target="hidden_iframe"
          onSubmit={() => { if (verify === (verifyInt1 + verifyInt2)) setSubmitted(true); }}
        >

          <input
            name="entry.2005620554"
            type="text"
            placeholder="Name"
            className={`${styles.input} ${styles.inputBox} ${styles.inputBoxName}`}
            required
          />

          <br />
          <br />

          <input
            name="entry.1045781291"
            type="text"
            placeholder="Email"
            className={`${styles.input} ${styles.inputBox} ${styles.inputBoxEmail}`}
            required
          />

          <br />

          <input
            name="entry.50456214"
            type="text"
            placeholder="Subject"
            className={`${styles.input} ${styles.inputBox} ${styles.inputBoxSubject}`}
            required
          />

          <br />

          <textarea
            name="entry.839337160"
            placeholder="Message"
            className={`${styles.input} ${styles.textarea}`}
            required
          />

          <span> What is {verifyInt1} + {verifyInt2}? <span role="img" className={styles.mrRoboto}> 🤖🚫 </span> </span>

          <input
            name="verify"
            type="text"
            placeholder="Verify"
            className={`${styles.input} ${styles.inputBox} ${styles.inputBoxVerify}`}
            onChange={ evt => setVerify(Number(evt.target.value)) }
            required
          />

          <span style={ verified ? { display: "inline-block" } : { display: "none"} }> &nbsp; ✅ </span>

          <br />
          <button className={styles.submit} type="submit">
            Submit
          </button>
        </form>
      </div>
    );
}

export default At;
