const CharacterCard = ({ character, onSelect }) => {
    const { name, image, location, status } = character;
  
    return (
      <div className="character-card" onClick={() => onSelect(character)}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>Last Location: {location.name}</p>
        <div className={`status ${status.toLowerCase()}`}>{status}</div>
      </div>
    );
  };
  
  export default CharacterCard;
  