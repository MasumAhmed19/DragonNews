import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {

  const {setUser, userLogin} = useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate()
  console.log(location)

  const handleSubmit = (e)=>{
    e.preventDefault();

    const form = e.target
    const email = form.email.value
    const password = form.password.value
    userLogin(email, password)
    .then(res => {
      setUser(res.user);
      navigate(location?.state ? location.state : "/")
    })
    .catch(err =>{
      alert(err.code)
    })
    // console.log({email, password})
  }
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit} className="card-body">
            <h2 className="text-2xl font-semibold text-center">Login your account</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name='email'
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name='password'
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a
                href="#"
                className="label-text-alt link link-hover"
              >
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral">Login</button>
          </div>

          <p>Don't have account? <Link className="text-red-400" to='/auth/register'>Register</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
