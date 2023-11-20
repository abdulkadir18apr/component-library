import { useState } from "react"
import "./css/componentView.css";
import { CodeBlock } from "./CodeBlock";

export const ComponentView = ({ heading, code, Component }) => {
    const [view, setView] = useState("component")
    const [copy, setCopy] = useState(false)

    const handleCopyCode=()=>{
         copyContent(code)
    }
    

    async function copyContent() {
        try {
          await navigator.clipboard.writeText(code);
          setCopy(true)

        } catch (err) {
          console.error('Failed to copy: ', err);
        }
      }

    return (
        <div className="componentView-container">
            <div className="controllers">
                <h3>{heading}</h3>
                <div className="buttons">
                    <div className="sliders">
                        <button onClick={()=>setView('component')} className={view==='component'?"active":""}>Preview</button>
                        <button onClick={()=>setView('code')} className={view==='code'?"active":""}>Code</button>
                    </div>
                    <button className="primaryBtn" onClick={handleCopyCode}>{!copy?"Copy":"Copied"}</button>
                </div>
            </div>
            <div className="componetBox">
                {view==="component" && <Component/>}
                {view==="code" && <CodeBlock code={code}/>}
            </div>
        </div>
    )

}