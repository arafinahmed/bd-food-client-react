import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { ContextApi } from '../../App';
import { fireBaseLoginWithGoogle } from './fireBaseManager';
import LoginArea from './LoginArea';
import SignUpArea from './SignUpArea';
import './LoginPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGoogle} from '@fortawesome/free-brands-svg-icons'

const element = <FontAwesomeIcon icon={faGoogle} />


const LoginPage = () => {
    const [isNewUser, setIsNewUser] = useState(false);
    const setLoggedInUser = useContext(ContextApi)[1];
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    const loginWithGoogle = () => {
        fireBaseLoginWithGoogle()
            .then(res => {
                console.log(res);
                updateLoginInfo(res, true);
            })
    }
    const updateLoginInfo = (res, redirect) => {
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        }
        else {
            history.replace("/");
        }
    }
    return (
        <div>
            <br/>

            {
                isNewUser ? <SignUpArea updateLoginInfo={updateLoginInfo} key="SignUpArea"></SignUpArea> : <LoginArea updateLoginInfo={updateLoginInfo} key="LoginArea"></LoginArea>
            }
            <br />
            <div className="d-flex justify-content-center">
                <div className="login-area text-center">
                    {
                        isNewUser ?
                            <>
                                <span>Already Have Account? </span>
                                <button className="signup-signin" onClick={() => setIsNewUser(!isNewUser)}>Sign in</button>
                            </>
                            :
                            <>
                                <span>Don't Have Account? </span>
                                <button className="signup-signin" onClick={() => setIsNewUser(!isNewUser)}>Sign up</button>
                            </>
                    }
                </div>

            </div>
            <br/>
            <p className="text-center">------------------or------------------</p>
            <div className="d-flex justify-content-center">
                <button className="signup-signin" onClick={loginWithGoogle}>{element} Login with google</button>
            </div>

        </div>
    );
};

export default LoginPage;