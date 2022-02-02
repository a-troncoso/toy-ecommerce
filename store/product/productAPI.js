export async function fetchAllProducts() {
  try {
    const response = await fetch("https://www.amiiboapi.com/api/amiibo/");
    const result = await response.json();
    return result;
  } catch (e) {
    console.error("Error fetching all products:", e);
  }
}

export async function fetchProductDetail(id) {
  try {
    const response = await fetch(
      `https://www.amiiboapi.com/api/amiibo?id=${id}`
    );
    const result = await response.json();
    return result;
  } catch (e) {
    console.error("Error fetching products detail:", e);
  }
}
