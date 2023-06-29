import { editProduct } from "../services/product.js";


const URL_users = "https://back-whatsapp.onrender.com/";

export const editOneProduct = async (form, id) => {
    form.addEventListener("submit", async (e) => {
        e.preventDefault()
        const inputName = document.getElementById('name');
        const inputPrice = document.getElementById('price');
        const inputAmount = document.getElementById('amount');
        const inputCategory = document.getElementById('category');
        const inputImage = document.getElementById('imageUrl');
        
        const editedInfo = {
            name: inputName.value,
            price: inputPrice.value,
            amount: inputAmount.value,
            categoryId: inputCategory.value,
            imageURL: inputImage.value
        }
        console.log(editedInfo);
        const URL = "http://localhost:5000/products"
        await editProduct(URL, id, editedInfo)
        location.reload();
    });
    
  }