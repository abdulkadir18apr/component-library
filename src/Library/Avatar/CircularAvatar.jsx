import "../library.css";

export const CircularAvatar=({src,alt="avatar",size="100px"})=>{
    return<div className="circular-avatar" style={{width:size,height:size}}>
        <img src={src} alt={alt} />
    </div>
}