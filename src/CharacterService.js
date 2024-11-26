const API_URL = 'https://rickandmortyapi.com/api/character';

export class CharacterService {
    async getCharacters(query = '') {
        const url = `${API_URL}?name=${query}`;
        const response = await fetch(url);
        const data = await response.json();
        return data.results
    }
}