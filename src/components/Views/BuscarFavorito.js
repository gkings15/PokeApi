import { Button } from '@material-ui/core';
import React, { Component } from 'react';

export default class BuscarFavorito extends Component {
    constructor(props) {
        super(props);

        this.state = {
            favoritePoke: '',
        }
    }

    callBack = () => {
        const { onCall } = this.props
        const { favoritePoke } = this.state

        if (typeof onCall === "function") {
            onCall(favoritePoke)
        }
    }

    FavoritePokemon = () => {
        const favoritePoke = localStorage.getItem('PokeFav') || 'No posee pokemones favoritos';
        this.setState({ favoritePoke }, this.callBack)
    }

    render() {
        return (

            <>
                <Button onClick={this.FavoritePokemon} variant="contained" size="small" color="secondary">
                    Ver tu Pokémon favorito
                </Button>
            </>
        )
    }
}