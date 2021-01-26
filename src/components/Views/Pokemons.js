import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { Api } from '../lib/Api';

export default class Pokemons extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pokemons: {},
        }
    }

    callBack = () => {
        const { onCall } = this.props;
        const { pokemons } = this.state;

        if (typeof onCall === 'function') {
            onCall(pokemons);
        }
    }

    fetchPokemons = async () => {
        const { data: pokemons } = await Api.getPokemons()
        this.setState({ pokemons }, this.callBack)
    }

    render() {
        return (
            <div>
                <Button onClick={this.fetchPokemons} variant="contained" color="secondary">
                    Buscar pokemones
            </Button>
            </div>
        )
    }
}