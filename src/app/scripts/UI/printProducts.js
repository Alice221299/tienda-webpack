import { findProducts, getProducts } from "../services/products"
import { inputSearch, productsContainer } from "./domElements";

export const printProducts = async (categoryId = null) => {
    const data = await getProducts();
    const categoriesFiltered = data.filter(product => {
        return categoryId ? product.category.id === Number(categoryId) : product
    });
    renderProducts(categoriesFiltered)    
}

export const printProductsFinder = async () => {
    const dataFinder = await findProducts(inputSearch.value)
    renderProducts(dataFinder)
    console.log(dataFinder)
}

const renderProducts = (array) => {
    productsContainer.innerHTML = '';
    array.forEach(product => {
        productsContainer.innerHTML += `
        <section class="main__products-container__product">
            <div class="products-container--actions">
                <svg class="edit" data-id="${product.id}" width="25px" height="25px" viewBox="0 0 24 24" fill="#007090" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"     stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g     id="Edit / Edit_Pencil_01"> <path id="Vector" d="M12 8.00012L4 16.0001V20.0001L8 20.0001L16 12.0001M12 8.00012L14.8686 5.13146L14.8704     5.12976C15.2652 4.73488 15.463 4.53709 15.691 4.46301C15.8919 4.39775 16.1082 4.39775 16.3091 4.46301C16.5369 4.53704 16.7345 4.7346     17.1288 5.12892L18.8686 6.86872C19.2646 7.26474 19.4627 7.46284 19.5369 7.69117C19.6022 7.89201 19.6021 8.10835 19.5369 8.3092C19.4628     8.53736 19.265 8.73516 18.8695 9.13061L18.8686 9.13146L16 12.0001M12 8.00012L16 12.0001" stroke="#007090" stroke-width="2"     stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
                <svg class="delete" data-id="${product.id}" width="25px" height="25px" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="si-glyph si-glyph-delete" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>1227</title> <defs> </defs> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M12.566,8 L15.611,4.956 C16.031,4.535 16.031,3.853 15.611,3.434 L12.566,0.389 C12.146,-0.031 11.464,-0.031 11.043,0.389 L7.999,3.433 L4.955,0.389 C4.534,-0.031 3.852,-0.031 3.432,0.389 L0.388,3.434 C-0.034,3.854 -0.034,4.536 0.387,4.956 L3.431,8 L0.387,11.044 C-0.034,11.465 -0.034,12.147 0.388,12.567 L3.432,15.611 C3.852,16.032 4.534,16.032 4.955,15.611 L7.999,12.567 L11.043,15.611 C11.464,16.032 12.146,16.032 12.566,15.611 L15.611,12.567 C16.031,12.146 16.031,11.464 15.611,11.044 L12.566,8 L12.566,8 Z" fill="#007090" class="si-glyph-fill"> </path> </g> </g></svg>
            </div>
                <h2 class="main__products-container__product--title">${product.category.name}</h2>
                <img src="${product.imageURL}" alt="">
                <p class="main__products-container__product--item">
                    Producto:
                    <span>${product.name}</span>
                </p>
                <p class="main__products-container__product--item">
                    Precio:
                    <span>${product.price}</span>
                </p>
                <p class="main__products-container__product--item">Cantidad:
                    <span>${product.amount}</span>
                </p>
        </section>
        `
    }); 
}