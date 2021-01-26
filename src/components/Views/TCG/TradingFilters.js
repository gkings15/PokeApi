import { FormControl, FormHelperText, NativeSelect } from '@material-ui/core'
import './TradingFilters.css';
import {anyFilters} from '../../constants/index';

const TradingFilters = ({ superType = '', cards = {}, onChange = () => { } }) => cards.length
    ? (
        <div >
            <FormControl margin="normal" >
                <div className="divTop">
                    <NativeSelect
                    value={superType}
                    onChange={onChange}
                    name="superType"
                    inputProps={{ 'aria-label': 'Carta' }}
                >

                    {
                        anyFilters.map(({_id,title},index)=>(
                            <option  key={`${title}-${index}`} value={_id}>{title}</option>
                        ))
                    }
                    
                    </NativeSelect>
                    <FormHelperText>Seleccione un tipo de carta</FormHelperText>
                    
                </div>
            </FormControl>   
        </div>
    )
    : null

export default TradingFilters;