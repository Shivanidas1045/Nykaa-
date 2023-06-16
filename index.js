// navigation bar
 hamburger=document.querySelector(".hamburger");
hamburger.onClick=function(){
    navbar=document.querySelector(".navbar")
    navbar.classList.toggle("active");
}

// api section electronic component
let container=document.getElementById("product-container");


let filterselect=document.getElementById("filter");

let fetcheddata=[];

filterselect.addEventListener("change",()=>{
  let filtered=fetcheddata.filter((elem)=>{
    console.log(filterselect.value)
    if(elem.category===filterselect.value){
      return true;
    }else{
      return false;
    }
  })
  displayproducts(filtered);
})


fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products")



.then((res)=>{
  return res.json();
})

.then((actualdata)=>{
  fetcheddata=actualdata.data;
  //console.log(actualdata);
  displayproducts(actualdata.data);
})
.catch((error)=>{
  console.log(error)
})

function displayproducts(data){
  container.innerHTML=null;
  data.forEach((elem)=>{
    let card=document.createElement("div");

    let image=document.createElement("img");
    image.setAttribute("src",elem.img);

    let category=document.createElement("h3");
    category.innerText=elem.category;

    let brand=document.createElement("h2");
    brand.innerText=elem.brand;

    let price=document.createElement("h3");
    price.innerText=elem.price;

    let details=document.createElement("p");
    details.innerText=elem.details;

    let btn=document.createElement("button");
    btn.innerText="Add to Cart";

    btn.addEventListener("click",()=>{
      let cartdata=JSON.parse(localStorage.getItem("cart"));
      
      

if(cartdata===null) cartdata=[];
let already=false;
for(let i=0;i<=cartdata.length-1;i++){
  if(cartdata[i].id===elem.id){

  already=true;
  break;

}
}

if(already===true){
  alert("Product Already in Cart");
}else{
  cartdata.push({...elem,quantity:1});

  localStorage.setItem("cart",JSON.stringify(cartdata));
  alert("Product added to cart")
}

    })

    card.append(image,category,brand,price,details,btn);

    container.append(card);






  })
}


            
      