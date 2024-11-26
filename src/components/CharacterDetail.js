const CharacterDetails = ({ character }) => {
    if (!character) {
      return <p>Select a character to see the details</p>
    }
  
    const { name, image, gender, location, origin, species, status } = character;
  
    return (
      <div className="character-details">
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <div className={`status ${status.toLowerCase()}`}>{status}</div>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Location:</strong> {location.name}</p>
        <p><strong>Origin:</strong>{origin.name}</p>
        <p><strong>Species:</strong> {species}</p>
      </div>
    );
  };
  
  export default CharacterDetails;
  