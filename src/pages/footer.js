import React, { useState } from "react";
export const BindRefFoot = React.forwardRef((props, ref) => {
    const [like, setLike] = useState(0)
    const click = () =>{
        setLike(like + 1)
    }
    function handleAlertClick() {
        alert(`you clicked on ${like}`) 
    } 
    return (
        <> 
            <button onClick={click} ref={ref}>{like}赞</button> 
            {props.children}
            <button onClick={handleAlertClick}>Alert</button> 
        </>)
})
