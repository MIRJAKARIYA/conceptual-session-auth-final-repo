import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const {loginUser} = useContext(AuthContext)
 


    const handleLogin = (e) =>{
        e.preventDefault()
 
        const email = e.target.email.value;
        const password = e.target.password.value;
 

        console.log(email,password)
        loginUser(email,password)
    }
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
    </div>
    );
};

export default Login;