import styles from "./hero.module.css";
import "../../../node_modules/shepherd.js/dist/css/shepherd.css";
import Shepherd from "shepherd.js";
import { renderToStaticMarkup } from "react-dom/server";
import './hero.css';
import { useEffect } from "react";

const tour = new Shepherd.Tour({
  useModalOverlay: true,
  defaultStepOptions: {
    classes: "shepherd-theme-custom-theme",
  },
  
 });

const htmlString = renderToStaticMarkup(
  <div class="card">
    <div class="card-body">
      <div class="progress-bar">
        <div class="progres" style={{width:'16.66%'}}></div>
      </div>
      <div class="card-title">Custom Themes for Shepherd.js</div>
      <div class="card-text">
      Explore custom Shepherd.js themes. They are easy to copy and implement, allowing you to customize the appearance to suit your needs.
      </div>
    </div>
  </div>
);
const tourStep0 = {
  id: "step-id-1",
  text: htmlString,
  classes: "example-step-extra-class",
  scrollTo: true,
  buttons: [
    {
      text: "Skip",
      action: tour.cancel,
      classes: "custom-button",
    },
    {
      text: "Next",
      action: tour.next,
      classes: "custom-button",
    },
  ]
};
const tourStep1 = {
  id: "step-id-1",
  text: renderToStaticMarkup(
    <div class="card">
      <div class="card-body">
        <div class="progress-bar">
          <div class="progres" style={{width:'33.32%'}}></div>
        </div>
        <div class="card-title">Import the Shepherd.js library</div>
        <div class="card-text">
        Import the Shepherd.js library to utilize Shepherd.js themes in your code.        </div>
      </div>
    </div>
  ),
  arrow: true,
  scrollTo: {
    behavior: 'smooth',
    block: 'center'
  },
  attachTo: {
    element: ".tour-step-1",
    scrollTo: true,
    on: "right",
  },
  classes: "example-step-extra-class",
  buttons: [
    {
      text: "Back",
      action: tour.back,
      classes: "custom-button",
    },
    {
      text: "Next",
      action: tour.next,
      classes: "custom-button",
    },
  ]
};
const tourStep2 = {
  id: "step-id-1",
  text: renderToStaticMarkup(
    <div class="card">
      <div class="card-body">
        <div class="progress-bar">
          <div class="progres" style={{width:'49.98%'}}></div>
        </div>
        <div class="card-title">Shepherd tour option</div>
        <div class="card-text">
        Initialize the Shepherd tour object with preferred options. For a detailed list of options, refer to the Shepherd.js documentation.       </div>
      </div>
    </div>
  ),
  arrow: true,
  scrollTo: {
    behavior: 'smooth',
    block: 'center'
  },
  attachTo: {
    element: ".tour-step-2",
    scrollTo: true,
    on: "right",
  },
  classes: "example-step-extra-class",
  buttons: [
    {
      text: "Back",
      action: tour.back,
      classes: "custom-button",
    },
    {
      text: "Next",
      action: tour.next,
      classes: "custom-button",
    },
  ]
};
const tourStep3 = {
  id: "step-id-3",
  text: renderToStaticMarkup(
    <div class="card">
      <div class="card-body">
        <div class="progress-bar">
          <div class="progres" style={{width:'66.64%'}}></div>
        </div>
        <div class="card-title">Setting the Content of a Tour Card</div>
        <div class="card-text">
        You can customize the content of the tour card by adding or editing HTML as needed. Simply add your HTML and apply styles using CSS to meet your requirements.       </div>
      </div>
    </div>
  ),
  arrow: true,
  scrollTo: {
    behavior: 'smooth',
    block: 'center'
  },
  attachTo: {
    element: ".tour-step-3",
    scrollTo: true,
    on: "right",
    
  },
  classes: "example-step-extra-class",
  buttons: [
    {
      text: "Back",
      action: tour.back,
      classes: "custom-button",
    },
    {
      text: "Next",
      action: tour.next,
      classes: "custom-button",
    },
  ]
};
const tourStep4 = {
  id: "step-id-4",
  text: renderToStaticMarkup(
    <div class="card">
      <div class="card-body">
        <div class="progress-bar">
          <div class="progres" style={{width:'83.3%'}}></div>
        </div>
        <div class="card-title">Create step</div>
        <div class="card-text">
        Create a step with preferred options, adding or removing options as needed. For more information on step options, refer to the Shepherd.js documentation.       </div>
      </div>
    </div>
  ),
  scrollTo: {
    behavior: 'smooth',
    block: 'center'
  },
  arrow: true,
  attachTo: {
    element: ".tour-step-4",
    scrollTo: true,
    on: "right",
  },
  classes: "example-step-extra-class",
  buttons: [
    {
      text: "Back",
      action: tour.back,
      classes: "custom-button",
    },
    {
      text: "Next",
      action: tour.next,
      classes: "custom-button",
    },
  ]
};
const tourStep5 = {
  id: "step-id-5",
  text: renderToStaticMarkup(
    <div class="card">
      <div class="card-body">
        <div class="progress-bar">
          <div class="progres" style={{width:'100%'}}></div>
        </div>
        <div class="card-title">Start tour</div>
        <div class="card-text">
        Add the step to your tour, start the tour, and you're done! It's very easy to implement.       </div>
      </div>
    </div>
  ),
  scrollTo: {
      behavior: 'smooth',
      block: 'center'
    },
  arrow: true,
  attachTo: {
    element: ".tour-step-5",
    scrollTo: true,
    on: "right",
  },
  classes: "example-step-extra-class",
  buttons: [
    {
      text: "Back",
      action: tour.back,
      classes: "custom-button",
    },
    {
      text: "Done",
      action: tour.next,
      classes: "custom-button",
    },
  ]
};
export default function Hero() {

  function renderTour() {
    tour.addStep(tourStep0);
    tour.addStep(tourStep1);
    tour.addStep(tourStep2);
    tour.addStep(tourStep3);
    tour.addStep(tourStep4);
    tour.addStep(tourStep5);
    if (!tour.isActive()) {
      tour.start();
    }
    let element = document?.getElementsByClassName("close-btn");
    if (element?.length > 0) {
      element[0].addEventListener("click", () => {
        tour.cancel();
      });
    }
  }

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
            <div className={styles.heroBtn1} onClick={()=>renderTour()}>Explore Themes</div>
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
