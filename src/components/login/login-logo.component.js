import React from 'react';
import InnosolLogoIcon from '../../icons/innosol-logo.icon';
import './login-logo.component.css';

const LoginLogo = () => (
  <div className="login-logo">
    <div className="login-logoTop">
      <InnosolLogoIcon cssClass='login-logo_icon' cssDecorationClass='login-logo_decoration' />
    </div>
    <div className="login-logoBottom">
      <span className="login-logoLabel">Professionals</span>
    </div>
  </div>
);

export default LoginLogo;
