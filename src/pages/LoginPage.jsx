import { useState } from "react";

const LoginPage = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({email:'', password:''}); 
    const [currentStatus, setCurrentStatus] = useState('login');
    const [confirmPassword, setConfirmPassword] = useState ('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors({email:'', password:''});


    if (!/^[a-zA-Z0-9.! # \$ % & ' * + - / = ? ^ _  { | } ~.]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)) {
        setErrors({...errors, email:'Email must use lowercase letters, uppercase letters, and special characters (! @ # $ %) only'})
        console.log('Email must use lowercase letters, uppercase letters, and special characters (! @ # $ %) only');
    } else if ( password.length < 8) {
        setErrors({...errors, password:'Password must be at least 8 characters long'})
        console.log('Password must be at least 8 characters long.');
    } else if (!/[A-Z]/.test(password)) {
        setErrors({...errors, password:'Password must contain at least one uppercase letter.'})
        console.log('Password must contain at least one uppercase letter.');
    } else if (!/[a-z]/.test(password)) {
        setErrors({...errors, password:'Password must contain at least one lowercase letter.'})
        console.log('Password must contain at least one lowercase letter.');    
    } else if (!/[0-9]/.test(password)) {
        setErrors({...errors, password:'Password must contain at least one number.'})
        console.log('Password must contain at least one number.');
    } else if (!/[!@#$%]/.test(password)) {
        setErrors({...errors, password:'Password must contain at least one special character, ! @ # $ % .'})
        console.log('Password must contain at least one special character.');
    }   else {
        props.onLogin(true);
        console.log('Password is valid!');
    }
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
    {errors.email && <span>{errors.email}</span>}
    </label>
    <br/>
    <label>
    Password:
    <input type="password" value={password}
    onChange={(e) => setPassword(e.target.value)}
    />
    {errors.password && <span>{errors.password}</span>}
    </label>
    <button type="submit">Open Vault</button>
    </form>
    </div>
);
}

export default LoginPage;