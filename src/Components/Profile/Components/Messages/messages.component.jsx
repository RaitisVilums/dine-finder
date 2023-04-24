import "./messages.styles.scss";
import Input from "../../../Common/Input/input";
import Button from "../../../Common/Button/button";
const Messages = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="profile__container--item">
      <div className="messages">
        <h1>Contact support</h1>
        <form className="messages__form" onSubmit={handleSubmit}>
          <Input label="Name" name="name" type="text" readOnly={true} />
          <Input label="Email" name="email" type="email" readOnly={true} />
          <div className="form-group">
            <label>Message</label>
            <textarea name="message" placeholder="Enter your message here" />
          </div>
          <Button className={`btn-secondary`} type={`submit`}>
            Send
          </Button>
        </form>
        <h1>Your messages</h1>
        <div className="messages__wrapper">
          <div className="messages__wrapper--item">
            <div className="messages__wrapper--item__content">
              <p>Message title</p>
              <p> Date</p>
            </div>
            <Button className={`btn-secondary`}>open</Button>
          </div>
          <div className="messages__wrapper--item">
            <div className="messages__wrapper--item__content">
              <p>Message title</p>
              <p> Date</p>
            </div>
            <Button className={`btn-secondary`}>open</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
