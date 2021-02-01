import React from "react";
import "./Form.css"

const Form = () => (
  
    
  <div className="form">
    <form 
       action="https://formspree.io/dimitar_animation@yahoo.com"
       method="POST"
    >
     <label>
       Your Name:
       <input type="text" name="name"></input>
     </label>
     <label>
       Your Email:
       <input name="_replyto" name="email"></input>
     </label>
     <label>
       Message:
     <textarea name="message"></textarea>
     </label>
     <input type="submit" value="Send"/>
    </form>
  </div>
)


export default Form