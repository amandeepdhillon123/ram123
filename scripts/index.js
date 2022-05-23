//store the products array in localstorage as "products"

document.querySelector("#products").addEventListener("submit",myFun)

let array= JSON.parse(localStorage.getItem("products")) || [] ;

function obj(t,d,p,i){
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image=i;

}




function myFun(){
  event.preventDefault();
    console.log("ram")

    let form= document.querySelector("#products")
    let type=form.type.value;
    let desc=form.desc.value;
    let price=form.price.value;
    let image=form.image.value;

    let store= new obj(type,desc,price,image);

    array.push(store);
    // console.log(arr);

    localStorage.setItem("products",JSON.stringify(array))


}