import React, { ReactNode } from "react";

type RowProps = {
  children: ReactNode;
};

function Row(props: RowProps) {
  return <div className="row align-items-center gx-3 gy-3">{props.children}</div>;
}

export default Row;
