import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { EXAMPLE_JS, EXAMPLE_CSS } from "../../editorContent/exampleContent";
import ShepherdTheme from "../ShepherdTheme";
import styles from "./themeEditor.module.css";

export default function ThemeEditor({handleCodeBox,themeNo,isCodeOpen,cssCode,jsCode}) {
  const [activeFile, setActiveFile] = useState("js");
  const getRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  let classId = `class${getRandomNumber(100000, 10000000)}`
  return (
    <>
      <div className={styles.editorSection}>
        <div className={styles.closeEditorBtn} onClick={()=>handleCodeBox()}>Close Editor</div>
        <div className={styles.editor}>
          <div className={styles.fileNav}>
            <div
              className={styles.file}
              onClick={() => setActiveFile("js")}
              style={{
                backgroundColor: `${
                  activeFile === "js" ? "#F8F8FF" : "#282C34"
                }`,
              }}
            >
              <img className={styles.fileLogo} src="/js.svg" alt="js logo" />
              <h6
                className={styles.fileName}
                style={{ color: `${activeFile === "js" ? "black" : "white"}` }}
              >
                App.js
              </h6>
            </div>
            <div
              onClick={() => setActiveFile("css")}
              className={styles.file}
              style={{
                backgroundColor: `${
                  activeFile === "css" ? "#F8F8FF" : "#282C34"
                }`,
              }}
            >
              <img className={styles.fileLogo} src="/css.svg" alt="js logo" />
              <h6
                className={styles.fileName}
                style={{ color: `${activeFile === "css" ? "black" : "white"}` }}
              >
                app.css
              </h6>
            </div>
          </div>
          <div className={styles.playGround}>
            <SyntaxHighlighter
              language={activeFile === "js" ? "javascript" : "css"}
              style={docco}
            >
              {activeFile === "js"
                ? jsCode
                : activeFile === "css"
                ? cssCode
                : ""}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className={styles.preview}>
          <div className={classId} id="attachMe">
            <ShepherdTheme themeId={themeNo} attachTo={classId} isCodeOpen={isCodeOpen} />
          </div>
        </div>
      </div>
    </>
  );
}
