import { useRef, useState } from "react";
import ThemeEditor from "../ThemeEditor/ThemeEditor";
import styles from "./theme.module.css";
import {themeData} from '../../thems/themContent';

export default function Theme() {
  

  return (
    <>
      <div className={styles.theme}>
        <div className={styles.title}>Themes</div>
        <div className={styles.themeList}>
         {Object.keys(themeData).map((t)=>{
           return(
             <ThemeBox themeNo={t} jsCode={themeData[t]?.js} cssCode={themeData[t]?.css}/>             
          )
         })}
        </div>
      </div>
    </>
  );
}

function ThemeBox({themeNo,cssCode,jsCode}) {
  const [isCodeOpen,setCodeOPen] = useState(false)
  const themContainerRef = useRef();
  const shepherdEditor = useRef();

  function handleCodeBox(){
    let containerWidth = themContainerRef.current.style.width;
    shepherdEditor.current.classList.toggle('hide')
    if(containerWidth === '100%'){
      themContainerRef.current.style.width = '30%';
      setCodeOPen(false);
    }else{
      themContainerRef.current.style.width = '100%';
      setCodeOPen(true);
    }
  }

  return (
    <>
      <div className={styles.themecontainer} ref={themContainerRef}>
        {!isCodeOpen && <div className={styles?.imageContainer}>
          <div
            className={styles?.themeOverlay}
            onClick={() => handleCodeBox()}
          ></div>
          <img src={`/t${themeNo}.png`} alt="themes" className={styles.themeImage} />
        </div>}
        <div ref={shepherdEditor} className="hide">
           <ThemeEditor  themeNo={themeNo} handleCodeBox={handleCodeBox} isCodeOpen={isCodeOpen} cssCode={cssCode} jsCode={jsCode} />
        </div>
      </div>
    </>
  );
}
