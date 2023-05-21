import { Login } from "./pages/Login";
import { ChatPage } from "./pages/ChatPage";
import { Logout  } from "./pages/Logout";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./contexts/AppContext";

function App() {
  const context = useContext(AppContext);

  if (context.error !== null) {
    return (
      <div>
        <h1>Error!</h1>
        <div>Something went wrong: {context.error.toString()}</div>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/">
        <Route index element={<Login />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/logout" element={<Logout />} />
      </Route>
    </Routes>
  );
}

export default App;
