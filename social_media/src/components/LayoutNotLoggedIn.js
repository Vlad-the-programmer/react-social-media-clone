import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Container from "./Container.tsx";
import Row from "./Row.tsx";
import Column from "./Column.tsx";
import sizeEnum from "./SizeEnum.tsx";
import Footer from "./Footer";
export default function LayoutNotLoggedIn() {
  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <Column
            smallSize={sizeEnum.twelve}
            classNames={["align-items-center gy-4"]}
          >
            <Outlet />
          </Column>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
