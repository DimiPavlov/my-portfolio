import React from "react";
import "./FormNew.css";

const FormNew = () => (
    
<div class="login-box">
  <h2>Contact</h2>
  <form 
  action="https://formspree.io/dimitar_animation@yahoo.com"
  method="POST">
    <div class="user-box">
      <input type="text" name="name"  />
      <label>Name</label>
    </div>
    <div class="user-box">
      <input type="email" name="email" />
      <label>Email</label>
    </div>
	<div class="user-box">
	<textarea style={{width:"100%", }} rows="7" name="message" ></textarea>
	
      <label>Message</label>
    </div>
    <a href="" >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
     <input type="submit" value="Send" />
	  
      
    </a>
  </form>
</div>
)

export default FormNew