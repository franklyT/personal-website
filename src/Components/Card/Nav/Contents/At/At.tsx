import React, {useEffect, useState} from 'react';
import styles from './At.module.scss';

function At (props:any) {
  const [submitted, setSubmitted] = useState(false);
  const [verify, setVerify] = useState(0);
  const [verifyInt1] = useState(Math.floor(Math.random() * 9) + 1);
  const [verifyInt2] = useState(Math.floor(Math.random() * 9) + 1);
  const [verified, setVerified] = useState(false);

  useEffect(() => setVerified(verify === verifyInt1 + verifyInt2), [verify]);

  // TODO: Improve verify check css

    return (
      <div
        className={
          props.renderCard
            ? `${styles.masterDiv} ${styles.masterDivVisible}`
            : styles.masterDiv
        }
      >
        <h1 className={styles.cardTitle}> Let's chat </h1>
        <h2 className={styles.cardSubtitle}>
          I'm always open to new ideas and opportunities (or any type of
          pleasant conversation).
        </h2>

        <br />
        <iframe
          title="Contact Form"
          name="hidden_iframe"
          id="hidden_iframe"
          style={{ display: 'none' }}
          onLoad={() => {
            if (submitted)
              (window as any).location = 'https://github.com/franklyT/portfolio-thanks';
          }}
        />
        <form
          action="https://docs.google.com/forms/d/e/1FAIpQLSfEduqkAM9Dma3wZHe85FPVjGUGjJWkaYyOAww-v0_GaRGqwQ/formResponse"
          method="post"
          target="hidden_iframe"
          onSubmit={() => {
            if (verify === (verifyInt1 + verifyInt2)) setSubmitted(true);
          }}
        >

          <input
            name="entry.2005620554"
            type="text"
            placeholder="Name"
            className={`${styles.cardInput} ${styles.cardInputBox} ${styles.cardInputBoxName}`}
            required
          />

          <br />
          <br />

          <input
            name="entry.1045781291"
            type="text"
            placeholder="Email"
            className={`${styles.cardInput} ${styles.cardInputBox} ${styles.cardInputBoxEmail}`}
            required
          />

          <br />

          <input
            name="entry.50456214"
            type="text"
            placeholder="Subject"
            className={`${styles.cardInput} ${styles.cardInputBox} ${styles.cardInputBoxSubject}`}
            required
          />

          <br />

          <textarea
            name="entry.839337160"
            placeholder="Message"
            className={`${styles.cardInput} ${styles.cardTextarea}`}
            required
          />
          What is {verifyInt1} + {verifyInt2}?
          <span
            role="img"
            aria-label="Robot Emoji"
            className={styles.cardMrRoboto}
          >🤖🚫</span>

          <input
            name="verify"
            type="text"
            placeholder="Verify"
            className={`${styles.cardInput} ${styles.cardInputBox} ${styles.cardInputBoxVerify}`}
            onChange={ evt => setVerify(Number(evt.target.value)) }
            required
          />

          <span style={ verified ? { display: "inline-block" } : { display: "none"} }> &nbsp; ✅ </span>

          <br />
          <button className={styles.cardButton} type="submit">
            Submit
          </button>
        </form>
      </div>
    );
}

export default At;
