import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { LOGIN, PROFILE_INIT, SIGN_UP, GROUPS } from "./constants/routes";
import NotFound from "./components/NotFound";
import CardsGroup from "./components/CardsGroup";
import ProfileDetail from "./components/ProfileDetail.tsx";
import Layout from "./components/Layout";
import LayoutNotLoggedIn from "./components/LayoutNotLoggedIn";
import sizeEnum from "./components/SizeEnum";
import Column from "./components/Column.tsx";
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
        <Routes>
          <Route element={<Layout />}>
            <Route
              path="/"
              index
              element={
                <Column
                  smallSize={sizeEnum.eleven}
                  classNames={["card-group align-items-center"]}
                >
                  <CardsGroup
                    imageLinks={[
                      "https://picsum.photos/300/200",
                      "https://picsum.photos/300/200",
                      "https://picsum.photos/300/200",
                      "https://picsum.photos/300/200",
                    ]}
                    titles={["Post 1", "Post 2", "Post 3", "Post 4"]}
                    buttonLink="/"
                    columnSize={sizeEnum.six}
                    cardTexts={[
                      "WEBExplore the origins, history and meaning of the famous passage, and learn how Lorem Ipsum went from scrambled Latin passage to ubiqitous dummy text. ",
                      "WEBExplore the origins, history and meaning of the famous passage, and learn how Lorem Ipsum went from scrambled Latin passage to ubiqitous dummy text. ",
                      "WEBExplore the origins, history and meaning of the famous passage, and learn how Lorem Ipsum went from scrambled Latin passage to ubiqitous dummy text. ",
                      "WEBExplore the origins, history and meaning of the famous passage, and learn how Lorem Ipsum went from scrambled Latin passage to ubiqitous dummy text. ",
                    ]}
                    buttonNames={["Read more"]}
                  />
                </Column>
              }
            />
            <Route
              path={GROUPS}
              element={
                <Column
                  smallSize={sizeEnum.nine}
                  classNames={["card-group align-items-center"]}
                >
                  <CardsGroup
                    imageLinks={[
                      "https://picsum.photos/300/200",
                      "https://picsum.photos/300/200",
                      "https://picsum.photos/300/200",
                      "https://picsum.photos/300/200",
                    ]}
                    titles={["Group 1", "Group 2", "Group 3", "Group 4"]}
                    buttonLink="/"
                    columnSize={sizeEnum.six}
                    cardTexts={["Group 1", "Group 2", "Group 3", "Group 4"]}
                    buttonNames={["Follow", "Followed"]}
                  />
                </Column>
              }
            />
            <Route path={PROFILE_INIT} element={<ProfileDetail />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route element={<LayoutNotLoggedIn />}>
            <Route path={LOGIN} element={<Login />} />
            <Route path={SIGN_UP} element={<SignUp />} />
          </Route>
        </Routes>
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
