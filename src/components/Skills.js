import React from 'react'
import { Link } from 'react-router-dom'
import { FaHackerrank } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3 } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'
import { SiCodechef } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiHackerearth } from "react-icons/si";
import ReactCardFlip from 'react-card-flip';

const Skills = () => {
    return (
        <section id="services">
	<div></div>
	<div class="s-heading">
	<h1>Education</h1>
	
	</div>
	
	<div class="b-container">
	
	<div class="s-box">
	
	<div class="s-b-img">
		
		<div class="s-type">School</div>
		
		<img src="/images/sb1.png" />
	</div>
	
	<div class="s-b-text">
	<a href="http://www.muktanganenglishschool-jrcollege.in/" target="_blank">Muktangan English School => The start of everything.</a>	
	</div>
	</div>
		
	<div class="s-box">
	
	<div class="s-b-img">
	
		<div class="s-type">Junior college</div>

		<img src="/images/nmv.jpg" />
	</div>
	
	<div class="s-b-text">
	<a href="https://en.wikipedia.org/wiki/Nutan_Marathi_Vidyalaya" target="_blank">NMV => My "junior college" phase is right here!</a>	
	</div>
	</div>
	
	<div class="s-box">
	
	<div class="s-b-img">
	
		<div class="s-type">Graduation</div>
		
		<img src="/images/grad.png" />
	</div>
	
	<div class="s-b-text">
	<a href="https://pict.edu/" target="_blank">PICT => Graduation from one of the most reknowned institutes in Pune for Computer science/IT.</a>	
	</div>
	</div>
	</div>

	<div class="edu container" id="education">
      <div class="edu-header">
        <h1 class="edu-title">Web Dev</h1>
      </div>
      <div class="all-edu">
      <a href="" />
        <div class="edu-item">
          <div class="edu-info">
            <center>
            <h1>Full Stack Development</h1>
			<div class="social2">
			<a ><FaHtml5  size="4rem"/>	</a>
			<a ><FaCss3  size="4rem"/>	</a>
			<a ><SiJavascript  size="4rem"/></a>
			<a ><FaReact size="4rem"/></a>
			<a ><FaNodeJs size="4rem"/></a>
			</div>
            <p><h2>Well versed in HTML5, CSS3, Javascript, React, NodeJS</h2></p>
			</center>
          </div>
         
        </div>

		
		
		<div class="edu-item1">
		<h1 class="edu-title">Degrees Received</h1>
		<br></br>
		<br></br>
		<center>
		<div class="left-img">
			<img src="/images/pict_logo.png"/>
		</div>
          <div class="edu-info">
              
            <h1>Pune Institute Of Computer Technology</h1>
            
            <h2><li>The BE course in PICT includes the basics of subjects like &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DS, Algorithms, DBMS, OS, CA,etc.</li>
			<br></br>
			<li>My average CGPA uptil now is 9.11</li>
            </h2>
			
          
          </div>
		  </center>
        </div>
		
		
		</div>
		</div>
		<br></br>
		<br></br>
	<center class="title3"><h1>Basic Qualifications and competitives sites that I use</h1></center>
	<div class="social1">
	<a href="https://www.hackerrank.com/kshitijpatil285" target="_blank"><FaHackerrank color="lime" size="4rem"/><br></br>HackerRank</a>
	<a href="https://www.hackerearth.com/@kshitij502"target="_blank"><SiHackerearth  color="000099" size="4rem"/><br></br>HackerEarth	</a>
	<a href="#"target="_blank"><SiCodechef  color="brown" size="4rem"/><br></br>CodeChef	</a>
	</div>

	


</section>
  
    )
}

export default Skills