import CharacterCard from './CharacterCard';

const CharacterGrid = ({ characters, onSelect }) => (
  <div className="character-grid">
    {characters.map((char) => (
      <CharacterCard key={char.id} character={char} onSelect={onSelect} />
    ))}
  </div>
);

export default CharacterGrid;
