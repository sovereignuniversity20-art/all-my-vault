import { useState } from "react";

const LoginPage = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('email:""', 'password:""') 
    const [currentStatus, setCurrentStatus] = useState('login');

    const handleSubmit = (e) => {
        e.preventDefault();

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{5,46}$/.test(email)) {
        setErrors({email:''})
        console.log('Email must use lowercase letters, uppercase letters, and special characters (_%+-) only');
    } else if ( password.length < 8) {
        setErrors({password:''})
        console.log('Password must be at least 8 characters long.');
    } else if (!/[A-Z]/.test(password)) {
        setErrors({password:''})
        console.log('Password must contain at least one uppercase letter.');
    } else if (!/[0-9]/.test(password)) {
        setErrors({password:''})
        console.log('Password must contain at least one number.');
    }

    then (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{5,46}$/) 
        (password.legnth < 8 || !/[A-Z]/.test(password) || !/[0-9]/.test(password))
        props.onLogin(true);
        console.log('Password is valid!');
    };

   
    
    return (
    <div className="login">
    <h1>Login to Acces Your Vault</h1>
    <form onSubmit={handleSubmit}>
    <label>
    Email:
    <input type="email" value={email}
    onChange={(e) => setEmail(e.target.value)}
    />
    </label>
    <br/>
    <label>
    Password:
    <input type="password" value={password}
    onChange={(e) => setPassword(e.target.value)}
    />
    </label>
    <button type="submit">Open Vault</button>
    </form>
    </div>
);
}

export default LoginPage;