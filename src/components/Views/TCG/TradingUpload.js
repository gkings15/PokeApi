import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import { Api } from '../../lib/ApiTCG';

export default class TradingUpload extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: [],
        }
    }

    callBack = () => {
        const { onCall } = this.props
        const { cards } = this.state

        if (typeof onCall === "function") {
            onCall(cards)
        }
    }

    fetchCards = async () => {
        const { data: dataAux } = await Api.getCards();
        const cards = dataAux.cards || [];

        this.setState({ cards }, this.callBack)
    }

    render() {
        return (
            <>
                    <Button onClick={this.fetchCards} variant="contained" size="small" color="secondary">
                        Cargar la data de Trading Card Game
                    </Button>
            </>
        )
    }
}
