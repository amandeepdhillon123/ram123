
let array= JSON.parse(localStorage.getItem("products")) || [] ;


array.map(function(elem,index){

    let box=document.createElement("div");
    box.setAttribute("id","color")
    let type=document.createElement("p");
    type.innerText=elem.type
    let description=document.createElement("p");
    description.innerText=elem.desc;
    let price=document.createElement("p");
    price.innerText=elem.price;
    let imag=document.createElement("img");
    imag.src=elem.image;
    let btn=document.createElement("button");

    btn.innerText="remove";

    btn.addEventListener("click",function(){
        remove_Produnct(index);
    })
  
  
    


    box.append(imag,description,type,price,btn);

    console.log(box)
    document.querySelector("#all_products").append(box);


    


    
});

function remove_Produnct(index){
    array.splice(index,1);
    localStorage.setItem("products",JSON.stringify(array));
    window.location.reload();
}