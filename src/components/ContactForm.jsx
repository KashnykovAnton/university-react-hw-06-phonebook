import { useState } from "react";

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(name, number);
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setNumber("");
  };

  return (
    <form className="Container ContactFormSection" onSubmit={handleFormSubmit}>
      <label className="InputLabel">
        Name
        <input
        className="Input"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Please enter name"
          required
          onChange={handleChange}
          value={name}
        />
      </label>
      <label className="InputLabel">
        Number
        <input
        className="Input"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-\.\s]?\(?\d{1,3}?\)?[-\.\s]?\d{1,4}[-\.\s]?\d{1,4}[-\.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="Please enter number"
          required
          onChange={handleChange}
          value={number}
        />
      </label>
      <div className="ButtonWrapper">
        <button className="Button AddContactButton" type="submit">
          Add contact
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
