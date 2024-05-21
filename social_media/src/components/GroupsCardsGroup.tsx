import sizeEnum from "./SizeEnum";
import Card from "./Card";

type GroupsCardsGroup = {
  buttonLink: string;
  imageLinks: Array<string>;
  titles: Array<string>;
  cardTexts: Array<string>;
  buttonNames: Array<string>;
  groupDescription: string;
};

function GroupsCardsGroup(props: GroupsCardsGroup) {
  return (
    <>
      {props.imageLinks.map((v, i) => {
        return (
          <Card
            key={i}
            buttonLink={props.buttonLink}
            imageLink={props.imageLinks[i]}
            title={props.titles[i]}
            columnSize={sizeEnum.six}
            buttonNames={props.buttonNames}
            groupDescription={props.groupDescription}
          >
            {props.cardTexts[i]}
          </Card>
        );
      })}
    </>
  );
}

export default GroupsCardsGroup;
