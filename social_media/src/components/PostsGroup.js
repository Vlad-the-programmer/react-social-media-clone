import Column from "./Column"
import sizeEnum from "./SizeEnum";
import Card from "./Card"

function PostsGroup() {
  return (
    <Column
      smallSize={sizeEnum.eight}
      classNames={["align-items-center gy-4"]}
    >
      <Column smallSize={sizeEnum.five}>
        <Card
          buttonLink="#"
          buttonText="button"
          imageLink="https://picsum.photos/300/200"
          title="Card"
        ></Card>
      </Column>
      <Column smallSize={sizeEnum.five}>
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