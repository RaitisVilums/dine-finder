import "./main.styles.scss";
import MainWrapper from "../Common/Main/main";
import SectionHeader from "./Components/SectionHeader/section-header.component";
import SectionProcess from "./Components/SectionProcess/section-process.component";
import SectionJoinNow from "./Components/SectionJoinNow/section-join_now.component";
const Main = () => {
  return (
    <MainWrapper>
      <SectionHeader />
      <SectionProcess />
      <SectionJoinNow />
    </MainWrapper>
  );
};

export default Main;
