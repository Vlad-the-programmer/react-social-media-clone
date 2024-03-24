import React, { ReactNode } from "react";
import sizeEnum from "./sizeEnum.tsx";


type ColumnProps={
    smallSize: sizeEnum
    mediumSize: sizeEnum
    largeSize: sizeEnum
    children: ReactNode
}


function translateSizeToSmallClass(size: sizeEnum){
    switch(size){
        case sizeEnum.one:
            return "col-1";
        case sizeEnum.two:
            return "col-2";
        case sizeEnum.three:
            return "col-3";
        case sizeEnum.four:
            return "col-4";
        case sizeEnum.five:
            return "col-5";
        case sizeEnum.six:
            return "col-6";
        case sizeEnum.seven:
            return "col-7";
        case sizeEnum.eight:
            return "col-8";
        case sizeEnum.nine:
            return "col-9";
        case sizeEnum.ten:
            return "col-10";
        case sizeEnum.eleven:
            return "col-11";
        case sizeEnum.twelve:
            return "col-12";
        default:
            return "col-12";    
    }

}


function Column(props: ColumnProps){
    return(
        <div className= {translateSizeToSmallClass(props.smallSize)}>
            {props.children}

        </div>
    )
}
export default Column