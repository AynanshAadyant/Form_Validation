$(".submit").on( "click" , function(){
    FormValidate();
} );

function FormValidate()
{
    var name = $(".name").val();
    var phno = $(".phno").val();
    var email = $(".email").val();
    var pass = $(".pass").val();
    var repass = $(".repass").val();
    $(".msg-name, .msg-phno, .msg-email, .msg-pass, .msg-repass, .msg-submit").text(""); 
    checkAll ( name , email , phno , pass , repass );
    checkName( name );
    checkPhone( phno );
    checkEmail( email );
    checkPass( pass , name );
    checkConfirmPass( pass , repass );
    
    
}

function checkName( name )
{
    var msg;
    if(name != "")
    {
        
    if ( name.length < 5 )
     {   
         msg = " Name too short ";  
     }
    else if ( name.charAt(0) >= '0' && name.charAt(0) <= '9' )
      {  
          msg = " Name cannot start with number";  
      }
    else
    {
        $(".name").css("border-color" , "rgb(50,250,50)");
        $(".msg-name").text("Valid"); 
        return;
    }
    $("msg-name").text(msg);
    }
}

function checkPhone( phno )
{   
    var msg;
    if(phno != "")
    {
        
    if( phno == "1234567890" )
    {  
          msg= "Invalid Phone Number";  
    }
    else if( phno.length != 10)
    {
        msg = "Phone number should be of 10 digits" ; 
    }
    else
    {
        $(".phno").css("border-color" , "rgb(50,250,50)");
        $(".msg-phno").text("Valid");
        return; 
    }
    $(".msg-phno").text(msg);
    }
}

function checkEmail( email )
{
    var msg;
    if(email != "")
    {
        
     if( email.indexOf('@')<0 )
     {   msg = "Invalid email entered";  }
    else
    {    
        $(".email").css("border-color" , "rgb(50,250,50)"); 
        $(".email").text("Valid");
        return ;
    }
    $(".msg-email").text(msg);
    }
}

function checkPass( pass , name )
{
    if(pass != "" && name != "")
    {
        
    if( pass=="password" || pass=="PASSWORD" || pass==name || pass=="12345678" 
    || pass=="0987654321" )
    {  
        msg = "Password too weak";  
    }
    else if( pass.length < 8 )
    {   
        msg = "Password too short"; 
    }
    else 
    {
        $(".pass").css("border-color" , "rgb(50,250,50)");
        $(".msg-pass").text("Valid");
        return;
    }
    $(".msg-pass").text(msg);
    }
}

function checkConfirmPass( pass, repass )
{   
    var msg;
    if(pass != "" && repass != "")
    {
    if( pass !== repass )
    {    msg= "Passwords do not match";  }
    else
    {
        $(".repass").css("border-color" , "rgb(50,250,50)"); 
        $(".msg-repass").text("Valid");
        return;
    }
    $(".msg-repass").text(msg);
    $(".msg-submit").text("");
    return;
    }
}

function checkAll( name , email , phno , pass , repass )
{
    if ( name ==="" || email === "" || phno === "" || 
        pass === "" || repass === "")
    { 
        $(".msg-submit").text(" Enter all fields to submit");
        $(".msg-name, .msg-phno, .msg-email, .msg-pass, .msg-repass").text("");
        return;
    }
}
