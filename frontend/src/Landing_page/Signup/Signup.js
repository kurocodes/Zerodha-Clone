import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Signup() {

  const backendURL = process.env.REACT_APP_BACKEND_URL;
  const dashboardURL = process.env.REACT_APP_DASHBOARD_URL;
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    username: "",
    password: "",
  });

  const { email, username, password } = inputValue;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) => {
    toast.error(err, {
      position: "bottom-right",
    });
  };

  const handleSuccess = (msg) => {
    toast.success(msg, {
      position: "bottom-right",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${backendURL}/signup`,
        {
          ...inputValue,
        }
      );
      const { success, message, token } = response.data;
      if (success) {
        localStorage.setItem("token", token);
        handleSuccess(message);
        navigate("/");
        setTimeout(() => window.location.href = `${dashboardURL}?token=${token}`, 1500);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }

    setInputValue({
      ...inputValue,
      email: "",
      username: "",
      password: "",
    });
  };

  return (
    <div className="container-fuild container-sm mt-5 p-5 single-section">
      <div className="row text-center">
        <h1 className="mt-5" style={{ fontSize: "2.6rem", opacity: "0.9" }}>
          Open a free demat and trading account online
        </h1>
        <p className="mt-3 fs-5 text-muted">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
      </div>

      <div className="row p-5">
        <div className="col-12 col-xl-6">
          <img src="media/images/account_open.svg" />
        </div>

        <div className="col-12 col-xl-6 text-center text-xl-start">
          <h2 className="mt-4" style={{ fontSize: "2.2rem", opacity: "0.9" }}>
            Signup now
          </h2>
          <p className="mt-3 text-muted" style={{ fontSize: "1.1rem" }}>
            Or track your existing application
          </p>

          <form method="POST" onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="email"
                className="form-control rounded-0 fs-5 form-input-box"
                placeholder="Enter your email"
                value={email}
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control rounded-0 fs-5 form-input-box"
                placeholder="Enter username"
                value={username}
                name="username"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control rounded-0 fs-5 form-input-box"
                placeholder="Enter password"
                value={password}
                name="password"
                onChange={handleChange}
              />
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
              <button type="submit" className="btn btn-primary px-5">
                Submit
              </button>
              <div className="mt-2 mt-md-0">
                <span>Don't have an account</span>
                <Link to="/login" className="ms-2">
                  Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
