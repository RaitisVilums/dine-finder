import "./footer.styles.scss";

const FooterWrapper = ({ children }) => {
  return (
    <footer className="footer">
      <div className="footer__helper">{children}</div>
    </footer>
  );
};

export default FooterWrapper;
