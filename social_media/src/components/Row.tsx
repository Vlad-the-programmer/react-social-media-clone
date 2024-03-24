import React, { ReactNode } from "react";


type RowProps={
    children: ReactNode
}


function Row(props: RowProps){
    return(
        <div className="row align-items-center px-3">
            {props.children}
        </div>
    )
}

export default Row