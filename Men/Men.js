// fetching from api

let bag=[]  //we are taking this bag because on line number 6 we want to save the data globally not only locally
let cartItems=JSON.parse(localStorage.getItem("menCart"))||[];

let url=fetch("https://fakestoreapi.com/products")
.then((res)=>res.json())    //returning the data and we are using json for converting the given data into readable data
.then((data)=>{
(bag=data)
console.log(data)
displayCard(data);
})
.catch((error)=>console.log(error)) //by using catch we can can check if there is any error


// append
function displayCard(data){
    document.querySelector("#container").innerHTML="";//it will help to empty the bag each time we search

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

    let cartBtn=document.createElement("Button")
    cartBtn.innerText="Add to Cart";

    // add to cart functionality
    cartBtn.addEventListener("click",function(){


        if(cartItems==null) cartItems=[];
        let already=false;
        for(let i=0;i<=cartItems.length-1;i++){
            if(cartItems[i].id===elem.id){
                already =true;
                break;
            }

        }


        if(already==true){
            alert("Product already in cart!!");
        }else{
        cartItems.push({...elem,quantity:1})
        localStorage.setItem("menCart",JSON.stringify(cartItems))
        alert("Product added to cart!")
        }
    })


    div.append(image,title,description,price,category,rating,cartBtn)
    document.querySelector("#container").append(div);
   
    
   })
}

// search functionality
function search(){
    let search=document.querySelector("input").value;
    console.log(search);
    let newData=bag.filter(function(elem){
        return elem.title.toLowerCase().includes(search.toLowerCase()) //includes is an inbuilt function which help tp include all the value
    });
    displayCard(newData);
}

// sorting functionality
function handleSort(){
let sorted=document.querySelector("select").value;
if(sorted=="high"){
    bag.sort((a,b)=>b.price-a.price)
}
if(sorted=="low"){
    bag.sort((a,b)=>a.price-b.price)
}

console.log(bag);
displayCard(bag);
}

// checkbox functionality

let filterselect=document.getElementById("filterr");

// let fetcheddata=[]; let bag=[]

filterselect.addEventListener("change",()=>{
  let filtered=bag.filter((elem)=>{
    console.log(filterselect.value)
    if(elem.category===filterselect.value){
      return true;
    }else{
      return false;
    }
  })
  displayCard(filtered);
})