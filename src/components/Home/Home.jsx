import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Home = () => {
    const user = useContext(AuthContext)
    console.log(user)
    return (
        <div className='flex justify-center items-center h-screen'>
            <h1 className='text-2xl'>This is Home Page</h1>
        </div>
    );
};

export default Home;