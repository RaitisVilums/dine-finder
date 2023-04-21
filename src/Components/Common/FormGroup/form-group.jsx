import "./form-group.styles.scss";

const FormGroup = ({ label, id, name, placeholder, required, type }) => {
  return (
    <div className="form__group">
      <label htmlFor={id} className="visually-hidden">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default FormGroup;
