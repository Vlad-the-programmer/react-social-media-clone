import { useState, ReactNode } from "react";

type DropDownItemProps = {
  link: string;
  dropItemName: string;
};

function DropDownItem(props: DropDownItemProps) {
  return (
    <li className="p-2">
      <a className="dropdown-item p-0" href={props.link}>
        {props.dropItemName}
      </a>
    </li>
  );
}

export default DropDownItem;
