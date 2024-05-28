import { ReactNode } from "react";
import DropDownItem from "./DropDownItem";

type DropDownProps = {
  dropItems: Array<any>;
  children: ReactNode;
  classNames: string;
  header: ReactNode;
  dropDownStyles: Object;
};

const getDropDownItems = (dropItems: Array<any>) => {
  return dropItems.map((obj, i) => {
    return <DropDownItem key={i} link={obj.link} dropItemElement={obj.item} />;
  });
};

function DropDown(props: DropDownProps) {
  return (
    <>
      <div className="dropdown mx-2">
        <a
          className={"dropdown-toggle nav-link" + props.classNames}
          data-bs-toggle="dropdown"
          role="button"
          aria-expanded="false"
        >
          {props.children}
        </a>
        <ul
          className="dropdown-menu dropdown-menu-lg-end text-small shadow my-3"
          style={props.dropDownStyles}
        >
          <li>
            <h6 className="dropdown-header">{props.header}</h6>
          </li>
          {getDropDownItems(props.dropItems)}
        </ul>
      </div>
    </>
  );
}

export default DropDown;
