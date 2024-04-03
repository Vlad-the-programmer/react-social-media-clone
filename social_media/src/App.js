import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar.tsx";
import Container from "./components/Container.tsx";
import Row from "./components/Row.tsx";
import Column from "./components/Column.tsx";
import sizeEnum from "./components/sizeEnum.tsx";
import Card from "./components/Card.tsx";

function App() {
  return (
    <div className="App">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossorigin="anonymous"
      />
      <Navbar />

      <Container>
        <Row>
          <Column smallSize={sizeEnum.three}>
            <SideBar />
          </Column>

          <Column smallSize={sizeEnum.nine}>
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
            <Column smallSize={sizeEnum.five}>
              <Card
                buttonLink="#"
                buttonText="button"
                imageLink="https://picsum.photos/300/200"
                title="Card"
              ></Card>
            </Column>
          </Column>
        </Row>
      </Container>
      <script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"
      ></script>
    </div>
  );
}

export default App;