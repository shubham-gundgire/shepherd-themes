import { renderToStaticMarkup } from "react-dom/server";

function t1(tour) {
  const htmlString = renderToStaticMarkup(
    <div class="t1-card">
      <div class="t1-card-body">
        Exploring the Beauty of Nature: A Journey Through the Wilderness
      </div>
    </div>
  );
  return {
    content: htmlString,
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
}
function t2(tour) {
  const htmlString = renderToStaticMarkup(
    <div class="t2-card">
        <svg class ="t2-close-btn"  stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"></path></svg>
      <div class="t2-card-body">
        <div class="t2-card-title">
          Building Responsive Websites: A Comprehensive Guide to Modern Web
          Development
        </div>
        <div class="t2-card-text">
        This guide takes you through the essentials of HTML, CSS, and JavaScript, providing you with the skills to build web pages that are both aesthetically pleasing and highly functional. 
        </div>
      </div>
    </div>
  );
  return {
    content: htmlString,
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
}
function t3(tour) {
    const htmlString = renderToStaticMarkup(
      <div class="t3-card">
        <svg class ="t3-close-btn"  stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"></path></svg>
        <div class="t3-card-body">
        <svg class="t3-card-image" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path></svg>
          <div class="t3-card-title">
            A Comprehensive Guide to Modern Web 
            Development
          </div>
          <div class="t3-card-text">
          This guide takes you through the essentials of HTML, CSS, and JavaScript, providing you with the skills to build web pages. 
          </div>
        </div>
      </div>
    );
    return {
      content: htmlString,
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
}
function t4(tour) {
    const htmlString = renderToStaticMarkup(
      <div class="t4-card">
        {/* <svg class ="t4-close-btn"  stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"></path></svg> */}
        <div class="t4-card-body">
          <div class="t4-card-title">
            A Comprehensive Guide to Modern Web 
            Development
          </div>
          <div class="t4-card-text">
          This guide takes you through the essentials of HTML, CSS, and JavaScript, providing you with the skills to build web pages. 
          </div>
        </div>
      </div>
    );
    return {
      content: htmlString,
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
}
export default function GetAllThems() {
  return { t1, t2,t3,t4 };
}
