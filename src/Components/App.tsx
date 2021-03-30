import React from "react";

import styles from './App.module.scss';

import Card from "./Card/Card";
import Footer from "./Footer/Footer";

function App() {
   return (
      <React.Fragment>

        <button
          onClick={() => window.open("https://github.com/franklyT/", "_blank")}
          className={`fa fa-github ${styles.mobileGithubIcon}`}
        />

        <div className={styles.container}>
          <Card />
        </div>

        <Footer />

      </React.Fragment>
    );
}
export default App;
