let form=document.querySelector("form");
    let data=JSON.parse(localStorage.getItem("Log in"))||[];
    form.addEventListener("submit",function(event){

           
        event.preventDefault();
        let obj={
        email:form.email.value,
        pswrd:form.pswrd.value,
        }
        if (obj.email==""||obj.pswrd==""){
            alert("Please fill all the details!!!");
        
            //console.log(obj)
        }else if(obj.email=="dasshivani313@gmail.com"||obj.pswrd=="shivani@1045"){
            window.location.href="/Meesho/index.html";
            alert("Log in successfully!!!")
            document.querySelector("h1").innerText="Login Successfull!!"
        }else{
        data.push(obj);
        localStorage.setItem("Log in",JSON.stringify(data))

        
        
        }
    
        //console.log(obj);
        //data.push(obj);
        //localStorage.setItem("sign in",JSON.stringify(data))

        
    });
    

