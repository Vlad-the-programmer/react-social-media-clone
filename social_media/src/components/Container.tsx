import React, { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

function Container(props: ContainerProps) {
  return <div className="container-fluid g-0">{props.children}</div>;
}

export default Container;
