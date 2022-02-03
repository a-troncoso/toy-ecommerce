const AMIIBO_API_URL = process.env.NEXT_PUBLIC_AMIIBO_API;

export async function fetchAllProducts() {
  try {
    const response = await fetch(`${AMIIBO_API_URL}/amiibo/`);
    const result = await response.json();
    return result;
  } catch (e) {
    console.error("Error fetching all products:", e);
  }
}

export async function fetchProductDetail(id) {
  try {
    const response = await fetch(`${AMIIBO_API_URL}/amiibo?id=${id}`);
    const result = await response.json();
    return result;
  } catch (e) {
    console.error("Error fetching products detail:", e);
  }
}
