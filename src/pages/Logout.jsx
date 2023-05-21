import { useNavigate } from "react-router-dom";
import Checkmark from '../library/logos/checkmark.png';
import Goodbye from '../library/logos/goodbye.png';
import '../styles/logout.css';

export function Logout() {

    const navigate = useNavigate();

    function handleLogin() {
        navigate('/');
    }

    return (
        <div className="box">
            <div className="logout">
                <img src={Goodbye} alt="goodbye-logo"></img>
                <h2>You decied to call it a day. See you soon!</h2>
                <h3>Logout succesfull</h3>
                <span><img src={Checkmark} alt="checkmark"></img></span>
                <button onClick={handleLogin}>Back to the Login</button>
            </div>
            <footer>FlowCorp &copy;2023</footer>
        </div>
    );
}
