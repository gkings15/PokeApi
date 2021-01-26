import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import bulbasaur from '../../assets/bulbasaur.png';
import ivysaur from '../../assets/ivysaur.png';
import venusaur from '../../assets/venusaur.png';
import pokeapi from '../../assets/pokeapi.png';
import charmander from '../../assets/charmander.png';
import charmeleon from '../../assets/charmeleon.png';
import charizard from '../../assets/charizard.png';
import squirtle from '../../assets/squirtle.png';
import wartortle from '../../assets/wartortle.png';
import blastoise from '../../assets/blastoise.png';
import caterpie from '../../assets/caterpie.png';
import metapod from '../../assets/metapod.png';
import butterfree from '../../assets/butterfree.png';
import weedle from '../../assets/weedle.png';
import kakuna from '../../assets/kakuna.png';
import beedrill from '../../assets/beedrill.png';
import pidgey from '../../assets/pidgey.png';
import pidgeotto from '../../assets/pidgeotto.png';
import pidgeot from '../../assets/pidgeot.png';
import rattata from '../../assets/rattata.png';
import raticate from '../../assets/raticate.png';
import { Button, CardActions } from '@material-ui/core';
import './styles.css'

const buscaImagen = (idImagen) => {
    switch (idImagen) {
        case 1: return bulbasaur;
        case 2: return ivysaur;
        case 3: return venusaur;
        case 4: return charmander;
        case 5: return charmeleon;
        case 6: return charizard;
        case 7: return squirtle;
        case 8: return wartortle;
        case 9: return blastoise;
        case 10: return caterpie;
        case 11: return metapod;
        case 12: return butterfree;
        case 13: return weedle;
        case 14: return kakuna;
        case 15: return beedrill;
        case 16: return pidgey;
        case 17: return pidgeotto;
        case 18: return pidgeot;
        case 19: return rattata;
        case 20: return raticate;
        default: return pokeapi;
    }
}

const favorito = (namePokemon) =>{
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem("PokeFav", `Su pokemon favorito es ${namePokemon}`);
    } else {
        console.log(`LocalStorage no disponible`)
    }
}

const DataPokemon = ({ data = [], selected = '' }) => Object.entries(data).length
    ? (
        <Card className="root">
            <CardActionArea >
                <CardMedia
                    className="media"
                    component="img"
                    alt={selected}
                    height="500"
                    width="200"
                    image={buscaImagen(data.idPokemon)}
                    title={selected}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {selected}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {data.description.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
        <Button variant ="contained" size="small" color="primary" onClick={() => favorito(selected)} >
          Favorite
        </Button>
      </CardActions>
        </Card>
    )
    : null

export default DataPokemon;