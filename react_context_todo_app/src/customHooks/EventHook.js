import { useEffect } from "react";
export  const useOnKeyPress =(callbackFunc,targetKey)=>{
useEffect(()=>{
    const keyPressHandler=(event)=>{
        if(event.key === targetKey ){
            callbackFunc();
        }

    }
    window.addEventListener("keydown",keyPressHandler);
    return()=>{
        window.removeEventListener("keydown",keyPressHandler);
    }
},[callbackFunc.targetKey]);
}