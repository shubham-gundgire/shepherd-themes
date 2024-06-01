import "./test.css";
//import shepeherd css file
import "../../node_modules/shepherd.js/dist/css/shepherd.css";
import Shepherd from "shepherd.js";
import { useEffect } from "react";
import { renderToStaticMarkup } from "react-dom/server";

const tour = new Shepherd.Tour({
  useModalOverlay: false,
  defaultStepOptions: {
    classes: "shepherd-theme-custom",
    scrollTo: false,
  },
});

const htmlString = renderToStaticMarkup(
  <div class="t5-card">
    <div class="t5-card-body">
      <div class="t5-card-title">Web Development</div>
      <div class="t5-card-text">
        This guide takes you through the essentials of HTML, CSS, and
        JavaScript, providing you with the skills to build web pages from
        scratch.{" "}
      </div>
    </div>
  </div>
);

export default function Test() {
  const tourStep = {
    id: "step-id",
    text: htmlString,
    attachTo: {
      element: "attachMe",
      on: "right",
    },
    arrow: false,
    classes: "example-step-extra-class",
    buttons: [
      {
        text: "Done",
        action: tour.cancel,
        classes: "t5-button-1",
      },
      {
        text: "Cancel",
        action: tour.next,
        classes: "t5-button-2",
      },
    ],
  };

  function renderTour() {
    tour.addStep(tourStep);
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

  //start tour
  useEffect(() => {
    renderTour();
  }, []);

  return (
    <>
      <div className="box">
        <div className="attachMe"></div>
      </div>{" "}
    </>
  );
}
