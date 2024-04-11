import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar.tsx";
import Container from "./components/Container.tsx";
import Row from "./components/Row.tsx";
import Column from "./components/Column.tsx";
import sizeEnum from "./components/SizeEnum";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { LOGIN, PROFILE_INIT, SIGN_UP } from "./constants/routes";
import NotFound from "./components/NotFound";
import PostsGroup from "./components/PostsGroup.js";
import ProfileDetail from "./components/ProfileDetail.tsx";

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
        <Container>
          <Row>
            <div className="col-3 sticky sidebar gy-0">
              <SideBar />
            </div>

            <Column
              smallSize={sizeEnum.eight}
              classNames={["align-items-center gy-4"]}
            >
              <Routes>
                <Route path="/" element={<PostsGroup />} />
                <Route path={LOGIN} element={<Login />} />
                <Route path={SIGN_UP} element={<SignUp />} />
                <Route path={PROFILE_INIT} element={<ProfileDetail />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Column>
          </Row>
        </Container>
        <Footer />
      </Router>

      <script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"
      ></script>
    </div>
  );
}

export default App;
