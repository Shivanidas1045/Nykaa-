

let cartItems=JSON.parse(localStorage.getItem("menCart"))
console.log(cartItems);
displayCard(cartItems);


// append
function displayCard(data){
    document.querySelector("#container").innerHTML="";    //it will help to empty the bag each time we search

   data.forEach(function(elem){

    let div=document.createElement("div");

    let image=document.createElement("img");
    image.setAttribute("src",elem.image)

    let title=document.createElement("h2");
    title.innerText=elem.title;

    let description=document.createElement("P");
    description.innerText=elem.description;

    let price=document.createElement("h3");
    price.innerText=elem.price;

    let category=document.createElement("h4");
    category.innerText=elem.category;

    let rating=document.createElement("h3");
    rating.innerText=elem.rating.rate;

    let increment=document.createElement("button");
    increment.innerText="+";

    // let quantity=document.createElement("span");
    // quantity.innerText=elem.quantity;

    let decrement=document.createElement("button");
    decrement.innerText="-";

    let deleteBtn=document.createElement("button");
    deleteBtn.innerText="Delete";

    // delete functionality
    deleteBtn.addEventListener("click",function(){
        data=JSON.parse(localStorage.getItem('menCart'))
        data.splice(index,1);
        localStorage.setItem('menCart',JSON.stringify(data))
        div.remove();

    });

    
        //elem.target.parentNode.remove();
    




    div.append(image,title,description,price,category,rating,deleteBtn)
    document.querySelector("#container").append(div);

    
   })
}

// total bill

// let totalBill=cartItems.reduce((acc,el)=>
// acc+el.price,0)
// console.log(totalBill);
// document.querySelector("h1>span").innerText=totalBill;


