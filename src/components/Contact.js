import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

const Contact = () => {
  
      return(
        <section class="tit" id="contact">
            <hr color="white"></hr>
            <center><h1>Contact Me</h1></center>
        <div class="boxes">
           
                <div class="inline"><h2>Email:</h2><h3 >kshitijpatil285@gmail.com</h3> </div>
                    
                <div class="inline"><h2>Phone:</h2><h3>8275809506</h3></div> 
            
            
                <div class="inline"><h2>Address:</h2><h3>B-12, Dhanakawde Patil Township, Pune-411043</h3></div> 
            
        </div>
        <center >
        <h1 >Social Media</h1>
        <div class="social1">
        <a href="https://www.instagram.com/kshitij__28" target="_blank"><FaInstagram color="#FF1493" size="4rem"/>	</a>
        <a href="#" target="_blank"><FaFacebookF color="#4968ad" size="4rem"/>	</a>
        <a href="#" target="_blank"><FaWhatsapp color="#00FF00" size="4rem"/>	</a>
        <a href="#" target="_blank"><FaGithub color="white" size="4rem"/>	</a>
       	
    
    </div>
    </center>
        <hr color="white"></hr>
        </section>
       

        
      
      )
  
    
}


export default Contact