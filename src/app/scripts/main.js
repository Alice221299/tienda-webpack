import { printCategories } from './UI/printCategories.js'
import '../styles/styles.scss'
import { printProducts, printProductsFinder } from './UI/printProducts.js'
import { formLogin, inputSearch, login, shop, form } from './UI/domElements.js'
import { handleSubmit, loginView } from './UI/loginView.js'
import { shopReturn } from './UI/shopReturn.js'
import { verifySession } from './UI/shop.js'
import { deleteOneProduct } from './UI/deleteProduct.js'
import { editOneProduct } from './UI/editProduct.js'
import { getOneProduct } from './services/products.js'
const currentView = localStorage.getItem('currentView')

document.addEventListener('DOMContentLoaded', () => {
    switch (true) {
        case !currentView:
            shop.classList.add('active-view-shop')
            login.classList.remove('active-view-login')
            break;
        case currentView === 'login':
            shop.classList.remove('active-view-shop')
            login.classList.add('active-view-login')
            break;
        default:
            break;
    }
})

formLogin.addEventListener('submit',(event) => {
    handleSubmit(event)
})

printCategories()
printProducts()
shopReturn()
verifySession()
inputSearch.addEventListener('keyup', printProductsFinder)

deleteOneProduct()

document.addEventListener("click", async (e) => { 
    if (e.target.classList.contains('edit')) { 
        const idProduct = e.target.getAttribute("data-id");

        form.classList.toggle('inactive')
        editOneProduct(form, idProduct)
            }})