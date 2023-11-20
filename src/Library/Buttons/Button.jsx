export const Button=({text,type="solid",color="black"})=>{
    const style={
        backgroundColor:type==="solid"?color:"white",
        color:type==="solid"?"white":color,
        border:type==="solid"?"none":`2px solid ${color}`,
        padding:"8px",
        borderRadius:"10px"
    }
    return(
        <button style={style}>{text}</button>
    )

}