import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { changeLoginOrRegister } from '@redux/reducers/loginOrRegister/loginRegister.reducer';
import '@pages/auth/login/Login.scss';
import styled from 'styled-components';
import authBackgroundImg from '@assets/images/authbackgroundImg.png';
import { authService } from '@services/api/auth/auth.service';

const initialDefaultFields = {
  email: '',
  password: '',
};

const AuthBackground = styled.div`
  background-image: url(${authBackgroundImg});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
  width: 100vw;
  height: calc(100vh - 6.6vh);
`;

const Login = () => {
  const [inputFields, setInputFields] = useState(initialDefaultFields);
  const [btnColor, _setBtnColor] = useState('btnDisabled');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { email, password } = inputFields;
  const dispatch = useDispatch();

  const handleGoBackClick = () => {
    navigate('/');
  };

  const handleChangeToRegister = () => {
    navigate('/in/auth/register');
  };
  const handleForgotPassword = () => {
    navigate('/in/auth/password-reset');
  };

  const handleLoginInputChange = (event) => {
    console.log('target: ', event.target);
    const { name, value } = event.target;
    setInputFields({ ...inputFields, [name]: value });
  };

  const handleLoginSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    const { email, password } = inputFields;
    console.log('inputFields', inputFields, email, password);
    try {
      const response = await authService.signIn(inputFields);
      console.log('sent:', response);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    dispatch(changeLoginOrRegister({ loginTab: false }));
  }, [dispatch]);

  return (
    <AuthBackground>
      <div className="authentication-container z-index-normal">
        <FaArrowLeft onClick={handleGoBackClick} className="auth-back-button" />
        <div className="auth-title">
          <h2>Log in to FanFizzle</h2>
        </div>
        <form className="auth-form" onSubmit={handleLoginSubmit}>
          <div className="auth-form-fields">
            <div>
              <label>Email:</label>
              <input type="email" name="email" id="email" value={email} onChange={handleLoginInputChange} />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={handleLoginInputChange}
                required
              />
            </div>
            <div className="register-footer">
              <div className="divider-footer">
                <p>
                  Forgot Password?
                  <span onClick={handleForgotPassword}> Reset</span>
                </p>
              </div>
            </div>
          </div>
          <button className={`button ${!password || !email ? btnColor : ''}`} disabled={!password || !email}>{`${
            loading ? 'LOGIN IN PROGRESS...' : 'LOGIN'
          }`}</button>
        </form>
        <div className="register-footer">
          <div className="divider-footer">
            <p>
              Don&apos;t have an account?
              <span onClick={handleChangeToRegister}> Sign Up</span>
            </p>
          </div>
        </div>
      </div>
    </AuthBackground>
  );
};

export default Login;

/* <div className="authentication-container">
<div className="auth-title">
  <h2>Log in to FanFizzle</h2>
</div>
<div className="margin-top full-height">
  {LoginOptionsData.map((item) => {
    return (
      <div
        onClick={handleSignInOptions}
        title={item.title}
        className={`auth-option ${item.disabled}`}
        key={item.id}
      >
        <img src={item.image && item.image} />
        <span>{item.content}</span>
      </div>
    );
  })}
</div>
<div className="register-footer">
  <div className="divider-footer">
    <p>
      Don&apos;t have an account?
      <span onClick={handleChangeToRegisterTab}> Sign Up</span>
    </p>
  </div>
</div>
</div> */
