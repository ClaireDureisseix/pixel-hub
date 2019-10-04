function validateForm() {
    
    var fname = document.forms["Form"]["firstname"].value;
    var lname = document.forms["Form"]["lastname"].value;
    var email = document.forms["Form"]["email"].value;
    var select = document.forms["Form"]["select"].value;
    var textarea = document.forms["Form"]["textarea"].value;

    if(
        fname == null || fname == "",
        lname == null || lname == "",
        email == null || email == "",
        select == null || select == "",
        textarea == null || textarea == ""
    ) {
        alert("We need all your informations please");
        return false;

    } else if (fname == null || fname == "") {
        alert("Please, enter your name");
        return false;
    
    } else if (lname == null || lname == "") {
        alert("Please we need your last name");
        return false; 
    
    } else if (email == null || email == "") {
        alert("We need your email adress");
        return false;
    
    } else if (select == null || select == "") {
        alert('Please, choose an option');
        return false;
    
    } else if (textarea == null || textarea == "") {
        alert('Leave us your comment!');
        return false;
    
    } else {
        alert('Thank you! You\'ll be contacted soon!')
    }
}