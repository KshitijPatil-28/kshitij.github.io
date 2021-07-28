import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import k2 from '../wedit1.png'

const Projects = () => {
    return (
        <section class="proj" id="projects">
    <div class="projects container">
      <div class="projects-header">
        <h1 class="section-title">My <span>Projects</span></h1>
      </div>
      <div class="all-projects">
      

      <div class="project-item">
        <a href="https://github.com/KshitijPatil-28/SL1_M10_BusinessManagement">
          <div class="project-info">
            <h1>Business Management Database system</h1>
            <h2>A Database Management System Project using MySQL, jdbc for backend and swing for front end.  </h2>
            <p>Basically a mini-Amazon app which allows customers to order things from the available stock and generates a bill which shows the total price which includes the delivery charges. The customer can add  things to his cart (and remove from it) as well as specify the quantity. The new customer who logs in using his credentials gets updated in the database along with the stock that he ordered.</p>
          </div>
          <div class="project-img">
           
          </div>
          </a>
        </div>
        <a href="https://github.com/KshitijPatil-28/snakeC" target="_blank">
        <div class="project-item">
          <div class="project-info">
              
            <h1>Snake game in C</h1>
            <h2>A project in C .</h2>
            <p><h3>Try out my version of this traditional game which is programmed in C language. It also records the data(name, score, etc) of the player who plays the game. </h3></p>
          
          </div>
         
        </div>
        </a>

        

        
        </div>
        
        </div>
        
        </section>
    )
}


export default Projects