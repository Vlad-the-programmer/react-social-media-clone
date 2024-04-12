import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Container from "./Container.tsx";
import Row from "./Row.tsx";
import Column from "./Column.tsx";
import sizeEnum from "./SizeEnum.tsx";
import Footer from "./Footer";
import SideBar from "./SideBar.tsx";
export default function Layout() {
  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <div className="col-3 px-1 bg-dark sticky-top h-100">
            <SideBar />
          </div>

          <Column
            smallSize={sizeEnum.eight}
            classNames={["align-items-center"]}
          >
            <Outlet />
          </Column>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
