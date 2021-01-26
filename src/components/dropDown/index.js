import { FormControl, InputLabel, Select } from '@material-ui/core'
import '../dropDown/style.css'

const DropDown = ({ selected = '', pokemons = {} , onChange = () => {} }) =>Object.entries(pokemons).length
    ?(
        <div className="dropdown">
            <FormControl variant="filled">
                <InputLabel htmlFor="filled-age-native-simple">Pokemones</InputLabel>
                <Select
                    native
                    value={selected}
                    onChange={onChange}
                >
                    <option aria-label="None" value=""></option>
                    {
                        pokemons.results.map(({name,url},index) =>(
                            <option key={`${name}-${index}`} value={name}>{name}</option>
                        ))
                    }
                </Select>
            </FormControl>
        </div>
    )
    :null

export default DropDown;