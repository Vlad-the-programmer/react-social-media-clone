import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import {
  LOGIN,
  PROFILE,
  SIGN_UP,
  GROUPS,
  FRIENDS,
  PEOPLE,
  FEEDS,
  CHAT,
  PROFILE_ADMIN,
  BOOKMARKS,
  SUCCESS_REDIRECT_PAGE,
  SIGN_OUT,
  CREATE_POST,
} from "./constants/routes";
import NotFound from "./components/NotFound";
import ProfileDetail from "./components/ProfileDetail.tsx";
import Layout from "./components/Layout";
import LayoutNotLoggedIn from "./components/LayoutNotLoggedIn";
import sizeEnum from "./components/SizeEnum";
import Column from "./components/Column.tsx";
import GroupsCardsGroup from "./components/GroupsCardsGroup.tsx";
import PostsGroup from "./components/PostsGroup.tsx";
import FriendsCardsGroup from "./components/FriendsCardsGroup.tsx";
import PeopleCardsGroup from "./components/PeopleCardsGroup.tsx";
import Chat from "./components/Chat";
import ProfileAdminPage from "./components/ProfileAdminPage.tsx";
import { getUsers, setUsers, users } from "./utils/users";
import { useEffect } from "react";
import SuccessRedirectPage from "./components/SuccessRedirectPage";
import SignOut from "./components/SignOut";
import CreatePost from "./components/CreatePost";

function App() {
  console.log("Users app", users);
  useEffect(() => {
    document.title = "Home page";
    setUsers(getUsers());
  }, [users]);

  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,700,900&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />

      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route
              path="/"
              index
              element={
                <Column
                  smallSize={sizeEnum.eleven}
                  classNames={["card-group align-items-center mt-5"]}
                >
                  <h4>People you may know</h4>
                  <div className="row overflow-y-auto flex-nowrap">
                    <PeopleCardsGroup
                      imageLinks={[
                        "https://picsum.photos/300/200",
                        "https://picsum.photos/300/200",
                        "https://picsum.photos/300/200",
                        "https://picsum.photos/300/200",
                      ]}
                      titles={[
                        "Someone 1",
                        "Someone 2",
                        "Someone 3",
                        "Someone 4",
                      ]}
                      cardsColumnSize={sizeEnum.four}
                      buttonLink="/"
                      cardTexts={[
                        "Someone 1",
                        "Someone 2",
                        "Someone 3",
                        "Someone 4",
                      ]}
                      buttonNames={["Follow", "UnFollow"]}
                    />
                  </div>
                  <div className="row overflow-y-auto flex-nowrap mt-2">
                    <PostsGroup
                      imageLinks={[
                        "https://picsum.photos/300/200",
                        "https://picsum.photos/300/200",
                        "https://picsum.photos/300/200",
                        "https://picsum.photos/300/200",
                      ]}
                      titles={["Post 1", "Post 2", "Post 3", "Post 4"]}
                      buttonLink="/"
                      cardTexts={[
                        "WEBExplore the origins, history and meaning of the famous passage, and learn how Lorem Ipsum went from scrambled Latin passage to ubiqitous dummy text. ",
                        "WEBExplore the origins, history and meaning of the famous passage, and learn how Lorem Ipsum went from scrambled Latin passage to ubiqitous dummy text. ",
                        "WEBExplore the origins, history and meaning of the famous passage, and learn how Lorem Ipsum went from scrambled Latin passage to ubiqitous dummy text. ",
                        "WEBExplore the origins, history and meaning of the famous passage, and learn how Lorem Ipsum went from scrambled Latin passage to ubiqitous dummy text. ",
                      ]}
                      buttonName={["Read more"]}
                    />
                  </div>
                </Column>
              }
            />
            <Route
              path={GROUPS}
              element={
                <Column
                  smallSize={sizeEnum.nine}
                  classNames={["card-group align-items-center mt-4"]}
                >
                  <div className="card-body overflow-scroll" style={{ height: "500px" }}>
                    <div className="row">
                      <GroupsCardsGroup
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
                        groupDescription="Private group 177.0K members"
                        buttonNames={["Join", "Leave"]}
                      />
                    </div>
                  </div>
                </Column>
              }
            />
            <Route
              path={FRIENDS}
              element={
                <Column
                  smallSize={sizeEnum.nine}
                  classNames={["card-group align-items-center"]}
                >
                  <div className="card-body overflow-scroll" style={{ height: "500px" }}>
                    <div className="row">
                  <FriendsCardsGroup
                    imageLinks={[
                      "https://picsum.photos/300/200",
                      "https://picsum.photos/300/200",
                      "https://picsum.photos/300/200",
                      "https://picsum.photos/300/200",
                      "https://picsum.photos/300/200",
                      "https://picsum.photos/300/200",
                    ]}
                    titles={["Friend 1", "Friend 2", "Friend 3", "Friend 4", "Friend 5", "Friend 6"]}
                    buttonLink="/"
                    cardTexts={["Friend 1", "Friend 2", "Friend 3", "Friend 4", "Friend 5", "Friend 6"]}
                    buttonNames={["Follow", "UnFollow"]}
                  />
                  </div>
            </div>
                </Column>
              }
            />
            <Route
              path={PEOPLE}
              element={
                <Column
                  smallSize={sizeEnum.nine}
                  classNames={["card-group align-items-center"]}
                >
                  <div className="card-body overflow-scroll" style={{ height: "500px" }}>
                    <div className="row">
                  <PeopleCardsGroup
                    imageLinks={[
                      "https://picsum.photos/300/200",
                      "https://picsum.photos/300/200",
                      "https://picsum.photos/300/200",
                      "https://picsum.photos/300/200",
                      "https://picsum.photos/300/200",
                      "https://picsum.photos/300/200",
                    ]}
                    titles={[
                      "Someone 1",
                      "Someone 2",
                      "Someone 3",
                      "Someone 4",
                      "Someone 5",
                      "Someone 6",
                    ]}
                    buttonLink="/"
                    cardsColumnSize={sizeEnum.four}
                    cardTexts={[
                      "Someone 1",
                      "Someone 2",
                      "Someone 3",
                      "Someone 4",
                      "Someone 5",
                      "Someone 6",
                    ]}
                    buttonNames={["Follow", "UnFollow"]}
                  />
                  </div>
                  </div>
                </Column>
              }
            />
            <Route
              path={FEEDS}
              element={
                <Column
                  smallSize={sizeEnum.nine}
                  classNames={["card-group align-items-center mt-4"]}
                >
                  <div className="card-body overflow-scroll" style={{ height: "500px" }}>
                    <div className="row">
                      <PostsGroup
                        imageLinks={[
                          "https://picsum.photos/300/200",
                          "https://picsum.photos/300/200",
                          "https://picsum.photos/300/200",
                          "https://picsum.photos/300/200",
                          "https://picsum.photos/300/200",
                          "https://picsum.photos/300/200",
                        ]}
                        titles={["Post 1", "Post 2", "Post 3", "Post 4", "Post 5", "Post 6"]}
                        buttonLink="/"
                        cardTexts={[
                          "WEBExplore the origins, history and meaning of the famous passage, and learn how Lorem Ipsum went from scrambled Latin passage to ubiqitous dummy text. ",
                          "WEBExplore the origins, history and meaning of the famous passage, and learn how Lorem Ipsum went from scrambled Latin passage to ubiqitous dummy text. ",
                          "WEBExplore the origins, history and meaning of the famous passage, and learn how Lorem Ipsum went from scrambled Latin passage to ubiqitous dummy text. ",
                          "WEBExplore the origins, history and meaning of the famous passage, and learn how Lorem Ipsum went from scrambled Latin passage to ubiqitous dummy text. ",
                          "WEBExplore the origins, history and meaning of the famous passage, and learn how Lorem Ipsum went from scrambled Latin passage to ubiqitous dummy text. ",
                          "WEBExplore the origins, history and meaning of the famous passage, and learn how Lorem Ipsum went from scrambled Latin passage to ubiqitous dummy text. ",
                        ]}
                        buttonName={["Read more"]}
                      />
                    </div>
                  </div>
                </Column>
              }
            />
            <Route
              path={BOOKMARKS}
              element={
                <Column
                  smallSize={sizeEnum.nine}
                  classNames={["card-group align-items-center mt-4"]}
                >
                  <div className="card-body overflow-scroll" style={{ height: "500px" }}>
                    <div className="row">
                      <PostsGroup
                        imageLinks={[
                          "https://picsum.photos/300/200",
                          "https://picsum.photos/300/200",
                          "https://picsum.photos/300/200",
                          "https://picsum.photos/300/200",
                        ]}
                        titles={["Post 1", "Post 2", "Post 3", "Post 4"]}
                        buttonLink="/"
                        cardTexts={[
                          "WEBExplore the origins, history and meaning of the famous passage, and learn how Lorem Ipsum went from scrambled Latin passage to ubiqitous dummy text. WEBExplore the origins, history and meaning of the famous passage, and learn how Lorem Ipsum went from scrambled Latin passage to ubiqitous dummy text. ",
                          "WEBExplore the origins, history and meaning of the famous passage, and learn how Lorem Ipsum went from scrambled Latin passage to ubiqitous dummy text. WEBExplore the origins, history and meaning of the famous passage, and learn how Lorem Ipsum went from scrambled Latin passage to ubiqitous dummy text. ",
                          "WEBExplore the origins, history and meaning of the famous passage, and learn how Lorem Ipsum went from scrambled Latin passage to ubiqitous dummy text. ",
                          "WEBExplore the origins, history and meaning of the famous passage, and learn how Lorem Ipsum went from scrambled Latin passage to ubiqitous dummy text. WEBExplore the origins, history and meaning of the famous passage, and learn how Lorem Ipsum went from scrambled Latin passage to ubiqitous dummy text. ",
                        ]}
                        buttonName={["Read more"]}
                      />
                    </div>
                  </div>
                </Column>
              }
            />
            <Route
              path={PROFILE}
              element={
                <ProfileDetail
                  followers={"200"}
                  followingUsersCount={"400"}
                  photosCount="20"
                  fullName="Danny McLoan"
                  smallUnderFullNameText={["23 y.o.", <br />, "Bachelor"]}
                  description={["Web Developer", "Designer", "Photographer"]}
                  profileImgLink="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                  imgUrls={[
                    [
                      "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
                      "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp",
                    ],
                    [
                      "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp",
                      "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp",
                    ],
                  ]}
                />
              }
            />
            <Route path={PROFILE_ADMIN} element={<ProfileAdminPage i="0" />} />
            <Route
              path={CHAT}
              element={
                <Chat
                  senderImgUrl="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp"
                  senderName="Vlad"
                  receiverName="John"
                  receiverImgUrl="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                  senderMessageAndDateTime={[
                    {
                      message:
                        "For what reason would it be advisable for me to think \
                      about business content?",
                      dateAndTime: "23 Jan 2:00 pm",
                    },
                    {
                      message:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit \
                      similique quae consequatur",
                      dateAndTime: "23 Jan 5:37 pm",
                    },
                    {
                      message:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit \
                      similique quae consequatur",
                      dateAndTime: "23 Jan 5:37 pm",
                    },
                    {
                      message:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit \
                      similique quae consequatur",
                      dateAndTime: "23 Jan 5:37 pm",
                    },
                  ]}
                  receiverMessageAndDateTime={[
                    {
                      message:
                        "For what reason would it be advisable for me to think \
                      about business content?",
                      dateAndTime: "23 Jan 2:00 pm",
                    },
                    {
                      message:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit \
                      similique quae consequatur",
                      dateAndTime: "23 Jan 5:37 pm",
                    },
                    {
                      message:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit \
                      similique quae consequatur",
                      dateAndTime: "23 Jan 5:37 pm",
                    },
                    {
                      message:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit \
                      similique quae consequatur",
                      dateAndTime: "23 Jan 5:37 pm",
                    },
                  ]}
                />
              }
            />
            <Route path={SIGN_OUT} element={<SignOut />} />
            <Route path={CREATE_POST} element={<CreatePost />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route element={<LayoutNotLoggedIn />}>
            <Route path={LOGIN} element={<Login />} />
            <Route path={SIGN_UP} element={<SignUp />} />
            <Route
              path={SUCCESS_REDIRECT_PAGE}
              element={<SuccessRedirectPage message="" />}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
