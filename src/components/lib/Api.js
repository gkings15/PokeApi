import Axios from 'axios';

const BaseApi = Axios.create({ baseURL: 'https://pokeapi.co/api/v2' });

export const Api = {
    getPokemons: () =>
        BaseApi({
            method: 'GET',
            url: '/pokemon',
        }),
    getPokemonsData: (namePokemon) =>
        BaseApi({
            method: 'GET',
            url: `/pokemon/${namePokemon}`,
        }),
    getPokemonCharacteristics: (idPokemon) =>
        BaseApi({
            metho: 'GET',
            url: `/characteristic/${idPokemon}`
        }),
}