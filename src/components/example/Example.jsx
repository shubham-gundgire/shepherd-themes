import styles from "./example.module.css";
import { useState,useEffect } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { EXAMPLE_JS,EXAMPLE_CSS } from "../../editorContent/exampleContent";
import ShepherdTheme from "../ShepherdTheme";



export default function Example() { 

const [activeFile,setActiveFile] = useState('js');

  return (
    <>
      <div className={styles.example}>
        <div className={styles.title}>How to Apply Themes in Your Code</div>
        <div className={styles.editorSection}>
          <div className={styles.editor}>
            <div className={styles.fileNav}>
              <div className={styles.file} onClick={()=>setActiveFile('js')} style={{backgroundColor:`${activeFile==='js'?'#F8F8FF':'#282C34'}`}}>
                <img className={styles.fileLogo} src="/js.svg" alt="js logo" />
                <h6 className={styles.fileName} style={{color:`${activeFile==='js'?'black':'white'}`}} >App.js</h6>
              </div>
              <div onClick={()=>setActiveFile('css')} className={styles.file} style={{backgroundColor:`${activeFile==='css'?'#F8F8FF':'#282C34'}`}}>
                <img className={styles.fileLogo} src="/css.svg" alt="js logo" />
                <h6 className={styles.fileName} style={{color:`${activeFile==='css'?'black':'white'}`}}>app.css</h6>
              </div>
            </div>
            <div className={styles.playGround}>
            {activeFile==='js'?<>
            <SyntaxHighlighter language='javascript' style={docco} className="hide-scrollbar">
               {`import "./app.css";
//import shepeherd css file
import "../../node_modules/shepherd.js/dist/css/shepherd.css";`}
            </SyntaxHighlighter>
            <SyntaxHighlighter language='javascript' style={docco} class="tour-step-1">
               {`import Shepherd from "shepherd.js";`}
            </SyntaxHighlighter>
            <SyntaxHighlighter language='javascript' style={docco} className="hide-scrollbar">
               {`import { useEffect } from "react";
import { renderToStaticMarkup } from "react-dom/server";`}
            </SyntaxHighlighter>
            <SyntaxHighlighter language='javascript' style={docco} className="hide-scrollbar tour-step-2">
               {`const tour = new Shepherd.Tour({
  useModalOverlay: false,
  defaultStepOptions: {
    classes: "shepherd-theme-custom",
    scrollTo: false,
  },
});`}
            </SyntaxHighlighter>
            <SyntaxHighlighter language='javascript' style={docco} className="hide-scrollbar tour-step-3">
               {`const htmlString = renderToStaticMarkup(
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
);`}
            </SyntaxHighlighter>
            <SyntaxHighlighter language='javascript' style={docco} className="hide-scrollbar">
               {`export default function App() {`}
            </SyntaxHighlighter>
            <SyntaxHighlighter language='javascript' style={docco} className="hide-scrollbar tour-step-4">
               {`const tourStep = {
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
  };`}
            </SyntaxHighlighter>
            <SyntaxHighlighter language='javascript' style={docco} className="hide-scrollbar tour-step-5">
               {`  function renderTour() {
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
  }`}
            </SyntaxHighlighter>
            <SyntaxHighlighter language='javascript' style={docco} className="hide-scrollbar">
               {`  //start tour
  useEffect(() => {
    renderTour();
  }, []);
`}
            </SyntaxHighlighter>
            <SyntaxHighlighter language='javascript' style={docco} className="hide-scrollbar">
               {`  return (
    <>
      <div className="box">
        <div className="attachMe"></div>
      </div>{" "}
    </>
  );
}`}
            </SyntaxHighlighter>            
            <SyntaxHighlighter language='javascript' style={docco} className="hide-scrollbar">
               {``}
            </SyntaxHighlighter>
            </>:activeFile==='css'?<>
            <SyntaxHighlighter language='css' style={docco}>
               {EXAMPLE_CSS}
               </SyntaxHighlighter>
            </>:''}

            </div>
          </div>
          <div className={styles.preview}>
            <div className="attachMe" id="attachMe">
                <ShepherdTheme themeId={5} attachTo='attachMe'/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
