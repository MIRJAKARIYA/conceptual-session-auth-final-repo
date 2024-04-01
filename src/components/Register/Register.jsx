import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Register = () => {
    const {registerUser,setUser} = useContext(AuthContext)
    const [error,setError] = useState("")
    const [emailError,setEmailError] = useState("")

    const handleRegister = (e) =>{
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
    
        const confirmPassword = e.target.confirmPassword.value;
        
        if(!/@gmail\.com$/.test(email)){
            setEmailError("Email must end with @gmail.com")
            return
        }

        if(password.length<6){
            console.log("pass")
            setError("Password must be 6 characters")
            return
        }
        if(password !== confirmPassword){
            setError("Passwords didn't match")
            return
        }
        if(!/\d{2,}$/.test(password)){
            setError("Password must end with at least 2 numbers")
            return
        }
        if(!/[@#%^&*]/.test(password)){
            setError("Please add a special character like @,#,%,^,&,*")
            return
        }
        
    
        setError('')
        setEmailError("")

        console.log(name,photo,email,password,confirmPassword)
        registerUser(email,password)
        .then(result=>{
            setUser(result.user)
        })
        .catch(error=> setError(error.message))
    }
    return (
        <div className='w-[40%] mx-auto min-w[500px] border-2 border-red-500 p-2 rounded-xl'>
            <form onSubmit={handleRegister}>
                <div>
                    <p>Name</p>
                    <input name='name' type="text" placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <div>
                    <p>Photo</p>
                    <input name='photo' type="text" placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <div>
                    <p>Email</p>
                    <input name='email' type="text" placeholder="Type here" className="input input-bordered w-full" />
                </div>
                {emailError && <small className='text-red-500'>{emailError}</small>}
                <div>
                    <p>Password</p>
                    <input name='password' type="text" placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div>
                    <p>Confirm password</p>
                    <input name='confirmPassword' type="text" placeholder="Type here" className="input input-bordered w-full " />
                </div>
                {
                    error && <small className='text-red-800'>{error}</small>
                }
                <button type='submit' className='btn btn-primary w-full'>Register</button>
            </form>
        </div>
    );
};

export default Register;