import GetAllThems from "../thems/index";
import "../css/globalTheme.css";
import Shepherd from "shepherd.js";
import { useEffect } from "react";



const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

function ShepherdTheme({ themeId,attachTo=null }) {

    const tour = new Shepherd.Tour({
        useModalOverlay: false,
        defaultStepOptions: {
          classes: `shepherd-theme-${themeId}`,
          scrollTo: false,
        },
      });

  //get all thems
  const themes = GetAllThems();
  let theme = themes[`t${themeId}`](tour);

  //random id for class
  let classId = getRandomNumber(100000, 10000000);

  const tourStep = {
    id: `step-${themeId}`,
    text: `${theme?.content}`,
    attachTo: {
      element: attachTo?`.${attachTo}`:`.bullet-${classId}`,
      on: "top",
    },
    arrow:false,
    classes: "example-step-extra-class",
    buttons: theme.buttons,
  };

  //after dom is set then render tour componenet
  function renderTour() {

    tour.addStep(tourStep);
    if (!tour.isActive()) {
      tour.start();
    }
    let element = document?.getElementsByClassName(`t${themeId}-close-btn`)
    if(element?.length > 0){
        element[0].addEventListener('click',()=>{
            tour.cancel()
        })
    }
  }

  //start tour
  useEffect(() => {
    renderTour();
  }, []);

  return (
    <>
      <div className="box">
        {<div className={`bullet bullet-${classId}`}></div>}
      </div>
    </>
  );
}

export default ShepherdTheme;
