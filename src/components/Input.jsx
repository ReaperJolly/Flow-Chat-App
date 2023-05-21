import '../styles/input.css';
import { FormField } from "./FormField";

export function Input(props) {
    function handleChange(event) {
        props.onChange(event.target.value);
    }

    return (
        <FormField>
            <label>{props.label}</label>
            <input type={props.type} placeholder={props.placeholder} onChange={handleChange} value={props.value} />
        </FormField>
    );
};
