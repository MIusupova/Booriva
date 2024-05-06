export const getCatalogData = async (id) => {
    let res  = await fetch(`https://65588446e93ca47020a966c9.mockapi.io/menuCatalog?menuId=${id}`)
    res = await res.json()
    return res[0];
} 
export const getCatalogAllData = async (id) => {
    let res  = await fetch(`https://6569c6cede53105b0dd7a33a.mockapi.io/product?categoryId=${id}`)
    res = await res.json()
    return res;
}                     