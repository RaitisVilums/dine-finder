import "./buttons.styles.scss";

const Button = ({ className, onClick, children, type }) => {
  return (
    <button type={type} className={`btn ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
