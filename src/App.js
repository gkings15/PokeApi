import './App.css';
import Header from '../src/components/header'; //Toma automaticamente el index
import { AppBar, Tab } from '@material-ui/core';
import { TabPanel, TabContext, TabList } from '@material-ui/lab';
import {useState} from 'react';
import Fetch from './components/Views/Fetch';
import FavoritePokemon from './components/Views/FavoritePokemon';
import Pokedex from './components/Views/Pokedex/Pokedex';
import TradingCardGame from './components/Views/TCG/TradingCardGame';

function App() {

  const [tabIndex, updateTabIndex] = useState("1");
  
  const onChangeTab = (evento, valor) => updateTabIndex(valor);

  return (
    <>
      <Header />
      <TabContext value={tabIndex}>
        <AppBar position="static">
          <TabList
            onChange={onChangeTab}
            arial-label="Ejemplo Tabs"
          >
            <Tab label="Pokemones" value="1" />
            <Tab label="Favorito" value="2" />
            <Tab label="Pokedex" value="3" />
            <Tab label="Trading Card Game" value="4" />
          </TabList>
        </AppBar>
        <TabPanel value="1">
          <Fetch />
        </TabPanel>
        <TabPanel value="2">
          <FavoritePokemon />
        </TabPanel>
        <TabPanel value="3">
          <Pokedex />
        </TabPanel>
        <TabPanel value="4">
          <TradingCardGame />
        </TabPanel>
      </TabContext>
    </>
  );
}

export default App;
