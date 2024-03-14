const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className="ContactItem">
      <span>
        {name}: {number}
      </span>
     <div className="ButtonWrapper DeleteButtonWrapper">
     <button
        className="Button DeleteButton"
        type="button"
        onClick={() => {
          onDeleteContact(id);
        }}
      >
        Delete
      </button>
     </div>
    </li>
  );
};

export default ContactItem;
