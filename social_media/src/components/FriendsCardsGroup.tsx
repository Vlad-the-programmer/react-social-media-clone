import sizeEnum from "./SizeEnum";
import ProfileCard from "./ProfileCard";

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
          <ProfileCard
            key={i}
            buttonLink={props.buttonLink}
            imageLink={props.imageLinks[i]}
            title={props.titles[i]}
            columnSize={sizeEnum.four}
            buttonNames={props.buttonNames}
          >
            {props.cardTexts[i]}
          </ProfileCard>
        );
      })}
    </>
  );
}

export default FriendsCardsGroup;
