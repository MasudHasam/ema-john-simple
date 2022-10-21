import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';

const Login = () => {
    const { signUserAccount, signInUserWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    const handelUserSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        signUserAccount(email, password)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error));
    }

    const handelGoogleSignin = () => {
        signInUserWithGoogle()
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error));
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left mb-2">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handelUserSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to='/signup' className="label-text-alt link link-hover">Don't have accoutn</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div onClick={handelGoogleSignin} className="form-control mt-2">
                            <button className="btn btn-info">Sign In With Google.</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;