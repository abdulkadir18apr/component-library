import Sidebar from "../../components/Sidebar";
import { ComponentView } from "../../components/ConponentView";
import Text from "../../Library/Texts/Text";

export default function Texts() {
    return (
      <div className='card'>
        <div className="sidebar">
          <Sidebar/>
        </div>
        <div className="cards">
            <ComponentView heading={"Texts With Different Styles" } Component={TextView} code={texCode}/>
        </div>          
      </div>
    )
  }


  const TextView=()=>{
    return (
        <div>
             <Text size="14px" weight="300" color="olive" font="Arial" text="Another Text Here" />
          <Text size="16px" weight="normal" color="blue" font="Arial" text="Hello, I'm a Custom Text!" />
          <Text size="20px" weight="bold" color="green" font="Verdana" text="Another Text Here" />
         
        </div>
      );
  }

  const texCode=`
  import Text from "../../Library/Texts/Text";
    <div>
        <Text size="14px" weight="300" color="olive" font="Arial" text="Another Text Here" />
        <Text size="16px" weight="normal" color="blue" font="Arial" text="Hello, I'm a Custom Text!" />
        <Text size="20px" weight="bold" color="green" font="Verdana" text="Another Text Here" />
    </div>`