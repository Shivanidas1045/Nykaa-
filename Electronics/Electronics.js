// fetching from api

let arr=[]  //we are taking this bag because on line number 6 we want to save the data globally not only locally
let url=fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products")
.then((res)=>res.json())    //returning the data and we are using json for converting the given data into readable data
.then((datas)=>{
(arr=datas.data)
console.log(datas.data);
displayCards(datas.data);

})
.catch((error)=>console.log(error)) //by using catch we can can check if there is any error

// append
function displayCards(datas){
    document.querySelector("#cont").innerHTML="";
   datas.forEach(function(elem){
    let divs=document.createElement("div");

    let image=document.createElement("img");
    image.setAttribute("src",elem.img)

    let brand=document.createElement("h1");
    brand.innerText=elem.brand;

    let details=document.createElement("P");
    details.innerText=elem.details;

    let price=document.createElement("h3");
    price.innerText=elem.price;

    let category=document.createElement("h2");
    category.innerText=elem.category;

    let CartBtn=document.createElement("Button");
    CartBtn.innerText="Add to Cart";

    divs.append(image,brand,details,price,category,CartBtn)
    document.querySelector("#cont").append(divs);

    
   })
}

// search functionality
function find(){
  let find=  document.querySelector("input").value;
  console.log(find);
  let searchData=arr.filter(function(elem){
    return elem.brand.toLowerCase().includes(find.toLowerCase())
    
  });
  displayCards(searchData);
    
}
