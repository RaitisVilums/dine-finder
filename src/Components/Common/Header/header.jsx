import "./header.styles.scss";

const HeaderWrapper = ({ children }) => {
  return (
    <header className="header">
      <div className="header__helper">{children}</div>
    </header>
  );
};

export default HeaderWrapper;
