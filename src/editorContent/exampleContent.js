export const EXAMPLE_JS = String.raw`import "./app.css";
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

export default function App() {
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
`

export const EXAMPLE_CSS = String.raw`@import url("https://fonts.googleapis.com/css2?family=Major+Mono+Display&family=Rubik+Mono+One&display=swap");

.shepherd-theme-custom {
  font-family: "Raleway", sans-serif;
  padding: 20px;
  background-color: #18252c !important;
}
.shepherd-theme-custom .shepherd-content {
  padding: 0px;
}
.t5-card-title {
  font-family: "Rubik Mono One", monospace;
  font-size: 26px;
  font-weight: 400;
  padding: 15px 10px 15px 10px;
  color: #c3f00f;
}
.shepherd-theme-custom .shepherd-text {
  padding: 0px;
  font-size: 12px;
  text-align: center;
  margin-bottom: 15px;
  color: white;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
}
.shepherd-theme-custom .shepherd-footer {
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.shepherd-theme-custom .shepherd-button {
  width: 90%;
  margin: 0px;
  padding: 15px;
  margin: 6px 0px;
  font-size: 14px;
  font-weight: 800;
  font-family: "Montserrat", sans-serif;
}
.shepherd-theme-custom .t5-button-1 {
  background-color: #c3f00f;
  color: black;
  border: 1px grey solid;
}
.shepherd-theme-custom .t5-button-1:hover {
  background-color: #c3f00f !important;
  color: black !important;
}
.shepherd-theme-custom .t5-button-2 {
  background-color: white;
  color: black;
  border: 1px grey solid;
}
.shepherd-theme-custom .t5-button-2:hover {
  background-color: rgb(240, 240, 240) !important;
  color: black !important;
}
   `