import React, {Component} from "react";
import logo from '../logo.svg';

class CHeader extends Component{
    render(){
        const{aFamily, aName} = this.props;
        return(
            <div className="headerContainer">
                <img src={logo} className="headerLogo" alt="logo"/>
                <h2>Witaj w przyklładowym serwisie {aName+' '+ aFamily}</h2>
            </div>
        );
    }
}

export default CHeader