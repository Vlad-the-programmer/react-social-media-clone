import React, { ReactNode } from "react";
import sizeEnum from "./sizeEnum";

type ColumnProps = {
  smallSize: sizeEnum;
  mediumSize: sizeEnum;
  largeSize: sizeEnum;
  children: ReactNode;
  classNames: Array<string>;
};

function translateSizeToSmallClass(size: sizeEnum) {
  switch (size) {
    case sizeEnum.one:
      return "col-1";
    case sizeEnum.two:
      return "col-2";
    case sizeEnum.three:
      return "col-3";
    case sizeEnum.four:
      return "col-4";
    case sizeEnum.five:
      return "col-5";
    case sizeEnum.six:
      return "col-6";
    case sizeEnum.seven:
      return "col-7";
    case sizeEnum.eight:
      return "col-8";
    case sizeEnum.nine:
      return "col-9";
    case sizeEnum.ten:
      return "col-10";
    case sizeEnum.eleven:
      return "col-11";
    case sizeEnum.twelve:
      return "col-12";
    default:
      return "col-12";
  }
}

function translateSizeToMediumClass(size: sizeEnum) {
  switch (size) {
    case sizeEnum.one:
      return "col-md-1";
    case sizeEnum.two:
      return "col-md-2";
    case sizeEnum.three:
      return "col-md-3";
    case sizeEnum.four:
      return "col-md-4";
    case sizeEnum.five:
      return "col-md-5";
    case sizeEnum.six:
      return "col-md-6";
    case sizeEnum.seven:
      return "col-md-7";
    case sizeEnum.eight:
      return "col-md-8";
    case sizeEnum.nine:
      return "col-md-9";
    case sizeEnum.ten:
      return "col-md-10";
    case sizeEnum.eleven:
      return "col-md-11";
    case sizeEnum.twelve:
      return "col-md-12";
    default:
      return "col-md-12";
  }
}

function translateSizeToLargeClass(size: sizeEnum) {
  switch (size) {
    case sizeEnum.one:
      return "col-lg-1";
    case sizeEnum.two:
      return "col-lg-2";
    case sizeEnum.three:
      return "col-lg-3";
    case sizeEnum.four:
      return "col-lg-4";
    case sizeEnum.five:
      return "col-lg-5";
    case sizeEnum.six:
      return "col-lg-6";
    case sizeEnum.seven:
      return "col-lg-7";
    case sizeEnum.eight:
      return "col-lg-8";
    case sizeEnum.nine:
      return "col-lg-9";
    case sizeEnum.ten:
      return "col-lg-10";
    case sizeEnum.eleven:
      return "col-lg-11";
    case sizeEnum.twelve:
      return "col-lg-12";
    default:
      return "col-lg-12";
  }
}

function getClassesNamesString(classNamesArr: string[] = []) {
  console.log(classNamesArr.join(" "));
  return classNamesArr.join(" ");
}

function Column(props: ColumnProps) {
  return (
    <div
      className={
        translateSizeToSmallClass(props.smallSize) +
        " " +
        getClassesNamesString(props.classNames) +
        " px-3 gy-3"
      }
    >
      {props.children}
    </div>
  );
}

export default Column;
