import { useState } from "react";

function App() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [token, setToken] = useState(
    localStorage.getItem("token")
  );

  const [role, setRole] = useState("");

  const login = () => {

    if (username === "admin" && password === "1234") {

      // Simulated JWT
      const simulatedToken = btoa(
        JSON.stringify({
          userId: 101,
          role: "admin"
        })
      );

      // Store token
      localStorage.setItem("token", simulatedToken);

      // Store token in React state
      setToken(simulatedToken);

      // Show role
      setRole("admin");

    } else {

      alert("Invalid username or password");

    }
  };

  const logout = () => {

    localStorage.removeItem("token");

    setToken(null);
    setRole("");

  };

  return (
    <div>

      {!token ? (

        <div>

          <h1>Login</h1>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <br /><br />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <br /><br />

          <button onClick={login}>
            Login
          </button>

        </div>

      ) : (

        <div>

          <h1>Dashboard</h1>

          <h2>Welcome!</h2>

          <p>Your Role: {role}</p>

          <p>You are logged in.</p>

          <button onClick={logout}>
            Logout
          </button>

        </div>

      )}

    </div>
  );
}

export default App;