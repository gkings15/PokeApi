import React, { Component } from 'react';
import PokeFilters from '../Pokedex/PokeFilters';
import DataGrid from '../DataGrid';

export default class Pokedex extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gridData: [],
        }
    }

    filtrosPokemon = (pokemones, filtroNombre) => {
        let result = []

        if (filtroNombre !== '') {
            result = pokemones.filter(function (element) {
                return element.name === filtroNombre;
            });
        } else {
            result = pokemones
        }

        this.setState({
            gridData: result,
        })

    }

    render() {
        const { gridData } = this.state;
        const nomenclatura = gridData.length === 1 ? 'Pokémon' : 'Pokémones';
        return (
            <>
                <PokeFilters onCall={this.filtrosPokemon} />
                <div>{
                    gridData.length ? `Se han encontrado ${gridData.length} ${nomenclatura}` : null
                    }</div>
                <DataGrid datosGrilla={gridData}/>
            </>
        )
    }
}