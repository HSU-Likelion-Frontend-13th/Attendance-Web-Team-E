import React from "react";

const Statustitle =({status})=>{
    let message="";

    if(status==="before"){
        message="출석 시간이 아닙니다!";
    }else if(status==="after"){
        message="결석처리 되었습니다!";}
        
}