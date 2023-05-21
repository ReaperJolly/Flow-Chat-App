import '../styles/submit.css';
import { Button } from "./Button";

export function Submit(props) {
    return (
        <div className="submit-form-field">
            <Button type="submit" label={props.label} />
        </div>
    );
}