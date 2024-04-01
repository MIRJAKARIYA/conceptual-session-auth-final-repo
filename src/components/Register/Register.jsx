import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Register = () => {
    const {registerUser} = useContext(AuthContext)

    const handleRegister = (e) =>{
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        console.log(name,photo,email,password,confirmPassword)
        registerUser(email,password)
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
                <div>
                    <p>Password</p>
                    <input name='password' type="text" placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div>
                    <p>Confirm password</p>
                    <input name='confirmPassword' type="text" placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <button type='submit' className='btn btn-primary w-full'>Register</button>
            </form>
        </div>
    );
};

export default Register;