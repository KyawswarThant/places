import React from 'react';
const Contact=props=>{
    /*const showContact=()=>{
        document.getElementById("contact").style.display="block";
    }
    const hideContact=()=>{
        Document.getElementByClassName("contact").style.display="none";
       
    }*/
    return(
            <div className="contact">
                <form action="" method="post">
                    <input type="text" placeholder="Your email"/><br />
                    <textarea placeholder="Your message"></textarea>
                    <input type="submit" value="Send" />
            </form>
            </div>
        
    )
}
export default Contact;