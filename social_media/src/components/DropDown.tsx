import { useState } from "react";
import DropDownItem from "./DropItem";

type DropDownProps = {
  links: Array<string>;
  dropItemNames: Array<string>;
};

const getDropDownItems = (
  dropItemNames: Array<string>,
  links: Array<string>
) => {
  return dropItemNames.map((name, i) => {
    <DropDownItem key={i} link={links[i]} dropItemName={name} />;
  });
};

function DropDown(props: DropDownProps) {
  const [dropdownOpen, setdropdownOpen] = useState(false);

  return (
    <div className="dropdown">
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Dropdown
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        getDropDownItems(props.dropItemNames, props.links)
      </ul>
    </div>
  );
}

export default DropDown;
