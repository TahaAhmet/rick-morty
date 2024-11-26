import { useState, useEffect } from 'react';
import CharacterGrid from '../components/CharacterGrid';
import CharacterDetails from '../components/CharacterDetail';
import SearchBar from '../components/SearchBar';
import { CharacterService } from '../CharacterService';

const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); 

  const characterService = new CharacterService() 
  const fetchCharacters = async (query = '') => {
    setCharacters([]);
    setLoading(true);
    setError(''); 
    try {
      const response = await characterService.getCharacters(query)
      if (response && response.length>0){
        setCharacters(response);
      } 
      else{
        setError("No character found. Please enter a different name.");
      }
      
    } catch (err) {
      console.error(err);
      setError('An error occurred, please try again.'); 
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div className="homepage">
      <SearchBar onSearch={(query) => fetchCharacters(query)} />
      <div className="content">
        {error && <p className="error-message">{error}</p>} 
        <CharacterGrid characters={characters} onSelect={setSelectedCharacter} />
        <CharacterDetails character={selectedCharacter} />
      </div>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default HomePage;
