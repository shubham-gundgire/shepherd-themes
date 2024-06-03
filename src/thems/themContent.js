export const themeData = {
    1:{
        "js":String.raw`
import "./app.css";
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
  <div class="t1-card">
    <div class="t1-card-body">
      Exploring the Beauty of Nature: A Journey Through the Wilderness
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
        text: "BACK",
        action: tour.cancel,
      },
      {
        text: "NEXT",
        action: tour.next,
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
`,
"css":String.raw`
 .box {
    height: 500px;
    display: flex;
    align-items: center;
    justify-items: center;
  }
  .bullet {
    border-radius: 10px;
    background-color: rgb(134, 138, 243);
    margin-right: 10px;
  }
  .shepherd-theme-custom .shepherd-content {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 0px;
  }
  
  .shepherd-theme-custom .shepherd-text {
    padding: 0px;
    margin-bottom: 15px;
  }
  .shepherd-theme-custom .shepherd-footer {
    border-radius: 0px;
  }
  .t1-card {
    width: 100%;
    height: 200px;
  }
  .t1-card-body {
    height: 100%;
    width: 100%;
    background: url("https://images.pexels.com/photos/3109808/pexels-photo-3109808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    color: white;
    font-weight: 700;
    font-size: 28px;
    padding: 10px;
    display: flex;
    align-items: end;
    justify-content: left;
    font-family: sans-serif;
    line-height: 28px;
  }
  .shepherd-theme-custom .shepherd-footer {
    display: flex;
    align-items: center;
  }
  
  .shepherd-theme-custom .shepherd-button {
    border-radius: 0px;
    background-color: #292789;
    color: white;
    font-size: 12px;
    margin-left: 5px;
  }
  .shepherd-theme-custom .shepherd-button:hover {
    background-color: #292789;
  }
                    
        `
    },
    2:{
  "js":String.raw`
import "./app.css";
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
  <div class="t2-card">
    <svg
      class="close-btn"
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 512 512"
      height="200px"
      width="200px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"></path>
    </svg>
    <div class="t2-card-body">
      <div class="t2-card-title">
        Building Responsive Websites: A Comprehensive Guide to Modern Web
        Development
      </div>
      <div class="t2-card-text">
        This guide takes you through the essentials of HTML, CSS, and
        JavaScript, providing you with the skills to build web pages that are
        both aesthetically pleasing and highly functional.
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
        text: "BACK",
        action: tour.cancel,
      },
      {
        text: "NEXT",
        action: tour.next,
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
`,
      "css":String.raw`
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

.shepherd-theme-custom .shepherd-content {
  border-radius: 0px;
  border: 2px solid black;
  box-shadow: -8px -8px 0 0 #ffe54c, -8px -8px 0 2px black;
}

.shepherd-theme-custom .shepherd-text {
  padding: 0px;
  font-family: "Montserrat", sans-serif;
  padding: 15px;
}
.shepherd-theme-custom .shepherd-footer {
  border-radius: 0px;
}
.t2-card {
  width: 100%;
  height: 180px;
  position: relative;
}
.shepherd-theme-custom .shepherd-button {
  border-radius: 0px;
  border: 2px solid black;
  box-shadow: -4px -4px 0 0 #f4f4f4, -4px -4px 0 1px black;
  background-color: #ffe54c;
  color: black;
  margin-left: 15px;
}
.shepherd-theme-custom .shepherd-button:hover {
  box-shadow: -2px -2px 0 0 #f4f4f4, -2px -2px 0 2px black !important;
  background-color: #ffe54c !important;
  color: black !important;
}
.t2-card-title {
  font-size: 18px;
  font-weight: 900;
  line-height: 24px;
  margin-bottom: 10px;
}
.t2-card-text {
  font-size: 12px;
}
.close-btn {
  position: absolute;
  right: -5px;
  top: -5px;
  height: 20px;
  width: 20px;
}
.close-btn:hover {
  cursor: pointer;
}
           
      `
    },
    3:{
      "js":String.raw`
import "./app.css";
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
  <div class="t3-card">
    <svg
      class="close-btn"
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 512 512"
      height="200px"
      width="200px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"></path>
    </svg>
    <div class="t3-card-body">
      <svg
        class="t3-card-image"
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 640 512"
        height="200px"
        width="200px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path>
      </svg>
      <div class="t3-card-title">
        A Comprehensive Guide to Modern Web Development
      </div>
      <div class="t3-card-text">
        This guide takes you through the essentials of HTML, CSS, and
        JavaScript, providing you with the skills to build web pages.
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
        text: "BACK",
        action: tour.cancel,
      },
      {
        text: "NEXT",
        action: tour.next,
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
      `,
      "css":String.raw`
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap");
.shepherd-theme-custom .shepherd-content {
  font-family: "Noto Sans", sans-serif;
  padding: 0px;
  border-radius: 8px;
  position: relative;
  box-shadow: rgba(71, 75, 255, 0.075) 0px 2px 3px;
  background: rgb(255, 255, 255);
}
.shepherd-theme-custom .shepherd-text {
  padding: 0px;
}
.shepherd-theme-custom .shepherd-footer {
  border-radius: 0px;
}

.t3-card {
  padding: 15px;
}
.t3-card-title {
  font-size: 18px;
  font-weight: 800;
  line-height: 24px;
  margin-bottom: 10px;
  color: #5c4033;
}
.t3-card-text {
  font-size: 12px;
  font-weight: 300;
}
.t3-card-image {
  color: #5c4033;
  width: 60px;
  height: 60px;
  background-color: navajowhite;
  border-radius: 50px;
  padding: 10px;
  margin-bottom: 10px;
}
.shepherd-theme-custom .shepherd-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0px;
}
.shepherd-theme-custom .shepherd-button {
  color: #5c4033;
  background-color: white;
  font-size: 14px;
  font-weight: 500;
}
.shepherd-theme-custom .shepherd-button:hover {
  color: #5c4033 !important;
  background-color: white !important;
}
.close-btn {
  position: absolute;
  right: 15px;
  top: 15px;
  height: 20px;
  width: 20px;
}
.close-btn:hover {
  cursor: pointer;
}            
      `
    },
    4:{
      "js":String.raw`
import "./app.css";
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
  <div class="t4-card">
    <div class="t4-card-body">
        <div class="t4-card-image"></div>
      <div class="t4-card-title">
        Modern Web Development
      </div>
      <div class="t4-card-text">
      This guide takes you through the essentials of HTML, CSS, and JavaScript, providing you with the skills to build web pages. 
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
        text: "BACK",
        action: tour.cancel,
        classes:"t4-button-1"
      
      },
      {
        text: "NEXT",
        action: tour.next,
        classes:"t4-button-2"
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
      `,
      "css":String.raw`
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
.shepherd-theme-custom {
  border-radius: 25px !important;
  font-family: "Poppins", sans-serif;
}
.shepherd-theme-custom .shepherd-content {
  padding: 0px;
}
.shepherd-theme-custom .shepherd-text {
  padding: 0px;
}
.shepherd-theme-custom .shepherd-footer {
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0px;
}
.t4-card-image {
  width: 100%;
  height: 80px;
  background-color: #daffbc;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  opacity: 0.8;
  background: repeating-linear-gradient(
    45deg,
    #80ed28,
    #80ed28 2px,
    #daffbc 2px,
    #daffbc 10px
  );
}
.t4-card-title {
  font-size: 22px;
  font-weight: 600;
  padding: 25px 20px 15px 20px;
}

.t4-card-text {
  padding: 0px 20px;
  font-size: 12px;
}
.shepherd-theme-custom .shepherd-button {
  width: 35%;
  border-radius: 25px;
  padding: 12px 20px;
}
.shepherd-theme-custom .t4-button-1 {
  background-color: white;
  color: black;
  border: 1px grey solid;
}
.shepherd-theme-custom .t4-button-1:hover {
  background-color: rgb(240, 240, 240) !important;
  color: black !important;
}
.shepherd-theme-custom .t4-button-2 {
  background-color: #daffbc;
  color: black;
  border: 1px grey solid;
}
.shepherd-theme-custom .t4-button-2:hover {
  background-color: #adf175 !important;
  color: black !important;
}            
      `
    },
    5:{
      "js":String.raw`
import "./app.css";
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
            `,
      "css":String.raw`
@import url("https://fonts.googleapis.com/css2?family=Major+Mono+Display&family=Rubik+Mono+One&display=swap");

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
    },
    6:{
      "js":String.raw`
import "./app.css";
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
            `,
      "css":String.raw`
@import url("https://fonts.googleapis.com/css2?family=Major+Mono+Display&family=Rubik+Mono+One&display=swap");

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
    }
}