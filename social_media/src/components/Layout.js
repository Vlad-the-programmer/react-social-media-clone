import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Container from "./Container.tsx";
import Row from "./Row.tsx";
import Column from "./Column.tsx";
import sizeEnum from "./SizeEnum.tsx";
import Footer from "./Footer";
import SideBar from "./SideBar.tsx";
import Icon from "./Icon";
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
            <div className="col-1 align-self-start p-2 px-1">
              <Link to=".." relative="path" className="btn btn-primary">
                <Icon width="16" height="16" class="bi bi-arrow-return-left">
                  <path
                    fill-rule="evenodd"
                    d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"
                  />
                </Icon>
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
