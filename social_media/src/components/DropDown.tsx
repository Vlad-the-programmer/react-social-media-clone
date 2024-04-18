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
      <a
        className={"dropdown-toggle hidden-arrow " + props.classNames}
        data-bs-toggle="collapse"
        href="#Dropdown"
        role="button"
        aria-expanded="false"
        aria-controls="Dropdown"
      >
        {props.children}
      </a>
      <div className="collapse" id="Dropdown">
        <div className="dropdown">
          {/* <a
            // href="#"
            role="button"
            className={
              "dropdown-toggle" +
              props.classNames.map((className, i) => {
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
            aria-labelledby="dropdownUser1"
          >
            {getDropDownItems(props.dropItemNames, props.links)}
          </ul>
        </div>
      </div>
    </>
  );
}

export default DropDown;
