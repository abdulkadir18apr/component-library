import "../library.css";

export const TextAvatar=({src,alt="textAvatar",size="100px",name="Abdul",userName="@Abdulq143"})=>{
    return(
        <div className="textAvatar">
            <img src={src} alt={alt}/>
            <div className="texts">
                <span>{name}</span>
                <span>{userName}</span>
            </div>
        </div>
    )

}