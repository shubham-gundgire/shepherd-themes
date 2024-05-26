export const EXAMPLE_JS = String.raw`  
import styles from "./example.module.css";
import Editor from "@monaco-editor/react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Example() {
  const codeString = "(num) => num + 1";

  return (
    <>
      <div className={styles.example}>
        <div className={styles.title}>How to Apply Themes in Your Code</div>
        <div className={styles.editorSection}>
          <div className={styles.editor}>
            <div className={styles.fileNav}>
              <div className={styles.file}>
                <img className={styles.fileLogo} src="/js.svg" alt="js logo" />
                <h6 className={styles.fileName}>App.js</h6>
              </div>
              <div className={styles.file}>
                <img className={styles.fileLogo} src="/css.svg" alt="js logo" />
                <h6 className={styles.fileName}>app.css</h6>
              </div>
            </div>
            <div className={styles.playGround}>
              {" "}
              <SyntaxHighlighter language="javascript" style={docco}>
                {codeString}
              </SyntaxHighlighter>
            </div>
          </div>
          <div className={styles.preview}></div>
        </div>
      </div>
    </>
  );
}
`

export const EXAMPLE_CSS = String.raw`
@import url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&family=Rubik+Mono+One&display=swap');
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

.shepherd-theme-5 {
  font-family: "Raleway", sans-serif;
  padding: 20px;
  background-color: #18252C;
}
.shepherd-theme-5 .shepherd-content {
  padding: 0px;
}
.t5-card-title {
    font-family: "Rubik Mono One", monospace;
  font-size: 26px;
  font-weight: 400;
  padding: 15px 10px 15px 10px;
  color: #C3F00F;
}
.shepherd-theme-5 .shepherd-text {
  padding: 0px;
  font-size: 12px;
  text-align: center;
  margin-bottom: 15px;
  color: white;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
}
.shepherd-theme-5 .shepherd-footer {
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.shepherd-theme-5 .shepherd-button {
  width: 90%;
  margin: 0px;
  padding: 15px;
  margin: 6px 0px;
  font-size: 14px;
  font-weight: 800;
  font-family: "Montserrat", sans-serif;

}
.shepherd-theme-5 .t5-button-1 {
  background-color: #C3F00F;
  color: black;
  border: 1px grey solid;
}
.shepherd-theme-5 .t5-button-1:hover {
  background-color: #C3F00F;
  color: black;
}
.shepherd-theme-5 .t5-button-2 {
  background-color: white;
  color: black;
  border: 1px grey solid;
}
.shepherd-theme-5 .t5-button-2:hover {
  background-color: rgb(240, 240, 240);
  color: black;
}`