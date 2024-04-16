import sizeEnum from "./SizeEnum";
import Card from "./Card";

type FriendsCardsGroup = {
  buttonLink: string;
  imageLinks: Array<string>;
  titles: Array<string>;
  cardTexts: Array<string>;
  buttonNames: Array<string>;
};

function FriendsCardsGroup(props: FriendsCardsGroup) {
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
          >
            {props.cardTexts[i]}
          </Card>
        );
      })}
    </>
  );
}

export default FriendsCardsGroup;
