import { useState, ReactNode } from "react";

type DropDownItemProps = {
  link: string;
  dropItemName: string;
};

function DropDownItem(props: DropDownItemProps) {
  return (
    <li>
      <a className="dropdown-item" href={props.link}>
        {props.dropItemName}
      </a>
    </li>
  );
}

export default DropDownItem;
