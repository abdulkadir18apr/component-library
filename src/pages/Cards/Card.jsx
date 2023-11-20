import { Button } from "../../Library/Buttons/Button";
import CardWithBadges from "../../Library/cards/CardWithBadges";
import CardWithDismiss from "../../Library/cards/CardWithDismiss";
import CardWithText from "../../Library/cards/CardWithText";
import CardWithTextOverlay from "../../Library/cards/CardWithTextOverlay";
import { ComponentView } from "../../components/ConponentView";
import Sidebar from "../../components/Sidebar";
import "./Cards.css"
export default function Cards() {
    return (
      <div className='card'>
        <div className="sidebar">
          <Sidebar/>
        </div>
        <div className="cards">
            <ComponentView heading={"Card with Badges"} Component={CardWithBadgesView} code={cardwithBadgesCode}/>
            <ComponentView heading={"Card with Dismiss"} Component={CardWithDismissView} code={cardWithDismissCode}/>
            <ComponentView heading={"Card with Text Overlay"} Component={CardWithTextOverlayView} code={cardWithTextOverlayCode}/>
            <ComponentView heading={"Card with Text Only"} Component={CardWithTextView} code={cardwithTextCode}/>
            <ComponentView heading={"Card with Shadow "} Component={CardWithShadowView} code={cardwithSahdowCode}/>
        </div>          
  
      </div>
    )
  }


  const CardWithBadgesView=()=>{
    const sampleCardContent = {
        title: 'Card Title',
        description: 'This is a sample card with badges.',
        badges: ['Badge 1', 'Badge 2', 'Badge 3'],
        src:"https://images.unsplash.com/photo-1682688759350-050208b1211c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
    return(
        <div className="">
            <CardWithBadges cardContent={sampleCardContent} />
        </div>
    )
  }
  const CardWithTextOverlayView=()=>{
    const sampleCardContent = {
        title: 'Card Title',
        description: 'This is a sample card with Text Overlay.',
        src:"https://images.unsplash.com/photo-1682688759350-050208b1211c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
    return(
        <div className="">
            <CardWithTextOverlay cardContent={sampleCardContent} />
        </div>
    )
  }
  const CardWithTextView=()=>{
    const sampleCardContent = {
        title: 'Card Title',
        description: 'This is a sample card text only.',
        
      }
    return(
        <div className="">
            <CardWithText cardContent={sampleCardContent} />
        </div>
    )
  }
  const CardWithShadowView=()=>{
    const sampleCardContent = {
        title: 'Card Title',
        description: 'This is a sample card Shadow.',
        
      }
    return(
        <div className="">
            <CardWithText cardContent={sampleCardContent} shadow={true} />
        </div>
    )
  }

  const cardwithBadgesCode=`
  import CardWithBadges from "../../Library/cards/CardWithBadges";
  const sampleCardContent = {
    title: 'Card Title',
    description: 'This is a sample card with badges.',
    badges: ['Badge 1', 'Badge 2', 'Badge 3'],
  }
return(
    <div className="view">
        <CardWithBadges cardContent={sampleCardContent} />
    </div>
)`

const cardWithTextOverlayCode=`
import CardWithText from "../../Library/cards/CardWithText";
const sampleCardContent = {
    title: 'Card Title',
    description: 'This is a sample card with Text Overlay.',
    src:"https://images.unsplash.com/photo-1682688759350-050208b1211c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
return(
    <div className="">
        <CardWithTextOverlay cardContent={sampleCardContent} />
    </div>
)
`

const cardwithTextCode=`
import CardWithText from "../../Library/cards/CardWithText";
const sampleCardContent = {
    title: 'Card Title',
    description: 'This is a sample card text only.',
    
  }
return(
    <div className="">
        <CardWithText cardContent={sampleCardContent} />
    </div>
)`

const cardwithSahdowCode=`
import CardWithText from "../../Library/cards/CardWithText";
const sampleCardContent = {
    title: 'Card Title',
    description: 'This is a sample card text only.',
    
  }
return(
    <div className="">
        <CardWithText cardContent={sampleCardContent} shadow={true} />
    </div>
)`
const cardWithDismissCode=`
    import CardWithDismiss from "../../Library/cards/CardWithText";
    const sampleCardContent = {
    title: 'Card Title',
    description: 'This is a sample card with dismiss.',
    badges: ['Badge 1', 'Badge 2', 'Badge 3'],
  }
return <div className="">
    <CardWithDismiss cardContent={sampleCardContent} />
</div>`
const CardWithDismissView=()=>{
    const sampleCardContent = {
        title: 'Card Title',
        description: 'This is a sample card with dismiss.',
        badges: ['Badge 1', 'Badge 2', 'Badge 3'],
      }
    return <div className="">
        <CardWithDismiss cardContent={sampleCardContent} />
    </div>
}