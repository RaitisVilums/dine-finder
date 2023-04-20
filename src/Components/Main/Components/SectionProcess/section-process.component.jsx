import "./section-process.styles.scss";
import {
  ArrowLeft,
  Book,
  Search,
  Eat,
  Review,
} from "../../../../Assets/_index";

const SectionProcess = () => {
  return (
    <section className="main__process">
      <ArrowLeft className="main__process--icon rotation-1" />
      <div className="main__process--item">
        <Book className="main__process--item__icon" />
        <p>Book</p>
      </div>
      <ArrowLeft className="main__process--icon rotation-2" />
      <div className="main__process--item">
        <Search className="main__process--item__icon" />
        <p>Search</p>
      </div>
      <ArrowLeft className="dummy" />
      <ArrowLeft className="main__process--icon rotation-3" />
      <div className="main__process--item">
        <Eat className="main__process--item__icon" />
        <p>Eat</p>
      </div>
      <ArrowLeft className="main__process--icon rotation-4" />
      <div className="main__process--item">
        <Review className="main__process--item__icon" />
        <p>Review</p>
      </div>
    </section>
  );
};

export default SectionProcess;
