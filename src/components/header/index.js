import React, {Component} from 'react';
import './styles.css';
import IconoPokeApi from '../../assets/pokeapi.png';

class Header extends Component{
    
    render(){
        return(
            <>
                <div className="header">
                    <img alt="Imagen pokeApi" className="icon" src={IconoPokeApi}></img>
                </div>
            </>
        )
    }
}

export default Header; 