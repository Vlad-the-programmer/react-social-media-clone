import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Container from "./Container.tsx";
import Row from "./Row.tsx";
import Column from "./Column.tsx";
import sizeEnum from "./SizeEnum.tsx";
import Footer from "./Footer";
import SideBar from "./SideBar.tsx";
import { Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <div className="col-3 px-1 bg-dark sticky-top sidebar">
            <SideBar />
          </div>

          <Column
            smallSize={sizeEnum.nine}
            classNames={["d-flex align-items-center"]}
          >
            <div className="col-1 align-self-start">
              <Link
                to=".."
                relative="path"
                className="">
                &larr; <span>Get back</span>
              </Link>
            </div>

            <Outlet />
          </Column>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
