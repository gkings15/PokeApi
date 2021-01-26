import React, { Component } from 'react';
import BuscarFavorito from './BuscarFavorito';

export default class FavoritePokemon extends Component {
    constructor(props) {
        super(props);

        this.state = {
            favoritePoke: '',
        }
    }

    busquedaFav = (favoritePoke) => {
        this.setState({ favoritePoke })
    }

    render() {
        const { favoritePoke } = this.state;
        return (
            <>
                <BuscarFavorito onCall={this.busquedaFav} />
                <div>{favoritePoke}</div>
            </>
        )
    }
}