import React, {Component} from 'react';
import './styles.css';
import Avatar from '../../../public/avatar.png';    

class ProfileButton extends Component{

    render(){   
        return (
            <div className="profileMenu">
                <a>Meu perfil</a>
                <img src={Avatar}/>
            </div>
        );
    };

}

export default ProfileButton;