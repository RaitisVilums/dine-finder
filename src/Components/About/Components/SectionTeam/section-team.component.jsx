import "./section-team.styles.scss";
import Founder from "../../../../Assets/founder.png";

const SectionTeam = () => {
  return (
    <section className="team">
      <h1 className="team__title">Our Team</h1>
      <p className="team__description">
        DineFinder was founded by a group of dedicated food enthusiasts who are
        committed to delivering an exceptional experience for our users. Our
        team comprises professionals with a diverse range of expertise,
        including culinary, technology, and marketing backgrounds. Together, we
        work tirelessly to bring you the best dining experiences and help you
        embark on a memorable culinary adventure.
      </p>
      <img className="team__image" src={Founder} alt="founder" />
      <p className="team__image--sub-heading">Founder : Raitis Vilums</p>
    </section>
  );
};

export default SectionTeam;
