export const getCatalogData = async (id) => {
    let res  = await fetch(`https://65588446e93ca47020a966c9.mockapi.io/menuCatalog?menuId=${id}`)
    if (res.ok){
        res = await res.json()
        return res[0];
    }else{
        return []
    }
}                           