import Axios from 'axios';

const BaseApi = Axios.create({ baseURL: 'https://api.pokemontcg.io/v1/cards'});

export const Api = {
    getCards: () =>
        BaseApi({
            method: 'GET',
            url: '?setCode=base1',
        }),
    getCardsById: (id) =>
        BaseApi({
            method: 'GET',
            url: `/${id}`,
        }),
}