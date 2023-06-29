import { deleteProduct } from "../services/product.js";

export const deleteOneProduct = () => {
        
        document.addEventListener("click", async (e) => { 
            if (e.target.classList.contains('delete')) {          
            const isDelete = confirm("¿Está usted seguro o segura de eliminar este movimiento?");
            if (isDelete) {
              const idProduct = e.target.getAttribute("data-id");
              console.log(idProduct);
              const URL = "https://mini-backend-tienda.onrender.com/products"
                await deleteProduct(URL, idProduct);
                location.reload();
            }
        }});
    };
