import { ReactNode, useState } from "react";
import DropDownItem from "./DropDownItem";

type DropDownProps = {
  links: Array<string>;
  dropItemNames: Array<string>;
  children: ReactNode;
};

const getDropDownItems = (
  dropItemNames: Array<string>,
  links: Array<string>
) => {
  return dropItemNames.map((name, i) => {
    return <DropDownItem key={i} link={links[i]} dropItemName={name} />;
  });
};

function DropDown(props: DropDownProps) {
  const [dropdownOpen, setdropdownOpen] = useState(false);

  return (
    <div className="dropdown">
      <a
        // href="#"
        role="button"
        className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
        data-bs-toggle="dropdown"
        data-bs-target="#dropdownUser1"
        aria-expanded="false"
      >
        {props.children}
      </a>

      <ul
        className="dropdown-menu dropdown-menu-dark text-small shadow"
        aria-labelledby="dropdownUser1"
      >
        {getDropDownItems(props.dropItemNames, props.links)}
      </ul>
    </div>
  );
}

export default DropDown;
