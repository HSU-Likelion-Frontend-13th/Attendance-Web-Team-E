import React from "react";

const Statustitle =({status})=>{
    let message="";

    if(status==="before"){
        message="출석 시간이 아닙니다!";
    }else if(status==="after"){
        message="결석처리 되었습니다!";}
    else if(status==="late"){
        message="지각처리 되었습니다!";}
    else if(status==="onTime"){
        message="출석처리 되었습니다!";}
    else {
        message="결석처리 되었습니다!";
    }

    return(
        <div>
            <h1>{message}</h1>
        </div>
    );
};

    export default Statustitle;