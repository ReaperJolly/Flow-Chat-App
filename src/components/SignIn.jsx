import { useState } from "react";
import { Avatar } from "./Avatar";
import { Button } from "./Button";
import { FormField } from "./FormField";
import { Input } from "../components/Input";
import '../styles/signin.css';

export function SignIn(props) {
    const [ formState, setFormState ] = useState('');
    const [ avatar, setAvatar ] = useState('');
    const [ password, setPassword ] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        props.onSubmit({
            username: formState,
            avatarIndex: avatar,
        });
    }

    function handleUsernameChange(value) {
        setFormState(value);
    }

    function handlePasswordChange(value) {
        setPassword(value);
    }

    function handleAvatarChange(value) {
        setAvatar(value);
    }

    return (
        <form className="sign-in-form" onSubmit={handleSubmit}>
            <Avatar onChange={handleAvatarChange} />
            <Input
                label= "Username" 
                type="text"
                placeholder="Enter your username"
                onChange={handleUsernameChange}
                value={formState} />
            <Input
                label= "Password" 
                type="password"
                placeholder="******"
                onChange={handlePasswordChange}
                value={password} />
            <FormField>
                <Button type="submit" label="Login" />
            </FormField>
        </form>
    );
}
