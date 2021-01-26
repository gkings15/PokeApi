import { GridList, GridListTile, GridListTileBar, ListSubheader } from '@material-ui/core'
import './TradingDataStyle.css';

const TradingData = ({ cards = [] }) => cards.length
    ? (
        <div >
            <GridList cellHeight={500} className="gridList">
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Cards</ListSubheader>
                </GridListTile>
                {cards.map((tile) => (
                    <GridListTile key={tile.imageUrl} >
                        <img src={tile.imageUrl} alt={tile.name} />
                        <GridListTileBar
                            title={tile.name}
                            subtitle={<span>by: {tile.artist}</span>}
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    )
    : null

export default TradingData;