import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

export default function LoginComponent() {
    const [username, setUsername] = useState("Patrick");
    const [password, setPassword] = useState("1234");
    const [hasLoginFailed, setHasLoginFailed] = useState(false);
    let history = useHistory();

    const loginClicked = () => {
        if (username === "Patrick" && password === "1234") {
            console.log("Success!");
            history.push(`/welcome/${username}`);
        } else {
            setHasLoginFailed(true);
            console.log("Failed!");
        }
        console.log(`Username: ${username}, Password: ${password}`);
    }

    return (
        <div>
                {hasLoginFailed && <div>Invalid Credentials</div>}
            UserName: <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            Password: <input type="password" name="password" value={password} onChange = {(e) => setPassword(e.target.value)}/>
            <button onClick={loginClicked}>Login</button>
        </div>

    )
}