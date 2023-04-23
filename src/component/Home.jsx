import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const Home = () => {
    const {user, createUser} = useContext(AuthContext);
    console.log(user)
    return (
        <div>
            <h1>This is home: {user && <span> {user.displayName} </span> } </h1>
        </div>
    );
};

export default Home;