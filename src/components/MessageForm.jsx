import { useState } from "react";
import { Input } from "../components/Input";
import { Submit } from "../components/Submit";
import '../styles/messageform.css';

export function MessageForm(props) {
    const [ formState, setFormState ] = useState('');
    const [ timestamp, setTimestamp ] = useState('');

    function handleChange(message) {
        setFormState(message);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setFormState('');
        props.onSubmit({
            id: Date.now(),
            author: {
                username: props.username,
                avatarIndex: props.avatarIndex,
            },
            text: formState,
        });

        setTimestamp(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'}));
    }

    return (
        <form className="message-form" onSubmit={handleSubmit}>
            <Input label= "Message: "
                type="text"
                value={formState}
                onChange={handleChange}
                placeholder="Type something..."
            />
            <Submit label="Send" />
            {timestamp && <span className="message-form-timestamp">{timestamp}</span>}
        </form>
    );
}