import { useState } from "react";

const LoginPage = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({email:'', password:'', name:'', confirmPassword:''}); 
    const [currentStatus, setCurrentStatus] = useState('login');
    const [confirmPassword, setConfirmPassword] = useState ('');
   

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors({email:'', password:'', confirmPassword:'', name:''});


    if (!/^[a-zA-Z0-9.! # \$ % & ' * + - / = ? ^ _  { | } ~.]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)) {
        setErrors({...errors, email:'Please enter a valid email address'})
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
    } else if (currentStatus === 'signup' && !name) {
        setErrors({...errors, name:"Name field can not be left empty"}); 
    } else if (currentStatus === 'signup' &&  password !== confirmPassword) {
        setErrors({...errors, confirmPassword:"Passwords do not match, please re-enter."});
    } else {
        props.onLogin({
            name: currentStatus === 'signup' ? name: email, email: email});
        console.log('Password is valid!');
    }
    };

   
    
    return (
    <div className="login">
    <h1 className="title">All My Vault</h1>
    <h4>Enter Your Email and Password to Access Vault</h4>
    <form onSubmit={handleSubmit}>
    {currentStatus === 'signup' && (
        <div className="name">
             <label>
                First and Last Name:
            <input type="text" value={name}
            onChange={(e) => setName(e.target.value)}  />
            {errors.name && <span>{errors.name}</span>}
            </label>
        </div> 
    )} 
        <div>
            <label className="email">
                Email:
                <input type="email" value={email}
                 onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <span>{errors.email}</span>}
            </label>
        </div>
      
        <div className="pass">
            <label>
            Password:
            <input type="password" value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <span>{errors.password}</span>}
            </label>
        </div>

        <div className="pass-confirm">
            {currentStatus === 'signup' && (
        <label>
        Confirm Password:
        <input type="password" value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}  />
        {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
        </label>
        )} 
        </div>
    
        <div className="unlock-create">
            <button className="button" type="submit">{currentStatus === 
            'signup' ? "Create Vault" : "Unlock Vault"}</button>
        </div>
    
        <div className="login-signup">
            <button className="button" type="button" onClick={() => currentStatus === 'login' ? setCurrentStatus('signup') : 
            setCurrentStatus ('login')}>{currentStatus === 'signup' ? "Already have an account? Log in here" : 
            "Sign up for an account"}</button>
        </div>
    </form>
    </div>
);
}

export default LoginPage;