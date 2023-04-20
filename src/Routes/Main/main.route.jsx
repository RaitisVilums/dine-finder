import Footer from "../../Components/Footer/footer.component";
import Header from "../../Components/Header/header.component";

import { Outlet } from "react-router-dom";
const MainPage = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainPage;
