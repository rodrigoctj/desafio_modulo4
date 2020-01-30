import React, {Component} from 'react';
import './styles.css';
import Logo from '../../../public/facebook-logo.png';
import ProfileButton from '../ProfileButton/ProfileButton';

class TopBar extends Component{

    render(){
        return (
            <div className="topBar">
                <img className="logo" src={Logo}></img>
                <ProfileButton/>
            </div>
        );
    }

}


export default TopBar;