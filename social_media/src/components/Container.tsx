import React, { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

function Container(props: ContainerProps) {
  return (
    <div className="container-fluid  flex max-w-screen-md items-center h-screen">
      {props.children}
    </div>
  );
}

export default Container;
