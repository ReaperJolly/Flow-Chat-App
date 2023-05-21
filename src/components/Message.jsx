import { avatarImages } from "../library/avatar";
import '../styles/message.css';

export function Message(props) {

    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'});

    return (
        <div className="message">
            <img src={avatarImages[props.avatarIndex]} alt={props.author} width={100} height={100} />
            <div className="message-author">{props.author}</div>
            <div className="message-text">{props.text}</div>
            <span className="message-timestamp">{timestamp}</span>
        </div>
    );
}