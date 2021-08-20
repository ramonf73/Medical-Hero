function validateForm() {
    var name = document.forms["form"]["name"];
    var email = document.forms["form"]["email"];
    var password = document.forms["form"]["password"];

    if (name.value == "") {
        window.alert("Introduce tu nombre");
        name.focus();
        return false;
    }
    
    if (email.value == "") {
        window.alert("Introduce tu correo");
        email.focus();
        return false;  
    }

    if (password.value == "") {
        window.alert("introduce tu contraseña");
        password.focus();
        return false;  
    }
}