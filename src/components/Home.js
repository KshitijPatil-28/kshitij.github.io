import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Typical from 'react-typical'


class Home extends Component {
    render() {
    return (

        <div>
    
	<div class="name">
   
    <h2>Hey!</h2>
    
    <h1>I'm <font color="#17d1ac">Kshitij</font> Patil</h1>
    <div class="text-3">And I'm a 
        
        <Typical
          
          loop={Infinity}
          wrapper="b"
          steps={[
              ' STUDENT',
              1000,
              ' DEVELOPER',
              1000,
              ' ATHLETE',
              1000,
              ' DREAMER',
              1000
              
          ]}
          />


    </div>
  

    </div>
     
    <div class="black-line" ></div>
    
    <div class="social">
    <a href="#"><i class="fab fa-facebook-f"></i></a>	
    <a href="#"><i class="fab fa-twitter"></i></a>
    <a href="#"><i class="fab fa-instagram"></i></a>
    <a href="#"><i class="fab fa-youtube"></i></a>	
    </div>

    </div>
    
    )
    }
}




export default Home