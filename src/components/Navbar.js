import React from 'react'
import {  NavLink, withRouter } from 'react-router-dom'
import { Link, animateScroll as scroll } from 'react-scroll'
import './Navbar.css'
import k2 from '../wedit1.png'
import bg1 from '../bgcha1.png'





// const scrollToTop = () => {
//     scroll.scrollToTop();
    
// };

const Navbar = (props) => {
    return (
     <section  id="main">
         <nav >
            
             <a href="#" class="logo" onClick={() => 
            scroll.scrollToTop()}>PATIL</a>
               
               <ul  class="menu">
               
                   <li class="nav-item">
                   <Link
                    activeClass="active"
                    to="main"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}  >Home</Link>    
                   </li> 

                  <li class="nav-item"><Link
                  activeClass="active"
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500} >Education</Link></li>

                  
                                                    
                  <li class="nav-item">
                  <Link
                  activeClass="active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500} >Skills</Link></li>     

                  <li class="nav-item">
                  <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500} >About</Link></li>

                 <li class="nav-item">
                  <Link
                  activeClass="active"
                  to="proj"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500} >Projects</Link></li>

                  <li class="nav-item">
                  <Link
                  activeClass="active"
                  to="tit"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500} >Contact</Link></li>

                   
                   
                    
                   
               </ul>
               <div class="">
              
               </div>
               
        </nav>
        
    </section>   
    )
}

export default Navbar