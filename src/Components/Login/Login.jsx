import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import animLogin from '../../Animation/106680-login-and-sign-up.json'
import Lottie from 'lottie-react'

// import useTitle from '../../Hooks/useTitle';
import { AuthContext } from '../../Providers/AuthProvider';






const Login = () => {
    // useTitle('login')
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'
    const [showPassword, setShowPassword] = useState(false);
    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };
    const navigate = useNavigate()
    const { signInByGoogle, signIn } = useContext(AuthContext)
    const [error, setError] = useState(null)
    const handleGoogleSignIn = () => {
        signInByGoogle()
            .then(result => {
                const LUser = result.user;
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
            })
    }

    // signin with email and password
    const handleSignInWithEmail = (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                navigate(from, { replace: true })

            })
            .catch(error => {
                setError(error.message)

            })
    }

    return (
        <div>

            <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
                <div className="md:w-1/3 max-w-sm ">
                    <Lottie animationData={animLogin}></Lottie>
                </div>
                <div className="md:w-1/3 max-w-sm border-sky-600 border-2 p-4 rounded-lg">
                    <form onSubmit={handleSignInWithEmail}>
                        <div className="text-center md:text-left">
                            <label className="mr-1">Sign in with</label>

                            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary mt-4 btn-block" type='button'><FaGoogle className='ml-2 mr-2'></FaGoogle>Google</button>

                        </div>
                        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                            <p className="m-4 mb-0 text-center font-semibold text-slate-500 border-2 p-2 rounded-full h-12 w-12">Or</p>
                        </div>
                        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" type="email" placeholder="Email Address" name='email' required />
                        <div className='relative'>
                            <button className='absolute right-4 bottom-2' type="button" onClick={handleTogglePassword}>
                                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                            </button>
                            <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type={showPassword ? 'text' : 'password'} placeholder="Password" name='password' required />
                        </div>


                        <div className="text-center md:text-left">
                            <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Login</button>
                        </div>
                        <div>
                            <h1 className='text-sm text-rose-700 font-semibold'>{error}</h1>
                        </div>
                        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
                            Don't have an account? <Link to='/register' className="text-blue-950 font-bold hover:underline hover:underline-offset-4">Register</Link>
                        </div>
                    </form>

                </div>
            </section>

        </div>
    );
};

export default Login;