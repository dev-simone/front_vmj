import { useState } from "react";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

import {
  emailIcon,
  lockIcon,
  manichinoLogin,
  warningIcon,
} from "../assets/images";

const Login = () => {
  const navigate = useNavigate();
  const { setAuthToken } = useAuth();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const notify = (message) => toast.error(message);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/user/login", credentials);
      if (response.status === 200) {
        const authToken = response.headers["auth-token"];
        sessionStorage.setItem("authToken", authToken);
        setAuthToken(authToken);
        navigate("/personal-area");
      }
    } catch (error) {
      console.error("🚀 ~ handleSubmit ~ error:", error.response.data);
      notify(error.response.data);
    }
  };

  return (
    <div className="login-page">
      <div className="login-page--container">
        <form onSubmit={handleSubmit}>
          <h1 className="text-orange">
            Area riser<span className="underline">vata</span>
          </h1>
          <div className="login-input--container">
            <img src={emailIcon} className="login-input--icon" alt="" />
            <input
              type="email"
              defaultValue={credentials.email}
              placeholder="Inserisci email"
              className="login-input"
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
            />
          </div>
          <div className="login-input--container">
            <img src={lockIcon} className="login-input--icon lock" alt="" />
            <input
              type="password"
              defaultValue={credentials.password}
              placeholder="Inserisci password"
              className="login-input"
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            />
          </div>
          <button type="submit" className="login-btn">
            Accedi
          </button>
        </form>
        <Toaster />
        <div className="login-page--disclaimer">
          <div className="manichino-login">
            <img src={manichinoLogin} alt="" />
          </div>
          <div className="disclaimer-text--container">
            <img src={warningIcon} className="warning-icon" alt="" />
            <p>
              Questa schermata di Log-In è riservata al solo personale
              autorizzato!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
