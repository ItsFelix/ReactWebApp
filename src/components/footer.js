import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Style from '../Styles/App.css';
import FooterStyle from '../Styles/footer.css';
import '@storybook/addon-actions/register';
import { action } from '@storybook/addon-actions';

import 'react-awesome-button/dist/styles.css';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss'
import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonShare,
} from 'react-awesome-button';

import { SocialIcon } from 'react-social-icons';
import socialIcon from 'react-social-icons/dist/social-icon';

class Header extends Component {
  render() {
    return (
        <footer className="footer">
          <AwesomeButton
            className="socialButton"
            type="instagram"
            cssModule={AwesomeButtonShare}
            target="_blank"
            href="https://instagram.com/felix.fslr"
          ><SocialIcon network="instagram" fgColor="#fff" bgColor="none" style={{ height: 50, width: 50 }} /></AwesomeButton>
          <AwesomeButton
            className="socialButton"
            type="facebook"
            cssModule={AwesomeButtonShare}
            target="_blank"
            href="https://instagram.com/felix.fslr"
          ><SocialIcon network="facebook" fgColor="#fff" bgColor="none" style={{ height: 50, width: 50 }} /></AwesomeButton>
          <AwesomeButton
            className="socialButton"
            type="twitter"
            cssModule={AwesomeButtonShare}
            target="_blank"
            href="https://instagram.com/felix.fslr"
          ><SocialIcon network="twitter" fgColor="#fff" bgColor="none" style={{ height: 50, width: 50 }} /></AwesomeButton>
          <AwesomeButton
            className="socialButton"
            type="reddit"
            cssModule={AwesomeButtonShare}
            target="_blank"
            href="https://instagram.com/felix.fslr"
          ><SocialIcon network="reddit" fgColor="#fff" bgColor="none" style={{ height: 50, width: 50 }} /></AwesomeButton>
          <AwesomeButton
            className="socialButton"
            type="github"
            cssModule={AwesomeButtonShare}
            target="_blank"
            href="https://instagram.com/felix.fslr"
          ><SocialIcon network="github" fgColor="#fff" bgColor="none" style={{ height: 50, width: 50 }} /></AwesomeButton>
          <AwesomeButton
            className="socialButton"
            type="youtube"
            cssModule={AwesomeButtonShare}
            target="_blank"
            href="https://instagram.com/felix.fslr"
          ><SocialIcon network="youtube" fgColor="#fff" bgColor="none" style={{ height: 50, width: 50 }} /></AwesomeButton>
        </footer>
    );
  }
}

export default Header;