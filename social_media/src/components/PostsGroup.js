import Column from "./Column"
import sizeEnum from "./SizeEnum";
import Card from "./Card"

function PostsGroup() {
  return (
    <Column
      smallSize={sizeEnum.eight}
      classNames={["card-group align-items-center"]}
    >
      <Column smallSize={sizeEnum.six}>
        <Card
          buttonLink="#"
          buttonText="button"
          imageLink="https://picsum.photos/300/200"
          title="Card"
        ></Card>
      </Column>
      <Column smallSize={sizeEnum.six}>
        <Card
          buttonLink="#"
          buttonText="button"
          imageLink="https://picsum.photos/300/200"
          title="Card"
        ></Card>
      </Column>
    </Column>
  );
}

export default PostsGroup;