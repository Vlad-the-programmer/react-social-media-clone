import { ReactNode } from "react";
import DropDownItem from "./DropDownItem";

type DropDownProps = {
  links: Array<string>;
  dropItemNames: Array<string>;
  children: ReactNode;
  classNames: string;
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
  return (
    <>
      <div className="dropdown">
        <button
          className={
            "dropdown-toggle hidden-arrow nav-link " + props.classNames
          }
          data-bs-toggle="dropdown"
          // href="#Dropdown"
          type="button"
          aria-expanded="false"
          // aria-controls="dropdownUser1"
        >
          {props.children}
        </button>
        {/* <a
            // href="#"
            role="button"
            className={
              "dropdown-toggle" +
              props.classNames.split("").map((className, i) => {
                return " " + className;
              })
            }
            data-bs-toggle="dropdown"
            // data-bs-target="#dropdownUser1"
            aria-expanded="false"
          >
            {props.children}
          </a> */}

        <ul
          className="dropdown-menu dropdown-menu-dark text-small shadow"
          // aria-labelledby="dropdownUser1"
        >
          {getDropDownItems(props.dropItemNames, props.links)}
        </ul>
      </div>
    </>
  );
}

export default DropDown;
