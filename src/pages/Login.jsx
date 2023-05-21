import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { SignIn } from "../components/SignIn";
import { AppContext } from "../contexts/AppContext";
import Logo from '../library/logos/flow.png';
import '../styles/login.css';

export function Login() {
    const context = useContext(AppContext);

    function handleSubmit(formData) {
        context.setUsername(formData.username);
        context.setPasword(formData.password);
        context.setAvatarIndex(formData.avatarIndex);
    }

    if (context.isSignedIn) {
        return <Navigate to="/chat" replace />;
    }

    return (
        <div className="box">
            <div className="login">
                <h1>Welcome to the Flow</h1>
                <p className="quote"><q>May the Flow be with you</q>  ~ Yoda</p>
                <img src={Logo} alt="logo"></img>
                <div className="card">
                    <SignIn onSubmit={handleSubmit} />
                </div>
                <p>Don`t have an account? <Link to="/">Register</Link></p>
                <footer>FlowCorp &copy;2023</footer>
            </div>
        </div>
    );
};
