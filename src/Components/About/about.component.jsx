import "./about.styles.scss";
import MainWrapper from "../Common/Main/main";
import SectionAbout from "./Components/SectionAbout/section-about.component";
import SectionFeatures from "./Components/SectionFeatures/section-features.component";
import SectionTeam from "./Components/SectionTeam/section-team.component";

const About = () => {
  return (
    <MainWrapper>
      <SectionAbout />
      <SectionFeatures />
      <SectionTeam />
    </MainWrapper>
  );
};

export default About;
