export async function fetchAllProducts() {
  try {
    const response = await fetch("https://www.amiiboapi.com/api/amiibo/");
    const result = await response.json();
    return result;
  } catch (e) {
    console.error("Error fetching all products:", e);
  }
}
