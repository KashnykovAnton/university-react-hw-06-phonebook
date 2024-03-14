const Filter = ({ filterValue, onChange }) => {
  return (
    <>
      <h3>Find contacts by name</h3>
      <input
      className="Input"
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        placeholder="Filter contacts here"
        onChange={onChange}
        value={filterValue}
      />
    </>
  );
};

export default Filter;
