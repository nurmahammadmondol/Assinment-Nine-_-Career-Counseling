import { useContext, useRef, useState } from 'react';
import Navbar from '../../Header/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { sixJsonData } from '../../Context/Context';
import { toast } from 'react-toastify';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.config';
import { Helmet } from 'react-helmet';

const Login = () => {
  const { LogInAccount, User, setUser, LogInWithGoogle } =
    useContext(sixJsonData);
  const navigate = useNavigate();
  const [Eye, setEye] = useState(false);
  const EmailRef = useRef();

  const LogInWithEmailAndPassword = e => {
    e.preventDefault();

    const Email = e.target.email.value;
    const Password = e.target.password.value;

    LogInAccount(Email, Password)
      .then(result => {
        toast.success('Your Account Successfully Log In');
        setUser(result.user);
        e.target.reset();
        navigate('/');
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  const handleLogInWithGoogle = () => {
    LogInWithGoogle()
      .then(result => {
        toast.success('Your Account Successfully Log In');
        setUser(result.user);

        navigate('/');
      })
      .catch(error => {
        toast.error(error.message);
      });
  };

  const handlePasswordEye = () => {
    setEye(!Eye);
  };

  const handleForgotPassword = () => {
    // console.log('Forgot Password', EmailRef.current.value);
    const Email = EmailRef.current.value;

    sendPasswordResetEmail(auth, Email).then(() => {
      alert('Forgot your password success, Check your email !');
    });
  };

  return (
    <div>
      <Helmet>
        <title>Success Hub || Login Page</title>
      </Helmet>
      <div className=" bg-cyan-50">
        <Navbar></Navbar>
      </div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="text-center mt-5 w-full p-5">
            <button
              onClick={handleLogInWithGoogle}
              className="btn w-full text-cyan-700 font-extrabold"
            >
              LogIn with Google
            </button>
          </div>

          <div className="divider px-5">OR</div>

          <form onSubmit={LogInWithEmailAndPassword} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                ref={EmailRef}
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={Eye ? 'text' : 'password'}
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <button
                onClick={handlePasswordEye}
                className="absolute right-3 bottom-3"
              >
                {Eye ? (
                  <i class="fa-solid fa-eye-slash"></i>
                ) : (
                  <i class="fa-solid fa-eye"></i>
                )}
              </button>
            </div>

            <div>
              <label onClick={handleForgotPassword} className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-cyan-100 font-bold">Login</button>
            </div>
            <div className="text-end mt-2">
              <h3>
                Don't have an account?
                <Link to="/Registration">
                  <span className="text-cyan-400 ml-2">Sign up</span>
                </Link>
              </h3>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
