import Sidebar from "../../components/Sidebar";
import { ComponentView } from "../../components/ConponentView";
import "./image.css";
import ResponsiveImage from "../../Library/Images/ResponsiveImage";

export default function Image() {
    return (
      <div className='card'>
        
        <div className="sidebar">
          <Sidebar/>
        </div>
        <div className="cards">
            <ComponentView heading={"Responsive Images"} Component={ImageView}  code={imageCode}/>
            <ComponentView heading={"Rounded Images"} Component={RoundedImageView}  code={RondedimageCode}/>
            
        </div>          
  
      </div>
    )
  }
const ImageView=()=>{
    return (
        <div>
          <ResponsiveImage src="https://images.unsplash.com/photo-1684974018418-4e752cedaa3e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Example Image" width={"350px"} height={"200px"}/>
        </div>
    )
}
const RoundedImageView=()=>{
    return (
        <div>
          <ResponsiveImage src="https://images.unsplash.com/photo-1684974018418-4e752cedaa3e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Example Image" width={"100px"} height={"100px"} rounded={true}/>
        </div>
    )
}
const imageCode=`
import ResponsiveImage from "../../Library/Images/ResponsiveImage";
<div>
<ResponsiveImage src="https://example.com/example.jpg" alt="Example Image" />
</div>
`;
const RondedimageCode=`
import ResponsiveImage from "../../Library/Images/ResponsiveImage";
<div>
<ResponsiveImage src="https://example.com/example.jpg" alt="Example Image" rounded={true} />
</div>
`;