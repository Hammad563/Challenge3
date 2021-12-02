import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../components/layout';
import { LoginAction } from '../../store/actions/authActions';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';


const Login = () => {

    // redux hooks
    const dispatch = useDispatch();
    const {loginErrors} = useSelector(state => state.AuthReducer)

    // inital states
    const [state, setState] = useState( {
        email: '',
        password: ''
    })
    // handling inputs fucntion
    const handleInputs = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    // userLogin actions
    const userLogin = (e) => {
        e.preventDefault();
        dispatch(LoginAction(state))
    };
    // display validation errors
    useEffect( () => {
        loginErrors.map( (error1) => toast.error(error1.msg))

    }, [loginErrors])

    return (
        <>
        {/* Using Toaster to display validation errors*/}
           <Layout>
           <Toaster position="top-center" reverseOrder={false} toastOptions={{
            style: {
             fontSize: "12px"
            },
            }} />
            {/* Login Form */}
           <div className='container2'>
                <div className='account'>
                <div className='title1'>
                   Log In 
                </div>
                    <div className='account__section'>
                        <form onSubmit={userLogin}>
                           
                            <div className='group'>
                                <input className='group__control' name='email' value={state.email} onChange={handleInputs} type="email" placeholder='Enter your email'></input>
                            </div>
                            <div className='group'>
                                <input className='group__control' name='password' value={state.password} onChange={handleInputs} type="password" placeholder='Enter your password'></input>
                            </div>
                            <div className='forgotPassword'>
                               <Link to='/forgetPassword'> Forgot Password?</Link>
                            </div>
                            <div className='group'>
                                <input className='btn2 btn-default btn-block' type="submit" value='Log In' ></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
           </Layout>
        </>
    )
}
export default Login ;
