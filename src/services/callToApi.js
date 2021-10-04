const callToApi = () => {
  return fetch(`https://rickandmortyapi.com/api/character/`)
    .then((response) => response.json())
    .then((json) => {
      const characters = json.results.map((data) => {
        return {
          name: data.name,
          species: data.species,
          id: data.id,
          img: data.image,
          status: data.status,
          episode: data.episode.length,
          planet: data.origin.name,
        };
      });
      console.log(characters);

      return characters;
    });
};

export default callToApi;
