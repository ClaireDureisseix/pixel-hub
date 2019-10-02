function alert()                                    
{ 
    var fname = document.forms["contact"]["First Name"];                   
    var lname = document.forms["contact"]["Last Name"];
    var email = document.forms["contact"]["EMail"];  
    var select =  document.forms["contact"]["Select Photograph"];  
    var placeholder = document.forms["contact"]["Request"];    
   
    if (fname.value == "")                                  
    { 
        window.alert("Please enter your name."); 
        fname.focus(); 
        return false; 
    } 
   
    if (lname.value == "")                               
    { 
        window.alert("Please enter your address."); 
        lname.focus(); 
        return false; 
    } 
       
    if (email.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
   
    if (select.selectedIndex < 1)                  
    { 
        alert("Please choose a photograph."); 
        select.focus(); 
        return false; 
    } 
   

    if (placeholder.value == "")
    {
      window.alert('Please tell us what you want to know');
      placeholder.focus();
      return false;
    }

    return true;
} 

module.exports = 'form.html';