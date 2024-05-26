import styles from "./hero.module.css";

export default function Hero() {

function goToGithub(){
    window.location = 'https://github.com/shubham-gundgire/shepherd-themes'
}

  return (
    <>
      <div className={styles.hero}>
        <div className={styles.leftHero}>
          <h1 className={styles.heroTitle}>
            Customizable ShepherdJS Themes for Perfect User Tours
          </h1>
          <h5 className={styles.heroSubTitle}>
            Unlock a collection of beautiful themes crafted for ShepherdJS.
            Easily tailor each theme to match your brand’s aesthetic and create
            engaging, interactive user guides.
          </h5>
          <div className={styles.heroButtonSection}>
            <div className={styles.heroBtn1}>Explore Themes</div>
            <div onClick={()=>goToGithub()} className={styles.heroBtn2}>Shepherd Themes <svg className={styles.btnIcon} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M18.25 15.5a.75.75 0 0 1-.75-.75V7.56L7.28 17.78a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L16.44 6.5H9.25a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75Z"></path></svg></div>
          </div>
        </div>
        <div className={styles.rightHero}>
          <div className={styles.row}>
            <img className={styles.themeImg} src="/t1.png" alt="theme" />
            <img className={styles.themeImg} src="/t2.png" alt="theme" />
          </div>
          <div className={styles.row}>
            <img className={styles.themeImg} src="/t3.png" alt="theme" />
            <img className={styles.themeImg} src="/t5.png" alt="theme" />
          </div>
        </div>
      </div>
    </>
  );
}
