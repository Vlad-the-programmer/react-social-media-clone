import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar.tsx";
import Container from "./components/Container.tsx";
import Row from "./components/Row.tsx";
import Column from "./components/Column.tsx";
import sizeEnum from "./components/sizeEnum.tsx";
import Card from "./components/Card.tsx";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossorigin="anonymous"
      />

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>

      {/* <Container>
        <Row>
          <Column smallSize={sizeEnum.four} classNames={["g-0 px-2"]}>
            <SideBar />
          </Column>

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
      </Container> */}

      <script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"
      ></script>
    </div>
  );
}

export default App;
