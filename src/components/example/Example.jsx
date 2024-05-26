import styles from "./example.module.css";
import { useState } from "react";
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
              {" "}
              <SyntaxHighlighter language={activeFile==='js'?'javascript':'css'} style={docco}>
                {activeFile==='js'?EXAMPLE_JS:activeFile==='css'?EXAMPLE_CSS:''}
              </SyntaxHighlighter>
            </div>
          </div>
          <div className={styles.preview}>
            <div className="attachMe">
                <ShepherdTheme themeId={5} attachTo='attachMe'/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
