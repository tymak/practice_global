
class Product{
    constructor(name,price,quantity){
        this.name=name;
        this.price=price;
        this.quantity=quantity;
    }
    sell(){
        return this.quantity--;
    }
  }

const apple=new Product("apple",10,50);
const pear=new Product("pear",12,40);
const carrot=new Product("carrot",8,100);
const mango=new Product("mango",30,10);
const brocoli=new Product("brocoli",15,20);
const orange=new Product("orange",14,50);
const lettuce = new Product("lettuce",9,20);

let seznam=[apple,pear,carrot,mango,brocoli,orange,lettuce];
let cena_celkem=0;

const createProduct=(polozka)=>{
    const element = document.createElement('div');
    element.className=`polozky`
    element.innerHTML=(`
    <div class="product">product: ${polozka.name}</div>
    <div class="price">price: ${polozka.price}</div>
    <div class="quantity">quantity: ${polozka.quantity}</div>
    <button class="buy">BuY</button>
    
    `);
    const buy_button=element.querySelector(".buy");

    buy_button.addEventListener("click",()=>{
        
        let prubezny_pocet=polozka.quantity;
        if(prubezny_pocet>0){
            polozka.quantity=prubezny_pocet-1;
            console.log(polozka.quantity);
            element.querySelector(".quantity").innerHTML=("quantity: "+polozka.quantity);
                         
            let cena=polozka.price;
            cena_celkem=cena_celkem+cena;
            cena_celkem.innerHTML=(cena_celkem);
            console.log(cena_celkem);
            document.querySelector(".cena").innerHTML=("celková cena: "+cena_celkem+" peněz");
            }
            else{
                polozka.quantity=0;
                element.querySelector(".buy").innerHTML=("Out");
                element.querySelector(".buy").className=("vyprodano");

            }
    
        })


return element;}

const updateseznam = () => {
    const zbozi = document.querySelector('.zbozi');
    zbozi.innerHTML = "";
  
    for(const polozka of seznam){
        zbozi.appendChild(createProduct(polozka))
       
    }

}

document.addEventListener('DOMContentLoaded', () => {
    updateseznam()
    
}
)