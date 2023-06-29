const URL_API = "https://mini-backend-tienda.onrender.com/"

export const endpoints = {
    urlProducts: `${URL_API}products?_expand=category`,
    urlCategories: `${URL_API}categories`,
    urlUsers: `${URL_API}users`
}