import { useState } from "react";
import "./styles.css";
import { TextInput } from "../../molecules/text-input/TextInput";
import { Button } from "../../atoms/button/Button";

export function LoginForm() {
  const [username, setUsername] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //alert(username);
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <TextInput
          type="text"
          name="username"
          id="username"
          label="Username"
          required={true}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br></br>
        <TextInput
          type="password"
          name="password"
          id="password"
          label="Password"
          required={true}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <div className="btn-center">
          <Button type="submit">Login</Button>
        </div>
      </form>
    </div>
  );
}
