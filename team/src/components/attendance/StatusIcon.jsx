import React from "react";

import rightIcon from "../../img/right.png";
import lateIcon from "../../img/late.png";
import notyetIcon from "../../img/notyet.png";
import outIcon from "../../img/out.png";


export default function StatusIcon({status}){

    let icon=null; //아이콘 저장 변수 설정

    if(status==="before"){
        icon=notyetIcon; //수업 전
} else if(status==="after"){
        icon=outIcon; //수업 후
} else if(status==="late"){
        icon=lateIcon; //지각
}else if(status==="onTime"){
        icon=rightIcon; //출석 인정되는 시간
}

return(
    <div>
        {icon&&(
        <img src={icon} alt="status icon" style={{width:"50px",height:"50px"}}/>)}
    </div>  
);
}


