export const Filter = ({ value, onChange }) => {
  return (
    <div>
      <h2> Find name by contacts</h2>
      <input
        type="text"
        value={value}
        onChange={event => onChange(event.target.value)}
      />
    </div>
  );
};
