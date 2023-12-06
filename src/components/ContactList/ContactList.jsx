export const ContactList = ({ visibleItems, onDeleteContact }) => {
  return (
    <div>
      <ul>
        {visibleItems.map(contact => (
          <li key={contact.id}>
            {contact.name} : {contact.number}
            <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
