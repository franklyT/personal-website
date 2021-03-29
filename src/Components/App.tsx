import React from "react";

import styles from './App.module.scss';

import Card from "./Card/Card";
import Footer from "./Footer/Footer";

function App() {
   return (
      <div>

        <button
          onClick={() => window.open("https://github.com/franklyT/", "_blank")}
          className={`fa fa-github ${styles.iconStyle} ${styles.mobileGithubIcon}`}
        />

        <div className={styles.container}>
          <Card />
        </div>

        <Footer />

      </div>
    );
}
export default App;
