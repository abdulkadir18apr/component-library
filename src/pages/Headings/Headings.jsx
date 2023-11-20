import Sidebar from "../../components/Sidebar";
import "./heading.css"
import Heading from "../../Library/Headings/Heading";
import { ComponentView } from "../../components/ConponentView";

export default function Headings() {
    return (
      <div className='card'>
        <div className="sidebar">
          <Sidebar/>
        </div>
        <div className="cards">
            <ComponentView heading={"Headings"} Component={HeadingView}  code={headingCode}/>
            
        </div>          
  
      </div>
    )
  }

const HeadingView=()=>{
    return (
        <div>
          <Heading text={"small Heading"} size={"sm"} color={"red"}/>
          <Heading text={"large Heading"} size={"md"} color={"green"}/>
          <Heading text={"large Heading"} size={"lg"} color={"gray"}/>
          <Heading text={"large Heading"} size={"xl"} color={"black"}/>
        </div>
      );
    
}

const headingCode=`
import Heading from "../../Library/Headings/Heading";
<div>
<Heading text={"small Heading"} size={"sm"} color={"red"}/>
<Heading text={"large Heading"} size={"lg"} color={"green"}/>
<Heading text={"large Heading"} size={"xl"} color={"yellow"}/>
</div>
`