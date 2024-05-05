export const imgTop = async () => {
  let res = await fetch(
    `https://65588446e93ca47020a966c9.mockapi.io/categoriesCatalog?menuId=${id}`
  );
  res = await res.json();
  return res;
};
