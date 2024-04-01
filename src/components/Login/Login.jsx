import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const {loginUser,googleLogin,setUser,facebookLogin,user} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)


    const handleLogin = (e) =>{
        e.preventDefault()
 
        const email = e.target.email.value;
        const password = e.target.password.value;
 

        console.log(email,password)
        loginUser(email,password)
    }
    const handleGoogleLogin = () =>{
        googleLogin()
        .then(result =>{
            setUser(result.user)
            navigate(location.state)
        })
    }
    const handleFacebookLogin = () =>{
        facebookLogin()
        .then(result =>{setUser(result.user)})
    }

    useEffect(()=>{
        if(user){
            navigate(location.state)
        }
    },[user])
    return (
        <div className='w-[40%] mx-auto min-w[500px] border-2 border-red-500 p-2 rounded-xl'>
        <form onSubmit={handleLogin}>

            <div>
                <p>Email</p>
                <input name='email' type="text" placeholder="Type here" className="input input-bordered w-full" />
            </div>
            <div>
                <p>Password</p>
                <input name='password' type="text" placeholder="Type here" className="input input-bordered w-full " />
            </div>
            <button type='submit' className='btn btn-primary w-full'>Register</button>

        </form>
        <button onClick={handleGoogleLogin} className='btn btn-secondary'>Google login</button>
        <button onClick={handleFacebookLogin} className='btn btn-secondary'>Facebook login</button>
    </div>
    );
};

export default Login;