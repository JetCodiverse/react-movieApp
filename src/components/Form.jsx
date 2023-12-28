const Form = ({ handleFormSubmit, searchTerm, setSearchTerm }) => {
  return (
    <form id="form" onSubmit={handleFormSubmit}>
      <input
        type="text"
        id="search"
        className="search"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </form>
  );
};

export default Form;
