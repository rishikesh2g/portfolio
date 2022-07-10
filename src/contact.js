import React, { Component } from "react";
import logo1 from './gmail.png';
class Contact extends Component {
    render(){
        return(
            <div className="jumboSize">
                <img src={logo1} className="img-responsive " alt="Avatar" />
                <div className="jumbotron">
                    <h1 className="display-4">rishikeshsinghntv@gmail.com</h1>
                </div>
            </div>                
        );
    }
}

export default Contact;
/*import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{
    faFacebook,
    faTwitter,
    faInstagram
  }
from "@fortawesome/free-brands-svg-icons"; 
export default function contact(){
  return (
    
    <div class="social-container">
      <h3>Social Follow</h3>
      <div class="social-container">
      <h3>Social Follow</h3>
      <a href="https://www.facebook.com/learnbuildteach/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      </div>
      <a href="https://www.twitter.com/jamesqquick" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/learnbuildteach"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
      
  );

}
*/