import "./styles.css";
import { useUserContext } from "./userContext";

export default function App() {
  const { userName, setUserName } = useUserContext();
  setUserName("my");
  return (
    <div className="App">
      <h1>{userName}</h1>
    </div>
  );
}
