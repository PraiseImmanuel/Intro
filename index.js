
function validateFirstname(x) {
    const input = document.getElementById(x);
    const container = document.getElementById(`${x}-div`);
    if(input.value == ""){
        container.style.border ='0.0625rem solid  hsl(0, 100%, 74%)';
        document.querySelector("img.firstname").style.display = "block";
        document.querySelector("p.firstname-error-message-2").style.display = "block";
        document.querySelector("p.firstname-error-message").style.display = "none";
        
    }
        else{
            let re = /[A-Za-z -']$/;
            if (re.test(input.value)) {
                container.style.border ='0.0625rem solid hsl(246, 25%, 77%)';
                document.querySelector("img.firstname").style.display = "none";
                document.querySelector("p.firstname-error-message-2").style.display = "none";
                return true;
            } 

            else {
                container.style.border ='0.0625rem solid  hsl(0, 100%, 74%)';
                document.querySelector("img.firstname").style.display = "block";
                document.querySelector("p.firstname-error-message-2").style.display = "none";
                document.querySelector("p.firstname-error-message").style.display = "block";
                return false;
            }
        }

}

function validateLastname(x) {
    const input = document.getElementById(x);
    const container = document.getElementById(`${x}-div`);
    if(input.value == ""){
        container.style.border ='0.0625rem solid  hsl(0, 100%, 74%)';
        document.querySelector("img.lastname").style.display = "block";
        document.querySelector("p.lastname-error-message-2").style.display = "block";
        document.querySelector("p.lastname-error-message").style.display = "none"
        
    }

        else{
            let re = /[A-Za-z -']$/;
            if (re.test(input.value)) {
                container.style.border ='0.0625rem solid hsl(246, 25%, 77%)';
                document.querySelector("p.lastname-error-message-2").style.display = "none";
                document.querySelector("img.lastname").style.display = "none";
                return true;
            } 

            else {
                container.style.border ='0.0625rem solid  hsl(0, 100%, 74%)';
                document.querySelector("img.lastname").style.display = "block";
                document.querySelector("p.lastname-error-message-2").style.display = "none";
                document.querySelector("p.lastname-error-message").style.display = "block";
                return false;
            }
        }

}

function validateEmail(x) {
    const input = document.getElementById(x);
    const container = document.getElementById(`${x}-div`);
    if(input.value == ""){
        container.style.border ='0.0625rem solid  hsl(0, 100%, 74%)';
        document.querySelector("img.e-mail").style.display = "block";
        document.querySelector("p.email-error-message-2").style.display = "block";
        document.querySelector("p.email-error-message").style.display = "none";
        
    }

        else{
            let re = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
            // let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (re.test(input.value)) {
                container.style.border ='0.0625rem solid hsl(246, 25%, 77%)';
                document.querySelector("img.e-mail").style.display = "none";
                document.querySelector("p.email-error-message").style.display = "none";
                return true;
               } 
        
               else {
                container.style.border ='0.0625rem solid  hsl(0, 100%, 74%)';
                document.querySelector("img.e-mail").style.display = "block";
                document.querySelector("p.email-error-message-2").style.display = "none";
                document.querySelector("p.email-error-message").style.display = "block";
                return false;
            }
        
        }
    
}

function validatePassword(x){
    const input = document.getElementById(x);
    const container = document.getElementById(`${x}-div`);
    if(input.value == ""){
        container.style.border ='0.0625rem solid  hsl(0, 100%, 74%)';
        document.querySelector("img.e-mail").style.display = "block";
        document.querySelector("p.password-error-message").style.display = "block";
    }

        else{
            document.querySelector("p.password-error-message").style.display = "none";
            document.querySelector("img.e-mail").style.display = "none";
        }
}
