import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../Header/Navbar';
import { useContext, useState } from 'react';
import { sixJsonData } from '../../Context/Context';
import { toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.config';
import { Helmet } from 'react-helmet';

const Registration = () => {
  const { setUser, CreateNewUser, LogInWithGoogle } = useContext(sixJsonData);
  const navigate = useNavigate();
  const [Eye, setEye] = useState(false);

  const handleSingUpWithEmailAndPassword = e => {
    e.preventDefault();

    const Name = e.target.name.value;
    const Photo = e.target.photoUrl.value;
    const Email = e.target.email.value;
    const Password = e.target.password.value;
    const CheckBox = e.target.checkbox.checked;

    const UserProfile = {
      displayName: Name,
      photoURL: Photo,
    };

    // console.log(Name, Email, Password, CheckBox);
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (!passwordRegex.test(Password)) {
      toast.warn(
        'Password-- 👉Must have an Uppercase, Lowercase letter, Number & at least 6 character'
      );
      return;
    }

    if (!CheckBox) {
      toast.warn(
        'Accept our all terms and conditions (Fill in the check box) !'
      );
      return;
    }
    CreateNewUser(Email, Password)
      .then(result => {
        // console.log(result.user);
        setUser(result.user);
        e.target.reset();
        toast.success('Your account create success !');
        navigate('/');

        updateProfile(auth.currentUser, UserProfile)
          .then(() => {
            // console.log('Update User Profile');
          })
          .catch(error => {
            // console.log('ERROR', error.message);
          });
      })
      .catch(error => {
        toast.error(error.message);
      });
  };

  const handleLogInWithGoogle = () => {
    LogInWithGoogle()
      .then(result => {
        setUser(result.user);
        toast.success('Your account create success !');
        navigate('/');
      })
      .catch(error => {
        alert(error.message);
      });
  };

  const handlePasswordEye = () => {
    setEye(!Eye);
  };

  return (
    <div>
      <Helmet>
        <title>Success Hub || Registration</title>
      </Helmet>
      <div className=" bg-cyan-50">
        <Navbar></Navbar>
      </div>

      <div className="hero bg-base-200 min-h-screen py-10">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="text-center mt-5 w-full p-5">
            <button
              onClick={handleLogInWithGoogle}
              className="btn w-full text-cyan-700 font-extrabold"
            >
              SignUp with Google
            </button>
          </div>

          <div className="divider px-5">OR</div>

          <form
            onSubmit={handleSingUpWithEmailAndPassword}
            className="card-body"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                // required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Photo</span>
              </label>
              <input
                type="text"
                name="photoUrl"
                placeholder="photo url"
                className="input input-bordered"
                // required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
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
                name="password"
                placeholder="password"
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

            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text">
                  Accept our all terms and conditions
                </span>
                <input
                  type="checkbox"
                  name="checkbox"
                  // defaultChecked
                  className="checkbox checkbox-accent"
                />
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-cyan-100 font-bold">
                Registration
              </button>
            </div>
            <div className="text-end mt-2">
              <h3>
                Have an account?
                <Link to="/Login">
                  <span className="text-cyan-400 ml-2">Log in</span>
                </Link>
              </h3>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
