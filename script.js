function validateForm( ) {
    var name=document.getElementById("name").value;
    var password=document.getElementById("password").value;
       if ( name == "barby" && password == "172") {
         alert.usuario("usuaro y contraseña validos");
         window.open('valentines.html');
       } else  {
         alert("intenta de nuevo");
       }
 };