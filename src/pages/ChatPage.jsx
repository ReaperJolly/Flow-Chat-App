import { useContext } from "react";
import { useState } from "react";
import { Message } from "../components/Message";
import { MessageForm } from "../components/MessageForm";
import { AppContext } from "../contexts/AppContext";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import '../styles/chatpage.css';

export function ChatPage() {
    const [ messages, setMessages] = useState([]);
    const [ client, setClient ] = useState(null);
    const [ chatRoom, setChatRoom ] = useState(null);
    const [ ready, setReady ] = useState(false);
    const context = useContext(AppContext);
    const navigate = useNavigate();

    function handleSubmit(message) { 
        client.publish({
            room: `Flow-Room`,
            message: message, 
          });
    }

    function handleSignOut() {
        context.setUsername('');
        navigate('/logout');
    }

    const messageComponents = messages.map((message) => {
        return <Message
            key={message.id}
            avatarIndex={message.author.avatarIndex}
            author={message.author.username}
            text={message.text}
        />;
    });

    useEffect(() => {
    const drone = new window.Scaledrone(`vub0f3uCsHCLtJgL`);

      console.log(drone);
      drone.on(`open`, (error) => {
        if (error) {
          console.log(error);
        } else {
          const room = drone.subscribe(`Flow-Room`);
          
          setClient(drone);
          setChatRoom(room);

        }
      });    
    }, []);

    useEffect(() => {
        if (chatRoom !== null && !ready) {
            chatRoom.on(`data`, (data) => {
                setMessages((messages) => {
                 return [...messages, data ];
                }); 
            });

            setReady(true);
        }
    }, [chatRoom, ready]);


    if (!context.isSignedIn) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="box">
            <div className="chat">
                <div className="header-container">
                    <h2>Welcome, {context.username} </h2>
                    <button type="button" onClick={handleSignOut}>Logout</button>
                </div>
                <div className="message-list">
                    {messageComponents}
                </div>
                <MessageForm onSubmit={handleSubmit}
                    username={context.username}
                    avatarIndex={context.avatarIndex}
                />
            </div>  
        </div>
    );
};
