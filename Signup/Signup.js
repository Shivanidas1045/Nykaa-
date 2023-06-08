let form=document.querySelector("form");
    let data2=JSON.parse(localStorage.getItem("Login"))||[];
    form.addEventListener("submit",function(event){

           
        event.preventDefault();
        let obj={
        email:form.Email.value,
        Pswrd:form.Pswrd.value,
        Paswrd:form.Paswrd.value,
        }
        if (obj.email==""||obj.Pswrd==""||obj.Paswrd==""){
            alert("Please fill all the details!!!");
        
            //console.log(obj)
        }else if(obj.email=="dasshivani313@gmail.com"||obj.Pswrd=="shivani@1045"||obj.Paswrd=="shivani@1045"){
            window.location.href="/Meesho/Login/Login.html";

        }else{
        data2.push(obj);
        localStorage.setItem("Login",JSON.stringify(data2))

        
        
        }
    
        //console.log(obj);
        //data.push(obj);
        //localStorage.setItem("sign in",JSON.stringify(data))

        
    });
