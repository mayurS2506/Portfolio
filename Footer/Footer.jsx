import './Footer.css'
import React from 'react'

const Footer = () => {
  return (
    <div>
        
     <footer class="footerGridBox">
      <div class="footerElement" id="footerElement1">
         <h2>GET IN TOUCH</h2>
         <p>mayursatbahi@gmail.com</p>
         <p>+917030474016</p>

      </div>
      <div class="footerElement"  id="footerElement2">
         <h2>Project</h2>
         <div class="footerProject">
            <p>Portfolio Website</p>
            <p>Recipe Website</p>
            <p>Card Website</p>
            <p>Blog Website</p>
         </div>
      </div>
      <div class="footerElement"  id="footerElement3" >
       <div class="footerIcon" >
         <i class="fa-brands fa-linkedin-in"></i>
         <i class="fa-brands fa-instagram"></i>
         <i class="fa-brands fa-twitter"></i>

       </div>
      <div  class="footerCopyRight">
         <p>	&copy; Mayur Satbhai</p>
      </div>
      </div>
     </footer>

    </div>
  )
}

export default Footer