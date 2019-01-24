import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Style from '../Styles/App.css';
import StyleHeader from '../Styles/header.css';
import '@storybook/addon-actions/register';
import { action } from '@storybook/addon-actions';

import 'react-awesome-button/dist/styles.css';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss'
import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonShare,
} from 'react-awesome-button';

import Map from './map';

import { SocialIcon } from 'react-social-icons';
import socialIcon from 'react-social-icons/dist/social-icon';

class Header extends Component {
  render() {
    return (
        <header className="App-header">
          <h1>Praktikum</h1>
          <p>Edit and save to reload 123.</p>
          <AwesomeButton
            type="instagram"
            cssModule={AwesomeButtonShare}
            target="_blank"
            href="https://instagram.com/felix.fslr"
          ><SocialIcon network="instagram" fgColor="#fff" bgColor="none" style={{ height: 50, width: 50 }} /></AwesomeButton>
        </header>
    );
  }
}

export default Header;