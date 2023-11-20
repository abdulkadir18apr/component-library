import { Button } from "../../Library/Buttons/Button";
import { ComponentView } from "../../components/ConponentView";
import Sidebar from "../../components/Sidebar";
import "./button.css"
export default function Buttons() {
    return (
      <div className='button'>
        <div className="sidebar">
          <Sidebar/>
        </div>
        <div className="buttons">
            <ComponentView heading={"Solid Buttons"} Component={SolidButtonView} code={solidBtnCode}/>
            <ComponentView heading={"OUtlined Buttons"} Component={OutlinedButton} code={outlinedButtonCode}/>
        </div>          
  
      </div>
    )
  }

  const SolidButtonView=()=>{
    return(
        <div className="view">
            <Button text={"Button Text"} />
            <Button text={"Button Text"} type="solid" color="#CA8A04" />
            <Button text={"Button Text"}  type="solid" color="red"/>
            <Button text={"Button Text"}  type="solid" color="green"/>

        </div>
        
    )
  }

  const solidBtnCode=`
  import { Button } from "../../Library/Buttons/Button";
  <Button text={"Button Text"} />
  <Button text={"Button Text"} type="solid" color="#CA8A04" />
  <Button text={"Button Text"}  type="solid" color="red"/>
  <Button text={"Button Text"}  type="solid" color="green"/>

  `
  const outlinedButtonCode=`
  import { Button } from "../../Library/Buttons/Button";
            <Button text={"Button Text"} type="outlined" />
            <Button text={"Button Text"} type="outlined" color="#CA8A04" />
            <Button text={"Button Text"}  type="outlined" color="red"/>
            <Button text={"Button Text"}  type="outlined" color="green"/>

  `
  const OutlinedButton=()=>{
    return(
        <div className="view">
            <Button text={"Button Text"} type="outlined" />
            <Button text={"Button Text"} type="outlined" color="#CA8A04" />
            <Button text={"Button Text"}  type="outlined" color="red"/>
            <Button text={"Button Text"}  type="outlined" color="green"/>

        </div>
        
    )
  }