import React from 'react'
import SignUpForm from '../components/SignUpForm'
import image from '../assets/image13.png'
import './SignUp.css'

const SignUp = () => (
  <div className='container'>
    <div className='logo'>
      <img src={image} alt="Display"/>
      <p>Discover new things on Superapp</p>
    </div>
    <div className='signup'>
      <p id='LogoName'>Super App</p>
      <p id='heading'>Create your new account</p>
      <SignUpForm />
      <p>By clicking on Sign up, you agree to Superapp <span id='tnc'>Terms and Conditions of Use</span></p>
      <p>To learn more about how Superapp collects, uses, shares, and protects your personal data, please head to Superapp <span id='privacy_policy'>Privacy Policy</span></p>
    </div>
  </div>
)

export default SignUp
