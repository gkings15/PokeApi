import React, { Component } from 'react';
import DropDown from '../dropDown';
import Pokemons from './Pokemons';
import { Api } from '../lib/Api';
import DataPokemon from '../cardMedia/index';

export default class Fetch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pokemons: {},
            selectedPokemon: '',
            selectedPokemonData: undefined,
        }
    }

    onPokemonsFetch = (pokemons) => {
        this.setState({ pokemons });
    }

    onChangePokemon = ({ target: { value } }) => this.fecthDataByNamePokemon(value);

    fecthDataByNamePokemon = async (namePokemon) => {
        const { data } = await Api.getPokemonsData(namePokemon)
        if (namePokemon){
            this.fecthDataByIdPokemon(data.id, namePokemon)
        }else{
            this.setState({
                selectedPokemonData: undefined,
                selectedPokemon: '',
            })
        }
    }

    fecthDataByIdPokemon = async (idPokemon, namePokemon) => {
        const { data } = await Api.getPokemonCharacteristics(idPokemon)

        const dataAux ={
            name: namePokemon || '',
            idPokemon: idPokemon || '',
            description: data.descriptions[1] || undefined,
        }

        this.setState({
            selectedPokemonData: dataAux || undefined,
            selectedPokemon: namePokemon || '',
        })
    }

    render() {
        const { pokemons, selectedPokemon, selectedPokemonData } = this.state;
        return (
            <div>
                <Pokemons onCall={this.onPokemonsFetch} />
                <DropDown selected={selectedPokemon} onChange={this.onChangePokemon} pokemons={pokemons} />
                <DataPokemon data={selectedPokemonData} selected={selectedPokemon} />
            </div>

        )
    }
}