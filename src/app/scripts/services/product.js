import axios from "axios";


export const deleteProduct = async (url, id) => {
    try {
        const urlProduct = `${url}/${id}`
        const response = await axios.delete(urlProduct);
        return response
        
    } catch (error) {
        console.log(error)
        return error
    }
}

export const editProduct = async (url, id, editedProduct) => {
    try {
        const editUrl = `${url}/${id}`;
        const response = await axios.patch(editUrl, editedProduct);
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
}