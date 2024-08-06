"use client";

import React from "react";
import styles from "./page.module.scss";

const App = () => {
  const [isMobile, setIsMobile] = React.useState(window?.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window?.innerWidth < 768);
    };

    window?.addEventListener("resize", handleResize);
    return () => window?.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={`${styles["app"]}`}>
      <div className={`${styles["wrapper"]}`}>
        <div className={`${styles["container-banner"]}`}>
          <img
            src={isMobile ? "/desktop.jpeg" : "/mobile.jpeg"}
            alt="desktop"
            width="100%"
          />

          <div className={`${styles["container-info"]}`}>
            <div className={`${styles["container-title"]}`}>
              <h2>Title example</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                cumque facilis dolore blanditiis non debitis nostrum dolorem
                explicabo mollitia autem?
              </p>
            </div>

            <button>Try</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
