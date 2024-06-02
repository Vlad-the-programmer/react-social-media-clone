import sizeEnum from "./SizeEnum";
import PostCard from "./PostCard";

type PostsGroup = {
  buttonLink: string;
  imageLinks: Array<string>;
  titles: Array<string>;
  cardTexts: Array<string>;
  buttonName: string;
};

export default function PostsGroup(props: PostsGroup) {
  return (
    <>
      
        {props.imageLinks.map((v, i) => {
          return (
            <PostCard
              key={i}
              buttonLink={props.buttonLink}
              imageLink={props.imageLinks[i]}
              title={props.titles[i]}
              columnSize={sizeEnum.six}
              buttonName={props.buttonName}
            >
              {props.cardTexts[i]}
            </PostCard>
          );
        })}
      
    </>
  );
}
