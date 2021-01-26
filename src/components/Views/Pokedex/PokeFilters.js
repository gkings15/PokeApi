import { Button, TextField } from '@material-ui/core';
import React, { Component } from 'react';
import { Api } from '../../lib/Api';

export default class PokeFilters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemones: [],
      filtroNombre: '',
    }
  }

  callBack = () =>{
    const {onCall} = this.props
    const {pokemones,filtroNombre} = this.state

    if (typeof onCall === "function"){
      onCall(pokemones,filtroNombre)
    }
  }

  fetchPokemones = async () => {
    const { data: dataAux } = await Api.getPokemons();
    const pokemones = dataAux.results || [];
    this.setState({ pokemones },this.callBack)
  }

  someHandlerFunction = (event) =>{
    this.setState({filtroNombre: event})
  }

  render() {
    return (
      <>
        <TextField onChange={(event) => this.someHandlerFunction(event.target.value)}  id="standard-basic" label="Nombre del pokemon" />
        <Button onClick={this.fetchPokemones} variant="contained" size="small" color="secondary">
          Buscar
        </Button>
      </>
    )
  }
}