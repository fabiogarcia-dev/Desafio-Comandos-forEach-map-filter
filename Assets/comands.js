const list = document.querySelector("ul")
const buttonShowall = document.querySelector(".showProducts")
const ButtonMap = document.querySelector(".mapProducts")
const sumAll = document.querySelector(".somProducts")
const Buttonfilter = document.querySelector(".filterProducts")
let myLi = ""

function formatCurrency(value){
    const newValue = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
    value,)

    return newValue
}

function showall(productsArray) {
    myLi = '' //Para toda vez que inicar a "let myLi" começar zerada.
    productsArray.forEach((product) => {
        myLi += `
        <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <P class="item-price">R$ ${formatCurrency(product.price)}</P>
         </li>`
    })
    list.innerHTML = myLi
}

function mapall() {
    const newPrices = menuOptions.map((products) => ({
        ...products,
        price: products.price * 0.9, //dar 10% de desconto
    }))
    //Spread Operator - (...produtcs, ele esparrama o array mas mudar o price pq eu apontei na linha abaixo)
    showall(newPrices)
}

function sumItens() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    list.innerHTML = `
         <li>
            <P> O Valor total dos itens é R$ ${formatCurrency(totalValue)}
            </P>
         </li>`
}

function filterItens(){
    const filterVegan = menuOptions.filter((product)=> product.vegan===true)
    showall(filterVegan)
}
   

buttonShowall.addEventListener('click', () => showall(menuOptions)) // ()=> função anonima para só chamar a função showall quando for clicado.
ButtonMap.addEventListener('click', mapall)
sumAll.addEventListener('click', sumItens)
Buttonfilter.addEventListener('click', filterItens)