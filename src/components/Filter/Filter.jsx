import PropTypes from 'prop-types';
import { Label, Input } from "./Filter.styled";
export default function Filter({onChange, value}){
    return (
        <Label>
            Find contacts by name
            <Input type="text" onChange={onChange} value={value} />
        </Label>
    )
    }
Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
}