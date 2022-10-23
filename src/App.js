import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import User from "./components/user/User";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    let fetchData = async () => {
      let result = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default App;
