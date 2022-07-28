import React  from 'react';
import RegistrationForm from '../components/Registration';
import LoginForm from '../components/Login';

const SignIn = () => {
    return (
        <div>
            <div >
            <style>{'body { background-color: lightpurple; }'}</style>
                <h1 >Hamachi</h1>
            </div>
            <div className="row">
                <div className="col">
                    <RegistrationForm />
                </div>
                <div className="col">
                    <LoginForm />
                </div>
            </div>

        </div>
    );
};


export default SignIn;