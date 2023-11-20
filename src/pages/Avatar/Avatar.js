import React from 'react'

import "./Avatar.css"
import Sidebar from '../../components/Sidebar'
import { ComponentView } from '../../components/ConponentView'
import { CircularAvatar } from '../../Library/Avatar/CircularAvatar'
import { TextAvatar } from '../../Library/Avatar/TextAvatar'

export default function Avatar() {
  return (
    <div className='avatar'>
      <div className="sidebar">
        <Sidebar/>
      </div>
      <div className="avatars">
        <ComponentView heading={"Circular Avatars"} Component={CircularAvatarView} code={CircularAvatarCode} />
        <ComponentView heading={"Avatar with Text"} Component={TextAvatarView} code={textAvatarcode}/>
        </div>

    </div>
  )
}

export const CircularAvatarView=()=>{
  return(
    <div className="view" style={{display:"flex",alignItems:"center"}}>
      <CircularAvatar src={"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} size={"80px"} />

          <CircularAvatar src={"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
          <CircularAvatar src={"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} size={"120px"}   />
          
    </div>

  )
}
export const TextAvatarView=()=>{
  return(
    <div className="view">
      <TextAvatar src={"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt={"text-avatar"} size='100px' name='Abdul' userName='@Abdulq314'/>
    </div>
  )
}
const CircularAvatarCode=`
 import { CircularAvatar } from '../../Library/Avatar/CircularAvatar

<CircularAvatar src={"https://images.unsplash.com"} size={"80px"} />`

const textAvatarcode=`
 import { TextAvatar } from '../../Library/Avatar/TextAvatar

<TextAvatar src={"https://images.unsplash.com"} size={"80px"} alt={"Avatar} name='Abdul' userName='@Abdulq314'  />`