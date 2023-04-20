import "./pricing.styles.scss";
import MainWrapper from "../Common/Main/main";
import SectionPricing from "./Components/SectionPricing/section-pricing.component";
import Testimonials from "./Components/Testimonials/testimonials.component";
import FAQ from "./Components/FAQ/faq.component";

const Pricing = () => {
  return (
    <MainWrapper>
      <SectionPricing />
      <Testimonials />
      <FAQ />
    </MainWrapper>
  );
};

export default Pricing;
