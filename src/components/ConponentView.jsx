import { useState } from "react"
import "./css/componentView.css";
import { CodeBlock } from "./CodeBlock";

export const ComponentView = ({ heading, code, Component }) => {
    const [view, setView] = useState("component")
    return (
        <div className="componentView-container">
            <div className="controllers">
                <h3>{heading}</h3>
                <div className="buttons">
                    <div className="sliders">
                        <button onClick={()=>setView('component')} className={view==='component'?"active":""}>Preview</button>
                        <button onClick={()=>setView('code')} className={view==='code'?"active":""}>Code</button>
                    </div>
                    <button className="primaryBtn">copy</button>
                </div>
            </div>
            <div className="componetBox">
                {view==="component" && <Component/>}
                {view==="code" && <CodeBlock code={code}/>}
            </div>
        </div>
    )

}