import InputField from "./InputField";
import TextArea from "./TextArea";
import "./ReserveEvents.css"; 
const ReserveForm = () => (
  <form className="reserve-form">
    <div className="form-group">
      <label>YOUR NAME</label>
      <InputField placeholder="Enter your name" />
    </div>
    <div className="form-group">
      <label>YOUR EMAIL</label>
      <InputField type="email" placeholder="Enter your email" />
    </div>
    <div className="form-group">
      <label>SUBJECT</label>
      <InputField placeholder="Enter subject" />
    </div>
    <div className="form-group">
      <label>YOUR MESSAGE (OPTIONAL)</label>
      <TextArea rows={4} />
    </div>
    <button type="submit">Send Message</button>
  </form>
);

export default ReserveForm;
