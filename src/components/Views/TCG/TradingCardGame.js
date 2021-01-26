import React, { Component } from 'react';
import TradingData from './TradingData';
import TradingUpload from './TradingUpload';
import TradingFilters from './TradingFilters';

export default class TradingCardGame extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: {},
            superType: '',
            totalCards: {},
        }
    }

    onChangeSuperType = ({ target: { value } }) => this.fecthDataBySuperType(value);

    fecthDataBySuperType = (value) => {
        const { totalCards } = this.state;

        if (value !== '') {
            const resultado = totalCards.filter(
                card => card.supertype === value)
            this.setState({ superType: value, cards: resultado })
        } else {
            this.setState({ superType: value, cards: totalCards })
        }
    }

    filtrosCards = (cards) => {
        this.setState({ cards, totalCards: cards })
    }

    render() {
        const { cards, superType } = this.state;
        return (
            <>
                <TradingUpload onCall={this.filtrosCards} />
                <TradingFilters superType={superType} onChange={this.onChangeSuperType} cards={cards} />
                <TradingData cards={cards} />
            </>
        )
    }
}