import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'


 const Skills1 = (props) => {
     return(
         <center>
        <section class="skills" id="skills">
        <div class="max-width">
            <h2 class="title">
My skills</h2>
<div class="skills-content">
                <div class="column left">
                    <div class="text">
My creative skills & experiences.</div>
<p>This chart summarises the extent of my knowledge in various markup and scripting languages as well as database generators such as MySQL and front end to backend linkers like NodeJS.</p>

                </div>
<div class="column right">
                    <div class="bars">
                        <div class="info">
                            <span>HTML</span>
                            <span>90%</span>
                        </div>
<div class="line html">
</div>
</div>
<div class="bars">
                        <div class="info">
                            <span>CSS</span>
                            <span>60%</span>
                        </div>
<div class="line css">
</div>
</div>
<div class="bars">
                        <div class="info">
                            <span>JavaScript</span>
                            <span>80%</span>
                        </div>
<div class="line js">
</div>
</div>
<div class="bars">
                        <div class="info">
                            <span>PHP</span>
                            <span>50%</span>
                        </div>
<div class="line php">
</div>
</div>
<div class="bars">
                        <div class="info">
                            <span>MySQL</span>
                            <span>70%</span>
                        </div>
<div class="line mysql">
</div>
</div>
</div>
</div>
</div>

<div id="contact-btn">

<h1 class="c-b-heading">Do You Have Any Project In Your Mind ?</h1>
       
	<button><Link to="contact" smooth={true} duration={1000}>Contact Me</Link></button>
</div>

</section>
</center>
     )
 }
 export default Skills1
 